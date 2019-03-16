| [Prev](conf.ref.http_version)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.inbound_throttle_messages.php) |

<a name="conf.ref.idle_timeout"></a>
## Name

idle_timeout — time to maintain idle outbound connections

## Synopsis

`idle_timeout = 5`

<a name="idp9882736"></a>
## Description

The amount of time in seconds to hold open an idle connection when there are no messages currently deliverable for that domain. Momentum holds SMTP sessions open for this amount of time in case another message should enter the queue destined for that host. The default value for this option is `5`.

<a name="conf.ref.idle_timeout.push"></a>
## Usage in Version 3.5.6

As of version 3.5.6 the `idle_timeout` option is also used to define idle connections for Apple Push Notifications (APN), Google Cloud Messages (GCM) and MM7.

Use this option in the following way:

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
domain "mm7.example.com" { 
  ...
  delivery_method = "mm7"
  http_basic_auth = "admin:admin" 
  mm7_vasid = "test_domain_vas_id" 
  mm7_vaspid = "test_global_vasp_id" 
  mm7_message_class="personal" 
  mm7_delivery_report="true"
  idle_timeout = 300
  ..." 
}
```

For a detailed description of configuring Momentum for push notifications see [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/). For configuring MM7 see [Mobile Momentum MM7](https://support.messagesystems.com/docs/web-mobility/mobility.mm7).

<a name="idp9891184"></a>
## Scope

`idle_timeout` is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.http_version)  | [Up](conf.ref.files.php) |  [Next](conf.ref.inbound_throttle_messages.php) |
| http_version  | [Table of Contents](index) |  inbound_throttle_messages |
