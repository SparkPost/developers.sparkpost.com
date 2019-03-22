| [Prev](modules.overview)  | Chapter 13. Modules |  [Next](modules.summary) |

## 13.1. Module Overview

All modules in version 3.0 load automatically if you use any of the options they declare, or use other resources provided by them. In order to set configuration options, modules must be explicitly loaded. However, you need not explicitly declare modules, such as the jlog module, that don't have options (apart from the `enabled` and `debug_level` options common to all modules).

Examples of modules that will typically load implicitly are:

*   antivirus

*   cidrdb

*   compress_spool

*   http_io

*   jlog

*   persist_io

*   sievelib

*   suppress_spool

Modules are most easily configured from the web console as described in [Section 3.8.1.5, “Changing Module Configuration Options”](web3.administration#web3.module_config "3.8.1.5. Changing Module Configuration Options") but they can also be configured by manually altering the configuration file or by setting options using the system console. Use the [config](console_commands.config "config") command to set configuration options from the system console.

Some modules, typically antivirus modules, must be loaded in "passive" mode. To load a module in passive mode, use the web console to set the `Enabled` option to `false`. Use the following syntax if you are manually changing the `ecelerity.conf` file:

```
symbolname "name" {
  Enabled = false
  ...
}
```

The `Enabled` option is common to all modules as is the `Debug_Level` option.

### 13.1.1. Module Debugging

During troubleshooting, it can be useful to have debugging information sent to the paniclog. Module debug levels can be set in the `ecelerity.conf` file, from the web console or from the system console. The default debugging level is `ERROR`, which will cause `ERROR` and `CRITICAL` messages to be logged to the paniclog. Find below an example of setting the debug level of the bounce_logger module:

```
bounce_logger "bounce_logger1"
{
   debug_level = "NOTICE"
   bouncelog = "/var/log/ecelerity/bouncelog.ec"
   bouncelog_mode = 0644
   heartbeat = 60
}
```

For a list of all the debug levels see [Table 9.28, “Debug levels”](conf.ref.debug_flags#conf.ref.debug.levels "Table 9.28. Debug levels"). Setting debug levels from the system console is described in [the section called “Setting Module-Level Debugging from the System Console”](module_specific_console_commands.using#modules.console.debugging "Setting Module-Level Debugging from the System Console").

Be sure to turn off debugging when you are finished otherwise log files can become excessively large.

If the module that you wish to debug is not explicitly loaded, then you must add it to your configuration file.

| [Prev](modules.overview)  | [Up](modules.overview) |  [Next](modules.summary) |
| Chapter 13. Modules  | [Table of Contents](index) |  13.2. Summary Module Information |
