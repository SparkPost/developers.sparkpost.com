|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_dkim_domains)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_dkim_sign) |

<a name="sieve.ref.ec_dkim_responsible_domain"></a>
## Name

ec_dkim_responsible_domain — Return the responsible domain for the current message

## Synopsis

`ec_dkim_responsible_domain`

<a name="idp29414320"></a>
## Description

`ec_dkim_responsible_domain` returns a string containing the responsible domain of the current message. This can be used as an argument to the [ec_dkim_sign](sieve.ref.ec_dkim_sign "ec_dkim_sign") extension or as a comparison against the return values of the [ec_dkim_domains](sieve.ref.ec_dkim_domains "ec_dkim_domains") extension.

### Note

This feature requires the DKIM module. See [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures") for more information.

<a name="example.ec_dkim_responsible"></a>

**Example 16.37. ec_dkim_responsible_domain example**

```
$responsible = ec_dkim_responsible_domain;
$domains = ec_dkim_domains;
if ec_test :is $domains $responsible {
  ec_log "Valid DKIM signature found";
}
else {
  ec_log "No valid DKIM signature found";
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_dkim_domains)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_dkim_sign) |
| ec_dkim_domains  | [Table of Contents](index) |  ec_dkim_sign |
