|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.never_retry)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.opendkim_sign.php) |

<a name="conf.ref.only_use_best_mx_for_relay_domains"></a>
## Name

only_use_best_mx_for_relay_domains — If this is set to "true", only the lowest numerical priority MXs are used when sending to domains listed in Bounce_Domains or Relay_Domains.

## Synopsis

`only_use_best_mx_for_relay_domains = false`

<a name="idp10485760"></a>
## Description

When the `only_use_best_mx_for_relay_domains` option is set to "true", only the lowest numerical priority MXs are used when sending to domains listed in `Bounce_Domains` or `relay_domains`; others are ignored. This was the behavior prior to version 2.2.2.30\. If this value is set to false, all MXs will be used. The default value for this option is `true`. (However, this option is typically set to `false` in the default `ecelerity.conf` file.) We suggest setting this to `false` if you use the `Routes` option.

### Note

The `relay_domains` value that interacts with `only_use_best_mx_for_relay_domains` is the one set in the global scope; any `relay_domains` set in pathway scopes will **not** be affected.

<a name="idp10494144"></a>
## Scope

only_use_best_mx_for_relay_domains is valid in the global scope.

<a name="idp10495808"></a>
## See Also

[routes](conf.ref.routes "routes"), [bounce_domains](conf.ref.bounce_domains.php "bounce_domains"), [relay_domains](conf.ref.relay_domains.php "relay_domains")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.never_retry)  | [Up](conf.ref.files.php) |  [Next](conf.ref.opendkim_sign.php) |
| never_retry  | [Table of Contents](index) |  opendkim_sign |
