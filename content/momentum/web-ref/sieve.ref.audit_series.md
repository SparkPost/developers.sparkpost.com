| [Prev](sieve.ref.audit_connections_on_service)  | 16.2. Sieve Function Details |  [Next](sieve.ref.audit_series_add) |

<a name="sieve.ref.audit_series"></a>
## Name

audit_series — Return the audit series count associated with an IP address or CIDR block over a window range

## Synopsis

`audit_series` { *`series_name`* } { *`interval,number`* } { *`mask`* } [ *`start window`*         ] [ *`end window`*         ]
`audit_series` { *`$hash`* }

<a name="idp28648048"></a>
## Description

Audit series enable IP-address based events to be tracked over a rolling set of time windows. For further background, see [the section called “Audit series”](sieve.ecaddons#sieve.ectypes_audit_series "Audit series").

### Note

As of version 3.4, this feature supports IPv6.

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

This function returns the count for an IP address or CIDR block from the series having the specified name and "interval,number" setting. The returned count is a string which reflects the number of times that IP address was added to the series using [audit_series_add](sieve.ref.audit_series_add "audit_series_add").

The `ip` address defaults to the remote address of the current connection.

The `mask` defaults to 32\. This mask specifies the number of leading bits of the IP address to use when generating the resulting count.

The `start window` and `end window` are numbers in the range 0 through `number`-1. Window number 0 is always the current window, while window number `number`-1 is always the oldest window. If neither start or end window is specified, the count from the current time window will be returned. If just one window is provided, the count from that window will be returned. If the start and end window are both provided, the aggregate count for that window range will be returned.

There are two forms for this command. The first form takes positional arguments, and the second form takes named arguments, passed as keys with their corresponding values in a hash. In the second form, these keys are supported:

<dl className="variablelist">

<dt>series</dt>

<dd>

A string identifying the series, for example, "mycounter".

</dd>

<dt>monitor</dt>

<dd>

A string identifying the `interval,number`, e.g., "300,6".

</dd>

<dt>period_start</dt>

<dd>

Starting window number. The default is 0, which is the chronologically current window. For example, if the monitor is "300,6" then the six windows are numbered 0 (current) through 5 (oldest).

</dd>

<dt>period_end</dt>

<dd>

Ending window number. It defaults to the value of `period_start`. If this key is specified, its value is a window number (which should be equal to or greater than period_start). The result will be an aggregate sum over the window range.

</dd>

<dt>mask</dt>

<dd>

Mask to apply to the IP address of the current inbound SMTP session (or the given IP address if `ip` is specified). This determines the CIDR block that is the basis of the resulting count. The mask defaults to 32.

</dd>

<dt>ip</dt>

<dd>

IP address to query. If this is not specified, the remote side of the current active connection is used.

</dd>

</dl>

### Note

This feature requires the inbound_audit module. See [Section 14.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit "14.41. inbound_audit – Inbound traffic analytics") for more information.

<a name="example.audit_series"></a>

**Example 16.6. audit_series example (first form)**

```
$mycounter = audit_series "mycounter" "1800,3" "32";
$c_mycounter = audit_series "mycounter" "1800,3" "24";
if ec_test :value "gt" :comparator "i;ascii-numeric" "${mycounter}" "1000" {
  ec_tarpit 10 "too much /32";
}

if ec_test :value "gt" :comparator "i;ascii-numeric" "${c_mycounter}" "10000" {
  ec_tarpit 10 "too much /24";
}
```

<a name="example.audit_series.second"></a>

**Example 16.7. audit_series example (second form)**

```
$args = hash_create;
hash_set $args "series" "mycounter";
hash_set $args "monitor" "300,6";
hash_set $args "period_start" 0;
hash_set $args "period_end" 2;
hash_set $args "mask" 32;
$count = audit_series $args;

if ec_test :value "gt" :comparator "i;ascii-numeric" "${count}" "1000" {
  ec_tarpit 10 "too much /32 in last fifteen minutes";
}
```

| [Prev](sieve.ref.audit_connections_on_service)  | [Up](sieve.ref.files) |  [Next](sieve.ref.audit_series_add) |
| audit_connections_on_service  | [Table of Contents](index) |  audit_series_add |
