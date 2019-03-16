| [Prev](modules.pipe_transport)  | Chapter 14. Modules Reference |  [Next](modules.reception_timing) |

## 14.56. postfix_logger – Postfix-Compatible Logging

<a class="indexterm" name="idp20881936"></a>

Momentum supports logging in the same style as the Open Source MTA Postfix (http://www.postfix.org). This is mainly of use to sites migrating from a Postfix installation or those that have log-processing software that reads data in Postfix-compliant format.

### 14.56.1. Configuration

The postfix_logger module writes to two logfiles: a mainlog where receptions, deliveries, and delviery failures are logged, and a paniclog where errors are logged. These are configured as in the following examples:

<a name="example.postfix_logger.3"></a>

**Example 14.84. posfix_logger module**

```
postfix_logger "postfix_logger1" {
  mainlog  = "/var/log/postfix/mainlog"
  paniclog = "/var/log/postfix/paniclog"
  log_transient_failures = false
}
```

### Note

You must manually create the `postfix` directory and it must be writable by the user, `ecuser`. You must do this if you manually create the postfix module*or* if you create it through the web UI. You can change the ownership of the directory by issuing the shell command: **chown -R ecuser:ecuser /var/log/postfix** .

Additionally, you can toggle the logging of transient failures using the `log_transient_failures` option.

| [Prev](modules.pipe_transport)  | [Up](modules) |  [Next](modules.reception_timing) |
| 14.55. pipe_transport – Module  | [Table of Contents](index) |  14.57. reception_timing - Reception Timing Modules |
