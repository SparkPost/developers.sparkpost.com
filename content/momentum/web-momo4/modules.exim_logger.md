| [Prev](modules.event_hydrant)  | Chapter 71. Modules Reference |  [Next](modules.fbl) |

## 71.34. exim_logger – Exim Logging

<a className="indexterm" name="idp21813264"></a>

Momentum supports logging in the same style as the Open Source MTA Exim (http://www.exim.org). This is mainly of use to sites which are moving from an Exim install or otherwise have log-processing software that reads data in Exim-compliant format.

The exim_logger module writes to two log files: a `mainlog` where receptions, deliveries, and delivery failures are logged, and a `paniclog` where errors are logged.

### 71.34.1. Configuration

The exim_logger is configured through a configuration file using a stanza such as:

<a name="example.exim_logger.3"></a>

**Example 71.61. exim_logger Configuration**

```
exim_logger "exim_logger1" {
  mainlog  = "/var/log/exim/mainlog"
  paniclog = "/var/log/exim/paniclog"
  log_transient_failures = false
}
```

You can toggle the logging of transient failures using the `log_transient_failures` option.

| [Prev](modules.event_hydrant)  | [Up](modules) |  [Next](modules.fbl) |
| 71.33. event_hydrant – Message Tracking  | [Table of Contents](index) |  71.35. fbl - Feedback Loop |

