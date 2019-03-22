| [Prev](sieve.ref.hash_create)  | 16.2. Sieve Function Details |  [Next](sieve.ref.hash_get) |

<a name="sieve.ref.hash_dump"></a>
## Name

hash_dump — dump the contents of the hash to the paniclog

## Synopsis

`hash_dump` { *`hash`* }

<a name="idp30897952"></a>
## Description

`hash_dump` dumps the contents of the hash to the paniclog. This function can occasionally be useful when debugging but should be avoided in production especially on heavy throughput systems.

<a name="example.hash_dump"></a>

**Example 16.108. hash_dump example**

```
$aliases = ds_fetch_flat "mydb" "select expansion from alias where user = ?" [$address];
hash_dump $aliases;
```

| [Prev](sieve.ref.hash_create)  | [Up](sieve.ref.files) |  [Next](sieve.ref.hash_get) |
| hash_create  | [Table of Contents](index) |  hash_get |
