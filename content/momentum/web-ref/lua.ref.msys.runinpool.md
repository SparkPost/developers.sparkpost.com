| [Prev](lua.ref.msys.registerModule)  | 15.2. Lua Functions |  [Next](lua.ref.msys.runSieveScript.php) |

<a name="lua.ref.msys.runinpool"></a>
## Name

msys.runInPool — Run a function in a separate threadpool

<a name="idp24657840"></a>
## Synopsis

`msys.runInPool(pool, closure, ...);`

```
pool: mixed
closure: mixed
...: mixed, optional
```
<a name="idp24660560"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.2.

This function runs a process in a separate threadpool. This can be done in a number of ways.

### Note

The first parameter passed to this function may be a thread pool name (string) or a thread pool identifier (integer).

The following example runs `closure` in the specified pool, returning the value(s) from the closure to the calling script. The calling script is suspended pending completion of the closure. Calling `msys.runInPool`in this way is useful for moving processing off the scheduler thread for some blocking work.

`status, result = msys.runInPool(pool, closure)`

Return values are the same as `pcall`; the first return value is a boolean indicating whether the function was called successfully or not. If it is `true` then the call was successful and the remaining return value(s) are those from the closure. If the status value is `false`, the second return value holds an error message.

When the third parameter is not specified, it is equivalent to the function call: `msys.runInPool(pool, closure, false);`, the boolean indicating that the function specified by `closure` will *not* be run asynchronously.

To run a closure asynchronously from the execution of the calling script explicitly specify the third parameter as `true`:

`msys.runInPool(pool, closure, true)`

Due to the mechanics of the system, the closure will not start executing until the calling script has returned to the scheduler (which typically means at the end of each validation phase, or when the top level frame on the Lua call stack unwinds). When called in this way *no results are returned* . The calling script will continue executing the next statement immediately; it will not wait for the closure to begin or for execution to complete.

You can also run a closure asynchronously *and* execute a function after that closure is complete. To do this call `msys.runInPool` in the following way:

`msys.runInPool(pool, closure, completion_closure)`

When the closure returns, `completion_closure` will be called on the same OS level thread as `closure`.

The completion function can be run in the same threadpool, or in the scheduler thread. You might want to have the completion function in the scheduler thread to schedule an event, for example.

If the third argument of msys.runInPool is a function, then it will be used as the completion function. An optional fourth argument allows the completion mode to be specified—if it's set to `msys.core.ECTP_COMPLETE_CALLBACK_SCHED` then the completion function will be called in the scheduler thread; otherwise it will be called in the threadpool thread.

### Note

`msys.core.ECTP_COMPLETE_CALLBACK_SCHED` is the only completion mode that can be passed as the fourth argument. All other values will be ignored, and `msys.core.ECTP_COMPLETE_CALLBACK` will be used.

```
status, res = msys.runInPool("IO",
  function()
    -- do some IO intensive work here, such as interrogate the message contents
    return "done"; -- passed back to the 'res' variable
  end,
  function()
    -- Completion function
    print("Done!");
  end,
  msys.core.ECTP_COMPLETE_CALLBACK_SCHED -- Complete in the scheduler
);
```

In any of the preceding examples, the `closure` parameter may be a function reference or a function defined inline. For example:

```
do_heavy_lifting = function()
  print("doing heavy lifting")
  return true
end
st, res = msys.runInPool('IO', do_heavy_lifting)
```

An inline function passed as a parameter would be as follows:

```
st, res = msys.runInPool('IO',
  function()
    print("doing heavy lifting")
    return true
  end
)
```

New data sharing features that are available in threaded Lua are as follows:

*   `_TLS` – session-local storage

*   `_OSTLS` – OS-level thread-local storage

*   using `self` – When running validation functions in Lua, if the callout has a validate_context parameter, the "self" parameter can be used as a table to store session-local variables. This is similar to the vctx dictionaries, but these values can be any Lua value.

```
...
-- we want to validate that we ran on a different OS thread, so
-- set a marker we can use in our output
_OSTLS.async_t_marker = 42;

function mod:validate_data(msg, ac, vctx)
 msys.runInPool('CPU', function ()
 print("CPU", "in cpu", _OSTLS.async_t_marker);
 end, true);
 test('validate_data');
 return msys.core.VALIDATE_CONT;
end

function mod:validate_data_spool(msg, ac, vctx)
  msys.runInPool('CPU',
    function ()
      print("CB", "cb data spool", _OSTLS.async_t_marker);
    end,
    function ()
      print("CB", "cb completing", _OSTLS.async_t_marker);
    end
  )
...
end
```

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24693312"></a>
## See Also

[thread.mutex](lua.ref.thread.mutex "thread.mutex"), [msys.sleep](lua.ref.msys.sleep.php "msys.sleep"), [msys.lock](lua.ref.msys.lock.php "msys.lock"), [msys.unlock](lua.ref.msys.unlock.php "msys.unlock"), [threadpool](conf.ref.threadpool.php "threadpool")

| [Prev](lua.ref.msys.registerModule)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.runSieveScript.php) |
| msys.registerModule  | [Table of Contents](index) |  msys.runSieveScript |
