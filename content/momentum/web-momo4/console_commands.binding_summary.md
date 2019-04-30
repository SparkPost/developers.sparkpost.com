|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.binding_flush_domain)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.cache_list) |

<a name="console_commands.binding_summary"></a>
## Name

binding summary — show binding statistics

## Synopsis

`binding summary` [ *`<binding name>`*        | *`<binding slot>`*        | group:*`<binding group>`*         ]

<a name="idp14172528"></a>
## Description

**binding summary**         will produce metrics such as queue sizes, message counts and throughput rates since startup over all the bindings. If a specific binding name, binding slot or binding group name is given, the metrics will be for the specified binding or binding group.

```
10:47:35 /tmp/2025> binding summary
Summary Statistics For Binding default
        Open Connections:       0
        Active Queue Size:      0
        Total Queue Size:     12
        Successfully Delivered Messages:      0
        Failed Messages:      0
        Received Messages:      0
        Resident Messages:      0
        Delivery Rate:   0.00 messages/second
        Reception Rate:   0.00 messages/second
        Uptime:    590 seconds
Summary Statistics For Binding example
        Open Connections:       0
        Active Queue Size:      0
        Total Queue Size:      0
        Successfully Delivered Messages:    506
        Failed Messages:      0
        Received Messages:    506
        Resident Messages:      0
        Delivery Rate:   0.86 messages/second
        Reception Rate:   0.86 messages/second
        Uptime:    590 seconds
Summary Statistics For Binding example2
        Open Connections:       0
        Active Queue Size:      0
        Total Queue Size:      0
        Successfully Delivered Messages:    494
        Failed Messages:      0
        Received Messages:    494
        Resident Messages:      0
        Delivery Rate:   0.84 messages/second
        Reception Rate:   0.84 messages/second
        Uptime:    590 seconds

09:37:38 ecelerity(/tmp/2025)> binding summary example
Summary Statistics For Binding example
        Open Connections:       0
        Active Queue Size:      0
        Total Queue Size:      0
        Successfully Delivered Messages:    506
        Failed Messages:      0
        Received Messages:    506
        Resident Messages:      0
        Delivery Rate:   0.85 messages/second
        Reception Rate:   0.85 messages/second
        Uptime:    596 seconds

09:37:44 ecelerity(/tmp/2025)> binding summary group:group1
Summary Statistics For Binding example in Binding Group group1
        Open Connections:       0
        Active Queue Size:      0
        Total Queue Size:      0
        Successfully Delivered Messages:    506
        Failed Messages:      0
        Received Messages:    506
        Resident Messages:      0
        Delivery Rate:   0.84 messages/second
        Reception Rate:   0.84 messages/second
        Uptime:    602 seconds
Summary Statistics For Binding example2 in Binding Group group1
        Open Connections:       0
        Active Queue Size:      0
        Total Queue Size:      0
        Successfully Delivered Messages:    494
        Failed Messages:      0
        Received Messages:    494
        Resident Messages:      0
        Delivery Rate:   0.82 messages/second
        Reception Rate:   0.82 messages/second
        Uptime:    602 seconds

********************************************
Summary Statistics For Binding Group group1
        Open Connections:       0
        Active Queue Size:      0
        Total Queue Size:      0
        Successfully Delivered Messages:   1000
        Failed Messages:      0
        Received Messages:   1000
        Incore Messages:      0
        Delivery Rate:   1.66 messages/second
        Reception Rate:   1.66 messages/second
        Uptime:    602 seconds

09:37:50 ecelerity(/tmp/2025)>
```

<dl className="variablelist">

<dt>Open Connections</dt>

<dd>

The current number of established outbound sessions.

</dd>

<dt>Active Queue Size</dt>

<dd>

The number of messages in the system that require immediate delivery attempts.

</dd>

<dt>Total Queue Size</dt>

<dd>

The sum of all queues.

</dd>

<dt>Successfully Delivered Messages</dt>

<dd>

The number of messages successfully delivered by Momentum since it was started or since the last summary reset.

</dd>

<dt>Failed Messages</dt>

<dd>

The number of outbound messages permanently failed since it was started or since the last summary reset.

</dd>

<dt>Received Messages</dt>

<dd>

The number of message received by Momentum for deliver since it was started or since the last summary reset.

</dd>

<dt>Delivery Rate</dt>

<dd>

The average number of messages/second delivered (successful and unsuccessful) since Momentum was started or since the last summary reset.

</dd>

<dt>Reception Rate</dt>

<dd>

The avergage number of messages/second received for delivery since Momentum was started or since the last summary reset.

</dd>

<dt>Uptime</dt>

<dd>

The number of seconds that Momentum has been running continuously.

</dd>

</dl>

### Note

If the name you provide is a binding group, then the output will show a listing of all the bindings that are part of that group, followed by a summary for the group.

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.binding_flush_domain)  | [Up](console.cmds.ref) |  [Next](console_commands.cache_list) |
| binding flush domain  | [Table of Contents](index) |  cache list |

