|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.snmpTrap)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.unlock) |

<a name="lua.ref.msys.type"></a>
## Name

msys.type — Return the type name of the supplied parameter

<a name="idp16426032"></a>
## Synopsis

`msys.type(parameter);`

`parameter: mixed`<a name="idp16428992"></a>
## Description

Returns the type name of the supplied parameter, just like the built-in Lua `type` function. The difference is that for userdata created by Momentum, the underlying object name will be returned instead of "userdata".

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.snmpTrap)  | [Up](lua.function.details) |  [Next](lua.ref.msys.unlock) |
| msys.snmpTrap  | [Table of Contents](index) |  msys.unlock |

