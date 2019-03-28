|     |     |     |
| --- | --- | --- |
| [Prev](modules.ac_auth)  | Chapter 71. Modules Reference |  [Next](modules.alerting) |

## 71.3. adaptive – Adaptive Delivery

<a className="indexterm" name="idp13975168"></a>

Adaptive Delivery (AD) provides the ability to dynamically tune parameters to help manage your outbound mail traffic in a way that is more in line with the best practices in use by receivers. AD also helps maintain and improve your sending reputation and makes better use of system resources. Using AD, you can preempt delivery threats by taking appropriate action. For example, you can temporarily suspend delivery to a domain if it looks like mail has been blocked, thereby allowing time to diagnose the problem and implement corrective measures.

This module is the enabling component of AD. It provides a bridge between the core configuration system and the dynamic rule sets that are at the heart of AD.

### Note

To use this module you must have AD enabled in your license.

In addition to suspended deliveries, responses from receivers can trigger other actions such as throttling and reduced deliveries. These actions are triggered by the rules contained in the `adaptive_rules.lua` file. A single response may immediately trigger one action, while a number of responses within a specified time frame may be required to trigger another. You can look at the internal comments in the `/opt/msys/ecelerity/libexec/scriptlets/msys/adaptive_rules.lua` file to determine which actions are taken under what circumstances.

As a proactive measure, the IP Warmup component of AD will factor in the age of the binding and adjust shaping parameters to automatically scale those parameters up according to the preferred schedule of the major receivers.

AD is intended to be largely self-managed and auto-tuning, but still allows you to adjust a number of parameters to influence its decisions.

### Note

In a cluster configuration, suspension of a binding can result in excessive "#mmoves" between nodes. To avoid this possibility always assign a `duravip_preference` for any bindings used with the adaptive module. For more information about mmove and DuraVIP™, see [Chapter 27, *DuraVIP™: IP Fail over*](cluster.config.duravip "Chapter 27. DuraVIP™: IP Fail over") .

There is no upper limit to the number of bindings that can be in a binding group. When Adaptive Delivery is enabled, a large number of bindings in a binding group will affect performance since significant CPU time is spent checking for suspended bindings. For this reason, when using the adpative module, the recommended best practice is not to exceed 32 bindings per binding group.

The adaptive module makes heavy use of throttles; therefore, the `siv_throttle_cache_size` default is `1000`.

Whenever the adaptive module makes an adjustment to delivery parameters, it logs that information to the paniclog with a prefix of `adaptive:`. This module can also send an email to a configurable email address, and that address can be specified at the domain level, although it is typically set either globally or at the binding or binding group level.

### 71.3.1. Configuration

The adaptive module must be included in the `ecelerity.conf` file and requires the [inbound_audit](modules.inbound_audit "71.41. inbound_audit – Inbound traffic analytics") module. The following is an example configuration:

<a name="modules.adaptive.configuration.example"></a>

**Example 71.4. adaptive Configuration**

