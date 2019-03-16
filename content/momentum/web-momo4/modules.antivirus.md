| [Prev](modules.alias)  | Chapter 71. Modules Reference |  [Next](modules.as_logger) |

## 71.6. antivirus – Antivirus

<a className="indexterm" name="idp19698880"></a>

Momentum's antivirus framework currently ships with support for CSAPI and ClamAV antivirus engines. These engines can be configured to run separately or together and to either reject a message or pass it back to a policy script for processing.

The following modules are controlled by the antivirus module. For information specific to the individual antivirus engines, follow the links provided.

*   [`ClamAV`](modules.clamav "71.17. clamav – ClamAV")

*   [`Content Scanning API`](modules.csapi "71.23. csapi – Symantec CSAPI Antivirus Support")

In addition, the antivirus framework supports other antivirus products by allowing third party vendors, including:

*   [`Brightmail`](modules.brightmail "71.14. brightmail – Symantec Brightmail™ Content Scanning Support")

*   [`BEIK`](modules.beik "71.10. beik – Symantec Brightmail™ Engine Integration Kit")

*   [`eleven`](modules.eleven "71.31. eleven – Eleven eXpurgate Content Scanning")

### Note

If you are using third party content scanners, their modules must be installed on the cluster manager as well as the other nodes. The installer will handle the installation on the nodes, but the modules will need to be installed manually on the cluster manager. If they are not installed on the cluster manager, you will see the error: `Your config is not valid; please edit it before retrying the upgrade. You can use the ./validate_config script to check your configuration.` However, the `/opt/msys/ecelerity/bin/validate_config` script may not show errors.

### 71.6.1. Configuration

The following is an example configuration:

<a name="example.antivirus.3"></a>

**Example 71.8. antivirus Configuration**

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

The antivirus subsystem has both a general configuration that is relevant for all engines and engine-specific configurations which apply to that particular engine. The general parameters are:

<dl className="variablelist">

<dt>action</dt>

<dd>

Behavior to exhibit on a positive match. Valid values are `reject` or `pass`. When `action` is set to `reject`, this module rejects in the most conservative way—both "infected" and "unscannable" messages will be rejected. If you wish to "pass" unscannable messages but reject "infected" messages, set `action` to `pass` and use a policy script to set the SMTP response behavior.

</dd>

<dt>cache_size</dt>

<dd>

Size of the virus hash cache. Once a virus is present in the cache, matching is significantly faster. Default value is 1000 viruses.

</dd>

<dt>context_variable</dt>

<dd>

Name of the context variable that will be set in the event of a positive match. If no value is assigned to `context_variable`, it defaults to *`engine name`*      _status. For example, it defaults to `clamav_status` for the ClamAV module. If *`engine name`*      _status is set to a value, this also sets another context variable named *`engine name`*      _status_info, which usually contains the virus name.

If the `context_variable` option *is* assigned a value, the name of the context variable is the value to which it is set. This context variable will only be set if a virus is found or an error occurs. Additionally, a second variable *`context_variable`*_info is also set. You can access this context variable from a Lua script using the [msg:context_get](lua.ref.msg_context_get "msg:context_get") function.

### Note

If no virus is found, then neither the default context variable *`engine name`*      _status nor *`engine name`*      _status_info will be set. The same applies when `context_variable` is assigned a value.

</dd>

<dt>error_code</dt>

<dd>

Set the ESMTP response code that should be sent if there is a problem scanning, not indicating the presence of any virus. Default value is `451` (Requested action aborted: local error in processing). You should not normally set this to a fatal (5XX error code).

</dd>

<dt>file_base</dt>

<dd>

Path that the Momentum process can write temporary files into before scanning. Large messages need to be written out in canonical form before the scanner can be called. If you have enabled `mime_decompose`, those files will be stored here as well. `/tmp` or `/var/tmp` are good choices for most systems. Temporary files are deleted immediately after virus scanning.

