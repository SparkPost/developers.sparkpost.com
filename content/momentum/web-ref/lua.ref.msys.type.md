| [Prev](lua.ref.msys.snmpTrap)  | 15.2. Lua Functions |  [Next](lua.ref.msys.unlock.php) |

<a name="lua.ref.msys.type"></a>
## Name

msys.type — Return the type name of the supplied parameter

<a name="idp24810608"></a>
## Synopsis

`msys.type(parameter);`

`parameter: mixed`<a name="idp24813280"></a>
## Description

Returns the type name of the supplied parameter, just like the built-in Lua `type` function. The difference is that for userdata created by Momentum, the underlying object name will be returned instead of "userdata".

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

| [Prev](lua.ref.msys.snmpTrap)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.unlock.php) |
| msys.snmpTrap  | [Table of Contents](index) |  msys.unlock |
