|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.supplemental_groups)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.tcp_buffer_size.php) |

<a name="conf.ref.suspend_delivery"></a>
## Name

suspend_delivery — prevent outbound mail delivery

## Synopsis

`Suspend_Delivery = "false"`

<a name="idp11936352"></a>
## Description

When set to `true`, this directive forces Momentum not to attempt any deliveries at all in the scope it is configured. The default value is `false`. The following example suspends delivery for a specific binding within a binding_group:

```
Binding_Group "ExampleGroup" {
  Suspend_Delivery = "false"
  Binding "example1"
  {
    Bind_Address = "10.10.10.10"
    Suspend_Delivery = "true"
  }
  Binding "example2"
  {
    Bind_Address = "10.10.10.11"
  }

  ...
}
```

Within a binding group, non-suspended bindings are preferred over suspended bindings so in the example above, messages will not be queued for binding "example1".

You can suspend delivery from the system console by issuing the command: **config set [*`scope`* *`scope_name`*] Suspend_Delivery true**                                                     . This can be useful for temporarily suspending deliveries for a specific domain. Setting `Suspend_Delivery` to `false` will resume delivery for all queued messages.

### Note

Note that using this option in the global scope also suspends the `#mmove` function that transfers messages between nodes in a cluster configuration. If you wish to suspend delivery for the default binding, also see [the section called “The "default" Binding”](conf.ref.binding#conf.ref.binding.default "The "default" Binding").

<a name="idp11945408"></a>
## Scope

`suspend_delivery` is valid in the binding, binding_group, domain and global scopes.

<a name="idp11947488"></a>
## See Also

[binding](conf.ref.binding "binding"), [Section 7.5.2, “`duravip_follow` and the #mmove Binding”](cluster.config.duravip.php#cluster.config.mmove "7.5.2. duravip_follow and the #mmove Binding"), [default_binding](conf.ref.default_binding.php "default_binding")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.supplemental_groups)  | [Up](conf.ref.files.php) |  [Next](conf.ref.tcp_buffer_size.php) |
| supplemental_groups  | [Table of Contents](index) |  tcp_buffer_size |
