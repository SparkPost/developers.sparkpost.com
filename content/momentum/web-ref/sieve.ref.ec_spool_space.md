|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_shared_throttle)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_sub) |

<a name="sieve.ref.ec_spool_space"></a>
## Name

ec_spool_space — Return information about the free space on the spool partition

## Synopsis

`ec_spool_space`

<a name="idp30586336"></a>
## Description

Method which returns the total and available space in MBs and the percentage of used space (as an int, from 0 to 100) on the disk partition with the Momentum spool.

<a name="example.ec_spool_space"></a>

**Example 16.95. ec_spool_space example**

```
($totalmegs, $availmegs, $pct) = ec_spool_space;
# Turn away connections if more than 90% of disk is free
if ec_test :value "gt" :comparator "i;ascii-numeric" $pct "90" {
    ec_disconnect "421" "Disk is too full";
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_shared_throttle)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_sub) |
| ec_shared_throttle  | [Table of Contents](index) |  ec_sub |
