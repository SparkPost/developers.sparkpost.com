| [Prev](conf.ref.max_resident_transfails)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.max_retry_interval) |

<a name="conf.ref.max_retries"></a>
## Name

max_retries — override the system configured max_retries

## Synopsis

`max_retries = "auto"`

`max_retries = "none"`

`max_retries = 5`

<a name="idp25430048"></a>
## Description

By default, Momentum uses the `message_expiration` configuration setting to determine when a message's lifetime has been exceeded. Optionally, `max_retries` allows you to specify a fixed maximum number of delivery retries for a message before it is permanently failed.

'auto', the default setting calculates the maximum number of retries based on the message's message_expiration. 'none' never limits the number of retries of a message, falling back to rely only on message_expiration. These are subtly different in that manual flushing attempts can preempt the normal retry schedule for a message, causing the 'auto' limit to be hit before Message_Expiration would otherwise dictate.

Momentum employs an exponential back-off scheme for retrying messages. On the first failure the message is retried `retry_interval` seconds later. On the second failure, twice that and so on until either `max_retries` or `message_expiration` is reached.

If you wish to disable Momentum's exponential back-off scheme so that a message is retried at a fixed interval a specified number, use the following settings:

```
retry_interval = 1200
max_retry_interval = 1200
max_retries = 5
```

In this example, a bounced message will be retried every 1200 seconds and will expire in 6000 seconds—after five retries—unless `message_expiration` is set to a value lower than 6000\. in which case, the message will expire in `messsage_expiration` seconds.

### Warning

The default value for `max_retries` is "auto" so be sure to change it to a positive integer or "none" if you plan to use `max_retry_interval`. When `max_retries` is set to a positive integer, messages expire within `messsage_expiration` seconds or after the specified number of retries, whichever occurs first. When `max_retries` is "none" there is no limit on the number of retries of a message; the message will expire by `message_expiration` only.

<a name="idp25442384"></a>
## Scope

`max_retries` is valid in the binding, binding_group, domain and global scopes.

<a name="idp25444688"></a>
## See Also

[message_expiration](conf.ref.message_expiration "message_expiration") and [max_retry_interval](conf.ref.max_retry_interval "max_retry_interval")

| [Prev](conf.ref.max_resident_transfails)  | [Up](config.options.ref) |  [Next](conf.ref.max_retry_interval) |
| max_resident_transfails  | [Table of Contents](index) |  max_retry_interval |

