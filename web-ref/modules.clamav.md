|     |     |     |
| --- | --- | --- |
| [Prev](modules.cidrdb)  | Chapter 14. Modules Reference |  [Next](modules.cloudmark.php) |

## 14.17. clamav – ClamAV

<a class="indexterm" name="idp18393312"></a>

The clamav module is an open source antivirus engine that is part of the default Momentum installation.

<a name="example.clamav.3"></a>

**Example 14.28. clamav module**

```
clamav {}
antivirus "antivirus1" {
  clamav "clamav1" {
    daemon = "127.0.0.1:3310"
    timeout = "20"
    action = "pass"
    paranoid = false
    context_variable = "virus"
    skip_context_variable = "skip_virus_check"
    file_base = "/var/tmp"
  }
}
```

### Note

In order to use this module you must install ClamAV on your server and update it as needed or desired. Configure this module in the global scope **and** also within the antivirus scope as shown in [Example 14.28, “clamav module”](modules.clamav#example.clamav.3 "Example 14.28. clamav module").

The clamav module is a singleton in the global scope but a non-singleton within the antivirus scope. In the global scope this module only supports the `enabled` and `debug_level` options.

For more information about Clam AV see the [ClamAV](http://www.clamav.net/lang/en/) web page.

Find below a description of the configuration options unique to this antivirus module.

<dl className="variablelist">

<dt>daemon</dt>

<dd>

The ClamAV engine connects to its external daemon over TCP/IP. This means the daemon may optionally be run on another machine. It runs in the IO pool by default.

</dd>

</dl>

For instructions on configuring this module using the web UI and for a list of the configuration options that this module shares with other antivirus modules see [Section 14.5.1, “antivirus Configuration”](modules.antivirus#modules.antivirus.configuration "14.5.1. antivirus Configuration").

This module uses the configuration options common to all antivirus modules. These options are discussed in [Section 14.5, “antivirus – Antivirus Modules”](modules.antivirus "14.5. antivirus – Antivirus Modules"). For the clamav module, the `context_variable` option defaults to `clamav_status`.

### 14.17.1. Runtime Usage

This module supports the **msys.av.scan** and the **msys.av.scan_part** Lua functions.

These functions return four values:

*   The *scan status* , which is one of the following values:

    *   msys.av.EC_AV_PART_IS_CONTAINER - a container was passed to msys.av.scan.

    *   msys.av.EC_AV_NAME_TOO_LONG - av_engine_name is longer than 40 characters.

    *   msys.av.EC_AV_NO_ENGINE - no AV engine is configured.

    *   msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING - the AV engine cannot scan the message that was passed in as a stream.

    *   msys.av.EC_AV_ERROR - a runtime error occurred. This status is returned if the *engine scan code*           is either `OK` or `Empty file`, and the error text is returned in the *informational string* .

    *   msys.av.EC_AV_CLEAN - the scan code is either `OK` or `Empty file`, and there is no runtime error.

        This includes cases where a runtime error in the AV engine occurs.

    *   msys.av.EC_AV_INFECTED - the message is classified as infected if the scan code is **not** `OK` or `Empty file`.

    *   msys.av.EC_AV_UNSCANNABLE - the message could not be scanned.

*   An *informational string* , which typically contains the virus name; the precise contents of this string depend on the engine.

*   The *name of the AV engine*                  that detected the virus, or nil if no virus was detected.

*   The *engine scan code* , or nil if no engine scan code is available. If the scan result is msys.av.EC_AV_CLEAN, this code will be either `OK` or `Empty file`.

**Configuration Change. ** The engine scan code is returned as of version 3.5.

For more information see [msys.av.scan](lua.ref.msys.av.scan "msys.av.scan") and [msys.av.scan_part](lua.ref.msys.av.scan_part.php "msys.av.scan_part").

This module supports the **clamav_avscan** Sieve command. For more information see [antivirus](sieve.ref.antivirus "antivirus").

|     |     |     |
| --- | --- | --- |
| [Prev](modules.cidrdb)  | [Up](modules.php) |  [Next](modules.cloudmark.php) |
| 14.16. cidrdb – CIDRDB  | [Table of Contents](index) |  14.18. cloudmark – Cloudmark Authority Module |
