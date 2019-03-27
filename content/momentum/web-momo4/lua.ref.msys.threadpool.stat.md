| [Prev](lua.ref.msys.threadpool.find)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.timer.after) |

<a name="lua.ref.msys.threadpool.stat"></a>
## Name

msys.threadpool.stat — Return stats regarding a threadpool

<a name="idp18477792"></a>
## Synopsis

`msys.threadpool.stat(threadpoolname_or_jobclassid);`

`threadpoolname_or_jobclassid: mixed`<a name="idp18480800"></a>
## Description

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

**Example 70.62. msys.threadpool_stat example**

```
...
s = msys.threadpool.stat("SWAPIN");
print (s["invocations"]);
s = msys.threadpool.stat(1);
print (s["job_num_queued"]);
```

Enable this function with the statement `require('msys.threadpool');`.

<a name="idp18497968"></a>
## See Also

[msys.threadpool.find](lua.ref.msys.threadpool.find "msys.threadpool.find"), [msys.threadpool.count](lua.ref.msys.threadpool.count "msys.threadpool.count") [threadpool](conf.ref.threadpool "threadpool")

| [Prev](lua.ref.msys.threadpool.find)  | [Up](lua.function.details) |  [Next](lua.ref.msys.timer.after) |
| msys.threadpool.find  | [Table of Contents](index) |  msys.timer.after |

