|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.hostname)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.http_host.php) |

<a name="conf.ref.http_basic_auth"></a>
## Name

http_basic_auth — Define the user credentials when using basic HTTP authentication

## Synopsis

http_basic_auth = "*`user:password`*"

<a name="idp9790112"></a>
## Description

**Configuration Change. ** This option is available as of version 3.5.6.

Define the user credentials when using basic HTTP authentication. Use this option when the [delivery_method](conf.ref.delivery_method "delivery_method") uses an HTTP protocol. Use a ‘`:`’ to separate the username and password.

Theres is no default value for this option.

<a name="idp9794496"></a>
## Scope

`http_` is valid in the global, binding_group, binding and domain scopes.

<a name="idp9796096"></a>
## See Also

[http_basic_auth](conf.ref.http_basic_auth "http_basic_auth"), [http_method](conf.ref.http_method.php "http_method"), [http_uri](conf.ref.http_uri.php "http_uri"), [http_host](conf.ref.http_host.php "http_host"), [http_version](conf.ref.http_version.php "http_version") and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.hostname)  | [Up](conf.ref.files.php) |  [Next](conf.ref.http_host.php) |
| hostname  | [Table of Contents](index) |  http_host |
