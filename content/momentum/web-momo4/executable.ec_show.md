| [Prev](executable.ec_sendmail)  | Chapter 74. Executable Commands Reference |  [Next](executable.eccfg) |

<a name="executable.ec_show"></a>
## Name

ec_show — show spool or message information

## Synopsis

`/opt/msys/ecelerity/bin/ec_show` [ -c *`config_file`* ] [ --end_date *`PCRE`* ] [ -h ] [ -m *`message id`*     ] [ -n ] [ --recipient *`PCRE`* ] [ -s ] [ --sender *`PCRE`* ] [ --start_date *`PCRE`* ]

<a name="idp9159936"></a>
## Description

`ec_show` is a utility to show spool or message information. It can also show messages matching a specified PCRE ([Perl Compatible Regular Expression](http://www.pcre.org/)).

### Note

`ec_show` provides a "best guess" calculation of retries and next_attempt based on the messages on disk. (Retries and next_attempt (and code) are not rewritten to disk for cost and performance reasons.) If you need exact information for these values, use the ec_console command [message details](console_commands.message_details "message details"), which looks at the live message's metadata in memory.

`ec_show` has the following options:

<dl className="variablelist">

<dt>-c *`/path/to/config`*</dt>

<dd>

Specify a Momentum configuration file to work with.

</dd>

<dt>--end_date *`PCRE`*</dt>

<dd>

Show the messages whose creation time is no later than the time specified in the PCRE.

</dd>

<dt>-h</dt>

<dd>

Show a help message.

</dd>

<dt>-m *`message_id`*</dt>

<dd>

Show the message specified by *`message_id`*.

</dd>

<dt>-n</dt>

<dd>

Show the count of messages in the spool only.

</dd>

<dt>--recipient *`PCRE`*</dt>

<dd>

Show the messages whose recipients match the specified PCRE.

</dd>

<dt>-s</dt>

<dd>

Show spool the directory including the messages. Spool directory is the default or the file specified by the Momentum configuration file.

</dd>

<dt>--sender *`PCRE`*</dt>

<dd>

Show the messages whose sender match the specified PCRE.

</dd>

<dt>--start_date *`PCRE`*</dt>

<dd>

Show the messages whose creation time is no earlier than the time specified in the PCRE.

</dd>

</dl>

Find below the output of the command **ec_show -s**    when there is one message in the message queue:

```
Message: 00/00-02001-C6DD1CA4
  ID: (slot: 1254219116, pid: 2001, counter: 0)
  BatchID: (slot: 1254219116, pid: 2001, counter: 0)
  ConnID: (slot: 1254219116, pid: 2001, counter: 1)
  Swapped: Yes
  Created: 2009-09-29 06:11:56
  Next Attempt: 2009-09-29 06:11:56
  Retries: 0
  Received From: ESMTP 192.168.0.5:47780
  Received Via: 192.168.0.50:25
  Sender: peter@kubuntu
  Recipient: peter@gmail.com
  Code:
  Size: 505
  Connection Context: [
  connection_message_count = "1"
  pathway = "default"
  ehlo_domain = "kubuntu"
  connection_rcpt_count = "1"
  can_relay = "true"
  ehlo_string = "EHLO kubuntu"
  message_rcpt_count = "1"
  ]
  Message Context: [
  rcptto_string = "RCPT TO:<peter@gmail.com>"
    mailfrom_localpart = "peter"
    mailfrom_string = "MAIL FROM:<peter@kubuntu>"
      rcptto_localpart = "peter"
      rcptto_domain = "gmail.com"
      mailfrom_domain = "kubuntu"
      ]

      Return-Path: <peter@kubuntu>
        Received: from [192.168.0.5] ([192.168.0.5:47780] helo=kubuntu)
        by centos (envelope-from <peter@kubuntu>)
          (ecelerity 3.0.16.33344 r(33348)) with ESMTP
          id 00/00-02001-C6DD1CA4; Tue, 29 Sep 2009 06:11:56 -0400
          Date: Tue, 29 Sep 2009 10:11:58 -0400
          Message-ID: <00.00.02001.C6DD1CA4@centos>
            To: peter@gmail.com
            From: peter@kubuntu
            Subject: test Tue, 29 Sep 2009 10:11:58 -0400
            X-Mailer: swaks v20061116.0 jetmore.org/john/code/#swaks

            This is a test mailing

            .
```

| [Prev](executable.ec_sendmail)  | [Up](exec.cmds.ref) |  [Next](executable.eccfg) |
| ec_sendmail  | [Table of Contents](index) |  eccfg |

