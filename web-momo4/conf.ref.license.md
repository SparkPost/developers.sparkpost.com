| [Prev](conf.ref.legacy_message_threshold)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.lmtp_port) |

<a name="conf.ref.license"></a>
## Name

license — specify an alternate license location

## Synopsis

`License = "/opt/msys/ecelerity/etc/license"`

<a name="idp25103456"></a>
## Description

This configuration directive is used to override the default license file location.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp25106352"></a>
## Scope

`license` is valid in the global scope.

| [Prev](conf.ref.legacy_message_threshold)  | [Up](config.options.ref) |  [Next](conf.ref.lmtp_port) |
| legacy_message_threshold  | [Table of Contents](index) |  lmtp_port |

