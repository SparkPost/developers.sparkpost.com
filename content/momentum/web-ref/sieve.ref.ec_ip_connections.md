| [Prev](sieve.ref.ec_interfaces)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_ip_connections_cluster) |

<a name="sieve.ref.ec_ip_connections"></a>
## Name

ec_ip_connections — Audit how many connections an IP address has made

## Synopsis

`ec_ip_connections` { *`time_series_index`* } [ *`mask`* ]
`ec_ip_connections` { *`$hash`* }

<a name="idp29980688"></a>
## Description

`ec_ip_connections` returns a string containing the number of connections that have occurred for a CIDR block within a configured time window. The referenced CIDR block is constructed by applying the `mask` option value to the SMTP connection's remote IP address. There are two forms of this command.

### Note

As of version 3.4, this feature supports IPv6.

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

In the first form, the `time_series_index` value selects a monitor corresponding to its position in the inbound_audit configuration stanza (A `time_series_index` of '0' corresponds to the first monitor in the inbound_audit configuration stanza). The audit data returned for this monitor is based on a weighted sliding average of the current time window within this monitor and the previous time window, thus smoothing the transition between windows. If `mask` is not specified, the default value of '32' is used to compute the CIDR block.

In the second form, a hash is used to pass the arguments. These keys are supported:

<dl className="variablelist">

<dt>monitor</dt>

<dd>

A string matching a monitor definition within the inbound_audit configuration stanza, for example, "300,6". By default the first monitor listed in the configuration stanza is used.

</dd>

<dt>period_start</dt>

<dd>

Starting window number. The default is 0, which is the chronologically current window. For example, if the inbound_audit configuration stanza defines a monitor as "300,6", then the monitor contains six windows numbered 0 (current) through 5 (oldest). Each time window in this example is 300 seconds duration.

</dd>

<dt>period_end</dt>

<dd>

Ending window number. It defaults to the value of `period_start`. If this key is specified, its value is a window number (which should be equal to or greater than period_start). The result will be an aggregate sum over the window range.

</dd>

<dt>mask</dt>

<dd>

This is the mask used to compute CIDR block. The mask defaults to '32'.

</dd>

</dl>

### Note

This feature requires the inbound_audit module. See [Section 14.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit "14.41. inbound_audit – Inbound traffic analytics") for more information.

<a name="example.ec_ip_connections"></a>

**Example 16.63. ec_ip_connections example (first form)**

```
$connections = ec_ip_connections "0" "32";
$c_connections = ec_ip_connections "0" "24";
if ec_test :value "gt" :comparator "i;ascii-numeric" "${connections}" "1000" {
  ec_tarpit 10 "too many connections /32";
}

if ec_test :value "gt" :comparator "i;ascii-numeric" "${c_connections}" "10000" {
  ec_tarpit 10 "too many connections /24";
}
```

<a name="example.ec_ip_connections.second"></a>

**Example 16.64. ec_ip_connections example (second form)**

```
$args = hash_create;
hash_set $args "period_start" "0";
hash_set $args "period_end" "2";
hash_set $args "monitor" "300,6";
hash_set $args "mask" "32";
$count = ec_ip_connections $args;

if ec_test :value "gt" :comparator "i;ascii-numeric" "${count}" "10000" {
  ec_tarpit 10 "too many connections /32 in last fifteen minutes";
}
```

| [Prev](sieve.ref.ec_interfaces)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_ip_connections_cluster) |
| ec_interfaces  | [Table of Contents](index) |  ec_ip_connections_cluster |
