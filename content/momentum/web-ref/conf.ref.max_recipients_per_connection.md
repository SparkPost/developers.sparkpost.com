| [Prev](conf.ref.max_recipients_per_batch)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.max_resident_active_queue.php) |

<a name="conf.ref.max_recipients_per_connection"></a>
## Name

max_recipients_per_connection — maximum number of recipients to send on a connection

## Synopsis

`Max_Recipients_Per_Connection = 0`

<a name="idp10255168"></a>
## Description

If set to `0` (the default), then no maximum limit will be enforced, otherwise, it specifies the maximum number of RCPT TO commands that can be used on a given connection. This is similar to `Max_Deliveries_Per_Connection` but takes into account multi-recipient outbound mail.

<a name="idp10258208"></a>
## Scope

max_recipients_per_connection is valid in the binding, binding_group, domain, listener, listen and global scopes.

<a name="idp10260624"></a>
## See Also

[max_deliveries_per_connection](conf.ref.max_deliveries_per_connection "max_deliveries_per_connection")

| [Prev](conf.ref.max_recipients_per_batch)  | [Up](conf.ref.files.php) |  [Next](conf.ref.max_resident_active_queue.php) |
| max_recipients_per_batch  | [Table of Contents](index) |  max_resident_active_queue |
