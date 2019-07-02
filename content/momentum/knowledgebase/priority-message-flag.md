# How Do I use the priority message flag?

Lua Sample Code:

```
require 'msys.core'
require 'msys.extended.message'
local mod = {}
 
function mod:validate_set_binding(msg)
  print("mod:validate_set_binding: Setting msg priority to 1")
  msg.priority = 1;
end
msys.registerModule('binder', mod)  
```
 

To read the flag, just use msg.priority when you need the value. The message priority is set to 0 when a message is created. Setting message priority to 1 means this is a high priority message. Message priority is a bit field in the ec_message struct, so the only valid values are 0 and 1. When a message priority is set to high, that message will get pulled first from whatever queue it is on. Normally, messages are pulled from the queue in the order they were added to the queue.

**Note**: it is important to not *overuse* the priority setting. High priority messages should be reserved for messages that need to go out immediately, before other messages in the MTA. Keeping high priority messages to a low percentage of the total message volume is important so the high priority messages do not cause delays of the normal priority messages. 

An example of using high priority messages is sending out password resets in the midst of a major mail campaign, where you need the password resets to go out ASAP despite the large volume of normal messages being sent.
