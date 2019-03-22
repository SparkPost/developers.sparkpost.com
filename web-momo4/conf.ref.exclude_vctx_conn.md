| [Prev](conf.ref.events_per_iter)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.exclude_vctx_mess) |

<a name="conf.ref.exclude_vctx_conn"></a>
## Name

exclude_vctx_conn — exclude validation context keys from being journaled in the spool metadata.

## Synopsis

`Exclude_VCTX_Conn = ("regex$" "otherregex")`

<a name="idp24645824"></a>
## Description

With more advanced policy configurations, the aggregate size of the validation context data retained in memory may become significant, especially if `keep_message_dicts_in_memory` is enabled.

`Exclude_VCTX_Conn` allows you to specify a list of one or more Perl-compatible regular expressions. During swap out, the keys to the connection dictionary are compared against the patterns listed by `Exclude_VCTX_Conn`. If a key matches, then that data value will be deleted from the dictionary.

Note that keys that have special significance to the core product (these typically have a `#` prefix) can not be filtered by this module.

<a name="idp24651184"></a>
## Scope

Exclude_VCTX_Conn is valid in the global, binding, binding_group, and domain scopes.

<a name="idp24653056"></a>
## See Also

[exclude_vctx_mess](conf.ref.exclude_vctx_mess "exclude_vctx_mess"), [keep_message_dicts_in_memory](conf.ref.keep_message_dicts_in_memory "keep_message_dicts_in_memory")

| [Prev](conf.ref.events_per_iter)  | [Up](config.options.ref) |  [Next](conf.ref.exclude_vctx_mess) |
| events_per_iter  | [Table of Contents](index) |  exclude_vctx_mess |

