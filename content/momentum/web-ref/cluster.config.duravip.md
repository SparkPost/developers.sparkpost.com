|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.deployment)  | Chapter 7. Clustering |  [Next](cluster.config.logging.php) |

## 7.5. DuraVIP™: IP Fail over

DuraVIP™ maintains the availability of MultiVIP© bindings and listener services on the associated IP addresses even when node(s) are down (either administratively, or due to failure).

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

If you have a more complex environment where the node has DuraVIP™ managed IP addresses on multiple network blocks you will need to specify a separate Topology stanza for each network block that you have DuraVIP™s for.

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

When injecting messages take care that you do not unduly increase traffic between nodes. For more information see [Section 7.5.2, “`duravip_follow` and the #mmove Binding”](cluster.config.duravip#cluster.config.mmove "7.5.2. duravip_follow and the #mmove Binding").

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

In a cluster configuration, suspension of a binding can result in excessive "#mmoves" between nodes. To avoid this possibility always assign a `duravip_preference` for any bindings used with the Adaptive Delivery module. For more information about the Adaptive Delivery module see [Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery").

Some deployments do not always inject on the same IP as the IP that they intend to use for binding assignment, and will want to preserve association between the listener IP and the binding IP. The primary motivation for this is to avoid having the cluster perform an internal message move, as excessive internal message moves can have a negative impact on the performance of the cluster.

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

In the above configuration there are DuraVIP™s on two different networks; the 10.2.1.1 address is explicitly managed by the DuraVIP™ system and if/when it is moved to another node, the 10.1.1.1 IP address will follow it to the same node.

You may only use `Duravip_Follow` on listeners to make listeners follow bindings; Bindings cannot follow listeners. The DuraVIP™ entity to follow may be called by its name or its IP address. Note that a listener cannot be both `Enable_Duravip` and `Duravip_Follow`.

### Warning

If you modify bindings in the configuration file, a possible race condition means that a **config reload**        taking effect on multiple machines at the same time can cause nodes to disagree about who owns which binding. For this reason it is strongly suggested that you execute the console command **broadcast cluster duravip announce view**                               immediately after **config reload** . Doing this synchronizes ownership of the bindings and eliminate a possible race condition among the nodes.

### 7.5.1. IP Addresses and `duravip_follow`

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

If you want a listener to follow a binding, give the listener and the binding different IP addresses. Additionally, you should **not** use `duravip_preference` when using `duravip_follow`. If a listener has `enable_duravip` set to true do not set a `duravip_preference` for this listener.

### 7.5.2. `duravip_follow` and the #mmove Binding

The #mmove binding is the cluster message movement binding in the default binding group. This is a virtual binding for moving messages between nodes.

The current design of Momentum assumes that #mmove traffic will be the exception, rather than the rule. If you are seeing a lot of traffic on the #mmove binding, this is an indication of an underlying problem with the way the traffic is being injected. It will always be less efficient to inject to one node, #mmove to another node, and then deliver from that node. It is always more efficient to inject directly to the delivery node.

Sometimes a client doesn't know until the message is injected which binding to assign it to, but often this is known beforehand. When you do know which binding a message will be assigned to, it is best practice to associate a specific Listener IP with a specific binding (or binding group) by using `Duravip_Follow` in the Listener stanza. Injecting to a given Listener means that the outbound binding is always local. The alternative is to always inject to binding groups, and have each binding group contain a preferred binding on each node, so that delivery is always local.

Following this best practice is not only important for efficient delivery but also because traffic on the #mmove binding will appear in the web UI as traffic on the default binding, reducing the usefulness of the graphic representation of traffic.

If you wish to determine the amount of traffic on the #mmove binding use the [mailq](console_commands.mailq "mailq") command from the system console.

**ECmmove2**

ECmmove2 is the service that handles DuraVIP™ message moves. A node will connect to the ECCluster_listener and indicate that it is going to initiate an mmove; the connection is then passed over to the SMTP state machines on both sides and completes using regular SMTP.

The connection service is accounted as `ECmmove2` instead of `SMTP`. If you wish you can audit this service. For more information see [audit_service](sieve.ref.audit_service "audit_service").

### 7.5.3. The `arp_all_hosts` Option

**Configuration Change. ** This feature is available starting from Momentum 3.0.13.

Some networks may experience difficulties with Address Resolution Protocol (ARP) traffic when using the DuraVIP™ clustering feature. If you are experiencing ARP-related issues, you can set `arp_all_hosts` = `false` in the cluster stanza to limit the scope of the ARP traffic generated by DuraVIP™ moves. The default value for this option is `true`.

### 7.5.4. DuraVIP™ Configuration Conflicts and Ambiguities

The DuraVIP™ subsystem attempts to make the most intelligent and **safe** decision regardless of the situation encountered.

**7.5.4.1. Preference conflicts**

The DuraVIP™ configuration attribute "duravip_preference" is not a boolean attribute that dictates whether the locally configured node should prefer a particular IP address. The reasoning is that if configuration files are copied between machines, two nodes could prefer the same IP address. By requiring the configuration to explicitly name the node that should prefer a specific IP address, the likelihood of that configuration is dramatically reduced. If, in the unlikely event, two different nodes are brought online both configured to be the preferred owner of an IP address then that address will be marked in conflict and normal election semantics will be employed.

**7.5.4.2. Services conflicts**

As detailed in the configuration section, IP addresses that are configured for DuraVIP™ on one service will be automatically upgraded to DuraVIP™ on all services. However, this does not prevent one node from being configured with an ESMTP_Listener on a DuraVIP™ interface while another node is configured with the same DuraVIP™ interface yet without an ESMTP_Listener:

```
# node1 configuration
ESMTP_Listener {
  Listen "192.168.0.51:25" {
    Enable_Duravip = "true"
  }
}
Binding example {
  Enable_Duravip = "true"
  Bind_Address = 192.168.0.51
}

# node2 configuration
Binding example {
  Enable_Duravip = "true"
  Bind_Address = 192.168.0.51
}
```

In this case, the DuraVIP™ subsystem will mark the IP address as "UNSAFE." However, that is the extent of conflict resolution that will occur. The usual semantics for electing an owner of the IP address will be employed. The tag of UNSAFE is simply to assist the cluster administrator in finding problems.

**7.5.4.3. Binding name and IP mismatches**

In Momentum, most mechanisms for assigning a message to a MultiVIP© binding use the Binding name for such assignments. As such, it is essential that the Binding name associated with an IP address be consistent across the cluster. If it is not, it indicates a misconfiguration that could result in messages leaving from the wrong IP address (which is unacceptable for multi-client configurations). If the DuraVIP™ subsystem recognizes such a misconfiguration, it will mark the named DuraVIP™ instance as "BROKEN," and refuse to manage it.

**7.5.4.4. Disjointed DuraVIP™ Participation**

The group membership and election processes that drive the DuraVIP™ subsystem are a dynamic extension atop advanced research in the area of highly reliable IP services. The system provides a unified and consistent virtual membership on a per-IP address basis. What this means is that you can have different nodes in the cluster managing different, possibly overlapping, DuraVIP™ sets.

While this is certainly possible, it can be hard to understand the expected behavior of the system in such complicated configurations. As such, it is highly recommended that the global set of bindings and listeners managed under DuraVIP™ are identical on each system.

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.deployment)  | [Up](cluster.php) |  [Next](cluster.config.logging.php) |
| 7.4. Cluster Deployment  | [Table of Contents](index) |  7.6. Log Aggregation |
