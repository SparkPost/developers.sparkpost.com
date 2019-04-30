|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.tcp_buffer_size)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.timestampformat) |

<a name="conf.ref.threadpool"></a>
## Name

threadpool — configure thread pool specific options

<a name="conf.ref.threadpool.description"></a>
## Description

```
ThreadPool "SwapOut" {
  Concurrency = 5
}

ThreadPool "SwapIn" {
  Concurrency = 5
}

ThreadPool "Unlink" {
  Backlog = 100
  Concurrency = 6
}

ThreadPool "Batch_Unlink" {
  Concurrency = 4
}

ThreadPool "Close" {
  Concurrency = 0
}

ThreadPool "CPU" {
  Concurrency = 4
}

ThreadPool "IO" {
  Concurrency = 50
}

ThreadPool "SpoolIn" {
  Concurrency = 1
}
```

Momentum uses a combination of asynchronous IO and thread pools to efficiently manage its workload. There are a number of predefined thread pools for different classes of work. It is not possible to prioritize work within a pool (jobs are queued as FIFO), but it is possible to create a pool for jobs that have different relative priorities, so that long running jobs won't starve more important short-lived jobs.

The `ThreadPool` stanza allows you to define or modify thread pool characteristics. The standard thread pools are listed above, along with their defaults, and you may also define new pools simply by specifying the name of the pool. Creating new pools isn't very useful unless you assign jobs to the pool; various modules allow you to specify alternate pools for their tasks so that you can more effectively prioritize the tasks in your environment.

There are three basic attributes for a thread pool in Momentum:

<dl className="variablelist">

<dt>`Concurrency`</dt>

<dd>

The concurrency defines the number of threads in the pool. Sizing a pool correctly is important to avoid torturing your system. If the pool is intended to be used for CPU intensive work, the ideal size is approximately the number of cores that you want to assign to the work. If you raise the concurrency of such a pool too high, you will cause increased context switching and degrade overall system performance.

If the pool is intended to be used for blocking IO operations, where the threads are expected to be mostly sleeping, you will usually want to increase the number of threads to a magic number that gets the most throughput for your system. Setting this number too high can increase context switching, and with heavily IO bound tasks, can increase disk thrashing.

You should also note that each thread requires its own stack space; creating too many threads can consume large portions of your address space, particularly on a 32-bit system. Some versions of Linux/glibc allocate 10MB per thread by default, which can quickly consume your entire address space. You can reduce the impact of this problem by setting the thread pool stack size (see below).

### Note

If you use the [Section 71.23, “csapi – Symantec CSAPI Antivirus Support”](modules.csapi "71.23. csapi – Symantec CSAPI Antivirus Support"), be sure to set the concurrency of the CPU threadpool to a value that is less than the max_concurrency of the csapi module.

The concurrency of a pool can be changed at runtime. The values for `concurrency` shown in [the section called “Description”](conf.ref.threadpool#conf.ref.threadpool.description "Description") are the default values.

</dd>

<dt>`Stack_Size`</dt>

<dd>

As mentioned above, each thread in the system requires its own stack space. The default amount used is system dependent and is usually very much higher than the amount you will need per thread. If you find that you need to increase the number of threads, you may also want to define a smaller Stack_Size so that you don't use so much of your address space or RAM.

The amount of stack space you need for a given pool varies depending on the usage patterns for that pool. Some jobs will need more stack space than others. You should exercise caution when adjusting the stack size, setting it too small can cause a stack overflow which can lead to memory corruption and ultimately a crash.

The stack size can be changed at runtime, but only affects newly spawned threads.

</dd>

<dt>`Backlog`</dt>

<dd>

The backlog setting affects the maximum number of jobs that can be queued up for a pool. Most pools will not have a limit, but some tasks require a braking effect if the system can't satisfy the workload in time.

For instance, the transactional nature of SMTP requires that messages are unlinked from the spool "immediately" after the receipt of successful delivery so that duplicate delivery can not occur if the power were to fail. Since the unlink call is a blocking operation, it is pushed to the `Unlink` pool for processing. If the unlink pool backlog were to grow without bound, there is increasing risk of sending a great many duplicate deliveries when the server restarts after a power failure.

To mitigate this risk, we put a limit on the maximum length of the queue; if pushing a job to the queue would exceed the length, then the caller will block until the queue is small enough.

If you find that you need to change the Backlog size for the Unlink pool, you should investigate why your disks cannot keep up; make sure that you aren't logging to the same spindles as your spool, and examine the tuning options for those filesystems.

When using the custom_logger module, it may be necessary to create a thread pool so you can explicitly define its backlog option. For more information, see [Section 71.25, “custom_logger – User-defined Logging”](modules.custom_logger "71.25. custom_logger – User-defined Logging").

The backlog cannot be changed at runtime.

</dd>

</dl>

<a name="idp26864768"></a>
## Scope

ThreadPool is valid in the global scope.

<a name="idp26866592"></a>
## See Also

[domain](conf.ref.domain "domain"), [host](conf.ref.host "host"), [threads](console_commands.threads "threads")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.tcp_buffer_size)  | [Up](config.options.ref) |  [Next](conf.ref.timestampformat) |
| tcp_buffer_size  | [Table of Contents](index) |  timestampformat |

