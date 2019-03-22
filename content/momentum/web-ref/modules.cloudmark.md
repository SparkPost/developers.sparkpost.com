| [Prev](modules.clamav)  | Chapter 14. Modules Reference |  [Next](modules.commtouch.php) |

## 14.18. cloudmark – Cloudmark Authority Module

<a class="indexterm" name="idp18440544"></a>

The Cloudmark Authority module provides message diagnosis via industry-leading spam and phishing protection technology. If you intend to use this module be sure to choose it during installation. For more information see [Section 1.9, “Installing Additional Packages”](install.additional.packages "1.9. Installing Additional Packages").

### Note

As of version 3.2, if you are separately updating the Cloudmark cartridge outside of Momentum maintenance releases, the cartridge will need to be manually reinstalled after your Momentum upgrade. Otherwise, no additional update is required.

As of version 3.3, the installer no longer replaces any version of the Cloudmark cartridge manually installed by the customer. If you have manually installed a version of the Cloudmark module, the installer will no longer replace it during an upgrade, even if the version in the Momentum installer is newer than the version currently installed.

When you choose this module during installation the msys-cloudmark-*`version`*.*`os`*.*`arch`*.*`package_type`* package is installed. After installation, perform the following steps before starting the ecelerity daemon:

*   Get a license file from Cloudmark

*   Copy this file to `/opt/msys/3rdParty/cloudmark/etc/license.cfg`

*   Configure the cloudmark module as described below

The first time that ecelerity is loaded after cloudmark is enabled, it may take a significant amount of time for the signatures to be downloaded (on the order of 10 minutes). This download process is initiated by the line `download micro-updates before init = yes` in the `license.cfg` file. It is not recommended that this option be disabled.

**Configuration Change. ** This feature is available starting from Momentum 3.0.23.

Momentum version 3.3 uses Cloudmark version `2.0.3.29.3049.1.3.14`. Momentum version 3.4 uses the SDK version `3.1.0.13` and the cartridge version is `3051.0.1.18`.

### 14.18.1. Configuration

<a name="example.cloudmark.3"></a>

**Example 14.29. cloudmark module (prior to version 3.4)**

```
cloudmark "cloudmark1" {
  MinimumScore = 80
}

# alternative configuration for Lua or Sieve driven operation
cloudmark "cloudmark1" {
  enabled = false
  MinimumScore = 80
}
```

<a name="example.cloudmark.3.2"></a>

**Example 14.30. cloudmark module (as of version 3.4)**

```
# alternative configuration for Lua or Sieve driven operation
# note that there is no instance name
cloudmark {
  enabled = false
  MinimumScore = 80
}
```

To load a module passively, set the `enabled` option to `false`. Validation modules can be loaded passively, in which case the validation system will not call the SMTP transaction hooks defined by the module. When a module is loaded in passive mode inbound messages will not be virus scanned unless you explicitly call the appropriate Lua or Sieve action.

### Note

