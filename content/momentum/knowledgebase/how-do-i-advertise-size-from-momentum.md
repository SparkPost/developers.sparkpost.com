# How do I advertise SIZE from Momentum?

RFC 1870 ( http://tools.ietf.org/html/rfc1870  ) describes a mechanism for a mail server to advertise the maximum message size it will accept in the EHLO response. Momentum does not advertise size by default.

To advertise SIZE, you add ac:esmtp_capability_add to your default policy ( https://developers.sparkpost.com/momentum/web-momo4/lua.ref.ac_esmtp_capability_add/ ). That will advertise the maximum size of message that you will accept, in bytes. For example:

```
3require("msys.core");
require("msys.extended.message");
require("msys.extended.ac");

local mod = {};
function mod:validate_connect(ac, vctx)
  ac:esmtp_capability_add("SIZE 104857600");
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("validate_connect", mod);
```

Advertising SIZE will not take action on a message which is too large. To take action, after the DATA phase you could check the size of the message using the message size function ( https://developers.sparkpost.com/momentum/web-momo4/lua.ref.msg_get_message_size/  ); if it is too large, reject it using set_code ( https://developers.sparkpost.com/momentum/web-momo4/lua.ref.vctx_set_code/ ). For example:

```
local mod = {};
function mod:validate_data (msg, accept, vctx)
  if msg:get_message_size() > 104857600 then
    vctx:set_code(550, "552 Message size exceeds fixed maximum message size");
  end;
 return msys.core.VALIDATE_DONE;
end
msys.registerModule("data", mod);
```
