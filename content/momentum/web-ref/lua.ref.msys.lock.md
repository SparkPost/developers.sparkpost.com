| [Prev](lua.ref.msys.idn_utf8)  | 15.2. Lua Functions |  [Next](lua.ref.msys.parseRFC2822Addresses.php) |

<a name="lua.ref.msys.lock"></a>
## Name

msys.lock — The current running OS level thread obtains a lock on the named mutex

<a name="idp24529648"></a>
## Synopsis

`msys.lock(mutexname);`

`mutexname: string`<a name="idp24532320"></a>
## Description

The current running OS level thread obtains a lock on the named mutex. The caller is responsible for releasing the lock at the earliest appropriate opportunity. Note that the lock is not automatically released when the script is de-scheduled (for example, via `msys.sleep`, `msys.readfile` or the `msys.db.query` functions), so exercise caution.

For example code see [thread.mutex](lua.ref.thread.mutex "thread.mutex").

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24537904"></a>
## See Also

[msys.unlock](lua.ref.msys.unlock "msys.unlock")

| [Prev](lua.ref.msys.idn_utf8)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.parseRFC2822Addresses.php) |
| msys.idn.to_utf8  | [Table of Contents](index) |  msys.parseRFC2822Addresses |
