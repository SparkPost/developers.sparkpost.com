| [Prev](conf.ref.server_max_file_descriptors)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.server_reserve_outbound_connections) |

<a name="conf.ref.server_max_outbound_connections"></a>
## Name

server_max_outbound_connections — sets the maximum number of outbound connections

## Synopsis

`Server_Max_Outbound_Connections = 20000`

<a name="idp26532208"></a>
## Description

Limits the number of total connections that will be established concurrently within Momentum, irrespective of bindings. While 20,000 is the value assigned to this option in the configuration file, it may be reasonable to increase this value to 50,000 or 75,000 depending on the capabilities of the underlying hardware and operating system.

The default value is `75000`; however, the assigned value in the default configuration file is `20000`.

Note that this parameter is intimately related to [server_max_file_descriptors](conf.ref.server_max_file_descriptors "server_max_file_descriptors") since the number of available OS file descriptors will limit the number of messages that can be queued simultaneously.

Within a `Binding` stanza, this option will regulate the total number of connections through that particular binding.

<a name="idp26537984"></a>
## Scope

server_max_outbound_connections is valid in the binding, binding_group and global scopes.

<a name="idp26539872"></a>
## See Also

[server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections "server_reserve_outbound_connections"), [server_max_file_descriptors](conf.ref.server_max_file_descriptors "server_max_file_descriptors")

| [Prev](conf.ref.server_max_file_descriptors)  | [Up](config.options.ref) |  [Next](conf.ref.server_reserve_outbound_connections) |
| server_max_file_descriptors  | [Table of Contents](index) |  server_reserve_outbound_connections |

