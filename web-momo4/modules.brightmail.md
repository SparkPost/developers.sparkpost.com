| [Prev](modules.bounce_logger)  | Chapter 71. Modules Reference |  [Next](modules.chunk_logger) |

## 71.14. brightmail – Symantec Brightmail™ Content Scanning Support

<a className="indexterm" name="idp20183088"></a>

The brightmail module provides a mechanism for checking the current inbound message context (for each recipient) against a Symantec Brightmail AntiSpam content server.

If you intend to use this module, be sure to choose it during installation. You will also need to purchase a license from Symantac. For more information, see [Section 12.1, “Installing Partner Modules”](post_installation#install.additional.packages "12.1. Installing Partner Modules").

### 71.14.1. Configuration

<a name="example.brightmail.3"></a>

**Example 71.23. brightmail Configuration**

The following is an example configuration:

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

The following configuration options are available:

<dl className="variablelist">

<dt>idle_timeout</dt>

<dd>

Open connections to the brightmail server are cached. This option defines how long to keep an idle connection open.

</dd>

<dt>max_messages_per_connection</dt>

<dd>

The brightmail module will drop a connection after processing this many messages. Set this option to `0` to process an unlimited number. Default value is `0`.

</dd>

<dt>max_size</dt>

<dd>

Specifies the number of bytes sent to the brightmail server. For example, if this is set to `2048` and a message of 4,000 bytes is received, only `2048` will be sent to the Brightmail server.

</dd>

<dt>max_tries</dt>

<dd>

Number of times to attempt a connection to the brightmail server; if we can't connect and max_tries is greater than one, retry the connection `max_tries` number of times.

</dd>

<dt>num_workers</dt>

<dd>

Specifies the concurrency of access to the Brightmail service. For numbers greater than zero, this specifies the number of threads that will be used to concurrently communicate with Brightmail. Each thread will have its own TCP/IP connection to the server and be capable of handling new messages serially. 0 (zero) has a special meaning: exactly one connection will be made synchronously to the main Momentum process and thus block other operations—this is highly discouraged.

</dd>

<dt>server</dt>

<dd>

Specifies the IP address and port on which the Brightmail service should be reached. Since the module makes a TCP connection, it is not essential that it run on the same server as Momentum. Instead of an IP address, you can also specify the hostname.

</dd>

<dt>sieve_mode</dt>

<dd>

Specifies whether to operate in script-only mode or not. If this option is active, then no brightmail checking will occur unless called for directly from a Lua script. If the module is loaded with "sieve_mode = off", the scanner will be run from the module (rather than a script) for all messages in the data phase. If you set `sieve_mode` to `on`, you need to invoke the brightmail_scanner manually. This can be invoked at the data, spool, or each_rcpt phases. It will not work at the connect, ehlo, mailfrom, or rcptto phases. If you do not want brightmail to see a given message, do not call `msys.brightmail.scan` for that message.

This option must be set to `on` if you wish to use the Lua function, [msys.brightmail.scan](lua.ref.msys.brightmail.scan "msys.brightmail.scan").

</dd>

<dt>sieve_prefix</dt>

<dd>

Specifies a name for a specific brightmail server instance. Allows you to concurrently interface with any number of servers that use the brightmail module. This setting also determines the prefix for the validation context variable. See [Section 71.14.2, “Message Context Variables”](modules.brightmail#modules.brightmail.context.variables "71.14.2. Message Context Variables"). Default value is `brightmail`.

</dd>

<dt>timeout</dt>

<dd>

Specifies the maximum time to wait for a response before assuming a failure on the part of the brightmail server.

</dd>

</dl>

### 71.14.2. Message Context Variables

The brightmail module sets one message context variable in the event of an error:

<dl className="variablelist">

<dt>*`brightmail`*::error</dt>

<dd>

This variable, if it exists, contains information pertaining to the error that occurred while attempting to process the current message through the Brightmail service.

</dd>

</dl>

### 71.14.3. Lua Functions

This module makes the Lua function `msys.brightmail.scan` available. For a description of how this function is used, see [msys.brightmail.scan](lua.ref.msys.brightmail.scan "msys.brightmail.scan").

| [Prev](modules.bounce_logger)  | [Up](modules) |  [Next](modules.chunk_logger) |
| 71.13. bounce_logger – Momentum-Style Bounce Logging  | [Table of Contents](index) |  71.15. chunk_logger Module |

