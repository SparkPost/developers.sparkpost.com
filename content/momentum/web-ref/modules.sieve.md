|     |     |     |
| --- | --- | --- |
| [Prev](modules.sendmail_logger)  | Chapter 14. Modules Reference |  [Next](modules.sievelib) |

## 14.64. sieve – The Sieve Module

<a class="indexterm" name="idp21209504"></a>

Sieve script management is handled through the sieve module. This module allows for Sieve scripts to be specified for each phase of the SMTP transaction, online reconfiguration and reloading of Sieve scripts, and access to counters and metrics stored in Momentum's internal Sieve engine.

### Note

In Momentum version 3.x, Sieve continues to be supported but scripting via Lua is preferred for the following reasons:

*   Sieve has no concept of looping or iterators

*   Simple comparative logic in Sieve is awkward to author

*   Unlike Sieve, new modules do not need explicit C development to enable Lua capabilities

### Warning

You cannot use Sieve with multiple event loops. If you include the Sieve module in your configuration file, Momentum will not start up and a warning will be written to the panic log. If you are upgrading to a multiple event loop configuration of Momentum, be sure to remove the Sieve module from your configuration file.

The easiest way to configure the sieve module is by using the web UI. This procedure is described in [Section 3.8.1.7, “Adding a Sieve Module”](web3.administration#web3.adding_sieve_module "3.8.1.7. Adding a Sieve Module").

### 14.64.1. Loading and Configuring the Module

The sieve module is a "Validate" module and supports a number of configuration options. For the most part, they configure which scripts should be run in the various phases of the SMTP transaction.

<a name="example.sieve.3"></a>

**Example 14.92. sieve module**

```
sieve "sieve1" {
  script mailfrom_phase1 {
    source = "/path/to/script.siv"
  }
}
```

The script scope requires a name that is a valid script phase. Valid phases are:

*   accept_phase1

*   accept_phase2

*   connect_phase1

*   connect_phase2

*   ehlo_phase1

*   ehlo_phase2

*   mailfrom_phase1

*   mailfrom_phase2

*   rcptto_phase1

*   rcptto_phase2

*   data_phase1

*   data_phase2

*   spool_phase1

*   spool_phase2

*   each_rcpt_phase1

*   each_rcpt_phase2

*   set_binding_phase1

*   set_binding_phase2

Phase1 and Phase2 allow Sieve scripts to be split across two files while remaining completely self-contained and operational. This is useful for separating site-specific Sieve logic from vendor and/or third party Sieve logic. The convention is to run site-specific scripts during phase1 and vendor supplied rulesets during phase2.

If the end of phase 2 is reached without any terminal action, then there is an implicit "keep" as described in the Sieve specification. However, if the end of phase 1 is reached without any terminal action, then phase 2 is executed.

### Note

Unlike scripts that are included using `ec_include`, Sieve scripts included in the sieve module stanza are not periodically refreshed. However, all scripts are refreshed when the sieve cache is flushed using the ec_console command. *If you make changes to any Sieve scripts be sure to flush the Sieve cache.*                                                                         For more information about this command see [Section 14.64.3.3, “Flushing the Cache”](modules.sieve#modules.sieve.sieve.flush.cache "14.64.3.3. Flushing the Cache").

Some Sieve functions are specific to particular Sieve phases. For a table of Sieve functions and their phases see [Table 16.1, “Sieve functions”](sieve.ref3.function.summary#table-sieve-functions "Table 16.1. Sieve functions").

**Attaching sieve scripts to arbitrary hook points**

It's also possible to arrange for a Sieve script to be run at any hook point by using the following syntax:

<a name="example.sieve.hook.3"></a>

**Example 14.93. sieve hook example**

```
sieve "sieve1" {
  hook "core_log_permanent_failure_v1" {
    source = "/path/to/other-script.siv"
    async = "true"
    pool = "IO"
  }
}
```

The configuration snippet above causes Sieve to register a hook implementation for the core_log_permanent_failure_v1 hook. (See [ec_rfc3464_delivery_status](sieve.ref.ec_rfc3464_delivery_status "ec_rfc3464_delivery_status") for more information about this hook point. When it is called, it interrogates the hook prototype to determine which arguments reference structures such as the validation_context and email_message and uses those to prepare an execution context for running the script.

Prior to version 3.1, the default value for `async` is `true`. When `async` is set to `true`, the hook arguments will be copied into a job that will run in one of the thread pools. If `pool` is not specified, the job will run in the `CPU` pool. In any case, the threadpool referenced by this option must be defined. Any hook arguments of type `ec_message` will be referenced rather than copied, allowing you to potentially modify their properties from your hook. Excercise caution in this case, as other threads of execution may also be operating on the same message.

As of version 2.2.2.40 the `async` option may also be set to `ref` or `snapshot`. The `true` value used in earlier versions of the product is equivalent to `ref` and its behavior is described above. The `snapshot` value will create a snapshot of the message (that must not be modified) which is well suited for logging the state of the message asychronously from the main path of execution.

**Configuration Change. ** As of version 3.1, the default value for `async` is `false`.

If the `async` option is set to `false`, then the hook will execute synchronously, blocking the caller.

### Warning

Set `async` to `false` when using the core_final_validation_hook otherwise you may experience spool corruption.

Sieve scripts implementing the core_final_validation hook should not modify the message since it may have already been written to the spool.

There is one additional option to control the return value from the hook; by default Sieve will return `0` from its hook implementation. If you need to change that, then you can specify an integer return value via the `return`. Most users will not need this feature.

The following example shows how to hook the generation of messages by the delay DSN module (see [Section 14.25, “delay_dsn – Delay DSN Generation”](modules.delay_dsn "14.25. delay_dsn – Delay DSN Generation") for more details on delay DSNs). This uses `return` to indicate that a custom delay DSN has been injected.

<a name="example.sieve.delay_dsn.3"></a>

**Example 14.94. delay_dsn_send_notification example**

```
sieve "sieve1" {
  hook "delay_dsn_send_notification" {
    script = "/path/to/another-script.siv"
    async = "false"
    return = "1"
  }
}
```

This is a very powerful feature that allows great flexibility. This flexibility allows you to configure Momentum in ways that have not been tested for stability by us. We strongly recommend that you thoroughly test your configuration before deploying it in production to avoid any possible unpleasant surprises.

**Script cache options in the sieve scope**
```
cache_size = 200
  cache_life = 260
```

Since Momentum 2.1, all script loading, either for globally configured scripts or scripts included via [ec_include](sieve.ref.ec_include "ec_include") is passed through the script fetching and caching layer. Once a script is compiled, its compiled form is cached so that it doesn't need to be recompiled each time it is used. Each cache item has a time-to-live, and once that time expires, the item is removed from the cache. Compiled scripts are reference counted, so the script resources are released when the final reference to it is released. Globally configured scripts are referenced directly by the sieve module, so they will persist even after the cache entry has expired.

The `cache_size` and `cache_life` directives control the number of compiled script cache entries to maintain, and the time-to-live for those entries. The compiled script cache is used whenever your Sieve scripts use the `ec_include` action to include another Sieve script. Both of these values are tunable online.

Each cached script included using the `ec_include` function has a time-to-live determined by the sieve module configuration option, `cache_life`, so cached scripts are periodically refreshed. However, if you make changes to a script, a best practise is to flush the Sieve cache immediately. For more information see [Section 14.64.3.3, “Flushing the Cache”](modules.sieve#modules.sieve.sieve.flush.cache "14.64.3.3. Flushing the Cache").

**runtime_error in the sieve scope**

The `runtime_error` option affects how Sieve handles certain kinds of errors (for instance, passing incorrect parameters to Sieve functions, failed includes, low memory conditions). The default is to `fail` the incoming session with a transient error response, but you may set it to `continue` to have the script continue executing past the failure point.

The ability to change this behavior was introduced in 2.2, and the default was changed to `fail`. In prior releases, the default was effectively `continue` and this could not be altered.

### 14.64.2. Sieve Scripts and Revision Control

<a class="indexterm" name="idp21282608"></a>

Sieve scripts can also make use of the revision control system. To do this store your Sieve scripts in a directory below the `/opt/msys/ecelerity/etc/conf/default/` directory and use the [eccfg](executable.eccfg "eccfg") command to manage that directory.

### Note

Files and directories that are under revision control should be owned by `ecuser`.

You could just as easily move the sieve directory into the `global/` path if you wanted to share those files across subclusters.

### 14.64.3. sieve Management Using Console Commands

In version 3.0, the **sieve set** , **sieve unset**       and similar commands have been removed, as the configuration is now managed by the configuration system. As a replacement for **sieve set mailfrom_phase1 /path/to/script.siv**                                         you would use **config set sieve sieve1 script mailfrom_phase1 source /path/to/script.siv** .

The sieve module can be controlled through the `ec_console`; the following commands are available:

### Note

In version 3.0, non-singleton module commands are issued using *`Scope_Name`*:*`Instance_Name`* followed by the command. Use the **module list**      command from the system console to determine the scope name or instance name of a module. If a module does not have an instance name it is a singleton.

As of version 3.0, all module-specific commands related to setting or getting module options have been removed. Use the following syntax to set or get module-specific options: **config {set | eval | get} *`Scope_Name [Instance_Name] option [value]`*** . Note that there is no ‘`:`’ between the Scope_Name and the Instance_Name and that the Instance_Name is not used with singleton modules.

**14.64.3.1. Statistics**sieve:*`sieve1`* stats

Displays current Sieve statistics. Sample output is reproduced below:

```
sieve statistics since: 2004-11-24 00:58:48
mailfrom_phase2:blacklist (5xx) = 205
data_phase2:spam:SURBL (5xx) = 196
mailfrom_phase2:spam:SURBL (5xx) = 72
data_phase2:spam tarpit (informational) = 993
mailfrom_phase2:spam tarpit (informational) = 5303
mailfrom_phase2:spoof tarpit (informational) = 1102
:sieve-processed (informational) = 44823
data_phase1:bad attachment tarpit (informational) = 2008
data_phase2:spam:Ratware detected (5xx) = 36
mailfrom_phase2:spam:Known Spam Source (5xx) = 5231
rcptto_phase2:non-existent user tarpit (informational) = 89
mailfrom_phase2:policy:Fraudulent sender (5xx) = 1102
connect_phase2:spam:Ratware senders denied (4xx) = 1046
rcptto_phase2:policy:Blocked dictionary attack (5xx) = 89
data_phase2:spam:Known Spam Source [content] (5xx) = 797
rcptto_phase2:policy:Local domain spoofing attempt (5xx) = 2686
data_phase1:virus:Possibly unsafe attachment blocked (5xx) = 2008
data_phase1:policy:No Bounces for un-manned addresses (5xx) = 90
```
**14.64.3.2. Resetting counters**sieve:*`sieve1`* reset

Reset the counters displayed by the `stats` command.

In Momentum version 1.2.5 and higher, this will also zero out the summary statistics, equivalent to issuing a `summary reset` command at the console.

**14.64.3.3. Flushing the Cache**sieve:*`sieve1`* flush cache

This command removes all Sieve scripts from the cache. Use this command whenever you update a Sieve script. Any cached entries will be flushed and you should see a message similar to:

`flushed 3 entries from the script cache`

This command flushes everything from the cache, including each statically configured script, plus any script that was included and has not yet passed the cache_life duration. If no Sieve scripts are currently cached, the number of entries reported will be "`0`".

**14.64.3.4. Testing Content**sieve:*`sieve1`* test *`phase`* *`script`*

This command verifies that the script content will compile and that it can run in the phase specified. Valid phases are: accept, connect, ehlo, mailfrom, rcptto, data, spool, each_rcpt and set_binding. Note that the actual script content is tested and not a filename. This is intended to be used by the web console to validate a custom script prior to saving and applying it.

**14.64.3.5. Testing Files**sieve:*`sieve1`* testfile *`phase`* *`filename`*

This command verifies that the script in the specified file will compile and run in the phase specified. Valid phases are: accept, connect, ehlo, mailfrom, rcptto, data, spool, each_rcpt and set_binding.

Error messages are logged to the panic log.

**14.64.3.6. Caching options**

As with any module, you can tune configuration options through the system console:

config set sieve *`sieve1`* cache_size *`size`*
  config set sieve *`sieve1`* cache_life *`seconds`*

Changes made here do not automatically purge the cache; and existing cached items will survive until their lifetime expires. Any new items added to the cache will use the newly configured cache lifetime.

Use the syntax shown above to replace the **sieve set *`option`***                and **sieve unset *`option`***                  commands that were available in version 2.2.


|     |     |     |
| --- | --- | --- |
| [Prev](modules.sendmail_logger)  | [Up](modules) |  [Next](modules.sievelib) |
| 14.63. sendmail_logger – Sendmail-Compatible Logging  | [Table of Contents](index) |  14.65. sievelib – The sievelib Module |
