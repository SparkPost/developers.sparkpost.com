|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.dnslookup)  | 15.2. Lua Functions |  [Next](lua.ref.msys.getClassMetaTable.php) |

<a name="lua.ref.msys.expandMacro"></a>
## Name

msys.expandMacro — Expand macros (such as sieve, spf and custom_logger macros)

<a name="idp24479664"></a>
## Synopsis

`msys.expandMacro();`

<a name="idp24481648"></a>
## Description

Expands macros (such as sieve, spf and custom_logger macros) present in the supplied input string and returns the expanded result.

```
require("msys.core")

local mod = {};

function mod:validate_ehlo(str, accept, vctx)
  print("ehlo string is:", msys.expandMacro("%{vctx_conn:ehlo_string}"));
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("ehlo_phase", mod);
```

The parameter passed to `msys.expandMacro` expands the built-in validation context variable, `ehlo_string`. For a list of these variables see [Section 6.1, “Connection Context Variables”](policy.predefined-context-conn "6.1. Connection Context Variables"). *Note*: Not all variables are available in all callouts.

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.dnslookup)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.getClassMetaTable.php) |
| msys.dnsLookup  | [Table of Contents](index) |  msys.getClassMetaTable |
