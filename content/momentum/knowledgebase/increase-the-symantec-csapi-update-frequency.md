#Increase the Symantec CSAPI update frequency
 

###Increase the default Symantec Content Scanning API - CSAPI virus definition update frequency.

By default, the update interval is one day set in seconds as 86400.
As per the documentation here; https://support.messagesystems.com/docs/web-ref/modules.csapi.php a configuration example is shown 14.36.
Include the update_interval = 1800 option to enable the update to take place every 30 minutes, provided of course that the upstream content is in fact newer.  
A good idea would be to set the update times to coincide or be just after the upstream content is updated. 

An example from the documents with the update_interval option included. 
 
```
csapi {}
# note that this module is
# also nested inside the antivirus module
antivirus "antivirus1" {
 csapi "csapi1" {
 enabled = false
 action = "pass"
 context_variable = "csapi_status"
 skip_context_variable = "skip_virus_check"
 maconcurrency = 5
 update_interval = 1800
 }
}
```
