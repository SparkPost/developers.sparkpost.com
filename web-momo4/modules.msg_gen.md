| [Prev](modules.msgc)  | Chapter 71. Modules Reference |  [Next](modules.mxip) |

## 71.48. msg_gen – Message Generation

The msg_gen module handles message generation, which is triggered by injecting messages using HTTP. The module accepts the components of a transmission, including recipient list, template, and message content, and constructs a personalized message for each recipient. The generated message is then queued for delivery. Each transmission is handled independently, and the creation of all messages is managed as a trackable unit. The tracking and logging of messages post generation is handled by other modules.

Typically, the msg_gen module should not be altered, with the exception of the open tracking and click tracking options. By default, both options are enabled during installation. If you want to disable these features globally, change the configuration options in the msg_gen module.

### Note

To use the msg_gen module, you must be licensed for Message Generation support.

### 71.48.1. Configuration

The msg_gen module is configured in the `msg_gen.conf` file that is created during installation. See [Section 20.2, “`msg_gen.conf` File”](conf.ref.msg_gen.conf "20.2. msg_gen.conf File"). The following is an example configuration:

<a name="modules.msg_gen.configuration.example"></a>

**Example 71.72. msg_gen Configuration**

```
msg_gen {
  click_tracking_enabled = "true"
  open_tracking_enabled = "true"
  cluster_cfg = true
  quorum = 2
  gen_count = 3
  gen_transactional_threads = 3
  start_time_max_schedule_interval = "31536000"
  engagement_tracking_host = "example.com:81"
  # A node stanza for each Platform node
  # The node stanza only appears in a Platform cluster
  # configuration.
  node "node1.lan" {
    mta_id = 1
    votes = 1
  }
  node "node2.lan" {
    mta_id = 2
    votes = 1
  }
  node "node3.lan" {
    mta_id = 3
    votes = 1
  }
}
```

The following are the configuration options defined within this module:

<dl className="variablelist">

<dt>click_tracking_enabled</dt>

<dd>

Enable or disable click tracking for messages generated using HTTP. Default value is `true`. You can override this setting for a specific template or transmission by specifying the click_tracking field in the [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

</dd>

<dt>click_tracking_scheme</dt>

<dd>

Whether your click tracker uses HTTP or HTTPS. Default value is `http`.

</dd>

<dt>cluster_cfg</dt>

<dd>

Whether the installation is a stand-alone or cluster. Node clauses are not present for a stand-alone installation.

</dd>

<dt>engagement_tracking_host</dt>

<dd>

Identify the Platform node that is used for engagement tracking. This option is set during installation, and the server identified must have an active DNS name. The default port, also assigned during installation, is port `80` in a cluster installation and port `81` in a stand-alone installation.

</dd>

<dt><a name="modules.gen_count"></a>gen_count</dt>

<dd>

Define the thread count used for message generation. Default value is `2`. This option is valid in the msg_gen module and [node](modules.msg_gen#modules.msg_gen.node) scopes. When set to `0` within the node scope, it indicates that the particular node cannot generate messages but can participate in voting for quorum. If this option is changed at runtime, you must restart the ecelerity process.

</dd>

<dt><a name="modules.gen_transactional_threads"></a>gen_transactional_threads</dt>

<dd>

Configure the transactional thread pool used to handle small (single-recipient) non-scheduled transmissions submitted to this node. It may be zero or a positive number.

When set to a positive number, `n`, the `msg_gen` module creates a thread pool with `n` threads to handle transactional (single-recipient) transmissions (see [Transactional Message](glossary#gloss.transactional "Transactional Message")). The database will not be used while generating non-scheduled single-recipient messages, as the transmission API provides all required data about transmission, template, and recipients. No database access is needed to generate these messages, and so the processing burden is reduced. However, database access is still required to store and access tags and to generate scheduled transmissions.

If `gen_transactional_threads` is set to `0`, then the transactional thread pool is disabled and the thread pool specified by `gen_count` is used to interact with the database to generate transactional mailings.

The default value is `2`, and is only applicable when `gen_count` is set to a value greater than zero. This option is valid in the msg_gen module and [node](modules.msg_gen#modules.msg_gen.node) scopes.

### Note

If this option is changed at runtime, you must restart the ecelerity process.

</dd>

<dt><a name="modules.msg_gen.node"></a>node</dt>

<dd>

The msg_gen module contains a `node` stanza for each Platform node. The options within this scope should not typically be altered.

The node names within the node stanzas must match the names used in the peers stanza in [Section 71.47.1, “msgc_server Module”](modules.msgc#modules.msgc.msgc_server "71.47.1. msgc_server Module").

</dd>

<dt>open_tracking_enabled</dt>

<dd>

Enable or disable open tracking for messages generated using HTTP. Default value is `true`. You can override this setting for a specific template or transmission by specifying the open_tracking field in the [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

</dd>

<dt>open_tracking_scheme</dt>

<dd>

Whether your open tracker uses HTTP or HTTPS. Default value is `http`.

</dd>

<dt><a name="modules.scheduled_interval_delete"></a>scheduled_interval_delete</dt>

<dd>

The amount of time prior to a scheduled transmission during which you cannot delete the transmission. The default value is `600` seconds. If you attempt to delete a transmission within the specified timeframe, the request will be denied. For example, if `scheduled_interval_delete` is set to 420 seconds but the transmission is scheduled to run in 300 seconds, the delete request will be denied.

The minimum setting is 60 seconds. If the value is set to less than 60, the software will override that setting and use 60.

</dd>

<dt><a name="modules.start_time_max_schedule_interval"></a>start_time_max_schedule_interval</dt>

<dd>

Maximum allowed time in the future for which a transmission can be scheduled. Time is in seconds. The default value is `31536000` seconds (1 year). This value is added to the current time to determine the latest time that can be specified for a scheduled send.

</dd>

</dl>

### Note

The precedence for engagement tracking options, from highest to lowest is as follows:

*   transmission level

*   template level

*   msg_gen level

For example, if click_tracking is not specified at the transmission level, the value at the template level is used. If the template level is also not specified, the setting of the configuration option in the msg_gen module is used.

| [Prev](modules.msgc)  | [Up](modules) |  [Next](modules.mxip) |
| 71.47. msgc – Message Systems Group Communication  | [Table of Contents](index) |  71.49. mxip - IP Addresses In MX Records |

