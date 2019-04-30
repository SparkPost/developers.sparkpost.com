|     |     |     |
| --- | --- | --- |
| [Prev](modules)  | Chapter 14. Modules Reference |  [Next](modules.adaptive.php) |

## 14.1. ac_auth – Authentication Handler

<a class="indexterm" name="idp17022512"></a>

**Configuration Change. ** This feature is available as beta in Momentum 3.6.5.

The `ac_auth` module provides an auth handler that enables a Lua module to hook into the authentication mechanism, but with the advantage of having access to the validation context. The scheme name is "ac_auth."

### 14.1.1. Configuration

`ac_auth` registers the authentication URI scheme "ac_auth", so you can reference it for authentication in ecelerity.conf as in the following example:

<a name="example.ac_auth.ref"></a>

**Example 14.1. "ac_auth" in ecelerity.conf**

```
ac_auth {}
Esmtp_Listener {
  SMTP_Extensions = ( "AUTH LOGIN" )
  AuthLoginParameters = [
    uri = "ac_auth://"
    log_authentication = "true"
  ]
}
HTTP_Listener {
  enable_authentication = true
  Log_Requests_to_Paniclog = true
  AuthPlainParameters = [
    uri = "ac_auth://"
    log_authentication = "true"
  ]
}
```

### 14.1.2. Custom Auth Handler

To access the hook from Lua, register a module table that includes a function with the following prototype:

`function mod:ac_auth_perform_auth(username, password, ac, response)`

Note that the response is an ec_string and therefore appears in Lua as an `msys.core:_ec_string`.

The following is a short Lua example to provide a custom auth handler:

<a name="example.ac_auth_lua"></a>

**Example 14.2. Custom Auth Handler**

```
local msys = require 'msys'

local mod = {}

function mod:ac_auth_perform_auth(username, password, ac, response)

  print('mod:ac_auth_perform_auth', username, password, ac.remote_addr)

  if username ~= 'Test User' or password ~= 'test2006' then

    if password == 'testx' then
      local res = '531 Get out of town'
      response:write(res, #res)
    end

    return msys.core.EC_AUTH_FAIL
  end

  return msys.core.EC_AUTH_OK
end

function mod:ac_auth_log_auth_failure(username, ac, response)
  print('auth failure', username, response)
end

msys.registerModule("test_ac_auth", mod)
```

To implement any action, you must load the Lua script that hooks `ac_auth_perform_auth` or `ac_auth_log_auth_failure`, e.g.: [Example 14.1, “"ac_auth" in ecelerity.conf”](modules.ac_auth#example.ac_auth.ref "Example 14.1. "ac_auth" in ecelerity.conf").

In the `ac_auth_perform_auth` hook, you can access the validate context from Lua as in the following example:

<a name="example.ac_auth.hook"></a>

**Example 14.3. Accessing the Validate Context**

```
local mc, vctx
if ac.protocol == msys.core.P_ESMTP then
  mc = msys.core.accept_construct_get_message_construct(ac)
end
if mc then
  vctx = mc.ctx
end
```

|     |     |     |
| --- | --- | --- |
| [Prev](modules)  | [Up](modules.php) |  [Next](modules.adaptive.php) |
| Chapter 14. Modules Reference  | [Table of Contents](index) |  14.2. adaptive – Adaptive Delivery |
