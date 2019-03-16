| [Prev](modules.beik)  | Chapter 14. Modules Reference |  [Next](modules.bounce_classifier_override.php) |

## 14.11. bounce_classifier – Bounce Classifier

<a class="indexterm" name="idp18071504"></a>
### Note

As of version 3.1, this module is deprecated. Use [Section 14.12, “bounce_classifier_override – The Bounce Classifier Override Module”](modules.bounce_classifier_override "14.12. bounce_classifier_override – The Bounce Classifier Override Module") instead.

The bounce classifier module allows you to augment and override the built-in bounce classification system. It allows new rules (static and wildcarded) to be registered within the system, and new categories to be registered as well. Logs can be pulled out of either flat files, or via an arbitrary datasource. The types of datasources available are:

*   `CSV` (installed by default)

*   `SQLite` (installed by default)

*   `PostgreSQL` (installed by default)

*   `ODBC`

*   `LDAP`

### 14.11.1. Configuration

The ds_core module is loaded automatically as required and does not need to be explicitly included.

<a name="example.bounce_classifier.3"></a>

**Example 14.19. bounce_classifier module**

```
bounce_classifier "bounce_classifier1" {
  user_smtp_classification_override = "/path/to/override/text"
  refresh = 900
  custom_classes = [
    99 = "profanity"
  ]
}
```

When querying a flat file instead of a datasource, simply specify the path to the file.

There are two kinds of classification overrides, SMTP and Message Disposition Notification (MDN). SMTP overrides apply to the classification of errors that are returned over the SMTP dialog. MDN overrides apply to messages that are received out-of-band with the delivery. SMTP overrides can be special-cased to apply only to particular domains, whereas MDN overrides apply globally.

'SMTP bounces' are much more common than 'MDN bounces'. To determine the kind of bounce look at the connection stage code in the bounce log. For a description of these codes see [Section E.3, “Connection Stages”](log_formats.connection.stages "E.3. Connection Stages").

<dl className="variablelist">

<dt>user_smtp_classification_override</dt>

<dd>

The SMTP classification override file. The default name of this file is `user_smtp_classification.ovr`. In version 3.0 and higher this file is found in the `/opt/msys/ecelerity/etc/` directory. The file format for SMTP overrides is: `domain,bounce_code,rule` . `domain` can be the empty string, in which case the rule is considered to be global, otherwise the rule will only apply to responses given when talking to the specified domain. `bounce_code` is the numeric bounce classification code you want to assign—this must either be an internal code, or one registered via the `custom_classes` directive. For more information about the internal codes see [Section E.2, “Bounce Classification Codes”](bounce_logger.classification.codes "E.2. Bounce Classification Codes"). When adding new codes be careful not to use existing internal code numbers. `rule` can take one of two forms. If the ‘`|`’ character appears anywhere in the string, it will act as a globbing character in a wildcard, otherwise the string will be considered a simple static pattern. In both cases, the rule will return true if the pattern matches any substring of the classification text. If you use a datasource instead of a flat-file, the datasource query must return 3 fields: domain, bounce_code, rule.

</dd>

<dt>user_mdn_classification_override</dt>

<dd>

The default name of this file is `user_mdn_classification.ovr`. In version 3.0 and higher this file is found in the `/opt/msys/ecelerity/etc/` directory. The file format for MDN overrides is: `bounce_code,rule` . `bounce_code` is the numeric bounce classification code you want to assign—this must either be an internal code, or one registered via the `custom_classes` directive. For more information about the internal codes see [Section E.2, “Bounce Classification Codes”](bounce_logger.classification.codes "E.2. Bounce Classification Codes"). When adding new codes be careful not to use existing internal code numbers. `rule` can be of one of two forms. If the ‘`|`’ character appears anywhere in the string, it will act as a globbing character in a wildcard, otherwise the string will be considered a simple static pattern. In both cases, the rule will return `true` if the pattern matches any substring of the classification text.

</dd>

<dt>refresh</dt>

<dd>

The frequency (in seconds) for refreshing the bounce classifications lists. The default value is `300` seconds.

</dd>

<dt>custom_classes</dt>

<dd>

`custom_classes` is a map of user-defined bounce_codes that have a numeric value less than 100 and a user-defined description string. Registering new bounce codes in this manner will allow you to setup `user_smtp_classification_override` and `user_mdn_classification_override` rules to assign to that bounce code. This description string is currently available via the custom_logger or other internal calls, but will not be rendered in the web UI bounce processing page.

</dd>

<dt>system_smtp_classification_override</dt>

<dd>

The default value for this option is `/opt/msys/ecelerity/etc/updates/smtp_classification.ovr`. Do **not** change this option without consulting support.

</dd>

<dt>system_mdn_classification_override</dt>

<dd>

The default value for this option is `/opt/msys/ecelerity/etc/updates/mdn_classification.ovr`. Do **not** change this option without consulting support.

</dd>

<dt>enable_system_updates</dt>

<dd>

Load unclassified bounce reasons into memory. The default value for this option is `1`. This option must be enabled if you subscribe to the Live Bounce Updates service provided by Message Systems.

### Warning

If you subscribe to the Live Bounce Updates service, be sure to set the value of this option to `1`. In earlier versions of Momentum this option is off. You will **not** receive live updates if this option is `off`. For more information see [Section 14.44, “Live Bounce Updates – Module”](modules.live.bounce.updates "14.44. Live Bounce Updates – Module").

As of version 3.1, the Live Bounce Updates service is included with Momentum at no additional charge and the default value for this option is `1`.

</dd>

</dl>

### 14.11.2. bounce_classifier Management Using Console Commands

The bounce_classifier module can be controlled through `ec_console`; the following command(s) are available:

### Note

In version 3.0, non-singleton module commands are issued using *`Scope_Name`*:*`Instance_Name`* followed by the command. Use the **module list**      command from the system console to determine the scope name or instance name of a module. If a module does not have an instance name it is a singleton.

As of version 3.0, all module-specific commands related to setting or getting module options have been removed. Use the following syntax to set or get module-specific options: **config {set | eval | get} *`Scope_Name [Instance_Name] option [value]`*** . Note that there is no ‘`:`’ between the Scope_Name and the Instance_Name and that the Instance_Name is not used with singleton modules.

**14.11.2.1. bounce_classifier:*`module_name`* reload**

Using this command, a manual reload of the bounce classification overrides can be triggered at runtime.

### 14.11.3. See Also

[Table 9.7, “logging options”](options-summary#logging-options-table "Table 9.7. logging options") , [Section 14.44, “Live Bounce Updates – Module”](modules.live.bounce.updates.php "14.44. Live Bounce Updates – Module") and [Table 9.3, “bounce options”](options-summary.php#bounce-options-table "Table 9.3. bounce options")

| [Prev](modules.beik)  | [Up](modules.php) |  [Next](modules.bounce_classifier_override.php) |
| 14.10. beik – BEIK Module  | [Table of Contents](index) |  14.12. bounce_classifier_override – The Bounce Classifier Override Module |
