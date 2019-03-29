|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.debug_flags)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.default_charset.php) |

<a name="conf.ref.default_binding"></a>
## Name

default_binding — control usage of the "default" binding

## Synopsis

`default_binding = "normal"`

`default_binding = "suspended"`

`default_binding = "none"`

<a name="idp8795600"></a>
## Description

The default binding is the binding that a message belongs to when no other binding applies. For more information see [the section called “The "default" Binding”](conf.ref.binding#conf.ref.binding.default "The "default" Binding").

For customers using MultiVIP© interfaces, it may be desirable never to use the 'default' binding. There are two options for this. If `Default_Binding` is set to `none`, then messages that would fall into the default binding will generate a 451 transient failure back to the generating software.

The default value for this option is `normal`

If you wish to suspend delivery for the default binding, do it in the following way:

```
binding "default" {
  suspend_delivery = true
}
```
<a name="idp8801712"></a>
## Scope

`default_binding` is valid in the global scope.

<a name="idp8803744"></a>
## See Also

[Section 4.6, “MultiVIP© Interfaces”](operations.multivip "4.6. MultiVIP© Interfaces"), [suspend_delivery](conf.ref.suspend_delivery.php "suspend_delivery"), [binding](conf.ref.binding.php "binding")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.debug_flags)  | [Up](conf.ref.files.php) |  [Next](conf.ref.default_charset.php) |
| debug_flags  | [Table of Contents](index) |  default_charset |
