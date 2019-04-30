|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.local_changes_only)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.mailerdaemon) |

<a name="conf.ref.mail_queue_check_vm_interval"></a>
## Name

mail_queue_check_vm_interval — how often to apply memory management reduction on mail queues

## Synopsis

`mail_queue_check_vm_interval = 60`

<a name="idp25167840"></a>
## Description

How often to apply memory management reduction on mail queues, based on the configured memory utilization limits.

By default, the system checks once a minute to see if too much memory is being used and attempts to swap out messages from the queues if usage is excessive.

The default value is `60`.

<a name="idp25171264"></a>
## Scope

mail_queue_check_vm_interval is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.local_changes_only)  | [Up](config.options.ref) |  [Next](conf.ref.mailerdaemon) |
| local_changes_only  | [Table of Contents](index) |  mailerdaemon |

