| [Prev](sieve.ref.ec_test)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_throttle) |

<a name="sieve.ref.ec_thread_pool_get_queue_size"></a>
## Name

ec_thread_pool_get_queue_size — get the number of jobs queued against a jobclass

## Synopsis

`ec_thread_pool_get_queue_size` { *`jobclass`* }

<a name="idp30654288"></a>
## Description

This action returns the number of jobs currently queued against the named jobclass. It can be run in any phase. One suggested use case is turning away incoming mail with a 4XX code when an antivirus module's queue of messages to scan grows beyond some maximum size.

| [Prev](sieve.ref.ec_test)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_throttle) |
| ec_test  | [Table of Contents](index) |  ec_throttle |
