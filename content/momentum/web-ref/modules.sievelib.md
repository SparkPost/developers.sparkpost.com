|     |     |     |
| --- | --- | --- |
| [Prev](modules.sieve)  | Chapter 14. Modules Reference |  [Next](modules.smtp_auth_proxy) |

## 14.65. sievelib – The sievelib Module

<a class="indexterm" name="idp21329536"></a>
### 14.65.1. Configuration

The `sievelib` module is defined in the following way:

<a name="idp21333440"></a>

**Example 14.95. sievelib module**

```
sievelib {
}
```

### 14.65.2. sievelib Management Using Console Commands

The sievelib console commands add, subtract, delete and view gauge cache counters created using the the Sieve **ec_gauge_cache_init** command. For more information about this command see [ec_gauge_cache](sieve.ref.ec_gauge_cache "ec_gauge_cache").

**14.65.2.1. sievelib gauge_cache add *`name`* *`key`* *`number`***

Add a number to the key in the specified cache.

**14.65.2.2. sievelib gauge_cache sub *`name`* *`key`* *`number`***

Subtract a number from the key in the specified cache.

**14.65.2.3. sievelib gauge_cache show *`name`* *`key`***

Show the key in the specified cache.

**14.65.2.4. sievelib gauge_cache delete *`name`* *`key`***

Delete the key in the specified cache.


|     |     |     |
| --- | --- | --- |
| [Prev](modules.sieve)  | [Up](modules) |  [Next](modules.smtp_auth_proxy) |
| 14.64. sieve – The Sieve Module  | [Table of Contents](index) |  14.66. smtp_auth_proxy - SMTP Authentication Proxy |
