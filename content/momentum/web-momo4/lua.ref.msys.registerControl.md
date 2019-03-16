| [Prev](lua.ref.msys.registerAuth)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.registerModule) |

<a name="lua.ref.msys.registerControl"></a>
## Name

msys.registerControl — Register a command with the control channel subsystem

<a name="idp16270944"></a>
## Synopsis

`msys.registerControl(prefix, closure);`

```
prefix: string
closure: string
```
<a name="idp16273936"></a>
## Description

This function registers a command with the control channel subsystem (see [ec_console](executable.ec_console "ec_console")). A command prefixed with `prefix` will be dispatched to `closure`. Because this function registers a control. it is not associated with a particular phase or callout.

Enable this function with the statement `require('msys.core');`.

Find below an example of a command that forces email messages into the delayed queue.

<a name="lua.ref.msys.registerControl.example"></a>

**Example 70.33. registerControl example**

```
require("msys.core");

local function delay_domain(cc)
  -- Check the number of parameters
  if cc.argc < 2 then
    print("You must pass a parameter to this command");
    return;
  end
  local domain = cc.argv[1];
  local dr = msys.core.dns_get_domain(domain);
  if dr ~= nil then
    msys.core.mail_queue_delay_domain(dr, "451 4.4.1 [internal] manually delayed domain]");
    print(domain, "added to the delayed queue.");
  end
end

msys.registerControl("delay_domain", delay_domain);
```

### Warning

Be sure to check the number of parameters passed to the registered command. Referencing a non-existent element of the cc.argv array causes a segmentation fault.

This code creates the ec_console command: **delay_domain "*`domain`*"**             . Be sure to use quotation marks around the domain that you wish to delay. Registered control functions can return string responses back to ec_console by using Lua's print() function as shown in [Example 70.33, “registerControl example”](lua.ref.msys.registerControl#lua.ref.msys.registerControl.example "Example 70.33. registerControl example").

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="lua.ref.msys.registerControl.control_construct"></a>

**Command Construct Userdata**

The function that performs the registered action, in [Example 70.33, “registerControl example”](lua.ref.msys.registerControl#lua.ref.msys.registerControl.example "Example 70.33. registerControl example"), delay_domain, accepts as a parameter command_construct userdata. `cc.argc` returns the number of arguments supplied by the console command, with the first argument being the command name, so this example will have two arguments. `cc.argv[0]` is the command name and `cc.argv[1]` is the name of the domain that you wish to add to the delayed queue. For more sophisticated argument parsing use `require("msys.getopt");`. For more information examine the `getopt.lua` file found in the `/opt/msys/ecelerity/libexec/scriptlets/msys` directory.

<a name="idp16291632"></a>
## See Also

[msys.core.dns_get_domain](lua.ref.msys.core.dns_get_domain "msys.core.dns_get_domain") and [command_construct](https://support.messagesystems.com/docs/web-c-api/structs.command_construct)

| [Prev](lua.ref.msys.registerAuth)  | [Up](lua.function.details) |  [Next](lua.ref.msys.registerModule) |
| msys.registerAuth  | [Table of Contents](index) |  msys.registerModule |

