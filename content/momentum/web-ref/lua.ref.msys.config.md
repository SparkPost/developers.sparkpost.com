| [Prev](lua.ref.msys.cast)  | 15.2. Lua Functions |  [Next](lua.ref.msys.dnslookup.php) |

<a name="lua.ref.msys.config"></a>
## Name

msys.config — Set or get configuration values

<a name="idp24428400"></a>
## Synopsis

`msys.config(action, parameters);`

```
action: string
parameters: string
```
<a name="idp24431104"></a>
## Description

Corresponds to the **config** system console command, and can be used to get or set configuration values. For example:

```
local mob, tmob = msys.config("get", "max_outbound_connections");
local ymob, tymob = msys.config("get", "domain", "yahoo.com", "max_outbound_connections");
```

This function returns two values:

*   The value of the configuration option

*   The textual output from the command (what you would have seen had you typed it via ec_console)

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24437600"></a>
## See Also

[config](console_commands.config "config")

| [Prev](lua.ref.msys.cast)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.dnslookup.php) |
| msys.cast  | [Table of Contents](index) |  msys.dnsLookup |
