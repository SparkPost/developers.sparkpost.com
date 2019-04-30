|     |     |     |
| --- | --- | --- |
| [Prev](modules.outbound_smtp_auth)  | Chapter 14. Modules Reference |  [Next](modules.persistio) |

## 14.52. pe2_logger – Module

<a class="indexterm" name="idp20738096"></a>

Use this module to track deliveries and bounces when the MTA is part of a Message Central configuration.

**Configuration Change. ** As of Momentum version 3.5 (Message Central version 3.7) this module has been replaced by the [mc_logger Module](https://support.messagesystems.com/docs/web-mc/mc-mtas).

### 14.52.1. Configuration

<a name="modules.pe2_logger.example"></a>

**Example 14.80. pe2_logger outbound configuration**

```
pe2_logger "pe2_logger1" {
  filename_template = "var/log/ecelerity/pe2/%s-%s-%d-%d"
  batch_interval = 300
}
```

<dl className="variablelist">

<dt>batch_interval</dt>

<dd>

How often log entries are batched and forwarded to the PostgeSQL database. The default value for this option is 300 seconds.

</dd>

<dt>default_ident</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.20.

An optional identifier added to the VERP address immediately preceding the five hexadecimal numbers in the log file name (These numbers relate to Message Central identifiers such as the Org ID and mailing ID). This identifier must include at least one non-hexadecimal character to avoid ambiguity with the fields that follow it. If this option is specified, the identifier will be prepended to the log file name. This option is useful if you are running more than one instance of Message Central where the instances log to the same directory and you wish to have distinct log files.

If you set this option *and* override `filename_template` an additional `%s` macro is required in the definition of `filename_template` as shown below:

```
pe2_logger "pe2_logger1" {
  filename_template = "/var/log/ecelerity/pe2/%s-%s-%s-%d-%d"
  default_ident = "my_identifier"
}
```

If you only set the `default_ident`, and do not set `filename_template`, the module will do the right thing on its own.

</dd>

<dt>filename_template</dt>

<dd>

At runtime, the first string value for the filename template will be replaced with either `bounce` or `delivery` and the second string value with the *`hostname`*. The integer values are, respectively, the Org ID and the Mailing ID. This log file is loaded into the database by the pe2batch process. The default value for this option is `/var/log/ecelerity/pe2/%s-%s-%d-%d`.

</dd>

<dt>suppress_delivery_logs</dt>

<dd>

The default value for this option is `false`. To suppress the creation of logs, set this option to `true`.

</dd>

<dt>timestamp_format</dt>

<dd>

The default value for this option is Unix timestamp format, seconds since the epoch. There are two "special" value: `unix` which is also the default and `SQLServer` which uses `YYYYMMDDTHH:MM:SS.mmm` where `SS.mmm` means seconds with up to 1/1000 of a second resolution.

</dd>

</dl>

The configuration shown in [Example 14.80, “pe2_logger outbound configuration”](modules.pe2_logger#modules.pe2_logger.example "Example 14.80. pe2_logger outbound configuration") is suitable for an outbound MTA. To use this module on an inbound MTA, load it passively as shown below.

```
pe2_logger "pe2_logger1" {
  enabled = false
}
```

When loaded in passive mode, you must use Sieve actions to log events.

Passive operation is not suitable for outbound MTAs, as there is no way to log the delivery in passive mode.

For information on using this module in a Message Central configuration, see [Inbound and Outbound MTAs](https://support.messagesystems.com/docs/web-mc/mc-mtas).

### 14.52.2. Sieve Usage

If you load the module in passive mode, it will no longer log anything and you will instead need to use the Sieve functions [pe2_mark_unsubscribed](sieve.ref.pe2_mark_unsubscribed "pe2_mark_unsubscribed") and [pe2_mark_bounced](sieve.ref.pe2_mark_bounced "pe2_mark_bounced") to log unsubscribe and bounce events.

The `pe2_mark_unsubscribed` Sieve action can be used to implement unsubscribe-via-email; you would configure your policy scripts to make a determination about whether the incoming message is a request to unsubscribe, and then issue a call to `pe2_mark_unsubscribed`.

Note that unsubscribe in this context is equivalent to marking the recipient as unsubscribed in the system, opting them out of **all** future mailings until they are re-subscribed.

When used in passive mode, you must make sure that the MTA is not one being injected into directly by the Message Central generator, as there is no way for that MTA to log deliveries.


|     |     |     |
| --- | --- | --- |
| [Prev](modules.outbound_smtp_auth)  | [Up](modules) |  [Next](modules.persistio) |
| 14.51. outbound_smtp_auth – Module  | [Table of Contents](index) |  14.53. persist_io – Persistent IO Wrapper |
