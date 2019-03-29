|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_div)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_dk_sign) |

<a name="sieve.ref.ec_dk_responsible_domain"></a>
## Name

ec_dk_responsible_domain — Return the responsible domain for the current message

## Synopsis

`ec_dk_responsible_domain`

<a name="idp29346992"></a>
## Description

`ec_dk_responsible_domain` returns a string containing the responsible domain of the current message. This can be used as an argument to the [ec_dk_sign](sieve.ref.ec_dk_sign "ec_dk_sign") extension.

### Note

This feature requires the DomainKeys module. See [Section 14.29, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys "14.29. domainkeys – Yahoo! DomainKeys") for more information.

<a name="example.ec_dk_responsible_domain"></a>

**Example 16.34. ec_dk_responsible_domain example**

```
$responsible = ec_dk_responsible_domain;
if ec_test :is "foo.com" $responsible {
  ec_log "foo.com is responsible for this message.";
}
else {
  ec_log "foo.com is not responsible for this message.";
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_div)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_dk_sign) |
| ec_div  | [Table of Contents](index) |  ec_dk_sign |
