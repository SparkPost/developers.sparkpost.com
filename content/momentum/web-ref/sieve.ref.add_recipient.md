| [Prev](sieve.ref.files)  | 16.2. Sieve Function Details |  [Next](sieve.ref.address) |

<a name="sieve.ref.add_recipient"></a>
## Name

add_recipient — add a new envelope recipient to the mail

## Synopsis

`add_recipient` { *`address`* }

<a name="idp28510128"></a>
## Description

This action will add an envelope recipient (a `RCPT TO`) address to the current mail. The headers and the body of the message will not be changed in any way. Existing recipients will also not be affected.

### Warning

This function should only be used in the each_rcpt phase.

<a name="example.add_recipient"></a>

**Example 16.1. add_recipient example**

```
if envelope :domain :is "to" "bar.com" {
  add_recipient "sideline@foo.com";
  stop;
}
```

| [Prev](sieve.ref.files)  | [Up](sieve.ref.files) |  [Next](sieve.ref.address) |
| 16.2. Sieve Function Details  | [Table of Contents](index) |  address |
