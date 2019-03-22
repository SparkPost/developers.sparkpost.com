| [Prev](conf.ref.spoolbase)  | Chapter 72. Configuration Options Reference |  [Next](config.starttls_injection_policy) |

<a name="config.ssl_lock_method"></a>
## Name

ssl_lock_method — the SSL lock method

## Synopsis

`SSL_Lock_Method = "mutex|spinlock"`

<a name="idp26746048"></a>
## Description

This option specifies the SSL lock method. This option should be changed in consultation with Message Systems support only if SSL performance issues are encountered with the default method.

This option can be set to the following:

*   `mutex`

*   `spinlock`

*   `default`

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

The default value for this option is `mutex`.

<a name="idp26754432"></a>
## Scope

`ssl_lock_method` is valid in the global scope.

| [Prev](conf.ref.spoolbase)  | [Up](config.options.ref) |  [Next](config.starttls_injection_policy) |
| spoolbase  | [Table of Contents](index) |  starttls_injection_policy |

