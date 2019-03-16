| [Prev](sieve.ref.split)  | 16.2. Sieve Function Details |  [Next](sieve.ref.thread_pool_stats) |

<a name="sieve.ref.stop"></a>
## Name

stop — stop processing the current script

## Synopsis

`stop`

<a name="idp31284560"></a>
## Description

The `stop` action is used to explicitly indicate that the current script should stop processing. This is similar to the keep function: [keep](sieve.ref.keep "keep"), but does not increment any internal stats counters.

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

For an overview of Sieve actions see [Section 8.2.2, “Actions”](sieve.syntax.basic#sieve.syntax.basic.actions "8.2.2. Actions").

| [Prev](sieve.ref.split)  | [Up](sieve.ref.files) |  [Next](sieve.ref.thread_pool_stats) |
| split  | [Table of Contents](index) |  thread_pool_stats |
