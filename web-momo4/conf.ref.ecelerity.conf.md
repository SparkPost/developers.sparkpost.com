| [Prev](module_config)  | Chapter 15. Configuration Overview |  [Next](cluster) |

## 15.6. `ecelerity.conf` File

The `ecelerity.conf` file is the master configuration file for the Momentum application server. It contains general configuration for Momentum, along with other configuration files included from within `ecelerity.conf`.

The default search path for the configuration file is:

```
/opt/msys/ecelerity/etc/conf/global:/opt/msys/ecelerity/etc/conf/{NODENAME}:»
  /opt/msys/ecelerity/etc/conf/default
```

Configuration options defined at the top level of the `ecelerity.conf` file are defined in a global scope. Many of these options can be defined in other scopes for a more fine-grained configuration. For example, the `max_outbound_connections` option can be set globally to apply to all outbound connections or within a domain scope to apply to a specific domain only. You can also set it in both scopes if you wish.

For a discussion of scopes and fallbacks, see [Section 15.3, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "15.3. Configuration Scopes and Fallback").

For a summary of all the non-module specific configuration options, refer to [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .

Modules and their configuration options are discussed in the [Chapter 71, *Modules Reference*](modules "Chapter 71. Modules Reference") .

The following sections provide an overview of the configuration commonly defined in the `ecelerity.conf` file.

<dl className="variablelist">

<dt>Control Listener</dt>

<dd>

Momentum's control listener is configured in the `ecelerity.conf` file. For details, see [Chapter 17, *Configuring Momentum's System Console*](control_listener "Chapter 17. Configuring Momentum's System Console") .

</dd>

<dt>Inbound Mail Service Listeners</dt>

<dd>

Momentum's inbound mail service for SMTP or ECStream is configured in the `ecelerity.conf` file; while inbound mail service for HTTP is configured in the `msg_gen.conf` file included from within `ecelerity.conf`. Follow each link for details:

*   SMTP - Simple Mail Transfer Protocol (see [Chapter 19, *Configuring Inbound Mail Service Using SMTP*](esmtp_listener "Chapter 19. Configuring Inbound Mail Service Using SMTP") .)

*   HTTP - Hypertext Transfer Protocol (see [Chapter 20, *Configuring Inbound Mail Service Using HTTP*](http_listener "Chapter 20. Configuring Inbound Mail Service Using HTTP") .)

*   ECStream - Custom, bare-bones, high performance injection mechanism (see [Chapter 18, *Configuring Inbound Mail Service Using ECStream*](ecstream_listener "Chapter 18. Configuring Inbound Mail Service Using ECStream") .)

</dd>

<dt>Cluster Listener</dt>

<dd>

The ECCluster_Listener configures direct, point-to-point communication between cluster nodes and is configured in the `ecelerity-cluster.conf` file that is included from within `ecelerity.conf`. For details, see [Section 16.5.1, “ECCluster_Listener Configuration”](cluster.listeners#eccluster_listener "16.5.1. ECCluster_Listener Configuration").

</dd>

<dt>Module Configuration</dt>

<dd>

Momentum's functionality is extended through its module API. Modules can be explicitly loaded and their configuration options set in the `ecelerity.conf` file. For details, see [Section 15.5, “Modules”](module_config "15.5. Modules").

</dd>

<dt>Outbound Mail Delivery Configuration</dt>

<dd>

Momentum provides a variety of options that allows you to control its outbound mail delivery. For details, see [Chapter 25, *Configuring Outbound Mail Delivery*](outbound_mail "Chapter 25. Configuring Outbound Mail Delivery") .

</dd>

</dl>

| [Prev](module_config)  | [Up](conf.overview) |  [Next](cluster) |
| 15.5. Modules  | [Table of Contents](index) |  Chapter 16. Cluster-specific Configuration |

