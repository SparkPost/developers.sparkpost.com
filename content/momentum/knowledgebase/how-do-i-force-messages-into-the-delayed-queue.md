# How do I force messages into the delayed queue?

Sometimes clients may need to force email messages into the delayed queue.  A good example of this can be a customer who has a destination that was heavily throttled, and wouldn't throw back errors but rather just threw away messages that were over the limit.  If the throttles are heavy, and the target userbase is extremely large, this can cause heavy flooding of the active queues.  By pushing emails for these domains into the delayed queue this could be avoided.

 
**Delay Emails for a Domain**

```
require("msys.core");
 
local mod = {};
 
msys.registerControl("delay_domain", delay_domain);
 
local function delay_domain(cc)
  local domain = cc.argv[1];
  local dr = msys.core.dns_get_domain(domain);
 
   if dr ~= nil then
        print ("Domain delayed as requested");
        msys.core.mail_queue_delay_domain(dr, "451 4.4.1 [internal] manually delayed domain]");
  end
end
 
function mod:init()
  return true
end
 
msys.registerModule("delaydom", mod);
```

In order for this to work, you will need to instantiate this and then inside the ec_console you can then execute the following command:

*delay_domain \<domain>*

As seen in the above script the print statement will respond with "Domain delayed as requested" and in the mainlog.ec there will be entries that look as follows:

*1377461737@40/00-10755-1AB5A125@40/00-10755-1AB5A125@40/00-10755-89B5A125@T@messagesystems.com@0@default@default@22@1@2631.00@@451 4.4.1 [internal] manually delayed domain]*