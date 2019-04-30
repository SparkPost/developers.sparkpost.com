|     |     |     |
| --- | --- | --- |
| [Prev](modules.eleven)  | Chapter 14. Modules Reference |  [Next](modules.fbl.php) |

## 14.33. exim_logger – Exim-Compatible Logging

<a class="indexterm" name="idp19941408"></a>

Momentum supports logging in the same style as the Open Source MTA Exim (http://www.exim.org). This is mainly of use to sites which are moving from an Exim install or otherwise have log-processing software that reads data in Exim-compliant format.

### 14.33.1. Configuration

The exim_logger module writes to two log files: a mainlog where receptions, deliveries, and delivery failures are logged, and a paniclog where errors are logged. These are configured as shown in the following stanza:

<a name="example.exim_logger.3"></a>

**Example 14.64. exim_logger module**

```
exim_logger "exim_logger1" {
  mainlog  = "/var/log/exim/mainlog"
  paniclog = "/var/log/exim/paniclog"
  log_transient_failures = false
}
```

Additionally, you can toggle the logging of transient failures.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.eleven)  | [Up](modules.php) |  [Next](modules.fbl.php) |
| 14.32. eleven – Module  | [Table of Contents](index) |  14.34. fbl – Feedback Loop Module |
