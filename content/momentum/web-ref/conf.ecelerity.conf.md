|     |     |     |
| --- | --- | --- |
| [Prev](conf)  | Chapter 2. Configuration |  [Next](conf.aaa.php) |

## 2.1. The `ecelerity.conf` File

This chapter serves as an introduction to the Momentum configuration file, describing how to configure Momentum for some common use cases. A more detailed reference can be found in [ecelerity.conf](ecelerity.conf "ecelerity.conf"). The recommended way of changing configuration options is to use the web UI. This is described in [Chapter 3, *Using the Web Console*](web3.php "Chapter 3. Using the Web Console") .

### Note

If the values assigned to any options contain whitespace or any of the characters ‘`#`, ‘`/`, ‘`"`, ‘`'`, ‘`=`, ‘`{`, ‘`}`, ‘`[`, ‘`]`, ‘`(`, ‘`)` they must be enclosed by quotation marks. Note that binding names cannot contain spaces.

All configuration options are case insensitive. For example, you can define an SMTP listener as `ESMTP_Listener` or `esmtp_listener`.

### 2.1.1. Comments and Whitespace

In common with many other Unix configuration files, the `ecelerity.conf` file uses the `#` (commonly referred to as "hash", "pound" or "octothorpe") symbol to introduce a single line comment. Whitespace is unimportant in the various configuration stanzas; feel free to pad the whitespace as you see fit for maximum readability.

### 2.1.2. Configuring Inbound Mail Service and a Control Listener

**Listeners**

Momentum is built around a powerful event based scheduling engine. A key part of that engine is responding to events that occur on inbound sockets, known as *listeners*.

A minimal listener configuration in a typical setup will look something like the following, which configures SMTP on port 25 and **ec_console** on the default TCP and Unix endpoints.

```
# Listen for mail from port 25 on any address
ESMTP_Listener {
  Listen ":25" {}
}

# Accept online control connections from the local machine
Control_Listener {
  Listen "/tmp/2025" {}
  Listen ":2025" {
    Enable_Authentication = "true"
    AuthDigestMD5Parameters = [
      uri = "digest:///opt/msys/ecelerity/etc/console_passwd"
    ]
  }
}
```

Given this control listener configuration, connecting to the system console from the command line specifying the **/opt/msys/ecelerity/bin/ec_console** command connects via a Unix socket. To connect via TCP/IP specify `localhost:2025` following the **ec_console** command. For more information about the **ec_console** command see [Section 4.1, “The Momentum System Console”](operations.console "4.1. The Momentum System Console"). For more information about listeners see [ecelerity.conf](ecelerity.conf.php "ecelerity.conf").

In the ESMTP_Listener configuration, `:25` instructs Momentum to bind to all IP addresses on port 25 and listen for SMTP traffic. If you want to restrict the listener to a particular IP address, you may do so using the following configuration snippet, which configures SMTP service on the private IP address `10.10.10.1`:

```
# Listen for mail from port 25 on the address 10.10.10.1
ESMTP_Listener {
  Listen "10.10.10.1:25" {}
}
```

### Note

As of version 3.1.4, Momentum also supports an HTTP_Listener that is used with the REST Injection API. For more information see "[HTTP_Listener](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener)".

**Relay_Hosts**

Momentum is a powerful mail delivery system. As an operator, you can expose your system to abuse by allowing unauthorized machines to send e-mail to domains for which the local instance does not provide mail service. Doing so makes your system an "open relay."

When configured to be an outbound e-mail relay, only trusted machines should be allowed to connect and inject mails. This is controlled with the `Relay_Host`. This option takes a space-separated list of IPv4 network blocks in Classless Inter-Domain Routing (CIDR) form. CIDR form consists of an IPv4 address followed by a number (between 0 and 32) dictating the number of bits in the netmask.

For example, all addresses in the "loopback" space begin with 127\. The netmask on a loopback device is 255.0.0.0 which has 8 bits set, so the CIDR form of a loopback network is 127.0.0.0/8. For a class C network (256 IP address, 254 usable), the netmask is 255.255.255.0, which contains 24 active bits. The CIDR form of the IP block representing addresses 192.168.10.0 through 192.168.10.255 is 192.168.10.0/24\. Single hosts have netmask with all (32) bits set making a host IP 10.1.2.3 have a CIDR form 10.1.2.3/32.

If your private network (10.10.10.0 netmask 255.255.255.0) contains machines that you trust and you wish to additionally enable relaying from the local host the following `Relay_Hosts` directive would be reasonable:

