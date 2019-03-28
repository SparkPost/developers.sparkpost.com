|     |     |     |
| --- | --- | --- |
| [Prev](modules.bounce_logger)  | Chapter 14. Modules Reference |  [Next](modules.chunk_logger.php) |

## 14.14. brightmail – Brightmail Module

<a class="indexterm" name="idp18269424"></a>

The Brightmail module provides a mechanism for checking the current inbound message context (for each recipient) against a Symantec Brightmail AntiSpam content server.

### Note

In Momentum version 3.x, Sieve continues to be supported but scripting via Lua is preferred for the following reasons:

*   Sieve has no concept of looping or iterators

*   Simple comparative logic in Sieve is awkward to author

*   Unlike Sieve, new modules do not need explicit C development to enable Lua capabilities

If you intend to use this module be sure to choose it during installation. For more information see [Section 1.9, “Installing Additional Packages”](install.additional.packages "1.9. Installing Additional Packages"). You will also need to purchase a license from Symantac.

### 14.14.1. Configuration

<a name="example.brightmail.3"></a>

**Example 14.22. brightmail module**

```
brightmail "brightmail1"{
  server = "10.10.10.20:41111"
  num_workers = 10
  sieve_mode = "on"
  sieve_prefix = "brightmail"
  max_size = 2048
  timeout = 15
}
```

<dl className="variablelist">

<dt>idle_timeout</dt>

<dd>

Open connections to the brightmail server are cached. This defines how long to keep an idle connection open.

</dd>

<dt>max_messages_per_connection</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.1.

The brightmail module will drop a connection after processing this many messages. Set this option to `0` to process an unlimited number. The default value for this option is `0`.

</dd>

<dt>max_size</dt>

<dd>

This option specifies the number of bytes sent to the brightmail server. For example, if this is set to `2048` and a message of 4,000 bytes is received, only `2048` will be sent to the Brightmail server.

</dd>

<dt>max_tries</dt>

<dd>

The number of times to attempt a connection to the brightmail server; if we can't connect and max_tries is greater than one, retry the connection `max_tries` number of times.

</dd>

<dt>num_workers</dt>

<dd>

Specifies the concurrency of access to the Brightmail service. For numbers greater than zero, this specifies the number of threads that will be used to concurrently communicate with Brightmail. Each thread will have its own TCP/IP connection to the server and be capable of handling new messages serially. 0 (zero) has a special meaning: exactly one connection will be made synchronously to the main Momentum process and thus block other operations—this is highly discouraged.

</dd>

<dt>server</dt>

<dd>

Specifies the IP address and port on which the Brightmail service should be reached. Since the module makes a TCP connection it isn't essential that it run on the same server as Momentum. Instead of an IP address, you can also specify the hostname.

</dd>

<dt>sieve_mode</dt>

<dd>

This option specifies whether to operate in script-only mode or not. If this option is active then no brightmail checking will occur unless called for directly from a **Lua** or a Sieve script. If the module is loaded with "sieve_mode = off" then the scanner will be run from the module (rather than a script) for all messages in the data phase. If you set `sieve_mode` to `on` then you need to invoke the brightmail_scanner manually. This can be invoked at the data, spool or each_rcpt phases. It will not work at the connect, ehlo, mailfrom or rcptto phases. If you don't want brightmail to see a given message, do not call `msys.brightmail.scan` or `brightmail_scanner` for that message.

In version 3.x, this option must be set to `on` if you wish to use the Lua function, [msys.brightmail.scan](lua.ref.msys.brightmail.scan "msys.brightmail.scan").

For more information on using brightmail from Sieve see [brightmail](sieve.ref.brightmail "brightmail").

</dd>

<dt>sieve_prefix</dt>

<dd>

Specifies a name for a specific brightmail server instance. Allows you to concurrently interface with any number of servers that use the brightmail module. This setting also determines the prefix for the validation context variable and the names of the brightmail Sieve functions. See [Section 14.14.2, “Brightmail Runtime Usage”](modules.brightmail#modules.brightmail.runtime.usage "14.14.2. Brightmail Runtime Usage") and [brightmail](sieve.ref.brightmail.php "brightmail"). The default value for this option is `brightmail`.

</dd>

<dt>timeout</dt>

<dd>

Specifies the maximum time to wait for a response before assuming a failure on the part of the brightmail server.

</dd>

</dl>

### 14.14.2. Brightmail Runtime Usage

The brightmail module sets one context variable in the event of an error:

<dl className="variablelist">

<dt>*`brightmail`*::error</dt>

<dd>

This variable, if it exists, contains information pertaining to the error that occurred while attempting to process the current message through the Brightmail service.

</dd>

</dl>

**Lua Functions**

This module makes the Lua function `msys.brightmail.scan` available. For a description of how this function is used see [msys.brightmail.scan](lua.ref.msys.brightmail.scan "msys.brightmail.scan").

**Sieve Usage**

See [brightmail](sieve.ref.brightmail "brightmail") for more details on implementing policy based on the Brightmail verdict.

The *`brightmail`*::error variable is accessible in the message validation context and can be used in the following way:

```
$err = vctx_mess_get "brightmail::error";
if not ec_test :is $err "" {
  ec_action 451 "Brightmail issue";
}
```

Note that the prefix for this variable is determined by the `sieve_prefix` setting. For example, if this module is loaded with `sieve_prefix` set to `bm`, you would access the error message using the code `$err = vctx_mess_get "bm::error";`.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.bounce_logger)  | [Up](modules.php) |  [Next](modules.chunk_logger.php) |
| 14.13. bounce_logger – Momentum-Style Bounce Logging  | [Table of Contents](index) |  14.15. chunk_logger – Asynchronous Logging |
