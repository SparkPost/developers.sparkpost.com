|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_lic)  | Chapter 74. Executable Commands Reference |  [Next](executable.ec_md5passwd) |

<a name="executable.ec_log_trace"></a>
## Name

ec_log_trace — parse Momentum log files

## Synopsis

`/opt/msys/ecelerity/bin/ec_log_trace` [ - ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --binding=*`name`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --binding-regex=*`regex`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --count ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --date ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --dst-ip=*`IP`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --end=*`date`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --from=*`email_address`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --from-domain=*`domain`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --from-domain-regex=regex ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --from-regex=*`regex`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ -h or --help ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --id=*`message_id`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --in or --reception ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ *`logfile(s)`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --main ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --out or --delivery ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --output=*`file`* [ --append ] ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --perm or --permanent ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --regex ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --to=*`email_address`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --to-domain=*`domain`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --to-domain-regex=regex ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --to-regex=regex ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --tran or --transient ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --src-ip=*`IP`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --src-ip-regex=*`regex`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --start=*`date`* ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ -v or --verbose ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --vctx-conn=key[=`value`] ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --vctx-conn-regex=key[=`value`] ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --vctx-mess=key[=`value`] ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --vctx-mess-regex=key[=`value`] ]

`/opt/msys/ecelerity/bin/ec_log_trace` [ --xml ]

<a name="idp11179024"></a>
## Description

**ec_log_trace** parses Momentum log files and prints out the contents in human-readable format. It can also find log lines matching certain requirements. Log files can be any number and combination of eclogger-formatted files, uncompressed or bzipped, supplied as command line arguments. If no log file is specified, the `mainlog.ec` and `rejectlog.ec` files at the default location are processed along with the rotated mainlog and rejectlog files.

### Note

You **must** specify the log file files that you wish to process.

Options `--date`, `--xml`, `-v`, `-`, `--output` and `--append` can be used when parsing `rejectlog.ec` and its rotated files. Other options are currently only for `mainlog.ec` and its rotated files.

Usage of the options:

<dl className="variablelist">

<dt>-</dt>

<dd>

Use `STDIN` as input for parsing.

</dd>

<dt>--binding=*`name`*</dt>

<dd>

Show main log records for deliveries, transient and permanent failures via the specified binding.

</dd>

<dt>--binding-regex=*`name`*</dt>

<dd>

Show main log records for deliveries, transient and permanent failures via the regex binding.

</dd>

<dt>--count</dt>

<dd>

Show only the number of log records satisfying specified options.

</dd>

<dt>--date</dt>

<dd>

Print date and time instead of epoch seconds in the log. For example `1268402398` becomes `Fri Mar 12 08:59:58 2010`.

</dd>

<dt>--dst-ip=*`IP`*</dt>

<dd>

Show log records with specified destination IP address.

</dd>

<dt>--dst-ip-regex=*`IP`*</dt>

<dd>

Show log records with regex destination IP address.

</dd>

<dt>--end=*`date`*</dt>

<dd>

Show log records before the end date (inclusive). `date` can be epoch seconds or in the format of "MMM DD HH:MM:SS YYYY". For example, date can be 1123456789, "Sep 12 18:12:21 2006" or "09 12 18:12:21 2006".

</dd>

<dt>--from=*`address`*</dt>

<dd>

Show only reception log records where the envelope sender is the specified address.

</dd>

<dt>--from-domain=*`domain`*</dt>

<dd>

Show only reception log records where the envelope sender's domain is the specified domain.

</dd>

<dt>--from-domain-regex=*`domain`*</dt>

<dd>

Show only reception log records where the envelope sender's domain is the regex domain.

</dd>

<dt>--from-regex=*`address`*</dt>

<dd>

Show only reception log records where the envelope sender is the specified regular expression.

</dd>

<dt>-h</dt>

<dd>

Show a help message.

</dd>

<dt>--id=*`ID`*</dt>

<dd>

Show log records with specified message ID. You can use this option multiple times.

</dd>

<dt>--in | --reception</dt>

<dd>

Show reception log records.

</dd>

<dt>--main</dt>

<dd>

Only show records from the mainlogs.

</dd>

<dt>--out | --delivery</dt>

<dd>

Show delivery log records.

</dd>

<dt>--output=*`file`* [--append]</dt>

<dd>

Print results to `file` instead of `STDOUT`. Using the optional `--append` mode, appends to an existing file.

</dd>

<dt>--perm</dt>

<dd>

Show permanent failure log records. If this is used with `-v`, Reception time, From: and To: address of a message that is permanently failed will be printed, as well as the failure message.

