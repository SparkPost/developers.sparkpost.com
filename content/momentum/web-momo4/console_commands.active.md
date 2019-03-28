| [Prev](console.cmds.ref)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.authz_id) |

<a name="console_commands.active"></a>
## Name

active — show domains with active queue size bigger than threshold

## Synopsis

`active` { *`threshold`* }

<a name="idp13276592"></a>
## Description

The **active** command presents information concerning the domains with a large number of active messages in queue. The command takes a single positive integer as an argument which specifies the threshold of interest. The output will include all domains whose active queues exceed the integer specified.

```
10:57:39 ecelerity> active 100
Domain:                         c4.com  C:  0  A:    104  D:     0  S:    47
Domain:                    dellnet.com  C:  0  A:    102  D:   460  S:  1540
Domain:                  earthlink.com  C: 60  A:    315  D:   192  S:  1957
Domain:                    iopener.net  C:  0  A:    124  D:   200  S:   860
Domain:                        jps.net  C: 29  A:    114  D:   471  S:  2561
Domain:                         pa.net  C: 30  A:    119  D:    31  S:   274
Domain:                   peoplepc.com  C:  0  A:    473  D:  1262  S:  7758
Domain:                 sprintmail.com  C: 32  A:    120  D:    71  S:   898
Domain:                   xoommail.com  C:  0  A:    102  D:     0  S:    55
Domain:                      yesic.com  C:  0  A:    124  D:     0  S:    56
                                Total:  C: 616  A:  22965  D: 34427  S:1954767
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

The row detailing the totals represents the totals across *all* domains, not just those listed.

|     |     |     |
| --- | --- | --- |
| [Prev](console.cmds.ref)  | [Up](console.cmds.ref) |  [Next](console_commands.authz_id) |
| Chapter 73. Non-Module-Specific Console Commands  | [Table of Contents](index) |  authz id |

