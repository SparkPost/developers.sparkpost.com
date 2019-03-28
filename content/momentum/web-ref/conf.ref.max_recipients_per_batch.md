|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.max_outbound_connections)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.max_recipients_per_connection.php) |

<a name="conf.ref.max_recipients_per_batch"></a>
## Name

max_recipients_per_batch — maximum number of recipients to send in a single outbound message transaction

## Synopsis

`Max_Recipients_Per_Batch = 100`

<a name="idp10241952"></a>
## Description

For a given multi-recipient message leaving the system, this configuration directive specifies the maximum number of recipients to be sent for a given batch.

If a message has `200` recipients and `Max_Recipients_Per_Batch` is set to `100` (the default), then Momentum will attempt to deliver the message in two batches containing 100 recipients. The default value for this option is `100`.

<a name="idp10246336"></a>
## Scope

max_recipients_per_batch is valid in the binding, binding_group, domain and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.max_outbound_connections)  | [Up](conf.ref.files.php) |  [Next](conf.ref.max_recipients_per_connection.php) |
| max_outbound_connections  | [Table of Contents](index) |  max_recipients_per_connection |
