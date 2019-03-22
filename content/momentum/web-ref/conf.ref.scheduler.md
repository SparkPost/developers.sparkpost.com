| [Prev](conf.ref.rset_timeout)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.scope_max_outbound_connections.php) |

<a name="conf.ref.scheduler"></a>
## Name

scheduler — override the default IO scheduler

## Synopsis

`Scheduler = "scheduler-name"`

<a name="idp11567184"></a>
## Description

Momentum automatically selects the best available I/O scheduling mechanism for the platform on which it is running. You should not change this option unless advised by a Message Systems support engineer.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp11570400"></a>
## Scope

`scheduler` is valid in the global scope.

| [Prev](conf.ref.rset_timeout)  | [Up](conf.ref.files.php) |  [Next](conf.ref.scope_max_outbound_connections.php) |
| rset_timeout  | [Table of Contents](index) |  scope_max_outbound_connections |
