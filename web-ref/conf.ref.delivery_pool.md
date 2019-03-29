|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delivery_method)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.delivery_response_timeout.php) |

<a name="conf.ref.delivery_pool"></a>
## Name

delivery_pool — associate an eventloop with mail delivery

## Synopsis

`delivery_pool = "pool"`

<a name="idp8926224"></a>
## Description

**Configuration Change. ** This option is available as of version 3.6.

### Note

In order to use this option you must have a "Supercharger" license. For more see [Section 2.4, “Configuring for Multiple Event Loops in Momentum 3.6”](conf.multi-core "2.4. Configuring for Multiple Event Loops in Momentum 3.6").

This option is used in a multiple event loop configuration. To perform delivery in the eventloop, assign `delivery_pool` the name of your `eventloop`. There is no default value for the `delivery_pool` option. A configuration example follows:

```
eventloop "pool" {
  concurrency = 10
}

delivery_pool = "pool"

esmtp_listener {
  event_loop = "pool"
  ...
}
```

Set `concurrency` in the eventloop scope to a number equal to or less than the number of computer cores.

### Note

Changing the value of `delivery_pool` at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

Note that the `event_loop` option within the listener scope ensures that *reception* is associated with the event loop pool.

<a name="idp8937152"></a>
## Scope

`delivery_pool` is valid in the global scope.

<a name="idp8938800"></a>
## See Also

[eventloop](conf.ref.eventloop "eventloop") and [Section 2.4, “Configuring for Multiple Event Loops in Momentum 3.6”](conf.multi-core.php "2.4. Configuring for Multiple Event Loops in Momentum 3.6")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delivery_method)  | [Up](conf.ref.files.php) |  [Next](conf.ref.delivery_response_timeout.php) |
| delivery_method  | [Table of Contents](index) |  delivery_response_timeout |
