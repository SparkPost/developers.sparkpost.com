# How do I time how long each phase in the SMTP protocol takes when sending to Momentum?

Install the SWAKS utility: [http://www.jetmore.org/john/code/swaks/](http://www.jetmore.org/john/code/swaks/)

If you find that an rpm of this does not work then you may need to install the epel repository, here is an example page that shows how to do this : [http://www.tecmint.com/how-to-enable-epel-repository-for-rhel-centos-6-5/](http://www.tecmint.com/how-to-enable-epel-repository-for-rhel-centos-6-5/)

Once this is installed you can then use the following command to see timing on inbound connections:

```
/usr/bin/swaks -s 127.0.0.1:25 --to foo@foo.com --from foo@foo.com -stl
```

Once this has been sent in you should see the following response:

```
=== Trying 127.0.0.1:25...
=== Connected to 127.0.0.1.
=== response in 0.016s
<-  220 2.0.0 myserver ESMTP ecelerity 3.6.8.47404 r(Core:3.6.8.0) Thu, 24 Sep 2015 13:40:03 -0700
 -> EHLO myserver
=== response in 0.004s
<-  250-myserver says EHLO to 127.0.0.1:40155
<-  250-PIPELINING
<-  250-8BITMIME
<-  250 ENHANCEDSTATUSCODES
 -> MAIL FROM:<foo@foo.com>
=== response in 0.005s
<-  250 2.0.0 MAIL FROM accepted
 -> RCPT TO:<foo@foo.com>
=== response in 0.014s
<-  250 2.0.0 RCPT TO accepted
 -> DATA
=== response in 0.001s
<-  354 3.0.0 continue.  finished with "\r\n.\r\n"
 -> Date: Thu, 24 Sep 2015 13:40:03 -0700
 -> To: foo@foo.com
 -> From: foo@foo.com
 -> Subject: test Thu, 24 Sep 2015 13:40:03 -0700
 -> X-Mailer: swaks v20130209.0 jetmore.org/john/code/swaks/
 ->
 -> This is a test mailing
 ->
 -> .
=== response in 0.020s
<-  250 2.0.0 OK 00/00-28443-3AF54065
 -> QUIT
=== response in 0.005s
<-  221 2.3.0 myserver closing connection
=== Connection closed with remote host.
```

This can be used to see how long each phase is taking in terms of mailing policy and potentially could be use to troubleshoot inbound delays on injection to specific phase or protocol point.

