| [Prev](console_commands.help)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.memory) |

<a name="console_commands.mailq"></a>
## Name

mailq — show the status of the mail queues

## Synopsis

`mailq` [ --domain | -d *`domain_name`* ... ] [ --binding | -b *`binding_name`* ... ] [ --limit | -l *`number`* ]

<a name="idp14813776"></a>
## Description

When issued with no arguments this command shows counts for the active queue and the delayed queues sorted by binding groups and bindings. Sample output is shown below:

```
Group/Binding                                       Domain      AQ      DQ
--------------------------------------------------------------------------
default/default                                  yahoo.com      11       0
default/gmail                                    gmail.com      25       5
default/#mmove                                   gmail.com       0       0
```

The `Group/Binding` column shows the group and the binding that a domain belongs to. The `default/#move` entry under the `Group/Binding` column is the cluster message movement binding in the `default` binding. This is a virtual binding for moving messages between nodes. `AQ` shows the items in the active queue and `DQ` shows the items in the delayed queue.

Use this command with the `--domain` *`domain_name`* argument to show the statistics for a specific domain. Any number of domains may be specified. The `--binding` option is used in the same way. Limit the output by using the --limit *`number`* option. The default value for `--limit` is `20`.

| [Prev](console_commands.help)  | [Up](console.cmds.ref) |  [Next](console_commands.memory) |
| help  | [Table of Contents](index) |  memory |

