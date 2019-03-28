|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.curl.c_perform)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.curl.escape) |

<a name="lua.ref.curl.c_setopt"></a>
## Name

c:setopt — Set the option value of a curl object

<a name="idp15432240"></a>
## Synopsis

`require('curl');`

`c:setopt(option, value);`

```
option: numeric
value: mixed
```
<a name="idp15435952"></a>
## Description

Where `c` is a curl object, set an option value. The first parameter is a number representing a cURL option; it can be any one of the options listed below at [the section called “Callback Options”](lua.ref.curl.c_setopt#lua.ref.c_setopt.callbacks "Callback Options") and following. A predefined constant `curl.OPT_XXXX` corresponds to the `CURLOPT_XXXX` constant defined in the libcurl interface `curl/curl.h`.

All enumeration types and define macros from libCURL 7.14.0 are exported to the curl namespace with the following name substitutions:

*   `CURL_XXXX` becomes `curl.XXXX`

*   `CURLXXXX` becomes `curl.XXXX`

The data type and value of the second parameter depends upon the first parameter. The second parameter may be any one of the following types:

*   `function`

*   `string`

*   `numeric`

*   `boolean`

In the following example `c:setopt` is invoked passing a string as the second parameter, passing a number and finally passing a function.

<a name="lua.ref.c_setopt.example"></a>

**Example 70.16. c:setopt example**

```
c = curl.new();
c:setopt(curl.OPT_URL, "http://example.com/index");
c:setopt(curl.OPT_HTTP_VERSION, 1.1);
c:setopt(curl.OPT_WRITEFUNCTION, function(userdata, datastring) print(datastring); »
  return string.len(datastring); end);
c:perform();
```

Listed below are all curl options supported by libCURL grouped by type. For complete documentation of the cURL options consult the man page.

<a name="lua.ref.c_setopt.callbacks"></a>
### Callback Options

The following options are used with callback functions. When using any one of these options the second parameter must be a function. The first parameter is a DATA option and the second is a Lua **function** that will act on the data that is returned.

## curl.OPT_READFUNCTION and curl.OPT_READDATA

Sets the `READFUNCTION` option, which is used to override the source of data used in an upload operation. The callback must have the following signature:

```
function(userdata, size)
  -- return a string of no more than "size" bytes, or nil when
  -- EOF is reached
end
```

When `OPT_READFUNCTION` is set, it implicitly sets `OPT_READDATA` to the curl object. You may set this separately; the value of `OPT_READDATA` is passed as the first parameter to the `READFUNCTION`.

## curl.OPT_WRITEFUNCTION and curl.OPT_WRITEDATA

Sets the `WRITEFUNCTION` option, which is used to override the destination of data received from download operation. The callback must have the following signature:

```
function(userdata, datastring)
  -- datastring is the incoming data to store
  -- return an integer indicating how many bytes were stored
end
```

When `OPT_WRITEFUNCTION` is set, it implicitly sets `OPT_WRITEDATA` to the curl object. You may set this separately; the value of `OPT_WRITEDATA` is passed as the first parameter to the `WRITEFUNCTION`.

## curl.OPT_HEADERFUNCTION and curl.OPT_HEADERDATA

Sets the `HEADERFUNCTION` option, which is used to override the destination of header or meta data received from a download operation. The callback must have the following signature:

```
function(userdata, datastring)
  -- datastring is the incoming data to store
  -- return an integer indicating how many bytes were stored
end
```

When `OPT_HEADERFUNCTION` is set, it implicitly sets `OPT_HEADERDATA` to the curl object. You may set this separately; the value of `OPT_HEADERDATA` is passed as the first parameter to the `HEADERFUNCTION`.

## curl.OPT_PROGRESSFUNCTION and curl.OPT_PROGRESSDATA

Sets the `PROGRESSFUNCTION` option, which is used to override the destination of header or meta data received from download operation. Note that curl.OPT_NOPROGRESS must be set to false for the `PROGRESSFUNCTION` to be called. The callback must have the following signature:

```
function(userparam, dltotal, dlnow, uptotal, upnow)
  -- return 0 (or omit a return statement) to allow the operation
  -- to continue. Returning any other integer value will cause
  -- the operation to abort
end
```

When `OPT_PROGRESSFUNCTION` is set, it implicitly sets `OPT_PROGRESSDATA` to the curl object. You may set this separately; the value of `OPT_PROGRESSDATA` is passed as the first parameter to the `PROGRESSFUNCTION`.

## curl.OPT_IOCTLFUNCTION and curl.OPT_IOCTLDATA

Sets the `IOCTLFUNCTION` option, which is used to override some aspects of the cURL library operation—consult the cURL documentation to find out more about this. The callback must have the following signature:

```
function(userparam, command)
  -- command is a numeric code
  -- return a numeric code dependent upon the result of the ioctl
  -- operation.  Consult the cURL documentation for more
  -- information.
end
```

When `OPT_IOCTLFUNCTION` is set, it implicitly sets `OPT_IOCTLDATA` to the curl object. You may set this separately; the value of `OPT_IOCTLDATA` is passed as the first parameter to the `IOCTLFUNCTION`.

<a name="curlopt_seekfunctionandcurlopt_seekdata"></a>`curl.OPT_SEEKFUNCTION and curl.OPT_SEEKDATA`

Sets the `SEEKFUNCTION` option, which is used to seek around in the input stream for resumed uploads. The callback must have the following signature:

```
function(userparam, offset, origin)
  -- Return 0 on success, 1 on failure or 2 to indicate that seeking
  -- is incompatible and that cURL should workaround it by reading
  -- and discarding the data
end
```

When `OPT_SEEKFUNCTION` is set, it implicitly sets `OPT_SEEKDATA` to the curl object. You may set this separately; the value of `OPT_SEEKDATA` is passed as the first parameter to the `SEEKFUNCTION`.

<a name="lua.ref.curl.c_setopt.stringlistoptions"></a>
### String List Options

The following options can be set to a string or a list of strings, or a `nil` value to clear a previously configured list of strings. For example:

```
c:setopt(curl.OPT_HTTPHEADER, "X-Foo: Bar",
    "Content-Type: application/json");
c:setopt(curl.OPT_HTTPHEADER, nil);
```

*   `curl.OPT_HTTP200ALIASES`

*   `curl.OPT_HTTPHEADER`

*   `curl.OPT_HTTPPOST`

*   `curl.OPT_POSTQUOTE`

*   `curl.OPT_PREQUOTE`

*   `curl.OPT_QUOTE`

*   `curl.OPT_SOURCE_POSTQUOTE`

*   `curl.OPT_SOURCE_PREQUOTE`

*   `curl.OPT_SOURCE_QUOTE`

*   `curl.OPT_TELNETOPTIONS`

<a name="lua.ref.curl.c_setopt.stringoptions"></a>
### String options

The following options can be set to either a string or a `nil` value. The `nil` value is generally used to cancel or clear a previously set option.

*   `curl.OPT_CAINFO`

*   `curl.OPT_CAPATH`

*   `curl.OPT_COOKIE`

*   `curl.OPT_COOKIEFILE`

*   `curl.OPT_COOKIEJAR`

*   `curl.OPT_CUSTOMREQUEST`

*   `curl.OPT_EGDSOCKET`

*   `curl.OPT_ENCODING`

*   `curl.OPT_FTPPORT`

*   `curl.OPT_FTP_ACCOUNT`

*   `curl.OPT_INTERFACE`

*   `curl.OPT_KRB4LEVEL`

*   `curl.OPT_NETRC_FILE`

*   `curl.OPT_POSTFIELDS`

*   `curl.OPT_PROXY`

*   `curl.OPT_PROXYUSERPWD`

*   `curl.OPT_RANDOM_FILE`

*   `curl.OPT_RANGE`

*   `curl.OPT_REFERER`

*   `curl.OPT_SOURCE_URL`

*   `curl.OPT_SOURCE_USERPWD`

*   `curl.OPT_SSLCERT`

*   `curl.OPT_SSLCERTTYPE`

*   `curl.OPT_SSLENGINE`

*   `curl.OPT_SSLKEY`

*   `curl.OPT_SSLKEYPASSWD`

*   `curl.OPT_SSLKEYTYPE`

*   `curl.OPT_SSL_CIPHER_LIST`

*   `curl.OPT_URL`

*   `curl.OPT_USERAGENT`

*   `curl.OPT_USERPWD`

*   `curl.OPT_WRITEINFO`

<a name="idp15553392"></a>
### Numeric options

The following options are set to a numeric value:

*   `curl.OPT_BUFFERSIZE`

*   `curl.OPT_CLOSEPOLICY`

*   `curl.OPT_CONNECTTIMEOUT`

*   `curl.OPT_DNS_CACHE_TIMEOUT`

*   `curl.OPT_FTPSSLAUTH`

*   `curl.OPT_FTP_RESPONSE_TIMEOUT`

*   `curl.OPT_FTP_SSL`

*   `curl.OPT_HTTPAUTH`

*   `curl.OPT_HTTP_VERSION`

*   `curl.OPT_INFILESIZE`

*   `curl.OPT_INFILESIZE_LARGE`

*   `curl.OPT_IPRESOLVE`

*   `curl.OPT_LOW_SPEED_LIMIT`

*   `curl.OPT_LOW_SPEED_TIME`

*   `curl.OPT_MAXCONNECTS`

*   `curl.OPT_MAXFILESIZE`

*   `curl.OPT_MAXFILESIZE_LARGE`

*   `curl.OPT_MAXREDIRS`

*   `curl.OPT_NETRC`

*   `curl.OPT_PORT`

*   `curl.OPT_POSTFIELDSIZE`

*   `curl.OPT_POSTFIELDSIZE_LARGE`

*   `curl.OPT_PROXYAUTH`

*   `curl.OPT_PROXYPORT`

*   `curl.OPT_PROXYTYPE`

*   `curl.OPT_RESUME_FROM`

*   `curl.OPT_RESUME_FROM_LARGE`

*   `curl.OPT_SSLVERSION`

*   `curl.OPT_SSL_VERIFYHOST`

*   `curl.OPT_TIMECONDITION`

*   `curl.OPT_TIMEOUT`

*   `curl.OPT_TIMEVALUE`

<a name="idp15598816"></a>
### Boolean options

The following options are set to boolean, `true` or `false` only. (`0` and `1` are not permitted and result in an error.)

*   `curl.OPT_AUTOREFERER`

*   `curl.OPT_COOKIESESSION`

*   `curl.OPT_CRLF`

*   `curl.OPT_DNS_USE_GLOBAL_CACHE`

*   `curl.OPT_FAILONERROR`

*   `curl.OPT_FILETIME`

*   `curl.OPT_FOLLOWLOCATION`

*   `curl.OPT_FORBID_REUSE`

*   `curl.OPT_FRESH_CONNECT`

*   `curl.OPT_FTPAPPEND`

*   `curl.OPT_FTPLISTONLY`

*   `curl.OPT_FTP_CREATE_MISSING_DIRS`

*   `curl.OPT_FTP_USE_EPRT`

*   `curl.OPT_FTP_USE_EPSV`

*   `curl.OPT_HEADER`

*   `curl.OPT_HTTPGET`

*   `curl.OPT_HTTPPROXYTUNNEL`

*   `curl.OPT_NOBODY`

*   `curl.OPT_NOPROGRESS`

*   `curl.OPT_NOSIGNAL`

*   `curl.OPT_POST`

*   `curl.OPT_PUT`

*   `curl.OPT_SSLENGINE_DEFAULT`

*   `curl.OPT_SSL_VERIFYPEER`

*   `curl.OPT_TCP_NODELAY`

*   `curl.OPT_TRANSFERTEXT`

*   `curl.OPT_UNRESTRICTED_AUTH`

*   `curl.OPT_UPLOAD`

*   `curl.OPT_VERBOSE`

<a name="idp15641552"></a>
### See Also

[curl.new](lua.ref.curl.new "curl.new")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.curl.c_perform)  | [Up](lua.function.details) |  [Next](lua.ref.curl.escape) |
| c:perform  | [Table of Contents](index) |  curl.escape |

