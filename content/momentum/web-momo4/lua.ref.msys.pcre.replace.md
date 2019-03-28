|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.pcre.match)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.pcre.split) |

<a name="lua.ref.msys.pcre.replace"></a>
## Name

msys.pcre.replace — Perform a PCRE replace operation

<a name="idp18257600"></a>
## Synopsis

`msys.pcre.replace(subject, pattern, replacement);`

```
subject: string
pattern: string
replacement: string
```
<a name="idp18260640"></a>
## Description

Perform a PCRE replace operation.

```
...
  local orig = self:text();
  if orig == nil then
    return false
  end
  local rep = msys.pcre.replace(orig, pattern, replacement);
  if rep ~= orig then
    self:text(rep, ct.mimetype, ct.charset);
    return true;
  end
```

Enable this function with the statement `require('msys.pcre')`.

<a name="idp18264336"></a>
## See Also

[msys.pcre.match](lua.ref.msys.pcre.match "msys.pcre.match"), [msys.pcre.split](lua.ref.msys.pcre.split "msys.pcre.split")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.pcre.match)  | [Up](lua.function.details) |  [Next](lua.ref.msys.pcre.split) |
| msys.pcre.match  | [Table of Contents](index) |  msys.pcre.split |

