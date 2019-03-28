|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delivery_method)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.delivery_response_timeout) |

<a name="config.ref.delivery_pool"></a>
## Name

delivery_pool — associate a pool of event loops with email delivery to use multiple threads

## Synopsis

`delivery_pool = "pool_name"`

<a name="idp24306864"></a>
## Description

### Note

To use this option, you must have a Supercharger license.

This option is used in a multiple event loop configuration. To configure threading for email delivery, assign `delivery_pool` the name of your `eventloop`. Note that the name must match what was defined in the EventLoop configuration. See [eventloop](config.ref.eventloop "eventloop").

For an example multiple event loop configuration, see [Chapter 24, *Configuring Multiple Event Loops*](multi_event_loops "Chapter 24. Configuring Multiple Event Loops") .

### Note

If you change the value of `delivery_pool` at runtime, you must restart the ecelerity process using the executable command [ec_ctl](executable.ec_ctl "ec_ctl"). Note: issuing the ec_console command **config reload**        will not work.

There is no default value for this option.

<a name="idp24315312"></a>
## Scope

`delivery_pool` is valid in the global scope.

<a name="idp24317120"></a>
## See Also

[eventloop](config.ref.eventloop "eventloop")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delivery_method)  | [Up](config.options.ref) |  [Next](conf.ref.delivery_response_timeout) |
| delivery_method  | [Table of Contents](index) |  delivery_response_timeout |

