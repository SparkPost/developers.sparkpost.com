|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cast)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.dnslookup) |

<a name="lua.ref.msys.config"></a>
## Name

msys.config — Set or get configuration values

<a name="idp16055168"></a>
## Synopsis

`msys.config(action, parameters);`

```
action: string
parameters: string
```
<a name="idp16058160"></a>
## Description

Corresponds to the [config](console_commands.config "config") system console command, and can be used to get or set configuration values. For example:

```
local mob, tmob = msys.config("get", "max_outbound_connections");
local ymob, tymob = msys.config("get", "domain", "yahoo.com", "max_outbound_connections");
```

This function returns two values:

*   The value of the configuration option

*   The textual output from the command (what you would have seen had you typed it via ec_console)

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cast)  | [Up](lua.function.details) |  [Next](lua.ref.msys.dnslookup) |
| msys.cast  | [Table of Contents](index) |  msys.dnsLookup |

