| [Prev](log_rotating)  | Part IV. Logging |  [Next](adaptive.log.format) |
## Chapter 35. Log Formats
**Table of Contents**

* [35.1\. `acctlog`](log_formats#log_formats.acctlog)
* [35.2\. `adaptive` Log](adaptive.log.format)
* [35.3\. `bouncelog`](log_formats.bouncelog)
* [35.4\. `fbllog`](log_formats.fbllog)
* [35.5\. `httplog`](log_formats.httplog)
* [35.6\. `importlog`](log_formats.importlog)
* [35.7\. `mainlog`](log_formats.mainlog)
* [35.8\. `paniclog`](log_formats.paniclog)
* [35.9\. `rejectlog`](log_formats.rejectlog)
* [35.10\. Bounce Classification Codes](bounce_logger.classification.codes)
* [35.11\. Connection Stages](log_formats.connection.stages)

## 35.1. `acctlog`
The `acctlog` contains both authentication entries and authorization entries for the ESMTP_Listener and Control_Listener. It is configured in the [ec_logger](modules.ec_logger "71.30. EC_logger – Momentum-Style Logging") module.
### 35.1.1. Authentication Records
If enabled for the listener, authentication events for Unix domain sockets are logged one per line. The log entry is an `@` delimited string, such as the following:
`1160503808@N@/tmp/2025@@ec-user@1`
If enabled for the listener, authentication events for TCP/IP listeners are logged one per line. The log entry is an `@` delimited string, such as the following:
`1160172232@N@*:2025@10.80.116.126:37164@ec_user@1`
Note that `@`, `\`, `\n` and other control characters appearing in a field are escaped by adding an `\` before them.
The following is a description of the fields:
<a name="log_formats.authentication.record.fields"></a>
**Table 35.1. Authentication Record Fields**
| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1160172232 | Date of authentication in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | N | `N` indicating an authentication entry or `T` indicating an authentication timeout |
| 2 | *:2025 | Listener endpoint on which the event occurred |
| 3 | 10.80.116.126:37164 | IP and port of the peer (For Unix domain connections, this field will be empty.) |
| 4 | ec_user | User name used for the authentication |
| 5 | 1 | 1 indicates the authentication is successful; 0 otherwise. |
### 35.1.2. Authorization Records
A line is written to `acctlog` for every authorization event. The log entry is an `@` delimited string, such as the following:
```
1160503811@Z@/tmp/2025@@ec-user@1@summary@users
1160504707@Z@/tmp/2025@@ec-user@0@shutdown
1160172223@Z@*:2025@10.80.116.126:37162@ec-user@1@summary@users
1160172219@Z@*:2025@10.80.116.126:37162@ec-user@0@shutdown
```
Note that `@`, `\`, `\n` and other control characters appearing in a field are escaped by adding an `\` before them.
The following is a description of the fields:
<a name="log_formats.authorization.record.fields"></a>
**Table 35.2. Authorization Record Fields**
| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1160172219 | Date of authorization in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | Z | `Z` indicating an authorization entry |
| 2 | /tmp/2025 *or* *:2025 | Listener endpoint on which the event occurred |
| 3 | 10.80.116.126:37162 | IP and port of the peer (For Unix domain connections this field will be blank.) |
| 4 | ec_user | User name used for the authentication |
| 5 | 1 | 1 indicates the user is authorized to run the command; 0 indicates the authorization failed; -1 indicates some error occurred during authorization. |
| 6 | summary | Command that was requested to run |
| 7 | users | Role that matched during successful authorization |
### Note
The `?` type indicator denotes an unknown `acctlog` type.

| [Prev](log_rotating)  | [Up](p.logs) |  [Next](adaptive.log.format) |
| Chapter 34. Rotating Logs **ec_rotate**  | [Table of Contents](index) |  35.2. `adaptive` Log |
