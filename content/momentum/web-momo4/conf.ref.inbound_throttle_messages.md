|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.idle_timeout)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.initial_hash_buckets) |

<a name="conf.ref.inbound_throttle_messages"></a>
## Name

inbound_throttle_messages — rate limit inbound mail

## Synopsis

`inbound_throttle_messages = "3"`

`inbound_throttle_messages = "3/60"`

<a name="idp24999600"></a>
## Description

This allows you to limit the rate at which Momentum will accept messages from the network. By default, there are no artificial limitations on the acceptance rate (it accepts as quickly as possible). Sometimes limiting the acceptance rate gives finer control to the entire mailing process as well as controlling sudden bursts of inbound mail.

If a single integer parameter is provided, Momentum will ensure that no more than the specified number of messages are received in a given second of time. If a proper fraction parameter is provided, Momentum will limit the number of received message to the number specified in the numerator over the time window in seconds specified by the denominator.

For a discussion of throttles and fallback see [the section called “Throttles and Fallback”](conf.ref.outbound_throttle_messages#conf.ref.outbound_throttle_messages.fallback "Throttles and Fallback").

<a name="idp25003680"></a>
## Scope

inbound_throttle_messages is valid in the global, pathway_group, and pathway scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.idle_timeout)  | [Up](config.options.ref) |  [Next](conf.ref.initial_hash_buckets) |
| idle_timeout  | [Table of Contents](index) |  initial_hash_buckets |

