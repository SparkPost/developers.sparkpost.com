|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.binding_active)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.binding_fail_domain) |

<a name="console_commands.binding_delayed"></a>
## Name

binding delayed — show domains with delayed queue size bigger than threshold on a specified binding

## Synopsis

`binding delayed` { *`binding_name`* } { *`threshold`* }

<a name="idp11825856"></a>
## Description

The **binding delayed**         command presents information concerning the domains on a particular binding with a large number of delayed messages in queue. The command takes a binding name and a single positive integer as an argument which specifies the threshold of interest. The output will include all domains on the given binding whose delayed queues exceed the integer specified.

```
10:47:35 /tmp/2025> binding delayed BINDING1 1000
Domain:                   mailcity.com  C:  0  A:      9  D:  1169  S: 16838
Domain:                   peoplepc.com  C:  0  A:    575  D:  1180  S:  7735
Domain:                       sina.com  C:  3  A:      1  D:  1232  S:  1069
                                Total:  C: 532  A:  22692  D: 34915  S:1953716
```

<dl className="variablelist">

<dt>C</dt>

<dd>

current number of connections

</dd>

<dt>A</dt>

<dd>

current size of the active queue

</dd>

<dt>D</dt>

<dd>

current size of the delayed queue

</dd>

<dt>S</dt>

<dd>

total messages sent during the life of the domain record

</dd>

</dl>

The row detailing the totals represents the totals across *all* domains on the given binding, not just those listed.

<a name="idp7771344"></a>
## See Also

[binding active](console_commands.binding_active "binding active")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.binding_active)  | [Up](console.cmds.ref) |  [Next](console_commands.binding_fail_domain) |
| binding active  | [Table of Contents](index) |  binding fail domain |

