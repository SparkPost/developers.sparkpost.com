|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.delayed)  | 12.2. System Console Commands |  [Next](console_commands.dns_cache.php) |

<a name="console_commands.dig"></a>
## Name

dig — submit a domain for DNS MX query

## Synopsis

`dig` [ *`domain`* ]

<a name="idp15857360"></a>
## Description

This command submits a domain for DNS MX query.

```
10:47:35 /tmp/2025> dig mail.omniti.com
submitted
```

### Note

This console command manipulates the *route cache* , and likewise with the [domain](console_commands.domain "domain") and [refresh domain](console_commands.refresh_domain.php "refresh domain") commands. The *DNS cache* , as manipulated by the [dns_cache](console_commands.dns_cache.php "dns_cache") series of console commands.

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.delayed)  | [Up](console.commands.non-module.php) |  [Next](console_commands.dns_cache.php) |
| delayed  | [Table of Contents](index) |  dns_cache |
