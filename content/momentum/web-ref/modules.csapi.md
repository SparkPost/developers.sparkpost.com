| [Prev](modules.conntrol)  | Chapter 14. Modules Reference |  [Next](modules.custom_bounce_logger.php) |

## 14.22. csapi – The Content Scanning API Module

<a class="indexterm" name="idp18648736"></a>

The Content Scanning Application Programming Interface (CSAPI) module provides integration to Symantec's suite of content scanners. If you intend to use this module be sure to choose it during installation. For more information see [Section 1.9, “Installing Additional Packages”](install.additional.packages "1.9. Installing Additional Packages"). This module runs in an external process ( `/opt/msys/ecelerity/sbin/ec_avscan`) initiated by Momentum during startup. This module shares all of the same parameters as the global antivirus module, plus nine custom parameters shown in [Section 14.22.1, “Configuration”](modules.csapi.php#modules.csapi.configuration "14.22.1. Configuration").

You must load the antivirus module in order to run the csapi module. For more information see [Section 14.5, “antivirus – Antivirus Modules”](modules.antivirus "14.5. antivirus – Antivirus Modules").

For instructions on configuring this module using the web UI and for a list of the configuration options that this module shares with other antivirus modules see [Section 14.5.1, “antivirus Configuration”](modules.antivirus#modules.antivirus.configuration "14.5.1. antivirus Configuration").

### Note

This module requires that the `max_concurrency` option be configured.

Find below a listing of operating system/architecture combinations and the version of CSAPI that they support:

*   RH4 64 bit – 9.1 with 32 bit emulation

*   RH5 32 bit – 9.1

*   RH4 32 bit – 9.1

*   RH5 64 bit – 9.1 with 32 bit emulation

*   Solaris V10/Sparc V9 64 bit – 9.1

### 14.22.1. Configuration

<a name="modules.csapi.example3.1"></a>

**Example 14.37. csapi configuration (3.1)**

```
csapi {}
# note that this module is
# also nested inside the antivirus module
antivirus "antivirus1" {
  csapi "csapi1" {
    enabled = false
    action = "pass"
    context_variable = "csapi_status"
    skip_context_variable = "skip_virus_check"
    max_concurrency = 5
  }
}
```

### Warning

In order to use this module, you must configure it in the global scope **and** also within the antivirus scope as shown in [Example 14.37, “csapi configuration (3.1)”](modules.csapi#modules.csapi.example3.1 "Example 14.37. csapi configuration (3.1)").

The csapi module is a singleton in the global scope but a non-singleton within the antivirus scope. In the global scope this module only supports the `enabled` and `debug_level` options.

For instructions on configuring this module using the web UI and for a list of the configuration options that this module shares with other antivirus modules see [Section 14.5.1, “antivirus Configuration”](modules.antivirus#modules.antivirus.configuration "14.5.1. antivirus Configuration").

The default value for the `context_variable` for this module is `csapi_status`.

Validation modules can be loaded passively, in which case the validation system will not call the SMTP transaction hooks defined by the module. When a module is loaded in passive mode inbound messages will not be virus scanned unless you explicitly call the appropriate scripting action.

Modules are loaded passively by setting the `enabled` option to `false`.

The first three options shown in the configuration example are common to all antivirus modules and are discussed in [Section 14.5, “antivirus – Antivirus Modules”](modules.antivirus "14.5. antivirus – Antivirus Modules"). The parameters specific to the csapi module are the following:

<dl className="variablelist">

<dt>max_concurrency</dt>

<dd>

Specifies the maximum number of threads the external scanner should use. This setting is mandatory. If you do not set this option, it defaults to a value of `1`.

### Note

Be sure to set the concurrency of the [CPU threadpool](conf.ref.threadpool "threadpool") to a value that is less than the max_ concurrency of the csapi module.

</dd>

<dt>max_cumulative_extract_size</dt>

<dd>

**Configuration Change. ** This option is available as of version 3.5.1.

Setting this option to `0` or leaving this option unconfigured, will set the maximum cumulative extract size (the maxCumulativeExtractSize variable of CSAPI) to `209715200` (about 200MB). The default value for this option is `0`.

This option can be set to a maximum of `2147483648` (2GB). If you need to set it to a value greater than this you can set it to a maximum of `4294967294` by starting the ec_avscan scanner process in the following way:

```
shell> /opt/msys/ecelerity/sbin/ec_avscan -DDEBUG \
  -omaxCumulativeExtractSize=4294967294
```
</dd>

<dt>max_extract_depth</dt>

<dd>

The maximum directory depth when extracting an archive. The maximum value is 50, the minimum value is 1, the CSAPI default value is 10.

</dd>

<dt>max_extract_size</dt>

<dd>

The maximum size in bytes of a file extracted from an archive. The CSAPI default value is `104857600` bytes.

This limit and the following `extract` limits, exist to avoid potential denial of service attacks with messages containing archive files.

</dd>

<dt>max_extract_time</dt>

<dd>

The maximum amount of time in seconds to spend extracting an archive file, a setting of 0 means unlimited. The default value is `180` seconds.

</dd>

<dt>max_file_count</dt>

<dd>

The maximum number of files allowed for a single scan or 0 for no limit. The default value is `5000`.

</dd>

<dt>prefer_mem</dt>

<dd>

This configuration option has not been implemented.

</dd>

<dt>scanner_log</dt>

<dd>

The log file for the external scanner. The default value for this option is `/var/log/ecelerity/csapi.log`.

</dd>

<dt>scanner_path</dt>

<dd>

The path to the external scanning process. Normally you would not need to change this value. The default value for this option is `/opt/msys/ecelerity/sbin/ec_avscan`.

### Warning

When configuring this module on Solaris Sparc, you *must* change this option. See [Section 14.22.2, “Solaris-specific Configuration”](modules.csapi#modules.csapi.solaris "14.22.2. Solaris-specific Configuration") for more information.

</dd>

<dt>update_interval</dt>

<dd>

How often to update the antivirus definitions. The default value for this option is `86400` (one day).

</dd>

<dt>use_wire_rep</dt>

<dd>

If use_wire_rep = `true` (the default setting), then a dot-stuffed representation of the message is held entirely in memory and can be used as received, rather than loading pieces of the message as needed.

If use_wire_rep = `false`, then a dot-unstuffed representation of the message will be generated and passed to the module.

### Note

During testing, it has been noted that some viruses avoid detection when use_wire_rep = `true` when used with the CSAPI module. We therefore recommend that use_wire_rep = `false` when used with this module.

</dd>

</dl>

### 14.22.2. Solaris-specific Configuration

**14.22.2.1. The `scanner_path` Option on Solaris**

When using this module on Solaris, add the line `scanner_path = "/opt/msys/ecelerity/sbin/run_ec_avscan"` to the csapi stanza and create a script named `run_ec_avscan` as follows:

1.  Add the following content:

    ```
    #!/bin/bash
    LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/msys/3rdParty/symantec/csapi/lib
    export LD_LIBRARY_PATH
    /opt/msys/ecelerity/sbin/ec_avscan $*
    ```

2.  Save this script as `run_ec_avscan` in the `/opt/msys/ecelerity/sbin` directory.

3.  Make the script executable by issuing the command **`chmod +x run_ec_avscan`**                   and change its user/group to `root/root`.

**14.22.2.2. The Security Stanza on Solaris**

On Solaris, the Security stanza must contain specific Privileges. Otherwise, CSAPI and LiveUpdate will not be able to apply updates. The privileges `file_dac_read`, `file_dac_search`, and `file_dac_write` must be present.

The following is an example for a single node (based on a sample ecelerity.conf):

`Privileges = "basic net_privaddr net_rawaccess file_dac_read file_dac_search file_dac_write"`

The following is an example for a cluster (based on a sample ecelerity-cluster.conf):

`Privileges = "basic net_privaddr net_bindmlp sys_resource sys_net_config net_rawaccess file_dac_read file_dac_search file_dac_write"`
### Note

There is no equivalent on Linux, because Linux does not use the Solaris privileges model.

### 14.22.3. csapi Runtime Usage

The csapi module sets two validation context variables:

<dl className="variablelist">

<dt>*`csapi`*_status</dt>

<dd>

Using the `context_variable` option, you can name a context variable whatever you choose. If not set, it defaults to *`engine_name`*_status, hence the name `csapi_status`. If the message is clean, this context variable will not be set.

If there was a problem scanning the message, it will contain `error`. Otherwise it will contain an empty string.

</dd>

<dt>virus_info</dt>

<dd>

If the *`engine_name`*_status context variable is set, this also sets another context variable named, *`engine_name`*_status_info, which contains the virus name as defined by the CSAPI library.

</dd>

</dl>

See [Section 14.5.1, “antivirus Configuration”](modules.antivirus#modules.antivirus.configuration "14.5.1. antivirus Configuration") for more information about antivirus context variables.

**14.22.3.1. Lua Functions**

This module supports the **msys.av.scan** and the **msys.av.scan_part** Lua functions.

These functions return four values:

*   The *scan status* , which is one of the following values:

    *   msys.av.EC_AV_PART_IS_CONTAINER - a container was passed to msys.av.scan.

    *   msys.av.EC_AV_NAME_TOO_LONG - av_engine_name is longer than 40 characters.

    *   msys.av.EC_AV_NO_ENGINE - no AV engine is configured.

    *   msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING - the AV engine cannot scan the message that was passed in as a stream.

    *   msys.av.EC_AV_ERROR - a runtime error occurred. Check the *engine scan code* .

    *   msys.av.EC_AV_CLEAN - the message was successfully passed to the engine, and it was not classified as infected (that is, the scan code was not RESULT_VIRUS_FOUND). msys.av.EC_AV_CLEAN can be returned if there is a runtime error.

    *   msys.av.EC_AV_INFECTED - the message is classified as infected if the scan code is RESULT_VIRUS_FOUND. The corresponding threat name is returned in the *informational string* .

    *   msys.av.EC_AV_UNSCANNABLE - the message could not be scanned.

*   An *informational string* , which typically contains the virus name; the precise contents of this string depend on the engine.

*   The *name of the AV engine*                  that detected the virus, or nil if no virus was detected.

*   The *engine scan code* , or nil if no engine scan code is available.

    **Configuration Change. ** The engine scan code is returned as of version 3.5.

    The prefix indicates the category the engine scan code belongs to: AVS_ (antivirus scanner), DEC_ (decomposer), LIC_ (licence), or GEN_ (generic error). Multiple scan codes from one or more categories can occur, but only one code is returned. Which specific engine scan code is returned depends on the following two conditions:

    *   If one or more codes in the AVS_ category occur, one of the AVS_ codes will be the one returned.

    *   If no AVS_ codes occurred (that is, the engine scan codes are in the DEC_, LIC_ or GEN_ categories), the specific code that will be returned is undefined.

    The following engine scan codes can be returned:

    *   AVS_RESULT_SCANNER_NOT_INITIALIZED - the scanner was not initialized.

    *   AVS_RESULT_VIRUS_FOUND - a virus was found.

    *   AVS_RESULT_INVALID_DEFAULT_FILE_EXTENSION - the default extension in the policy is invalid.

    *   AVS_RESULT_SCANFILE_FAILURE - a scan error occurred.

    *   AVS_RESULT_REINITIALIZATION_PROHIBITED - attempted to re-initialize an already initialized scanner.

    *   AVS_RESULT_DEFINITIONS_MISSING - definitions are missing or unreadable.

    *   AVS_RESULT_ENGINE_LOAD_FAILED - the engine failed to load for an unknown reason.

    *   DEC_RESULT_SCANNER_NOT_INITIALIZED - the decomposer scanner is not initialized.

    *   DEC_RESULT_POLICY_INVALID - the scan policy is invalid.

    *   DEC_RESULT_MAXIMUM_DEPTH_REACHED - the maximum scan depth was reached.

    *   DEC_RESULT_MAXIMUM_EXTRACT_TIME_EXCEEDED - the maximum extract time was reached.

    *   DEC_RESULT_MAXIMUM_EXTRACT_SIZE_EXCEEDED - the maximum extract size was exceeded.

    *   DEC_RESULT_MAXIMUM_CUMULATIVE_EXTRACT_SIZE_EXCEEDED - the maximum cumulative extract size was exceeded.

    *   DEC_RESULT_MAXIMUM_FILES_EXTRACTED - the maximum file count was exceeded.

    *   DEC_RESULT_ENCRYPTED_CONTAINER_DELETED - an encrypted container was deleted.

    *   DEC_RESULT_ENCRYPTED_CONTAINER_DETECTED - an encrypted container was detected.

    *   DEC_RESULT_MALFORMED_CONTAINER_DELETED - a malformed container was deleted.

    *   DEC_RESULT_MALFORMED_CONTAINER_DETECTED - a malformed container was detected.

    *   DEC_RESULT_PARTIAL_MESSAGE_DETECTED - a partial message was detected.

    *   DEC_RESULT_OUTER_CONTAINER_IS_MIME - the outer container is MIME.

    *   DEC_RESULT_MIME_PARSING_FAILED - the parsing of a MIME message failed.

    *   DEC_RESULT_CONTAINER_EXTRACT_FAILED - the decomposer failed to extract the container.

    *   DEC_RESULT_OPEN_CONTAINER_FAILED - the decomposer failed to open the container.

    *   DEC_RESULT_CONTAINER_ACCESS_FAILED - the decomposer failed to access the container.

    *   DEC_RESULT_UPDATE_CONTAINER_FAILED - the update of the container failed.

    *   DEC_RESULT_CLOSE_CONTAINER_FAILED - the decomposer failed to close the container.

    *   DEC_RESULT_FILE_EXTRACT_FAILED - the decomposer failed to extract a child file from a container.

    *   DEC_RESULT_FILE_ACCESS_FAILED - the decomposer failed to access a child file.

    *   DEC_RESULT_FILE_SPLIT_ACROSS_CONTAINERS - a child file is split across containers.

    *   DEC_RESULT_TEMPFILE_ACCESS_FAILED - the decomposer failed to access a temporary file.

    *   DEC_RESULT_PARAMETER_INVALID - a parameter passed to decomposer is invalid.

    *   DEC_RESULT_OUT_OF_MEMORY - the scanner cannot allocate new memory.

    *   DEC_RESULT_SCAN_ENGINE_EXCEPTION - an exception was caught by the decomposer.

    *   DEC_RESULT_SCAN_FILE_DECOMPOSE_ERROR - a generic error occurred when the decomposer was scanning the file.

    *   DEC_RESULT_INIT_DECOMPOSER_FAILED - the initialization of the decomposer failed.

    *   DEC_RESULT_REINITIALIZATION_PROHIBITED - the decomposer has been initialized already.

    *   DEC_RESULT_DEFINITION_DIR_UNSET - the directory for the decomposer is not initialized. This is typically due to a failure to call ILocalContentScanner::Initialize().

    *   DEC_RESULT_TEMP_DIR_ACCESS_FAILED - the decomposer failed to access the temporary directory.

    *   DEC_RESULT_INVALID_FILE_MODIFICATION - a scanner modified a file or container which could not be modified.

    *   DEC_RESULT_DEF_DIR_ACCESS_FAILED - the decomposer failed to access the definition directory.

    *   DEC_RESULT_FILE_SIZE_TOO_LARGE - the file is larger than the decomposer is capable of supporting. The maximum file size is 2 GB.

    *   DEC_RESULT_CHILD_FILE_SIZE_UNKNOWN - the extracted file size is unknown.

    *   DEC_RESULT_LESS_THAN_MINIMUM_EXTRACT_SIZE - the extracted file size is less than the minimum extract size.

    *   DEC_RESULT_CONTAINER_UNKNOWN_ALGORITHM - an unknown container was detected by decomposer.

    *   DEC_RESULT_BUFFER_SIZE_TOO_SMALL - ScanMemory was called with a bufferSize that is too small to hold the output file.

    *   DEC_RESULT_CREATE_OUTPUT_FILE_FAILED - ScanFile was called with an output filename and the output file could not be created (for example, because the file already exists, is read-only, a directory in the path does not exist, etc.)

    *   DEC_RESULT_ENCRYPTED_CONTAINER_CHILD_DETECTED – a container child is encrypted.

    *   DEC_RESULT_ABORTED_AFTER_FIRST_THREAT - decomposition of the file was halted after the first infected file was found in the parent container.

    *   DEC_RESULT_FAILED_INSERTING_NOTIFICATION_IN_EMPTY_BODY_MIME - failed to insert notification message inside an email because the e-mail had no message body.

    *   GEN_RESULT_SCANNER_NOT_INITIALIZED - the scanner was not initialized prior to the first attempted use.

    *   GEN_RESULT_REINITIALIZATION_PROHIBITED - a scanner has previously been initialized.

    *   GEN_RESULT_PARAMETER_INVALID - a parameter is invalid.

    *   GEN_RESULT_POLICY_INVALID - the scan policy is invalid.

    *   GEN_RESULT_OUT_OF_MEMORY - the scanner cannot allocate new memory.

    *   GEN_RESULT_LOAD_MESSAGE_CATALOG_FAILED - failed to load the message catalog.

    *   GEN_RESULT_UNEXPECTED_EXCEPTION_CAUGHT - an unexpected exception occurred.

    *   GEN_RESULT_EMPTY_POLICY - the policy was empty or no scanners were enabled.

    *   GEN_RESULT_DEFINITION_DIR_UNSET - the definition directory does not exist.

    *   GEN_RESULT_AVSCANNER_IN_SCANNINGORDER_NOT_INITIALIZED - the scanner was set in the scanning order policy but was not initialized.

    *   LIC_RESULT_POLICY_INVALID - there are no licensed features registered.

    *   LIC_RESULT_LICENSE_NOT_INSTALLED - a license manager cannot be created or a memory error occurred while accessing the license library API.

    *   LIC_RESULT_NO_LICENSE_MANAGER - a license manager cannot be created. A license manager is required to access the license library API.

    *   LIC_RESULT_INVALID_AV_SCANNER_LICENSE - the license for the AV scanner feature cannot be created.

    *   LIC_RESULT_INVALID_DECOMPOSER_SCANNER_LICENSE - the license for the decomposer scanner feature cannot be created.

    *   LIC_RESULT_INVALID_ANTISPAM_UPDATES_LICENSE - the license for the antispam content scanner cannot be created.

    *   LIC_RESULT_INVALID_AV_UPDATES_LICENSE - the license for the AV content feature cannot be created.

For more information and code examples, see [msys.av.scan](lua.ref.msys.av.scan "msys.av.scan") and [msys.av.scan_part](lua.ref.msys.av.scan_part.php "msys.av.scan_part").

**14.22.3.2. Sieve Usage**

The antivirus framework automatically registers Sieve actions for each antivirus engine that is loaded into Momentum, allowing you to selectively run the engine based on criteria in a Sieve script. The chief benefit of doing this is the reduced CPU cost of scanning messages if some earlier validation has already decided that the mail will be rejected. In order to reap this benefit, you should load the csapi module in `passive` mode as described in [Section 14.22.1, “Configuration”](modules.csapi#modules.csapi.configuration "14.22.1. Configuration").

Validation modules loaded in passive mode will not have their validation hooks called automatically, which means that inbound messages will not be virus scanned unless you explicitly call the corresponding Sieve action.

Usage is as simple as:

`csapi_avscan;`

This action returns no value. The scanning process will mark up the validation context for further processing by a Sieve script. This action must be run in one of the data phase hooks. However, you can process the scan result in a later phase, such as each_rcpt_phase1.

As an example, add the following block to your `ecelerity.conf` file:

<a name="idp18840432"></a>

**Example 14.38. csapi Sieve configuration (3.1)**

```
csapi {}
antivirus "antivirus1" {
  csapi "csapi1" {
    enabled = false
    action = "pass"
    context_variable = "virus"
    max_concurrency = 4
  }
}

sieve "sieve1" {
  script "data_phase1" {
    source = "/path/to/csapi_scan.siv"
  }
  script "each_rcpt_phase1" {
    source = "/path/to/csapi_process.siv"
  }
}
```

Save the following Sieve script to `/path/to/csapi_scan.siv`, or add it to any other data_phase1 script:

`csapi_avscan;`

And save the following Sieve script to `/path/to/csapi_process.siv`:

```
if vctx :contains "virus" "error" {
  ec_action 451 "AV system offline" "virus:check error";
  stop;
}
elsif vctx :contains "virus" "" {
  ec_action 550 "Virus detected %{vctx_mess:virus_info}" "virus:Viruses rejected";
  stop;
}
# if we got here, there was no virus detected
```

The `%{vctx_mess:virus_info}` will contain the virus name as defined by the CSAPI library. The actual name of the info context variable is based on the context_variable that was set in the configuration stanza. See [Section 14.5, “antivirus – Antivirus Modules”](modules.antivirus "14.5. antivirus – Antivirus Modules") for more details.

**14.22.3.3. Current Anti-virus Signature Version**

The current anti-virus signature version can be found using the following `ec_console` command:

**antivirus:*`antivirus1`* version**

The following is a sample output, where *`antivirus1`* is the instance name for the antivirus module. The line "AV definitions version" gives the signature version.

```
12:15:22 /tmp/2025> antivirus:antivirus1 version
antivirus: symantec DEC scanner version number: 5.2.3.6
AV scanner version number: 9.1.3.30
AV definitions version: 20150215.001
Up to date
```
**14.22.3.4. Symantec LiveUpdate**

Updates are pulled down using Symantec LiveUpdate, which is a Java program installed as part of the msys-csapi package. LiveUpdate is invoked periodically by the CSAPI library (used by the `ec_avscan` daemon). The option `update_interval` controls how often LiveUpdate is run.

LiveUpdate will download the updates, unpack them, and move them into an "incoming" directory. That directory is then picked up by the `ec_avscan` daemon. `ec_avscan/CSAPI` will then examine the updates and apply them.

LiveUpdate will log its progress to `/opt/Symantec/LiveUpdate/liveupdt.log`. Monitor this log to see if updates are being downloaded successfully. If no new logs are appearing in that file, there is some issue with `ec_avscan` that is preventing it from running LiveUpdate.

LiveUpdate will download updates and unpack them under `/tmp`. Note that `/tmp` must have at least 3 GB of free space. Otherwise, LiveUpdate will fail and not be able to download and apply new updates. `/opt/Symantec/LiveUpdate/liveupdt.log` will contain an error when there is not enough disk space to download and unpack the updates.

| [Prev](modules.conntrol)  | [Up](modules.php) |  [Next](modules.custom_bounce_logger.php) |
| 14.21. conntrol – Fine-Grained Connection Control  | [Table of Contents](index) |  14.23. custom_bounce_logger – Custom Bounce Logging |
