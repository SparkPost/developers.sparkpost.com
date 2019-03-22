| [Prev](conf.ref.adaptive_scope)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.address_metrics_lifetime.php) |

<a name="conf.ref.address_metrics_cleanse_interval"></a>
## Name

address_metrics_cleanse_interval — the interval for refreshing address metrics

## Synopsis

`Address_Metrics_Cleanse_Interval = 3600`

<a name="idp7416240"></a>
## Description

Address metrics store data on the quality of service to a particular target host from a particular binding; data such as the time since the last failure, and how long it takes to connect and to deliver a message. Address metrics are used to determine which of a domain's MXs to open more connections to. The address_metrics_cleanse_interval option controls how often stale entries are cleaned up. Normally this option does not need to be changed.

The default value for this option is 3600 seconds.

<a name="idp7418784"></a>
## Scope

Address_Metrics_Cleanse_Interval is valid in the global scope.

<a name="idp7420448"></a>
## See Also

[address_metrics_lifetime](conf.ref.address_metrics_lifetime "address_metrics_lifetime")

| [Prev](conf.ref.adaptive_scope)  | [Up](conf.ref.files.php) |  [Next](conf.ref.address_metrics_lifetime.php) |
| adaptive_scope  | [Table of Contents](index) |  address_metrics_lifetime |
