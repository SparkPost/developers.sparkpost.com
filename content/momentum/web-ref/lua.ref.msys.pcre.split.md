| [Prev](lua.ref.msys.pcre.replace)  | 15.2. Lua Functions |  [Next](lua.ref.msys.os.statvfs_read.php) |

<a name="lua.ref.msys.pcre.split"></a>
## Name

msys.pcre.split — Perform a PCRE split operation

<a name="idp26820464"></a>
## Synopsis

`msys.pcre.split(subject, pattern);`

```
subject: string
pattern: string
```
<a name="idp26823168"></a>
## Description

Perform a PCRE split operation.

```
require("msys.core");
require("msys.pcre");
require("msys.dumper");
local mod = {};

function mod:validate_connect(accept, vctx)
  local res, err = msys.dnsLookup('messagesystems.com', 'A');
  if res then
    if type(res[1]) == "string" then
      table.sort(res);
    end
    local i;
    local l = msys.pcre.split(msys.dumper.Dumper(res), "\\n");
    for i=1, #l do
      print("OK:", l[i]);
    end
  else
    print("ERROR:", msys.dumper.Dumper(err));
  end
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("dns-test", mod);
```

Enable this function with the statement `require('msys.pcre')`.

<a name="idp26826896"></a>
## See Also

[msys.pcre.match](lua.ref.msys.pcre.match "msys.pcre.match"), [msys.pcre.replace](lua.ref.msys.pcre.replace.php "msys.pcre.replace")

| [Prev](lua.ref.msys.pcre.replace)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.os.statvfs_read.php) |
| msys.pcre.replace  | [Table of Contents](index) |  msys.os.statvfs_read |
