|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.generate_mail_raw)  | 16.2. Sieve Function Details |  [Next](sieve.ref.hash_dump) |

<a name="sieve.ref.hash_create"></a>
## Name

hash_create — create a hash

## Synopsis

`hash_create`

<a name="idp30879040"></a>
## Description

This function returns a new, empty, hash table. You may use `hash_set` to set elements in the hash, and use array style syntax to retrieve the value of an element:

<a name="example.hash_create"></a>

**Example 16.107. hash_create example**

```
$hash = hash_create;
hash_set $hash "mykey" "myvalue";
$value = $hash["mykey"];

ec_log "The value is ${value}";
```

<a name="idp30884240"></a>
## See Also

[hash_set](sieve.ref.hash_set "hash_set"), [hash_dump](sieve.ref.hash_dump "hash_dump") and [hash_get](sieve.ref.hash_get "hash_get").


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.generate_mail_raw)  | [Up](sieve.ref.files) |  [Next](sieve.ref.hash_dump) |
| generate_mail_raw  | [Table of Contents](index) |  hash_dump |
