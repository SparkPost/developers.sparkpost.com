| [Prev](modules.alias)  | Chapter 14. Modules Reference |  [Next](modules.as_logger.php) |

## 14.5. antivirus – Antivirus Modules

<a class="indexterm" name="idp17677808"></a>

Momentum's antivirus framework currently ships with support for CSAPI and ClamAV antivirus engines. These engines can be configured to run separately or together, and to either reject a message or pass it back to a policy script for processing.

<a name="example.antivirus.3"></a>

**Example 14.7. antivirus module**

```
clamav {}
csapi {}
antivirus "antivirus1" {
  csapi "csapi1" {
    enabled = false
    action = "pass"
    context_variable = "virus"
    max_concurrency = 4
  }
  clamav "clamav1" {
    enabled = false
    action = "pass"
    ...
  }
}
```

To configure the csapi or clamav modules through the web UI follow these steps:

*   Create a named antivirus scope and commit your changes

*   Create a global scope for the antivirus engine you wish to configure

*   Navigate to the antivirus scope and create a clamav scope

*   Navigate to the clamav scope and set desired options

*   Save and commit your changes

The following modules are controlled by the antivirus module:

*   [Section 14.35, “fsecure – F-Secure”](modules.fsecure "14.35. fsecure – F-Secure") (no longer available as of version 3.1)

*   [Section 14.17, “clamav – ClamAV”](modules.clamav "14.17. clamav – ClamAV")

*   [Section 14.22, “csapi – The Content Scanning API Module”](modules.csapi "14.22. csapi – The Content Scanning API Module")

For information specific to the individual antivirus engines see the preceding links.

Starting with Momentum 2.1, the antivirus framework has been enhanced to allow third party vendors to support other antivirus products.

### Note

Momentum also supports other antivirus engines. See also [Section 14.14, “brightmail – Brightmail Module”](modules.brightmail "14.14. brightmail – Brightmail Module"), [Section 14.10, “beik – BEIK Module”](modules.beik.php "14.10. beik – BEIK Module") and [Section 14.32, “eleven – Module”](modules.eleven.php "14.32. eleven – Module").

