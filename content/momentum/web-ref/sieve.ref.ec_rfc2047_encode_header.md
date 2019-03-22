| [Prev](sieve.ref.ec_rfc2047_encode_addresses)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_rfc3464_delivery_status) |

<a name="sieve.ref.ec_rfc2047_encode_header"></a>
## Name

ec_rfc2047_encode_header — encode a header to be RFC2047 compliant

## Synopsis

`ec_rfc2047_encode_header $raw`

<a name="idp30433168"></a>
## Description

`ec_rfc2047_encode_header` takes a string and encodes the string following according to RFC2047, using UTF-8 for the character encoding. It will avoid encoding the string if possible. The primary use for this action is when building up headers for use in email.

```
($subject) = ec_header_get "Subject";
$subject = ec_rfc2047_encode_header "Re: ${subject}";

generate_mail_raw $from $to text:
From: ${from}
To: ${to}
Subject: ${subject}

hello
.
;
```

| [Prev](sieve.ref.ec_rfc2047_encode_addresses)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_rfc3464_delivery_status) |
| ec_rfc2047_encode_addresses  | [Table of Contents](index) |  ec_rfc3464_delivery_status |
