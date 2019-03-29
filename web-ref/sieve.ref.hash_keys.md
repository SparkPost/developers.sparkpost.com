|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.hash_get)  | 16.2. Sieve Function Details |  [Next](sieve.ref.hash_set) |

<a name="sieve.ref.hash_keys"></a>
## Name

hash_keys — return all the keys of a hash as a stringlist

## Synopsis

`hash_keys` { *`hash`* }

<a name="idp30937664"></a>
## Description

This function works on a hash created by [hash_create](sieve.ref.hash_create "hash_create") and returns a stringlist containing all the keys of the hash. If the given hash is not empty, the elements in the returned stringlist are in random order. For an empty hash, the returned stringlist contains nothing.

<a name="example.hash_keys"></a>

**Example 16.110. hash_keys example**

```
$hash = hash_create;
hash_set $hash "mykey1" "myval1";
hash_set $hash "mykey2" "myval2";
hash_set $hash "mykey3" "myval3";
$keys = hash_keys $hash;
#keys is now a stringlist containing "mykey1", "mykey2" and "mykey3"
```

<a name="idp30942864"></a>
## See Also

[hash_create](sieve.ref.hash_create "hash_create"), [hash_set](sieve.ref.hash_set "hash_set")


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.hash_get)  | [Up](sieve.ref.files) |  [Next](sieve.ref.hash_set) |
| hash_get  | [Table of Contents](index) |  hash_set |
