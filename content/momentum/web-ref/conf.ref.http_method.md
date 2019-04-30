|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.http_host)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.http_uri.php) |

<a name="conf.ref.http_method"></a>
## Name

http_method — Define the HTTP method to use

## Synopsis

`http_method = "POST"`

<a name="idp9820576"></a>
## Description

**Configuration Change. ** This option is available as of version 3.5.6.

Define the HTTP method to use when `delivery_method` is set to an HTTP protocol. This option may be set to the following values:

*   `POST`

*   `SET`

*   `GET`

*   `DELETE`

The default value for this option is `"POST"`.

<a name="idp9829776"></a>
## Scope

`http_method` is valid in the global, binding_group, binding and domain scopes.

<a name="idp9831472"></a>
## See Also

[http_basic_auth](conf.ref.http_basic_auth "http_basic_auth"), [delivery_method](conf.ref.delivery_method.php "delivery_method"), [http_uri](conf.ref.http_uri.php "http_uri"), [http_host](conf.ref.http_host.php "http_host"), [http_version](conf.ref.http_version.php "http_version") and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.http_host)  | [Up](conf.ref.files.php) |  [Next](conf.ref.http_uri.php) |
| http_host  | [Table of Contents](index) |  http_uri |
