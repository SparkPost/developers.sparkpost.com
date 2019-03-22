| [Prev](lua.ref.msg_listener_addr)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_context_delete) |

<a name="lua.ref.msg_reception_peer"></a>
## Name

msg:reception_peer — Get the `recv_from` IP and/or PORT.

<a name="idp15869744"></a>
## Synopsis

`require('msys.extended.message')`

`msg:reception_peer(flag);`

`flag: string (optional)`<a name="idp15873472"></a>
## Description

This function returns the IP and/or PORT of the remote injection source. In particular, it returns the component of the sockaddr, in human-readable form, as indicated by the flag. The value of the flag parameter can be `ip`, `port` or `all`. The default input parameter is `all`. That is, if `flag` is `nil`, then this returns the same string as if `all` was passed as the parameter.

<a name="lua.ref.msg_reception_peer.example"></a>

**Example 70.28. msg:reception_peer example**

```
require("msys.extended.message");

local mod = {};

function mod:validate_data(msg, ac, vctx)
  print(msg:reception_peer('ip'));
    -- "10.1.2.3"
  print(msg:reception_peer('port'));
      -- "25"
  print(msg:reception_peer('all'));
      -- "10.1.2.3:25"
  print(msg:reception_peer()); -- defaults to 'all'
      -- "10.1.2.3:25"
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("myMod", mod);
```

<a name="idp15881632"></a>
## See Also

[msg:listener_addr](lua.ref.msg_listener_addr "msg:listener_addr")

| [Prev](lua.ref.msg_listener_addr)  | [Up](lua.function.details) |  [Next](lua.ref.msg_context_delete) |
| msg:listener_addr  | [Table of Contents](index) |  msg:context_delete |

