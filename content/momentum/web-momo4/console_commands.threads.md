| [Prev](console_commands.sysinfo)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.tls) |

<a name="console_commands.threads"></a>
## Name

threads stats, threads io queue, threads cpu queue — Display summary statistics for thread pools

## Synopsis

`threads cpu queue`

`threads io queue`

`threads stats`

<a name="idp12824928"></a>
## Description

**threads stats**       shows summary information of thread pools.

```
10:47:35 /tmp/2025> threads stats
CPU thread pool: concurrency 4
IO thread pool: concurrency 5
               Total invocations: 46010
    Observed average concurrency: 1.00
          Thread pool saturation:  0.01%
   Average wallclock time per op: 0.11ms
            Current thread count: 0
  [inactive threads]
            Current thread count: 5
SWAPOUT thread pool: concurrency 5
               Total invocations: 46668
    Observed average concurrency: 3.94
          Thread pool saturation: 49.54%
   Average wallclock time per op: 780.56ms
            Current thread count: 0
  [inactive threads]
            Current thread count: 5
SWAPIN thread pool: concurrency 5
CLOSE thread pool: concurrency 0
```

This command displays statistics for any of the "built-in" thread pools and also any thread pools that you have created.

**threads io queue**          shows the queued IO jobs.

```
10:47:35 /tmp/2025> threads io queue
Jobs in the IO pool
0 jobs
```

**threads cpu queue**           shows the queued CPU jobs.

```
10:47:35 /tmp/2025> threads cpu queue
Jobs in the CPU pool
0 jobs
```
<a name="idp12831728"></a>
## See Also

[threadpool](conf.ref.threadpool "threadpool")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.sysinfo)  | [Up](console.cmds.ref) |  [Next](console_commands.tls) |
| sysinfo  | [Table of Contents](index) |  tls |

