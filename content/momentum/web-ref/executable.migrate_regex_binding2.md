|     |     |     |
| --- | --- | --- |
| [Prev](executable.mbusd_monitor)  | 11.2. Executable Commands |  [Next](executable.validate_config.php) |

<a name="executable.migrate_regex_binding2"></a>
## Name

migrate_regex_binding2 — migrate regex_binding2 bindings from version 2.2 to version 3.0

## Synopsis

`/opt/msys/ecwebui/scripts/migrate_regex_binding2` [ /path/to/ecelerity.conf ] [ -wc *`working_copy`* ]

<a name="idp14855232"></a>
## Description

**migrate_regex_binding2** converts regex_binding2 module configuration into a Lua script that is editable from the web UI using the policy editor. You only need this tool if you migrate from version 2.2 to version 3.0 and you use the regex_binding2 module.

Typically this tool is used on the `ecelerity.conf.bak` file created by converting your `ecelerity.conf` file using **ec_migrate_conf**. It updates your configuration file to include a scriptlet module with a `script` stanza pointing to the Lua script that replaces the regex_binding2 module.

This script does **not** check the script file or the updated configuration file into the repository. Also, it is up to the user to review the changes made by this program before committing them and running them in a production environment.

It has the following options:

<dl className="variablelist">

<dt>*`/path/to/ecelerity.conf`*</dt>

<dd>

The path to the `ecelerity.conf` file containing regex_binding2 stanzas to convert. If the working copy path is not specified, the Lua file is written to `/opt/msys/ecelerity/etc/conf/default/`.

</dd>

<dt>-wc *`working_copy`*</dt>

<dd>

Optional path to the configuration checkout. The default value is `/opt/msys/ecelerity/etc/conf/default`.

</dd>

</dl>

<a name="idp14867664"></a>
## See Also

[ec_migrate_conf](executable.ec_migrate_conf "ec_migrate_conf"), [Section 14.60, “scriptlet – Module”](modules.scriptlet.php "14.60. scriptlet – Module")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.mbusd_monitor)  | [Up](exe.commands.details.php) |  [Next](executable.validate_config.php) |
| mbusd_monitor  | [Table of Contents](index) |  validate_config |
