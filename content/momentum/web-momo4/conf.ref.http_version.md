|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.http_uri)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.idle_timeout) |

<a name="conf.ref.http_version"></a>
## Name

http_version — Define the HTTP version to use

## Synopsis

`http_version = "1.1"`

<a name="idp24959520"></a>
## Description

Define which version of HTTP to use when `delivery_method` is set to an HTTP protocol. This option may be set to any one of the following values:

*   `0.9`

*   `1.0`

*   `1.1`

The default value for this option is `"1.1"`.

<a name="idp24966832"></a>
## Scope

`http_version` is valid in the global, binding_group, binding, and domain scopes.

<a name="idp24968688"></a>
## See Also

[delivery_method](conf.ref.delivery_method "delivery_method"), [http_basic_auth](conf.ref.http_basic_auth "http_basic_auth"), [http_method](conf.ref.http_method "http_method"), [http_uri](conf.ref.http_uri "http_uri"), [http_host](conf.ref.http_host "http_host"), [http_host](conf.ref.http_host "http_host"), and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.http_uri)  | [Up](config.options.ref) |  [Next](conf.ref.idle_timeout) |
| http_uri  | [Table of Contents](index) |  idle_timeout |

