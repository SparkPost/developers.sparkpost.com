| [Prev](lua.ref.ac_esmtp_capability_add)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.ac_inbound_session_count) |

<a name="lua.ref.ac_esmtp_capability_remove"></a>
## Name

ac:esmtp_capability_remove — Remove a capability string from the EHLO response

<a name="idp14915856"></a>
## Synopsis

`require('msys.extended.ac')`

`ac:esmtp_capability_remove(name);`

`name: string`<a name="idp14919024"></a>
## Description

Removes a capability string from the EHLO response. It is most useful in the connect phase and raises an error if the session is not attached to an SMTP listener.

`ac` is an accept construct userdata data type. For a description of the C struct see [accept_construct](https://support.messagesystems.com/docs/web-c-api/structs.accept_construct.php).

Enable this function with the statement `require('msys.extended.ac');`.

<a name="idp14923040"></a>
## See Also

[ac:esmtp_capability_add](lua.ref.ac_esmtp_capability_add "ac:esmtp_capability_add")

| [Prev](lua.ref.ac_esmtp_capability_add)  | [Up](lua.function.details) |  [Next](lua.ref.ac_inbound_session_count) |
| ac:esmtp_capability_add  | [Table of Contents](index) |  ac:inbound_session_count |

