|     |     |     |
| --- | --- | --- |
| [Prev](modules.ac_auth)  | Chapter 14. Modules Reference |  [Next](modules.alerting.php) |

## 14.2. adaptive – Adaptive Delivery

<a class="indexterm" name="idp17046400"></a>

Adaptive Delivery (AD) provides the ability to dynamically tune parameters to help manage your outbound mail traffic in a way that is more in line with the best practices in use by receivers. AD also helps maintain and improve your sending reputation and makes better use of system resources. By using AD you can preempt delivery threats by taking appropriate action. For example, you can temporarily suspending delivery to a domain if it looks like mail has been blocked, thereby allowing time to diagnose the problem and implement corrective measures.

This module is the enabling component of AD. It provides a bridge between the core configuration system and the dynamic rule sets that are at the heart of AD. To use this module you must have AD enabled in your license.

Besides suspended deliveries, responses from receivers can trigger other actions such as throttling and reduced deliveries. These actions are triggered by the rules contained in the `adaptive_rules.lua` file. A single response may immediately trigger one action while a number of responses within a specified time frame may be required to trigger another. You can look at the internal comments in the `/opt/msys/ecelerity/libexec/scriptlets/msys/adaptive_rules.lua` file to determine which actions are taken under what circumstances.

In addition to reactive measures, the IP Warmup component of AD will factor in the age of the binding and adjust shaping parameters to automatically scale those parameters up according to the preferred schedule of the major receivers.

AD is intended to be largely self managed and auto-tuning, but still allows you to adjust a number of parameters to influence its decisions.

### Note

In a cluster configuration, suspension of a binding can result in excessive "#mmoves" between nodes. To avoid this possibility always assign a `duravip_preference` for any bindings used with the adaptive module. For more information about mmove and DuraVIP™ see [Section 7.5, “DuraVIP™: IP Fail over”](cluster.config.duravip "7.5. DuraVIP™: IP Fail over").

There is no upper limit to the number of bindings that can be in a binding group. When Adaptive Delivery is enabled, a large number of bindings in a binding group will affect performance since significant CPU time is spent checking for suspended bindings. For this reason, when using the adpative module, the recommended best practice is not to exceed 32 bindings per binding group.

The adaptive module makes heavy use of throttles. For this reason the `siv_throttle_cache_size` default was increased to `1000` as of version 3.0.24.

Whenever the adaptive module makes an adjustment to delivery parameters, it logs that fact to the paniclog with a prefix of `adaptive:`. For Momentum versions prior to 3.2, in order for logs to be created, you must set the `debug_level` in the adaptive module to `INFO` or higher. This module can also send an email to a configurable email address, and that address can be specified at the domain level, although it is typically set either globally or at the binding or binding group level.

### 14.2.1. Adaptive Delivery and Multiple Event Loops

As of version 3.6, you can configure Momentum to use multiple event loops. The aim of a multiple event loop configuration is to extend Momentum so that it scales with multi-core CPUs so that the overall performance of Momentum is not limited by the event scheduler thread. In order to configure multiple event loops you must have a "Supercharger" license. This license specifies a maximum number of event loops. For more information see [Section 2.4, “Configuring for Multiple Event Loops in Momentum 3.6”](conf.multi-core "2.4. Configuring for Multiple Event Loops in Momentum 3.6").

If you are using multiple event loops, you must put the spool directory and the Adaptive backing store database directory on separate disks. This is particularly important if Adaptive is enabled for a large number of binding-domain combinations. Additionally, when multiple event loops are configured, it is not valid to load the adaptive module with **config reload** . The ecelerity process must be restarted when adding Adaptive Delivery to your configuration.

### 14.2.2. Configuration

