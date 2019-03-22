| [Prev](sieve.ref.reject)  | 16.2. Sieve Function Details |  [Next](sieve.ref.reverse_delim) |

<a name="sieve.ref.reverse"></a>
## Name

reverse — reverse a string or a stringlist

## Synopsis

`reverse` { *`arg`* }

<a name="idp31164048"></a>
## Description

If the first argument to `reverse` is a string, the string will be reversed, so that `abc` becomes `cba`. If it is a stringlist, then the order of the elements in the string list will be reversed.

<a name="example.reverse"></a>

**Example 16.123. reverse example**

```
$string = reverse "hello";
ec_log "hello backwards is ${string}";
```

| [Prev](sieve.ref.reject)  | [Up](sieve.ref.files) |  [Next](sieve.ref.reverse_delim) |
| reject  | [Table of Contents](index) |  reverse_delim |
