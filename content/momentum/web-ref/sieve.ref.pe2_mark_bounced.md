| [Prev](sieve.ref.keep)  | 16.2. Sieve Function Details |  [Next](sieve.ref.pe2_mark_unsubscribed) |

<a name="sieve.ref.pe2_mark_bounced"></a>
## Name

pe2_mark_bounced — log bounce events when the pe2_logger module is loaded passively

## Synopsis

`pe2_mark_bounced` { *`reason`* } [ *`bounce_code`* ]

<a name="idp31054976"></a>
## Description

### Note

This function requires that the pe2_logger module be loaded.

Use this function to log bounce events when the pe2_logger module is loaded in passive mode. Note that on an inbound MTA the pe2_logger module must be loaded in passive mode. The first argument to this function is a string parameter and is required. The second argument, the bounce type, is optional. The bounce code should be one of the classification codes listed at [Table E.12, “Bounce classification codes”](bounce_logger.classification.codes#log_formats.bounce.classification.codes "Table E.12. Bounce classification codes").

You may use any Sieve logic you wish to determine whether an incoming message is an bounce. In the following example this is done by prefixing `bounces-` to the local part of the address.

<a name="idp31059264"></a>

**Example 16.116. pe2_mark_bounced example**

```
if envelope :localpart :matches "to" "bounces-*" {
  $msg = ec_header_get "Subject";
  $res = pe2_mark_bounced "${msg}" 40;
  if ec_test "${res}" "0" {
    ec_action 500 "pe2_mark_bounced failed";
  }
  if not ec_test "${res}" "1" {
    ec_action 550 "pe2_mark_bounced failed unexpectedly";
  }
}
```

<a name="idp31061568"></a>
## See Also

[Section 14.52, “pe2_logger – Module”](modules.pe2_logger "14.52. pe2_logger – Module"), [pe2_mark_unsubscribed](sieve.ref.pe2_mark_unsubscribed "pe2_mark_unsubscribed")

| [Prev](sieve.ref.keep)  | [Up](sieve.ref.files) |  [Next](sieve.ref.pe2_mark_unsubscribed) |
| keep  | [Table of Contents](index) |  pe2_mark_unsubscribed |
