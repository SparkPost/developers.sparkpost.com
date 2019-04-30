|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.never_attempt_expired_messages)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.only_use_best_mx_for_relay_domains) |

<a name="conf.ref.never_retry"></a>
## Name

never_retry — whether or not to retry delivery of failed messages

## Synopsis

`never_retry = false`

<a name="idp25635520"></a>
## Description

Whether or not to retry delivery of failed messages. If it is set to true, then instead of re-queuing the message, the message is failed with: "554 5.4.7 [internal] exceeded max retries without delivery".

The default value is `false`.

<a name="idp25638448"></a>
## Scope

never_retry is valid in the global, domain, binding, and binding_group scopes.

<a name="idp25640320"></a>
## See Also

[retry_interval](conf.ref.retry_interval "retry_interval")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.never_attempt_expired_messages)  | [Up](config.options.ref) |  [Next](conf.ref.only_use_best_mx_for_relay_domains) |
| never_attempt_expired_messages  | [Table of Contents](index) |  only_use_best_mx_for_relay_domains |

