| [Prev](executable.lu_pull)  | Chapter 74. Executable Commands Reference |  [Next](p.appendix) |

<a name="executable.validate_config"></a>
## Name

validate_config — check the validity of the configuration files

## Synopsis

`/opt/msys/ecelerity/bin/validate_config`

<a name="idp12707296"></a>
## Description

This script checks the validity of configuration files. It returns the following messages:

*   `Configuration valid` - Your configuration is valid.

*   `No configuration found` - There is no configuration file.

*   *No message is displayed*                      - Your configuration is invalid.

Using the **ec_dump_config** command may provide more information.

This script is especially useful for confirming the validity of manual changes to a configuration file.

<a name="idp10882976"></a>
## See Also

[Section 15.1.4, “Changing Configuration Files”](conf.overview#conf.manual.changes "15.1.4. Changing Configuration Files"), [ec_dump_config](executable.ec_dump_config "ec_dump_config")

| [Prev](executable.lu_pull)  | [Up](exec.cmds.ref) |  [Next](p.appendix) |
| lu_pull  | [Table of Contents](index) |  Part XI. Appendix |

