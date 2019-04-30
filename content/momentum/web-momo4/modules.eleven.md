|     |     |     |
| --- | --- | --- |
| [Prev](modules.ec_logger)  | Chapter 71. Modules Reference |  [Next](modules.engage_tracker) |

## 71.31. eleven – Eleven eXpurgate Content Scanning

<a className="indexterm" name="idp21656432"></a>

The eleven module implements the spam filter and e-mail categorization service available from [http://www.eleven.de/](http://www.eleven.de/). If you intend to use this module be sure to choose it during installation. For more information, see [Section 12.1, “Installing Partner Modules”](post_installation#install.additional.packages "12.1. Installing Partner Modules").

### 71.31.1. Configuration

As with other Validation modules, eleven may be loaded in passive mode which means that inbound messages will not be virus scanned unless you explicitly call a policy script. In order to enforce policy using scripts, this module must be loaded in passive mode. Modules are loaded passively by setting the `enabled` option to `false`.

The following is a typical configuration:

<a name="example.eleven3"></a>

**Example 71.58. eleven module**

```
eleven {
  enabled = false
  work_dir = "/var/tmp"
  update_period = 3600
  license = "/usr/local/eleven/etc/client.key"
  enable_antivir = true
  servers = ( "foo.example.com:55555:1" "bar.example.com:12345:2" )
}
```

The following configuration options are available:

<dl className="variablelist">

<dt>enable_antivir</dt>

<dd>

Enables the Avira SAVAPI-based virus detection. *Note*: The minor results `virus` and `outbreak` are only returned if this option is set to `true`. Default value is `false`.

</dd>

<dt>license</dt>

<dd>

Absolute path to the user's license. Default value is `/usr/local/eleven/etc/client.key`.

</dd>

<dt>servers</dt>

<dd>

Specifies additional update servers. Each server is specified as *`host:port:priority`*. The trailing port and priority fields are optional and, if omitted, default to 55555 (the default port for eleven updates) and 5 respectively. Priority decreases as the numerical value increases with `0` being the highest possible priority.

</dd>

<dt>update_period</dt>

<dd>

How often to poll for updates. Default value is `3600` seconds, one hour. If this value is set to `0`, updates are disabled.

</dd>

<dt>work_dir</dt>

<dd>

Location of temporary files created by this module. Default value is `/var/tmp`.

</dd>

</dl>

### 71.31.2. Lua Functions

This module makes the Lua function `msys.expurgate.scan` available. For a description of how this function is used, see [msys.expurgate.scan](lua.ref.msys.expurgate.scan "msys.expurgate.scan").

**Scores**

Lua creates a string representation of the major score value. These functions annotate the validation context with the following values:

*   eleven-majorscore – Numeric classification of the scan

*   eleven-minorscore – Numeric minor classification

*   eleven-result – String representation corresponding to the eleven-majorscore number

*   eleven-result-subtype – String representation corresponding to the eleven-minorscore number

If an error occurs, `eleven-majorscore` is set to "error" and `eleven-minorscore` holds the error message. The same applies to `eleven-result` and `eleven-result-subtype`; if an error occurs `eleven-result` is set to "error" and `eleven-result-subtype` is set to the error message.

Otherwise, the major score is set to the numeric major classification and the major result is set to a string version of that classification number. Its value will be one of the following:

*   clean

*   suspect

*   spam

*   bulk

*   dangerous

*   unknown

The minor score is set to the numeric minor classification, and the minor result is set to the string representation corresponding to the eleven-minorscore number. Its value will be one of the following:

*   normal

*   empty

*   empty-body

*   almost-empty

*   bounce

*   advertisement

*   porn

*   virus

*   attachment

*   code

*   iframe

*   outbreak

*   url

*   url-count

*   mail-count

*   sender

*Note*: The minor results `virus` and `outbreak` are only returned if the `enable_antivir` option is set to `true`.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.ec_logger)  | [Up](modules) |  [Next](modules.engage_tracker) |
| 71.30. EC_logger – Momentum-Style Logging  | [Table of Contents](index) |  71.32. engagement_tracker – HTTP Engagement Tracking |

