| [Prev](conf.overview)  | Chapter 15. Configuration Overview |  [Next](ecelerity.conf.fallback) |

## 15.2. Configuration Options

Momentum provides a rich set of configuration options. Some options are simple configuration options, while other configuration options are more complex, such as defining data structures.

These configuration options can be defined in the following scopes: global, domain, host, binding, binding_group, security, pathway, pathway_group, listener, listen, peer, threadpool, debug_flags, and cluster, as well as in listener-specific scopes. The various modules that extend the functionality of Momentum are also valid scopes.

### Note

All configuration options are case insensitive. For example, you can define an SMTP listener as `ESMTP_Listener` or `esmtp_listener`.

The default configuration files provide default values such that there should be very few changes required to start sending mail through the Momentum server. However, there are a few parameters you will almost certainly need to change:

*   [relay_host](outbound_mail.relay_hosts "25.7. Outbound Email Relay")

*   [relay_domains](esmtp_listener.relay_domains "19.2. Inbound Email Relay or Gateway")

*   [Authentication](inbound_smtp "19.5. ESMTP_Listener Authentication")

Many other configuration options can be modified, as discussed throughout this manual.

For a summary of all the non-module specific configuration options, refer to [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .

Modules and their configuration options are discussed in the [Chapter 71, *Modules Reference*](modules "Chapter 71. Modules Reference") .

Modify the configuration options in the specific configuration file or use the **config** command for online configuration tuning. For details about this command, see [config](console_commands.config "config").

| [Prev](conf.overview)  | [Up](conf.overview) |  [Next](ecelerity.conf.fallback) |
| Chapter 15. Configuration Overview  | [Table of Contents](index) |  15.3. Configuration Scopes and Fallback |

