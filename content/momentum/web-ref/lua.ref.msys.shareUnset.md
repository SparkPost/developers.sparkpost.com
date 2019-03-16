| [Prev](lua.ref.msys.shareSet)  | 15.2. Lua Functions |  [Next](lua.ref.msys.sleep.php) |

<a name="lua.ref.msys.shareUnset"></a>
## Name

msys.shareUnset — Remove the association with keystring from the global share space

<a name="idp24761952"></a>
## Synopsis

`msys.shareUnset(keystring);`

`keystring: string`<a name="idp24764640"></a>
## Description

Removes the association with keystring from the global share space.

### Note

This function has been made obsolete by the data sharing features introduced in version 3.2\. For more information see [msys.runInPool](lua.ref.msys.runinpool "msys.runInPool").

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24769136"></a>
## See Also

[msys.shareSet](lua.ref.msys.shareSet "msys.shareSet"), [msys.shareGet](lua.ref.msys.shareGet.php "msys.shareGet")

| [Prev](lua.ref.msys.shareSet)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.sleep.php) |
| msys.shareSet  | [Table of Contents](index) |  msys.sleep |
