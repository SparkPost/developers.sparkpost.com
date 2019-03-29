|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.allow_trailing_whitespace_in_commands)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.authorization.php) |

<a name="conf.ref.async_bounce_rendering"></a>
## Name

async_bounce_rendering — which thread pool to use for bounce rendering

## Synopsis

`Async_Bounce_Rendering = true`

<a name="idp7509424"></a>
## Description

When a message fails to be delivered due to a timeout, a 5XX error from the remote MTA or a `reject` or `ec_reject` in a Sieve script, Momentum generates and injects a bounce message. If async_bounce_rendering is true, this job is done in the IO thread pool, otherwise it gets done in the scheduler before returning control to the code that noted the bounce, namely the outbound SMTP, the Sieve script or the mail queue maintainer.

The default value for this option is `true`.

<a name="idp7513248"></a>
## Scope

Async_Bounce_Rendering is valid in the global scope.

<a name="idp7514896"></a>
## See Also

[reject](sieve.ref.reject "reject")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.allow_trailing_whitespace_in_commands)  | [Up](conf.ref.files.php) |  [Next](conf.ref.authorization.php) |
| allow_trailing_whitespace_in_commands  | [Table of Contents](index) |  authorization |