```
adaptive_enabled = true
adaptive_notification_interval = 5
adaptive_adjustment_interval = 10

adaptive  {
  suspend_sweep_interval = 5
  operational_log_level = "debug"
  jlog_file = "jlog:///var/log/ecelerity/adaptive.rt=>ad_stats"
  enable_jlog = false
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

### 71.3.2. Options Valid in the `adaptive_scope`

This section defines the configuration options that are specific to the adaptive module. These options are valid in the adaptive module scope.

<dl className="variablelist">

<dt><a name="modules.adaptive.ad_response_rule_series_prefix"></a>ad_response_rule_series_prefix</dt>

<dd>

When evaluating the trigger of a response rule, the event counts are kept in a cluster-wide, named series. At start up, the adaptive module creates a number of named series by searching over all adaptive rules (both system and custom rules, if applicable). If a rule uses *`count/series`* as its trigger, a series with the name *`value_of_this_option`*_*`suffix`* is created. *`suffix`* is the interval size used by the series and is computed as *`period`*/*`interval`* + 1\. *`interval`* is the number of intervals used by the series.

The default value is `ADRR_series`.

</dd>

<dt><a name="modules.adaptive.adaptive_cache_size"></a>adaptive_cache_size</dt>

<dd>

Specify the adaptive cache size. The value specifies the number of entries *not* the size of the cache in bytes. If you reduce the cache size you will have to restart ecelerity for the change to take effect. Default value is `1048576`.

Depending on the number of bindings in your configuration and the number of domains being delivered to, the default value for this option may be too small. For a detailed discussion of this topic see [Using the System Console](https://support.messagesystems.com/docs/web-ad/ad.troubleshooting.console).

</dd>

<dt><a name="modules.adaptive.adaptive_cache_ttl"></a>adaptive_cache_ttl</dt>

<dd>

Specify the time to live for the adaptive cache. Default value is `43200` seconds.

</dd>

<dt><a name="modules.adaptive.adaptive_manage_options"></a>adaptive_manage_options</dt>

<dd>

This option is required in case an unmanaged option is used by a new AD rule action. Options that are not managed by default are:

*   idle_timeout

*   ehlo_timeout

*   mailfrom_timeout

*   rcptto_timeout

*   body_timeout

*   rset_timeout

*   max_recipients_per_batch

*   max_resident_active_queue

Managing an option that is not managed by default will not improve performance; it will degrade performance. It is harmless to manage options that are managed by default. Managed options are shown in [adaptive_unmanage_options](modules.adaptive#modules.adaptive.adaptive_unmanage_options) .

</dd>

<dt><a name="modules.adaptive.adaptive_stats_period"></a>adaptive_stats_period</dt>

<dd>

Specify the period, in seconds, of the sliding window for the `audit_series` of the adaptive statistics. Default value is `3600` seconds.

</dd>

<dt><a name="modules.adaptive.adaptive_unmanage_options"></a>adaptive_unmanage_options</dt>

<dd>

To reduce overhead, you can unmanage options that are managed by default. The options managed by default are:

*   max_outbound_connections

*   max_deliveries_per_connection

*   retry_interval

*   max_retry_interval

*   max_retries

*   outbound_throttle_messages

Unmanage an option in the following way:

`adaptive_unmanage_options = ("outbound_throttle_messages")`

If you are unmanaging a number of options, use spaces between options. Only unmanage options that are unused. It is harmless to unmanage options that are unmanaged by default.

</dd>

<dt><a name="modules.adaptive.backing_store_connect_timeout"></a>backing_store_connect_timeout</dt>

<dd>

Specify the amount of time, in seconds, that the adaptive module will wait for a connection to the backing store server. This is the connection phase only. Default value is `5` seconds.

</dd>

<dt><a name="modules.adaptive.backing_store_timeout"></a>backing_store_timeout</dt>

<dd>

Specify the amount of time, in seconds, that the adaptive module will wait for a response from the adaptive backing store. Default value is `5` seconds.

</dd>

<dt><a name="modules.adaptive.binding_domain_cache_max_ttl"></a>binding_domain_cache_max_ttl</dt>

<dd>

Specify the time to live (TTL), in seconds, for the binding::domain cache. When a record expires, the associated AD parameters still stay in memory. When the same binding::domain is referenced again, a new record will be inserted and at the same time, the AD parameters are refreshed from the Riak data store. Default value is `86400` seconds.

</dd>

<dt><a name="modules.adaptive.binding_domain_cache_size"></a>binding_domain_cache_size</dt>

<dd>

Specify the number of entries in the binding::domain cache. The name of this cache is `adaptive_bd_cache`. Use the ec_console **cache stat**      command to inspect this cache. Default value is `999999`.

</dd>

<dt><a name="modules.adaptive.bounce_sweep_interval"></a>bounce_sweep_interval</dt>

<dd>

Specify how often, in seconds, to perform a sweep that checks the per binding/domain bounce rate and FBL rate and determine if there should be suspensions. Default value is `3600` seconds. Set to `0` to disable.

### Note

The notation `binding::domain` means the domain within the specified binding scope. Note that sweep rules can also be applied to a global scope or to a domain scope within the global scope. Nevertheless, these scopes are still `binding::domain` scopes—where there is no explicit binding, the `default` binding is understood.

A value of `0` will not prevent suspensions that are in response to specific transient or permanent failure errors received from the receiver.

</dd>

<dt><a name="modules.adaptive.data_store"></a>data_store</dt>

<dd>

Identifies the IP/Port of the Riak servers, which are used as the data store for adaptive parameters. `data_store` is an array with the default value of `("http://127.0.0.1:8098")`.

If you are using LevelDB as your backing store, this option is not applicable. See [adaptive_backstore_leveldb](modules.adaptive#modules.adaptive.adaptive_backstore_leveldb)

During the installation of a cluster, the installer installs Riak on all nodes, giving you the benefit of a distributed installation. Additional redundancy can be gained by adding the public IP address of these nodes to the `data_store` option.

For example, given the following nodes in a cluster:

```
mta1 192.168.1.10
mta2 192.168.1.11
mta3 192.168.1.12
mgr  192.158.1.13
```

The preferred value for `data_store` is

```
("http://127.0.0.1:8098" "http://192.168.1.10:8098" "http://192.168.1.11:8098"
"http://192.168.1.12:8098" "http://192.168.1.13:8098")
```

where the first item in the list is the "preferred" URL (i.e. local URL). When the adaptive module is configured in this way, it is important that all nodes see the same set of data no matter which URL is being used to access the data. To achieve this, all Riak nodes must be joined together as described in [Section 16.7.3, “Checking Riak Cluster Communication”](cluster.riak.configuration#cluster.riak.configuration.checking "16.7.3. Checking Riak Cluster Communication").

In situations where the adaptive module cannot connect to the "preferred" URL, it will iterate through the list to find a server that it can connect to. The last connected server will be reused until it no longer responds or until the next time the local parameters are being backed up. (The "preferred" server will be reset to the first one and the interval between backups is specified by [data_store_sync_interval](modules.adaptive#modules.adaptive.data_store_sync_interval) .)

### Warning

The naming scheme for a Riak ID uses ‘:’ as a separator. For this reason you must not use colons in binding names.

</dd>

<dt><a name="modules.adaptive.data_store_sync_interval"></a>data_store_sync_interval</dt>

<dd>

Specify how often, in seconds, to synchronize the tables stored in memory with the database backing store. Default value is `3600` seconds.

</dd>

<dt><a name="modules.adaptive.enable_bounce_stats"></a>enable_bounce_stats</dt>

<dd>

Whether or not to consolidate bounce statistics hourly. This operation can consume resources so turn this feature off if you are not using it. Default value is `true`.

</dd>

<dt><a name="modules.adaptive.enable_fbl_stats"></a>enable_fbl_stats</dt>

<dd>

Whether or not to consolidate FBL statistics hourly. This operation can consume resources so turn this feature off if you are not using it. Default value is `true`.

</dd>

<dt><a name="modules.adaptive.enable_jlog"></a>enable_jlog</dt>

<dd>

Whether or not to enable logging of changes in status, suspension and other configuration changes. Default value is `false`.

</dd>

<dt><a name="modules.adaptive.enable_logging"></a>enable_logging</dt>

<dd>

If this option is set to `false`, the operational details will not be logged at all. Default value is `true`.

</dd>

<dt><a name="modules.adaptive.fbl_stats_monitor"></a>fbl_stats_monitor</dt>

<dd>

Create a monitoring window of "window-size, seconds long" and maintain the history for the specified number of windows. This option is used in conjunction with the `adaptive_fbl_volume_threshold` and `adaptive_attempt_threshold` options. These options are discussed in [adaptive_fbl_volume_threshold](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold) . Default value is `14400,6`.

</dd>

<dt><a name="modules.adaptive.fbl_stats_series"></a>fbl_stats_series</dt>

<dd>

Specify the name of a persisted named series to be used to hold the FBL statistics for all binding::domain combinations. The statistics stored in this series are a collection of key/value pairs. TheVformat uses the following convention: *`binding_name:domain_name`*:fbl:*`fbl_category`* – the total count of FBL feedbacks with this FBL. FBL category names vary according to ISP category. Default value is `FBL_stats`.

</dd>

<dt><a name="modules.adaptive.fbl_total_series"></a>fbl_total_series</dt>

<dd>

Specify the name of a persisted named series to be used to hold the total delivery count for all binding::domain combinations. This series shares the size monitor window/ interval with `fbl_stats_series`. The statistics stored in this series are a collection of key/value pairs. The format uses the following convention: *`binding_name:domain_name:total_count`*. Default value is `FBL_total`.

</dd>

<dt><a name="modules.adaptive.jlog_file"></a>jlog_file</dt>

<dd>

Define the location of the jlog adaptive files. Default value is `jlog:///var/log/adaptive/adaptive.rt=>ad_stats`.

