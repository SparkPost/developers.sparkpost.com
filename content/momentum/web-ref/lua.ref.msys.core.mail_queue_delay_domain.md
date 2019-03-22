| [Prev](lua.ref.msys.core.get_now_ts)  | 15.2. Lua Functions |  [Next](lua.ref.msys.core.string_new.php) |

<a name="lua.ref.msys.core.mail_queue_delay_domain"></a>
## Name

msys.core.mail_queue_delay_domain — Add a domain record to the delayed queue

<a name="idp24130720"></a>
## Synopsis

`msys.core.mail_queue_delay_domain(dr, note);`

```
dr: userdata, domain_record
note: string
```
<a name="idp24133072"></a>
## Description

Add a domain record to the delayed queue. For a code example see [Example 15.32, “registerControl example”](lua.ref.msys.registerControl#lua.ref.msys.registerControl.example "Example 15.32. registerControl example"). To obtain domain record userdata use `msys.core.dns_get_domain`. The second parameter is typically a string such as `"451 4.4.1 [internal] manually delayed domain"`. This function returns `nil`.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp24137744"></a>
## See Also

[msys.core.dns_get_domain](lua.ref.msys.core.dns_get_domain "msys.core.dns_get_domain")

| [Prev](lua.ref.msys.core.get_now_ts)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.core.string_new.php) |
| msys.core.get_now_ts  | [Table of Contents](index) |  msys.core.string_new |
