| [Prev](conf.ref.http_host)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.http_uri) |

<a name="conf.ref.http_method"></a>
## Name

http_method — Define the HTTP method to use

## Synopsis

`http_method = "POST"`

<a name="idp24917440"></a>
## Description

Define the HTTP method to use when `delivery_method` is set to an HTTP protocol. This option may be set to the following values:

*   `POST`

*   `SET`

*   `GET`

*   `DELETE`

The default value for this option is `"POST"`.

<a name="idp24926096"></a>
## Scope

`http_method` is valid in the global, binding_group, binding, and domain scopes.

<a name="idp24927952"></a>
## See Also

[http_basic_auth](conf.ref.http_basic_auth "http_basic_auth"), [delivery_method](conf.ref.delivery_method "delivery_method"), [http_uri](conf.ref.http_uri "http_uri"), [http_host](conf.ref.http_host "http_host"), [http_version](conf.ref.http_version "http_version"), and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

| [Prev](conf.ref.http_host)  | [Up](config.options.ref) |  [Next](conf.ref.http_uri) |
| http_host  | [Table of Contents](index) |  http_uri |

