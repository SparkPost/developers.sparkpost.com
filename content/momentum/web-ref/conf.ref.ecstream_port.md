| [Prev](conf.ref.drop_body_after_trans_fail)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.ecstream_timeout.php) |

<a name="conf.ref.ecstream_port"></a>
## Name

ecstream_port — configure the port for ecstream deliveries

## Synopsis

`ecstream_port = 1825`

<a name="idp9484704"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.2.

When Momentum is set to [perform delivery via ecstream](conf.ref.delivery_method "delivery_method"), this option sets the *destination* port that will be used. The default value for this option is `1825`.

<a name="conf.ref.ecstream_port.example"></a>

**Example 9.9. ecstream_port example**

```
domain “gold.example.com” {
  delivery_method = "ECSTREAM"
  ecstream_port = 31337
}
```

<a name="idp9493536"></a>
## Scope

ecstream_port is valid in the binding, binding_group, domain and global scopes.

<a name="idp9495216"></a>
## See Also

[delivery_method](conf.ref.delivery_method "delivery_method")

| [Prev](conf.ref.drop_body_after_trans_fail)  | [Up](conf.ref.files.php) |  [Next](conf.ref.ecstream_timeout.php) |
| drop_body_after_trans_fail  | [Table of Contents](index) |  ecstream_timeout |
