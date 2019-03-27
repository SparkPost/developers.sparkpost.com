| [Prev](bounce_logger.classification.codes)  | Chapter 35. Log Formats |  [Next](p.operations) |

## 35.11. Connection Stages

The following is a list of the codes for the stages and their meanings.

<a name="table.log_formats.connection.stages"></a>

**Table 35.17. Connection stages**

| Phase | Description |
| --- | --- |
| 0 | while not connected |
| 1 | while idle |
| 2 | during MAIL FROM |
| 3 | after MAIL FROM |
| 4 | during RCPT TO |
| 5 | after RCPT TO |
| 6 | during DATA |
| 7 | after DATA |
| 8 | while sending BODY |
| 9 | reading confirmation |
| 10 | during EHLO |
| 11 | after EHLO |
| 12 | reading BANNER |
| 13 | during RSET |
| 14 | after RSET |
| 15 | during STARTTLS |
| 16 | after STARTTLS |
| 17 | handshaking TLS |
| 18 | renegotiating TLS |
| 19 | during XCLIENT |
| 20 | after XCLIENT |
| 21 | out of band bounce |
| 22 | in unknown state |

Code `21` is the only message disposition notification (MDN). With the exception of `22`, which is unknown, all other stages occur during the SMTP transaction. In other words, they are in-band bounces.

| [Prev](bounce_logger.classification.codes)  | [Up](log_formats) |  [Next](p.operations) |
| 35.10. Bounce Classification Codes  | [Table of Contents](index) |  Part V. Using the System Console |

