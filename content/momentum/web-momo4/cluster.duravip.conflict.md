| [Prev](cluster.config.arp_all_hosts)  | Chapter 27. DuraVIP™: IP Fail over |  [Next](cluster.config.replication) |

## 27.4. DuraVIP™ Configuration Conflicts and Ambiguities

The DuraVIP™ subsystem attempts to make the most intelligent and **safe** decision regardless of the situation encountered.

### 27.4.1. Preference conflicts

The DuraVIP™ configuration attribute "duravip_preference" is not a boolean attribute that dictates whether the locally configured node should prefer a particular IP address. The reasoning is that if configuration files are copied between machines, two nodes could prefer the same IP address. By requiring the configuration to explicitly name the node that should prefer a specific IP address, the likelihood of that configuration is dramatically reduced. If, in the unlikely event, two different nodes are brought online both configured to be the preferred owner of an IP address then that address will be marked in conflict and normal election semantics will be employed.

### 27.4.2. Services conflicts

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

### 27.4.3. Binding name and IP mismatches

In Momentum, most mechanisms for assigning a message to a MultiVIP© binding use the Binding name for such assignments. As such, it is essential that the Binding name associated with an IP address be consistent across the cluster. If it is not, it indicates a misconfiguration that could result in messages leaving from the wrong IP address (which is unacceptable for multi-client configurations). If the DuraVIP™ subsystem recognizes such a misconfiguration, it will mark the named DuraVIP™ instance as "BROKEN," and refuse to manage it.

### 27.4.4. Disjointed DuraVIP™ Participation

The group membership and election processes that drive the DuraVIP™ subsystem are a dynamic extension atop advanced research in the area of highly reliable IP services. The system provides a unified and consistent virtual membership on a per-IP address basis. What this means is that you can have different nodes in the cluster managing different, possibly overlapping, DuraVIP™ sets.

While this is certainly possible, it can be hard to understand the expected behavior of the system in such complicated configurations. As such, it is highly recommended that the global set of bindings and listeners managed under DuraVIP™ are identical on each system.

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.arp_all_hosts)  | [Up](cluster.config.duravip) |  [Next](cluster.config.replication) |
| 27.3. Address Resolution Protocol (ARP) traffic  | [Table of Contents](index) |  Chapter 28. Data Replication |

