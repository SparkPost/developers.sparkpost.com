| [Prev](sieve)  | Chapter 8. Sieve++ |  [Next](sieve.syntax.basic) |

## 8.1. The differences between Sieve and Sieve++

The Sieve language is a mail filtering language defined in [RFC 3028](http://tools.ietf.org/html/rfc3028) and further extended in [RFC 3685](http://tools.ietf.org/html/rfc3685). Essentially Sieve is a standardized way of processing email and taking actions based on complicated logic. It is a programming language that is specifically tailored to meet the requirements of processing and extracting components from email and taking actions that are appropriate for sorting email.

Sieve itself was designed to process an email message once it has been received from the sending MTA. This is the first instance where Sieve++ extends beyond the capabilities of the traditional Sieve specification. With Sieve++, you can execute a script during any phase of the SMTP transaction: connect, ehlo, mail from, rcpt to, and the mail body itself. This provides you the powerful advantage of actually changing the SMTP responses made to the sending MTA.

In Sieve, the specified actions allow you to "keep", "discard", "reject", "redirect" and "fileinto" (save to a specific folder) any message that is processed. Since Sieve++ works at the MTA level, it does not allow for "fileinto" as it does not act as an MDA (Mail Delivery Agent) without loading a IO_System module to provide those facilities. While we lack the native ability to "fileinto", we gain the ability to take SMTP actions such as issuing transient SMTP failures (45x), permanent failures (55x), time-based costs (a.k.a. tarpitting), or disconnecting the SMTP session.

Sieve itself was designed to be extensible through the concept of a "require" block at the top of every script that specifies which capabilities that script will use. This allows for new capabilities to be added as well as ensuring that specific requested facilities can be provided at the time the script is compiled, rather than during an SMTP session.

### Note

When using the Momentum implementation of Sieve "require" blocks are *not* needed.


|     |     |     |
| --- | --- | --- |
| [Prev](sieve)  | [Up](sieve) |  [Next](sieve.syntax.basic) |
| Chapter 8. Sieve++  | [Table of Contents](index) |  8.2. Sieve's Basic Syntax |
