| [Prev](conf.ref.bounce_suppress_list)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.capabilities) |

<a name="conf.ref.bounces_inline_original"></a>
## Name

bounces_inline_original — how much of the original message to include in MDNs

## Synopsis

`bounces_inline_original = "headers"`

`bounces_inline_original = "none"`

`bounces_inline_original = "all"`

<a name="idp23795280"></a>
## Description

If the system has been configured to generate bounce messages for failed deliveries, the bounce message will start with a brief description of the error followed by some information about the original message.

The parameters control which, if any, parts of the original message are included in the bounce message.

<dl className="variablelist">

<dt>none</dt>

<dd>

causes the original message to be omitted from the bounce message.

</dd>

<dt>headers</dt>

<dd>

causes only the headers of the original message to be appended to the bounce message.

</dd>

<dt>all</dt>

<dd>

causes the entire original message, including headers, to be appended to the bounce message.

</dd>

</dl>

The default value is `headers`.

<a name="idp23804928"></a>
## Scope

bounces_inline_original is valid in the binding, binding_group, domain, and global scopes.

| [Prev](conf.ref.bounce_suppress_list)  | [Up](config.options.ref) |  [Next](conf.ref.capabilities) |
| bounce_suppress_list  | [Table of Contents](index) |  capabilities |