If you are using third party content scanners, their modules must be installed on the Cluster Manager as well as the nodes. The installer will handle the installation on the nodes, but the modules will need to be installed manually on the Cluster Manager. (See [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files") for a description of how to change configuration files.) If they are not installed on the Cluster Manager, you will see the error: `Your config is not valid; please edit it before retrying the upgrade. You can use the ./validate_config script to check your configuration.` However, the `/opt/msys/ecelerity/bin/validate_config` script may not show errors. Other symptoms include not being able to log in to the web UI.

### 14.5.1. antivirus Configuration

The antivirus subsystem has both a general configuration that is relevant for all engines and engine-specific configurations which apply to that particular engine. The general parameters are:

<dl className="variablelist">

<dt>action</dt>

<dd>

(reject|quarantine|pass) The behavior to exhibit on a positive match. When `action` is set to `reject` this module rejects in the most conservative way—both "infected" and "unscannable" messages will be rejected. If you wish to "pass" unscannable messages but reject "infected" messages then they will need to set `action` to `pass` and use a policy script to set the SMTP response behavior.

**Configuration Change. ** As of version 3.1, `action` can no longer be assigned the value `quarantine`.

</dd>

<dt>cache_size</dt>

<dd>

The size of the virus hash cache. Once a virus is present in the cache, matching is significantly faster. The default is 1000 viruses.

</dd>

<dt>context_variable</dt>

<dd>

The name of the context variable that will be set in the event of a positive match. If no value is assigned to `context_variable`, it defaults to "*`engine name`*      _status", `clamav_status` for the ClamAV module, for example. If *`engine name`*      _status is set to a value, this also sets another context variable named, "*`engine name`*      _status_info", which usually contains the virus name.

If the option, `context_variable`, *is* assigned a value, then the value it is set to is used as the name of the context variable. This context variable will only be set if a virus is found or an error occurs. Additionally, a second variable, *`context_variable`*_info is also set. You can access this context variable from a Lua script using the [msg:context_get](lua.ref.msg_context_get "msg:context_get") function. To use this variable in a Sieve script see [antivirus](sieve.ref.antivirus.php "antivirus").

### Note

If no virus is found, then neither the default context variable *`engine name`*      _status nor *`engine name`*      _status_info will be set. The same applies when `context_variable` is assigned a value.

</dd>

<dt>error_code</dt>

<dd>

Set the ESMTP response code that should be sent if there is a problem scanning, not indicating the presence of any virus. Defaults to `451` (Requested action aborted: local error in processing). You should not normally set this to a fatal (5XX error code).

</dd>

<dt>file_base</dt>

<dd>

A path that the Momentum process can write temporary files into before scanning. Large messages need to be written out in canonical form before the scanner can be called. If you have enabled `mime_decompose`, those files will be stored here as well. `/tmp` or `/var/tmp` are good choices for most systems. Temporary files are deleted immediately after virus scanning.

</dd>

<dt>max_concurrency</dt>

<dd>

Each antivirus engine runs in a default [threadpool](conf.ref.threadpool "threadpool") (see individual documentation for your AV engine for details). By setting `max_concurrency` to a non-zero value, you can limit how many antivirus threads will be run simultaneously. Default is `0`, which will mean as many threads as are available in the threadpool. To change the thread pool used by a given engine, you may use the `pool` option.

### Note

If you use the [csapi module](modules.csapi "14.22. csapi – The Content Scanning API Module") be sure to set the concurrency of the [CPU threadpool](conf.ref.threadpool.php "threadpool") to a value that is less than the max_concurrency of the csapi module.

</dd>

<dt>mime_decompose</dt>

<dd>

Have Momentum decompose any MIME-encoded messages and scan the parts individually, instead of relying on the AV engine to decompose messages. Requires `file_base` to be set as well. The default value for this option is `0`.

</dd>

<dt>paranoid</dt>

<dd>

Mark as viruses mails which appear to have been constructed to bypass virus checkers. The default value for this option is `0`.

</dd>

<dt>pool</dt>

<dd>

Run all antivirus scans out of a dedicated threadpool. AV scanners that run in-process default to the `CPU` pool and scanners that call an external process default to the `IO` pool. See [threadpool](conf.ref.threadpool "threadpool") for details on creating custom threadpools.

</dd>

<dt>skip_context_variable</dt>

<dd>

If this context variable is set by another module, the AV subsystem will avoid running the scanner on the current message. The default value for this variable is "skip_virus_check".

</dd>

<dt>timeout</dt>

<dd>

How long to wait for the engine to return a result for a particular message. Default is 10 seconds.

</dd>

<dt>use_wire_rep</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.5.1.

If use_wire_rep = `true` (the default setting), then a dot-stuffed representation of the message is held entirely in memory and can be used as received, rather than loading pieces of the message as needed.

If use_wire_rep = `false`, then a dot-unstuffed representation of the message will be generated and passed to the module. In addition, any local modifications made to the message will be passed to the Antivirus engine.

</dd>

</dl>

### 14.5.2. Runtime Usage

**14.5.2.1. Lua Functions**

The following antivirus Lua functions are available:

<a name="modules.antivirus.runtime.lua"></a>

**Table 14.1. Lua functions – antivirus**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.av.engines](lua.ref.msys.av.engines "msys.av.engines") – Returns a list of configured engine names in a table |   | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan](lua.ref.msys.av.scan "msys.av.scan") – This function performs a virus scan | [av_engine_name], [msg], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan_part](lua.ref.msys.av.scan_part "msys.av.scan_part") – This function takes an optional msg (msys.core:_ec_message), an optional engine name and performs a virus scan on a specific part | msg_part, [av_engine_name], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.brightmail.scan](lua.ref.msys.brightmail.scan "msys.brightmail.scan") – Use Brightmail to scan messages | msg, accept, vctx | msys.brightmail | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze") – Analyze a message using Cloudmark | hdr, [msg], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score") – Scan messages using Cloudmark | [msg], [accept], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.commtouch.diagnose](lua.ref.msys.commtouch.diagnose "msys.commtouch.diagnose") – Scan message using Commtouch | [msg], [accept], [vctx] | msys.commtouch | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.expurgate.scan](lua.ref.msys.expurgate.scan "msys.expurgate.scan") – Scan using the Eleven antivirus engine | msg, accept, vctx | msys.expurgate | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.symantec_beik.scan](lua.ref.msys.symantec_beik.scan "msys.symantec_beik.scan") – Scan using BEIK | msg, vctx | msys.symantec_beik | 3.1 | data, data_spool, data_spool_each_rcpt |

**14.5.2.2. Sieve**

Use the [antivirus](sieve.ref.antivirus "antivirus") methods for user processing.

**14.5.2.3. antivirus Management Using Console Commands**

The antivirus modules can be controlled through the `ec_console`. The following commands are available:

**14.5.2.3.1. antivirus:*`antivirus1`* stats**

Display statistics. The following is a sample output, where *`antivirus1`* is the instance name for the antivirus module:

```
15:42:50 /tmp/2025> antivirus:antivirus1 stats
clamav
  Messages checked:   0
  MIME parts checked: 0
  Viruses detected:   0
  Viruses cured:      0
  Avg. time/message   nanms
  Avg. time/MIME part nanms
csapi
  Messages checked:   5
  MIME parts checked: 5
  Viruses detected:   1
  Viruses cured:      0
  Avg. time/message   14.994ms
  Avg. time/MIME part 14.994ms
```
**14.5.2.3.2. antivirus:*`antivirus1`* version**

Display the current anti-virus signature version. The following is a sample output, where *`antivirus1`* is the instance name for the antivirus module. The line "AV definitions version" gives the signature version.

```
12:15:22 /tmp/2025> antivirus:antivirus1 version
antivirus: symantec DEC scanner version number: 5.2.3.6
AV scanner version number: 9.1.3.30
AV definitions version: 20150215.001
Up to date
```

| [Prev](modules.alias)  | [Up](modules.php) |  [Next](modules.as_logger.php) |
| 14.4. alias – Alias Expansion Module  | [Table of Contents](index) |  14.6. as_logger – Audit series logger |
