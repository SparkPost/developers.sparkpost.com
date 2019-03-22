| [Prev](sieve.ref.ec_log)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_maildir) |

<a name="sieve.ref.ec_log_file"></a>
## Name

ec_log_file — log to a file/io wrapper

## Synopsis

`ec_log_file` { *`file uri`*      } { *`arbitrary_text`* }

<a name="idp30225200"></a>
## Description

`ec_log_file` allows you to log arbitrary information to a specified file or io wrapper. Unlike the `ec_log` action the raw message, plus an appended newline, will be written to the file, with no additional context or timestamp information unless present in the user-defined message. The message will be written regardless of the Debug_Flags setting.

<a name="example.ec_log_file"></a>

**Example 16.76. ec_log_file example**

```
if envelope :domain :is "from" "good-guy.com" {
  ec_log_file "/var/log/logfile" "got mail from the good guys";
}
```

<a name="example.ec_log_file.second"></a>

**Example 16.77. ec_log_file example with io wrapper**

```
if envelope :domain :is "from" "good-guy.com" {
  ec_log_file "jlog:///var/log/ecelerity/queue.rt=>master" "got mail from the good guys";
}
```

Be sure that you have permission to write to the directory containing the output file.

Since the Sieve validation phases through the data phase are executed in the scheduler thread, no I/O should be done during these phases. Use this function *after* the data phase.

<a name="idp30234368"></a>
## See Also

[ec_log](sieve.ref.ec_log "ec_log")

| [Prev](sieve.ref.ec_log)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_maildir) |
| ec_log  | [Table of Contents](index) |  ec_maildir |
