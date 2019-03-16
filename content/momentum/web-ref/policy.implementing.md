| [Prev](default.policy.scriptlets)  | Chapter 5. Implementing Policy with Momentum |  [Next](policy.context-based-on-ip) |

## 5.4. Implementing Policy Using Sieve

Implementation of your site policy is a matter of loading and configuring the appropriate modules via `ecelerity.conf`, and, optionally, using the sieve module to make decisions based on the validation context. A number of the available modules predate the sieve module, and can be configured to either take an active role in the validation process, or to simply store the processing results in the validation context.

### Note

In Momentum version 3.x, Sieve continues to be supported but scripting via Lua is preferred for the following reasons:

*   Sieve has no concept of looping or iterators

*   Simple comparative logic in Sieve is awkward to author

*   Unlike Sieve, new modules do not need explicit C development to enable Lua capabilities

### Warning

You cannot use Sieve with multiple event loops. If you include the Sieve module in your configuration file, Momentum will not start up and a warning will be written to the panic log. If you are upgrading to a multiple event loop configuration of Momentum, be sure to remove the Sieve module from your configuration file.

The advantage of allowing a module to perform unilateral validation is that the Momentum configuration is restricted to just the one `ecelerity.conf` file, making it conceptually a lot simpler to configure Momentum. The trade off is simplicity versus flexibility; we recommend that larger sites deploy the modules in a passive configuration and leave the final policy decisions to scripts implemented in Sieve. The `Enabled` option can be set to `false` for any module. However, the effect that this has on modules differs on a module by module basis. For some modules, it will have no effect. But, the idea is that validation modules loaded in passive mode will **not** have their validation hooks called automatically. Rather, the calls will be driven by a Sieve action associated with the module. For example, the Sieve action 'antivirus' will drive the antivirus modules such as the 'clamav' module. The rest of this chapter assumes that you are deploying such modules in a passive configuration.

Once you have selected the modules that you want to use ([Section 13.2.1, “All Modules”](modules.summary#modules.summary.all.modules "13.2.1. All Modules") has a list of the available modules) you need to configure the sieve module to run your Sieve script. For example, if you're using the url_ripper module to examine the bodies of messages, you need to write a Sieve script that will run in the data phase, after the url_ripper has run. You'll want to configure `ecelerity.conf` as shown in [Example 5.7, “Configuring the url_ripper for use with Sieve”](policy.implementing#policy.configure.sieve "Example 5.7. Configuring the url_ripper for use with Sieve").

<a name="policy.configure.sieve"></a>

**Example 5.7. Configuring the url_ripper for use with Sieve**

```
url_ripper "url_ripper" {
  enabled = false
  base = "multi.surbl.org"
  bits [
    # RBL hits are compared against this mapping, causing
    # the right hand side of the following statements to be
    # set in the validation context if the bits on the left
    # hand side are set.
    0.0.0.1 = "list1_hits"
    0.0.0.2 = "list2_hits"
    0.0.0.4 = "list3_hits"
    0.0.0.8 = "list4_hits"
    0.0.0.16 = "list5_hits"
    0.0.0.32 = "list6_hits"
    0.0.0.64 = "list7_hits"
    0.0.1.0 = "list8_hits"
  ]
  values [
    127.0.0.2 = "simple_hits"
  ]
  address_headers = ( "Return-Path" "From" "Sender" "Reply-To" "Errors-To")

}

# You almost always want to list the sieve module as the very last
# validation module in your ecelerity.conf, so that the other modules
# run before it
sieve "sieve1" {
  script "data_phase1" {
    source = "/opt/msys/ecelerity/etc/conf/default/my-data.siv"
  }
}
```

This configuration will run the url_ripper module after the message body has been received, and look up all the URLs from the message and check them against the configured RBL. Once that is complete, the sieve module will then run the Sieve script contained in `/opt/msys/ecelerity/etc/site/my-data.siv`. [Example 5.8, “An Example Sieve Policy for the Data Phase”](policy.implementing#policy.example.sieve.data.script "Example 5.8. An Example Sieve Policy for the Data Phase") demonstrates a sample site policy.

<a name="policy.example.sieve.data.script"></a>

**Example 5.8. An Example Sieve Policy for the Data Phase**

```
if vctx :contains "list1_hits" "" {
  # we found URLs or IP addresses that match 0.0.0.1 (list1)
  # For this example, we decide that we don't want the spam mail
  # so we're going to reject it, but first, we're going to retaliate
  # against the offender by imposing a time cost.
  # ec_tarpit causes the connection to be put on hold for a while
  # (60 seconds), which is a cheap operation for Momentum, but is comparatively
  # expensive for a spammer.
  ec_tarpit 60 "spam:list1 tarpit";
  # after the tarpit time limit expires, we'll reject the mail
  ec_action 550 "5.7.1 reject content [list1]" "spam:Known Spam Source";
}

# similar actions can be taken on the other lists configured:
if vctx :contains "list2_hits" "" {
  ec_tarpit 60 "spam:list2 tarpit";
  ec_action 550 "5.7.1 reject content [list2]" "spam:Known Spam Source";
}

# and so on
```

This example makes use of the Sieve counter mechanism to keep track of how you're handling mail. The first call to `ec_tarpit` uses `spam:list1 tarpit` as the counter name. This event is counted by Sieve as an informational event. The `ec_action` call counts the event as a rejection. You can view the current counters by issuing **sieve stats**       via **ec_console**.

The convention for naming counters is to use a short category name, followed by a colon character, followed by a more descriptive name.

| [Prev](default.policy.scriptlets)  | [Up](policy) |  [Next](policy.context-based-on-ip) |
| 5.3. Default Policy Scriptlets  | [Table of Contents](index) |  5.5. Setting Context Based on Connecting IP |
