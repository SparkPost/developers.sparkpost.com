|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_show)  | 11.2. Executable Commands |  [Next](executable.ec_uipasswd.php) |

<a name="executable.ec_spp"></a>
## Name

ec_spp — Use this command to invoke a Sieve script

## Synopsis

`/opt/msys/ecelerity/bin/ec_spp` [ -c *`config_file`* ] [ -e *`extensions_dir`* ] [ -v ] [ *`script`* ]

<a name="idp14153872"></a>
## Description

`ec_spp` is used to invoke a Sieve script and confirm that it compiles.

It has the following options:

<dl className="variablelist">

<dt>-c *`config_file`*</dt>

<dd>

Specify a Momentum configuration file, typically `ecelerity.conf`.

</dd>

<dt>-e *`extensions_dir`*</dt>

<dd>

Specify the base path for all dynamically loadable modules, typically `/opt/msys/ecelerity/libexec`.

</dd>

<dt>-v</dt>

<dd>

Use this option for verbose output.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_show)  | [Up](exe.commands.details.php) |  [Next](executable.ec_uipasswd.php) |
| ec_show  | [Table of Contents](index) |  ec_uipasswd |
