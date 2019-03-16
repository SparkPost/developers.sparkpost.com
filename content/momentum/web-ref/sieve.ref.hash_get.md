| [Prev](sieve.ref.hash_dump)  | 16.2. Sieve Function Details |  [Next](sieve.ref.hash_keys) |

<a name="sieve.ref.hash_get"></a>
## Name

hash_get — get the value associated with the specified key

## Synopsis

`hash_get` { *`$hash`* } { *`$key`* }

<a name="idp30914720"></a>
## Description

Get the value of the specified key from a hash. Hash keys must be strings or expressions that resolve to strings.

Sieve scripts using `hash_get` can be used in any phase.

**Configuration Change. ** This feature is available starting from Momentum 3.0.16.

Since 3.0.17, passing an incorrect value to this function returns an error message. Previously, no error was returned.

<a name="example.hash_get"></a>

**Example 16.109. hash_get example**

```
$hash = hash_create;
  hash_set $hash "mykey" "myvalue";
  $value = hash_get $hash "mykey";
```

<a name="idp30923920"></a>
## See Also

[hash_create](sieve.ref.hash_create "hash_create"), [hash_dump](sieve.ref.hash_dump "hash_dump") and [hash_get](sieve.ref.hash_get "hash_get")

| [Prev](sieve.ref.hash_dump)  | [Up](sieve.ref.files) |  [Next](sieve.ref.hash_keys) |
| hash_dump  | [Table of Contents](index) |  hash_keys |
