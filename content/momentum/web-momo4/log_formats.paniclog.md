|     |     |     |
| --- | --- | --- |
| [Prev](log_formats.mainlog)  | Chapter 35. Log Formats |  [Next](log_formats.rejectlog) |

## 35.8. `paniclog`

The `paniclog` is a debugging log in which system events are logged depending on the level of Debug_Flags set in your configuration. It is configured in the [ec_logger](modules.ec_logger "71.30. EC_logger – Momentum-Style Logging").

Under normal circumstances, Debug_Flags should be empty or should be omitted from the `ecelerity.conf` file. For debugging purposes, set up Debug_Flags as described in [debug_flags](conf.ref.debug_flags "debug_flags"). When a problem event occurs and it is within the logging level set by the `Debug_Flags` option, the event is written to the `paniclog`. Excepting informational startup messages, the `paniclog` should be empty under normal circumstances. It is recommended that you periodically check your `paniclog` to look for any anomalous events.

In addition, Momentum logs entries to the `paniclog` when the `log_requests_to_paniclog` option is enabled in the HTTP_Listener and its nested scopes.

### 35.8.1. Panic Records

A line is written to the `paniclog` for every system event, when enabled in the configuration. The fields in the log entry are delimited by spaces.

The following is an example entry for an HTTP request when `log_requests_to_paniclog` is set to `true`:

`1307461172:192.168.0.197 "POST api/v1/transmissions HTTP/1.1" 200 224 5.000`

The following is a description of the fields:

<a name="log_formats.paniclog.ec.record.fields"></a>

**Table 35.14. Paniclog Record Fields**

| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1307461172: | Date of delivery in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 192.168.0.197 | IP address where the injection originated |
| 2 | POST | HTTP request method |
| 3 | api/v1/transmissions | HTTP request URL path |
| 4 | HTTP/1.0 | HTTP version of the request |
| 5 | 200 | HTTP response status code |
| 6 | 224 | Total number of bytes of the response |
| 7 | 5.000 | Time taken from request to response in milliseconds |

|     |     |     |
| --- | --- | --- |
| [Prev](log_formats.mainlog)  | [Up](log_formats) |  [Next](log_formats.rejectlog) |
| 35.7. `mainlog`  | [Table of Contents](index) |  35.9. `rejectlog` |