`Relay_Hosts = ( 127.0.0.0/8 10.10.10.0/24 )`

`Relay_Hosts` is also valid within a listener ACL stanza. For more information see [relay_hosts](conf.ref.relay_hosts "relay_hosts").

**Relay_Domains**

When configured as an inbound mail relay or gateway, it is necessary to specify for which domains you are willing to accept mail. Accepting mail from anyone destined to anywhere would make you an open relay and vulnerable to abuse.

With the `Relay_Domains` option, you may specify a list of domains and left-globbed domains for which the instance will relay mail (accept for delivery). Left-globbed domains are of the form `*fixed.ending`. `*.omniti.com` would **not** match omniti.com (as the dot is required), but would match test.omniti.com, mail.omniti.com, foo.omniti.com, etc. `*omniti.com` would match omniti.com. However, it would also match badomniti.com, which is usually undesirable, so in most cases the asterisk should be followed by a period.

To accept mail for the domain example.com and all subdomains under it, one would specify:

`Relay_Domains = ( example.com *.example.com )`
### 2.1.3. Configuring outbound mail delivery

**Routing mail**

By default, Momentum will use DNS to resolve the MX records for a destination domain to decide which machine(s) it will connect to when delivering the mail. You can override the use of MX records using the `Gateway` or `Routes` configuration options. When set, Momentum will attempt to resolve the gateway using MX records. If there are no MX records, it will attempt to resolve it as an A record and use the resultant list of IP addresses. The gateway option can be set per binding, per domain or at the global level. In addition, you can configure either LMTP or SMTP for delivery methods, and specify the remote port number to use, allowing a great deal of flexibility in customizing routing.

```
# route all mail to a "smart host"
Gateway = 10.10.10.50

# Except for mail for local.example.com
Domain local.example.com {
  # which is routed to this address
  Gateway = 10.10.10.20
  # using LMTP
  Delivery_Method = LMTP
}
```
**Prohibited_Hosts**

Some providers use DNS tricks to deter systems they feel are abusing their resources. One technique is to return a loopback or other local address to you when you query their MX records.

There are some addresses you may never want to deliver mail to. For example, when configured as an outbound e-mail relay you have no reason to deliver mail to your own IP, or any loopback addresses on your machine. To prevent delivery to loopback addresses (127.0.0.0/8) or the null route 0.0.0.0, you can use the following line:

`Prohibited_Hosts = ( 127.0.0.0/8 0.0.0.0 )`
### Note

This setting does not in any way affect where you can receive mail from, only where you can deliver mail to.

**MultiVIP© Interfaces**

Momentum allows you to attach outbound mail to one of a number of virtual interfaces, known as `bindings`, enabling you to specify which IP address(es) are used and also to enforce particular terms of service. MultiVIP© technology allows you to bind messages based on a variety of criteria, and allows third-party vendors to provide modules that expand the binding logic even further.

```
# customer-1 rules
binding "customer-1" {
  # use 10.10.10.1 as the source IP for customer-1 mail
  bind_address = 10.10.10.1
}

# customer-2 rules
binding "customer-2" {
  # use 10.10.10.2 as the source IP for customer-2 mail
  bind_address = 10.10.10.2
}
```

More details on MultiVIP© can be found in [Section 4.6, “MultiVIP© Interfaces”](operations.multivip "4.6. MultiVIP© Interfaces").

**Throttling and Traffic Shaping**

Momentum provides a variety of options that allow you to control its network traffic profile, such as the rate at which outbound connections are established, the rate at which messages are transmitted and the number of connections that are established to a given domain. These options can be set per-binding and per-domain, following the usual fall-back rules (see [Section 2.6, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "2.6. Configuration Scopes and Fallback")) allowing a great deal of flexibility.

```
# limit customer-1 to sending 60 messages every 3 seconds
binding "customer-1" {
  outbound_throttle_messages = "60/3"
}

# Customer-2 rules
binding "customer-2" {
  # make no more than 20 concurrent connections to a given domain
  max_outbound_connections = 20

  # make no more than 40 concurrent connections to example.com
  domain "example.com" {
    max_outbound_connections = 40
  }
}
```
**Outbound TLS**

You may configure Momentum to use TLS in the global, domain, binding, or binding_group scope when delivering mail. The `TLS` option is used to control whether TLS will be used and the behavior of Momentum if TLS negotiation fails. For details about its values, see [tls](conf.ref.tls "tls").

