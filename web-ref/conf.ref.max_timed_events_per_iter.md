|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.max_retry_interval)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.mdn_failures_notify.php) |

<a name="conf.ref.max_timed_events_per_iter"></a>
## Name

max_timed_events_per_iter — the maximum numer of timed events per scheduler iteration

## Synopsis

`max_timed_events_per_iter = 1024`

<a name="idp10332880"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.22.

This option provides an upper boundary on how many timed events are dispatched in a single scheduler iteration. This caps the number of timed events that will be processed by the scheduler before tending to events triggered by network traffic, preventing network events from being starved by time-based events.

The default value for this option is `1024`.

<a name="idp10338224"></a>
## Scope

max_timed_events_per_iter is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.max_retry_interval)  | [Up](conf.ref.files.php) |  [Next](conf.ref.mdn_failures_notify.php) |
| max_retry_interval  | [Table of Contents](index) |  mdn_failures_notify |
