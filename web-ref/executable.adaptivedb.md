|     |     |     |
| --- | --- | --- |
| [Prev](executable.adaptive_loader)  | 11.2. Executable Commands |  [Next](executable.create_ssl_cert.php) |

<a name="executable.adaptivedb"></a>
## Name

adaptivedb — create the SQLite database used by the adaptive module

## Synopsis

`/opt/msys/ecelerity/bin/adaptivedb`

<a name="idp13023952"></a>
## Description

**adaptivedb** creates the SQLite database used by the adaptive module. The database is named `adaptive.db` and is located in the `/var/log/ecelerity` directory. After issuing this command, you should see the message, "Adaptive Database created".

This command initializes the data store used by the adaptive module. You *must* run this command if you plan to use the adaptive module.

**Configuration Change. ** As of version 3.3, this command is no longer used. When upgrading to Momentum 3.3, use the command [ec_admigrate](executable.ec_admigrate "ec_admigrate") to migrate the SQLite database to the Riak database used in Momentum 3.3 and higher.

<a name="idp13030272"></a>
## See Also

[Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.adaptive_loader)  | [Up](exe.commands.details.php) |  [Next](executable.create_ssl_cert.php) |
| adaptive_loader  | [Table of Contents](index) |  create_ssl_cert |
