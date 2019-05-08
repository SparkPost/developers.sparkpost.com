#How do I change an Adaptive Suspension defaulf configuration using the adaptive_override.lua?

You can change the duration for the AD suspension from the default configuration.Let's take yahoo.com as an example: according to the adaptive_rules.lua file, it is a 2 hours suspension and you want to change it to 45 minutes.

You have to copy what is on the yahoo.com on the adaptive_rules.lua file, place on the adaptive_override lua ( https://support.messagesystems.com/docs/web-ad/ad.custom.rules.php ) file and change it.

 

This is how it is on the adaptive_rules.lua file:

 

```
["yahoo.com"] = {
rules = { 
code = "^554 Message not allowed",
trigger = "1",
action = {"suspend", "2 hours"},
message = "IP blocked, remediation with Yahoo.com required",
 },
}
```

And you add this on the adaptive_override.lua file:

 
```
require("msys.adaptive");
local custom_rules = {
["yahoo.com"] = {
rules = {
code = "^554 Message not allowed",
trigger = "1",
action = {"suspend", "45 minutes"},
message = "IP blocked, remediation with Yahoo.com required",                   
},
},
configuration = { }, }
msys.adaptive.registerRules(rules, "augment");
```

Then you will need to ensure that the lua file that has been created is listed in the scriptlets stanza 

Note the change on the action line from 2 hours to 45 minutes.