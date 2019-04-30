|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delayed_queue_scan_interval)  | Chapter 72. Configuration Options Reference |  [Next](config.ref.delivery_pool) |

<a name="conf.ref.delivery_method"></a>
## Name

delivery_method — set the delivery method

## Synopsis

`Delivery_Method = "ESMTP"`

`Delivery_Method = "SMTP"`

`Delivery_Method = "LMTP"`

`Delivery_Method = "ECSTREAM"`

`Delivery_Method = "APN"`

`Delivery_Method = "GCM"`

`Delivery_Method = "MM7"`

<a name="idp24279584"></a>
## Description

This option directs Momentum to perform deliveries via ESMTP, LMTP (Local Mail Transport Protocol), SMTP, ECSTREAM, APN, GCM, and MM7.

`ESMTP` is the default value.

*   Use `apn` to deliver Apple push notifications.

*   Use `gcm` to deliver Google push notifications.

*   Use `mm7` for multimedia messaging.

The `delivery_method` option is used in combination with [routes](conf.ref.routes "routes"). Use `delivery_method` in the following way:

```
domain "apn_example.com"{
  ...
  delivery_method = "apn"
  routes = ("apn://gateway.push.apple.com?port=2195")
}
domain "gcm.example.com" {
  ...
  delivery_method = "gcm"
  routes = ("gcm://android.google.apis.com?port=443")
}
```

Typically, with push notifications `delivery_method` will be defined within a domain scope applicable to the Apple or Google application that is receiving the notifications. For a detailed description of configuring Momentum for push notifications see [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/).

For domain configuration when the `delivery_method` is `mm7` see [Domain Configuration for MM7](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.config).

<a name="idp24293856"></a>
## Scope

`delivery_method` is valid in the binding, binding_group, domain, and global scopes.

<a name="idp24296160"></a>
## See Also

[ecstream_port](conf.ref.ecstream_port "ecstream_port"), [lmtp_port](conf.ref.lmtp_port "lmtp_port"), [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/), [msg:get_delivery_method](lua.ref.msg_get_delivery_method "msg:get_delivery_method"), and [routes](conf.ref.routes "routes")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delayed_queue_scan_interval)  | [Up](config.options.ref) |  [Next](config.ref.delivery_pool) |
| delayed_queue_scan_interval  | [Table of Contents](index) |  delivery_pool |

