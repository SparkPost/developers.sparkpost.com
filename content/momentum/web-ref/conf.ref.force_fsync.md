| [Prev](conf.ref.expensive_batch_assessment)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.fully_resolve_before_smtp.php) |

<a name="conf.ref.force_fsync"></a>
## Name

force_fsync — ensure that data is synced to disk on reception

## Synopsis

`Force_Fsync = false`

`Force_Fsync = true`

<a name="idp9614864"></a>
## Description

Upon receiving a message, but before a 250 response is sent to the client confirming receipt of that message, Momentum must write the message to the spool. If the system does not invoke the `fsync` call, it cannot guarantee that the message has been completely journalled to permanent storage.

If this option is set to true, `fsync` (or `fdatasync` if available) will be called prior to returning a confirmation to the SMTP client. If it is false, the system will not.

Mail systems concerned about losing messages during a system crash should set this option to `true`

The default is `false`.

<a name="idp9620448"></a>
## Scope

force_fsync is valid in the global scope.

| [Prev](conf.ref.expensive_batch_assessment)  | [Up](conf.ref.files.php) |  [Next](conf.ref.fully_resolve_before_smtp.php) |
| expensive_batch_assessment  | [Table of Contents](index) |  fully_resolve_before_smtp |
