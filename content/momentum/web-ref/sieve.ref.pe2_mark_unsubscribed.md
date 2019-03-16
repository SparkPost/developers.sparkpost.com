| [Prev](sieve.ref.pe2_mark_bounced)  | 16.2. Sieve Function Details |  [Next](sieve.ref.qp_encode) |

<a name="sieve.ref.pe2_mark_unsubscribed"></a>
## Name

pe2_mark_unsubscribed — log unsubscribe events when the pe2_logger module is loaded passively

## Synopsis

`pe2_mark_unsubscribed`

<a name="idp31074176"></a>
## Description

### Note

This function requires that the pe2_logger module be loaded.

Use this function to log unsubscribe events when the pe2_logger module is loaded in passive mode. Note that on an inbound MTA the pe2_logger module must be loaded in passive mode. You may use any Sieve logic you wish to determine whether an incoming message is an unsubscribe. In the following example this is done by prefixing `unsub-` to the local part of the address.

<a name="idp31077328"></a>

**Example 16.117. pe2_mark_unsubscribed example**

```
if envelope :localpart :matches "to" "unsub-*" {
  $res = pe2_mark_unsubscribed;
  if ec_test "${res}" "failure" {
    ec_action 500 "pe2_mark_unsubscribed failed";
  }
  if not ec_test "${res}" "success" {
    ec_action 550 "pe2_mark_unsubscribed failed unexpectedly";
  }
  discard;
}
```

<a name="idp31079616"></a>
## See Also

[Section 14.52, “pe2_logger – Module”](modules.pe2_logger "14.52. pe2_logger – Module"), [pe2_mark_bounced](sieve.ref.pe2_mark_bounced "pe2_mark_bounced")

| [Prev](sieve.ref.pe2_mark_bounced)  | [Up](sieve.ref.files) |  [Next](sieve.ref.qp_encode) |
| pe2_mark_bounced  | [Table of Contents](index) |  qp_encode |