When installing this module, you must also install a number of other modules. Detailed instructions for setting up Adaptive Delivery are given in [Implementing Adaptive Delivery](https://support.messagesystems.com/docs/web-ad/ad.using).

Find below a sample configuration:

<a name="modules.adaptive.configuration.example"></a>

**Example 14.4. adaptive module example**

```
adaptive_enabled = true
adaptive_notification_interval = 5
adaptive_adjustment_interval = 10

adaptive  {
  suspend_sweep_interval = 5
  operational_log_level = "debug"
  jlog_file = "jlog:///var/log/ecelerity/adaptive.rt=>ad_stats"
  enable_jlog = true
}

alerting {}

scriptlet "scriptlet" {
  # Add the Lua adaptive script
  script "adaptive" {
    source = "msys.adaptive"
  }
  ...
}

inbound_audit {
  monitors = ("300,6")
}
```

### Note

The adaptive module requires that the following modules be loaded: [Section 14.60, “scriptlet – Module”](modules.scriptlet "14.60. scriptlet – Module"), [Section 14.3, “alerting – alerting”](modules.alerting.php "14.3. alerting – alerting") and the [Section 14.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit.php "14.41. inbound_audit – Inbound traffic analytics").

Prior to version 3.3 you must initialize the data store in the following way:

`shell> /opt/msys/ecelerity/bin/ec_admigrate`

If you are upgrading to Momentum 3.3 from an earlier version of Momentum, the command **/opt/msys/ecelerity/bin/ec_admigrate** migrates the existing SQLite data store to a Riak data store. See [ec_admigrate](executable.ec_admigrate "ec_admigrate") for more details.

If you are performing a fresh installation of Momentum 3.3 or higher you can ignore this issue.

### 14.2.3. Options Valid in the adaptive Scope

Configuration parameters valid in the adaptive module scope are as follows:

### Note

Additional options valid in the adaptive module scope were added in Momentum version 3.2\. These options are documented in [Section 14.2.5, “Changes in Version 3.2”](modules.adaptive#modules.adaptive.options.3.2 "14.2.5. Changes in Version 3.2"). Likewise with Momentum version 3.3\. These options are documented in [Section 14.2.6, “Changes in Version 3.3”](modules.adaptive.php#modules.adaptive.options.3.3 "14.2.6. Changes in Version 3.3").

A complete list of all options valid in the adaptive scope is provided at [adaptive module options](https://support.messagesystems.com/docs/web-ad/ad.options#adaptive-module-options-table).

<dl className="variablelist">

<dt><a name="modules.adaptive.adaptive_cache_size"></a>adaptive_cache_size</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.22. Prior to version 3.3.1, the default value for this option was `10000`.

The adaptive cache size. The default for this option is `1048576`. This value specifies the number of entries *not* the size of the cache in bytes. If you reduce the cache size you will have to restart ecelerity for the change to take effect.

Depending on the number of bindings in your configuration and the number of domains being delivered to, the default value for this option may be too small. For a detailed discussion of this topic see [Using the System Console](https://support.messagesystems.com/docs/web-ad/ad.troubleshooting.console).

</dd>

<dt><a name="modules.adaptive.adaptive_cache_ttl"></a>adaptive_cache_ttl</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.22. Prior to Momentum version 3.4, the default for this option was `7200`.

The time to live for the adaptive cache. As of Momentum version 3.4, the default for this option is `43200`.

</dd>

<dt><a name="modules.adaptive.adaptive_manage_options"></a>adaptive_manage_options</dt>

<dd>

**Configuration Change. ** This feature is available as of Momentum version 3.4.

This feature is required in case an unmanaged option is used by a new AD rule action. Options that are not managed by default are:

*   idle_timeout

*   ehlo_timeout

*   mailfrom_timeout

*   rcptto_timeout

*   body_timeout

*   rset_timeout

*   max_recipients_per_batch

*   max_resident_active_queue

Managed options are shown under `adaptive_unmanage_options`.

Managing an option which is not managed by default will not improve performance, it will degrade performance. It is harmless to manage options that are managed by default. Managed options are shown in [adaptive_unmanage_options](modules.adaptive#modules.adaptive.adaptive_unmanage_options) .

</dd>

<dt><a name="modules.adaptive.adaptive_unmanage_options"></a>adaptive_unmanage_options</dt>

<dd>

**Configuration Change. ** This feature is available as of Momentum version 3.4.

To reduce overhead, you can unmanage options that are managed by default. The options managed by default are:

*   max_outbound_connections

*   max_deliveries_per_connection

*   retry_interval

*   max_retry_interval

*   max_retries

*   outbound_throttle_messages

Unmanage an option in the following way: `adaptive_unmanage_options = ("outbound_throttle_messages")`. If you are unmanaging a number of options, use spaces between options. Only unmanage options that are unused. It is harmless to unmanage options that are unmanaged by default.

</dd>

<dt><a name="modules.adaptive.backing_store_connect_timeout"></a>backing_store_connect_timeout</dt>

<dd>

**Configuration Change. ** This feature is available as of Momentum version 3.5.1\. In version 3.6 this option is replaced by the `connect_timeout` option in the [adaptive_backstore_riak](conf.ref.adaptive_backstore_riak "adaptive_backstore_riak") scope.

The amount of time in seconds that the adaptive module will wait for a connection to the backing store server. This is the connection phase only and defaults to `5` seconds.

</dd>

<dt><a name="modules.adaptive.backing_store_timeout"></a>backing_store_timeout</dt>

<dd>

**Configuration Change. ** This feature is available as of Momentum version 3.5.1\. In version 3.6 this option is replaced by the `timeout` option in the [adaptive_backstore_riak](conf.ref.adaptive_backstore_riak "adaptive_backstore_riak") scope.

The amount of time in seconds that the adaptive module will wait for a response from the adaptive backing store. The default setting is `5` seconds.

</dd>

<dt><a name="modules.adaptive.bounce_sweep_interval"></a>bounce_sweep_interval</dt>

<dd>

**Configuration Change. ** This feature is available as of Momentum version 3.2.

How often to perform a sweep that checks the per binding/domain bounce rate and FBL rate and determine if there should be suspensions. The default is `3600` seconds. Set to `0` to disable.

### Note

The notation `binding::domain` means the domain within the specified binding scope. Note that sweep rules can also be applied to a global scope or to a domain scope within the global scope. Nevertheless, these scopes are still `binding::domain` scopes—where there is no explicit binding, the `default` binding is understood.

A value of `0` will not prevent suspensions that are in response to specific transient or permanent failure errors received from the receiver.

</dd>

<dt><a name="modules.adaptive.datasource_name"></a>datasource_name</dt>

<dd>

**Configuration Change. ** This option is no longer valid as of version 3.0.17.

Configures the name of the datasource to be used for persisting the metrics and state used by the adaptive delivery module. The default value is `adaptivedb`.

</dd>

<dt><a name="modules.adaptive.data_store"></a>data_store</dt>

<dd>

Prior to version 3.3, this option identifies the path to the backend data store, a SQLite version 3 database. The default value is `/var/log/ecelerity/adaptive.db`. As of version 3.3, this option identifies the IP/Port of the Riak servers. It is an array with the default value of `("http://127.0.0.1:8098")`. For more information about this change see [Section 14.2.7, “SQLite to Riak”](modules.adaptive#modules.adaptive.options.3.3.riak "14.2.7. SQLite to Riak"). If you are using LevelDB as your backing store, this option is not applicable.

Details for configuring this option in a cluster configuration are given in [Section 4.4.6, “Riak and the adaptive Module”](operations.riak#operations.riak.cluster.confirm.adaptive "4.4.6. Riak and the adaptive Module").

</dd>

<dt><a name="modules.adaptive.data_store_sync_interval"></a>data_store_sync_interval</dt>

<dd>

How often to synchronize the tables stored in memory with the database backing store. The default value is `900` seconds.

As of version 3.3.1, the default value for this option is `3600`.

</dd>

<dt><a name="modules.adaptive.suspend_sweep_interval"></a>suspend_sweep_interval</dt>

<dd>

How often to perform a sweep that checks for expired suspensions and re-enable the affected binding::domain. The default is `60` seconds. Set to `0` to disable.

</dd>

</dl>

### 14.2.4. Options That Affect Specific Domains

The following parameters are valid in the global, binding_group, binding and domain scopes. As usual, the most specific value is used. The following list shows Adaptive options that correspond to core configuration options. The core configuration options can be found in [Section 9.1, “Options Summary”](options-summary "9.1. Options Summary").

The options that set upper and lower bounds on the effective values of the corresponding core configuration options are as follows:

*   adaptive_body_timeout

*   adaptive_ehlo_timeout

*   adaptive_idle_timeout

*   adaptive_mailfrom_timeout

*   adaptive_max_deliveries_per_connection

*   adaptive_max_outbound_connections

*   adaptive_max_recipients_per_batch

*   adaptive_max_recipients_per_connection

*   adaptive_max_resident_active_queue

*   adaptive_max_retries

*   adaptive_max_retry_interval (available as of version 3.0.17)

*   adaptive_outbound_throttle_messages

*   adaptive_rcptto_timeout

*   adaptive_retry_interval

*   adaptive_rset_timeout

The AD rules govern the behavior of the following options and will dynamically tune them for the receivers specified. (For more information see [Adaptive Delivery User Guide](https://support.messagesystems.com/docs/web-ad/index).)

*   `adaptive_max_outbound_connections`

*   `adaptive_max_deliveries_per_connection`

*   `adaptive_outbound_throttle_messages`

*   `adaptive_retry_interval`

In the event that you want to cap the range, you may use these settings as an override:

```
domain "example.com" {
  adaptive_max_deliveries_per_connection = ( 20 80 )
}
```

The preceding example sets the lower boundary to 20 and the upper boundary to 80, meaning that if the AD rules think that the value should be lower, it will be clipped to 20, or if the rules decide that the value should be higher, it will be clipped to 80.

The following options are also valid in the global, binding_group, binding and domain scopes and configure how AD is implemented.

<dl className="variablelist">

<dt><a name="modules.adaptive.adaptive_adjustment_interval"></a>adaptive_adjustment_interval</dt>

<dd>

Throttles adjustments so that they happen no more than once in this many seconds for a given binding::domain.

This option acts as a buffer to avoid "flapping" between values. The default value is `60` seconds.

</dd>

<dt><a name="modules.adaptive.adaptive_alert_email_destination"></a>adaptive_alert_email_destination</dt>

<dd>

This is the address to which notification emails are sent. The value is any valid RFC2821 email address. The email is generated internally and subject to the usual binding assignment logic and signing rules.

The default for this option is unset, meaning that no email will be generated.

```
binding "customer-1" {
  adaptive_alert_email_destination = "postmaster@example.com"
}
```

As of version 3.0.17, you can define any number of destination addresses by separating addresses using spaces or commas.

The throttle, blackhole and suspend actions will generate an email to the address associated with this option. As of version 3.6, you can configure which events generate an email message. See [adaptive_notification_events](modules.adaptive#modules.adaptive.adaptive_notification_events) .

</dd>

<dt><a name="modules.adaptive.adaptive_alert_email_sender"></a>adaptive_alert_email_sender</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.17.

The address for the alert email sender. This option is valid in the domain, global, binding and binding_group scopes. There is no default value for this option.

</dd>

<dt><a name="modules.adaptive.adaptive_attempt_threshold"></a>adaptive_attempt_threshold</dt>

<dd>

**Configuration Change. ** As of version 3.2, the default value for this option is `2000`. Previously, the default was `100`.

This option specifies the minimum number of delivery attempts that must have been made before checking the `adaptive_rejection_rate_suspension_percentage` option.

`adaptive_attempt_threshold` also specifies the minimum number of delivery attempts over a period during which bounce statistics are collected—the number that must be met before a bounce sweep rule can fire. The period is 1 hour and is hard-coded inside `adaptive.lua`. This option plays a role in determining the `low_action` in the adaptive_sweep_rule scope. For more information see [Section 14.2.5.2, “adaptive_sweep_rule Scope”](modules.adaptive#modules.adaptive.adaptive_sweep_rule "14.2.5.2. adaptive_sweep_rule Scope").

This option is valid in the binding, binding_group, domain, and global scopes. When specified in the global scope it pertains to individual domains, binding_groups or bindings, not the aggregate.

</dd>

<dt><a name="modules.adaptive.adaptive_default_suspension"></a>adaptive_default_suspension</dt>

<dd>

When AD decides that a domain should be suspended, it will be marked as suspended for the amount of time specified by this option.

This option is a string that specifies an integer number value and a unit. The unit can be one of `seconds`, `minutes`, `hours` or `days`. The default value is `4 hours`.

</dd>

<dt><a name="modules.adaptive.adaptive_default_suspension_enabled"></a>adaptive_default_suspension_enabled</dt>

<dd>

**Configuration Change. ** This option is available as of version 3.6.11.

This option will enable and disable [adaptive_rejection_rate_suspension_percentage](modules.adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage) . Its default setting is `false`.

</dd>

<dt>adaptive_enabled</dt>

<dd>

Affects whether AD is enabled for the scope. To enable globally, set this at the global scope. To enable for a specific scope, explicitly set it in that scope.

This option is a boolean; when set to `true`, AD is enabled. The default is `false`.

You must set this option to `true` if you wish to use the adaptive module.

</dd>

<dt><a name="modules.adaptive.adaptive_notification_events"></a>adaptive_notification_events</dt>

<dd>

**Configuration Change. ** This option is available as of version 3.6.1 and version 3.5.6.

This option configures the events that will trigger an email notification to the address defined by [adaptive_alert_email_destination](modules.adaptive#modules.adaptive.adaptive_alert_email_destination) . The default value is shown below:

`adaptive_notification_events = ( throttle suspension blackhole )`

Separate events using a space.

</dd>

<dt><a name="modules.adaptive.adaptive_notification_interval"></a>adaptive_notification_interval</dt>

<dd>

This option throttles alert notification emails so that no more than one alert email will be generated about a given event in this many seconds. The default value is `3600`.

</dd>

<dt><a name="modules.adaptive.adaptive_positive_adjustment_interval"></a>adaptive_positive_adjustment_interval</dt>

<dd>

This option throttles positive adjustments so that they happen no more than once in this many seconds. Positive adjustments are speculatively applied when deliverability appears to be working well allowing the system to increase the values over time.

This option acts as a brake to prevent rapidly advancing to the high end of the permitted range of values. The default value is `3600` seconds.

</dd>

<dt><a name="modules.adaptive.adaptive_rejection_rate_suspension_percentage"></a>adaptive_rejection_rate_suspension_percentage</dt>

<dd>

**Configuration Change. ** As of version 3.6.11, this option is enabled and disabled by [adaptive_default_suspension_enabled](modules.adaptive#modules.adaptive.adaptive_default_suspension_enabled) .

AD monitors the rate at which messages are rejected by the destination MTA (the delivery failure rate). If this rate exceeds the configuration value for `adaptive_rejection_rate_suspension_percentage`, AD will enact a suspension on the affected binding::domain.

The default value is `20`, which means that the domain will be suspended if the rejection rate exceeds 20% of the number of attempts.

If a suspension is enacted, it applies to the domain on the affected binding and not globally. The suspension will last for the amount of time configured by the [adaptive_default_suspension](modules.adaptive#modules.adaptive.adaptive_default_suspension) option.

</dd>

<dt><a name="modules.adaptive.adaptive_retry_fuzz"></a>adaptive_retry_fuzz</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

This option improves the performance of ecelerity when a domain has reached its consecutive failure threshold and in other instances where all messages associated with a binding domain must be requeued. This option uses the adaptive improvements to "fuzz" messages over an interval rather than attempting to re-process them immediately. See also [delayed_binding_domain_fuzz](conf.ref.delayed_binding_domain_fuzz "delayed_binding_domain_fuzz"). The default value for this option is `4096`.

</dd>

</dl>

As of version 3.0.17, a summary of actions taken by the adaptive module is created at `/var/log/ecelerity/adaptive.summary` and sent via email to the recipient defined by the option `adaptive_alert_email_destination`. The **/opt/msys/ecelerity/bin/ad_summary** script creates this summary and is added to `/etc/cron.d/msys-ecelerity` (`/var/spool/cron/crontabs/root` on Solaris) when the adaptive module is installed. It is run nightly as a cron job. This summary is created regardless of whether alerts have been generated or not. The default sender is `ecuser@localhost`. The log file, `/var/log/ecelerity/adaptive.summary`, should be added to `ec_rotate.conf`. For instructions on doing this see [ec_rotate](executable.ec_rotate "ec_rotate"). For a sample summary email see [Section 14.2.10, “Sample Summary Email”](modules.adaptive.php#modules.adaptive.sample.email "14.2.10. Sample Summary Email").

For more information about the `/opt/msys/ecelerity/bin/ad_summary` script see [ad_summary](executable.ad_summary "ad_summary").

### Note

Like the options listed above, `adaptive_scope` is also valid in the binding, binding_group, domain and global scopes. However, this option requires special attention and is documented separately.

`adaptive_scope` was introduced in Momentum version 3.3 and determines whether a scope is local to a node or cluster-wide. For more information see [adaptive_scope](conf.ref.adaptive_scope "adaptive_scope") and especially [Section 14.2.6.2, “The `adaptive_scope` Option”](modules.adaptive.php#modules.adaptive.options.changes.3.3.adaptive_scope "14.2.6.2. The adaptive_scope Option").

### 14.2.5. Changes in Version 3.2

The adaptive module was significantly revised in version 3.2\. The changes include:

*   The introduction of logging options

*   The introduction of the `adaptive_sweep_rule` scope

*   The introduction of the `adaptive_fbl_volume_threshold` option

*   Custom rules for the Adaptive Module

Custom rules are in discussed in the [Adaptive Delivery User Guide](https://support.messagesystems.com/docs/web-ad/).

The following sections deal with logging changes, the `adaptive_sweep_rule` scope and the `adaptive_fbl_volume_threshold` option.

**14.2.5.1. Logging Options Added in Version 3.2**

Logging options were added to the adaptive module scope in order to track adaptive actions. This section describes those options.

<dl className="variablelist">

<dt><a name="modules.adaptive.fbl_stats_monitor"></a>fbl_stats_monitor</dt>

<dd>

Create a monitoring window of "window-size, seconds long", and maintain the history for the specified number of windows. The default value for this option is `14400,6`. This option is used in conjunction with the `adaptive_fbl_volume_threshold` and `adaptive_attempt_threshold` options. These options are discussed in [Section 14.2.5.2.4, “adaptive_fbl_volume_threshold and adaptive_attempt_threshold”](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold "14.2.5.2.4. adaptive_fbl_volume_threshold and adaptive_attempt_threshold").

</dd>

<dt><a name="modules.adaptive.fbl_stats_series"></a>fbl_stats_series</dt>

<dd>

This option specifies the name of a persisted named series to be used to hold the FBL statistics for all binding::domain combinations. The statistics stored in this series are a collection of key/value pairs. The format uses the following convention: *`binding_name:domain_name`*:fbl:*`fbl_category`* – the total count of FBL feedbacks with this FBL. FBL category names vary according to ISP category.

The default value for this option is `FBL_stats`.

</dd>

<dt><a name="modules.adaptive.fbl_total_series"></a>fbl_total_series</dt>

<dd>

This option specifies the name of a persisted named series to be used to hold the total delivery count for all binding::domain combinations. This series shares the size monitor window/interval with `fbl_stats_series`. The statistics stored in this series are a collection of key/value pairs. The format uses the following convention: *`binding_name:domain_name:total_count`*.

The default value for this option is `FBL_total`.

</dd>

<dt><a name="modules.adaptive.log_base"></a>log_base</dt>

<dd>

Define the location of the adaptive logs. The default value for this option is `/var/log/ecelerity/adaptive`.

</dd>

<dt><a name="modules.adaptive.operational_log_level"></a>operational_log_level</dt>

<dd>

Define the log level of the AD module. The different log levels are defined in [debug_flags](conf.ref.debug_flags "debug_flags"). The default value for this option is `NOTICE`. The setting of this option does not affect paniclog events.

</dd>

<dt><a name="modules.adaptive.split_logs_by_binding"></a>split_logs_by_binding</dt>

<dd>

If split_logs_by_binding is `false`, then the log file used will be named `/var/log/ecelerity/adaptive/adaptive.log`. If this option is `true` then the log file(s) used will be named /var/log/ecelerity/adaptive/*`bindingname`*.log where `bindingname` is replaced with the name of the binding with which the operational event is associated.

The default value for this option is `false`.

</dd>

<dt><a name="modules.adaptive.enable_logging"></a>enable_logging</dt>

<dd>

If this option is set to `false`, the operational details will not be logged at all. The default value for this option is `true`.

</dd>

</dl>

Log retention is enabled by default and uses the existing ec_rotate log rotation process. ec_rotate consults `ec_rotate.conf` to determine what and where to look for logs to rotate. For more information see [ec_rotate](executable.ec_rotate "ec_rotate").

**Adaptive Log Format**

Find below a sample adaptive log entry:

12345679@1@G@default@hotmail.com@NOTICE@ retry_interval *`from`* -> *`to`*

The fields are separated by the ‘`@`’ character. Field values are as follows:

1.  Unix timestamp

2.  The version of the log file format, a decimal number currently set to `1`.

3.  A record type identifier, a single ASCII character currently set to ‘`G`’ for "generic". Additional record types may be introduced in future releases.

‘`G`’ record types have the following additional fields:

1.  Binding name (may be empty)

2.  Domain name (may be empty)

3.  The log level name (see [debug_flags](conf.ref.debug_flags "debug_flags") for a list of valid names)

4.  A free-form string. This string may include additional ‘`@`’ signs. Typically it will show how an option has changed.

**14.2.5.2. adaptive_sweep_rule Scope**

This scope was introduced in version 3.2 in order to enable AD according to bounce and FBL statistics. It is valid in the global, domain, binding and binding_group scopes.

For each `bounce_sweep_interval` (defined in the adaptive module), the system iterates through all the binding and domain pairs that are local to the current node and examines the bounce statistics and the feed back loop (FBL) statistics collected through the fbl module (see [Section 14.34, “fbl – Feedback Loop Module”](modules.fbl "14.34. fbl – Feedback Loop Module")).

A sample configuration showing `adaptive_sweep_rule` defined in the global scope and two different domain scopes follows:

<a name="modules.adaptive.adaptive_sweep_rule.examples"></a>

**Example 14.5. adaptive_sweep_rule examples**

```
adaptive_sweep_rule "fbl” {
  codes = ("fbl:abuse”)
  low_threshold = 0.2
  low_action = ("throttle” "down”)
  high_threshold = 0.5
  high_action = ("suspend” "4 hours”)
}
domain "yahoo.com” {
  adaptive_sweep_rule "y” {
    codes = ("bc:10” "bc:20”)
  }
}
domain "hotmail.com” {
  adaptive_sweep_rule "x” {
    codes = ("bc:10”)
    low_threshold = 2
    high_threshold = 7
  }
}
```

### Note

You cannot create an adaptive_sweep_rule scope before you have added the adaptive module. If you are using the web UI, you cannot supply a name for the `adaptive_sweep_rule` scope before loading the adaptive module.

To use sweep rules you must load the fbl and the bounce_classifier_override modules.

The configuration options valid in the `adaptive_sweep_rule` scope, are defined in the following list.

<dl className="variablelist">

<dt><a name="modules.adaptive.codes"></a>codes</dt>

<dd>

This option specifies a list of bounce codes or FBL categories. The summation of their rates is used to evaluate the rule. Although the syntax does not prevent using both bounce codes and FBL categories within a rule, it is bad practice to mix them since they occur in very different time scales.

Valid values for bounce codes start with the prefix `bc:` followed by a legitimate bounce code number. For a list of valid bounce codes see [Section E.2, “Bounce Classification Codes”](bounce_logger.classification.codes "E.2. Bounce Classification Codes"). You can also use custom bounce codes defined by the [Section 14.12, “bounce_classifier_override – The Bounce Classifier Override Module”](modules.bounce_classifier_override.php "14.12. bounce_classifier_override – The Bounce Classifier Override Module").

Valid values for fbl codes start with the prefix `fbl:` followed by a legitimate fbl category such as `abuse` or `unsubscribe`. Legitimate categories are determined by the requirements of the specific ISP.

This option is required. There is no default value for this option except as defined in [Section 14.2.5.2.2, “Default Adaptive Sweep Rules”](modules.adaptive#modules.adaptive.default_adaptive_sweep_rule "14.2.5.2.2. Default Adaptive Sweep Rules").

</dd>

<dt><a name="modules.adaptive.low_threshold"></a>low_threshold</dt>

<dd>

This option specifies the low threshold value for the sum of the rates of the bounce codes or FBL categories specified in the `codes` option within a binding::domain.

The default value for this option is `5` meaning `5%`.

</dd>

<dt><a name="modules.adaptive.low_action"></a>low_action</dt>

<dd>

This option specifies the action when the high threshold is not met but the low threshold is met and the number of delivery attempts exceeds the `adaptive_attempt_threshold` parameter. (See [Section 14.2.5.2.4, “adaptive_fbl_volume_threshold and adaptive_attempt_threshold”](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold "14.2.5.2.4. adaptive_fbl_volume_threshold and adaptive_attempt_threshold").)

The default value for this option is `("throttle" "down")`. For a complete list of valid values see [Rule Actions](https://support.messagesystems.com/docs/web-ad/ad.adaptive.rules.actions). The throttle, blackhole and suspend actions will generate an email to the address associated with the `adaptive_alert_email_destination` option.

</dd>

<dt><a name="modules.adaptive.high_threshold"></a>high_threshold</dt>

<dd>

This option specifies the high threshold value for the sum of the rates of the bounce codes or FBL categories specified by the `codes` option.

The default value for this option is `10` meaning `10%`.

</dd>

<dt><a name="modules.adaptive.high_action"></a>high_action</dt>

<dd>

This option specifies the action when the high threshold is met and the number of delivery attempts exceeds the `adaptive_attempt_threshold`. (See [Section 14.2.5.2.4, “adaptive_fbl_volume_threshold and adaptive_attempt_threshold”](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold "14.2.5.2.4. adaptive_fbl_volume_threshold and adaptive_attempt_threshold").)

The default value for this option is `("suspend" "4 hours")`. For a complete list of valid values see [Rule Actions](https://support.messagesystems.com/docs/web-ad/ad.adaptive.rules.actions). The throttle, blackhole and suspend actions will generate an email to the address associated with the `adaptive_alert_email_destination` option.

### Warning

The length of time for a suspension must be specified in hours and must be a power of `2`. For example, 1, 2, 4 hours and so on are valid values for a suspension.

</dd>

</dl>

**14.2.5.2.1. How Sweep Rules are Determined**

`adaptive_sweep_rule` stanzas are applied according to the following rules:

*   All adaptive_sweep_rule stanzas must define the `codes` option. If it is not defined, the rule is ignored.

*   adaptive_sweep_rule stanzas must have unique names. If two adaptive_sweep_rule stanzas with the same name are applied to a binding::domain, the most specific one will win, even if that stanza is disabled.

*   When multiple adaptive sweep rules are defined in different scopes, the applicable adaptive sweep rules for a binding::domain pair are determined by the usual scope fallback rules with one exception: if the effective value of `adaptive_sweep_rule_enabled` is `0` in a scope along the fallback path, the rules defined in that scope will not apply. For more information about fallback see [Section 2.6, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "2.6. Configuration Scopes and Fallback").

*   If the value of the `adaptive_sweep_rule_enabled` option is `0` within the scope of the adaptive_sweep_rule stanza, then that stanza will not apply.

*   For a binding::domain, a default bounce rule is created if the effective value of `adaptive_sweep_rule_enabled` is `1` and no adaptive_sweep_rule stanza contains a `codes` option defining at least one bounce code.

*   For a binding::domain, a default fbl rule is created if the effective value of `adaptive_sweep_rule_enabled` is `1` and no adaptive_sweep_rule stanza contains a `codes` option defining at least one fbl category.

*   Rules whose codes include both a bounce code and an fbl category are ignored.

*   The execution order of rules applicable to a binding::domain is undefined.

*   All rules whose criteria are met will have their respective actions executed. However, when multiple actions are executed, the end result may not always be predictable. For example, if two rules fire and both of them want to suspend a binding or domain for different durations, it is undefined which duration will prevail. The reason being that you cannot suspend a binding::domain that is already suspended—once a binding::domain is suspended you can neither increase nor decrease the suspension. The length of the suspension will depend upon which rule executes first.

**14.2.5.2.2. Default Adaptive Sweep Rules**

When `adaptive_sweep_rule_enabled` is true, there should be an adaptive_sweep_rule stanza with the `codes` option set to a minimum of one FBL category and also a bounce adaptive_sweep_rule stanza with the `codes` option set to a minimum of one bounce category.

If these stanzas are absent, the following defaults obtain:

```
#Default rule for bounces:
adaptive_sweep_rule "default_bounce_rule" {
  codes = ("bc:10” "bc:24”)
  low_threshold = 3
  low_action = ("throttle” "down")
  high_threshold = 10
  high_action = ("suspend” "4 hours”)
}
#Default rule for FBL categories:
adaptive_sweep_rule "default_fbl_rule" {
  codes = ("fbl:abuse”)
  low_threshold = 0.2
  low_action = (“throttle” “down”)
  high_threshold = 0.5
  high_action = (“suspend” “4 hours”)
}
```
**14.2.5.2.3. The adaptive_sweep_rule_enabled Option**

This option is used to disable `adaptive_sweep_rule` within a scope without having to delete the adaptive_sweep_rule stanza from the configuration file. By default, this option is set to `1`. When explicitly set to `0` within a scope, bindings or domains in that scope will not be affected by the `adaptive_sweep_rule` applicable in that scope.

In the following example `adaptive_sweep_rule` is enabled for `binding1/domain1` but disabled for any other domains in the `binding "binding1"` scope.

<a name="modules.adaptive.adaptive_sweep_rule_enabled.example"></a>

**Example 14.6. adaptive_sweep_rule_enabled example**

```
binding "binding1" {
  adaptive_sweep_rule_enabled = 0
  adaptive_sweep_rule "rule1" {
    codes = ("bc:24”)
  }
  domain "domain1" {
    adaptive_sweep_rule_enabled = 1
    adaptive_sweep_rule "rule2" {
      codes = ("bc:10")
    }
  }
}
```

`adaptive_sweep_rule_enabled` is valid in the global, domain, binding and binding_group scopes.

**14.2.5.2.4. adaptive_fbl_volume_threshold and adaptive_attempt_threshold**

The `adaptive_fbl_volume_threshold` was introduced in version 3.2\. and is valid in the global, domain, binding and binding_group scopes. The behavior of `adaptive_attempt_threshold` changes significantly in version 3.2.

**adaptive_fbl_volume_threshold. ** This option is the minimum total delivered mail count over a period during which FBL stats are collected for a given binding::domain pair. This minimum must be met before a sweep rule for FBL will fire. The period is specified by the adaptive option `fbl_stats_monitor` within the adaptive stanza. The default period is 24 hours and the default value for `adaptive_fbl_volume_threshold` is `20000`.

**adaptive_attempt_threshold. ** This option is used to define the minimum number of delivery attempts over a period during which bounce statistics are collected and this minimum must be met before a bounce sweep rule can fire. The period is 1 hour and is hard-coded inside adaptive.lua. Also, in version 3.2, the default value of `Adaptive_Attempt_Threshold` was changed to `2000`. This option plays a role in determining the `low_action` in the adaptive_sweep_rule scope. For a description of adaptive_sweep_rule, see [Section 14.2.5.2, “adaptive_sweep_rule Scope”](modules.adaptive#modules.adaptive.adaptive_sweep_rule "14.2.5.2. adaptive_sweep_rule Scope"). See also [adaptive_attempt_threshold](modules.adaptive.php#modules.adaptive.adaptive_attempt_threshold) .

### 14.2.6. Changes in Version 3.3

As of version 3.3.1, the adaptive module is cluster-aware. This requires replication of adaptive control parameters, event data and bounce stats across the cluster. Being cluster-aware also entails additional configuration options and the replacement of the SQLite data store with a Riak data store.

During installation of Momentum 3.3, the installer automatically detects the existence of a cluster and operates in cluster mode when a cluster is detected.

This section discusses the new options introduced in version 3.3, the implications of changing from SQLite to Riak and the steps that may need to be taken after version 3.3 is installed.

### Note

As of Momentum version 3.3, AD reports are available through the web UI. For a description of these reports see [Section 3.6.10, “Adaptive Reports”](web3.reports#web3.reports.adaptive "3.6.10. Adaptive Reports"). Note that the web UI reports differ from the summary reports described in [Section 14.2.10, “Sample Summary Email”](modules.adaptive.php#modules.adaptive.sample.email "14.2.10. Sample Summary Email"). The summary report is based on the log files while the web UI reports are based on data stored in the database.

In order to save CPU and network bandwidth it is recommended that cluster-wide AD only be enabled for use cases that employ DuraVIP™.

**14.2.6.1. Options Valid in the adaptive Module Scope (3.3)**

A number of options valid in the adaptive module scope have been added in version 3.3\. Find below a list of those options:

<dl className="variablelist">

<dt><a name="modules.adaptive.outbound_throttle_messages_monitor"></a>outbound_throttle_messages_monitor</dt>

<dd>

This option specifies the "window" of the outbound throttle audit series.

The default value for this option is `(3,20)`, indicating twenty, three-second windows. This option implements cluster-wide throttle behavior for a binding::domain when its `adaptive_scope` is global.

</dd>

<dt><a name="modules.adaptive.outbound_throttle_messages_series"></a>outbound_throttle_messages_series</dt>

<dd>

The name of the outbound throttle messages series. The default for this option is `OBTM_Series`.

</dd>

<dt><a name="modules.adaptive.ad_response_rule_series_prefix"></a>ad_response_rule_series_prefix</dt>

<dd>

When evaluating the trigger of a response rule, the event counts are kept in a cluster-wide, named series. At start up, the adaptive module creates a number of named series by searching over all adaptive rules (both system and custom rules, if applicable). If a rule uses *`count/series`* as its trigger, a series with the name *`value_of_this_option`*_*`suffix`* is created. *`suffix`* is the interval size used by the series and is computed as *`period`*/*`interval`* + 1\. *`interval`* is the number of intervals used by the series.

The default value of this option is `ADRR_series`.

</dd>

<dt><a name="modules.adaptive.enable_bounce_stats"></a>enable_bounce_stats</dt>

<dd>

Whether or not to consolidate bounce statistics hourly. This operation can consume resources so turn this feature off if you are not using it.

The default value for this option is `true`.

</dd>

<dt><a name="modules.adaptive.enable_fbl_stats"></a>enable_fbl_stats</dt>

<dd>

Whether or not to consolidate FBL statistics hourly. This operation can consume resources so turn this feature off if you are not using it.

The default value for this option is `true`.

</dd>

<dt><a name="modules.adaptive.binding_domain_cache_size"></a>binding_domain_cache_size</dt>

<dd>

The number of entries in the binding::domain cache. The name of this cache is `adaptive_bd_cache`. Use the ec_console **cache stat**      command to inspect this cache.

The default value for this option is `999999`.

</dd>

<dt><a name="modules.adaptive.binding_domain_cache_max_ttl"></a>binding_domain_cache_max_ttl</dt>

<dd>

The TTL for the binding::domain cache. When a record expires, the associated AD parameters still stay in memory. When the same binding::domain is referenced again, a new record will be inserted and at the same time, the AD parameters are refreshed from the Riak data store.

The default value for this option is `86400` seconds.

</dd>

</dl>

The following options, introduced in version 3.3, facilitate Adaptive reports:

<dl className="variablelist">

<dt><a name="modules.adaptive.adaptive_stats_period"></a>adaptive_stats_period</dt>

<dd>

The size of the sliding window for the audit_series of the adaptive statistics. The default value for this option is `3600` seconds.

</dd>

<dt><a name="modules.adaptive.enable_jlog"></a>enable_jlog</dt>

<dd>

Whether or not to enable logging of changes in status, suspension and other configuration changes. The default value for this option is `true`.

### Note

This option must be set to `true` in order to view the adaptive reports in the web UI.

</dd>

<dt><a name="modules.adaptive.jlog_file"></a>jlog_file</dt>

<dd>

This option defines the location of the jlog adaptive files. The default value for this option is `jlog:///var/log/adaptive/adaptive.rt=>ad_stats`.

### Note

Changing the subscriber for this jlog will affect how adaptive reports appear in the web UI.

</dd>

</dl>

**14.2.6.2. The `adaptive_scope` Option**

The `adaptive_scope` option is also new in version 3.3\. This option controls the scope of AD making it local to the node or cluster-wide (i.e. global). It accepts three values: `local`, `global` and `auto`. When it is set to `auto`, the scope will be global if the binding is DuraVIP enabled and local for all other cases.

`adaptive_scope` is valid in the binding, binding_group, domain and global scopes.

### Note

When this option is set to `global` for a binding::domain, AD is cluster-wide for that binding::domain.

If `adaptive_scope` evaluates to "global" for a binding scope (binding is a scope in Momentum), the age set for that binding through the warmup action will be applied to that binding across the whole cluster. *Note*: If adaptive_scope evaluates to "global" for a binding::domain combination, it does not imply that `adaptive_scope` will also evaluate to the same value for that binding alone.

The following use cases are applicable to the `adaptive_scope` option:

*   A standalone MTA – All adaptive scope is local no matter what value the `adaptive_scope` option is set to.

*   In a cluster where more than one MTA is doing the sending and all traffic goes through a network router – In this case the outside world sees only one source IP. In this case, you will want to set `adaptive_scope` to `global` for the relevant bindings/domains.

*   When a binding is DuraVIP enabled, it may be relocated to another host. For this reason, set the scope to `global` or `auto` (which is effectively `global` for a DuraVIP binding).

*   In any other circumstances, the scope should be set to `local` to save CPU and network bandwidth. For example, where different IPs are used for different bindings (and the binding is not DuraVIP) `adaptive_scope` should be local.

**14.2.6.3. sweep_rule in Momentum 3.3**

The sweep_rule scope was introduced in Momentum 3.2 and is discussed in [Section 14.2.5.2, “adaptive_sweep_rule Scope”](modules.adaptive#modules.adaptive.adaptive_sweep_rule "14.2.5.2. adaptive_sweep_rule Scope"). Changes introduced in 3.3 affect this scope as follows:

*   For a binding::domain where adaptive_scope is `global`, the stats will be aggregated across all MTA nodes. Although stats are replicated across the cluster, rules are only evaluated for the binding::domain pair on the node where messages have been sent. This may cause a small latency for a recently transferred virtual IP which has activity in its previous host. However, there will only be if the transfer occurs while rules are being evaluated.

*   Any action triggered for a binding::domain, where `adaptive_scope` is `global`, will affect the same binding::domain across all MTA nodes.

### 14.2.7. SQLite to Riak

As of version 3.3, Riak is used as the data store for adaptive parameters. Riak is a distributed key-value data storage technology described in detail in [Section 4.4, “Riak”](operations.riak "4.4. Riak").

### Warning

The naming scheme for a Riak ID uses ‘`:`’ as a separator. For this reason you must not use colons in binding names.

If you are upgrading to Momentum 3.3 from an earlier version, you must convert the SQLite data store to a Riak data store. Do this using the `ec_admigrate` script. Using this script is described in [ec_admigrate](executable.ec_admigrate "ec_admigrate").

With the introduction of Riak the default value and the data type of the adaptive module `data_store` option changes. As of version 3.3, this option is an array with the default value of `("http://127.0.0.1:8098")`.

During the installation of a cluster, the installer installs Riak on the manager and on all nodes (if you agree to join the Riak cluster) giving you the benefit of a distributed installation. Additional redundancy *can* be gained by adding the public IP address of other riak nodes to the `data_store` option but this is entirely optional.

If more than one server url is specified by the `data_store` option, the first URL is preferred. In situations where the adaptive module cannot connect to the preferred server, it will iterate through the list to find a server that it can connect to. The last connected server will be reused until it no longer responds or until the next time the local parameters are being back up. (The preferred server will be reset to the first one and the interval between backups is specified by the adaptive module `Data_Store_Sync_Interval` option.)

### 14.2.8. Post-Installation (Version 3.3 Only)

Once Momentum 3.3 is installed, there are a number of actions you should take. If you are performing a new installation then you will need to set up the adaptive module options as described in [Implementing Adaptive Delivery](https://support.messagesystems.com/docs/web-ad/ad.using).

If you are migrating to Momentum 3.3 and already have the adaptive module installed, you must migrate your adaptive module. Two executable commands have been added in order to assist migrating to version 3.3\. To convert your adaptive parameters to Riak database format, use the [ec_admigrate](executable.ec_admigrate "ec_admigrate") command. You can also use [ec_adtool](executable.ec_adtool.php "ec_adtool") to adjust the scope in which adaptive parameters are visible. This tool is especially useful for "promoting" parameters, since prior to 3.3 all adaptive parameters are local only.

For either a new installation or an upgrade, you need to consider the following:

*   The new option `adaptive_scope` determines whether a rule applies to a specific node or globally. It defaults to `auto`. You need to determine what setting or settings are suitable to your circumstances. For more information about `adaptive_scope` see [Section 14.2.6.2, “The `adaptive_scope` Option”](modules.adaptive#modules.adaptive.options.changes.3.3.adaptive_scope "14.2.6.2. The adaptive_scope Option").

*   For increased reliability, you may wish to configure the adaptive module option `data_store` to reference more than one Riak instance. For more information see [Section 14.2.7, “SQLite to Riak”](modules.adaptive#modules.adaptive.options.3.3.riak "14.2.7. SQLite to Riak").

    If you are using multiple URLs in the `data_store` option, ensure that all Riak servers are indeed joined together. To do this see [Section 4.4.6, “Riak and the adaptive Module”](operations.riak#operations.riak.cluster.confirm.adaptive "4.4.6. Riak and the adaptive Module").

*   Be sure to synchronize the time across the nodes in your cluster.

*   Considerations related to custom rules:

    *   For consistency of rules across the cluster, store adaptive rules in the repository. For instructions on adding files to the repository see [Section 2.9, “Best Practices for Adding Configuration Files”](conf.adding.configuration.files "2.9. Best Practices for Adding Configuration Files").

    *   When a rule fires and `adaptive_scope` is `global`, the associated action will be applied across all nodes. For example, if `yahoo_binding/yahoo.com` is suspended for node A, the same binding::domain pair in all other nodes is also suspended.

    *   If the trigger threshold for a rule is determined by a count over a period of time, then *`count`* is aggregated across all nodes for the same binding::domain pair. However, there are limits to how counts are aggregated. For example, if the trigger is set to "5/1", then within the one second window the aggregation of counts across all nodes may not have been completed and the data used to compute the trigger threshold will effectively be from the local node only.

    *   When a gauge is in place to control the message throughput and adaptive is enabled, the restriction will be applied on the value aggregated across all nodes.

    *   The adaptive adjustment interval (`Adaptive_Positive_Adjustment_Interval`) affects the local node only.

### 14.2.9. adaptive Management Using System Console Commands

The following console commands are provided. Most commands accept --binding *`bindingname`* or --domain *`domainname`* arguments to adjust their scope. In most cases you may specify multiple binding or domain arguments.

**Configuration Change. ** The `binding` and `domain` options are available as of version 3.0.17.

<dl className="variablelist">

<dt>adaptive suspensions [ --binding *`bindingname`* --domain *`domainname`* ] | [ --all ]</dt>

<dd>

This command summarizes the suspensions that are currently in effect, whether they are enabled (you may administratively override the suspension) and displays how much time remains before the suspension will be lifted and service returned to normal. For examples of this command see [the section called “Enabling and Disabling Suspensions”](modules.adaptive#modules.adaptive.console.examples "Enabling and Disabling Suspensions").

You can examine all suspensions or just the suspensions for a specific binding/domain pairing. Using this console command with no options is equivalent to using it with the `--all` option.

</dd>

<dt>adaptive override [ --binding *`bindingname`* --domain *`domainname`*] | [ --all ]</dt>

<dd>

Revoke the suspension for all bindings or for the specified binding domain pair. Using this console command with no options is equivalent to using it with the `--all` option.

</dd>

<dt>adaptive override [--binding *`bindingname`* --domain *`domainname`*] ttl *`seconds`*</dt>

<dd>

Specify a new value for the time to live for the specified binding domain pair or for all domains.

For example, to change the TTL for `yahoo.com` in the `default` binding, you would issue the command: **`adaptive override --binding default --domain yahoo.com ttl 10`**                                                      .

</dd>

<dt>adaptive override enable --binding *`bindingname`* --domain *`domainname`*</dt>

<dd>

Reenable suspension for the specified binding domain. For examples of this command see [the section called “Enabling and Disabling Suspensions”](modules.adaptive#modules.adaptive.console.examples "Enabling and Disabling Suspensions").

</dd>

<dt>adaptive list [--binding *`bindingname`* --domain *`domainname`*]</dt>

<dd>

Displays the effective values of the shaping parameters for domains that match the specified binding and domain arguments, and how long that value has been in effect. See sample output below:

```
Group/Binding               Domain               Opt   Value
--------------------------------------------------------------------------
default                  gmail.com  max_outbound_connections      30
```
</dd>

<dt>adaptive reset [ --binding *`bindingname`* --domain *`domainname`* ] | [ --all]</dt>

<dd>

Clears the shaping parameters recorded for domains that match the specified binding and domain arguments. Using this console command with no options is equivalent to using it with the `--all` option.

</dd>

<dt>adaptive rules --binding *`bindingname`* --domain *`domainname`*</dt>

<dd>

This command displays the adaptive rules that are in effect for the specified domain/binding pair. You must supply both a binding and a domain. The output of this command is as follows:

```
default_bounce_rule default_bounce_rule
  enabled       => 1
  codes         => bc:10 bc:24
  low_threshold => 3.000000
  low_action    => throttle
  low_action_p1 => down
  low_action_p2 => (null)
  high_threshold=> 10.000000
  high_action   => suspend
  high_action_p1=> 4 hours
  high_action_p2=> (null)
  count/total   => 143/19695
```

You can interpret the output as follows: during the most recent time period defined by `bounce_sweep_interval` (the default value is one hour), `19695` delivery attempts were made to the specified binding/domain pair. Among those `19695` attempts, `143` were bounces and were classified as either code 10 or code 24.

The situation is slightly different where fbl rules are concerned.

```
default_fbl_ruledefault_fbl_rule
  enabled       => 1
  codes         => fbl:abuse
  low_threshold => 3.000000
  low_action    => throttle
  low_action_p1 => down
  low_action_p2 => (null)
  high_threshold=> 10.000000
  high_action   => suspend
  high_action_p1=> 4 hours
  high_action_p2=> (null)
  count/total   => 4/12030303
```

During the most recent time period defined by `fbl_stats_monitor` ( the default value is one day), `12030303` successful deliveries were made to the specified domain. During the same time period, 4 FBLs categorized as "abuse" were received from that domain. These 4 fbls resulted from the mail sent through the binding specified as a parameter to the "adaptive rules" console command. However, it is not possible to determine if these complaints were the direct result of the email sent in the past 24 hrs or from email sent earlier.

</dd>

<dt>adaptive warmup</dt>

<dd>

Displays the age of bindings from the perspective of the IP warmup component of AD.

</dd>

<dt>adaptive warmup *`bindingname`* [*`age`*]</dt>

<dd>

**Configuration Change. ** This feature is available as of version 3.3.

Sets the age of a binding, in seconds. If the age argument is omitted, then the binding age is set to 0.

Setting the age of a binding helps establish a good reputation by building up a sending rate that follows the schedules that have been set up for the major receivers. Some of those schedules limit volume based on the time since you started to use the IP address. For newly obtained IP addresses, the warmup feature works out of the box. If you are installing the adaptive module on a system with preexisting IP addresses with established reputations, you need to inform the module how old the associated bindings are so that it won't underutilize them. It won't hurt your reputation to underutilize the bindings, but it may result in lower throughput. For more information about IP warmup see [IP Warmup](glossary#gloss-ip-warmup "IP Warmup").

If `adaptive_scope` evaluates to "global" for a binding scope (binding is a scope in Momentum), the age set for that binding through the warmup action will be applied to that binding across the whole cluster. *Note*: If adaptive_scope evaluates to "global" for a binding::domain combination, it does not imply that `adaptive_scope` will also evaluate to the same value for that binding alone.

</dd>

</dl>

**Enabling and Disabling Suspensions**

Find below examples of the adaptive console commands. Note how the `Enable` column shows whether suspension is enabled or not.

```
17:16:56 /tmp/2025> adaptive suspensions --all
Group/Binding                                     Domain       TTL  Enable
--------------------------------------------------------------------------
default                                        gmail.com     14319       1
default                          test.messagesystems.com     14319       1

17:16:56 /tmp/2025> adaptive override --domain gmail.com --binding default
Overrode 1 entries
17:16:49 /tmp/2025> adaptive suspensions --all
Group/Binding                                     Domain       TTL  Enable
--------------------------------------------------------------------------
default                                        gmail.com     14256       0
default                          test.messagesystems.com     14256       1
```

Note that suspension for the gmail.com domain has been disabled by the **`adaptive override`**           command. Suspension is reenabled by **`adaptive override --domain gmail.com --binding default enable`**                                                      .

```
17:18:35 /tmp/2025> adaptive override --domain gmail.com --binding default
enable
Overrode 1 entries
17:18:47 /tmp/2025> adaptive suspensions --all
Group/Binding                                     Domain       TTL  Enable
--------------------------------------------------------------------------
default                                        gmail.com     14138       1
default                          test.messagesystems.com     14138       1
```

### 14.2.10. Sample Summary Email

Summaries of actions taken by the adaptive module are created by the ad_summary script run as a cron job. For more information about this script see [ad_summary](executable.ad_summary "ad_summary").

Find below the layout of a sample summary email sent by the adaptive module.

```
Top 20 bindings by number of receptions:
Binding        Receptions   Deliveries     Transfails     Permfails
=======        ==========   ==========     ==========     =========
binding1       241630       240271 ( 99%)   896 (0%)       1359 (  0%)
binding2       213429       213327 ( 99%)  1067 (0%)         98 (  0%)
binding3       144187       142714 ( 98%)   448 (0%)       1473 (  1%)
binding4       143852       142113 ( 98%)   601 (0%)       1739 (  1%)
...

Top 20 domains by number of receptions:
Binding        Receptions   Deliveries     Transfails     Permfails
=======        ==========   ==========     ==========     =========
google.com     3230314      3205400 ( 99%) 16896 (0%)      29782 (  0%)
yahoo.com      113283        111293 ( 98%)     6 (0%)       2100 (  1%)
aol.com        108785        108052 ( 99%)  1795 (1%)        833 (  0%)
...

Binding domains modified by Adaptive Delivery:
Binding/Domain        Receptions   Deliveries     Transfails     Permfails
==============        ==========   ==========     ==========     =========
binding1/aol.com       600         600 (100%)          0 (0%)       0 (  0%)
binding2/hotmail.com   466         464 ( 99%)          0 (0         2 (  0%)
binding3/yahoo.com    5702         427 (  7%)         85 (1%)    2961 ( 51%)
...

Bounce classes by Adaptive binding/domain.
Binding/Domain        Bounce Class        Transfails     Permfails
==============        ============        ==========     =========
binding2/hotmail.com  Invalid Recipient           0              2
binding3/yahoo.com    Undetermined               85              0
binding1/aol.com      Invalid Recipient           0              1
...

Overall statistics:
Receptions        Deliveries        Transfails         Permfails
==========        ==========        ==========         =========
   3580194        3548161 ( 99%)      22126 (  0%)     103175 (  2%)

Adaptive Delivery Adjustments:
Binding          Domain        Variable                         Initial Updated  Changes
=======          ======        ========                         ====== =======  =======
binding1         aol.com        max_deliveries_per_connection     22      23        1
binding1         aol.com        max_outbound_connections          42      43        1
binding2     hotmail.com        max_deliveries_per_connecti      112     113        1
...

Adaptive Delivery Suspensions:
Binding          Domain                              Start    Stop
=======          ======                              =====    ====
binding3         yahoo.com                           02:35    06:35
binding3         yahoo.com                           06:36    10:36
binding3         yahoo.com                           10:36    14:36

Adaptive Delivery Blackholes:
Binding                  Domain                       Start    Stop
=======                  ======                       =====    ====
No blackholes

Top 20 Permanent failure reasons:
66382   : 550 [internal] [oob] The response text could not be identified.
6101    : 550 [internal] [oob] The message is an auto-reply/vacation mail.
3897    : 554 5.4.6 mail loop detected
...

Top 20 Transient failure reasons:
4234    : 451 Message temporarily deferred - [160]
3435    : 451 4.4.2 [internal] no MAIL FROM response
1800    : 451 4.4.2 [internal] connection closed by remote host

Bounce Live Updates patterns: 445, updated Tue Feb 14 01:29:09 2011
```

### Note

The summary report shows the time in the timezone of the MTA on which it was created.

Adjusting the format of this report by changing the parameters passed to the ad_summary script is **not** recommended. Any changes made will be overwritten if the application is upgraded.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.ac_auth)  | [Up](modules.php) |  [Next](modules.alerting.php) |
| 14.1. ac_auth – Authentication Handler  | [Table of Contents](index) |  14.3. alerting – alerting |