</dd>

<dt><a name="modules.adaptive.log_base"></a>log_base</dt>

<dd>

Define the location of the adaptive logs. Default value is `/var/log/ecelerity/adaptive`.

</dd>

<dt><a name="modules.adaptive.operational_log_level"></a>operational_log_level</dt>

<dd>

Define the log level of the AD module. The different log levels are defined in [debug_flags](conf.ref.debug_flags "debug_flags"). The setting of this option does not affect paniclog events. Default value is `NOTICE`.

</dd>

<dt><a name="modules.adaptive.outbound_throttle_messages_monitor"></a>outbound_throttle_messages_monitor</dt>

<dd>

Specify the "window" of the outbound throttle audit series. This option implements cluster-wide throttle behavior for a binding::domain when its `adaptive_scope` is global. Default value is `(3,20)`, indicating twenty, three-second windows.

</dd>

<dt><a name="modules.adaptive.outbound_throttle_messages_series"></a>outbound_throttle_messages_series</dt>

<dd>

Specify the name of the outbound throttle messages series. Default name is `OBTM_Series`.

</dd>

<dt><a name="modules.adaptive.split_logs_by_binding"></a>split_logs_by_binding</dt>

<dd>

If split_logs_by_binding is `false`, then the log file used will be named `/var/log/ecelerity/adaptive/adaptive.log`. If this option is `true` then the log file(s) used will be named /var/log/ecelerity/adaptive/*`bindingname`*.log, where `bindingname` is replaced with the name of the binding with which the operational event is associated. Default value is `false`.

</dd>

<dt><a name="modules.adaptive.suspend_sweep_interval"></a>suspend_sweep_interval</dt>

<dd>

Specify how often, in seconds, to perform a sweep that checks for expired suspensions and re-enable the affected binding::domain. Default value is `60` seconds. Set to `0` to disable.

</dd>

</dl>

### 71.3.3. Options That Affect Specific Domains

This section defines the adaptive options that correspond to core configuration options. These options are valid in the binding, binding_group, domain, and global scopes. Note that the most specific value is used.

The following options set upper and lower bounds on the effective values of the corresponding core configuration options:

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

*   adaptive_max_retry_interval

*   adaptive_outbound_throttle_messages

*   adaptive_rcptto_timeout

*   adaptive_retry_interval

*   adaptive_rset_timeout

The AD rules govern the behavior of the following options and will dynamically tune them for the receivers specified. (For more information see [Adaptive Delivery User Guide](https://support.messagesystems.com/docs/web-ad/index).)

*   `adaptive_max_outbound_connections`

*   `adaptive_max_deliveries_per_connection`

*   `adaptive_outbound_throttle_messages`

*   `adaptive_retry_interval`

If you want to cap the range, you may use these settings as an override:

```
domain "example.com" {
  adaptive_max_deliveries_per_connection = ( 20 80 )
}
```

The preceding example sets the lower boundary to 20 and the upper boundary to 80, meaning that if the AD rules think that the value should be lower, it will be clipped to 20, or if the rules decide that the value should be higher, it will be clipped to 80.

The following options configure how AD is implemented:

<dl className="variablelist">

<dt><a name="modules.adaptive.adaptive_adjustment_interval"></a>adaptive_adjustment_interval</dt>

<dd>

Throttles adjustments so that they happen no more than once in this many seconds for a given binding::domain. This option acts as a buffer to avoid "flapping" between values. Default value is `60` seconds.

</dd>

<dt><a name="modules.adaptive.adaptive_alert_email_destination"></a>adaptive_alert_email_destination</dt>

<dd>

Set the address to which notification emails are sent. The value is any valid RFC2821 email address. The email is generated internally and subject to the usual binding assignment logic and signing rules. Default for this option is unset, meaning that no email will be generated.

```
binding "customer-1" {
  adaptive_alert_email_destination = "postmaster@example.com"
}
```

The throttle, blackhole, and suspend actions will generate an email to the address associated with this option. You can define any number of destination addresses by separating addresses using spaces or commas, and also configure which events generate an email message. See [adaptive_notification_events](modules.adaptive#modules.adaptive.adaptive_notification_events) .

</dd>

<dt>adaptive_alert_email_sender</dt>

<dd>

Set the address for the alert email sender. There is no default value.

</dd>

<dt><a name="modules.adaptive.adaptive_attempt_threshold"></a>adaptive_attempt_threshold</dt>

<dd>

Define the minimum number of delivery attempts that must have been made before checking the `adaptive_rejection_rate_suspension_percentage` option. Also define the minimum number of delivery attempts over a period during which bounce statistics are collected. This minimum number must be met before a bounce sweep rule can fire. The period is one hour and is hard-coded inside `adaptive.lua`. This option plays a role in determining the `low_action` in the adaptive_sweep_rule scope. For more information see [adaptive_sweep_rule](modules.adaptive#modules.adaptive.adaptive_sweep_rule) .

When specified in the global scope, it pertains to individual domains, binding_groups or bindings, not the aggregate.

The default value is `2000`.

</dd>

<dt><a name="modules.adaptive.adaptive_backstore_leveldb"></a>adaptive_backstore_leveldb</dt>

<dd>

For detailed information about this configuration option, see [adaptive_backstore_leveldb](conf.ref.adaptive_backstore_leveldb "adaptive_backstore_leveldb").

</dd>

<dt>adaptive_backstore_riak</dt>

<dd>

For detailed information about this configuration option, see [adaptive_backstore_riak](conf.ref.adaptive_backstore_riak "adaptive_backstore_riak").

</dd>

<dt><a name="modules.adaptive.adaptive_default_suspension"></a>adaptive_default_suspension</dt>

<dd>

When AD decides that a domain should be suspended, it will be marked as suspended for the amount of time specified by this option.

This option is a string that specifies an integer number value and a unit. The unit can be one of `seconds`, `minutes`, `hours` or `days`. The default value is `4 hours`.

</dd>

<dt><a name="modules.adaptive.adaptive_default_suspension_enabled"></a>adaptive_default_suspension_enabled</dt>

<dd>

**Configuration Change. ** This option is available as of version 4.2.

This option will enable and disable [adaptive_rejection_rate_suspension_percentage](modules.adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage) . Its default setting is `false`.

</dd>

<dt>adaptive_enabled</dt>

<dd>

For detailed information about this configuration option, see [adaptive_enabled](conf.ref.adaptive_enabled "adaptive_enabled").

</dd>

<dt><a name="modules.adaptive.adaptive_fbl_volume_threshold"></a>adaptive_fbl_volume_threshold</dt>

<dd>

Set the minimum total delivered mail count over a period during which FBL stats are collected for a given binding::domain pair. This minimum must be met before a sweep rule for FBL will fire. The period is specified by the adaptive option `fbl_stats_monitor` within the adaptive stanza. The default period is 24 hours, and the default value is `20000`.

</dd>

<dt><a name="modules.adaptive.adaptive_notification_events"></a>adaptive_notification_events</dt>

<dd>

Configures the events that will trigger an email notification to the address defined by [adaptive_alert_email_destination](modules.adaptive#modules.adaptive.adaptive_alert_email_destination) . The default value is shown below:

`adaptive_notification_events = ( throttle suspension blackhole )`

Separate events using a space.

</dd>

<dt><a name="modules.adaptive.adaptive_notification_interval"></a>adaptive_notification_interval</dt>

<dd>

Throttles alert notification emails so that no more than one alert email will be generated about a given event in this many seconds. Default value is `3600` seconds.

</dd>

<dt><a name="modules.adaptive.adaptive_positive_adjustment_interval"></a>adaptive_positive_adjustment_interval</dt>

<dd>

Throttles positive adjustments so that they happen no more than once in this many seconds. Positive adjustments are speculatively applied when deliverability appears to be working well allowing the system to increase the values over time. Default value is `3600` seconds.

This option acts as a brake to prevent rapidly advancing to the high end of the permitted range of values.

</dd>

<dt><a name="modules.adaptive.adaptive_rejection_rate_suspension_percentage"></a>adaptive_rejection_rate_suspension_percentage</dt>

<dd>

**Configuration Change. ** As of version 4.2, this option is enabled and disabled by [adaptive_default_suspension_enabled](modules.adaptive#modules.adaptive.adaptive_default_suspension_enabled) .

AD monitors the rate at which messages are rejected by the destination MTA (the delivery failure rate). If this rate exceeds the configuration value for `adaptive_rejection_rate_suspension_percentage`, AD will enact a suspension on the affected binding::domain.

The default value is `20`, which means that the domain will be suspended if the rejection rate exceeds 20% of the number of attempts.

If a suspension is enacted, it applies to the domain on the affected binding and not globally. The suspension will last for the amount of time configured by the [adaptive_default_suspension](modules.adaptive#modules.adaptive.adaptive_default_suspension) option.

</dd>

<dt><a name="modules.adaptive.adaptive_retry_fuzz"></a>adaptive_retry_fuzz</dt>

<dd>

Improves the performance of ecelerity when a domain has reached its consecutive failure threshold and in other instances where all messages associated with a binding domain must be requeued. This option uses the adaptive improvements to "fuzz" messages over an interval rather than attempting to re-process them immediately. See also [delayed_binding_domain_fuzz](conf.ref.delayed_binding_domain_fuzz "delayed_binding_domain_fuzz"). Default value is `4096`.

</dd>

<dt>adaptive_scope</dt>

<dd>

For detailed information about this configuration option, see [adaptive_scope](conf.ref.adaptive_scope "adaptive_scope").

</dd>

<dt><a name="modules.adaptive.adaptive_sweep_rule"></a>adaptive_sweep_rule</dt>

<dd>

Enables adaptive delivery according to bounce and FBL statistics. This option requires special attention and is documented separately in [Section 71.3.5, “`adaptive_sweep_rule` Scope”](modules.adaptive#modules.adaptive.adaptive_sweep_rule_scope "71.3.5. adaptive_sweep_rule Scope").

</dd>

<dt><a name="modules.adaptive.adaptive_sweep_rule_enabled"></a>adaptive_sweep_rule_enabled</dt>

<dd>

Disables `adaptive_sweep_rule` within a scope without having to delete the adaptive_sweep_rule stanza from the configuration file. Default value is `1`.

When explicitly set to `0` within a scope, bindings or domains in that scope will not be affected by the `adaptive_sweep_rule` applicable in that scope.

In the following example, `adaptive_sweep_rule` is enabled for `binding1/domain1` but disabled for any other domains in the `binding "binding1"` scope.

<a name="modules.adaptive.adaptive_sweep_rule_enabled.example"></a>

**Example 71.5. adaptive_sweep_rule_enabled example**

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

</dd>

</dl>

### 71.3.4. `adaptive_scope` Option

This option controls the scope of adaptive delivery. For configuration information, see [adaptive_scope](conf.ref.adaptive_scope "adaptive_scope").

### 71.3.5. `adaptive_sweep_rule` Scope

This scope enables AD according to bounce and FBL statistics. It is valid in the global, domain, binding and binding_group scopes.

For each `bounce_sweep_interval` (defined in the adaptive module), the system iterates through all the binding and domain pairs that are local to the current node and examines the bounce statistics and the feed back loop (FBL) statistics collected through the fbl module. See [Section 71.35, “fbl - Feedback Loop”](modules.fbl "71.35. fbl - Feedback Loop").

A sample configuration showing `adaptive_sweep_rule` defined in the global scope and two different domain scopes follows:

<a name="modules.adaptive.adaptive_sweep_rule.examples"></a>

**Example 71.6. adaptive_sweep_rule examples**

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

You cannot create an `adaptive_sweep_rule` scope before you have added the adaptive module. To use sweep rules, you must load the `fbl` and `bounce_classifier_override` modules.

The configuration options valid in the `adaptive_sweep_rule` scope are defined in the following list:

<dl className="variablelist">

<dt><a name="modules.adaptive.codes"></a>codes</dt>

<dd>

Specify a list of bounce codes or FBL categories. The summation of their rates is used to evaluate the rule. Although the syntax does not prevent using both bounce codes and FBL categories within a rule, it is bad practice to mix them since they occur in very different time scales.

Valid values for bounce codes start with the prefix `bc:` followed by a legitimate bounce code number. For a list of valid bounce codes, see [Section 35.10, “Bounce Classification Codes”](bounce_logger.classification.codes "35.10. Bounce Classification Codes"). You can also use custom bounce codes defined by the [Section 71.12, “bounce_classifier_override – Override/Augment Bounce Classifications”](modules.bounce_classifier_override "71.12. bounce_classifier_override – Override/Augment Bounce Classifications").

Valid values for fbl codes start with the prefix `fbl:` followed by a legitimate fbl category such as `abuse` or `unsubscribe`. Legitimate categories are determined by the requirements of the specific ISP.

This option is required. There is no default value for this option except as defined in [Section 71.3.5.2, “Default Adaptive Sweep Rules”](modules.adaptive#modules.adaptive.default_adaptive_sweep_rule "71.3.5.2. Default Adaptive Sweep Rules").

</dd>

<dt><a name="modules.adaptive.high_action"></a>high_action</dt>

<dd>

Specify the action when the high threshold is met and the number of delivery attempts exceeds the `adaptive_attempt_threshold`. See [adaptive_fbl_volume_threshold](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold) .

Default value is `("suspend" "4 hours")`. For a complete list of valid values see [Rule Actions](https://support.messagesystems.com/docs/web-ad/ad.adaptive.rules.actions). The throttle, blackhole, and suspend actions will generate an email to the address associated with the `adaptive_alert_email_destination` option.

### Warning

The length of time for a suspension must be specified in hours and must be a power of `2`. For example, 1, 2, 4 hours and so on are valid values for a suspension.

</dd>

<dt><a name="modules.adaptive.high_threshold"></a>high_threshold</dt>

<dd>

Specify the high threshold value for the sum of the rates of the bounce codes or FBL categories specified by the `codes` option. Default value is `10` meaning `10%`.

</dd>

<dt><a name="modules.adaptive.low_action"></a>low_action</dt>

<dd>

Specify the action when the high threshold is not met but the low threshold is met and the number of delivery attempts exceeds the `adaptive_attempt_threshold` parameter. (See [adaptive_fbl_volume_threshold](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold) .)

Default value is `("throttle" "down")`. For a complete list of valid values see [Rule Actions](https://support.messagesystems.com/docs/web-ad/ad.adaptive.rules.actions). The throttle, blackhole, and suspend actions will generate an email to the address associated with the `adaptive_alert_email_destination` option.

</dd>

<dt><a name="modules.adaptive.low_threshold"></a>low_threshold</dt>

<dd>

Specify the low threshold value for the sum of the rates of the bounce codes or FBL categories specified in the `codes` option within a binding::domain. Default value is `5` meaning `5%`.

</dd>

</dl>

**71.3.5.1. How Sweep Rules are Determined**

`adaptive_sweep_rule` stanzas are applied according to the following rules:

*   All adaptive_sweep_rule stanzas must define the `codes` option. If it is not defined, the rule is ignored.

*   adaptive_sweep_rule stanzas must have unique names. If two adaptive_sweep_rule stanzas with the same name are applied to a binding::domain, the most specific one will win, even if that stanza is disabled.

*   When multiple adaptive sweep rules are defined in different scopes, the applicable adaptive sweep rules for a binding::domain pair are determined by the usual scope fallback rules with one exception: if the effective value of `adaptive_sweep_rule_enabled` is `0` in a scope along the fallback path, the rules defined in that scope will not apply. For more information about fallback, see [Section 15.3, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "15.3. Configuration Scopes and Fallback").

*   If the value of the `adaptive_sweep_rule_enabled` option is `0` within the scope of the adaptive_sweep_rule stanza, then that stanza will not apply.

*   For a binding::domain, a default bounce rule is created if the effective value of `adaptive_sweep_rule_enabled` is `1` and no adaptive_sweep_rule stanza contains a `codes` option defining at least one bounce code.

*   For a binding::domain, a default fbl rule is created if the effective value of `adaptive_sweep_rule_enabled` is `1` and no adaptive_sweep_rule stanza contains a `codes` option defining at least one fbl category.

*   Rules whose codes include both a bounce code and an fbl category are ignored.

*   The execution order of rules applicable to a binding::domain is undefined.

*   All rules whose criteria are met will have their respective actions executed. However, when multiple actions are executed, the end result may not always be predictable. For example, if two rules fire and both of them want to suspend a binding or domain for different durations, it is undefined which duration will prevail. The reason being that you cannot suspend a binding::domain that is already suspended—once a binding::domain is suspended you can neither increase nor decrease the suspension. The length of the suspension will depend upon which rule executes first.

**71.3.5.2. Default Adaptive Sweep Rules**

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
**71.3.5.3. Adaptive Delivery and Multiple Event Loops**

If you are using multiple event loops, you must put the spool directory and the Adaptive backing store database directory on separate disks. This is particularly important if Adaptive is enabled for a large number of binding-domain combinations. Additionally, when multiple event loops are configured, it is not valid to load the adaptive module with `config reload`. The ecelerity process must be restarted when adding Adaptive Delivery to your configuration.

For additional information about configuring Multiple Event Loops, see [Chapter 24, *Configuring Multiple Event Loops*](multi_event_loops "Chapter 24. Configuring Multiple Event Loops")

### 71.3.6. Console Commands

The following console commands are provided. Most commands accept --binding *`bindingname`* or --domain *`domainname`* arguments to adjust their scope. In most cases you may specify multiple binding or domain arguments.

<dl className="variablelist">

<dt>adaptive list [--binding *`bindingname`* --domain *`domainname`*]</dt>

<dd>

Displays the effective values of the shaping parameters for domains that match the specified binding and domain arguments, and how long that value has been in effect. See sample output below:

```
Group/Binding               Domain               Opt   Value
--------------------------------------------------------------------------
default                  gmail.com  max_outbound_connections      30
```
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

<dt>adaptive suspensions [ --binding *`bindingname`* --domain *`domainname`* ] | [ --all ]</dt>

<dd>

This command summarizes the suspensions that are currently in effect, whether they are enabled (you may administratively override the suspension) and displays how much time remains before the suspension will be lifted and service returned to normal. For examples of this command see [the section called “Enabling and Disabling Suspensions”](modules.adaptive#modules.adaptive.console.examples "Enabling and Disabling Suspensions").

You can examine all suspensions or just the suspensions for a specific binding/domain pairing. Using this console command with no options is equivalent to using it with the `--all` option.

</dd>

<dt>adaptive warmup</dt>

<dd>

Displays the age of bindings from the perspective of the IP warmup component of AD.

</dd>

<dt>adaptive warmup *`bindingname`* [*`age`*]</dt>

<dd>

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

### 71.3.7. Summary Email

A summary of actions taken by the adaptive module is created at `/var/log/ecelerity/adaptive.summary` and sent via email to the recipient defined by the option `adaptive_alert_email_destination`. The `/opt/msys/ecelerity/bin/ad_summary` script creates this summary and is added to `/etc/cron.d/msys-ecelerity` when the adaptive module is installed. It is run nightly as a cron job. This summary is created whether alerts have been generated or not. The default sender is `ecuser@localhost`. The log file,`/var/log/ecelerity/adaptive.summary`, should be added to `ec_rotate.conf`. For instructions on doing this, see [ec_rotate](executable.ec_rotate "ec_rotate"). For more information about the `/opt/msys/ecelerity/bin/ad_summary` script, see [ad_summary](executable.ad_summary "ad_summary").

The following is the layout of a sample summary email sent by the adaptive module:

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

### 71.3.8. Logging

Log retention is enabled by default and uses the existing ec_rotate log rotation process. ec_rotate consults `ec_rotate.conf` to determine what and where to look for logs to rotate. For more information, see [Section 34.1, “`ec_rotate.conf` File”](log_rotating#conf.ref.ec_rotate.conf "34.1. ec_rotate.conf File").

For the format of the adaptive log, see [Section 35.2, “`adaptive` Log”](adaptive.log.format "35.2. adaptive Log").

|     |     |     |
| --- | --- | --- |
| [Prev](modules.ac_auth)  | [Up](modules) |  [Next](modules.alerting) |
| 71.2. ac_auth – Authentication Handler  | [Table of Contents](index) |  71.4. alerting – Send Alerting Emails |

