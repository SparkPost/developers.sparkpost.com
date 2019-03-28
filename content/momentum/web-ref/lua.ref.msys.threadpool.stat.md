|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.threadpool.find)  | 15.2. Lua Functions |  [Next](lua.ref.msys.timer.after.php) |

<a name="lua.ref.msys.threadpool.stat"></a>
## Name

msys.threadpool.stat — Return stats regarding a threadpool

<a name="idp27010864"></a>
## Synopsis

`msys.threadpool.stat(threadpoolname_or_jobclassid);`

`threadpoolname_or_jobclassid: mixed`<a name="idp27013584"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.2.

Supply a job class ID (integer) or name (string) to this function. A table is returned with the following fields.

*   name

*   invocations

*   avg_concurrency

*   saturation

*   avg_wallclock_time_per_op

*   queue_sz

*   num_threads

*   num_active_threads

*   num_inactive_threads

*   job_num_queued

*   job_num_running

If no thread pool exists with the given name or job class then `nil` is returned. This function is only safe to call from the scheduler thread. Summaries returned by this function include a pretty printer.

<a name="lua.re.msys.threadpool_stat.example"></a>

**Example 15.62. msys.threadpool_stat example**

```
...
s = msys.threadpool.stat("SWAPIN");
print (s["invocations"]);
s = msys.threadpool.stat(1);
print (s["job_num_queued"]);
```

Enable this function with the statement `require('msys.threadpool');`.

<a name="idp27030640"></a>
## See Also

[msys.threadpool.find](lua.ref.msys.threadpool.find "msys.threadpool.find"), [msys.threadpool.count](lua.ref.msys.threadpool.count.php "msys.threadpool.count") [threadpool](conf.ref.threadpool.php "threadpool")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.threadpool.find)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.timer.after.php) |
| msys.threadpool.find  | [Table of Contents](index) |  msys.timer.after |
