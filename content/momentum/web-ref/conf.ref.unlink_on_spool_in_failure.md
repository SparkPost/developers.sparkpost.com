| [Prev](conf.ref.umem_reap_interval)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.unsafe_spool) |

<a name="conf.ref.unlink_on_spool_in_failure"></a>
## Name

unlink_on_spool_in_failure — Whether or not to remove malformed messages

## Synopsis

`unlink_on_spool_in_failure = true`

<a name="idp12341184"></a>
## Description

When Momentum encounters a malformed message in the spool that cannot be read in, if this option is true, the message will be removed from the spool. If it is false the message will be ignored until the next Momentum restart. You would only want to set this to `false` if you encountered recurring spool in failures for different message IDs; this would allow the broken messages to be retained for analysis by Message Systems support.

The default value for this option is `true`.

<a name="idp12344576"></a>
## Scope

unlink_on_spool_in_failure is valid in the global scope.

| [Prev](conf.ref.umem_reap_interval)  | [Up](conf.ref.files) |  [Next](conf.ref.unsafe_spool) |
| umem_reap_interval  | [Table of Contents](index) |  _unsafe_spool |
