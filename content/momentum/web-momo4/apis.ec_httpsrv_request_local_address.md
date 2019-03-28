|     |     |     |
| --- | --- | --- |
| [Prev](apis.ec_httpsrv_register_auth)  | Chapter 69. Hook Points and C Functions Reference |  [Next](apis.ec_httpsrv_request_peer_address) |

<a name="apis.ec_httpsrv_request_local_address"></a>
## Name

ec_httpsrv_request_local_address — Returns the local IP address from the current session

## Synopsis

`#include "/modules/listeners/httpsrv.h"`

| `ec_sockaddr * **ec_httpsrv_request_local_address** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp7261072"></a>
## Description

**Configuration Change. ** This option is available as of version 4.0.

This function returns the local IP address from the current session.

**Parameters**

<dl className="variablelist">

<dt>sess</dt>

<dd>

session to interrogate

</dd>

</dl>

**Return Values**

address in ec_sockaddr * format

The local IP address will be valid for the lifetime of the session.

|     |     |     |
| --- | --- | --- |
| [Prev](apis.ec_httpsrv_register_auth)  | [Up](hooks) |  [Next](apis.ec_httpsrv_request_peer_address) |
| ec_httpsrv_register_auth  | [Table of Contents](index) |  ec_httpsrv_request_peer_address |

