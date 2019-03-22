| [Prev](log_formats.paniclog)  | Chapter 35. Log Formats |  [Next](bounce_logger.classification.codes) |

## 35.9. `rejectlog`

The `rejectlog` stores records of inbound messages that are rejected by Momentum, either due to policy or protocol deviations. It lists the full context for all rejected messages, as well as a summary of why the message was rejected, and it is configured in the [ec_logger](modules.ec_logger "71.30. EC_logger – Momentum-Style Logging").

### 35.9.1. Rejection Records

A rejection line is written to the `rejectlog` for every rejection that Momentum performs. The fields in the log entry are delimited by spaces, such as the following:

```
1236672125: R="10.79.25.142:42601" L="10.79.25.142:25" C="18/00-07149-D7E16B94" PATH="default" »
PATH_GRP="default" P="awaiting mailfrom" E=550 M=scriptlet »
CTXCONN=[pathway=default,ehlo_string="EHLO rh52-node1",ehlo_domain=rh52-node1] »
CTXMESS=[mailfrom_domain=,mailfrom_string="MAIL FROM:<>",mailfrom_localpart=] relaying denied
```

The following is a description of the fields:

<a name="log_formats.rejectlog.ec.record.fields"></a>

**Table 35.15. Rejectlog Record Fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1236672125: | Date of delivery in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | R="10.79.25.142:42601" | Remote IP:port |
| 2 | L="10.79.25.142:25" | Local IP:port |
| 3 | C="18/00-07149-D7E16B94" | Connection ID |
| 4 | PATH="default" | Pathway |
| 5 | PATH_GRP="default" | Pathway Group |
| 6 | P="awaiting mailfrom" | Phase |
| 7 | E=550 | Error Code |
| 8 | M=scriptlet | Last module run |
| 9 | CTXCONN=[pathway=default,ehlo_string="EHLO rh52-node1",ehlo_domain=rh52-node1] | Validation Context for connection |
| 10 | CTXMESS=[mailfrom_domain=,mailfrom_string="MAIL FROM:<>",mailfrom_localpart=] | Validation Context for message |
| 11 | relaying denied | Error message |

### 35.9.2. Heartbeat Records

In addition to the record described in the previous section, a heartbeat is written periodically to the log, indicating that Momentum is still active and may log further data. The log entry is in the following format:

`1252064908: Marker 1`

The `Marker 1` entry follows the Unix timestamp and is separated from it by a space.

| [Prev](log_formats.paniclog)  | [Up](log_formats) |  [Next](bounce_logger.classification.codes) |
| 35.8. `paniclog`  | [Table of Contents](index) |  35.10. Bounce Classification Codes |

