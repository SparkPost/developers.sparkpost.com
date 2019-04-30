|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.join)  | 16.2. Sieve Function Details |  [Next](sieve.ref.pe2_mark_bounced) |

<a name="sieve.ref.keep"></a>
## Name

keep, ec_keep — keep the current message; stop processing further rules

## Synopsis

`keep`

`ec_keep` [ *`reason`* ]

<a name="idp31035952"></a>
## Description

The `keep` and `ec_keep` actions are used to explicitly indicate that the mail should be kept; Momentum will continue to deliver it to its final destination.

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

In the following script, any mail from the good-guy.com domain is kept, all other mail is thrown out.

<a name="example.keep"></a>

**Example 16.115. keep example**

```
if envelope :domain :is "from" "good-guy.com" {
  keep;
} else {
  discard;
}
```

For an overview of Sieve actions see [Section 8.2.2, “Actions”](sieve.syntax.basic#sieve.syntax.basic.actions "8.2.2. Actions").


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.join)  | [Up](sieve.ref.files) |  [Next](sieve.ref.pe2_mark_bounced) |
| join  | [Table of Contents](index) |  pe2_mark_bounced |
