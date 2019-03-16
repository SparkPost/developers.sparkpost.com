| [Prev](conf.ref.mailfrom_timeout)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.malloc2mmap_threshold.php) |

<a name="conf.ref.maintainer_pool"></a>
## Name

maintainer_pool — configure mail queues, DNS lookup and module events to use multiple threads

## Synopsis

`maintainer_pool = "pool_name"`

<a name="idp10097712"></a>
## Description

**Configuration Change. ** This option is available as of version 3.6.

### Note

In order to use this option you must have a "Supercharger" license. For more information see [Section 2.4, “Configuring for Multiple Event Loops in Momentum 3.6”](conf.multi-core "2.4. Configuring for Multiple Event Loops in Momentum 3.6").

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

This option is used to create multiple event loops. Set it to the name of an eventloop so that mail queues, DNS lookup and module events use multiple threads. A configuration example follows:

<a name="conf.ref.maintainer_pool.example"></a>

**Example 9.10. maintainer_pool example**

```
eventloop "maint" {
  concurrency = 5
}

maintainer_pool = "maint"
```

Set `concurrency` to a number equal to or less than the number of computer cores.

There is no default value for this option.

<a name="idp10106464"></a>
## Scope

`maintainer_pool` is valid in the global scope.

<a name="idp10108064"></a>
## See Also

[Section 2.4, “Configuring for Multiple Event Loops in Momentum 3.6”](conf.multi-core "2.4. Configuring for Multiple Event Loops in Momentum 3.6") and [eventloop](conf.ref.eventloop.php "eventloop")

| [Prev](conf.ref.mailfrom_timeout)  | [Up](conf.ref.files.php) |  [Next](conf.ref.malloc2mmap_threshold.php) |
| mailfrom_timeout  | [Table of Contents](index) |  malloc2mmap_threshold |
