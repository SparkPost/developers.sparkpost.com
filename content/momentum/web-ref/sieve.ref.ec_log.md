| [Prev](sieve.ref.ec_ip_rejections_cluster)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_log_file) |

<a name="sieve.ref.ec_log"></a>
## Name

ec_log — log to the paniclog

## Synopsis

`ec_log` { *`message`* }

<a name="idp30206528"></a>
## Description

`ec_log` allows you to log arbitrary information to the paniclog. The log record will be prefixed with the script source filename and the line number at which the `ec_log` was executed. The message is logged at the CRITICAL level for the LOG1 subsystem. These messages will appear in the paniclog under the default Debug_Flags settings.

<a name="example.ec_log"></a>

**Example 16.75. ec_log example**

```
if envelope :domain :is "from" "good-guy.com" {
  ec_log "got mail from the good guys";
}
```

### Note

This function cannot log messages longer than `1972` characters. Longer messages are truncated. If your requirements exceed this maximum use [ec_log_file](sieve.ref.ec_log_file "ec_log_file") instead.

| [Prev](sieve.ref.ec_ip_rejections_cluster)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_log_file) |
| ec_ip_rejections_cluster  | [Table of Contents](index) |  ec_log_file |
