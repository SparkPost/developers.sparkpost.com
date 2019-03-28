|     |     |     |
| --- | --- | --- |
| [Prev](modules.outbound_audit)  | Chapter 71. Modules Reference |  [Next](modules.persistio) |

## 71.52. outbound_smtp_auth

<a className="indexterm" name="idp22512848"></a>

This module enables users to specify authentication parameters for a given set of messages so that Momentum will authenticate against the peer server when it sends outbound mail. It currently supports the 'AUTH LOGIN' and 'AUTH PLAIN' methods of authentication. You can specify the parameters in configuration or in lua, or use a combination of both.

### Note

This module makes heavy use of message contexts to facilitate authentication. If it is enabled, you risk having extra I/O unless `keep_message_dicts_in_memory` is on.

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

### 71.52.1. Configuration

Configuration variables are listed below. These values can all be changed and overridden by setting context variables with the same name as the options in lua. All variables are valid in the binding group, binding, domain, and global scopes.

<dl className="variablelist">

<dt>outbound_smtp_auth_key</dt>

<dd>

A unique key that can be used in lua to look up authorization details in a database. It enables you to easily trigger custom behavior based on a configuration scope. The default value is `false`.

</dd>

<dt>outbound_smtp_auth_pass</dt>

<dd>

The password that will be passed to the remote server. The default value is `false`.

### Note

Setting the password in configuration will leave it as plaintext. To set the password more securely, dynamically retrieve it from a data store in lua and set it in the context variable that corresponds to this option.

</dd>

<dt>outbound_smtp_auth_type</dt>

<dd>

Determines what authentication protocol should be used. The only supported values are 'PLAIN' and 'LOGIN'. The default value is `false`.

</dd>

<dt>outbound_smtp_auth_user</dt>

<dd>

The username that will be passed to the remote server. The default value is `false`.

</dd>

</dl>

### 71.52.2. Usage

Basic examples of usage are provided below.

The following example shows how you can extend the new hook and set the username and password in lua.

<a name="modules.outbound_smtp_auth.example.set_username_pw"></a>

**Example 71.76. Setting User Name and Password in Lua**

```
function mod:outbound_smtp_auth_config(msg, ac, vctx)
  print('NOTICE: outbound_smtp_auth_config Lua hook called');
  print('NOTICE: msg:['.. tostring(msg) ..']')
  msg:context_set(VCTX_MESS, 'outbound_smtp_auth_user', 'foo')
  msg:context_set(VCTX_MESS, 'outbound_smtp_auth_pass', 'bar')
end
```

The following example shows how to use the new configuration variables to set distinct authorization parameters for two different domains.

<a name="modules.outbound_smtp_auth.example.set_auth_parms"></a>

**Example 71.77. Setting Distinct Authorization Parameters**

```
outbound_smtp_auth { }

Keep_Message_Dicts_In_Memory = true

Domain "messagesystems.com" {
  Outbound_SMTP_AUTH_Type = "LOGIN"
  Outbound_SMTP_AUTH_User = "msys"
  Outbound_SMTP_AUTH_Pass = "msys"
  Outbound_SMTP_AUTH_Key = "somestring"
}

Domain "sparkpost.com" {
  Outbound_SMTP_AUTH_Type = "PLAIN"
  Outbound_SMTP_AUTH_user = "sparkpost"
  Outbound_SMTP_AUTH_pass = "sparkpost"
  Outbound_SMTP_AUTH_Key = "someotherstring"
}
```

|     |     |     |
| --- | --- | --- |
| [Prev](modules.outbound_audit)  | [Up](modules) |  [Next](modules.persistio) |
| 71.51. outbound_audit – Outbound traffic analytics  | [Table of Contents](index) |  71.53. persist_io – Persistent IO Wrapper |

