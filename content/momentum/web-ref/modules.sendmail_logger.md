| [Prev](modules.seedlist)  | Chapter 14. Modules Reference |  [Next](modules.sieve) |

## 14.63. sendmail_logger – Sendmail-Compatible Logging

<a class="indexterm" name="idp21200160"></a>

Momentum supports logging in the same style as the Open Source MTA Sendmail (http://www.sendmail.org). This is mainly of use to sites which are moving from a Sendmail install or otherwise have log-processing software that reads data in Sendmail-compliant format.

### 14.63.1. Configuration

The sendmail_logger module writes to two logfiles: a mainlog where receptions, deliveries, and delivery failures are logged, and a paniclog where errors are logged. These are configured as in the following stanza:

<a name="example.sendmail_logger.3"></a>

**Example 14.91. sendmail_logger module**

```
sendmail_logger "sendmail_logger1" {
  mainlog  = "/var/log/sendmail/mainlog"
  paniclog = "/var/log/sendmail/paniclog"
}
```

| [Prev](modules.seedlist)  | [Up](modules) |  [Next](modules.sieve) |
| 14.62. seedlist – Seedlist Integration  | [Table of Contents](index) |  14.64. sieve – The Sieve Module |
