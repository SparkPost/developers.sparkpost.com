|     |     |     |
| --- | --- | --- |
| [Prev](modules.opendkim)  | Chapter 14. Modules Reference |  [Next](modules.outbound_smtp_auth) |

## 14.50. outbound_audit – Outbound traffic analytics

<a className="indexterm" name="idp20648736"></a>

The outbound_audit module provides time-series analytics on the behavior of receiving domains. It is designed to help spot emergent issues, such as blocking, tarpitting, etc. The outbound_audit module differs from the standard analytics available in Momentum in that it allows you to compare short-term real-time data with data from earlier time windows. This makes it easy to spot changes in behavior.

### 14.50.1. Configuration

<a name="example.outbound_audit.3"></a>

**Example 14.77. outbound_audit module**

```
outbound_audit "outbound_audit1"
{
  monitors = ( "300,6" "1800,4" )
  monitor_domains = on
  threshold = 100
}
```

Valid configuration parameters are:

<dl className="variablelist">

<dt>domainlist = domain1[,domain2,...]</dt>

<dd>

Hardcode a list of domains that you want to store data for. This overrides and supercedes the `threshold` setting.

</dd>

<dt>monitor_domains = (on|off)</dt>

<dd>

Monitor individual domains, or simply hold global time-series data.

</dd>

<dt>monitors = ( "window-size, number-of-windows" ... )</dt>

<dd>

Create monitoring window(s) *window-size* seconds long, and maintain *number-of-windows* windows historically. In the example above, we create 2 different time-series: 5 minutes for the past half hour, and 30 minutes for the past 6 hours.

</dd>

<dt>threshold = size</dt>

<dd>

Only store time-series data for domains if they have transited more than *size* messages. This helps control memory usage by not storing long-term data for small domains.

</dd>

</dl>

### 14.50.2. Usage

Using system console commands you can query the outbound_audit module's time-series data, as shown in the following:

11:32:29 ecelerity(2025)> outbound_audit:*`outbound_audit1`* show domain aol.com
aol.com 300/0: r: 107 d: 111 dt: 8.20 t: 2 f: 0
aol.com 300/1: r: 190 d: 168 dt: 8.65 t: 1 f: 0
aol.com 300/2: r: 143 d: 154 dt: 8.91 t: 0 f: 0
aol.com 300/3: r: 264 d: 283 dt: 8.87 t: 1 f: 1
aol.com 300/4: r: 240 d: 216 dt: 9.16 t: 3 f: 0
aol.com 300/5: r: 194 d: 207 dt: 6.60 t: 0 f: 0
aol.com 300/6: r: 264 d: 248 dt: 7.78 t: 3 f: 0

The fields for this output are as follows:

<dl className="variablelist">

<dt>domain</dt>

<dd>

The domain name of the receiving domain being queried.

</dd>

<dt>window size/window offset</dt>

<dd>

The size of the window being displayed, plus the number of the window. Thus `300/0` is the current 5 minute window, while `300/2` is the 5 minute window that occured 10 minutes ago (i.e 2 windows back from current).

</dd>

<dt>r: receptions</dt>

<dd>

The number of message received by Momentum for that domain during that window.

</dd>

<dt>d: deliveries</dt>

<dd>

The number of messages successfuly delivered to that domain during that window.

</dd>

<dt>dt: delivery time</dt>

<dd>

The average delivery time for a successful delivery to that domain during that window, in seconds. It is not time-in-spool, but time between connection and a successful delivery.

</dd>

<dt>t: transient failures</dt>

<dd>

The number of transient failures (4xx response codes) for delivery attempts to that domain during that window.

</dd>

<dt>f: permanent failures</dt>

<dd>

The number of permanent failures (5xx response codes) for delivery attempts to that domain during that window.

</dd>

</dl>

### 14.50.3. outbound_audit: System Console Commands

The system console commands you can use to access the outbound_audit data are:

### Note

In version 3.0, non-singleton module commands are issued using *`Scope_Name`*:*`Instance_Name`* followed by the command. Use the **module list**      command from the system console to determine the scope name or instance name of a module. If a module does not have an instance name it is a singleton.

As of version 3.0, all module-specific commands related to setting or getting module options have been removed. Use the following syntax to set or get module-specific options: **config {set | eval | get} *`Scope_Name [Instance_Name] option [value]`*** . Note that there is no ‘`:`’ between the Scope_Name and the Instance_Name and that the Instance_Name is not used with singleton modules.

<dl className="variablelist">

<dt>outbound_audit:*`outbound_audit1`* show domain [domain]</dt>

<dd>

Dump all collected time-series data for the specified domain.

</dd>

<dt>outbound_audit:*`outbound_audit1`* show global</dt>

<dd>

Show the global (aggregated) time-series data.

</dd>

<dt>outbound_audit:*`outbound_audit1`* show domains</dt>

<dd>

List the names of all domains which have collected data.

</dd>

<dt>outbound_audit:*`outbound_audit1`* show all</dt>

<dd>

Dump all collected time-series data for all collected domains. This can be a large amount of data.

</dd>

<dt>

outbound_audit:*`outbound_audit1`* domain_list {add|delete} [domain]

</dt>

<dd>

Runtime addition/deletion of a domain in the monitoring list.

</dd>

<dt>outbound_audit:*`outbound_audit1`* clear domain [domain]</dt>

<dd>

Zero-out a domain's statistics.

</dd>

<dt>outbound_audit:*`outbound_audit1`* clear all</dt>

<dd>

Zero-out all statistics.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](modules.opendkim)  | [Up](modules) |  [Next](modules.outbound_smtp_auth) |
| 14.49. opendkim – OpenDKIM module  | [Table of Contents](index) |  14.51. outbound_smtp_auth – Module |
