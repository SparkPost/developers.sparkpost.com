|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.pcre.match)  | 15.2. Lua Functions |  [Next](lua.ref.msys.pcre.split.php) |

<a name="lua.ref.msys.pcre.replace"></a>
## Name

msys.pcre.replace — Perform a PCRE replace operation

<a name="idp26807616"></a>
## Synopsis

`msys.pcre.replace(subject, pattern, replacement);`

```
subject: string
pattern: string
replacement: string
```
<a name="idp26810368"></a>
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

<a name="idp26813776"></a>
## See Also

[msys.pcre.match](lua.ref.msys.pcre.match "msys.pcre.match"), [msys.pcre.split](lua.ref.msys.pcre.split.php "msys.pcre.split")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.pcre.match)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.pcre.split.php) |
| msys.pcre.match  | [Table of Contents](index) |  msys.pcre.split |
