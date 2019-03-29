|     |     |     |
| --- | --- | --- |
| [Prev](snmp-mib.omniti)  | Part III. Appendices |  [Next](webui-common.example) |

## SMTP Response Codes

The SMTP response codes and their meanings are shown in the following table.

### Note

Prior to versions 3.1 and 2.2.3.47, Momentum would not respond correctly to a 251 (User not local; Will be forwarded) response from a remote server. It put the message in the delayed queue.

<a name="ug-smtp-codes"></a>

**Table C.1. SMTP response codes**

| Code | Meaning |
| --- | --- |
| 211 | System status, or system help reply |
| 214 | Help message |
| 220 | *`example.com`* service ready |
| 221 | *`example.com`* service closing transmission channel |
| 250 | Requested mail action okay, completed |
| 251 | User not local; will forward to *`forward-path`* |
| 354 | Start mail input; end with &lt;CRLF>.&lt;CRLF> |
| 421 | *`example.com`* service not available, closing transmission channel |
| 450 | Requested mail action not taken: mailbox unavailable |
| 451 | Requested action aborted: error in processing |
| 452 | Requested action not taken: insufficient system storage |
| 500 | Syntax error, command unrecognized |
| 501 | Syntax error in parameters or arguments |
| 502 | Command not implemented |
| 503 | Bad sequence of commands |
| 504 | Command parameter not implemented |
| 550 | Requested action not taken: mailbox unavailable |
| 551 | User not local; please try &lt;forward-path> |
| 552 | Requested mail action aborted: exceeded storage allocation |
| 553 | Requested action not taken: mailbox name not allowed |
| 554 | Transaction failed |


|     |     |     |
| --- | --- | --- |
| [Prev](snmp-mib.omniti)  | [Up](p.appendices) |  [Next](webui-common.example) |
| B.3. The `OMNITI-SNMP-MIB.txt` file  | [Table of Contents](index) |  Appendix D. Example LDAP `webui-common.conf` File |
