| [Prev](sieve.ref.audit_series_add)  | 16.2. Sieve Function Details |  [Next](sieve.ref.brightmail) |

<a name="sieve.ref.audit_service"></a>
## Name

audit_service — Return how many connections currently are established from a CIDR block to an arbitrary service

## Synopsis

`audit_service` { *`service_name`* } { *`address/mask`* }

<a name="idp28744208"></a>
## Description

`audit_service` returns a stringlist containing a single member, which is a string containing the number of connections the CIDR block provided currently has established to the provided service. If the provided service is "SMTP" then the behavior is identical to `audit_connections_on_service`. If you have the cluster module loaded, then you can query the "inbound_cidr" service to audit connections to the whole cluster instead of just one server. In the address/mask argument, address may be omitted to cause the action to use the current IP address instead. In that case, one could provide an argument of "/32" or "/24" to get the current connections for the IP address currently connecting or for the /24 CIDR block of the IP address currently connecting.

### Note

As of version 3.4, this feature supports IPv6.

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

Services that may be audited are:

*   `ECStream`

*   `SMTP`

*   `Control`

*   `ECmmove2` (The service that handles duravip message moves.)

*   `ECCluster`

*   `inbound_cidr`

### Note

This feature requires the inbound_audit module. See [Section 14.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit "14.41. inbound_audit – Inbound traffic analytics") for more information.

<a name="example.audit_service"></a>

**Example 16.10. audit_service example**

```
($connections) = audit_service "inbound_cidr" "/32";
($c_connections) = audit_service "inbound_cidr" "/24";
if ec_test :value "gt" :comparator "i;ascii-numeric" "${connections}" "1000" {
  ec_tarpit 10 "too many connections /32";
}

if ec_test :value "gt" :comparator "i;ascii-numeric" "${c_connections}" "10000" {
  ec_tarpit 10 "too many connections /24";
}
```

| [Prev](sieve.ref.audit_series_add)  | [Up](sieve.ref.files) |  [Next](sieve.ref.brightmail) |
| audit_series_add  | [Table of Contents](index) |  brightmail |
