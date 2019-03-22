| [Prev](adaptive.log.format)  | Chapter 35. Log Formats |  [Next](log_formats.fbllog) |

## 35.3. `bouncelog`

The `bouncelog` records both in-band and out-of-band bounces. It is configured in the [bounce_logger](modules.bounce_logger "71.13. bounce_logger – Momentum-Style Bounce Logging") module.

### 35.3.1. Bounce Records

A bounce line is written to the `bouncelog` for every bounce that Momentum witnesses. The log entry is an `@` delimited string, such as the following:

```
1064868656@91/6D-07914-E67BC044@00/00-03736-F4101B54@00/00-04532-A3456B54@B@ »
johndoe@example.fict@info@postalengine.com@group-a@binding-a@21@24@1223@10.0.0.1@554 »
5.4.7 [internal] exceeded max time without delivery
```

The following is a description of the fields:

<a name="log_formats.bounce.record.fields"></a>

**Table 35.4. Bounce Record Fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1064868656 | Date of reception in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970). |
| 1 | 91/6D-07914-E67BC044 | Message's unique message-id |
| 2 | 00/00-03736-F4101B54 | Batch ID |
| 3 | 00/00-04532-A3456B54 | Connection ID |
| 4 | B | `B` indicating an in-band and an out-of-band bounce or `T` indicating a transient failure |
| 5 | johndoe | Localpart of the recipient of the original message |
| 6 | example.fict | Domain of the recipient |
| 7 | info | Localpart of the envelope sender |
| 8 | postalengine.com | Domain of the envelope sender |
| 9 | group-a | Binding group to which the bounce email was bound, if available |
| 10 | binding-a | Binding to which the bounce email was bound, if available |
| 11 | 21 | Stage of the message (See [Section 35.11, “Connection Stages”](log_formats.connection.stages "35.11. Connection Stages").) |
| 12 | 24 | Classification code for the message (See [Section 35.10, “Bounce Classification Codes”](bounce_logger.classification.codes "35.10. Bounce Classification Codes").) |
| 13 | 1223 | Message size |
| 14 | 10.0.0.1 | IP address of the server that bounced the message |
| 15 | 554 5.4.7 [internal] exceeded max time without delivery | Raw bounce message from the server |

### 35.3.2. Heartbeat Records

In addition to the record described in the previous section, a heartbeat is written periodically to the log, indicating that Momentum is still active and may log further data. The log entry is an `@` delimited string, such as the following:

`1251222268@@@@M1`

The following is a description of the fields:

<a name="log_formats.heartbeat.bounce.fields"></a>

**Table 35.5. Heartbeat record fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1251222268 | Date of delivery in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 |   | Unused |
| 2 |   | Unused |
| 3 |   | Unused |
| 4 | M1 | `M1` indicating a heartbeat |

Having three unused fields ensures that, like other logs, the fifth field is the log entry type. This makes parsing easier.

| [Prev](adaptive.log.format)  | [Up](log_formats) |  [Next](log_formats.fbllog) |
| 35.2. `adaptive` Log  | [Table of Contents](index) |  35.4. `fbllog` |

