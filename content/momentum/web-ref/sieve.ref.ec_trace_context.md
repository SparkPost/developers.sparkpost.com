| [Prev](sieve.ref.ec_tolower)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_trunc) |

<a name="sieve.ref.ec_trace_context"></a>
## Name

ec_trace_context — add X-Trace-Context header to the current message

## Synopsis

`ec_trace_context`

<a name="idp30720624"></a>
## Description

The ec_trace_context action allows debugging information to be added to the header of the current email "in-transit". ec_trace will place a complete copy of the message and connection contexts in a new "X-Trace-Context" header of the email.

| [Prev](sieve.ref.ec_tolower)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_trunc) |
| ec_tolower  | [Table of Contents](index) |  ec_trunc |
