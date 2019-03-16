| [Prev](executable.migrate_regex_binding2)  | 11.2. Executable Commands |  [Next](console_commands.php) |

<a name="executable.validate_config"></a>
## Name

validate_config — check the validity of the configuration files

## Synopsis

`/opt/msys/ecelerity/bin/validate_config`

<a name="idp14879664"></a>
## Description

This script checks the validity of configuration files. If you configuration is valid you should see the message: `Configuration valid`. If there is no configuration file, the message, `No configuration found`, is displayed.

If your configuration is invalid, no message is displayed. Using the **ec_dump_config** command may provide more information.

This script is especially useful for confirming the validity of manual changes to a configuration file.

<a name="idp14883824"></a>
## See Also

[Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files"), [ec_dump_config](executable.ec_dump_config.php "ec_dump_config")

| [Prev](executable.migrate_regex_binding2)  | [Up](exe.commands.details.php) |  [Next](console_commands.php) |
| migrate_regex_binding2  | [Table of Contents](index) |  Chapter 12. Momentum System Console Commands Reference |
