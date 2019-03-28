|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.logging.decommissioning)  | Part III. Configuring Momentum |  [Next](cluster.config.mmove) |
## Chapter 27. DuraVIP™: IP Fail over
**Table of Contents**

* [27.1\. IP Addresses and `duravip_follow`](cluster.config.duravip#cluster.config.duravip_follow)
* [27.2\. `duravip_follow` and the #mmove Binding](cluster.config.mmove)
* [27.3\. Address Resolution Protocol (ARP) traffic](cluster.config.arp_all_hosts)
* [27.4\. DuraVIP™ Configuration Conflicts and Ambiguities](cluster.duravip.conflict)

One of the most important features of Momentum cluster configuration is DuraVIP™ bindings. DuraVIP™ maintains the availability of MultiVIP© bindings and listener services on the associated IP addresses even when node(s) are down, either administratively or due to failure. When nodes share the same configuration, DuraVIP™ bindings provide transparent failover in the event that a node fails.
With DuraVIP™, all injection IP addresses and outbound IP addresses are assigned automatically to the nodes in the cluster, allowing the reception and delivery of messages to be divided among the nodes. In the event of node failure, these injection IPs and outbound IP addresses are assumed by the remaining nodes.
DuraVIP™ completely manages the IP addresses that you associate with bindings and listeners. It does this by adding or removing IP addresses to the NIC(s) installed in the machine. It is an error to configure the main IP address of the box as a DuraVIP™ enabled IP address, as DuraVIP™ may decide to unplumb addresses and re-provision it on a different node.
### Note
The maximum number of IP aliases that Momentum supports is `10240`. Also, it is better to enumerate the interfaces sequentially rather than assigning them arbitrarily.
DuraVIP™ requires additional information about your network topology so that it knows to which NIC it should attach a given IP address. The default `ecelerity-cluster.conf` file has a cluster stanza that contains a Topology stanza:
```
cluster {
  ... other options here ...
  # DuraVIP network topology hints
  Topology "10.1.1.0/24" {
    cidrmask = "32"
    interface = "eth1"
  }
}
```
This informs the node that any DuraVIP™ enabled IP address in the 10.1.1.0/24 network block should be attached to the interface named "eth1" with a mask of 32\. The cidrmask should almost always be set to 32, otherwise the DuraVIP™ controlled IP alias will not function correctly. (You may omit the cidrmask line completely; it defaults to 32).
If you have a more complex environment where the node has DuraVIP™ managed IP addresses on multiple network blocks you will need to specify a separate Topology stanza for each network block that you have DuraVIP™s for. For additional details, see [Section 71.19.3, “DuraVIP™ Network Topology”](modules.cluster#modules.cluster.duravip "71.19.3. DuraVIP™ Network Topology").
Once configured with the Topology hints, you may then annotate your binding and/or listeners stanzas to indicate which IPs are DuraVIP™ enabled:
```
ESMTP_Listener {
  Listen "10.1.1.1:25" {
    Enable_Duravip = true
  }
  Listen "10.1.1.2:25" {
    Enable_Duravip = true
  }
}
Binding "duravip-1" {
  Enable_Duravip = true
  Bind_Address = "10.1.1.1"
}
Binding "duravip-2" {
  Enable_Duravip = true
  Bind_Address = "10.1.1.2"
}
```
In the above configuration, when the node starts it will not by default start any SMTP listeners (the only listener is marked as DuraVIP™ enabled). Instead it will first unplumb all DuraVIP™ enabled IP addresses that may already exist on the machine (to ensure that it has a clean slate and that none are lingering from a prior invocation), join the cluster and, once it has settled and is live and operational, the nodes will elect one of the nodes to be the owner of each IP address.
Once an owner has been elected for an IP address, that owner will plumb the IP address according to the Topology hints that have been configured and start SMTP service for that IP address.
If the owner of a given IP address goes down, either due to administrative action or due to failure, the other nodes will notice its departure from the cluster and then hold an election for that IP address, assigning it to another node. The IP will then be plumbed on the new owning node with minimal interruption to service.
When the downed node re-joins the cluster, another election will be held for ownership of the IP addresses, which will likely cause re-assignment of IP addresses back to the downed node.
When bindings move between nodes, the system will also need to move the mail queues for those bindings to the new owning node. This is handled transparently. Mail will also be moved between nodes if it is injected to a node and that node is not the owner of the binding assigned to the message.
### Note
When injecting messages take care that you do not unduly increase traffic between nodes. For more information see [Section 27.2, “`duravip_follow` and the #mmove Binding”](cluster.config.mmove "27.2. duravip_follow and the #mmove Binding").
If you are using a large number of DuraVIP™s you may need to enable [use_iflist_cache](conf.ref.use_iflist_cache "use_iflist_cache").
Performing a DuraVIP™ move causes a re-evaluate of the binding assignment for all messages in the queue; in some circumstances this can be a very resource-intensive operation. To avoid possibly exhausting resources, you can check with support to see if setting the cluster configuration option, `unconditional_rebind` to `false` might be required.
### Warning
DuraVIP™ does not work across different subnets, meaning you cannot have a DuraVIP™ migrate between servers on different LAN segments, because there is no way to alter the underlying networking. The system will allow you to configure DuraVIP™s across segments, but such configurations will not work properly.
Most deployments will want to have a particular node be the preferred owner of an IP address, such that, in normal operation of the system, that node will be guaranteed to be the node that has the IP plumbed. To express this configuration, you will mark the listener or binding with your preference:
```
ESMTP_Listener {
  Listen "10.1.1.1:25" {
    Enable_Duravip = true
    Duravip_Preference = "nodename"
  }
}
Binding "foo" {
  Enable_Duravip = true
  Bind_Address = "10.1.1.1"
  Duravip_Preference = "nodename"
}
```
The above configuration will cause the IP ownership election to favor the node named "nodename" if it is online at the time of the election. Otherwise, the IP will be distributed to the next best node. It is not possible to configure a second-best preference.
### Note
In a cluster configuration, suspension of a binding can result in excessive "#mmoves" between nodes. To avoid this possibility, always assign a `duravip_preference` for any bindings used with the Adaptive Delivery module. For more information about the Adaptive Delivery module, see [Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery").
Some deployments do not always inject on the same IP as the IP that they intend to use for binding assignment and will want to preserve association between the listener IP and the binding IP. The primary motivation for this is to avoid having the cluster perform an internal message move, as excessive internal message moves can have a negative impact on the performance of the cluster.
```
ESMTP_Listener {
  Listen "10.1.1.1:25" {
    Duravip_Follow = "bindingname"
  }
}
Binding "bindingname" {
  Enable_Duravip = true
  Bind_Address = "10.2.1.1"
}
```
In the above configuration, there are DuraVIP™s on two different networks; the 10.2.1.1 address is explicitly managed by the DuraVIP™ system and if/when it is moved to another node, the 10.1.1.1 IP address will follow it to the same node.
You may only use `Duravip_Follow` on listeners to make listeners follow bindings; Bindings cannot follow listeners. The DuraVIP™ entity to follow may be called by its name or its IP address. Note that a listener cannot be both `Enable_Duravip` and `Duravip_Follow`.
### Warning
If you modify bindings in the configuration file, a possible race condition means that a **config reload**        taking effect on multiple machines at the same time can cause nodes to disagree about who owns which binding. For this reason it is strongly suggested that you execute the console command **broadcast cluster duravip announce view**                               immediately after **config reload** . Doing this synchronizes ownership of the bindings and eliminate a possible race condition among the nodes.
## 27.1. IP Addresses and `duravip_follow`
You cannot have the same IP address for a listener and a binding if the listener is to "duravip_follow" that binding. For example, do **not** use a configuration such as the following:
```
listen "10.110.83.140:25" {
  duravip_follow = "example"
  ...
}
binding "example" {
  bind_address = "10.110.83.140"
  ...
}
```
If you want a listener to follow a binding, give the listener and the binding different IP addresses. Additionally, you should **not** use `duravip_preference` when using `duravip_follow`. If a listener has `enable_duravip` set to true, do not set a `duravip_preference` for this listener.

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.logging.decommissioning)  | [Up](p.configuration) |  [Next](cluster.config.mmove) |
| 26.5. Decommissioning a Log Aggregator  | [Table of Contents](index) |  27.2. `duravip_follow` and the #mmove Binding |
