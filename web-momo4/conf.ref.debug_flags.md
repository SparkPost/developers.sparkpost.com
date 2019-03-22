| [Prev](config.crypto_lock_method)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.default_binding) |

<a name="conf.ref.debug_flags"></a>
## Name

debug_flags — configure debug verbosity

<a name="idp24117488"></a>
## Description

Debug_Flags {
  *`level`* = ( *`mask`* )
}

Debug_Flags tells Momentum which events to write to the log_error handler of the logging subsystem. When using the default logging module `ec_logger`, these messages will appear in the `paniclog`. The mask is a decimal number representing the bit mask that is used to activate logging statements. A human-readable variation of Debug_Flags is used. The sample below shows the default setting, which turns on useful severe error messages, but leaves the more informational messages turned off, so that they don't clutter your log files.

```
Debug_Flags {
        DEBUG = ()
        INFO = ()
        NOTICE = ()
        WARNING = ()
        ERROR = (TIME FD SMTP LOG1 DNS DNSDS NET SIG MEM DB LIC SSL MOD START ALL)
        CRITICAL = (TIME FD SMTP LOG1 DNS DNSDS NET SIG MEM DB LIC SSL MOD START ALL)
}
```

### Note

Use ‘`ALL`’ instead of listing each service debug flag.

<a name="conf.ref.debug.levels"></a>

**Table 72.1. Debug levels**

| Level | Description |
| --- | --- |
| 0 | Debug |
| 1 | Info |
| 2 | Notice |
| 3 | Warning |
| 4 | Error |
| 5 | Critical |

<a name="conf.ref.subsystems"></a>

**Table 72.2. Subsystems and symbolic names**

| Subsystem | Symbolic Name |
| --- | --- |
| Generic | ERROR |
| Time | TIME |
| File Descriptors | FD |
| SMTP | SMTP |
| LOG1 | LOG1 |
| DNS | DNS |
| DNS data structures | DNSDS |
| Network | NET |
| Signals | SIG |
| Memory Management | MEM |
| Database | DB |
| License | LIC |
| SSL | SSL |
| Modules | MOD |
| Start | START |

<a name="idp24163136"></a>
## Scope

debug_flags is valid in the global scope.

| [Prev](config.crypto_lock_method)  | [Up](config.options.ref) |  [Next](conf.ref.default_binding) |
| crypto_lock_method  | [Table of Contents](index) |  default_binding |

