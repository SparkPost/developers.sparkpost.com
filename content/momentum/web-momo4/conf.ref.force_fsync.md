|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.expensive_batch_assessment)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.fully_resolve_before_smtp) |

<a name="conf.ref.force_fsync"></a>
## Name

force_fsync — ensure that data is synced to disk on reception

## Synopsis

`force_fsync = false`

`force_fsync = true`

<a name="idp24696192"></a>
## Description

Upon receiving a message, but before a 250 response is sent to the client confirming receipt of that message, Momentum must write the message to the spool. If the system does not invoke the `fsync` call, it cannot guarantee that the message has been completely journalled to permanent storage.

If this option is set to true, `fsync` (or `fdatasync` if available) will be called prior to returning a confirmation to the SMTP client. If it is false, the system will not.

Mail systems concerned about losing messages during a system crash should set this option to `true`

The default is `false`.

<a name="idp24702096"></a>
## Scope

force_fsync is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.expensive_batch_assessment)  | [Up](config.options.ref) |  [Next](conf.ref.fully_resolve_before_smtp) |
| expensive_batch_assessment  | [Table of Contents](index) |  fully_resolve_before_smtp |

