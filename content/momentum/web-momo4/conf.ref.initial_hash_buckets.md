|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.inbound_throttle_messages)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.inline_transfail_processing) |

<a name="conf.ref.initial_hash_buckets"></a>
## Name

initial_hash_buckets — Set the number of hash buckets used by the system

## Synopsis

`initial_hash_buckets = 32`

<a name="idp25012352"></a>
## Description

This option sets the number of hash buckets used by the system

If this value is set too low, the system will incur additional overhead during rehashing in order to enlarge the tables to match your workload. Setting this value too high uses more memory, but does not otherwise reduce system performance. If the environmental variable `ECELERITY_TRACE_EC_HASH` is set, the system will collect distribution metrics and display a simple histogram to `stderr` when it exits. Turning on ECELERITY_TRACE_EC_HASH will impact performance.

The default value is `32`.

<a name="idp25016896"></a>
## Scope

`initial_hash_buckets` is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.inbound_throttle_messages)  | [Up](config.options.ref) |  [Next](conf.ref.inline_transfail_processing) |
| inbound_throttle_messages  | [Table of Contents](index) |  inline_transfail_processing |

