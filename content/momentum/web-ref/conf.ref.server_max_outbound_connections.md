|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.server_max_file_descriptors)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.server_reserve_outbound_connections.php) |

<a name="conf.ref.server_max_outbound_connections"></a>
## Name

server_max_outbound_connections — sets the maximum number of outbound connections

## Synopsis

`Server_Max_Outbound_Connections = 20000`

<a name="idp11695808"></a>
## Description

Limits the number of total connections that will be established concurrently within Momentum, irrespective of bindings. While 20,000 is the value assigned to this option in the configuration file, it may be reasonable to increase this value to 50,000 or 75,000 depending on the capabilities of the underlying hardware and operating system.

The default value for this option is `75000`. (However, the assigned value in the default configuration file is `20000`.) If the current value of this option differs from the default, from within the web UI you can assign the default value by locating this option and then choosing the DEFAULT button. The DEFAULT button only appears when an option has a default value and a value (even the default value) has been assigned to this option.

Note that this parameter is intimately related to [server_max_file_descriptors](conf.ref.server_max_file_descriptors "server_max_file_descriptors") since the number of available OS file descriptors will limit the number of messages that can be queued simultaneously. See the description in [Section 1.5, “Operating System Specific Preparation”](install.os-specific.php "1.5. Operating System Specific Preparation") for more details.

Within a `Binding` stanza, this option will regulate the total number of connections through that particular binding.

<a name="idp11704064"></a>
## Scope

server_max_outbound_connections is valid in the binding, binding_group and global scopes.

<a name="idp11705760"></a>
## See Also

[server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections "server_reserve_outbound_connections")

[server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections "server_reserve_outbound_connections")

[server_max_file_descriptors](conf.ref.server_max_file_descriptors "server_max_file_descriptors")

[Section 1.5, “Operating System Specific Preparation”](install.os-specific "1.5. Operating System Specific Preparation")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.server_max_file_descriptors)  | [Up](conf.ref.files.php) |  [Next](conf.ref.server_reserve_outbound_connections.php) |
| server_max_file_descriptors  | [Table of Contents](index) |  server_reserve_outbound_connections |
