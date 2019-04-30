|     |     |     |
| --- | --- | --- |
| [Prev](hooks.config_rsrc_setup)  | Chapter 69. Hook Points and C Functions Reference |  [Next](apis.ec_httpsrv_register_auth) |

<a name="apis.ec_config_rsrc_get"></a>
## Name

ec_config_rsrc_get — Return a resource list blobject from the configuration system

## Synopsis

`#include "configuration.h"`

| `ec_blobject * **ec_config_rsrc_get** (` | <var class="pdparam">id</var>, |   |
|   | <var class="pdparam">registering</var>`)`; |   |

`ec_atomic_t <var class="pdparam">id</var>`;
`int <var class="pdparam">registering</var>`;<a name="idp8663440"></a>
## Description

This function returns a resource list blobject from the configuration system.

### Warning

When you are finished with the returned object, you must call [ec_blobject_delref](https://support.messagesystems.com/docs/web-c-api/apis.ec_blobject_delref) to dispose of it.

When the `registering` parameter is `EC_CFG_RSRC_REGISTERING`, the configuration system will return the resource list from the currently-being-assembled configuration transaction. If the resource list does not exist in the currently-being-assembled transaction, then it will be created.

When the `registering` parameter is `EC_CFG_RSRC_CONSUMING`, the configuration system will return the resource list from the currently active configuration transaction. If the resource list does not exist in the active transaction, NULL will be returned.

The configuration system semantics are such that there will be a new instance of the resource list for each new configuration generation. That means that modules that register resources against this list will need to ensure that they register them explicitly from their ext_init module function each time it is invoked with `EC_MODULE_INIT_INIT`.

**Parameters**

<dl className="variablelist">

<dt>id</dt>

<dd>

Resource list identifier returned by `ec_config_rsrc_create`

</dd>

<dt>registering</dt>

<dd>

Constant that indicates either a read or a write operation.

It can be one of the following values:

```
/** Indicates that the caller is consuming the existing, committed resource */
#define EC_CFG_RSRC_CONSUMING   0
/** Indicates that the caller is modifying the pending resource */
#define EC_CFG_RSRC_REGISTERING 1
```
</dd>

</dl>

**Return Values**

This function returns a [ec_blobject](https://support.messagesystems.com/docs/web-c-api/structs.ec_blobject) or `NULL`.

**Threading**

This hook can be called in any thread.

<a name="idp7808848"></a>
## See Also

[config_rsrc_setup](hooks.config_rsrc_setup "config_rsrc_setup")

|     |     |     |
| --- | --- | --- |
| [Prev](hooks.config_rsrc_setup)  | [Up](hooks) |  [Next](apis.ec_httpsrv_register_auth) |
| config_rsrc_setup  | [Table of Contents](index) |  ec_httpsrv_register_auth |

