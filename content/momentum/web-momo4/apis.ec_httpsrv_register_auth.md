| [Prev](apis.ec_config_rsrc_get)  | Chapter 69. Hook Points and C Functions Reference |  [Next](apis.ec_httpsrv_request_local_address) |

<a name="apis.ec_httpsrv_register_auth"></a>
## Name

ec_httpsrv_register_auth — Register an HTTP handler for authenticating a URI

## Synopsis

`#include "/modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_register_auth** (` | <var class="pdparam">instance</var>, |   |
|   | <var class="pdparam">method</var>, |   |
|   | <var class="pdparam">path</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">handler</var>`)`; |   |

`const char * <var class="pdparam">instance</var>`;
`const char * <var class="pdparam">method</var>`;
`const char * <var class="pdparam">path</var>`;
`ec_blobject * <var class="pdparam">closure</var>`;
`ec_httpsrv_auth_handler_func <var class="pdparam">handler</var>`;<a name="idp7821904"></a>
## Description

This function registers an HTTP handler for authenticating a URI.

**Parameters**

<dl className="variablelist">

<dt>instance</dt>

<dd>

This is reserved for future use in virtual host support and must currently be NULL.

</dd>

<dt>method</dt>

<dd>

HTTP method to be handled

For example: `GET`

</dd>

<dt>path</dt>

<dd>

Base URI path

The trailing ‘`/`’ character is optional.

</dd>

<dt>closure</dt>

<dd>

Closure that is passed through to the handler via [ec_httpsrv_service_ctx_get](https://support.messagesystems.com/docs/web-c-api/apis.ec_httpsrv_service_ctx_get)

</dd>

<dt>handler</dt>

<dd>

Function that is invoked on matching requests

</dd>

</dl>

Authentication handlers are matched using the same algorithm as request handlers. See the description of [ec_httpsrv_register](https://support.messagesystems.com/docs/web-c-api/apis.ec_httpsrv_register) for details.

**Return Values**

This function returns `0` on success. On failure, it returns an error number that indicates the nature of the failure.

**Threading**

This hook can be called in any thread.

| [Prev](apis.ec_config_rsrc_get)  | [Up](hooks) |  [Next](apis.ec_httpsrv_request_local_address) |
| ec_config_rsrc_get  | [Table of Contents](index) |  ec_httpsrv_request_local_address |

