|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.scope_max_outbound_connections)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.security) |

<a name="conf.ref.scheduler"></a>
## Name

scheduler — override the default IO scheduler

## Synopsis

`scheduler = "scheduler-name"`

<a name="idp26439168"></a>
## Description

Momentum automatically selects the best available I/O scheduling mechanism for the platform on which it is running. You should not change this option unless advised by a Message Systems support engineer.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp26442208"></a>
## Scope

`scheduler` is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.scope_max_outbound_connections)  | [Up](config.options.ref) |  [Next](conf.ref.security) |
| scope_max_outbound_connections  | [Table of Contents](index) |  security |

