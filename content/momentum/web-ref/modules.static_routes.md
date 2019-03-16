| [Prev](modules.spf)  | Chapter 14. Modules Reference |  [Next](modules.stats_producer) |

## 14.70. static-routes - Static Routes

<a class="indexterm" name="idp21503216"></a>

**Configuration Change. ** This feature is available as beta in Momentum 3.6.5.

The `static_routes` module routes all traffic to a given server by IP address and port. It supports both IPv4 and IPv6.

This module performs much better than the [Routes configuration](https://support.messagesystems.com/docs/web-ref/conf.ref.routes) option. The Routes option is known to cause performance issues because it makes every domain in the system share connections. When domains share an MX, the system will try to find idle connections in other domain containers. When many domains share an MX, there are a lot of domains searching for idle connections, which slows the system down considerably

<a name="modules.static_routes.example"></a>

**Example 14.100. Example Configuration**

`static_routes {}`

and

```
static_routes
{
  target = "1.2.3.4:1234"
}
```

| [Prev](modules.spf)  | [Up](modules) |  [Next](modules.stats_producer) |
| 14.69. spf Modules – spf_macros, spf_v1 and senderid (SPF v2)  | [Table of Contents](index) |  14.71. statp – Stats Producer Module |
