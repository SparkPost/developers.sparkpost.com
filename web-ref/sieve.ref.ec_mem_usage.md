|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_maildir)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_mime_boundary_create) |

<a name="sieve.ref.ec_mem_usage"></a>
## Name

ec_mem_usage — Return the amount of memory used by Momentum

## Synopsis

`ec_mem_usage`

<a name="idp30266432"></a>
## Description

Action which returns the total amount of memory being used by Momentum in MBs.

<a name="example.ec_mem_usage"></a>

**Example 16.80. ec_mem_usage example**

```
$megsused = ec_mem_usage;
if $megsused "ge" :comparator "i;ascii-numeric" "4096" {
  ec_disconnect "451" "Resources not available";
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_maildir)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_mime_boundary_create) |
| ec_maildir  | [Table of Contents](index) |  ec_mime_boundary_create |
