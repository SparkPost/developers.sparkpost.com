| [Prev](lua.ref.msys.os.statvfs_read)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.qp.decode) |

<a name="lua.ref.msys.os.statvfs_subscribe"></a>
## Name

msys.os.statvfs_subscribe — Provide a "stream" for file system statistics (statvfs) updates

<a name="idp18327136"></a>
## Synopsis

`msys.os.statvfs_subscribe(path, interval);`

```
path: string
interval: number
```
<a name="idp18330144"></a>
## Description

This function provides a "stream" for statvfs updates. It guarantees minimal blocking and it is safe to call this function from the context of any thread (including the scheduler). A ec_statvfs_record_t object is returned by the following call:

`statvfs_record = msys.os.statvfs_subscribe("/tmp", 10)`

This function is discussed in more detail in [msys.os.statvfs_read](lua.ref.msys.os.statvfs_read "msys.os.statvfs_read").

Enable this function with the statement `require('msys.os');`.

<a name="idp18334992"></a>
## See Also

[msys.os.statvfs_read](lua.ref.msys.os.statvfs_read "msys.os.statvfs_read") and [ec_statvfs](https://support.messagesystems.com/docs/web-c-api/structs.ec_statvfs)

| [Prev](lua.ref.msys.os.statvfs_read)  | [Up](lua.function.details) |  [Next](lua.ref.msys.qp.decode) |
| msys.os.statvfs_read  | [Table of Contents](index) |  msys.qp.decode |

