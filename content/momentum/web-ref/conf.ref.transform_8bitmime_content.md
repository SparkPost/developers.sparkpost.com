| [Prev](conf.ref.transfail_drain_rate)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.umem_reap_interval.php) |

<a name="conf.ref.transform_8bitmime_content"></a>
## Name

transform_8bitmime_content — Enable 8BITMIME downconversion when sending mail

## Synopsis

`transform_8bitmime_content = "no"`

`transform_8bitmime_content = "ifneeded"`

`transform_8bitmime_content = "strict"`

`transform_8bitmime_content = "strip"`

<a name="idp12308496"></a>
## Description

When set to `ifneeded`, if a message to be sent to a remote MTA contains 8-bit data and the remote MTA did not advertise support for 8BITMIME, then Momentum will strip the 8th bit from the data, as per RFC 1652.

When set to `no` (the 2.2 default), then Momentum will send the data as is.

Set to `strict` for strict compliance with RFC1652\. Do proper Quoted-Printable (QP) encoding of eight bit data, subsequently scanning the re-encoded message for leftover 8 bit characters. If any are found, the message is permanently failed. Setting this option to `strip` strips the high bit from all characters in the body, guaranteeing that the data is transferred as 7-bit content. This mode of operation is contrary to that permitted by RFC1652, and its use is discouraged.

### Note

This option has no effect on whether Momentum informs the remote MTA that 8BITMIME data is going to be sent, it simply downgrades to 7-bits. Use the `Send_8BitMime` to control 8BITMIME notification.

As of version 3.1.6, the default value for this option is `ifneeded`. Prior to this, the default value was `no`.

For RFC 1652 compliance you should set `Send_8BitMime` to `ifavailable` and `Transform_8BitMime_Content` to `ifneeded`.

<a name="idp12319136"></a>
## Scope

Transform_8BitMime_Content is valid in the global, binding_group, binding and domain scopes.

<a name="idp12320832"></a>
## See Also

[send_8bitmime](conf.ref.send_8bitmime "send_8bitmime")

| [Prev](conf.ref.transfail_drain_rate)  | [Up](conf.ref.files.php) |  [Next](conf.ref.umem_reap_interval.php) |
| transfail_drain_rate  | [Table of Contents](index) |  umem_reap_interval |
