|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_scope)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.address_metrics_lifetime) |

<a name="conf.ref.address_metrics_cleanse_interval"></a>
## Name

address_metrics_cleanse_interval — the interval for refreshing address metrics

## Synopsis

`address_metrics_cleanse_interval = 3600`

<a name="idp23429680"></a>
## Description

Address metrics store data on the quality of service to a particular target host from a particular binding; data such as the time since the last failure, and how long it takes to connect and to deliver a message. Address metrics are used to determine which of a domain's MXs to open more connections to. `address_metrics_cleanse_interval` controls how often stale entries are cleaned up. Normally this option does not need to be changed.

The default value is 3600 seconds.

<a name="idp23432768"></a>
## Scope

address_metrics_cleanse_interval is valid in the global scope.

<a name="idp23434528"></a>
## See Also

[address_metrics_lifetime](conf.ref.address_metrics_lifetime "address_metrics_lifetime")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_scope)  | [Up](config.options.ref) |  [Next](conf.ref.address_metrics_lifetime) |
| adaptive_scope  | [Table of Contents](index) |  address_metrics_lifetime |

