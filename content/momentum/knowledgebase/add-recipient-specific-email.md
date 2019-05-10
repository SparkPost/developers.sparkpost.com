# How do I add a recipient on a message to a specific email address?

This is an example lua script, which come as is, showing how to achieve that:

```
require("msys.core");
require("msys.dumper");
require("msys.extended.message");
require("msys.extended.vctx");local mod = {};

function mod:validate_data(str, accept, vctx)
  local rcluser = msys.core.string_new();
  local rcdom= msys.core.string_new();
  local mc = msys.core.accept_construct_get_message_construct(accept);
  local msg = mc.message;
  msg:get_envelope2(msys.core.EC_MSG_ENV_TO, rcluser, rcdom);
  local myLocalpart = tostring(rcluser);
--  print ("RCUser :",myLocalpart,":");
--  print ("RCDom : ",rcdom.buffer);
  if (myLocalpart == "user") then       vctx:add_recipient("user@example.com");
    print ("Added the additional recipient to the oob");
  end    local addrs = vctx:recipient_list();
  print ("Recipient list : ",msys.dumper.Dumper(addrs));
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_data", mod);
```
