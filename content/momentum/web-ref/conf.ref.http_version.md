|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.http_uri)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.idle_timeout.php) |

<a name="conf.ref.http_version"></a>
## Name

http_version — Define the HTTP version to use

## Synopsis

`http_version = "1.1"`

<a name="idp9861024"></a>
## Description

**Configuration Change. ** This option is available as of version 3.5.6.

Define which version of HTTP to use when `delivery_method` is set to an HTTP protocol. This option may be set to any one of the following values:

*   `0.9`

*   `1.0`

*   `1.1`

The default value for this option is `"1.1"`.

<a name="idp9869120"></a>
## Scope

`http_version` is valid in the global, binding_group, binding and domain scopes.

<a name="idp9870720"></a>
## See Also

[delivery_method](conf.ref.delivery_method "delivery_method"), [http_basic_auth](conf.ref.http_basic_auth.php "http_basic_auth"), [http_method](conf.ref.http_method.php "http_method"), [http_uri](conf.ref.http_uri.php "http_uri"), [http_host](conf.ref.http_host.php "http_host"), [http_host](conf.ref.http_host.php "http_host") and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.http_uri)  | [Up](conf.ref.files.php) |  [Next](conf.ref.idle_timeout.php) |
| http_uri  | [Table of Contents](index) |  idle_timeout |
