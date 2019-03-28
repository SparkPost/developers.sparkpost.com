|     |     |     |
| --- | --- | --- |
| [Prev](modules.conntrol)  | Chapter 71. Modules Reference |  [Next](modules.custom_bounce_logger) |

## 71.23. csapi – Symantec CSAPI Antivirus Support

<a className="indexterm" name="idp20759504"></a>

The Content Scanning Application Programming Interface (CSAPI) module provides integration to Symantec's suite of content scanners. This module runs in an external process (`/opt/msys/ecelerity/sbin/ec_avscan`) initiated by Momentum during startup.

If you intend to use this module, be sure to choose it during installation. For more information, see [Section 12.1, “Installing Partner Modules”](post_installation#install.additional.packages "12.1. Installing Partner Modules").

The following is a listing of operating system/architecture combinations and the version of CSAPI that they support:

*   RH4 64 bit – 9.1 with 32 bit emulation

*   RH5 32 bit – 9.1

*   RH4 32 bit – 9.1

*   RH5 64 bit – 9.1 with 32 bit emulation

### 71.23.1. Configuration

You must load the antivirus module in order to run the csapi module. For more information, see [Section 71.6, “antivirus – Antivirus”](modules.antivirus "71.6. antivirus – Antivirus").

The following is an example configuration:

<a name="modules.csapi.example3.1"></a>

**Example 71.38. csapi Configuration**

Validation modules can be loaded passively, in which case the validation system will not call the SMTP transaction hooks defined by the module. When a module is loaded in passive mode inbound messages will not be virus scanned unless you explicitly call the appropriate scripting action. Modules are loaded passively by setting the `enabled` option to `false`, as shown in the following example.

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

In order to use this module, you must configure it in the global scope **and** also within the antivirus scope as shown in [Example 71.38, “csapi Configuration”](modules.csapi#modules.csapi.example3.1 "Example 71.38. csapi Configuration").

The csapi module is a singleton in the global scope but a non-singleton within the antivirus scope. In the global scope, this module only supports the `enabled` and `debug_level` options.

This module shares all of the same configuration options as the global antivirus module, plus the following csapi-specific options:

<dl className="variablelist">

<dt>max_concurrency</dt>

<dd>

Specifies the maximum number of threads the external scanner should use. This setting is **mandatory**. If you do not set this option, it defaults to a value of `1`.

### Note

Be sure to set the concurrency of the [CPU threadpool](conf.ref.threadpool "threadpool") to a value that is less than the `max_concurrency` of the csapi module.

</dd>

<dt>max_cumulative_extract_size</dt>

<dd>

Setting this option to `0` or leaving this option unconfigured will set the maximum cumulative extract size (the maxCumulativeExtractSize variable of CSAPI) to `209715200` (about 200MB). Default value is `0`.

This option can be set to a maximum of `2147483648` (2GB). If you need to set it to a value greater than this, you can set it to a maximum of `4294967294` by starting the ec_avscan scanner process in the following way:

```
shell> /opt/msys/ecelerity/sbin/ec_avscan -DDEBUG \
  -omaxCumulativeExtractSize=4294967294
```
</dd>

<dt>max_extract_depth</dt>

<dd>

Maximum directory depth when extracting an archive. The maximum value is 50; the minimum value is 1; and the CSAPI default value is 10.

</dd>

<dt>max_extract_size</dt>

<dd>

Maximum size in bytes of a file extracted from an archive. The CSAPI default value is `104857600` bytes.

This limit and the following `extract` limits, exist to avoid potential denial of service attacks with messages containing archive files.

</dd>

<dt>max_extract_time</dt>

<dd>

Maximum amount of time in seconds to spend extracting an archive file, a setting of 0 means unlimited. Default value is `180` seconds.

</dd>

<dt>max_file_count</dt>

<dd>

Maximum number of files allowed for a single scan or 0 for no limit. Default value is `5000`.

</dd>

<dt>prefer_mem</dt>

<dd>

This configuration option has not been implemented.

</dd>

<dt>scanner_log</dt>

<dd>

Log file for the external scanner. Default value for this option is `/var/log/ecelerity/csapi.log`.

</dd>

<dt>scanner_path</dt>

<dd>

Path to the external scanning process. Normally, you would not need to change this value. Default value is `/opt/msys/ecelerity/sbin/ec_avscan`.

</dd>

<dt>update_interval</dt>

<dd>

How often to update the antivirus definitions. Default value is `86400` (one day).

</dd>

<dt>use_wire_rep</dt>

<dd>

If use_wire_rep = `true` (the default setting), then a dot-stuffed representation of the message is held entirely in memory and can be used as received, rather than loading pieces of the message as needed.

If use_wire_rep = `false`, then a dot-unstuffed representation of the message will be generated and passed to the module.

### Note

During testing, it has been noted that some viruses avoid detection when use_wire_rep = `true` when used with the CSAPI module. We therefore recommend that use_wire_rep = `false` when used with this module.

</dd>

</dl>

For a list of the configuration options that this module shares with other antivirus modules, see [Section 71.6.1, “Configuration”](modules.antivirus#modules.antivirus.configuration "71.6.1. Configuration"). For the csapi module, the default value for the `context_variable` is `csapi_status`.

### 71.23.2. Context Variables

The csapi module sets two validation context variables:

<dl className="variablelist">

<dt>*`csapi`*_status</dt>

<dd>

Using the `context_variable` option, you can name a context variable whatever you choose. If not set, it defaults to *`engine_name`*_status, hence the name `csapi_status`. If the message is clean, this context variable will not be set.

If there was a problem scanning the message, it will contain `error`. Otherwise, it will contain an empty string.

</dd>

<dt>virus_info</dt>

<dd>

If the *`engine_name`*_status context variable is set, this also sets another context variable named *`engine_name`*_status_info, which contains the virus name as defined by the CSAPI library.

</dd>

</dl>

See [Section 71.6.1, “Configuration”](modules.antivirus#modules.antivirus.configuration "71.6.1. Configuration") for more information about antivirus context variables.

### 71.23.3. Lua Functions

This module supports the [msys.av.scan](lua.ref.msys.av.scan "msys.av.scan") and [msys.av.scan_part](lua.ref.msys.av.scan_part "msys.av.scan_part") Lua functions.

This function returns four values:

*   The *scan status* , which is one of the following values:

    *   msys.av.EC_AV_PART_IS_CONTAINER – A container was passed to `msys.av.scan`.

    *   msys.av.EC_AV_NAME_TOO_LONG – `av_engine_name` is longer than 40 characters.

    *   msys.av.EC_AV_NO_ENGINE – No AV engine is configured.

    *   msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING – AV engine cannot scan the message that was passed in as a stream.

    *   msys.av.EC_AV_ERROR – A runtime error occurred. Check the *engine scan code* .

    *   msys.av.EC_AV_CLEAN – Message was successfully passed to the engine, and it was not classified as infected (that is, the scan code was not RESULT_VIRUS_FOUND). msys.av.EC_AV_CLEAN can be returned if there is a runtime error.

    *   msys.av.EC_AV_INFECTED – Message is classified as infected if the scan code is RESULT_VIRUS_FOUND. The corresponding threat name is returned in the *informational string* .

    *   msys.av.EC_AV_UNSCANNABLE – Message could not be scanned.

*   An *informational string* , which typically contains the virus name; the precise contents of this string depend on the engine.

*   The *name of the AV engine*                  that detected the virus or `nil` if no virus was detected.

*   The *engine scan code*           or `nil` if no engine scan code is available.

    The prefix indicates the category the engine scan code belongs to: AVS_ (antivirus scanner), DEC_ (decomposer), LIC_ (licence), or GEN_ (generic error). Multiple scan codes from one or more categories can occur, but only one code is returned. Which specific engine scan code is returned depends on the following two conditions:

    *   If one or more codes in the AVS_ category occur, one of the AVS_ codes will be the one returned.

    *   If no AVS_ codes occurred (that is, the engine scan codes are in the DEC_, LIC_ or GEN_ categories), the specific code that will be returned is undefined.

    The following engine scan codes can be returned:

    *   AVS_RESULT_SCANNER_NOT_INITIALIZED – Scanner was not initialized.

    *   AVS_RESULT_VIRUS_FOUND – A virus was found.

    *   AVS_RESULT_INVALID_DEFAULT_FILE_EXTENSION – Default extension in the policy is invalid.

    *   AVS_RESULT_SCANFILE_FAILURE – A scan error occurred.

    *   AVS_RESULT_REINITIALIZATION_PROHIBITED – Attempted to re-initialize an already initialized scanner.

    *   AVS_RESULT_DEFINITIONS_MISSING – Definitions are missing or unreadable.

    *   AVS_RESULT_ENGINE_LOAD_FAILED – Engine failed to load for an unknown reason.

    *   DEC_RESULT_SCANNER_NOT_INITIALIZED – Decomposer scanner is not initialized.

    *   DEC_RESULT_POLICY_INVALID – Scan policy is invalid.

    *   DEC_RESULT_MAXIMUM_DEPTH_REACHED – Maximum scan depth was reached.

    *   DEC_RESULT_MAXIMUM_EXTRACT_TIME_EXCEEDED – Maximum extract time was reached.

    *   DEC_RESULT_MAXIMUM_EXTRACT_SIZE_EXCEEDED – Maximum extract size was exceeded.

    *   DEC_RESULT_MAXIMUM_CUMULATIVE_EXTRACT_SIZE_EXCEEDED – Maximum cumulative extract size was exceeded.

    *   DEC_RESULT_MAXIMUM_FILES_EXTRACTED – Maximum file count was exceeded.

    *   DEC_RESULT_ENCRYPTED_CONTAINER_DELETED – An encrypted container was deleted.

    *   DEC_RESULT_ENCRYPTED_CONTAINER_DETECTED – An encrypted container was detected.

    *   DEC_RESULT_MALFORMED_CONTAINER_DELETED – A malformed container was deleted.

    *   DEC_RESULT_MALFORMED_CONTAINER_DETECTED – A malformed container was detected.

    *   DEC_RESULT_PARTIAL_MESSAGE_DETECTED – A partial message was detected.

    *   DEC_RESULT_OUTER_CONTAINER_IS_MIME – Outer container is MIME.

    *   DEC_RESULT_MIME_PARSING_FAILED – Parsing of a MIME message failed.

    *   DEC_RESULT_CONTAINER_EXTRACT_FAILED – Decomposer failed to extract the container.

    *   DEC_RESULT_OPEN_CONTAINER_FAILED – Decomposer failed to open the container.

    *   DEC_RESULT_CONTAINER_ACCESS_FAILED – Decomposer failed to access the container.

    *   DEC_RESULT_UPDATE_CONTAINER_FAILED – The update of the container failed.

    *   DEC_RESULT_CLOSE_CONTAINER_FAILED – Decomposer failed to close the container.

    *   DEC_RESULT_FILE_EXTRACT_FAILED – Decomposer failed to extract a child file from a container.

    *   DEC_RESULT_FILE_ACCESS_FAILED – Decomposer failed to access a child file.

    *   DEC_RESULT_FILE_SPLIT_ACROSS_CONTAINERS – A child file is split across containers.

    *   DEC_RESULT_TEMPFILE_ACCESS_FAILED – Decomposer failed to access a temporary file.

    *   DEC_RESULT_PARAMETER_INVALID – A parameter passed to decomposer is invalid.

    *   DEC_RESULT_OUT_OF_MEMORY – Scanner cannot allocate new memory.

    *   DEC_RESULT_SCAN_ENGINE_EXCEPTION – An exception was caught by the decomposer.

    *   DEC_RESULT_SCAN_FILE_DECOMPOSE_ERROR – A generic error occurred when the decomposer was scanning the file.

    *   DEC_RESULT_INIT_DECOMPOSER_FAILED – Initialization of the decomposer failed.

    *   DEC_RESULT_REINITIALIZATION_PROHIBITED – Decomposer has been initialized already.

    *   DEC_RESULT_DEFINITION_DIR_UNSET – Directory for the decomposer is not initialized. This is typically due to a failure to call ILocalContentScanner::Initialize().

    *   DEC_RESULT_TEMP_DIR_ACCESS_FAILED – Decomposer failed to access the temporary directory.

    *   DEC_RESULT_INVALID_FILE_MODIFICATION – A scanner modified a file or container which could not be modified.

    *   DEC_RESULT_DEF_DIR_ACCESS_FAILED – Decomposer failed to access the definition directory.

    *   DEC_RESULT_FILE_SIZE_TOO_LARGE – File is larger than the decomposer is capable of supporting. The maximum file size is 2 GB.

    *   DEC_RESULT_CHILD_FILE_SIZE_UNKNOWN – Extracted file size is unknown.

    *   DEC_RESULT_LESS_THAN_MINIMUM_EXTRACT_SIZE – Extracted file size is less than the minimum extract size.

    *   DEC_RESULT_CONTAINER_UNKNOWN_ALGORITHM – An unknown container was detected by decomposer.

    *   DEC_RESULT_BUFFER_SIZE_TOO_SMALL – ScanMemory was called with a bufferSize that is too small to hold the output file.

    *   DEC_RESULT_CREATE_OUTPUT_FILE_FAILED – ScanFile was called with an output filename and the output file could not be created (for example, because the file already exists, is read-only, a directory in the path does not exist, etc.)

    *   DEC_RESULT_ENCRYPTED_CONTAINER_CHILD_DETECTED – A container child is encrypted.

    *   DEC_RESULT_ABORTED_AFTER_FIRST_THREAT – Decomposition of the file was halted after the first infected file was found in the parent container.

    *   DEC_RESULT_FAILED_INSERTING_NOTIFICATION_IN_EMPTY_BODY_MIME – Failed to insert notification message inside an email because the e-mail had no message body.

    *   GEN_RESULT_SCANNER_NOT_INITIALIZED – Scanner was not initialized prior to the first attempted use.

    *   GEN_RESULT_REINITIALIZATION_PROHIBITED – Scanner has previously been initialized.

    *   GEN_RESULT_PARAMETER_INVALID – A parameter is invalid.

    *   GEN_RESULT_POLICY_INVALID – Scan policy is invalid.

    *   GEN_RESULT_OUT_OF_MEMORY – Scanner cannot allocate new memory.

    *   GEN_RESULT_LOAD_MESSAGE_CATALOG_FAILED – Failed to load the message catalog.

    *   GEN_RESULT_UNEXPECTED_EXCEPTION_CAUGHT – An unexpected exception occurred.

    *   GEN_RESULT_EMPTY_POLICY – Policy was empty or no scanners were enabled.

    *   GEN_RESULT_DEFINITION_DIR_UNSET – Definition directory does not exist.

    *   GEN_RESULT_AVSCANNER_IN_SCANNINGORDER_NOT_INITIALIZED – Scanner was set in the scanning order policy but was not initialized.

    *   LIC_RESULT_POLICY_INVALID – There are no licensed features registered.

    *   LIC_RESULT_LICENSE_NOT_INSTALLED – A license manager cannot be created or a memory error occurred while accessing the license library API.

    *   LIC_RESULT_NO_LICENSE_MANAGER – A license manager cannot be created. A license manager is required to access the license library API.

    *   LIC_RESULT_INVALID_AV_SCANNER_LICENSE – The license for the AV scanner feature cannot be created.

    *   LIC_RESULT_INVALID_DECOMPOSER_SCANNER_LICENSE – The license for the decomposer scanner feature cannot be created.

    *   LIC_RESULT_INVALID_ANTISPAM_UPDATES_LICENSE – The license for the antispam content scanner cannot be created.

    *   LIC_RESULT_INVALID_AV_UPDATES_LICENSE – The license for the AV content feature cannot be created.

### 71.23.4. Console Commands

The current anti-virus signature version can be found using the following `ec_console` command:

<dl className="variablelist">

<dt>antivirus:*`antivirus1`* version</dt>

<dd>

The following is a sample output, where *`antivirus1`* is the instance name for the antivirus module. The line "AV definitions version" gives the signature version.

```
12:15:22 /tmp/2025> antivirus:antivirus1 version
antivirus: symantec DEC scanner version number: 5.2.3.6
AV scanner version number: 9.1.3.30
AV definitions version: 20150215.001
Up to date
```
</dd>

</dl>

### 71.23.5. Symantec LiveUpdate

Updates are pulled down using Symantec LiveUpdate, which is a Java program installed as part of the msys-csapi package. LiveUpdate is invoked periodically by the CSAPI library (used by the `ec_avscan` daemon). The option `update_interval` controls how often LiveUpdate is run.

LiveUpdate will download the updates, unpack them, and move them into an "incoming" directory. That directory is then picked up by the `ec_avscan` daemon. `ec_avscan/CSAPI` will then examine the updates and apply them.

LiveUpdate will log its progress to `/opt/Symantec/LiveUpdate/liveupdt.log`. Monitor this log to see if updates are being downloaded successfully. If no new logs are appearing in that file, there is some issue with `ec_avscan` that is preventing it from running LiveUpdate.

LiveUpdate will download updates and unpack them under `/tmp`. Note that `/tmp` must have at least 3 GB of free space. Otherwise, LiveUpdate will fail and not be able to download and apply new updates. `/opt/Symantec/LiveUpdate/liveupdt.log` will contain an error when there is not enough disk space to download and unpack the updates.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.conntrol)  | [Up](modules) |  [Next](modules.custom_bounce_logger) |
| 71.22. conntrol – Fine-Grained Connection Control  | [Table of Contents](index) |  71.24. custom_bounce_logger – Custom Bounce Logging |

