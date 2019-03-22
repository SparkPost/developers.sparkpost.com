| [Prev](sieve.ref.hash_values)  | 16.2. Sieve Function Details |  [Next](sieve.ref.join) |

<a name="sieve.ref.is_true"></a>
## Name

is_true — test if a value is "true"

## Synopsis

`is_true` { *`$variable`* }

`is_true` { *`$variable[0]`* }

`is_true` { *`$variable["key"]`* }

<a name="idp31002720"></a>
## Description

The `is_true` is intended to provide a simple logical test on the value of a variable.

<a name="example.is_true"></a>

**Example 16.113. is_true example**

```
$result = ds_fetch "mydatabase"
  "select allow from senders where sender = ?"
      ["%{mailfrom_localpart}@%{mailfrom_domain}"];
if is_true $result {
  ec_log "Allowed mail from %{mailfrom_localpart}@%{mailfrom_domain}";
} else {
  ec_action 550 "You're not allowed";
}
```

| [Prev](sieve.ref.hash_values)  | [Up](sieve.ref.files) |  [Next](sieve.ref.join) |
| hash_values  | [Table of Contents](index) |  join |
