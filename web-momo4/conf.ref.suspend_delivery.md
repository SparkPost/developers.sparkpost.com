| [Prev](conf.ref.supplemental_groups)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.tcp_buffer_size) |

<a name="conf.ref.suspend_delivery"></a>
## Name

suspend_delivery — prevent outbound mail delivery

## Synopsis

`Suspend_Delivery = "false"`

<a name="idp26800496"></a>
## Description

When set to `true`, this directive forces Momentum not to attempt any deliveries in the scope it is configured. Default value is `false`.

The following example suspends delivery for a specific binding within a binding_group:

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

Within a binding_group, non-suspended bindings are preferred over suspended bindings. In the example above, messages will not be queued for binding `example1`.

You can suspend delivery from the system console by issuing the command: **config set [*`scope`* *`scope_name`*] Suspend_Delivery true**                                                     . This can be useful for temporarily suspending deliveries for a specific domain. Setting `Suspend_Delivery` to `false` will resume delivery for all queued messages.

### Note

Note that using this option in the global scope also suspends the `#mmove` function that transfers messages between nodes in a cluster configuration.

You can also suspend delivery for the `default` binding by using configuration below:

```
binding "default" {
  suspend_delivery = true
}
```

For more information on the default binding, see [the section called “`default` Binding”](conf.ref.binding#conf.ref.binding.default "default Binding").

<a name="idp26812432"></a>
## Scope

`suspend_delivery` is valid in the binding, binding_group, domain, and global scopes.

<a name="idp26814736"></a>
## See Also

[binding](conf.ref.binding "binding"), [Section 27.2, “`duravip_follow` and the #mmove Binding”](cluster.config.mmove "27.2. duravip_follow and the #mmove Binding"), [default_binding](conf.ref.default_binding "default_binding")

| [Prev](conf.ref.supplemental_groups)  | [Up](config.options.ref) |  [Next](conf.ref.tcp_buffer_size) |
| supplemental_groups  | [Table of Contents](index) |  tcp_buffer_size |

