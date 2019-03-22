| [Prev](conf.ref.host_failure_retry)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.http_host) |

<a name="conf.ref.http_basic_auth"></a>
## Name

http_basic_auth — Define the user credentials when using basic HTTP authentication

## Synopsis

http_basic_auth = "*`user:password`*"

<a name="idp24886992"></a>
## Description

Define the user credentials when using basic HTTP authentication. Use this option when the [delivery_method](conf.ref.delivery_method "delivery_method") uses an HTTP protocol. Use a ‘`:`’ to separate the username and password.

Theres is no default value for this option.

<a name="idp24889984"></a>
## Scope

`http_` is valid in the global, binding_group, binding, and domain scopes.

<a name="idp24891840"></a>
## See Also

[http_basic_auth](conf.ref.http_basic_auth "http_basic_auth"), [http_method](conf.ref.http_method "http_method"), [http_uri](conf.ref.http_uri "http_uri"), [http_host](conf.ref.http_host "http_host"), [http_version](conf.ref.http_version "http_version"), and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

| [Prev](conf.ref.host_failure_retry)  | [Up](config.options.ref) |  [Next](conf.ref.http_host) |
| host_failure_retry  | [Table of Contents](index) |  http_host |

