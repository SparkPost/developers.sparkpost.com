| [Prev](sieve.ref.envelope)  | 16.2. Sieve Function Details |  [Next](sieve.ref.hash_create) |

<a name="sieve.ref.generate_mail_raw"></a>
## Name

generate_mail_raw — generate and send out a message

## Synopsis

`generate_mail_raw` { *`from_addr`* } { *`to_addr | addr_list`*              } { *`text`* }

<a name="idp30863344"></a>
## Description

This function generates and sends out a message. It sets the envelope `from` and `to` using the addresses given and uses the string contained in the third parameter as the message, including message headers and body. It can send a message to multiple recipients if the second parameter is a string list containing multiple addresses.

<a name="example.generate_mail_raw"></a>

**Example 16.106. generate_mail_raw example: generate and send a message**

```
$to = "sender@omniti.com";
$from = "rcpt@omniti.com";
generate_mail_raw $from $to text:
From: ${from}
To: ${to}
Subject: a testing email

testing
.
;
```

| [Prev](sieve.ref.envelope)  | [Up](sieve.ref.files) |  [Next](sieve.ref.hash_create) |
| envelope  | [Table of Contents](index) |  hash_create |
