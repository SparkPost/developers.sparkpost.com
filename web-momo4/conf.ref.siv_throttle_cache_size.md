| [Prev](conf.ref.signing_stats)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.skip_hosts) |

<a name="conf.ref.siv_throttle_cache_size"></a>
## Name

siv_throttle_cache_size — set the maximum number of named throttles

## Synopsis

`siv_throttle_cache_size = 1000`

<a name="idp26589840"></a>
## Description

This option sets the maximum number of named throttles created by Lua scripts. If you try to create more throttles than this value, throttles created earlier will be destroyed.

The default value is `1000` (because Adaptive Delivery makes heavy use of throttles).

<a name="idp26592784"></a>
## Scope

`siv_throttle_cache_size` is valid in the global scope.

<a name="idp26595056"></a>
## See Also

[Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery")

| [Prev](conf.ref.signing_stats)  | [Up](config.options.ref) |  [Next](conf.ref.skip_hosts) |
| signing_stats  | [Table of Contents](index) |  skip_hosts |

