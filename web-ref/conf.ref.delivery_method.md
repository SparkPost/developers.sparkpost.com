|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delayed_queue_scan_interval)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.delivery_pool.php) |

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

<a name="idp8893536"></a>
## Description

This option directs Momentum to perform deliveries via ESMTP, LMTP (Local Mail Transport Protocol), SMTP, ECSTREAM, APN, GCM and MM7.

The `ECSTREAM` option is available as of version 3.1.4\. `ESMTP` is the default value for this option.

Use `apn` to deliver Apple push notifications.

Use `gcm` to deliver Google push notifications.

Use `mm7` for multimedia messaging.

<a name="conf.ref.delivery_method.push"></a>
## Delivery Methods in Version 3.5.6

As of version 3.5.6 and higher the `delivery_method` option can also be defined as:

*   `apn` – The Apple Push Notification protocol

*   `gcm` – The Google Cloud Messages protocol

*   `mm7` – For the mm7 protocol

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

<a name="idp8914032"></a>
## Scope

`delivery_method` is valid in the binding, binding_group, domain and global scopes.

<a name="idp8916112"></a>
## See Also

[lmtp_port](conf.ref.lmtp_port "lmtp_port"), [ecstream_port](conf.ref.ecstream_port.php "ecstream_port"), [routes](conf.ref.routes.php "routes"), [msg:get_delivery_method](lua.ref.msg_get_delivery_method.php "msg:get_delivery_method"), [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delayed_queue_scan_interval)  | [Up](conf.ref.files.php) |  [Next](conf.ref.delivery_pool.php) |
| delayed_queue_scan_interval  | [Table of Contents](index) |  delivery_pool |
