|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.message_retry)  | 12.2. System Console Commands |  [Next](console_commands.pager.php) |

<a name="console_commands.module"></a>
## Name

module — manage loaded modules online

## Synopsis

`module hooks`

`module list`

<a name="console_commands.module.version_3"></a>
## Description

The **module list**      command displays a full list of all loaded modules, as illustrated below:

```
16:48:23 /tmp/2025> module list
Module: ec_logger:ec_logger
  Scope_Name: ec_logger
  Instance_Name: ec_logger
  Enabled: enabled
  API: Logger
  Name: ec_logger.c
  Description: Momentum minimalistic logging module
Module: bounce_logger:bounce_logger
  Scope_Name: bounce_logger
  Instance_Name: bounce_logger
  Enabled: enabled
  API: Logger
  Name: $RCSfile: bounce_logger.c,v $
  Description: Eclerity minimalistic logging module $Revision: 1.51 $
Module: statp:statp
  Scope_Name: statp
  Instance_Name: statp
  Enabled: enabled
  API: Generic
  Name: stats_producer.c
  Description: Stats producer module
Module: ds_core
  Scope_Name: ds_core
  Enabled: enabled
  API: Singleton
  Name: ds_core.c
  Description: generic datasource module
...
```

In addition to supplying information about your configuration, the scope name and the instance name shown by the **module list**      command are required when issuing module-specific commands. For more information see [the section called “Module-specific Commands”](console_commands.module#console_commands.module.version_3.module.specific "Module-specific Commands").

**module hooks**       displays all the dynamic hooks in the system, along with each hook's prototype. The output should be similar to the following:

```
core_config_get_domain_bounces_inline_original_data
	int(generic_module_infrastructure*,int*,constchar*,void**)
core_config_get_reserve_maintenance_interval_data
	int(generic_module_infrastructure*,int*,void**)
...
```
<a name="console_commands.module.version_3.module.specific"></a>
### Module-specific Commands

Before issuing commands to a module from the system console, you need to know whether a module is a "Singleton" or not. You can determine this using the **module list**      command. For non-singleton modules you issue module commands using the Scope_Name (also know as the module name) and the Instance_Name. For example, if you have a bounce_logger module defined in the following way, `bounce_logger "bounce_logger1" { ... }`, issue the command **bounce_logger:*`bounce_logger1`* reopen logs**             to reopen the logs. For a list of the modules that have console commands see [Section 13.3, “Module-Specific Console Commands”](module_specific_console_commands "13.3. Module-Specific Console Commands").

For modules where the API is defined as a Singleton (the ds_core module, for example) there is no Instance_Name. Issue singleton module commands using the Scope_Name only.

<a name="idp16182272"></a>
### Setting and Getting Module Options

All module-specific commands related to setting or getting module options have been removed in version 3.0\. For example, you can no longer set the Sieve cache size in the following way: **sieve set cache_size 300** . Again, in order to get or set module options, you need to use the **module list**      command first to determine whether a module is a singleton or not. Use the following syntax to set or get module-specific options: **config {set | get} Scope_Name [Instance_Name] option [value]** . Note that there is no ‘`:`’ between the Scope_Name and the Instance_Name. You cannot specify the Instance_Name if the module is a singleton. For a complete discussion of the **config** command see [config](console_commands.config "config").

In version 3.0, modules no longer have id numbers, so you can not enable or disable them using the command **module disable *`module_number`*** . Instead use the "config set" syntax, for example, **config set bounce_classifier *`bounce_classifier1`* enabled 1** .

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.message_retry)  | [Up](console.commands.non-module.php) |  [Next](console_commands.pager.php) |
| message retry  | [Table of Contents](index) |  \pager |
