| [Prev](conf.ref.debug_flags)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.default_charset) |

<a name="conf.ref.default_binding"></a>
## Name

default_binding — control usage of the "default" binding

## Synopsis

`default_binding = "normal"`

`default_binding = "suspended"`

`default_binding = "none"`

<a name="idp24174192"></a>
## Description

The default binding is the binding that a message belongs to when no other binding applies. The default value is `normal`.

If you are using MultiVIP© interfaces, you may want to use one of the following options rather than the 'default' binding:

*   If `default_binding` is set to `none`, then messages that would fall into the default binding will generate a 451 transient failure back to the generating software.

*   If `default_binding` is set to `suspended`, you can suspend delivery for the default binding using the [suspend_delivery](conf.ref.suspend_delivery "suspend_delivery") option.

<a name="idp24181936"></a>
## Scope

`default_binding` is valid in the global scope.

<a name="idp24184192"></a>
## See Also

[suspend_delivery](conf.ref.suspend_delivery "suspend_delivery"), [binding](conf.ref.binding "binding"), and [the section called “`default` Binding”](conf.ref.binding#conf.ref.binding.default "default Binding")

| [Prev](conf.ref.debug_flags)  | [Up](config.options.ref) |  [Next](conf.ref.default_charset) |
| debug_flags  | [Table of Contents](index) |  default_charset |

