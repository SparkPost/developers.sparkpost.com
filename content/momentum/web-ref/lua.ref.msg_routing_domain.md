| [Prev](lua.ref.msg_rcptto)  | 15.2. Lua Functions |  [Next](lua.ref.msg_text.php) |

<a name="lua.ref.msg_routing_domain"></a>
## Name

msg:routing_domain — Set or return the routing domain for a message

<a name="idp25619296"></a>
## Synopsis

`msg:routing_domain(...);`

`...: string, optional`<a name="idp25621936"></a>
## Description

Set or return the routing domain for a message. To return the routing domain, use this function with no parameter. Ensure that you return the routing domain in lower case.

In order to set the routing domain you must add the following to your code: `require('msys.extended.message_routing');`. This will register a hook that will allow the routing domain to be set from Lua.

```
-- DB query to find SMS destination. Query returns "domain"
require('msys.datasource');
require('msys.db');
local orig_domain = msg:routing_domain();
local ritr, dberr = msys.db.query("ecdb", "SELECT to_address FROM smpp.sms_address_mapping
WHERE from_address = ?", {orig_domain});
```

### Warning

In some circumstances, using this function or simply requiring it in your policy can cause performance issues, such as causing Momentum to become unresponsive and restart or causing additional overhead per message. To alleviate this, set [keep_message_dicts_in_memory](conf.ref.keep_message_dicts_in_memory "keep_message_dicts_in_memory") to `true`.

The data cache used in the preceding example must be defined in your configuration file. For more information see [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core").

Enable this function with the statement `require('msys.extended.message_routing');`.

### Warning

In the validate_data_spool_each_rcpt phase you can take action on each message, after possible alias expansion. Actions taken in this phase are scoped to an individual recipient.

In the validate_rcptto phase you can validate that a provided recipient string is valid. Actions taken in this phase affect the current batch.

| [Prev](lua.ref.msg_rcptto)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_text.php) |
| msg:rcptto  | [Table of Contents](index) |  msg:text |
