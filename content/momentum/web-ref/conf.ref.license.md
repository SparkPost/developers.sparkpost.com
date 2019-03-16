| [Prev](conf.ref.legacy_message_threshold)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.lmtp_port.php) |

<a name="conf.ref.license"></a>
## Name

license — specify an alternate license location

## Synopsis

`License = "/opt/msys/ecelerity/etc/license"`

<a name="idp10002560"></a>
## Description

This configuration directive is used to override the default license file location.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp10005632"></a>
## Scope

`license` is valid in the global scope.

| [Prev](conf.ref.legacy_message_threshold)  | [Up](conf.ref.files.php) |  [Next](conf.ref.lmtp_port.php) |
| legacy_message_threshold  | [Table of Contents](index) |  lmtp_port |
