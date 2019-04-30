|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.pcre.split)  | 15.2. Lua Functions |  [Next](lua.ref.msys.os.statvfs_subscribe.php) |

<a name="lua.ref.msys.os.statvfs_read"></a>
## Name

msys.os.statvfs_read — Request a snapshot of the stream

<a name="idp26832656"></a>
## Synopsis

`require('msys.os');`

`msys.os.statvfs_read(path);`

`path: string`<a name="idp26836032"></a>
## Description

This function provides a "stream" for statvfs updates. This guarantees minimal blocking and it is safe to call this functions from the context of any thread. The developer first requests an ec_statvfs_record_t object by calling `msys.os.statvfs_subscribe`.

Find below an example of requesting a statvfs snapshot stream on `/tmp` updated at least every 10 seconds:

`r = msys.os.statvfs_subscribe("/tmp", 10);`

`msys.os.statvfs_subscribe` is guaranteed to fail only due to failed memory allocation. If interval is `0`, then an implementation-default value is used for the interval length. After a user has subscribed to a snapshot stream associated with a path, they may use `msys.os.statvfs_read` to read the latest available snapshot. If several subscriptions exist for a given path, the smallest requested interval will be used. If a user requests a smaller interval than the default, then the interval update occurs on the previous interval edge.

Find below an example of requesting latest snapshot for `/tmp` and then printing total available kilobytes:

```
st, e = msys.os.statvfs_read(cache[path]);
  if (st == nil) then
    print (e);
  else
    print (st["kilobytes_total"]);
  end
```

If `st` is `nil` then `e` will contain the error message associated with the failure. `st` is userdata of type `ec_statvfs_t` and contains values for the following keys:

*   version

*   kilobytes_available

*   kilobytes_total

*   objects_available

*   objects_total

The following script example provides "subscribe" and "read" commands to ec_console.

<a name="lua.ref.msys.os.statvfs_read.example"></a>

**Example 15.60. msys.os.statvfs_subscribe and msys.os.statvfs_read example**

```
require("msys.core");
  require("msys.os");

  local cache = {};

  local function subscribe(cc)
     -- Check the number of parameters
     if cc.argc < 2 then
       print ("You must pass a parameter to this command");
       return;
     end
     local path = cc.argv[1];

     if cache[path] == nil then
      cache[path] = msys.os.statvfs_subscribe(path, 5);
      if (cache[path] == nil) then
        print ("Memory exhausted.");
      else
        print ("Created subscription for " .. path);
      end
     end
  end

  local function read(cc)
     -- Check the number of parameters
     if cc.argc < 2 then
       print("You must pass a parameter to this command");
       return;
     end
     local path = cc.argv[1];
     local st = nil;

     if cache[path] == nil then
       print ("ERROR: No subscription found.");
     end

     st, e = msys.os.statvfs_read(cache[path]);
     if (st == nil) then
       print (e);
     else
       print ("Version          : " .. st["version"]);
       print ("Available kB     : " .. st["kilobytes_available"]);
       print ("Total kB         : " .. st["kilobytes_total"]);
       print ("Available objects: " .. st["objects_available"]);
       print ("Total objects    : " .. st["objects_total"]);
     end

     return st;
  end

  msys.registerControl("subscribe", subscribe)
  msys.registerControl("read", read)
```

Enable this function with the statement `require('msys.os');`.

<a name="lua.ref.msys.os.statvfs_read.control_construct"></a>

**Command Construct Userdata**

The function that performs the registered action, in the examples above, accepts as a parameter command_construct userdata. `cc.argc` returns the number of arguments supplied by the console command, with the first argument being the command name. `cc.argv[0]` is the command name and `cc.argv[1]` is the command option. For more sophisticated argument parsing use `require("msys.getopt");`. For more information examine the `getopt.lua` file found in the `/opt/msys/ecelerity/libexec/scriptlets/msys` directory.

<a name="idp26865216"></a>
## See Also

[msys.os.statvfs_subscribe](lua.ref.msys.os.statvfs_subscribe "msys.os.statvfs_subscribe"), [ec_statvfs](https://support.messagesystems.com/docs/web-c-api/structs.ec_statvfs.php), [command_construct](https://support.messagesystems.com/docs/web-c-api/structs.command_construct.php) and [msys.registerControl](lua.ref.msys.registerControl.php "msys.registerControl")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.pcre.split)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.os.statvfs_subscribe.php) |
| msys.pcre.split  | [Table of Contents](index) |  msys.os.statvfs_subscribe |
