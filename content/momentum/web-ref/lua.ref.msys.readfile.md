| [Prev](lua.ref.msys.parseRFC2822Addresses)  | 15.2. Lua Functions |  [Next](lua.ref.msys.registerAuth.php) |

<a name="lua.ref.msys.readfile"></a>
## Name

msys.readfile — Read the entire contents of the specified file or URI

<a name="idp24565664"></a>
## Synopsis

`msys.readfile(filename_or_uri);`

`filename_or_uri: string`<a name="idp24568368"></a>
## Description

Reads the entire contents of the specified file or URI and returns it as a string. Where possible, the act of reading will be delegated to an IO thread and the current session will be suspended pending completion of the read. If an error occurs, this function returns a nil value and a second string value to indicate the reason for the error.

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

| [Prev](lua.ref.msys.parseRFC2822Addresses)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.registerAuth.php) |
| msys.parseRFC2822Addresses  | [Table of Contents](index) |  msys.registerAuth |