</dd>

<dt>max_concurrency</dt>

<dd>

Each antivirus engine runs in a default [threadpool](conf.ref.threadpool "threadpool") (see individual documentation for your AV engine for details). By setting `max_concurrency` to a non-zero value, you can limit how many antivirus threads will be run simultaneously. Default value is `0`, which means as many threads as are available in the threadpool. To change the thread pool used by a given engine, you may use the `pool` option.

### Note

If you use the [csapi](modules.csapi "71.23. csapi – Symantec CSAPI Antivirus Support") module, be sure to set the concurrency of the [CPU threadpool](conf.ref.threadpool "threadpool") to a value that is less than the max_concurrency of the csapi module.

</dd>

<dt>mime_decompose</dt>

<dd>

Have Momentum decompose any MIME-encoded messages and scan the parts individually, instead of relying on the AV engine to decompose messages. Requires `file_base` to be set as well. Default value is `0`.

</dd>

<dt>paranoid</dt>

<dd>

Mark as viruses mails that appear to have been constructed to bypass virus checkers. Default value is `0`.

</dd>

<dt>pool</dt>

<dd>

Run all antivirus scans out of a dedicated threadpool. AV scanners that run in-process default to the `CPU` pool and scanners that call an external process default to the `IO` pool. See [threadpool](conf.ref.threadpool "threadpool") for details on creating custom threadpools.

</dd>

<dt>skip_context_variable</dt>

<dd>

If this context variable is set by another module, the AV subsystem will avoid running the scanner on the current message. Default value is `skip_virus_check`.

</dd>

<dt>timeout</dt>

<dd>

How long to wait for the engine to return a result for a particular message. Default value is `10` seconds.

</dd>

<dt>use_wire_rep</dt>

<dd>

If use_wire_rep = `true` (the default setting), then a dot-stuffed representation of the message is held entirely in memory and can be used as received, rather than loading pieces of the message as needed.

If use_wire_rep = `false`, then a dot-unstuffed representation of the message will be generated and passed to the module. In addition, any local modifications made to the message will be passed to the Antivirus engine.

</dd>

</dl>

### 71.6.2. Lua Functions

The antivirus module make the following Lua functions available:

*   [msys.av.engines](lua.ref.msys.av.engines "msys.av.engines")

*   [msys.av.scan](lua.ref.msys.av.scan "msys.av.scan")

*   [msys.av.scan_part](lua.ref.msys.av.scan_part "msys.av.scan_part")

*   [msys.brightmail.scan](lua.ref.msys.brightmail.scan "msys.brightmail.scan")

*   [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze")

*   [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score")

*   [msys.commtouch.diagnose](lua.ref.msys.commtouch.diagnose "msys.commtouch.diagnose")

*   [msys.expurgate.scan](lua.ref.msys.expurgate.scan "msys.expurgate.scan")

*   [msys.symantec_beik.scan](lua.ref.msys.symantec_beik.scan "msys.symantec_beik.scan")

### 71.6.3. Console Commands

The antivirus modules can be controlled through the `ec_console`. The following commands are available:

<dl className="variablelist">

<dt>antivirus:*`antivirus1`* stats</dt>

<dd>

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
</dd>

<dt>antivirus:*`antivirus1`* version</dt>

<dd>

Display the current anti-virus signature version. The following is a sample output, where *`antivirus1`* is the instance name for the antivirus module. The line `AV definitions version` gives the signature version.

```
12:15:22 /tmp/2025> antivirus:antivirus1 version
antivirus: symantec DEC scanner version number: 5.2.3.6
AV scanner version number: 9.1.3.30
AV definitions version: 20150215.001
Up to date
```
</dd>

</dl>

| [Prev](modules.alias)  | [Up](modules) |  [Next](modules.as_logger) |
| 71.5. alias – Alias Expansion  | [Table of Contents](index) |  71.7. as_logger – Audit Series Logger |

