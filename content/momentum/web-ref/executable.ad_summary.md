| [Prev](exe.commands.details)  | 11.2. Executable Commands |  [Next](executable.adaptive_loader.php) |

<a name="executable.ad_summary"></a>
## Name

ad_summary — summarize the adaptive module actions

## Synopsis

`/opt/msys/ecelerity/bin/ad_summary` [ --adlogdir [*`/path/to/adaptive/log/dir/`*] ]

`/opt/msys/ecelerity/bin/ad_summary` [ --bouncelog [*`/path/to/bouncelog`*] ]

`/opt/msys/ecelerity/bin/ad_summary` [ --help ]

`/opt/msys/ecelerity/bin/ad_summary` [ --mailfrom *`addr`* ]

`/opt/msys/ecelerity/bin/ad_summary` [ --mailhost *`hostname`*[:port] ]

`/opt/msys/ecelerity/bin/ad_summary` [ --mailto *`addr`* ]

`/opt/msys/ecelerity/bin/ad_summary` [ --mainlog [*`/path/to/mainlog`*] ]

`/opt/msys/ecelerity/bin/ad_summary` [ --num_bindings [*`num`*] ]

`/opt/msys/ecelerity/bin/ad_summary` [ --num_domains [*`num`*] ]

`/opt/msys/ecelerity/bin/ad_summary` [ --paniclog [*`/path/to/paniclog`*] ]

<a name="idp12898256"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.17.

The **ad_summary** script creates a summary of the contents of the paniclog and mainlog file, including adjustments made by Adaptive Delivery. An entry that runs ad_summary is added to `/etc/cron.d/msys-ecelerity` when the adaptive module is installed. This script is run nightly as a cron job and sent via email to the recipient defined by the option, `Adaptive_Alert_Email_Destination`. This summary is created regardless of whether alerts have been generated or not. The default format of the compressed summary files is `bzip2` and is controlled by the **ec_rotate** script.

### Note

Adjusting the format of this report by changing the parameters passed to the ad_summary script is **not** recommended. Any changes made will be overwritten if the application is upgraded.

This command will not run the first day that a Momentum system is live. As a workaround, first run ec_rotate.

The ad_summary command creates the log file, `/var/log/ecelerity/adaptive.summary` and this log should be added to `ec_rotate.conf`. For instructions on doing this see [ec_rotate](executable.ec_rotate "ec_rotate") and [the section called “The `ec_rotate.conf` File”](executable.ec_rotate.php#ec_rotate.conf "The ec_rotate.conf File").

If you are not using the adaptive module there is no need to use this script.

<dl className="variablelist">

<dt>--adlogdir [*`/path/to/adaptive/log/dir/`*]</dt>

<dd>

**Configuration Change. ** This feature is available as of version 3.2.

The location of the adaptive log files. The files that are processed vary depending upon the setting of the adaptive option, `Split_Logs_By_Binding`. For more information see [Section 14.2.5, “Changes in Version 3.2”](modules.adaptive#modules.adaptive.options.3.2 "14.2.5. Changes in Version 3.2").

The default value for this option is `/var/log/ecelerity/adaptive`.

</dd>

<dt>--bouncelog [*`/path/to/bouncelog`*]</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.22.

The bounce log file to operate on. The default value is `/var/log/ecelerity/mainlog.ec.1.bz2`.

</dd>

<dt>--help</dt>

<dd>

Print the help message.

</dd>

<dt>--mainlog [*`/path/to/mainlog`*]</dt>

<dd>

The main log file to operate on. The default value is `/var/log/ecelerity/mainlog.ec.1.bz2`.

</dd>

<dt>--mailfrom *`addr`*</dt>

<dd>

Use the specified address as the from address when mailing the summary file.

</dd>

<dt>--mailhost *`hostname[:port_number]`*</dt>

<dd>

Connect to the specified hostname to send the summary. The default value is `localhost`. If you are not using port 25, you must specify the port.

</dd>

<dt>--mailto *`addr`*</dt>

<dd>

Send the summary to the specified address which must be an email address of the form *`user`*@*`hostname`*. If no --mailto argument is specified, the summary will be printed to the standard output.

</dd>

<dt>--num_bindings [*`num`*]</dt>

<dd>

Summarize the top number of bindings specified. By default, the top 20 bindings will be summarized.

</dd>

<dt>--num_domains [*`num`*]</dt>

<dd>

Summarize the top number of domains. By default, the top 20 domains will be summarized.

</dd>

<dt>--paniclog [*`/path/to/paniclog`*]</dt>

<dd>

The panic log file to operate on. The default value is `/var/log/ecelerity/paniclog.ec.1.bz2`.

</dd>

</dl>

<a name="idp12940512"></a>
## See Also

[Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery")

| [Prev](exe.commands.details)  | [Up](exe.commands.details.php) |  [Next](executable.adaptive_loader.php) |
| 11.2. Executable Commands  | [Table of Contents](index) |  adaptive_loader |
