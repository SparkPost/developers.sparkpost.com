|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_address_header)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_binding_group) |

<a name="lua.ref.msg_binding"></a>
## Name

msg:binding — Set or get the message binding

<a name="idp16645104"></a>
## Synopsis

`msg:binding(...);`

`...: mixed, optional`<a name="idp16648064"></a>
## Description

Set the binding to the specified parameter. When you set a binding, the binding name is also the return value of this function. This function returns `nil` if the binding parameter is invalid. The binding you set must exist in your `ecelerity.conf` file. When no parameter is passed, this function returns the binding name or `nil` if the message is not associated with a binding. *This will only take a single string binding name* .

You can use this function to set the binding to the `default` binding. For more information see [the section called “`default` Binding”](conf.ref.binding#conf.ref.binding.default "default Binding").

### Warning

Only use this function in the `validate_set_binding` callout. Its behavior in other callouts is undefined.

Enable this function with the statement `require('msys.extended.message');`.

<a name="lua.ref.msg_binding.example"></a>

**Example 70.41. msg:binding example**

```
require('msys.core');
require('msys.extended.message');

local mod = {};

function mod:validate_set_binding(msg)
  local localpart_str = msys.core.string_new();
  local domain_str = msys.core.string_new();
  msg:get_envelope2(msys.core.EC_MSG_ENV_FROM, localpart_str, domain_str);
  local domain = tostring(domain_str);
  localpart_str = nil;
  if msys.pcre.match(domain, "mydomain.com") then
    msg:binding("mydomain");
  end
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_set_binding", mod);
```

<a name="idp16658640"></a>
## See Also

[msg:binding_group](lua.ref.msg_binding_group "msg:binding_group")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_address_header)  | [Up](lua.function.details) |  [Next](lua.ref.msg_binding_group) |
| msg:address_header  | [Table of Contents](index) |  msg:binding_group |

