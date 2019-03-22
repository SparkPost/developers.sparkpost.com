| [Prev](sieve.ref.hash_set)  | 16.2. Sieve Function Details |  [Next](sieve.ref.is_true) |

<a name="sieve.ref.hash_values"></a>
## Name

hash_values — return all the string values of a hash as a stringlist

## Synopsis

`hash_values` { *`hash`* }

<a name="idp30980624"></a>
## Description

This function works on a hash created by [hash_create](sieve.ref.hash_create "hash_create"). If the given hash stores strings as its values, these values will be returned in a stringlist, elements of which are in random order. For an empty hash, the returned stringlist contains nothing.

<a name="example.hash_values"></a>

**Example 16.112. hash_values example**

```
$hash = hash_create;
hash_set $hash "mykey1" "myval1";
hash_set $hash "mykey2" "myval2";
hash_set $hash "mykey3" "myval3";
$vals = hash_values $hash;
#vals is now a stringlist containing "myval1", "myval2" and "myval3"
```

<a name="idp30985872"></a>
## See Also

[hash_create](sieve.ref.hash_create "hash_create"), [hash_set](sieve.ref.hash_set "hash_set")

| [Prev](sieve.ref.hash_set)  | [Up](sieve.ref.files) |  [Next](sieve.ref.is_true) |
| hash_set  | [Table of Contents](index) |  is_true |