As of Momentum version 3.4, this module is a singleton so is declared without an instance name. Also, you must load this module with `enabled` set to `false` as shown in [Example 14.30, “cloudmark module (as of version 3.4)”](modules.cloudmark#example.cloudmark.3.2 "Example 14.30. cloudmark module (as of version 3.4)") and use policy scripts to scan mail. We no longer support having the module scan all messages by default.

<dl className="variablelist">

<dt>MinimumScore</dt>

<dd>

A threshold past which a message will be tagged as spam.

</dd>

<dt>Max_Body_Length</dt>

<dd>

The maximum amount of the body to read for processing (in bytes).

</dd>

<dt>use_wire_rep</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.5.x.

If use_wire_rep = `true` (the default setting), then a dot-stuffed representation of the message is held entirely in memory and can be used as received, rather than loading pieces of the message as needed.

If use_wire_rep = `false`, then a dot-unstuffed representation of the message will be generated and passed to the module. This rendered version of the message does not include SMTP wrapping (hence, no dot-stuffing or SMTP terminator), but does include any modifications by the policy scripts. Cloudmark may also use any headers added to the message to perform per-customer processing; for example, a customer may want to treat some ESP mail as spam based on the presence of custom headers.

To summarize:

*   use_wire_rep = `true`: no modifications will be passed to Cloudmark

*   use_wire_rep = `false`: modifications will be passed to Cloudmark

</dd>

</dl>

### 14.18.2. Cartridge Configuration and Momentum

If the following variables are not set in Cloudmark's `cartridge.cfg` file, then virus results are not properly returned to Momentum. Use the following settings:

*   `favor analysis over speed = yes`

*   `micro-update signature type = comprehensive_sender_rep.4`

You can also use the value `comprehensive.4` for `micro-update signature type`.

### 14.18.3. Cloudmark Runtime Usage

The Cloudmark engine sets the following validation context parameters:

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

Use the [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score") Lua function to return a cloudmark score and the [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze.php "msys.cloudmark.analyze") Lua function to analyze a message. For more information follow the preceding links.

Use the `cloudmark_score` Sieve function to return a string containing the numeric score assigned to the active message. For more information see [cloudmark_score](sieve.ref.cloudmark_score "cloudmark_score").

### 14.18.4. cloudmark Management Using Console Commands

The cloudmark module can be controlled through the `ec_console`; the following command is available:

**14.18.4.1. cloudmark:*`cloudmark1`* version**

This command outputs version information for the Cloudmark engine, for example:

```
10:47:35 /tmp/2025> cloudmark:cloudmark1 version
CmaeVersion = "2.0.3.29"
CmaeCartridgeVersion = "3046.2.0.23"
```

For instructions on using `ec_console` see [System Console](https://support.messagesystems.com/docs/web-ref/operations#operations.console).

### 14.18.5. Working with the Cloudmark ActiveFilter

This describes how you can configure Momentum to communicate with the Cloudmark ActiveFilter MSI. Fundamentally, it involves configuring Momentum's [Section 14.46, “maildir – Maildir Delivery Support”](modules.maildir "14.46. maildir – Maildir Delivery Support") module and writing Lua policy that writes specially formatted email messages with XML in the body to the configured maildir. The Cloudmark ActiveFilter MSI consumes this maildir.

**Configuration Change. ** This feature is available starting from Momentum 3.5.4.

<a name="example.cloudmark.activefilter"></a>

**Example 14.31. Configuring the maildir module for use with ActiveFilter**

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

You must also create the directory that you defined in the `basedir` option (in the example above, `/var/spool/ecelerity/msi_maildir`) and give it the same ownership as the owner running the `ecelerity` process. This will normally be `ecuser`. Also be sure to create this directory with the same permissions as defined in the `dirmode` option.

<a name="idp18528928"></a>

**Example 14.32. Lua Policy for use with ActiveFilter**

```
require("msys.core");
require("msys.cloudmark");
require("msys.extended.message");
require("msys.extended.vctx");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_movemsg("Inbox", "Spam", "no"); <a name="cloudmark_af.one"></a>![1](images/callouts/1.png)
  msys.cloudmark.set_af_msi_address("msi@msi.local");  <a name="cloudmark_af.two"></a>![2](images/callouts/2.png)

  return 0;
end

function mod:validate_rcptto(msg, s, ac, vctx) <a name="cloudmark_af.three"></a>![3](images/callouts/3.png)
  local localpart = vctx:get(msys.core.VCTX_MESS, "rcptto_localpart");
  local domain = vctx:get(msys.core.VCTX_MESS, "rcptto_domain");
  msys.cloudmark.add_af_data(localpart .. "@" .. domain,
                             { custom_key = "custom_value" });
  return msys.core.VALIDATE_CONT;
end

function mod:validate_data(msg, ac, vctx)

  -- Set the ActiveFilter score threshold

  local score = msys.cloudmark.score_af(msg, ac, vctx, 90); <a name="cloudmark_af.four"></a>![4](images/callouts/4.png)
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("af_test", mod);
```

**Discussion**

|

[![1](images/callouts/1.png)](#cloudmark_af.one)

 |

You *must* set the AF mode by invoking one of the following functions:

<dl className="variablelist">

<dt>`msys.cloudmark.set_af_mode_movemsg("Inbox", "Spam", "no")`</dt>

<dd>

This sets the AF mode to `MOVEMSG`. Move messages around based on their status. See See [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg "msys.cloudmark.set_af_mode_movemsg")

Arguments

*   Inbox folder name.

*   Spam folder name.

*   Unread messages only? Values are `"yes"` or `"no"`.

</dd>

<dt>`msys.cloudmark.set_af_mode_discard()`</dt>

<dd>

This sets the AF mode to `DISCARD`. Discard false negatives. No change on false positives. See [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard "msys.cloudmark.set_af_mode_discard")

</dd>

<dt>`msys.cloudmark.set_af_mode_keep()`</dt>

<dd>

This sets the AF mode to `KEEP`. Do nothing for any changes. See [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep "msys.cloudmark.set_af_mode_keep")

</dd>

</dl>

 |
|

[![2](images/callouts/2.png)](#cloudmark_af.two)

 |

This is a required function. Set the address for the ActiveFilter MSI Messages to correspond to the maildir defined in the `maildir` module declaration. See [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address "msys.cloudmark.set_af_msi_address")

 |
|

[![3](images/callouts/3.png)](#cloudmark_af.three)

 |

This callout implementation is optional. Momentum uses the recipient address by default if this is not set. But this allows you to use custom values such as the actual 'account name' that you may have queried from a directory. See [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data "msys.cloudmark.add_af_data")

 |
|

[![4](images/callouts/4.png)](#cloudmark_af.four)

 |

Set the ActiveFilter score threshold as part of the fourth argument in this function. If a message is originally marked as "not-spam" and later the message fingerprint exceeds this score, then it will trigger an ActiveFilter update. Similarly, if a message is marked as spam and later is re-classified as "not spam", then ActiveFilter will be updated as well. Note that the latter case is only significant in the MOVEMSG ActiveFilter mode. Why? If you are discarding messages then there is no action to take in the false positive case. See See [msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af")

 |

| [Prev](modules.clamav)  | [Up](modules.php) |  [Next](modules.commtouch.php) |
| 14.17. clamav – ClamAV  | [Table of Contents](index) |  14.19. commtouch_ctasd – Commtouch_ctasd Module |
