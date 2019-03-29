|     |     |     |
| --- | --- | --- |
| [Prev](log_formats.version_3)  | Appendix E. Log Formats |  [Next](log_formats.connection.stages) |

## E.2. Bounce Classification Codes

The bounce classification codes are identical for all versions of Momentum. Find below a list of these codes and their meanings.

<a name="log_formats.bounce.classification.codes"></a>

**Table E.12. Bounce classification codes**

| Code | Description |
| --- | --- |
| 1 | The response text could not be identified. (Undetermined) |
| 10 | The recipient is invalid. (Invalid Recipient) |
| 20 | The message soft bounced. (Soft Bounce) |
| 21 | The message bounced due to a DNS failure. (DNS Failure) |
| 22 | The message bounced due to the remote mailbox being over quota. (Mailbox Full) |
| 23 | The message bounced because it was too large for the recipient. (Too Large) |
| 24 | The message timed out. (Timeout) |
| 25 | The message was failed by Momentum's configured policies. (Admin Failure) |
| 30 | No recipient could be determined for the message. (Generic Bounce: No RCPT) |
| 40 | The message failed for unspecified reasons. (Generic Bounce) |
| 50 | The message was blocked by the receiver. (Mail Block) |
| 51 | The message was blocked by the receiver as coming from a known spam source. (Spam Block) |
| 52 | The message was blocked by the receiver as spam (Spam Content) |
| 53 | The message was blocked by the receiver because it contained an attachment (Prohibited Attachment) |
| 54 | The message was blocked by the receiver because relaying is not allowed. (Relay Denied) |
| 60 | The message is an auto-reply/vacation mail. (Auto-Reply) |
| 70 | Message transmission has been temporarily delayed. (Transient Failure) |
| 80 | The message is a subscribe request. (Subscribe) |
| 90 | The message is an unsubscribe request. (Unsubscribe) |
| 100 | The message is a challenge-response probe. (Challenge-Response) |

|     |     |     |
| --- | --- | --- |
| [Prev](log_formats.version_3)  | [Up](log_formats) |  [Next](log_formats.connection.stages) |
| E.1. Log Formats for Version 3.x  | [Table of Contents](index) |  E.3. Connection Stages |
