|     |     |     |
| --- | --- | --- |
| [Prev](modules.exim_logger)  | Chapter 71. Modules Reference |  [Next](modules.host_fingerprint) |

## 71.35. fbl - Feedback Loop

<a className="indexterm" name="idp21825680"></a>

The feedback loop (fbl) module is used to manage feedback loop services offered by many ISPs. It provides for FBL message processing, original message header processing, and log file generation based on these services.

Providers such as Yahoo, AOL, Hotmail, Comcast, and others offer feedback loop services to qualified senders. The ISP will send a notification email to the sender every time that one of their users clicks on a “This is Spam” or “Report Abuse” type button. Qualified senders are usually required to maintain specific receiving addresses to close the feedback loop such as `abuse@domain.com` and `unsubscribe@domain.com`. When Momentum receives this message, it extracts the X-MSFBL header, decodes it, and then logs it.

Typically, this notification email is in Abuse Reporting Format (ARF), yet not all ISPs use the ARF format. Some use the "Junk e-Mail Reporting Program" (JMR). You can still use the fbl module with the JMR format. However, it lacks the message/feedback-report MIME part which means that you cannot know the feedback type.

### Warning

If you change the configuration of this module at runtime, you must restart the ecelerity process in order for your changes to take effect. To do this issue the command: **`/etc/init.d/ecelerity restart`**         .

### 71.35.1. Configuration

The fbl module is configured through a configuration file using a stanza such as:

<a name="example.fbl.3"></a>

**Example 71.62. fbl Configuration**

```
fbl {
  Auto_Log = true # default is "false"
  Log_Path = “/var/log/ecelerity/fbllog.ec” # this is the default
  Addresses = ( “^.*@fbl.foo.com” ) # default is unset
  Header_Name = “X-MSFBL” # this is the default
  User_String = “%{vctx_mess:my_context_variable}” # default is unset
  Message_Disposition = “blackhole” # default is blackhole, also allowed to set to "pass"
  Condition = “can_relay” # default is unset, should be name of a vctx entry
}
```

In this configuration, the module will catch all mail addressed to the `fbl.foo.com` domain, process it as an FBL notification message, log it to `/var/log/ecelerity/fbllog.ec`, and then blackhole the message. Outgoing messages will have a custom header injected (in this case named `X-MSFBL`) with sending information encoded to support later extraction when a feedback loop is triggered.

The fbl module can be used in conjunction with the jlog module to enable real-time reading of the log using the following syntax for the Log_Path option:

`Log_Path = "jlog:///var/log/ecelerity/fbllog.rt=>master"`

For more information about the jlog module see [Section 71.43, “jlog – jlog-Formatted Logging”](modules.jlog "71.43. jlog – jlog-Formatted Logging").

For details about the fbllog file format, see [Section 35.4, “`fbllog`”](log_formats.fbllog "35.4. fbllog").

The following are options valid in the fbl scope:

<dl className="variablelist">

<dt>Addresses</dt>

<dd>

List of one or more regular expressions defining the mailboxes for receiving FBL reports

In order to be processed, these addresses must be added to the [relay_domains](conf.ref.relay_domains "relay_domains") option.

### Warning

If a domain in this list also appears in the [bounce_domains](conf.ref.bounce_domains "bounce_domains") list, then the incoming FBL complaint message destined to that domain will be logged to **both** [bouncelog](log_formats.bouncelog "35.3. bouncelog") and [fbllog](log_formats.fbllog "35.4. fbllog").

</dd>

<dt>Auto_Log</dt>

<dd>

Whether or not to log to the default log file. Default value is `false`.

In order for header insertion to work, this option must be set to `true` and the [enable_fbl_header_insertion](conf.ref.enable_fbl_header_insertion "enable_fbl_header_insertion") option must be enabled.

</dd>

<dt>Condition</dt>

<dd>

This option should be set to the name of a message context variable. By default, this option is unset.

It is used to enable conditional FBL message markup. You can run in 'auto' mode defining which messages are marked up for FBL processing based on which bindings/domains have `Enable_FBL_Header_Insertion` defined as `enabled` within their scope. Otherwise, you can drive the fbl markup logic through policy scripting by setting the context variable defined in the FBL context variable setting.

</dd>

<dt>Header_Name</dt>

<dd>

Defines the name of the header in which the MTA will include encoded information. Default value is `X-MSFBL`.

By default, this is a base64 encoded string with the following format: `rcptlocalpart@rcptdomain@binding@bindinggroup@userstring`.

On inbound processing, the MTA will look for the `header` and extract the data. If the header is not found in the original message, no FBL processing will be performed and the message will be handled per the `Message_Disposition` setting.

</dd>

<dt>Log_Path</dt>

<dd>

Defines the log file. Default value is `/var/log/ecelerity/fbllog.ec`.

If you want to aggregate fbl logs on the cluster manager, add `fbllog = "/var/log/ecelerity/fbllog.cluster"` to the `logs` dictionary of the cluster module. For details, see [logs](modules.cluster#option.logs.dictionary) .

For an sample configuration see [Section 26.2, “Centralized Logging Example”](cluster.config.logging.centalized.logging "26.2. Centralized Logging Example").

</dd>

<dt>Message_Disposition</dt>

<dd>

Set to `blackhole` to dispose after logging or `pass` to pass the message on to the `Addresses`.

</dd>

<dt>User_String</dt>

<dd>

User-defined string included in the logs.

The validation connection and message contexts are typical candidates for logging (either pre-defined context values or context values that you define through the Policy Editor). If you want to log a context variable that is not predefined, you will need to use a script to pull that value into the validation context in the each_rcpt phase. The each_rcpt phase corresponds to the `EACH RECIPIENT` phase in the policy editor.

The user string uses Sieve++-style macros and expands them, while most other custom logging uses custom_logger-style macros which have a different format.

</dd>

</dl>

### 71.35.2. `Enable_FBL_Header_Insertion` Option

You can select whether to use this module or not by setting the `Enable_FBL_Header_Insertion` option to `enabled` or `disabled`. The `Enable_FBL_Header_Insertion` option is valid in the global, binding, binding_group, and domain scopes. Note that you must also define the fbl module `Auto_Log` as true in order for header insertion to work.

<a name="idp21879808"></a>

**Example 71.63. fbl usage**

```
Enable_FBL_Header_Insertion = disabled

Domain "aol.com" {
   Enable_FBL_Header_Insertion = enabled
}

Binding "foo" {
   Domain "yahoo.com" {
     Enable_FBL_Header_Insertion = enabled
   }
}
```

### 71.35.3. Scripting

**Lua Scripts**

With Lua, FBL scripting is typically implemented by the adaptive module. For more information see [Sweep Rules – Configuring Bounce and FBL Behavior](https://support.messagesystems.com/docs/web-ad/ad.rules.sweep.rules).

|     |     |     |
| --- | --- | --- |
| [Prev](modules.exim_logger)  | [Up](modules) |  [Next](modules.host_fingerprint) |
| 71.34. exim_logger – Exim Logging  | [Table of Contents](index) |  71.36. fingerprint – Host Fingerprinting |

