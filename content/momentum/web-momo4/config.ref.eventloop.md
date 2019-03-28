|     |     |     |
| --- | --- | --- |
| [Prev](config.ref.event_loop)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.events_per_iter) |

<a name="config.ref.eventloop"></a>
## Name

eventloop — define a pool of event loops to enable multiple event loop configuration

<a name="idp24605520"></a>
## Description

### Note

To use this option, you must have a Supercharger license. This license specifies a maximum number of event loops. When configuring an event loop, the `concurrency` option in the eventloop scope cannot exceed the licensed number of event loops.

This scope defines a pool of event loops to create a multiple event loop configuration. This eventloop is then associated with specific tasks, such as SMTP reception. In general, we recommend defining only one eventloop pool.

The following is an example configuration clause:

```
EventLoop "event_loops" {
  concurrency = 6
}
```

For an example multiple event loop configuration, see [Chapter 24, *Configuring Multiple Event Loops*](multi_event_loops "Chapter 24. Configuring Multiple Event Loops") .

The only option valid in the eventloop scope is `concurrency`. Set the `concurrency` option to a value equal to approximately 75% of the total number of CPUs in the system. If the value of the `concurrency` option exceeds the licensed number of event loops you will see an error message in the log file such as the following:

```
[Wed 19 Jun 2013 11:02:47] <0x29b7510> Event loop license violation
[Wed 19 Jun 2013 11:02:47] <0x29b7510> Invalid license [Event Loop
Concurrency]
[Wed 19 Jun 2013 11:02:47] <0x29b7510> License machine mismatch
```

### Note

You cannot define an eventloop or change its `concurrency` at runtime as these changes require you to restart the ecelerity process. To restart, use the executable command [ec_ctl](executable.ec_ctl "ec_ctl"); issuing the ec_console command **config reload**        will not work.

<a name="idp24616448"></a>
## Scope

`eventloop` is valid in the global scope.

<a name="idp24618256"></a>
## See Also

[delivery_pool](config.ref.delivery_pool "delivery_pool"), [maintainer_pool](config.ref.maintainer_pool "maintainer_pool"), and [event_loop](config.ref.event_loop "event_loop")

|     |     |     |
| --- | --- | --- |
| [Prev](config.ref.event_loop)  | [Up](config.options.ref) |  [Next](conf.ref.events_per_iter) |
| event_loop  | [Table of Contents](index) |  events_per_iter |

