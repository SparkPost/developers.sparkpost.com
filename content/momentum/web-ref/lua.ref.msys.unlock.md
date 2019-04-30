|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.type)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.del_header.php) |

<a name="lua.ref.msys.unlock"></a>
## Name

msys.unlock — Release a lock obtained via msys.lock

<a name="idp24820176"></a>
## Synopsis

`msys.unlock(mutexname);`

`mutexname: string`<a name="idp24822848"></a>
## Description

Releases a lock obtained via msys.lock. **This function must be called from the same OS level thread that obtained it.**

For example code see [thread.mutex](lua.ref.thread.mutex "thread.mutex").

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24827584"></a>
## See Also

[msys.lock](lua.ref.msys.lock "msys.lock")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.type)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.del_header.php) |
| msys.type  | [Table of Contents](index) |  msys.policyeditor.del_header |
