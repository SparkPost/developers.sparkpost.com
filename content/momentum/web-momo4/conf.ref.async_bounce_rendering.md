|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.allow_trailing_whitespace_in_commands)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.authorization) |

<a name="conf.ref.async_bounce_rendering"></a>
## Name

async_bounce_rendering — which thread pool to use for bounce rendering

## Synopsis

`async_bounce_rendering = true`

<a name="idp23537072"></a>
## Description

When a message fails to be delivered due to a timeout or a 5XX error from the remote MTA, Momentum generates and injects a bounce message. If `async_bounce_rendering` is true, this job is done in the IO thread pool, otherwise it gets done in the scheduler before returning control to the code that noted the bounce, namely the outbound SMTP or the mail queue maintainer.

The default value is `true`.

<a name="idp23540576"></a>
## Scope

async_bounce_rendering is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.allow_trailing_whitespace_in_commands)  | [Up](config.options.ref) |  [Next](conf.ref.authorization) |
| allow_trailing_whitespace_in_commands  | [Table of Contents](index) |  authorization |

