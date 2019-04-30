|     |     |     |
| --- | --- | --- |
| [Prev](modules.static_routes)  | Chapter 14. Modules Reference |  [Next](modules.suppress_spool) |

## 14.71. statp – Stats Producer Module

<a class="indexterm" name="idp21514992"></a>

The `stats_producer` module is used internally by the MTA to provide real-time graphing data for both the single-node web console as well as the cluster-wide web console. However, you must also configure the logging modules as described in [Section 4.5.5, “Logging and the Web UI”](operations.logging#operations.logging.web.ui "4.5.5. Logging and the Web UI").

This module is configured as follows:

<a name="example.statp.3"></a>

**Example 14.101. statp module**

```
statp "statp1" {
  log_file = "jlog:///var/log/ecelerity/statp.rt"
  interval = 60
}
```

The the default value for `interval` is `60` seconds. You should not need to change this option.

The `log_file` option defaults to `jlog:///var/log/ecelerity/statp.rt`. This option should not need to be changed from its default. This module is intended to be run in conjunction with **ec_rt_stats2**, with the rollup process running centrally on a single web UI node.

**Configuration Change. ** This feature is available starting from Momentum 3.0.13.

Sites with large numbers of bindings and a highly contended disk subsystem will need to enable the `watchlist_only` option to track bounces for domains on the watchlist only. In version 3.0.13 the default value for this option is `false`. As of version 3.0.14, the default value for this option is `true`. This reduces the amount of data generated and disk i/o.

The watchlist is a schema that is created automatically in the `ecelerity` PostgreSQL database. The `rt_stats_watchlist_only` option also needs to be enabled in the `ec_rotate.conf` file. For more information see [the section called “The `ec_rotate.conf` File”](executable.ec_rotate#ec_rotate.conf "The ec_rotate.conf File").

Apart from these three options, all other options have been removed in version 3.0.

### 14.71.1. See Also

[ec_rt_stats2](executable.ec_rt_stats2 "ec_rt_stats2")


|     |     |     |
| --- | --- | --- |
| [Prev](modules.static_routes)  | [Up](modules) |  [Next](modules.suppress_spool) |
| 14.70. static-routes - Static Routes  | [Table of Contents](index) |  14.72. suppress_spool – Deferred Message Spooling |
