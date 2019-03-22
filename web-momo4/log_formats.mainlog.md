| [Prev](log_formats.importlog)  | Chapter 35. Log Formats |  [Next](log_formats.paniclog) |

## 35.7. `mainlog`

The `mainlog` logs reception, delivery, transient failure, permanent failure, and heartbeat events. It is configured in the [ec_logger](modules.ec_logger "71.30. EC_logger – Momentum-Style Logging").

Every event is written to the `mainlog` file as a single line. Fixed position codes signify whether the log line represents a reception (`R`), delivery (`D`), transient failure (`T`), or permanent failure (`P`). The log entry format differs depending upon the event type.

The following sections define the format for each event type.

### 35.7.1. Reception Records

A reception line is written to the `mainlog` for every reception that Momentum performs. The log entry is an `@` delimited string, such as the following:

```
1064868656@00/00-25004-31B987F3@00/00-03736-F4101B54@00/00-04532-A3456B54@R »
@bob@example.fict@info@postalengine.com@10.0.1.1@201@esmtp@default@default
```

The following is a description of the fields:

<a name="log_formats.reception.record.fields"></a>

**Table 35.9. Reception Record Fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1064868656 | Date of reception in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 00/00-25004-31B987F3 | Message's unique message-id |
| 2 | 00/00-03736-F4101B54 | Batch ID |
| 3 | 00/00-04532-A3456B54 | Connection ID |
| 4 | R | `R` indicating a reception |
| 5 | bob | Localpart of the recipient |
| 6 | example.fict | Domain of the recipient |
| 7 | info | Localpart of the envelope sender |
| 8 | postalengine.com | Domain of the envelope sender |
| 9 | 10.0.1.1 | IP address from which the message was received (For HTTP transmissions, this value will be `unknown`. ) |
| 10 | 201 | Size of the message in bytes |
| 11 | esmtp | Protocol over which the message was received: `esmtp` – SMTP, `rest` – HTTP, `xfer` – message was transferred from another node, `internal` – internally generated bounce |
| 12 | default | MultiVIP® binding group to which the message was assigned |
| 13 | default | MultiVIP® binding to which the message was assigned |

### 35.7.2. Delivery Records

A delivery line is written to the `mainlog` for every message that is delivered by Momentum, including transfers between nodes. The log entry is an `@` delimited string, such as the following:

```
1064871280@20/00-25593-945A87F3@00/00-03736-F4101B54@00/00-04532-A3456B54@D@ »
postalengine.com@266@group-a@binding-a@0@0.393@10.0.0.1
```

The following is a description of the fields:

<a name="log_formats.delivery.record.fields"></a>

**Table 35.10. Delivery Record Fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1064871280 | Date of delivery in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 20/00-25593-945A87F3 | Message's unique message-id |
| 2 | 00/00-03736-F4101B54 | Batch ID |
| 3 | 00/00-04532-A3456B54 | Connection ID |
| 4 | D | `D` indicating a successful delivery or `X` indicating a transfer between nodes, in a cluster configuration (`X` entries appear in the delivery log on the transferring node indicating that the message left for another cluster node, while `R` entries appear in the reception log on the node receiving the message with `xfer` in its protocol field.)|
| 5 | postalengine.com | Destination domain |
| 6 | 266 | Size in bytes of the delivered message |
| 7 | group-a | MultiVIP® binding group to which the message was assigned |
| 8 | binding-a | MultiVIP® binding to which the message was assigned |
| 9 | 0 | Number of times the message has been retried (A value of 0 indicates the initial attempt.) |
| 10 | 0.393 | Amount of time, in seconds, between reception and delivery |
| 11 | 10.0.0.1 | IP address that accepted the message |

### 35.7.3. Transient Failure Records

A transient failure line is written to the `mainlog` for every transient failure that occurs. A transient failure is a failure that allows Momentum to retry sending the message. The log entry is an `@` delimited string, such as the following:

