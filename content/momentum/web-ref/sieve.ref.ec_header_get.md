| [Prev](sieve.ref.ec_header_delete)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_header_postfix) |

<a name="sieve.ref.ec_header_get"></a>
## Name

ec_header_get — obtain the values for a particular header

## Synopsis

`ec_header_get` { *`field-name`* }

<a name="idp29844336"></a>
## Description

This will find all headers with the matching field-name and return a string list of their bodies.

<a name="example.ec_header_get"></a>

**Example 16.56. ec_header_get example 1**

```
$category_headers = ec_header_get "X-Category";
$first_header = $category_headers[0];
ec_log "The category is ${first_header}";
```

<a name="example.ec_header_get.second"></a>

**Example 16.57. ec_header_get example 2**

```
($hdr) = ec_header_get "X-Category";
ec_log "The category is ${hdr}";
```

### Note

The parameter passed to this function is case insensitive.

| [Prev](sieve.ref.ec_header_delete)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_header_postfix) |
| ec_header_delete  | [Table of Contents](index) |  ec_header_postfix |
