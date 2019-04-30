|     |     |     |
| --- | --- | --- |
| [Prev](modules.exim_logger)  | Chapter 14. Modules Reference |  [Next](modules.fsecure.php) |

## 14.34. fbl – Feedback Loop Module

<a class="indexterm" name="idp19951392"></a>

The feedback loop module is used to manage feedback loop services offered by many ISPs. Providers like Yahoo, AOL, Hotmail, Comcast and others offer this service to qualified senders. The ISP will send a notification email to the sender every time that one of their users clicks on a "This is Spam" or "Report Abuse" type button. Qualified senders are usually required to maintain specific receiving addresses to close the feedback loop such as `abuse@domain.com` and `unsubscribe@domain.com`.

This module provides for FBL message processing, original message header processing and log file generation based on the contents of messages.

### Warning

If you change the configuration of this module at runtime, you must restart the ecelerity process in order for your changes to take effect. To do this issue the command: **`/etc/init.d/ecelerity restart`**         .

### 14.34.1. Configuration

<a name="example.fbl.3"></a>

**Example 14.65. fbl module**

```
fbl {
  Auto_Log = true # default is "false"
  Log_Path = "/var/log/ecelerity/fbllog.ec" # this is the default
  Addresses = ( "^.*@fbl.foo.com" ) # default is unset
  Header_Name = "X-MSFBL" # this is the default
  User_String = "%{vctx_mess:my_context_variable}" # default is unset
  Message_Disposition = "blackhole" # default is blackhole, also allowed to set to "pass"
  Condition = "can_relay" # default is unset, should be name of a vctx entry
}
```

This configures the module to catch all mail addressed to the `fbl.foo.com` domain, process it as an FBL notification message, log it to `/var/log/ecelerity/fbllog.ec` and then blackhole the message. Outgoing messages will have a custom header injected (in this case named `X-MSFBL`) with sending information encoded to support later extraction when a feedback loop is triggered.

<dl className="variablelist">

<dt>Addresses</dt>

<dd>

A list of one or more regular expressions defining the mailboxes for receiving FBL reports.

### Note

In order to be processed, these addresses must be added to the [relay_domains](conf.ref.relay_domains "relay_domains") option.

### Warning

