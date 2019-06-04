# How do I create an MDN (Message Disposition Notification) in Lua?
 

A Message Disposition Notification is a message which is sent back to the e-mail's originating MTA telling the sender whether the mail was delivered, read, discarded, etc. It also can report the reason for the disposition, especially in the cases of bounces or other discard actions. The short snippet of Lua below could be used as a framework to create MDNs.

```
require('msys.extended.message');
require('msys.rfc3464');

local mod = {};

function mod:core_log_permanent_failure_v1 (msg, dr, now, str)

-- We will assign these two variables using the msg struct passed to thisfunction. see: https://support.messagesystems.com/docs/web-c-api/structs.ec_message.php

--$failed_addr = envelope :all "to";
local failed_addr = msg:rcptto();
--$to = envelope :all "from";
local to = msg:mailfrom();
--$from = "postmaster@abuse.domain.com";
local from = "postmaster@abuse.domain.com";

--# Don't bounce to the nullsender or ourselves.
--ifec_test :is ["", $from] $to {
--stop;
--}

ifto == ""or to == from then
  return0;
end

--$report = ec_rfc3464_delivery_status;

-- generate an MDN message forthe permfail:
local report = msys.rfc3464.create_mdn(msg,msys.core.FAILED);

--save the localized text you want to include in thisMDN to a variable:
local boilerplate = "An e-mail sent from your e-mail address could not be delivered.";

-- Inspect the MIME tree to find the part with the "here's why your message failed":
local p =  report:mime(1);
  whilep != nil do
    local type = p:content_type();
    iftype.mimetype == "text/plain"then
            -- nil check to avoid stack traces from concatenating nil string
            ifp:text() != nil then
                --ifwe have thisstring in the text of the current MIME part, then it's the one we want to change
                ifstring.match(p:text(), "This message was created automatically by the mail system") then
                    --save the current text to a variable
                    local ndn_textpart = p:text();
                    --prepend the text of thispart with your boilerplate text
                    p:text(boilerplate .. ndn_textpart);
                end
            end
        end
    p = p.thread -- to move on to the next part
  end
 
print(report:body()); -- fordebugging purposes

report:inject(from, to); --send it!

end
msys.registerModule("custom_mdn", mod);
```


