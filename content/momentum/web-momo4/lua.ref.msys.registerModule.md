|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.registerControl)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.runinpool) |

<a name="lua.ref.msys.registerModule"></a>
## Name

msys.registerModule — Register a Lua module with the system.

<a name="idp16300352"></a>
## Synopsis

`msys.registerModule(modname, table);`

```
modname: string
table: table
```
<a name="idp16303344"></a>
## Description

Register a Lua module with the system. The first parameter is the name of the module. This is currently only used in error messages, but should be unique by module for future expansion. The module name should match the name you set in the `script` stanza within the script module. The second parameter is a function table; the keys of the table correspond to defined callouts. The idiom for registering a module is:

```
require("msys.core")

local mod = {};

function mod:validate_ehlo(str, accept, vctx)
  print("ehlo string is:", msys.expandMacro("%{vctx_conn:ehlo_string}"));
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("ehlo_phase", mod);
```

The predefined functions are:

*   init()

*   deinit()

*   validate_connect(accept, vctx)

*   validate_ehlo(str, accept, vctx)

*   validate_mailfrom(str, accept, vctx)

*   validate_rcptto(msg, str, accept, vctx)

*   validate_data(msg, accept, vctx)

*   validate_data_spool(msg, accept, vctx)

*   validate_data_spool_each_rcpt(msg, accept, vctx)

*   validate_set_binding(msg)

*   validate_rcptto_list(list_node, vctx)

*   validate_rcptto_list_final(node, vctx)

*   validate_dealloc()

`init` Registration point for long-lived state, such as timed events or control functions. You should avoid using the `init` routine unless necessary, as it ties up an additional interpreter on the main scheduler thread. In the current architecture, things set up via the `init` routine have strong thread affinity with the scheduler thread and are not suitable for scheduling jobs to thread pools. The init event occurs when the script module's init routine is called. A configuration reload should suffice to trigger this event.

The `init` routine must return `true` if it successfully initializes. Any other return value results in a failure to apply the configuration.

`deinit` is the resource destruction point for things that were set up via the `init` routine. It must return true if it was successful, otherwise it can result in resources not being cleaned up.

`validate_dealloc()` maps to the `validate_local_dealloc` function from the validation subsystem. `validate_dealloc()` is only invoked if defined and if an earlier phase of processing invoked Lua code from this module. Its purpose is to allow your code a chance to act when the validate_context is torn down. If you used "self" in an earlier validation phase, it will be available in this function. You do not (and should not) need to define this callback unless you are doing something esoteric and accessing resources outside of the usual garbage collection mechanism. In most cases, your per-session state will be collected automatically.

## Hook Points

Hook points may also be registered, for example:

```
-- reroute all mail via example.com
function mod:core_config_get_message_routing_domain(scope, msg, buff)
  buff:set("example.com");
  return #buff;
end
```

When invoking hooks, if the hook is defined as having a `char *` parameter followed by an `int` parameter, then the pair will be used to construct an `ec_string` object that uses the string as the storage with a maximum length as given by the integer parameter. This allows modification of the string without ambiguity of the ownership of the associated memory.

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp16332976"></a>
## See Also

[Section 62.2, “Policy Scriptlets”](implementing.policy.scriptlets "62.2. Policy Scriptlets"), [Section 71.60, “scriptlet - Lua Policy Scripts”](modules.scriptlet "71.60. scriptlet - Lua Policy Scripts")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.registerControl)  | [Up](lua.function.details) |  [Next](lua.ref.msys.runinpool) |
| msys.registerControl  | [Table of Contents](index) |  msys.runInPool |

