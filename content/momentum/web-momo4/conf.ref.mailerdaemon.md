|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.mail_queue_check_vm_interval)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.mailfrom_timeout) |

<a name="conf.ref.mailerdaemon"></a>
## Name

mailerdaemon — set the From: address for MDNs

## Synopsis

`mailerdaemon = "mailer-daemon@hostname"`

<a name="idp25180544"></a>
## Description

When sending bounce messages upon a permanent delivery failure of a message, the recipient is specified as the original sender, the envelop sender is null, but the "From:" header is dictated by Momentum as "mailer-daemon@hostname" where hostname is the hostname of the local machine, as returned by `gethostname` . Alternatively, it can be explicitly set using this option.

<a name="idp25183168"></a>
## Scope

mailerdaemon is valid in the binding, binding_group, domain, and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.mail_queue_check_vm_interval)  | [Up](config.options.ref) |  [Next](conf.ref.mailfrom_timeout) |
| mail_queue_check_vm_interval  | [Table of Contents](index) |  mailfrom_timeout |

