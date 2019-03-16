| [Prev](sieve.ref.ec_mime_boundary_create)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_mod) |

<a name="sieve.ref.ec_mime_parts"></a>
## Name

ec_mime_parts — test against metadata for each MIME part in a message

## Synopsis

`ec_mime_parts` { *`comparison`* } { *`metadata`* } { *`value`* }

<a name="idp30297376"></a>
## Description

This test allows the metadata of every MIME part of a message to be inspected. The "metadata" attribute is extracted from each MIME part and compared to the specified "value" using the provided comparison method. Currently supported metadata attributes are:

*   "filename"

<a name="example.ec_mime_parts"></a>

**Example 16.81. ec_mime_parts example**

```
if ec_mime_parts :regex "filename"
                        "^.*\\.(scr|bat|pif|com|cpl|exe|vbs|hta|cmd|zip)$" {
   ec_action 550 "5.7.1 bad attachment";
}
```

| [Prev](sieve.ref.ec_mime_boundary_create)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_mod) |
| ec_mime_boundary_create  | [Table of Contents](index) |  ec_mod |
