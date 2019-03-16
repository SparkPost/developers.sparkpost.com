| [Prev](executable.ec_dkim_ctl)  | 11.2. Executable Commands |  [Next](executable.ec_jre_setup.php) |

<a name="executable.ec_dump_config"></a>
## Name

ec_dump_config — output the `ecelerity.conf` file as XML

## Synopsis

`/opt/msys/ecelerity/bin/ec_dump_config` [ -c *`configfile`* ] [ -e *`extdir`* ] [ -f *`outputfile`* ]

<a name="idp13396864"></a>
## Description

**ec_dump_config** will generate an XML version of the default configuration file and output to `STDOUT`. If the configuration is invalid, an error message is displayed. The following options can be used to specify input and output:

<dl className="variablelist">

<dt>-c *`configfile`*</dt>

<dd>

Specify a Momentum configuration file for input.

</dd>

<dt>-e *`extdir`*</dt>

<dd>

Load modules from an external directory rather than the default.

</dd>

<dt>-f *`outputfile`*</dt>

<dd>

Specify an output file for the XML version of the configuration. Otherwise output is sent to stdout.

</dd>

</dl>

You can use this script to help diagnose errors in configuration files. For example, declaration of the non-existent option, `invalid_option`, in a global scope yields the following output:

```
shell> /opt/msys/ecelerity/bin/ec_dump_config
[Tue 18 Oct 2011 13:51:50] No module provides capability 'config.Global:invalid_option'.
[Tue 18 Oct 2011 13:51:50] CFG-07961 No module provides capability 'config.Global:invalid_option'.
Syntax error in /opt/msys/ecelerity/etc/conf/default/ecelerity.conf at line 4 near 'invalid_option'
'invalid_option' is not a valid scope name in scope 'Global'
Reconfigure failed.
Global configuration error.
```
<a name="idp13408720"></a>
## See Also

[migrate_regex_binding2](executable.migrate_regex_binding2 "migrate_regex_binding2"), [ec_migrate_conf](executable.ec_migrate_conf.php "ec_migrate_conf") and [validate_config](executable.validate_config.php "validate_config")

| [Prev](executable.ec_dkim_ctl)  | [Up](exe.commands.details.php) |  [Next](executable.ec_jre_setup.php) |
| ec_dkim_ctl  | [Table of Contents](index) |  ec_jre_setup |
