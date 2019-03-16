| [Prev](conf.ref.send_8bitmime)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.server_max_outbound_connections.php) |

<a name="conf.ref.server_max_file_descriptors"></a>
## Name

server_max_file_descriptors — sets the maximum number of file descriptors usable by the system

## Synopsis

`Server_Max_File_Descriptors = 80000`

<a name="idp11677824"></a>
## Description

This parameter sets the OS file descriptor limit for the Momentum Process. It may require OS kernel parameters to be modified to support the value you configure. There is no system performance degradation by setting this number [much] higher than the typical process default value (which is often only 1024). See the description in [Section 1.5, “Operating System Specific Preparation”](install.os-specific "1.5. Operating System Specific Preparation") for more details. The default value for this option is `3000000`. (However, the assigned value in the default configuration file is `80000`.)

Note that this parameter is intimately related to [server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections") since the number of available OS file descriptors will limit the number of messages that can be processed simultaneously. This option needs to be at least four times the value of `server_max_outbound_connections`.

<a name="idp11683392"></a>
## Scope

server_max_file_descriptors is valid in the global scope only.

<a name="idp11685056"></a>
## See Also

[server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections "server_reserve_outbound_connections")

[server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections")

[Section 1.5, “Operating System Specific Preparation”](install.os-specific "1.5. Operating System Specific Preparation")

| [Prev](conf.ref.send_8bitmime)  | [Up](conf.ref.files.php) |  [Next](conf.ref.server_max_outbound_connections.php) |
| send_8bitmime  | [Table of Contents](index) |  server_max_outbound_connections |
