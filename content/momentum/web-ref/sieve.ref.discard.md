|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.disable_esmtp_capability)  | 16.2. Sieve Function Details |  [Next](sieve.ref.disclaimer_add) |

<a name="sieve.ref.discard"></a>
## Name

discard, ec_discard — discard the current message; it will not be delivered

## Synopsis

`discard`

`ec_discard` [ *`reason`* ]

<a name="idp28958912"></a>
## Description

Discard is used to silently throw away the message. It does so by simply canceling the implicit keep. If discard is used with other actions, the other actions still happen. Discard is compatible with all other actions. (For instance fileinto+discard is equivalent to fileinto.)

If discard throws the message away, the message will appear (to the sender) to have been accepted and delivered; no error status or out-of-band delivery notification will occur.

In the following script, any mail from the bad-guy.com domain is thrown out.

<a name="example.discard"></a>

**Example 16.17. discard example**

```
if envelope :domain :is "from" "bad-guy.com" {
  discard;
}
```

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

For an overview of Sieve actions see [Section 8.2.2, “Actions”](sieve.syntax.basic#sieve.syntax.basic.actions "8.2.2. Actions").


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.disable_esmtp_capability)  | [Up](sieve.ref.files) |  [Next](sieve.ref.disclaimer_add) |
| disable_esmtp_capability  | [Table of Contents](index) |  disclaimer_add |
