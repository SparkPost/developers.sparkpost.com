|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.runSieveScript)  | 15.2. Lua Functions |  [Next](lua.ref.msys.shareSet.php) |

<a name="lua.ref.msys.shareGet"></a>
## Name

msys.shareGet — Retrieve the value associated with keystring set by an earlier call to msys.shareSet

<a name="idp24727328"></a>
## Synopsis

`msys.shareGet(keystring);`

`keystring: string`<a name="idp24730016"></a>
## Description

Retrieves the value associated with `keystring` set by an earlier call to `msys.shareSet`. If there is no value associated with the `keystring`, this function returns nil. It returns true if the value was stored successfully, false otherwise. The most likely cause of failure is an invalid value for `keystring`.

### Note

This function has been made obsolete by the data sharing features introduced in version 3.2\. For more information see [msys.runInPool](lua.ref.msys.runinpool "msys.runInPool").

<a name="lua.ref.msys.shareGet.example"></a>

**Example 15.33. msys.shareGet example**

```
incrementing a counter in a thread safe manner
msys.lock("counter-example");
local c= msys.shareGet("my-counter");
if c == nil then
  c = 0;
end
msys.shareSet("my-counter", c + 1);
msys.unlock("counter-example");
```

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24738960"></a>
## See Also

[msys.shareSet](lua.ref.msys.shareSet "msys.shareSet"), [msys.shareUnset](lua.ref.msys.shareUnset.php "msys.shareUnset")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.runSieveScript)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.shareSet.php) |
| msys.runSieveScript  | [Table of Contents](index) |  msys.shareSet |
