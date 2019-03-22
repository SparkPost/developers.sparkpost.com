| [Prev](sieve.ref.ec_set_binding)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_shared_throttle) |

<a name="sieve.ref.ec_set_routing_gateway"></a>
## Name

ec_set_routing_gateway — dynamically change the gateway based on recipient

## Synopsis

`ec_set_routing_gateway` { *`address`* }

<a name="idp30530000"></a>
## Description

This action sets the gateway for the message in much the same way as the [gateway](conf.ref.gateway "gateway") configuration option; the message will be queued to the domain specified by the gateway. A gateway set with this action will override a possible Gateway configuration setting that would otherwise be applicable to the message. See also [routes](conf.ref.routes "routes") for domain-wide routing. The headers and the body of the message will not be changed.

The required *`address`* parameter can be either a dotted literal IP address, a hostname that resolves to an A record, or a domain name which resolves to one or more MX records.

Sieve scripts using `ec_set_routing_gateway` should be called in the each_rcpt_phase only.

<a name="example.ec_set_routing_gateway"></a>

**Example 16.93. set_routing_gateway example**

```
if envelope :domain :is "to" "do-set_routing_gateway.com" {
  ec_set_routing_gateway "foo.com";
  }
```

### Note

In order to prevent I/O on the scheduler, when using `ec_set_routing_gateway`, the [keep_message_dicts_in_memory](conf.ref.keep_message_dicts_in_memory "keep_message_dicts_in_memory") option should be set to true.

### Warning

The sievelib module must be loaded explicitly in your configuration for correct operation of `ec_set_routing_gateway`.

<a name="idp30541616"></a>
## See Also

[gateway](conf.ref.gateway "gateway"), [routes](conf.ref.routes "routes")

| [Prev](sieve.ref.ec_set_binding)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_shared_throttle) |
| ec_set_binding  | [Table of Contents](index) |  ec_shared_throttle |