In addition to enabling the `TLS`, you will also need to configure other TLS related properties, such as the certificate to present to the remote server, if any, the allowed certificate authority list used to validate the remote server, and perhaps the list of allowed ciphers to use for the connection. All of these options are configurable at the global, binding and domain scopes.

```
# TLS settings for customer-1
binding "customer-1" {
  tls_key = "/path/to/customer1.key"
  tls_certificate = "/path/to/customer2.cert"

  domain "trusted.partner.example.com" {
    tls = "required"
    tls_ca = "/path/to/customer1/partners.cabundle"
  }
}
```
**Outbound XCLIENT support**

It is often useful for a relay to be able to propagate the original sender IP address to a remote relay so that it can apply more intelligent policy rules to the message. The XCLIENT SMTP extension specifies a protocol for doing exactly that. The `XCLIENT` configuration option allows you to specify whether Momentum should use XCLIENT when the remote host advertises support for it.

Configuration is similar to TLS configuration, with possible values being `no` to not use XCLIENT (the default), `ifavailable` to use it if it is advertised and `required` to prevent delivery if the remote host does not support XCLIENT.

### Warning

Setting XCLIENT to `required` causes Momentum to deliver the mail only if the remote client supports XCLIENT.

```
binding "customer-1" {
  XCLIENT = "ifavailable"

  domain "relay.example.com" {
    XCLIENT = "required"
  }
}
```

### 2.1.4. Module Naming and Debugging

When a module is loaded, it is named based on the module_name specified in the configuration. Some modules can have multiple instances loaded with different configurations, for example, to log different sets of information into different log files.

All modules in version 3.0 load automatically if you use any of the options they declare, or use other resources provided by them. Typically, you will want to set configuration options, so modules will be explicitly loaded. However, you need not explicitly declare modules, such as the jlog module, that don't have options.

Find below examples of modules that are typically loaded implicitly:

*   antivirus

*   cidrdb

*   compress_spool

*   http_io

*   jlog

*   persist_io

*   sievelib

*   suppress_spool

Generally, modules are defined in the following way:

modulename "*`instancename`*" {
  option1 = value1
  option2 = value2
  ...
}

Most modules have a module name and a scope name but some modules such as the spf_macros module, don't have instance names. Such modules are singletons and can only be loaded once. From the system console you can determine whether a module is a singleton by using the **module list**      command.

Whether a module is a singleton or not effects how module-specific system console commands are invoked. For example, if you have a bounce_logger module defined in the following way, `bounce_logger "bounce_logger1" { ... }`, issue the command **bounce_logger:bounce_logger1 reopen logs**             to reopen the logs. For modules where the API is defined as a singleton there is no instance name. Issue singleton module commands using the module name only.

You can also set configuration options from the system console at runtime and to do this you also need to know whether a module is a singleton or not. For more information on this topic see [config](console_commands.config "config").

Module debug levels are set using the `Debug_Level` option within the module stanza:

modulename "*`instancename`*" {
  ...
  Debug_Level = DEBUG
}

