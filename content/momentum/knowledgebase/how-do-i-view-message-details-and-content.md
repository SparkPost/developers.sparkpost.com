# How Do I View Message Details and Content 

## message details

[https://developers.sparkpost.com/momentum/web-momo4/console_commands.message_details/](https://developers.sparkpost.com/momentum/web-momo4/console_commands.message_details/)

Displays message details and content that is in memory. Get the message ID from the reception record and then in ec_console type "message details [message  ID]"


```
/tmp/2025> message details 53/6B-18426-1AAEACF3
Message: 53/6B-18426-1AAEACF3
Message Type: full message
               Created: 2003-12-01 02:15:45
          Next Attempt: 2003-12-01 18:11:25
               Retries: 5
          Received Via: SMTP 10.0.0.103 (IPv4)
                Sender: sender-849629@senderdomain.com
             Recipient: someaddress@example.com
                  Code: 451 No valid hosts (too many connection failures)
                  Size: 11317
```


You can add "body" or "full" to get more data from the message, eg:

- message details body [message  ID] - only shows body of the message
- message details full [message  ID] - shows everything. 

> message details cannot show details for a message that is in the process of being delivered, meaning if you don't see the details it has or is in the process of being delivered.

## ec_show

[https://developers.sparkpost.com/momentum/web-momo4/executable.ec_show/](https://developers.sparkpost.com/momentum/web-momo4/executable.ec_show/)

Utility located at /opt/msys/ecelerity/bin/ec_show that can read messages from a spool. Can show the entire spool with metadata or you can provide some regex flags to filter. Example, this spool has one message:


```
$/opt/msys/ecelerity/bin/ec_show -s
 
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