</dd>

<dt>--src-ip=*`IP`*</dt>

<dd>

Show log records with specified source IP address.

</dd>

<dt>--src-ip-regex=*`IP`*</dt>

<dd>

Show log records with regex source IP address.

</dd>

<dt>--start=*`date`*</dt>

<dd>

Show log records after the start date (inclusive). `date` can be epoch seconds or in the format of "MMM DD HH:MM:SS YYYY". For example, date can be 1123456789, "Sep 12 01:12:21 2006" or "09 12 18:21:21 2006".

### Note

Currently you cannot specify a start date in the format "MMM DD HH:MM:SS YYYY". Use Unix epoch seconds. You can use the **date** shell command to convert a string to Unix epoch seconds.

</dd>

<dt>--to=*`address`*</dt>

<dd>

Show only reception log records where the recipient is the specified address.

</dd>

<dt>--to-domain=*`domain`*</dt>

<dd>

Show log records where the recipient's domain is the specified domain.

You can specify `--to-domain` options multiple times.

</dd>

<dt>--to-domain-regex=*`domain`*</dt>

<dd>

Show log records where the recipient's domain is the regex domain.

</dd>

<dt>--to-regex=*`address`*</dt>

<dd>

Show only reception log records where the recipient is the regex address.

</dd>

<dt>--tran</dt>

<dd>

Show transient failure log records.

</dd>

<dt>-v | --verbose</dt>

<dd>

For `rejectlog.ec`, print detailed information. For `mainlog.ec`, print all log information grouped by message id.

</dd>

<dt>--vctx-conn=key[=value]</dt>

<dd>

Show reject logs where the validate context for the message has the specified key and optional value. Use --vctx-conn=key='' to test for a key with an empty value.

</dd>

<dt>--vctx-conn=key[=value]</dt>

<dd>

Show reject logs where the validate context for the connection has the specified key and optional value. Use --vctx-conn=key='' to test for a key with an empty value.

</dd>

<dt>--vctx-conn-regex=key[=value]</dt>

<dd>

Show reject logs where the validate context for the connection has the regex key and optional value. Use --vctx-conn=key='' to test for a key with an empty value.

</dd>

<dt>--vctx-mess=key[=value]</dt>

<dd>

Show reject logs where the validate context for the message has the specified key and optional value. Use --vctx-mess=key='' to test for a key with an empty value.

</dd>

<dt>--vctx-mess-regex=key[=value]</dt>

<dd>

Show reject logs where the validate context for the message has the regex key and optional value. Use --vctx-mess=key='' to test for a key with an empty value.

</dd>

<dt>--xml</dt>

<dd>

Print output in XML format.

</dd>

</dl>

<a name="idp14587216"></a>
### Usage Examples

Show counts of receptions, deliveries, temporary failures and permanent failures:

`shell> ec_log_trace --count`

Show counts of receptions, deliveries, temporary failures and permanent failures with a MAIL FROM in the messagesystems.com domain.

`shell> ec_log_trace--count --from-domain=messagesystems.com`

Show counts of receptions, deliveries, temporary failures and permanent failures with a MAIL FROM in the `messagesystems.com` domain or its subdomains.

`shell> ec_log_trace --count --from-domain-regex='.?messagesystems.com$'`

Show all messages from the null sender sent from the client with IP address `1.2.3.4`.

`shell> ec_log_trace --from='<>' --src-ip=1.2.3.4 --verbose`

Show all messages that were delivered, temporarily failed or permanently failed by the mail server with IP address 5.6.7.8. Note that this will show all temporary failures for 5.6.7.8, even if the final deliveries, permanent failures were to a different IP address.

`shell> ec_log_trace --dst-ip=5.6.7.8 --verbose`

Show all messages received, delivered, temporarily failed or permanently failed in the default binding and binding group

`shell> ec_log_trace --binding=default --binding-group=default`

Show all reject log entries where "rdnsbl" was set in the connection context. This context may have been set by a Sieve script.

`shell> ec_log_trace --vctx-conn=rdnsbl /var/log/ecelerity/rejectlog.ec*`

Show all reject log entries where "somehdr" begins with "failed" in the connection context.

`shell> ec_log_trace --vctx-mess-regex='somehdr=^failed ' /var/log/ecelerity/rejectlog.ec*`

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_lic)  | [Up](exec.cmds.ref) |  [Next](executable.ec_md5passwd) |
| ec_lic  | [Table of Contents](index) |  ec_md5passwd |

