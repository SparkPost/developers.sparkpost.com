|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_dk_sign)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_dkim_responsible_domain) |

<a name="sieve.ref.ec_dkim_domains"></a>
## Name

ec_dkim_domains — Return a list of valid signing domains

## Synopsis

`ec_dkim_domains`

<a name="idp29396944"></a>
## Description

`ec_dkim_domains` returns a stringlist of the domain portion of the identities which had valid DKIM signatures for the current message. Note that since DKIM allows for third party signatures, one should check that there is a valid signature relating to the 'responsible domain' of the message, which is provided by the [ec_dkim_responsible_domain](sieve.ref.ec_dkim_responsible_domain "ec_dkim_responsible_domain") extension.

### Note

This feature requires the DKIM module. See [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures") for more information.

<a name="example.ec_dkim_domains"></a>

**Example 16.36. ec_dkim_domains example**

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
| [Prev](sieve.ref.ec_dk_sign)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_dkim_responsible_domain) |
| ec_dk_sign  | [Table of Contents](index) |  ec_dkim_responsible_domain |