For information about setting module debug levels at runtime see [the section called “Module Level Debugging From the System Console”](console_commands.config#console.debug.version_3 "Module Level Debugging From the System Console").

In cases where you wish to take action from a scriptlet or a Sieve script, you need to load the appropriate module in passive mode. This is done in the following way:

modulename "*`instancename`*" {
  Enabled = false
  ...
}
### 2.1.5. Environment Variables and Startup Scripts

<a class="indexterm" name="idp914832"></a>

Some modules require that environment variables be set or adjusted on startup. Likewise, it can be useful to execute specific scripts on startup or shutdown. If Momentum is started up using the **ec_ctl** script then any environment variables included in the `environment` file will be set and any startup scripts in the `rc.includes` directory will be executed.

**2.1.5.1. The `environment` File**

Environment variables can be set in the `/opt/msys/ecelerity/etc/environment` file. The variables that can be set are as follows:

*   `BINDIR` – the path to the Momentum `bin` directory, typically `/opt/msys/ecelerity/bin`.

*   `CONFFILE` – the path to the `ecelerity.conf` file to be used.

*   `CONTROL` – the path to a Unix domain control listener endpoint. This parameter should match what you have configured for your Control_Listener in `ecelerity.conf`.

*   `EC_CONF_SEARCH_PATH` – this value defines the search path used by **ecconfigd** to determine the applicable configuration file. For more information see [Section 2.7, “The Momentum Configuration Server: ecconfigd”](conf.ecconfigd "2.7. The Momentum Configuration Server: ecconfigd").

    Add this variable to the environment file if you wish to change the search order.

*   `EC_DIGEST_REALM` – The MD5 digest realm. For more information see [ec_md5passwd](executable.ec_md5passwd "ec_md5passwd").

*   `ECELERITY_MEMORY` – to use pipe_io on Linux this variable must be set to `NOREPLACE`.

*   `EXTRA_ARGS` – additional parameters to pass to Momentum.

*   `HTTPS_PROXY_PASSWORD` – for use with Adaptive Delivery. See [Using a Proxy Server](https://support.messagesystems.com/docs/web-ad/ad.adaptive.automated.proxy).

*   `HTTPS_PROXY_USERNAME` – for use with Adaptive Delivery. See [Using a Proxy Server](https://support.messagesystems.com/docs/web-ad/ad.adaptive.automated.proxy).

*   `LD_LIBRARY_PATH` – in case the ld path needs to be augmented. This mechanism is used for module specific adjustments to the environment.

*   `PLAT` – the platform name.

*   `TMPDIR` – specify a temporary directory.

    Ecelerity creates an executable file in TMPDIR (a file used by the Lua Timed Events support). If you do not set TMPDIR, it defaults to `/tmp`. If, as a security measure, you mount `/tmp` with the `noexec` option and you also want to use Lua Timed Events, you need to set TMPDIR to a directory that permits executable scripts.

*   `TRY` – number of times to loop waiting for Momentum to start up.

### Note

As of version 3.5, set the `GIMLI_WATCHDOG_INTERVAL`, `GIMLI_WATCHDOG_START_INTERVAL` and/or `GIMLI_WATCHDOG_STOP_INTERVAL` variables as a replacement for the [watchdog_interval](conf.ref.watchdog_interval "watchdog_interval") option. These variables set the interval for restarting Momentum when it has been unresponsive. For more details execute **`man -M /opt/msys/gimli/man monitor`**                                .

If you are using an HTTP proxy server, you can set the environment variables described at [Section 1.4.8.3, “Access via an HTTP Proxy”](install.prepare#install.license.proxy "1.4.8.3. Access via an HTTP Proxy").

For examples of using the `environment` file see [Section 14.54.3, “Pipe IO Wrapper on Linux”](modules.pipeio#modules.pipeio.environment.file "14.54.3. Pipe IO Wrapper on Linux") and also [ec_ctl](executable.ec_ctl.php "ec_ctl").

**2.1.5.2. The `rc.includes` Directory**

The `rc.includes` directory under the `/opt/msys/ecelerity/bin` directory allows third party module providers and local administrators to add startup and shutdown procedures to the **ec_ctl** script. For example, use this directory for scripts that initiate database recovery, set environment variables, or check for necessary mount points.

Start scripts must be named start.*`purpose`* and stop scripts stop.*`purpose`*. **ec_ctl** will use `sh .` to include each script named in this format. For an example script see [Section 2.10, “Starting Momentum”](conf.starting "2.10. Starting Momentum").

### 2.1.6. Further Configuration Options

Momentum configuration is covered in the form of a detailed reference in [ecelerity.conf](ecelerity.conf "ecelerity.conf").

### 2.1.7. The `webui-common.conf` File

<a class="indexterm" name="idp968544"></a>

The `webui-common.conf` file is included in the `ecelerity.conf` file. This file holds definitions needed by both ecelerity and eccmgr when used with the web UI and the user management database. It contains the authorization scheme `ecauth` and references the `ecdb` datasource.

### Note

The `ecdb` datasource file defined in the `webui-common.conf` file is a temporary stub overridden by the `/opt/msys/etc/installer/ecelerity.d/ecdb.conf` file created during installation.

The syntax for datasource stanzas is discussed in [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core") and the syntax for auth_ds modules is discussed in [Section 14.7, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds.php "14.7. auth_ds – Datasource based SMTP Authentication"). For a complete discussion of the `webui-common.conf` file see [webui-common.conf](webui-common.conf.php "webui-common.conf").

You can make changes to the ecdb datasource or the auth_ds module through the web console.

|     |     |     |
| --- | --- | --- |
| [Prev](conf)  | [Up](conf.php) |  [Next](conf.aaa.php) |
| Chapter 2. Configuration  | [Table of Contents](index) |  2.2. Authentication, Authorization and Accounting |
