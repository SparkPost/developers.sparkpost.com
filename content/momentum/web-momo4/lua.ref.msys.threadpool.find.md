|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.threadpool.count)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.threadpool.stat) |

<a name="lua.ref.msys.threadpool.find"></a>
## Name

msys.threadpool.find — Find a thread pool name from a job class ID or a job class ID from a thread pool name

<a name="idp18465248"></a>
## Synopsis

`msys.threadpool.find(threadpoolname_or_jobclassid);`

`threadpoolname_or_jobclassid: mixed (integer or string)`<a name="idp18468288"></a>
## Description

Finds a thread pool name from a job class ID or a job class ID from a thread pool name. Returns nil if no match is found.

Enable this function with the statement `require('msys.threadpool');`.

<a name="idp18471120"></a>
## See Also

[msys.threadpool.count](lua.ref.msys.threadpool.count "msys.threadpool.count") [msys.threadpool.stat](lua.ref.msys.threadpool.stat "msys.threadpool.stat"), [threadpool](conf.ref.threadpool "threadpool")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.threadpool.count)  | [Up](lua.function.details) |  [Next](lua.ref.msys.threadpool.stat) |
| msys.threadpool.count  | [Table of Contents](index) |  msys.threadpool.stat |

