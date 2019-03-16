| [Prev](executable.ec_cmd)  | 11.2. Executable Commands |  [Next](executable.ec_ctl.php) |

<a name="executable.ec_console"></a>
## Name

ec_console — connect to Momentum to perform introspection and administration

## Synopsis

`/opt/msys/ecelerity/bin/ec_console` [ remoteaddr [*`command`*] ] [ --man ]

<a name="idp13294448"></a>
## Description

Runtime administration of Momentum can be performed through **ec_console**. Through the console you can view and change the value of configuration options. Please see [Section 4.1, “The Momentum System Console”](operations.console "4.1. The Momentum System Console") for a detailed description of **ec_console**. For the list of available commands see [Chapter 12, *Momentum System Console Commands Reference*](console_commands.php "Chapter 12. Momentum System Console Commands Reference") . There are also module-specific commands documented at [Section 13.3, “Module-Specific Console Commands”](module_specific_console_commands.php "13.3. Module-Specific Console Commands").

### Note

You can create your own console commands using Lua. For details see [msys.registerControl](lua.ref.msys.registerControl "msys.registerControl").

This command has the following options:

<dl className="variablelist">

<dt>*`remoteaddr`* [*`command`*]</dt>

<dd>

Specify the IP address or the Unix socket. This can be useful if you wish to run the system console in batch mode. For more information see [Section 4.1, “The Momentum System Console”](operations.console "4.1. The Momentum System Console").

</dd>

<dt>--man</dt>

<dd>

Show the man page for the ec_console command

</dd>

</dl>

| [Prev](executable.ec_cmd)  | [Up](exe.commands.details.php) |  [Next](executable.ec_ctl.php) |
| ec_cmd  | [Table of Contents](index) |  ec_ctl |
