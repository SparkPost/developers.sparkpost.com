|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.address_metrics_cleanse_interval)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.alias_schemes) |

<a name="conf.ref.address_metrics_lifetime"></a>
## Name

address_metrics_lifetime — the TTL of address metrics

## Synopsis

`address_metrics_lifetime = 1800`

<a name="idp23456528"></a>
## Description

Address metrics store data on the quality of service to a particular target host from a particular binding; data such as the time since the last failure, and how long it takes to connect and to deliver a message. Address metrics are used to determine which of a domain's MXs to open more connections to. `address_metrics_lifetime` controls how long a set of address metrics will live after last being updated. Normally this option does not need to be changed.

The default value is 1800 seconds.

<a name="idp23459344"></a>
## Scope

address_metrics_lifetime is valid in the global scope.

<a name="idp23461104"></a>
## See Also

[address_metrics_cleanse_interval](conf.ref.address_metrics_cleanse_interval "address_metrics_cleanse_interval")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.address_metrics_cleanse_interval)  | [Up](config.options.ref) |  [Next](conf.ref.alias_schemes) |
| address_metrics_cleanse_interval  | [Table of Contents](index) |  alias_schemes |

