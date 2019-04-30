|     |     |     |
| --- | --- | --- |
| [Prev](executable.jlog_sanity_check)  | 11.2. Executable Commands |  [Next](executable.lu_pull.php) |

<a name="executable.jlogctl"></a>
## Name

jlogctl — analyze and maintain jlogs

## Synopsis

`/opt/msys/jlog/bin/jlogctl` [ -a { *`subscriber`* } ] [ -c ] [ -e { *`subscriber`* } ] [ -d ] [ -i ] [ -l ] [ -p { *`subscriber`* } ] [ r ] [ -s ] [ -v ] { *`/path/to/jlog1`* [ ... ] }

<a name="idp14632768"></a>
## Description

Use this command to maintain and analyze jlogs. This command should be run as `ecuser`. The option descriptions are as follows:

<dl className="variablelist">

<dt>

-a { *`subscriber`* *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

Add a subscriber to the specified jlog(s).

</dd>

<dt>

-c { *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

If there are no pending readers, clean the the specified jlog(s).

</dd>

<dt>

-d { *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

Analyze the the specified jlog(s).

</dd>

<dt>

-e { *`subscriber`* *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

Remove a subscriber from the specified jlog(s).

</dd>

<dt>

-i { *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

List the index information for the specified jlog(s).

</dd>

<dt>

-l { *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

List the sizes and the readers for the specified jlog(s).

</dd>

<dt>

-p { *`subscriber`* *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

This option shows the next start and end points for reading for the specified jlog for the given subscriber. The present checkpoint and the last write point are also shown.

</dd>

<dt>

-r { *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

Analyze and repair the specified jlog(s). This option cannot be used on jlogs that are currently in use.

</dd>

<dt>

-s { *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

Show all subscribers for the specified jlog(s).

</dd>

<dt>

-v { *`/path/to/jlog1`* [ ... ] }

</dt>

<dd>

When used along with another option or options this option provides verbose output.

</dd>

</dl>

<a name="idp14657808"></a>
## See Also

[Section 14.43, “jlog – The jlog Module”](modules.jlog "14.43. jlog – The jlog Module"), [Section 7.6.6, “Decommissioning a Manager”](cluster.config.logging.php#cluster.config.logging.decommissioning "7.6.6. Decommissioning a Manager")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.jlog_sanity_check)  | [Up](exe.commands.details.php) |  [Next](executable.lu_pull.php) |
| jlog_sanity_check  | [Table of Contents](index) |  lu_pull |
