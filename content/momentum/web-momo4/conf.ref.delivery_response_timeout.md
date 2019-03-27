| [Prev](config.ref.delivery_pool)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.disable_nagle_algorithm) |

<a name="conf.ref.delivery_response_timeout"></a>
## Name

delivery_response_timeout — time to wait for a response to an outbound request

## Synopsis

`delivery_response_timeout = 5000`

<a name="idp24324992"></a>
## Description

The time in milliseconds to wait for a response to an outbound request. Use this option when `delivery_method` is set to an HTTP protocol.

The default value is `5000`.

This option was introduced to define the delivery response timeout for Mobile push notifications. Use it in the following way:

```
domain "apn_example.com"{
  ...
  delivery_method = "apn"
  routes = ("apn://gateway.push.apple.com?port=2195")
  idle_timeout = 10
  delivery_response_timeout = 1000
}
domain "gcm.example.com" {
  ...
  delivery_method = "gcm"
  routes = ("gcm://android.google.apis.com?port=443")
  idle_timeout = 10
  delivery_response_timeout = 1000
}
```
<a name="idp24329152"></a>
## Scope

`delivery_response_timeout` is valid in the global, binding, and domain scopes.

<a name="idp24331008"></a>
## See Also

[idle_timeout](conf.ref.idle_timeout "idle_timeout"), [delivery_method](conf.ref.delivery_method "delivery_method"), and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

| [Prev](config.ref.delivery_pool)  | [Up](config.options.ref) |  [Next](conf.ref.disable_nagle_algorithm) |
| delivery_pool  | [Table of Contents](index) |  disable_nagle_algorithm |

