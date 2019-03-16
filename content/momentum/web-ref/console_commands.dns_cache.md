| [Prev](console_commands.dig)  | 12.2. System Console Commands |  [Next](console_commands.domain.php) |

<a name="console_commands.dns_cache"></a>
## Name

dns_cache stats, dns_cache refcnts, dns_cache submit, dns_cache lookup — manage Momentum's DNS cache

## Synopsis

`dns_cache lookup` { *`record`* } { *`type`* }

`dns_cache refcnts`

`dns_cache stats`

`dns_cache submit` { *`record`* } { *`type`* }

<a name="idp15877680"></a>
## Description

The following commands help you to collect information on Momentum's dns cache.

**dns_cache stats**       shows summary statistics about the MTA's dns cache.

**dns_cache refcnts**         shows the count of references of each entry in the MTA's dns cache. A cache entry can only be purged when its reference count becomes zero.

**dns_cache submit record type**                    submits a dns query, whose result will be stored in cache if not already.

**dns_cache lookup record type**                    looks up a dns query in the cache.

record type can be `A`, `MX`, `PTR`, `X`, `X_AAAA`, `TXT`, `AAAA`, or `CNAME`.

```
10:47:35 /tmp/2025> dns_cache lookup mail.yahoo.com A
Cached result not found, try a submit.
16:59:26 ecelerity(/tmp/2025)> dns_cache submit mail.yahoo.com A
Submitted
16:59:32 ecelerity(/tmp/2025)> dns_cache lookup mail.yahoo.com A
;; QUESTION SECTION:
;mail.yahoo.com         IN      A

;; ANSWER SECTION:
mail.yahoo.com          299     IN      A       209.73.177.115

16:59:33 ecelerity(/tmp/2025)> dns_cache stats
DNS Queries:
        TXT: 1
        PTR: 1
         MX: 1
          A: 2
  arpa IPv4: 0
  arpa IPv6: 0

DNS responses:
      Total: 5
        Bad: 0

DNS cache:
    Lookups: 14
   Hit Rate: 35.7143%

16:59:41 ecelerity(/tmp/2025)> dns_cache refcnts
[  3] mail.omniti.com [213s]
      (null)
[  3] mail.yahoo.com [282s]
      (null)
[  3] mail.yahoo.com [248s]
      (null)
[  3] mail.yahoo.com [272s]
      (null)
```

### Note

These console commands manipulate the *DNS cache* . The [dig](console_commands.dig "dig"), [refresh domain](console_commands.refresh_domain.php "refresh domain") and [domain](console_commands.domain.php "domain") commands manipulate the *route cache* .

| [Prev](console_commands.dig)  | [Up](console.commands.non-module.php) |  [Next](console_commands.domain.php) |
| dig  | [Table of Contents](index) |  domain |
