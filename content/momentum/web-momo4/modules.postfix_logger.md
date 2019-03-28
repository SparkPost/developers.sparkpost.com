|     |     |     |
| --- | --- | --- |
| [Prev](modules.pipe_transport)  | Chapter 71. Modules Reference |  [Next](modules.reception_timing) |

## 71.56. postfix_logger – Postfix Logging

<a class="indexterm" name="idp22647248"></a>

Momentum supports logging in the same style as the Open Source MTA Postfix (http://www.postfix.org). This is mainly of use to sites migrating from a Postfix installation or those that have log-processing software that reads data in Postfix-compliant format.

The postfix_logger module writes to two logfiles: a `mainlog` where receptions, deliveries, and delviery failures are logged, and a `paniclog` where errors are logged.

### 71.56.1. Configuration

The postfix_logger module is configured through a configuration file using a stanza such as:

<a name="example.postfix_logger.3"></a>

**Example 71.81. posfix_logger Configuration**

```
postfix_logger "postfix_logger1" {
  mainlog  = "/var/log/postfix/mainlog"
  paniclog = "/var/log/postfix/paniclog"
  log_transient_failures = false
}
```

### Note

You must manually create the `postfix` directory and it must be writable by the user, `ecuser`. You must do this if you manually create the postfix module. You can change the ownership of the directory by issuing the shell command: **chown -R ecuser:ecuser /var/log/postfix** .

You can toggle the logging of transient failures using the `log_transient_failures` option.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.pipe_transport)  | [Up](modules) |  [Next](modules.reception_timing) |
| 71.55. pipe_transport – Module  | [Table of Contents](index) |  71.57. reception_timing - Reception Timing Modules |

