|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.mx_failures_fallback_to_a)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.never_attempt_expired_messages.php) |

<a name="conf.ref.mx_failures_to_delay"></a>
## Name

mx_failures_to_delay — number of consecutive failures before a domain is auto-delayed

## Synopsis

`MX_Failures_To_Delay = 50`

<a name="idp10448432"></a>
## Description

When Momentum detects that a domain has no contactable MXs, it will move all that domain's active messages into the delayed queue. This setting allows you to configure the sensitivity of Momentum to consecutive connection failures. Momentum will need MX_Failures_To_Delay consecutive failures for every MX in a domain to trigger a delay event. The default value is 50\. This is configurable both at a global and per-domain level. Setting this value to zero will disable the auto-delay feature.

### Warning

This is an advanced option. Making Momentum too sensitive to transient network connection problems will cause unnecessary delays in message delivery. Thorough testing is recommended prior to deployment in a production environment.

<a name="idp10451584"></a>
## Scope

mx_failures_to_delay is valid in the domain and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.mx_failures_fallback_to_a)  | [Up](conf.ref.files.php) |  [Next](conf.ref.never_attempt_expired_messages.php) |
| mx_failures_fallback_to_a  | [Table of Contents](index) |  never_attempt_expired_messages |
