| [Prev](modules.clamav)  | Chapter 71. Modules Reference |  [Next](modules.cluster) |

## 71.18. cloudmark – Cloudmark Authority® Content Scanning

<a className="indexterm" name="idp20342944"></a>

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The cloudmark module provides message diagnosis via the Cloudmark Authority® spam and phishing protection technology.

If you intend to use this module, be sure to choose it during installation. For more information, see [Section 12.1, “Installing Partner Modules”](post_installation#install.additional.packages "12.1. Installing Partner Modules").

### Note

If you update the Cloudmark cartridge outside of Momentum maintenance releases, you will need to manually reinstall the cartridge after your Momentum upgrade.

The installer does not replace any version of the Cloudmark cartridge you manually installed, even if the version in the Momentum installer is newer than the version currently installed.

When you choose this module during installation the msys-cloudmark-*`version`*.*`os`*.*`arch`*.*`package_type`* package is installed. After installation, perform the following steps before starting the ecelerity daemon:

1.  Get a license file from Cloudmark.

2.  Copy this file to `/opt/msys/3rdParty/cloudmark/etc/license.cfg`.

3.  Configure the Cloudmark module as described below.

The first time that ecelerity is loaded after Cloudmark is enabled, it may take a significant amount of time for the signatures to be downloaded (as much as 10 minutes). This download process is initiated by the line `download micro-updates before init = yes` in the `license.cfg` file. It is not recommended that this option be disabled.

### 71.18.1. Configuration

Validation modules can be loaded passively, in which case the validation system will not call the SMTP transaction hooks defined by the module. When a module is loaded in passive mode, inbound messages will not be virus scanned unless you explicitly call the appropriate Lua action. To load a module passively, set the `enabled` option to `false`.

<a name="example.cloudmark.3.2"></a>

**Example 71.29. cloudmark Configuration**

```
# alternative configuration for Lua operation
# note that there is no instance name
cloudmark {
  enabled = false
  MinimumScore = 80
}
```

### Note

This module is a singleton and is declared without an instance name. Also, you must load this module with `enabled` set to `false` (as shown in [Example 71.29, “cloudmark Configuration”](modules.cloudmark#example.cloudmark.3.2 "Example 71.29. cloudmark Configuration")) and use policy scripts to scan mail. Messages will not be scanned by default.

The following configuration options are available:

<dl className="variablelist">

<dt>Max_Body_Length</dt>

<dd>

The maximum amount of the body to read for processing (in bytes).

</dd>

<dt>MinimumScore</dt>

<dd>

A threshold past which a message will be tagged as spam.

</dd>

<dt>use_wire_rep</dt>

<dd>

If use_wire_rep = `true` (the default setting), then a dot-stuffed representation of the message is held entirely in memory and can be used as received, rather than loading pieces of the message as needed.

If use_wire_rep = `false`, then a dot-unstuffed representation of the message will be generated and passed to the module. This rendered version of the message does not include SMTP wrapping (hence, no dot-stuffing or SMTP terminator), but does include any modifications by the policy scripts. Cloudmark may also use any headers added to the message to perform per-customer processing; for example, a customer may want to treat some ESP mail as spam based on the presence of custom headers.

To summarize:

*   use_wire_rep = `true`: no modifications will be passed to Cloudmark

*   use_wire_rep = `false`: modifications will be passed to Cloudmark

</dd>

</dl>

### 71.18.2. Cartridge Configuration and Momentum

If the following variables are not set in Cloudmark's `cartridge.cfg` file, then virus results are not properly returned to Momentum. Use the following settings:

*   `favor analysis over speed` = `yes`

*   `micro-update signature type` = `comprehensive_sender_rep.4` or `comprehensive.4`

### 71.18.3. Message Context Variables

The cloudmark module sets the following message context parameters:

<dl className="variablelist">

<dt>cmae-score</dt>

<dd>

The Cloudmark authority score for the message, a number between 0 and 100\. The higher the number, the more certain the engine is that the mail is spam.

</dd>

<dt>cmae-isspam</dt>

<dd>

If `MinimumScore` is set, the `cmae-isspam` is set to `true` indicating that the engine has determined the message is spam. No action is directly taken on the message; that is left to the user to do using a policy script.

</dd>

<dt>cmae-category</dt>

<dd>

The category assigned to the message by the Cloudmark Authority

</dd>

<dt>cmae-subcategory</dt>

<dd>

The sub-category assigned to the message by the Cloudmark Authority

</dd>

<dt>cmae-rescan</dt>

<dd>

The rescan flag. If this flag is set to `‘1’`, the email would benefit from a rescan.

</dd>

<dt>cmae-analysis</dt>

<dd>

The Cloudmark Authority analysis header

</dd>

<dt>cmae-category-desc</dt>

<dd>

The Cloudmark category name

</dd>

<dt>cmae-subcategory-desc</dt>

<dd>

The Cloudmark subcategory name

</dd>

</dl>

### 71.18.4. Lua Functions

This module makes the Lua functions `msys.cloudmark.score` and `msys.cloudmark.analyze` available. For a description of how these functions are used, see [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score") and [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze").

### 71.18.5. Console Commands

The cloudmark module can be controlled through the `ec_console`. The following command is available:

<dl className="variablelist">

<dt>cloudmark version</dt>

<dd>

This command outputs version information for the Cloudmark engine, for example:

```
10:47:35 /tmp/2025> cloudmark version
CmaeVersion = "2.0.3.29"
CmaeCartridgeVersion = "3046.2.0.23"
```
</dd>

</dl>

### 71.18.6. Working with the Cloudmark ActiveFilter

This describes how you can configure Momentum to communicate with the Cloudmark ActiveFilter MSI.

1.  Configure Momentum's [maildir](modules.maildir "71.46. maildir – Maildir Delivery Support") module. The Cloudmark ActiveFilter MSI consumes this maildir.

    <a name="example.cloudmark.activefilter"></a>

    **Example 71.30. Configuring the maildir module for use with ActiveFilter**

    ```
    maildir "maildir1" {
      basedir = "/var/spool/ecelerity/msi_maildir"
      dirmode = 775
      filemode = 664
      create_users = true
      domain_in_path = true
      all_domains = false
      domains = ( "msi.local" )
    }
    ```

2.  Create the directory that you defined in the `basedir` option (in the example above, `/var/spool/ecelerity/msi_maildir`) and give it the same ownership as the owner running the `ecelerity` process. This will normally be `ecuser`.

    ### Note

    Be sure to create this directory with the same permissions as defined in the `dirmode` option.

3.  Write Lua policy that writes specially formatted email messages with XML in the body to the configured maildir.

    <a name="idp20427536"></a>

    **Example 71.31. Lua Policy for use with ActiveFilter**

    ```
    require("msys.core");
    require("msys.cloudmark");
    require("msys.extended.message");
    require("msys.extended.vctx");

    local mod = {};

    function mod:init()

      msys.cloudmark.set_af_mode_movemsg("Inbox", "Spam", "no");
      msys.cloudmark.set_af_msi_address("msi@msi.local");

      return 0;
    end

    function mod:validate_rcptto(msg, s, ac, vctx)
      local localpart = vctx:get(msys.core.VCTX_MESS, "rcptto_localpart");
      local domain = vctx:get(msys.core.VCTX_MESS, "rcptto_domain");
      msys.cloudmark.add_af_data(localpart .. "@" .. domain,
                                 { custom_key = "custom_value" });
      return msys.core.VALIDATE_CONT;
    end

    function mod:validate_data(msg, ac, vctx)

      -- Set the ActiveFilter score threshold

      local score = msys.cloudmark.score_af(msg, ac, vctx, 90);
      return msys.core.VALIDATE_CONT;
    end

    msys.registerModule("af_test", mod);
    ```

4.  Set the AF mode by invoking one of the following functions:

    *   [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard "msys.cloudmark.set_af_mode_discard")

    *   [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep "msys.cloudmark.set_af_mode_keep")

    *   [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg "msys.cloudmark.set_af_mode_movemsg")

5.  Set the address for the ActiveFilter MSI Messages using the [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address "msys.cloudmark.set_af_msi_address") function. This should correspond to the maildir defined in the `maildir` module declaration.

6.  Set any required custom values using the [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data "msys.cloudmark.add_af_data") function; for example, the actual account name that you may have queried from a directory. By default, Momentum uses the recipient address if a custom value is not set.

7.  Set the ActiveFilter score threshold using the [msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af") function. If a message is originally marked as "not spam" and the message fingerprint exceeds this score, then it will trigger an ActiveFilter update. Similarly, ActiveFilter will be updated if a message is marked as spam but is later re-classified as "not spam." see .

    ### Note

    The latter case is only significant in the MOVEMSG ActiveFilter mode. If you are discarding messages then there is no action to take in the false positive case.

| [Prev](modules.clamav)  | [Up](modules) |  [Next](modules.cluster) |
| 71.17. clamav – ClamAV  | [Table of Contents](index) |  71.19. cluster – Cluster |

