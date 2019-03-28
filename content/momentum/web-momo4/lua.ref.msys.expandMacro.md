|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.dnslookup)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.getClassMetaTable) |

<a name="lua.ref.msys.expandMacro"></a>
## Name

msys.expandMacro — Expand macros (such as sieve, spf and custom_logger macros)

<a name="idp16115264"></a>
## Synopsis

`msys.expandMacro();`

<a name="idp16117504"></a>
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

The parameter passed to `msys.expandMacro` expands the built-in validation context variable, `ehlo_string`. For a list of these variables, see [Section 63.1, “Connection Context Variables”](policy.context.variables#policy.predefined-context-conn "63.1. Connection Context Variables"). *Note*: Not all variables are available in all callouts.

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.dnslookup)  | [Up](lua.function.details) |  [Next](lua.ref.msys.getClassMetaTable) |
| msys.dnsLookup  | [Table of Contents](index) |  msys.getClassMetaTable |

