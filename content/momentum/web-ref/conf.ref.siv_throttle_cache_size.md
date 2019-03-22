| [Prev](conf.ref.signing_stats)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.snmp.php) |

<a name="conf.ref.siv_throttle_cache_size"></a>
## Name

siv_throttle_cache_size — set the maximum number of named throttles

## Synopsis

`siv_throttle_cache_size = 1000`

<a name="idp11757552"></a>
## Description

This option sets the maximum number of named throttles created by the Sieve command **ec_throttle_create** and by Lua scripts. If you try to create more throttles than this value, throttles created earlier will be destroyed. Prior to version 3.0.24, the value of this option defaults to `100`. This option should only be changed if you need to use more than 100 named throttles.

**Configuration Change. ** As of version 3.0.24, the default value for this option has been increased to `1000`. This was done because Adaptive Delivery makes heavy use of throttles.

<a name="idp11763104"></a>
## Scope

`siv_throttle_cache_size` is valid in the global scope.

<a name="idp11765152"></a>
## See Also

[ec_throttle](sieve.ref.ec_throttle "ec_throttle"), [Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive.php "14.2. adaptive – Adaptive Delivery")

| [Prev](conf.ref.signing_stats)  | [Up](conf.ref.files.php) |  [Next](conf.ref.snmp.php) |
| signing_stats  | [Table of Contents](index) |  SNMP |
