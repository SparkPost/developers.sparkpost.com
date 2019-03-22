| [Prev](modules.ec_logger)  | Chapter 14. Modules Reference |  [Next](modules.exim_logger.php) |

## 14.32. eleven – Module

<a class="indexterm" name="idp19869280"></a>

The `eleven` module implements the spam filter and e-mail categorization service available from [http://www.eleven.de/](http://www.eleven.de/). If you intend to use this module be sure to choose it during installation. For more information see [Section 1.9, “Installing Additional Packages”](install.additional.packages "1.9. Installing Additional Packages").

### Note

As of version 3.2, this module is available on Solaris (AMD64/SPARCV9). Prior to this, it was only available on Linux.

As of verion 3.5, this module is no longer available on Solaris (AMD64/SPARCV9) nor is it available for Red Hat 6.

Momentum version 3.3 uses version `3.2.0` of Eleven eXpurgate.

### 14.32.1. Configuration

Find a typical configuration below:

<a name="example.eleven3"></a>

**Example 14.63. eleven module**

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

**Configuration Change. ** This feature is available starting from Momentum 3.1.

The configuration options for the eleven module are as follows:

<dl className="variablelist">

<dt>enable_antivir</dt>

<dd>

This option enables the Avira SAVAPI-based virus detection. *Note*: The minor results `virus` and `outbreak` are only returned if this option is set to `true`. The default value for this option is `false`.

</dd>

<dt>license</dt>

<dd>

The absolute path to the user's license. The default value for this option is `/usr/local/eleven/etc/client.key`.

</dd>

<dt>servers</dt>

<dd>

Use this option to specify additional update servers. Each server is specified as *`host:port:priority`*. The trailing port and priority fields are optional and, if omitted, default to 55555 (the default port for eleven updates) and 5 respectively. Priority decreases as the numerical value increases with `0` being the highest possible priority.

</dd>

<dt>update_period</dt>

<dd>

How often to poll for updates. The default value is `3600` seconds, one hour. If this value is set to `0`, updates are disabled.

</dd>

<dt>work_dir</dt>

<dd>

The location of temporary files created by this module. The default value for this option is `/var/tmp`.

</dd>

</dl>

### 14.32.2. Runtime Usage

As with other Validation modules, eleven may be loaded in passive mode which means that inbound messages will not be virus scanned unless you explicitly call a policy script such as [msys.expurgate.scan](lua.ref.msys.expurgate.scan "msys.expurgate.scan") or the `eleven_scan` Sieve action.

In order to enforce policy using scripts, this module must be loaded in passive mode. For more information about loading a module in passive mode see [Chapter 13, *Modules*](modules.overview "Chapter 13. Modules").

**Lua Functions**

This module makes the Lua function `msys.expurgate.scan` available. For a description of how this function is used see [msys.expurgate.scan](lua.ref.msys.expurgate.scan "msys.expurgate.scan").

**Sieve Usage**

When you have loaded this module in passive mode use the [eleven_scan](sieve.ref.eleven_scan "eleven_scan") Sieve action to trigger a scan in the data phase. Otherwise the scan triggers automatically in the data phase.

**Scores**

Both Lua and Sieve create a string representation of the major score value. These functions annotate the validation context with the following values:

*   eleven-majorscore – the numeric classification of the scan

*   eleven-minorscore – the numeric minor classification

*   eleven-result – the string representation corresponding to the eleven-majorscore number

*   eleven-result-subtype – the string representation corresponding to the eleven-minorscore number

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

| [Prev](modules.ec_logger)  | [Up](modules.php) |  [Next](modules.exim_logger.php) |
| 14.31. ec_logger – Momentum-Style Logging  | [Table of Contents](index) |  14.33. exim_logger – Exim-Compatible Logging |
