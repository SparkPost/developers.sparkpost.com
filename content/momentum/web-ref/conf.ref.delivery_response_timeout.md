|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delivery_pool)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.disable_nagle_algorithm.php) |

<a name="conf.ref.delivery_response_timeout"></a>
## Name

delivery_response_timeout — time to wait for a response to an outbound request

## Synopsis

`delivery_response_timeout = 5000`

<a name="idp8946240"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.5.5.

The time in milliseconds to wait for a response to an outbound request. Use this option when `delivery_method` is set to an HTTP protocol.

The default value for this option is `5000`.

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
<a name="idp8951600"></a>
## Scope

`delivery_response_timeout` is valid in the global, binding and domain scopes.

<a name="idp8953296"></a>
## See Also

[idle_timeout](conf.ref.idle_timeout "idle_timeout"), [delivery_method](conf.ref.delivery_method.php "delivery_method") and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delivery_pool)  | [Up](conf.ref.files.php) |  [Next](conf.ref.disable_nagle_algorithm.php) |
| delivery_pool  | [Table of Contents](index) |  disable_nagle_algorithm |