If a domain in this list also appears in the [bounce_domains](conf.ref.bounce_domains "bounce_domains") list, then the incoming FBL complaint message destined to that domain will be logged to **both** `bouncelog.ec` (see [Section E.1.5.1, “The bounce_logger Format”](log_formats.version_3.php#bounce_logger.format3 "E.1.5.1. The bounce_logger Format")) and `fbllog.ec`.

</dd>

<dt>Auto_Log</dt>

<dd>

This option defines whether or not to log to the default log file. The default value is `false`.

### Note

In order for header insertion to work, this option must be set to `true` and the [enable_fbl_header_insertion](conf.ref.enable_fbl_header_insertion "enable_fbl_header_insertion") option must be enabled.

</dd>

<dt>Condition</dt>

<dd>

This option should be set to the name of a message context variable. It is used to enable conditional FBL message markup. You can run in 'auto' mode defining which messages are marked up for FBL processing based on which bindings/domains have `Enable_FBL_Header_Insertion` defined as `enabled` within their scope. Otherwise you can drive the fbl markup logic through policy scripting by setting the context variable defined in the FBL context variable setting. By default this option is unset.

</dd>

<dt>Header_Name</dt>

<dd>

This option defines the name of the header that the MTA will include encoded information in. The default value for this option is `X-MSFBL`. By default, this is a base64 encoded string with the following format: `rcptlocalpart@rcptdomain@binding@bindinggroup@userstring`.

On inbound processing, the MTA will look for the `header` and extract the data. If the header is not found in the original message, no FBL processing will be performed and the message will be handled per the `Message_Disposition` setting.

</dd>

<dt>Log_Path</dt>

<dd>

This option defines the log file. The default value is `/var/log/ecelerity/fbllog.ec`. If you want to aggregate fbl logs on the cluster manager, add `fbllog = "/var/log/ecelerity/fbllog.cluster"` to the `logs` dictionary of the cluster module. For an sample configuration see [Section 7.6.4, “Centralized Logging with bounce_logger and fbl”](cluster.config.logging#cluster.config.logging.centalized.logging "7.6.4. Centralized Logging with bounce_logger and fbl").

</dd>

<dt>Message_Disposition</dt>

<dd>

This option is either `blackhole` to dispose after logging or `pass` to pass the message on to the `Addresses`.

</dd>

<dt>User_String</dt>

<dd>

This user-defined string will be included in the logs. The validation connection and message contexts are typical candidates for logging (either pre-defined context values or context values that you define through the Policy Editor). If you want to log a context variable that is not predefined, you will need to use a script to pull that value into the validation context in the each_rcpt phase. The each_rcpt phase corresponds to the `EACH RECIPIENT` phase in the policy editor.

### Note

The user string uses Sieve++-style macros and expands them, while most other custom logging uses custom_logger-style macros which have a different format. For more information on Sieve++, see [Section 8.4, “Sieve++, Momentum-specific extensions”](sieve.ecaddons "8.4. Sieve++, Momentum-specific extensions").

</dd>

</dl>

### 14.34.2. The FBL log

When a user selects "Mark as Spam", then the ISP generates an Abuse Reporting Format (ARF) message and sends it to one of the recipients defined by the `Addresses` option. When the MTA receives the message in ARF format it then extracts the X-MSFBL header, and decodes and logs it.

Log entries are written to `/var/log/ecelerity/fbllog.ec` as a single line. An example follows.

`1224699438@18/00-02937-E2E6FF84@F@someone@test.com@default@default@abuse@yahoo.com@true`

The fields are delimited by `@` signs and are described in the following table:

<a name="modules.fbl.record.fields"></a>

**Table 14.3. fbllog.ec record fields**

| Offset | Field | Meaning |
| --- | --- | --- |
| 0 | 1224699438 | The date of reception in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970). |
| 1 | 18/00-02937-E2E6FF84 | The message ID. |
| 2 | F | Indicating that this is an FBL entry. |
| 3 | someone | The original recipient local part. |
| 4 | test.com | The original recipient domain. |
| 5 | default | The binding that the message was sent on. |
| 6 | default | The binding group that the message was sent on. |
| 7 | abuse | The feedback type. |
| 8 | yahoo.com | The domain the FBL message was sent to. |
| 9 | true | The user-defined string. |

### Note

Not all ISPs use the ARF format. Hotmail uses the "Junk e-Mail Reporting Program" (JMR) but you can still use the fbl module with Hotmail.

However, the JRM format lacks the message/feedback-report MIME part which means that you can't know the feedback type.

### 14.34.3. Log Rotation and jlog

By default there will be no rotation of the `fbllog.ec` file. To add log rotation for the FBL log, add it to the `/opt/msys/ecelerity/etc/ec_rotate.conf` file. For more information about the `ec_rotate.conf` file see [the section called “The `ec_rotate.conf` File”](executable.ec_rotate#ec_rotate.conf "The ec_rotate.conf File"). The FBL log can be used in conjunction with the jlog module to enable real-time reading of the log by using the following syntax for the Log_Path option:

`Log_Path = "jlog:///var/log/ecelerity/fbllog.rt=>master"`

For more information about the jlog module see [Section 14.43, “jlog – The jlog Module”](modules.jlog "14.43. jlog – The jlog Module").

### 14.34.4. fbl Usage

You can select whether to use this module or not by setting the `Enable_FBL_Header_Insertion` option to `enabled` or `disabled`. The `Enable_FBL_Header_Insertion` option is valid in the global, binding, binding_group and domain scopes. Note that you must also define the fbl module `Auto_Log` as true in order for header insertion to work.

<a name="idp20031280"></a>

**Example 14.66. fbl usage**

```
Enable_FBL_Header_Insertion = disabled

Domain "aol.com" {
   Enable_FBL_Header_Insertion = enabled
}

Binding "foo" {
   Domain "yahoo.com" {
     Enable_FBL_Header_Insertion = enabled
   }
}
```

### 14.34.5. Scripting Usage

**Lua Scripts**

With Lua, FBL scripting is typically implemented by the adaptive module. For more information see [Sweep Rules – Configuring Bounce and FBL Behavior](https://support.messagesystems.com/docs/web-ad/ad.rules.sweep.rules).

**Sieve Scripts**

In the following example, replace `abuse@mydomain` with your registered fbl address This value can also be a regular expression such as ".*\@yourdomain.com". `X-MailingID` is a selected header identifier, but it can be replaced with anything.

```
if not header :is "to" "abuse@domain.com" {
  ($Orig_MailingID) = ec_header_get "X-MailingID";
  vctx_mess_set "MailingID" $Orig_MailingID;
}
```

|     |     |     |
| --- | --- | --- |
| [Prev](modules.exim_logger)  | [Up](modules.php) |  [Next](modules.fsecure.php) |
| 14.33. exim_logger – Exim-Compatible Logging  | [Table of Contents](index) |  14.35. fsecure – F-Secure |
