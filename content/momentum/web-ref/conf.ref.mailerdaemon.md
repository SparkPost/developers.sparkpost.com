| [Prev](conf.ref.mail_queue_check_vm_interval)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.mailfrom_timeout.php) |

<a name="conf.ref.mailerdaemon"></a>
## Name

mailerdaemon — set the From: address for MDNs

## Synopsis

`MailerDaemon = "mailer-daemon@hostname"`

<a name="idp10076816"></a>
## Description

When sending bounce messages upon a permanent delivery failure of a message, the recipient is specified as the original sender, the envelop sender is null, but the "From:" header is dictated by Momentum as "mailer-daemon@hostname" where hostname is the hostname of the local machine, as returned by `gethostname` . Alternatively, it can be explicitly set using this option.

<a name="idp10079248"></a>
## Scope

mailerdaemon is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.mail_queue_check_vm_interval)  | [Up](conf.ref.files.php) |  [Next](conf.ref.mailfrom_timeout.php) |
| mail_queue_check_vm_interval  | [Table of Contents](index) |  mailfrom_timeout |
