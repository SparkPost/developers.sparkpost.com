|     |     |     |
| --- | --- | --- |
| [Prev](listeners)  | Chapter 15. Configuration Overview |  [Next](conf.ref.ecelerity.conf) |

## 15.5. Modules

Momentum's module API is at the core of how it is extended. When a module is loaded, it is named based on the *`module_name`* specified in the configuration. Some modules can have multiple instances loaded with different configurations (e.g. to log different sets of information into different log files), while other modules are singletons and can only be loaded once.

All modules load automatically if you use any of the options they declare or use other resources provided by them. However, the module must be explicitly loaded to set its configuration options. Note that you do not need to explicitly declare modules that do not have options (apart from the `enabled` and `debug_level` options common to all modules). To determine if the module is loaded implicitly, refer to the specific module in [Chapter 71, *Modules Reference*](modules "Chapter 71. Modules Reference") .

### 15.5.1. Modules Configuration

Modules can be configured by altering the configuration files or by setting options with the **config** command from the console.

Generally, modules are defined in the configuration files as follows:

modulename "*`instancename`*" {
  option1 = value1
  option2 = value2
  ...
}

Most modules have a module name, a scope name, and one or more instance names. However, singleton modules do not have instance names and can only be loaded once. To determine whether a module is a singleton, refer to [Chapter 65, *Modules Summary*        ](modules.summary.all.modules "Chapter 65. Modules Summary") or use the **module list**      command from the console. The following is an example partial output:

```
...
Module: ds_core
  Scope_Name: ds_core
  Enabled: enabled
  API: Singleton
  Name: ds_core.c
  Description: generic datasource module
Module: ec_logger:ec_logger
  Scope_Name: ec_logger
  Instance_Name: ec_logger
  Enabled: enabled
  API: Logger
  Name: ec_logger.c
  Description: Momentum minimalistic logging module
...
```

Whether a module is a singleton effects how module-specific console commands are invoked. For details, see [Section 37.3, “Using Module-Specific Console Commands”](module_specific_console_commands.using "37.3. Using Module-Specific Console Commands").

You can also set configuration options from the console at runtime. Note that you also need to know whether a module is a singleton to set options using this method. For details, see [Section 37.4, “Setting and Getting Module Options from the Console”](modules.options.console "37.4. Setting and Getting Module Options from the Console").

Some modules (typically antivirus modules) must be loaded in "passive" mode. To load a module passively, set the `enabled` option to `false`. For example, use the following syntax in the `ecelerity.conf` file:

```
symbolname "name" {
  enabled = false
  debug_level = DEBUG
  ...
}
```

Note that the `enabled` and `debug_level` options are common to all modules.

### 15.5.2. Module Debugging

During troubleshooting, it can be useful to have debugging information sent to the `paniclog`. Module debug levels can be set in the configuration files or from the console. Note that if the module that you wish to debug is not explicitly loaded, you must add it to your configuration file. The default debugging level is `ERROR`, which will cause `ERROR` and `CRITICAL` messages to be logged to the `paniclog`.

To set module debug levels in your configuration, set the `debug_level` option within the module stanza:

modulename "*`Instance_Name`*" {
  ...
  debug_level = DEBUG
}

The following is an example of setting the debug level of the bounce_logger module in the `ecelerity.conf` file:

```
bounce_logger "bounce_logger1"
{
   debug_level = "NOTICE"
   bouncelog = "/var/log/ecelerity/bouncelog.ec"
   bouncelog_mode = 0644
   heartbeat = 60
}
```

To set module debug levels in the console, use the **config** command:

config set *`Scope_Name`* *`Instance_Name`* Debug_Level *`value`*

The following is an example of setting the debug level of the bounce_logger module in the console:

`config set bounce_logger bounce_logger1 Debug_Level DEBUG`

The debug level is set in the same way as any other module option. For a list of all the debug levels, see [Table 72.1, “Debug levels”](conf.ref.debug_flags#conf.ref.debug.levels "Table 72.1. Debug levels").

Be sure to turn off debugging when you are finished, otherwise log files can become excessively large.

### 15.5.3. Creating and Installing a Compiled Lua Module

You can build a native-C module that implements Lua functionality. A sample module with extensive notes is provided in the `/opt/msys/ecelerity/docs/lua_sample.c` file. This sample adds functionality to enable suspend and resume actions and the ability to receive core Momentum data structures as parameters.

The examples in this file are trivial but demonstrate best-practice coding paradigms for integrating with Lua. To build these examples perform the following:

1.  During installation, install the Ecelerity developer tools on the build machine. (To add this package after installation, download msys-ecelerity-devel-*`version.os.arch`*.rpm from the Message Systems website.)

2.  Follow the instructions in `/opt/msys/ecelerity/docs/lua_sample.c` and compile the source code using `/opt/msys/ecelerity/bin/ecxs`.

    shell> /opt/msys/ecelerity/bin/ecxs -c *`/path/to/`*lua_sample.c
3.  Install the module so that it can be found at runtime:

    ```
    shell> cp lua_sample.so /opt/msys/ecelerity/libexec/lua
    shell> chmod +x /opt/msys/ecelerity/libexec/lua/lua_sample.so
    ```

To run the example, create the following Lua script using the instructions given at [Section 62.2.4, “Creating Policy Scripts”](implementing.policy.scriptlets#policy.best.practices "62.2.4. Creating Policy Scripts"):

```
require("lua_sample");
local mod = {};

function mod:validate_data(msg, ac, vctx)
  print("size", lua_sample.size_by_two(msg))
  lua_sample.sleep(5);
  print("after sleep")
  print("answer", lua_sample.mul_by_seven(6));
end

msys.registerModule("sample", mod);
```

Save this file as `samplescript.lua`.

Configure the following scriptlet stanza in your `ecelerity.conf` file:

```
scriptlet "scriptlet" {
  script "sample" {
   source = "samplescript"
  }
}
```

For detailed information about how Lua is implemented in Momentum, see [Section 71.60, “scriptlet - Lua Policy Scripts”](modules.scriptlet "71.60. scriptlet - Lua Policy Scripts") and [Section 62.2, “Policy Scriptlets”](implementing.policy.scriptlets "62.2. Policy Scriptlets").

|     |     |     |
| --- | --- | --- |
| [Prev](listeners)  | [Up](conf.overview) |  [Next](conf.ref.ecelerity.conf) |
| 15.4. Listeners  | [Table of Contents](index) |  15.6. `ecelerity.conf` File |

