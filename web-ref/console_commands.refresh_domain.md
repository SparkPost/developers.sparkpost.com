|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.rebind)  | 12.2. System Console Commands |  [Next](console_commands.reopen_logs.php) |

<a name="console_commands.refresh_domain"></a>
## Name

refresh domain — refresh the DNS information for a domain

## Synopsis

`refresh domain` { *`domain`* }

<a name="idp16241952"></a>
## Description

This command takes a single argument in the form of a domain name and refreshes the DNS information for the specified domain. Instead of specifying a domain name you may specify `all` to view all domains.

### Note

This console command manipulates the *route cache* , and likewise with the [dig](console_commands.dig "dig") and [domain](console_commands.domain.php "domain") commands. The *DNS cache* , is manipulated by the [dns_cache](console_commands.dns_cache.php "dns_cache") series of console commands.

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.rebind)  | [Up](console.commands.non-module.php) |  [Next](console_commands.reopen_logs.php) |
| rebind  | [Table of Contents](index) |  reopen logs |
