| [Prev](log_formats.rejectlog)  | Chapter 35. Log Formats |  [Next](log_formats.connection.stages) |

## 35.10. Bounce Classification Codes

The following is a list of bounce classification codes and their meanings.

<a name="log_formats.bounce.classification.codes"></a>

**Table 35.16. Bounce Classification Codes**

| Classification | Name | Description | Category |
| --- | --- | --- | --- |
| 1 | Undetermined | The response text could not be identified. | Undetermined |
| 10 | Invalid Recipient | The recipient is invalid. | Hard |
| 20 | Soft Bounce | The message soft bounced. | Soft |
| 21 | DNS Failure | The message bounced due to a DNS failure. | Soft |
| 22 | Mailbox Full | The message bounced due to the remote mailbox being over quota. | Soft |
| 23 | Too Large | The message bounced because it was too large for the recipient. | Soft |
| 24 | Timeout | The message timed out. | Soft |
| 25 | Admin Failure | The message was failed by Momentum's configured policies. | Admin |
| 30 | Generic Bounce: No RCPT | No recipient could be determined for the message. | Hard |
| 40 | Generic Bounce | The message failed for unspecified reasons. | Soft |
| 50 | Mail Block | The message was blocked by the receiver. | Block |
| 51 | Spam Block | The message was blocked by the receiver as coming from a known spam source. | Block |
| 52 | Spam Content | The message was blocked by the receiver as spam. | Block |
| 53 | Prohibited Attachment | The message was blocked by the receiver because it contained an attachment. | Block |
| 54 | Relaying Denied | The message was blocked by the receiver because relaying is not allowed. | Block |
| 60 | Auto-Reply | The message is an auto-reply/vacation mail. | Soft |
| 70 | Transient Failure | Message transmission has been temporarily delayed. | Soft |
| 80 | Subscribe | The message is a subscribe request. | Admin |
| 90 | Unsubscribe | The message is an unsubscribe request. | Hard |
| 100 | Challenge-Response | The message is a challenge-response probe. | Soft |

| [Prev](log_formats.rejectlog)  | [Up](log_formats) |  [Next](log_formats.connection.stages) |
| 35.9. `rejectlog`  | [Table of Contents](index) |  35.11. Connection Stages |

