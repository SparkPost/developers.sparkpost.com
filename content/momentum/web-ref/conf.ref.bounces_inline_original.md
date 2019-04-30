|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_suppress_list)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.capabilities.php) |

<a name="conf.ref.bounces_inline_original"></a>
## Name

bounces_inline_original — how much of the original message to include in MDNs

## Synopsis

`bounces_inline_original = "headers"`

`bounces_inline_original = "none"`

`bounces_inline_original = "all"`

<a name="idp8476256"></a>
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

The default value for this option is `headers`.

<a name="idp8485024"></a>
## Scope

bounces_inline_original is valid in the binding, binding_group, domain and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_suppress_list)  | [Up](conf.ref.files.php) |  [Next](conf.ref.capabilities.php) |
| bounce_suppress_list  | [Table of Contents](index) |  capabilities |
