|     |     |     |
| --- | --- | --- |
| [Prev](lua.summary_table)  | Chapter 15. Lua Function Reference |  [Next](lua.ref.msys.db.execute.php) |

## 15.2. Lua Functions

This section details all Lua functions. Functions are ordered alphabetically by name.

### Warning

Many Lua functions act as wrappers for C code which means that the calling code needs to take steps to ensure safety. When calling a C API, make sure that all the arguments are valid as an unexpected `nil` may crash the system or have other undesirable results. Additionally, the data structures returned from C APIs are often shared between C and Lua. The most important consequence of this is that arrays coming from C APIs must only be accessed with existing indices, as opposed to Lua which simply returns `nil` on out-of-bounds access. Failure to do this on a Lua table connected to a C array will cause the system to fail.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.summary_table)  | [Up](lua.php) |  [Next](lua.ref.msys.db.execute.php) |
| 15.1. Lua Functions List  | [Table of Contents](index) |  msys.db.execute |
