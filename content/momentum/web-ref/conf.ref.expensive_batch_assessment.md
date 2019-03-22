| [Prev](conf.ref.exclude_vctx)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.force_fsync.php) |

<a name="conf.ref.expensive_batch_assessment"></a>
## Name

expensive_batch_assessment — only treat messages as different if the headers are rendered differently

## Synopsis

`expensive_batch_assessment = false`

<a name="idp9601184"></a>
## Description

When looking for messages that can be delivered as a batch, Momentum checks the headers and bodies of every MIME part of messages that were submitted as a batch—a batch being one transaction with multiple RCPT TOs. Normally, if the bodies or headers have been modified since reception, the messages are treated as different. Enabling `expensive_batch_assessment` renders the headers from each message to strings, and compares the strings, only treating the messages as different if the headers render differently. This enables messages with (identical) header modifications to be sent out in a batch, at the expense of more CPU load and IO. You should only enable this option if you are doing header modification using Sieve `ec_header_add` or DKIM signing, for example, and you want batched outbound delivery to continue to work despite this.

The default value for this option is `false`.

<a name="idp9605824"></a>
## Scope

expensive_batch_assessment is valid in the global scope.

| [Prev](conf.ref.exclude_vctx)  | [Up](conf.ref.files.php) |  [Next](conf.ref.force_fsync.php) |
| exclude_vctx  | [Table of Contents](index) |  force_fsync |
