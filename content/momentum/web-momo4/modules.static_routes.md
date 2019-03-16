| [Prev](modules.spf)  | Chapter 71. Modules Reference |  [Next](modules.suppress_spool) |

## 71.69. static-routes - Static Routes

<a class="indexterm" name="idp23182208"></a>

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The `static_routes` module routes all traffic to a given server by IP address and port. It supports both IPv4 and IPv6.

This module performs much better than the [routes](conf.ref.routes "routes") option, which is known to cause performance issues because it makes every domain in the system share connections. When domains share an MX, the system will try to find idle connections in other domain containers. When many domains share an MX, there are a lot of domains searching for idle connections, which slows the system down considerably.

<a name="modules.static_routes.example"></a>

**Example 71.94. Example Configuration**

`static_routes {}`

and

```
static_routes
{
  target = "1.2.3.4:1234"
}
```

| [Prev](modules.spf)  | [Up](modules) |  [Next](modules.suppress_spool) |
| 71.68. spf Modules – spf_macros, spf_v1, and senderid (SPF v2)  | [Table of Contents](index) |  71.70. suppress_spool – Deferred Message Spooling |

