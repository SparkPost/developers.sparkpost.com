|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.generate_delay_dsn)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.host) |

<a name="conf.ref.growbuf_size"></a>
## Name

growbuf_size — The size of an element in a growbuf chain

## Synopsis

`growbuf_size = 16384`

<a name="idp24806960"></a>
## Description

Momentum uses a growbuf chain to hold message contents as they are received. The chain allows reception of messages into memory without first having to know how much memory to allocate. By default, each element in the chain is 16k in size, meaning that the first 16k of a message will occupy one growbuf, the next will occupy the second in the chain and so forth. When the memory usage for a growbuf chain exceeds the `large_message_threshold`, the growbuf chain is swapped to disk and reception continues.

For better performance, you should ensure that the `growbuf_size` is large enough to accomodate the typical message size you see entering your system. This will cause the majority of your messages to fit in a single growbuf and reduce the amount of work required to receive those messages.

Raising `growbuf_size` too high will be a waste of memory, so you should not set this value based on the maximum message size you expect to transit; Momentum will still continue to function well even if the message size greatly exceeds the `growbuf_size`.

The default is 16384 bytes. If the majority of your messages are larger than the default, then you could consider adjusting the `growbuf_size` upwards so that the system will run more efficiently.

<a name="idp24813536"></a>
## Scope

growbuf_size is valid in the global scope.

<a name="idp24815360"></a>
## See Also

[large_message_threshold](conf.ref.large_message_threshold "large_message_threshold")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.generate_delay_dsn)  | [Up](config.options.ref) |  [Next](conf.ref.host) |
| generate_delay_dsn  | [Table of Contents](index) |  host |

