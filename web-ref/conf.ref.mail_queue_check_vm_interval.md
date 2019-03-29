|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.local_changes_only)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.mailerdaemon.php) |

<a name="conf.ref.mail_queue_check_vm_interval"></a>
## Name

mail_queue_check_vm_interval — how often to apply memory management reduction on mail queues

## Synopsis

`mail_queue_check_vm_interval = 60`

<a name="idp10065408"></a>
## Description

How often to apply memory management reduction on mail queues, based on the configured memory utilization limits.

By default, the system checks once a minute to see if too much memory is being used and attempts to swap out messages from the queues if usage is excessive.

The default value for this option is `60`.

<a name="idp10068560"></a>
## Scope

mail_queue_check_vm_interval is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.local_changes_only)  | [Up](conf.ref.files.php) |  [Next](conf.ref.mailerdaemon.php) |
| local_changes_only  | [Table of Contents](index) |  mailerdaemon |
