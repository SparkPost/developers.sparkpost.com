| [Prev](sieve.ref.snmp_trap)  | 16.2. Sieve Function Details |  [Next](sieve.ref.stop) |

<a name="sieve.ref.split"></a>
## Name

split, ec_explode — split a string into a stringlist

## Synopsis

`split` { *`delimiter`* } { *`string`* }

`ec_explode` { *`delimiter`* } { *`string`* }

<a name="idp31269856"></a>
## Description

`split` uses its first argument as a delimiter to explode a given string into a stringlist.

For example, to split an IP address into its component octets, we might do something like this:

<a name="example.split"></a>

**Example 16.127. split example**

```
($a, $b, $c, $d) = split "." "%{spfv1:i}";

ec_log "the IP address is ${a}.${b}.${c}.${d}";
```

| [Prev](sieve.ref.snmp_trap)  | [Up](sieve.ref.files) |  [Next](sieve.ref.stop) |
| snmp_trap  | [Table of Contents](index) |  stop |
