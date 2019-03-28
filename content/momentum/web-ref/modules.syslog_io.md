|     |     |     |
| --- | --- | --- |
| [Prev](modules.suppress_spool)  | Chapter 14. Modules Reference |  [Next](tls_macros) |

## 14.73. syslog_io – The syslog_io Module

<a class="indexterm" name="idp21557824"></a>

syslog_io is a wrapper module that uses the syslog library routines to log to the system logger facility.

### 14.73.1. Configuration

<a name="example.syslog.3"></a>

**Example 14.103. syslog_io version 3.0**

```
syslog_io {
  ident = "ecelerity" # the default
  default_facility = "mail" # the default
}
```

<dl className="variablelist">

<dt>default_facility</dt>

<dd>

The default_facility, having a default value, "mail"

</dd>

<dt>ident</dt>

<dd>

The identification string, having a default value, "ecelerity"

</dd>

</dl>

When this module is enabled, you can use the `syslog://` wrapper to write paniclog entries to the system log. You can override the default facility via an URL parameter, and optionally set the priority (the default value is `error`). For example:

<a name="example.syslog.paniclog.3"></a>

**Example 14.104. Usage**

```
ec_logger "ec_logger1" {
  paniclog = "syslog://?facility=mail&priority=error"
}
```

The facilities and priorities are the standard syslog values. Not all facilities are available on all systems.

Be careful using this wrapper for the mainlog or rejectlog; the volume is likely to swamp the system logger.


|     |     |     |
| --- | --- | --- |
| [Prev](modules.suppress_spool)  | [Up](modules) |  [Next](tls_macros) |
| 14.72. suppress_spool – Deferred Message Spooling  | [Table of Contents](index) |  14.74. tls_macros Module |