```
1064869327@00/00-25593-CBD987F3@00/00-03736-F4101B54@00/00-04532-A3456B54@T@ »
example.fict@0@group-a@binding-a@15@0@18.53@10.0.0.1@421 no adequate servers
```

The following is a description of the fields:

<a name="log_formats.transient.failure.records"></a>

**Table 35.11. Transient Failure Record Fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1064869327 | Date of transient failure in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 00/00-25004-31B987F3 | Message's unique message-id |
| 2 | 00/00-03736-F4101B54 | Batch ID |
| 3 | 00/00-04532-A3456B54 | Connection ID |
| 4 | T | `T` indicating a transient failure |
| 5 | example.fict | Destination domain |
| 6 | 0 | Number of bytes of data transferred before the failure occurred (A value of 0 indicates no connection could be made.) |
| 7 | group-a | MultiVIP® binding group to which the message was assigned |
| 8 | binding-a | MultiVIP® binding to which the message was assigned |
| 9 | 15 | Stage of the message (See [Section 35.11, “Connection Stages”](log_formats.connection.stages "35.11. Connection Stages").) |
| 10 | 0 | Number of times the message has been retried (A value of 0 indicates the initial attempt.) |
| 11 | 18.53 | Amount of time, in seconds, between reception and this transient failure |
| 12 | 10.0.0.1 | IP address of the server that rejected the message |
| 13 | 421 no adequate servers | Error message associated with the failure |

### 35.7.4. Permanent Failure Records

A permanent failure line is written to the `mainlog` for every permanent failure that occurs. A permanent failure indicates that the attempted message failed in such a way that it should not be retried again. After logging a permanent failure, the message will be discarded. The log entry is an `@` delimited string, such as the following:

```
1064870847@10/00-25593-393A87F3@00/00-03736-F4101B54@00/00-04532-A3456B54@P@ »
postalengine.com@31@group-a@binding-a@5@1@3.89@10.0.0.1@552 No such account
```

The following is a description of the fields:

<a name="log_formats.permanent.failure.record.fields"></a>

**Table 35.12. Permanent Failure Record Fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1064870847 | Date of permanent failure in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 10/00-25593-393A87F3 | Message's unique message-id |
| 2 | 00/00-03736-F4101B54 | Batch ID |
| 3 | 00/00-04532-A3456B54 | Connection ID |
| 4 | P | `P` indicating a permanent failure, such as an in-band bounce |
| 5 | postalengine.com | Destination domain |
| 6 | 31 | Number of bytes of data transferred before the failure occurred (In this example, 31 bytes were transferred before the remote server returned its error.) |
| 7 | group-a | MultiVIP® binding group to which the message was assigned |
| 8 | binding-a | MultiVIP® binding to which the message was assigned |
| 9 | 5 | Stage of the message (See [Section 35.11, “Connection Stages”](log_formats.connection.stages "35.11. Connection Stages").) |
| 10 | 1 | Number of times the message has been retried |
| 11 | 3.89 | Amount of time, in seconds, between reception and the time of permanent failure |
| 12 | 10.0.0.1 | IP address of the server that rejected the message |
| 13 | 552 No such account | Error message returned from the remote host |

### 35.7.5. Heartbeat Records

In addition to the records described in the previous sections, a heartbeat is written periodically to the log, indicating that Momentum is still active and may log further data. The log entry is an `@` delimited string, such as the following:

`1251470342@@@@M`

The following is a description of the fields:

<a name="log_formats.heartbeat.main.fields"></a>

**Table 35.13. Heartbeat Record Fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1251470342 | Date of delivery in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 |   | Unused |
| 2 |   | Unused |
| 3 |   | Unused |
| 4 | M | `M` indicating a heartbeat (Having three unused fields ensures that, like other logs, the fifth field is the log entry type. This makes parsing easier.) |

| [Prev](log_formats.importlog)  | [Up](log_formats) |  [Next](log_formats.paniclog) |
| 35.6. `importlog`  | [Table of Contents](index) |  35.8. `paniclog` |

