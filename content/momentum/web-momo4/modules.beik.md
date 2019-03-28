|     |     |     |
| --- | --- | --- |
| [Prev](modules.auth_radius)  | Chapter 71. Modules Reference |  [Next](modules.bind_address_secondary) |

## 71.10. beik – Symantec Brightmail™ Engine Integration Kit

<a className="indexterm" name="idp19981952"></a>

The beik module is an anti-spam module that provides support for the Symantec Brightmail™ Engine Integration Kit (BEIK). Because BEIK is an in-process version of the brightmail module, it provides superior performance.

If you intend to use this module, be sure to choose it during installation. The beik module is licensed by Symantec. Register this license as instructed by Symantec. Momentum supports version `6.3` of Brightmail Engine Integration kit. For more information, see [Section 12.1, “Installing Partner Modules”](post_installation#install.additional.packages "12.1. Installing Partner Modules").

### Note

Upon installation, this module applies the "Service Provider Full" rule set. Previously the "Service Provider Express" set was applied. If you are using a low-performance machine, you may wish to revert to the "Service Provider Express" rule set.

You must have a valid `cert.pem` file in place to use the beik module with Momentum. Take the following steps:

1.  Get the *`file_name`*.slf file from Symantec.

2.  To create a `cert.pem` file, run the following command as root:

    shell> /opt/msys/3rdParty/symantec/beik/sbin/register        \
              -c /opt/msys/3rdParty/symantec/beik/etc/bmiconfig.xml \
              -l *`file_name`*.slf
3.  Stop ecelerity by issuing the command:

    `shell> /etc/init.d/ecelerity stop`
4.  Add a beik stanza to your `ecelerity.conf` file and commit this changed file to the repository as described in [Section 15.1.4, “Changing Configuration Files”](conf.overview#conf.manual.changes "15.1.4. Changing Configuration Files").

5.  Start BEIK by issuing the command:

    `shell> /etc/init.d/msys-beik start`
6.  Restart ecelerity by issuing the command:

    `shell> /etc/init.d/ecelerity start`
    ### Note

    You must restart ecelerity for these changes to have effect. Using **config reload**        is ineffective here.

### 71.10.1. Configuration

Unlike other validation modules, BEIK is always loaded in passive mode. When a module is loaded in passive mode, inbound messages will not be virus scanned unless you explicitly call the appropriate scripting action.

The following is an example configuration:

<a name="idp20003664"></a>

**Example 71.18. beik Configuration**

```
beik {
  use_wire_rep = true
  bmiconfig_path = "/opt/msys/3rdParty/symantec/beik/etc/bmiconfig.xml"
  header_padding = 512
}
```

The following configuration options are available:

<dl className="variablelist">

<dt>accum_pool</dt>

<dd>

Which thread pool to use when accumulating data against the scanned message. Default value is the `IO` thread pool.

</dd>

<dt>bmiconfig_path</dt>

<dd>

Indicates the full path to the BEIK configuration file `bmiconfig.xml`. Default value is `/opt/msys/3rdParty/symantec/beik/etc/bmiconfig.xml`. For more information about this file, see the documentation provided by Symantec.

</dd>

<dt>header_padding</dt>

<dd>

When `use_wire_rep` is not or cannot be used, the number assigned to `header_padding` is added as padding to an internal allocation to avoid an additional call to `realloc`. Sizing for this is guided by approximate size of the trace headers added by *this* MTA. The value of `header_padding` should be larger than those trace headers, otherwise the internal memory buffers may need to be `realloc`'d. Default value is `512`.

</dd>

<dt>scan_pool</dt>

<dd>

Which thread pool to use when scanning a message. Default value is the `CPU` thread pool. For more information about defining thread pools, see [threadpool](conf.ref.threadpool "threadpool").

</dd>

<dt>use_wire_rep</dt>

<dd>

If use_wire_rep = `true` (the default setting) and the message is “small” (i.e., it is less than `large_message_threshold`), then a dot-stuffed representation of the message is held entirely in memory and can be used as received, rather than loading pieces of the message as needed.

If use_wire_rep = `false`, or if the message is “large,” then a dot-unstuffed representation of the message will be generated and passed to the module. This involves more memory allocations (malloc) and copying of data (memcpy).

To summarize:

*   use_wire_rep = `true` and small message: no modifications will be passed to BEIK

*   use_wire_rep = `true` and large message: modifications will be passed to BEIK

*   use_wire_rep = `false`: modifications will be passed to BEIK

All messages that pass through the system are stored on disk dot-stuffed. This provides a more efficient transfer by eliminating the need to decode and then re-encode a message before it is sent.

</dd>

</dl>

### 71.10.2. Lua Functions

This module makes the Lua function `msys.symantec_beik.scan` available. For a description of how this function is used, see [msys.symantec_beik.scan](lua.ref.msys.symantec_beik.scan "msys.symantec_beik.scan").

### 71.10.3. beik and IPv6

The beik module does **not** currently support IPv6 addresses.

If you attempt to inject and scan a message with an IPv6 address you will see an error in the panic log similar to the following:

`1337205547:BEIK: bmiProcessConnection() fatal error [0x3000006] client: The API received an invalid argument`

There is no other indication of an error.

### 71.10.4. Console Commands

The beik module can be controlled through the `ec_console`. The following command is available:

<dl className="variablelist">

<dt>beik reload</dt>

<dd>

Use this command to reload the beik module. You do not need to manually invoke this command; it is triggered by the updates service, msys-beik.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](modules.auth_radius)  | [Up](modules) |  [Next](modules.bind_address_secondary) |
| 71.9. auth_radius – RADIUS based SMTP Authentication  | [Table of Contents](index) |  71.11. bind_address_secondary – Dual-stack IPv4/IPv6 Support |

