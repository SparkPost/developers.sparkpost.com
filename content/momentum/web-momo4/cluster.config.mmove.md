| [Prev](cluster.config.duravip)  | Chapter 27. DuraVIP™: IP Fail over |  [Next](cluster.config.arp_all_hosts) |

## 27.2. `duravip_follow` and the #mmove Binding

The #mmove binding is the cluster message movement binding in the default binding group. This is a virtual binding for moving messages between nodes.

The current design of Momentum assumes that #mmove traffic will be the exception, rather than the rule. If you are seeing a lot of traffic on the #mmove binding, this is an indication of an underlying problem with the way the traffic is being injected. It will always be less efficient to inject to one node, #mmove to another node, and then deliver from that node. It is always more efficient to inject directly to the delivery node.

Sometimes a client doesn't know until the message is injected which binding to assign it to, but often this is known beforehand. When you do know which binding a message will be assigned to, it is best practice to associate a specific Listener IP with a specific binding (or binding group) by using `Duravip_Follow` in the Listener stanza. Injecting to a given Listener means that the outbound binding is always local. The alternative is to always inject to binding groups and have each binding group contain a preferred binding on each node, so that delivery is always local.

If you wish to determine the amount of traffic on the #mmove binding, use the [mailq](console_commands.mailq "mailq") command from the system console.

### ECmmove2

ECmmove2 is the service that handles DuraVIP™ message moves. A node will connect to the ECCluster_listener and indicate that it is going to initiate an mmove; the connection is then passed over to the SMTP state machines on both sides and completes using regular SMTP.

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.duravip)  | [Up](cluster.config.duravip) |  [Next](cluster.config.arp_all_hosts) |
| Chapter 27. DuraVIP™: IP Fail over  | [Table of Contents](index) |  27.3. Address Resolution Protocol (ARP) traffic |

