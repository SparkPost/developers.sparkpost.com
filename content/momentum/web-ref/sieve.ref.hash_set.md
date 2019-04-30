|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.hash_keys)  | 16.2. Sieve Function Details |  [Next](sieve.ref.hash_values) |

<a name="sieve.ref.hash_set"></a>
## Name

hash_set — set an element in a hash

## Synopsis

`hash_set` { *`hash`* } { *`key`* } { *`value`* }

<a name="idp30958464"></a>
## Description

This function sets a value in a hash table for a particular key. Hash keys must be strings (but can be expressions that resolve to strings), whereas hash values can be any valid Sieve value (string, number, stringlist or hashes).

**Configuration Change. ** This feature is available starting from Momentum 3.0.16.

Since 3.0.17, passing an incorrect value to this function returns an error message. Previously, no error was returned.

<a name="example.set"></a>

**Example 16.111. hash_set example**

```
$hash = hash_create;
hash_set $hash "mykey" "myvalue";
$value = $hash["mykey"];

ec_log "The value is ${value}";
```

<a name="idp30966896"></a>
## See Also

[hash_create](sieve.ref.hash_create "hash_create"), [hash_dump](sieve.ref.hash_dump "hash_dump") and [hash_get](sieve.ref.hash_get "hash_get").


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.hash_keys)  | [Up](sieve.ref.files) |  [Next](sieve.ref.hash_values) |
| hash_keys  | [Table of Contents](index) |  hash_values |
