| [Prev](sieve.ref.ec_floor)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_gauge_cache) |

<a name="sieve.ref.ec_forward"></a>
## Name

ec_forward — forward a message

## Synopsis

`ec_forward` { *`sender_address`* } { *`recipient_address`* } { *`text`* } [ *`subject`* ] [ *`counter`* ]

<a name="idp29557936"></a>
## Description

This action will create a new message with the supplied *`sender_address`* and *`recipient_address`* on the envelope, and will use the supplied *`text`* for the body of the new message.

If the optional *`subject`* is provided, the new message will use that for the `Subject:` header, otherwise Momentum will take the subject of the original message and prefix it with the text "Fwd:".

The message to be forwarded will be attached as an rfc2822/message attachment, complete with all header information.

If multiple recipient addresses are supplied as a stringlist instead of a single string, each recipient will receive a message created in the above manner. This has the same effects as calling `ec_forward` multiple times with a single recipient address.

The optional *`counter`* parameter to `ec_forward` is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via the web console or via **ec_console** using the **sieve stats**       command.

Sieve scripts using `ec_forward` can be used in any phase after and including data_phase1.

<a name="example.ec_forward.single"></a>

**Example 16.41. ec_forward example with single recipient address**

```
ec_forward "sender@mailfrom.com" "recipient@rcptto.com" text:
This is a multi-line forwarded message, and
this is the second line.
.
  "I thought you might like this"
;
```

<a name="example.ec_forward.multiple"></a>

**Example 16.42. ec_forward example with multiple recipient addresses**

```
$rcptto = ["rcpt1@rcptto.com", "rcpt2@rcptto.com", "rcpt3@rcptto.com"];

ec_forward "sender@mailfrom.com" $rcptto text:
forwarded message
second line
.
;
```

<a name="example.ec_forward.multiple.second"></a>

**Example 16.43. another ec_forward example with multiple recipient addresses**

`ec_forward "sender@mailfrom.com" ["rcpt1@rcptto.com", "rcpt2@rcptto.com"] "forwarded via sieve";`

| [Prev](sieve.ref.ec_floor)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_gauge_cache) |
| ec_floor  | [Table of Contents](index) |  ec_gauge_cache |
