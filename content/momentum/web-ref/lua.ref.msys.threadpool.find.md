| [Prev](lua.ref.msys.threadpool.count)  | 15.2. Lua Functions |  [Next](lua.ref.msys.threadpool.stat.php) |

<a name="lua.ref.msys.threadpool.find"></a>
## Name

msys.threadpool.find — Find a thread pool name from a job class ID or a job class ID from a thread pool name

<a name="idp26997872"></a>
## Synopsis

`msys.threadpool.find(threadpoolname_or_jobclassid);`

`threadpoolname_or_jobclassid: mixed (integer or string)`<a name="idp27000624"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.2.

Finds a thread pool name from a job class ID or a job class ID from a thread pool name. Returns nil if no match is found.

Enable this function with the statement `require('msys.threadpool');`.

<a name="idp27004768"></a>
## See Also

[msys.threadpool.count](lua.ref.msys.threadpool.count "msys.threadpool.count") [msys.threadpool.stat](lua.ref.msys.threadpool.stat.php "msys.threadpool.stat"), [threadpool](conf.ref.threadpool.php "threadpool")

| [Prev](lua.ref.msys.threadpool.count)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.threadpool.stat.php) |
| msys.threadpool.count  | [Table of Contents](index) |  msys.threadpool.stat |
