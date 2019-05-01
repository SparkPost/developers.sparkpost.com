# How Do I Create a BCC Message?

When adding the "bcc" functionality to the messages, the impact or the load on the nodes would be directly proportional to the number of messages and the average number of "bcc" recipients in each message. For example, if the expected sending rate is 1M/hour and there is just one recipient in "bcc", the Momentum MTA nodes would be effectively handling 2M/hour traffic (2X load). Basically these messages injected from "bcc" are like any normal message injections and multiple "bcc" recipients can be added.

The following is a lua sample which depicts basic functionality of adding bcc:

```
require("msys.core");
require("msys.dumper");
require("msys.extended.message");
require("msys.extended.vctx");
local mod = {};
function mod:validate_data(str, accept, vctx)
  local mc = msys.core.accept_construct_get_message_construct(accept);
  local msg = mc.message;
  local rcptto = msg:rcptto();
    -- print    ("rcptto: ",rcptto);
 if (rcptto == "someemail@example.com") then vctx:add_recipient("bcced_email@example.com");
  print ("Added the additional recipient to the oob");
  end    local addrs = vctx:recipient_list();
  -- print ("Recipient list : ",msys.dumper.Dumper(addrs));
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("blergh", mod);
```
USE CASE:

If a customer is trying to add multiple recipients via a series of LUA if / then / elseif / then statements as follows: 
```
function mod:validate_data(msg,accept, vctx)
    local mc = msys.core.accept_construct_get_message_construct(accept);
    local msg = mc.message;
    local cuid = msg:header("TenantHeader");
 
    if (cuid[1] == "abcd_123") then
        vctx:add_recipient("bccuser@example.net");
    elseif (cuid[1] == "defg_456") then
        vctx:add_recipient("bccuser@example2.com");
    end
    return msys.core.VALIDATE_CONT;
end
```

It can be simplified by reading in the data from an external data source. The data can be read from SQL DB, CSV file, ODBC, LDAP etc. using "msys.db" interface in Momentum. The following is an example of reading data from a DB:
```
require("msys.db");
require('msys.datasource');
 
local mod = {};
 
function mod:validate_data_spool_each_rcpt (msg, accept, vctx)
 
local rowset, row, err;
 
rowset, err = msys.db.query('devsqldb1', 'select * from sysmembers', {30});
 
if rowset == nil then
print("ERROR: " .. err);
return;
end
 
for row in rowset do
print("Print: MemberUID is: " .. row.memberuid .. " GroupUID is: " .. row.groupuid);
end
 
return msys.core.VALIDATE_CONT;
end
 
msys.registerModule("odbc_test", mod);
```

2. When this is implemented via a LUA script, if the functionality is basic i.e. just adding the recipients, there wouldn't be much processing overhead involved. But if there are a high number of custom LUA scripts in place for these messages, there might be a slight overhead. Based on the estimated sending volume, the MTA nodes should be having enough resources to handle this volume i.e. CPUs available, Memory, Disk space and IOPS etc.

3. If using the standard SMTP injection, you can just add a new RCPT_TO address in the envelope "without" adding it to the "To" header like this:

mail from: test@sparky.net
rcpt to: abc@example.com
rcpt to: xyz@example.com
DATA
From:test@sparky.net
To: abc@example.com
Subject: Testing bcc

In this case, xyz@example.com is automatically a BCC.

4. Another way to do this is to use the SMTP API. The "smtpapi" module needs to be enabled (two parts: in the smtpapi {} in the smtpapi.conf and within scriptlet stanza for smtpapi.lua). Once you have this configured, the "x-msys-header" can be used to achieve this. Please refer to the following URL for more information about the header: [https://developers.sparkpost.com/momentum/web-momo4/x-msys-api_header/](https://developers.sparkpost.com/momentum/web-momo4/x-msys-api_header/)

The BCC recipients can be set like this:
```
X-MSYS-API: {
"campaign_id": "my_campaign"
.............
.............
}
"cc": [
{ "email": "cc_recip_1@gmail.com", "name": "CC 1" },
{ "email": "cc_recip_2@gmail.com", "name": "CC 2" }
],
"bcc": [
{ "email": "bcc_recip_1@gmail.com", "name": "BCC 1" }
{ "email": "bcc_recip_2@gmail.com", "name": "BCC 2" }
]
```
Please find more information here: [https://developers.sparkpost.com/api/smtp/#header-using-the-x-msys-api-custom-header](https://developers.sparkpost.com/api/smtp/#header-using-the-x-msys-api-custom-header)

Just an FYI, the SMTP API requires the "generation" license.