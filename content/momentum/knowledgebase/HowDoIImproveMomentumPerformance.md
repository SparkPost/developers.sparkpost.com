#How do I improve Momentum performance:

1. Try increasing the sysctl parameters to double the existing values. You can try increasing that gradually to 3 or 4 times the current values. Make sure to monitor the CPU and the memory usage on the instance. The current settings can be viewed by running `sysctl -a`.


2. Configure the following in the global scope of the config file: `match_cache_size = 2048`
This option determines the maximum number of elements in a cache that holds the results of looking up matching scopes. It applies to regex domains, Peer scopes in listeners, and any user-defined scopes that use matching.
For more info, please refer:
<https://support.messagesystems.com/docs/web-momo4/conf.ref.match_cache_size.php>

3. Include these settings in the configuration file in the scriptlet section to enable lua garbage collection:
```
scriptlet "scriptlet" {
...rest of scriptlet config here...
gc_stepmul = 300
reap_interval = 13
global_trace_interval = 13
gc_trace_thresh = 1200
gc_trace_xref_thresh = 1200
use_reusable_thread = true
max_uses_per_thread = 5000
gc_threadpool = "gc"
gc_step_on_recycle = true
gc_every = 20
}
ThreadPool "gc" {
concurrency = 10
}
```

4. The event_loops can be tuned in the configuration (this applies only if you have supercharger feature on their license). A sample configuration looks like:
```
EventLoop "lpool" {  
  concurrency = 6
}
EventLoop "dpool" {
  concurrency = 6
}
EventLoop "mpool" {
  concurrency = 6
}
```

####NOTE: DO NOT go beyond the 75% thread pool allocation rule as mentioned here:

<https://support.messagesystems.com/docs/web-momo4/multi_event_loops.php>
One other important setting to try on the customer's end is to tear down and re-establish the injection connections after some time, or set "Max_Receptions_Per_Connection" and "idle_time" in the "esmtp_listener" to avoid a listener connection stay up for long time. This would also cause issues with lua GC.



As always, please monitor the CPU and memory usage. Use the `summary` command at the `/opt/msys/ecelerity/bin/ec_console` to verify the current stats. Make sure you run the command "summary reset" at the ec_console to reset the stats before running the script.