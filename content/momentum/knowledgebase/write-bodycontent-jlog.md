
# How to write entire message body/content into Jlog

You can view contents of an individual message by using the message details command in ec\_console. 

Please note that message details cannot show details for a message that is in the process of being delivered. For more info go here:
[https://support.messagesystems.com/docs/web-momo4/console_commands.message_details.php
]()

```
local mod = {};
require("msys.core");
require('msys.extended.message');
  
local jlog;
local jlog_mutex;`
  
function mod:validate_data_spool_each_rcpt (msg, accept, vctx)
  local body = msg:raw();
  local rcptto = msg:rcptto();
  
  if (string.match(rcptto, "^|.*@netlogmail.com$") ~= nil) then
  
--doing concurrent writes with the same jlog causes jlog to crash (https://jira.int.messagesystems.com/browse/ESC-296?focusedCommentId=252642&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-252642)
    
    jlog_mutex:lock()
    
    if (jlog == nil) then
      jlog = msys.core.io_wrapper_open("jlog:///var/log/ecelerity/bounces.jlog=>master", msys.core.O_CREAT | msys.core.O_APPEND | msys.core.O_WRONLY, 0660);
    end
    
    jlog:write(body, #body);
    jlog_mutex:unlock()
    msg:discard();
    return msys.core.VALIDATE_DONE;
  else
    return msys.core.VALIDATE_CONT;
  end
end
  
function mod:init()
  jlog_mutex = thread.mutex()
  return true
end
msys.registerModule("write_jlog", mod);```
