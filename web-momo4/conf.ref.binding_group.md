| [Prev](conf.ref.binding_auto_replumb_interval)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.blackhole) |

<a name="conf.ref.binding_group"></a>
## Name

binding_group — logically group a set of bindings

<a name="idp23642720"></a>
## Description

```
binding_group "example" {
  # binding_group-specific settings
}
```

The `binding_group` stanza is a logical container, which allows you to group bindings together and conveniently collect common configuration options without repeating them throughout your configuration file. The group name is an arbitrary string and holds no particular semantic value beyond being a symbolic identifier for the group.

The following is an example of a `binding_group` stanza:

```
binding_group "group1" {
  max_outbound_connections = 5

  binding "example" {
    bind_address = "10.10.10.10"
  }

  binding "example2" {
    bind_address = "10.10.10.11"
  }
}
```

Note that you can specify the same group multiple times, which is useful if you have structured your configuration into a series of include files:

```
binding_group "group1" {
  max_outbound_connections = 5

  binding "example" {
    bind_address = "10.10.10.10"
  }
}
# Perhaps this piece is included from an auxillary configuration file
binding_group "group1" {
  binding "example2" {
    bind_address = "10.10.10.11"
  }
}
```

### Note

Binding group names are case-sensitive and spaces are not allowed in binding group names.

There is no upper limit to the number of bindings that can be in a binding group. When Adaptive Delivery is enabled, a large number of bindings in a binding group will affect performance since significant CPU time is spent checking for suspended bindings. For this reason the recommended best practice, when using the [adaptive module](modules.adaptive "71.3. adaptive – Adaptive Delivery"), is not to exceed 32 bindings per binding group.

<a name="conf.ref.bindinggroup.default"></a>
## `default` Binding Group

The `default` binding_group is a special case of a binding group scope. This binding group exists without being explicitly defined.

However, if you wish, you can explicitly create the `default` binding_group scope and set options in that scope, as follows:

```
binding_group "default" {
  ehlo_hostname = "example.com"
}
```

The `default` binding_group behaves in the same way as the `default` binding. For more information, see [the section called “`default` Binding”](conf.ref.binding#conf.ref.binding.default "default Binding").

<a name="idp23658336"></a>
## Scope and Valid Options

`binding_group` is valid in the global scope.

For a complete list of options valid in the binding_group scope, refer to [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .

<a name="idp23662272"></a>
## See Also

[binding](conf.ref.binding "binding")

| [Prev](conf.ref.binding_auto_replumb_interval)  | [Up](config.options.ref) |  [Next](conf.ref.blackhole) |
| binding_auto_replumb_interval  | [Table of Contents](index) |  blackhole |

