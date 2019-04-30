|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.core.io_wrapper_open)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.config) |

<a name="lua.ref.msys.cast"></a>
## Name

msys.cast — Cast an object to the specified class

<a name="idp16043696"></a>
## Synopsis

`msys.cast(object, classnamestring);`

```
object: mixed
classnamestring: string
```
<a name="idp16046688"></a>
## Description

Forces object to be re-interpreted as the specified class. This is provided primarily to map `void` object proxies to the correct underlying class type. This will result in crashes if the cast is used incorrectly; use with caution.

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.core.io_wrapper_open)  | [Up](lua.function.details) |  [Next](lua.ref.msys.config) |
| msys.core.io_wrapper_open  | [Table of Contents](index) |  msys.config |

