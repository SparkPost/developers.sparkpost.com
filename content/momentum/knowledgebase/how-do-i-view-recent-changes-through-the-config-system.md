#How Do I view recent changes through the config system?

`In most cases, the first step in troubleshooting a sudden problem on a client system is to ask: "What Changed?".  The config system can help you to know what that is with a few simple commands.`

###Verifying the current checkout

The first thing you need to know, is if all of the nodes actually have the same perspective on what the current configuration is.  SVN info will tell you what the current revision is:

```
$ cd /opt/msys/ecelerity/etc/conf/default

$ /opt/msys/3rdParty/bin/svn info --username=ecuser --password=$(sudo cat /opt/msys/etc/.svcpasswd)
Path: .
URL: https://mgr1:2027/config/default/boot/default
Repository Root: https://mgr1:2027/config/default
Repository UUID: 5b25eddc-70a8-4282-87cc-27c60ca98d1a
Revision: 21
Node Kind: directory
Schedule: normal
Last Changed Author: admin
Last Changed Rev: 21
Last Changed Date: 2014-03-25 00:16:24 +0000 (Tue, 25 Mar 2014)
```

If all of the nodes report the same value, you know they at least have a consistent view, and you know if the most recent change happened recently.  Assuming it did, the next question is, how many changes have happened recently.

###How many changes have been done recently?

To find this out, you need the svn log command.  You can get this history a couple of different ways.  An easy way is to just get the last five or so changes by setting a limit with '-l', like so:

```
$ sudo /opt/msys/3rdParty/bin/svn log -l 5 --username=ecuser --password=$(sudo cat /opt/msys/etc/.svcpasswd)
Error validating server certificate for 'https://mgr1:2027':
 - The certificate is not issued by a trusted authority. Use the
   fingerprint to validate the certificate manually!
Certificate information:
 - Hostname: mgr1
 - Valid: from Wed, 08 Jan 2014 04:25:15 GMT until Thu, 08 Jan 2015 04:25:15 GMT
 - Issuer: ecconfigd server
 - Fingerprint: 2c:46:7a:5e:31:9a:a6:27:2f:0c:cd:f4:82:12:b5:4b:2b:e8:ec:81
(R)eject, accept (t)emporarily or accept (p)ermanently? t
------------------------------------------------------------------------
r21 | admin | 2014-03-25 00:16:24 +0000 (Tue, 25 Mar 2014) | 1 line

updated ecelerity.conf to remove the MSFBL header info and user string
------------------------------------------------------------------------
r20 | admin | 2014-03-20 01:29:49 +0000 (Thu, 20 Mar 2014) | 1 line

updated ecelerity.conf to remove the MSFBL header info and user string
------------------------------------------------------------------------
r19 | admin | 2014-03-19 21:41:10 +0000 (Wed, 19 Mar 2014) | 1 line

updated yahoo delivery rates
------------------------------------------------------------------------
r18 | admin | 2014-03-06 01:33:36 +0000 (Thu, 06 Mar 2014) | 1 line

updated bounce override info
------------------------------------------------------------------------
r17 | admin | 2014-03-05 19:24:53 +0000 (Wed, 05 Mar 2014) | 1 line

increased warmup to 23%
------------------------------------------------------------------------
```

As we can see, there have been 2-3 recent changes, but none of them were particularly significant, each being only a 1 line change.  If we instead wanted to find out how many changes were done in a given date range, we can do it like so:

```
$ sudo /opt/msys/3rdParty/bin/svn log -r {2014-03-18}:{2014-03-25) --username=ecuser --password=$(sudo cat /opt/msys/etc/.svcpasswd)

Error validating server certificate for 'https://mgr1:2027':
 - The certificate is not issued by a trusted authority. Use the
   fingerprint to validate the certificate manually!
Certificate information:
 - Hostname: mgr1
 - Valid: from Wed, 08 Jan 2014 04:25:15 GMT until Thu, 08 Jan 2015 04:25:15 GMT
 - Issuer: ecconfigd server
 - Fingerprint: 2c:46:7a:5e:30:9a:a6:27:2f:0c:cd:f4:87:12:b5:4b:2b:e8:ec:81
(R)eject, accept (t)emporarily or accept (p)ermanently? t
------------------------------------------------------------------------
r18 | admin | 2014-03-06 01:33:36 +0000 (Thu, 06 Mar 2014) | 1 line

updated bounce override info
------------------------------------------------------------------------
r19 | admin | 2014-03-19 21:41:10 +0000 (Wed, 19 Mar 2014) | 1 line

updated yahoo delivery rates
------------------------------------------------------------------------
r20 | admin | 2014-03-20 01:29:49 +0000 (Thu, 20 Mar 2014) | 1 line

updated ecelerity.conf to remove the MSFBL header info and user string
------------------------------------------------------------------------
```

To save time (with cut and paste) you can get the last week's worth of changes readily like so:

```
sudo /opt/msys/3rdParty/bin/svn log -r {$(date -d'-1 week' +%F)}:{$(date +%F}) --username=ecuser --password=$(sudo cat /opt/msys/etc/.svcpasswd)
```

These summaries are often less than helpful though, or even less than accurate, so you'll want to get a picture of what the actual changes have been.

###What exactly was changed?

There are a couple of ways you may want to get this data.  One way is just to get a view of what each change in the relevant period of time was, and you can get that with **svn diff -c** like so:

```
$ sudo /opt/msys/3rdParty/bin/svn diff -c 20 --username=ecuser --password=$(sudo cat /opt/msys/etc/.svcpasswd)
Error validating server certificate for 'https://mgr1:2027':
 - The certificate is not issued by a trusted authority. Use the
   fingerprint to validate the certificate manually!
Certificate information:
 - Hostname: mgr1
 - Valid: from Wed, 08 Jan 2014 04:25:15 GMT until Thu, 08 Jan 2015 04:25:15 GMT
 - Issuer: ecconfigd server
 - Fingerprint: 2c:46:7a:5e:30:9a:a6:27:2f:0c:cd:f4:87:12:b5:4b:2b:e8:ec:81
(R)eject, accept (t)emporarily or accept (p)ermanently? t
Index: ecelerity.conf
===================================================================
--- ecelerity.conf    (revision 19)
+++ ecelerity.conf    (revision 20)
@@ -114,8 +114,8 @@
   Auto_Log = true
   Log_Path = "cluster:///var/log/ecelerity/fbllog.cluster?subscribers=master,fbl_processor"
   Addresses = ( "^.*@fbl\\.domain\\.com" )
-  User_String = "%{vctx_mess:fbl_and_bounce_string}"
-  Header_Name = "X-MSFBL"
+#  User_String = "%{vctx_mess:fbl_and_bounce_string}"
+#  Header_Name = "X-MSFBL"
   Message_Disposition = "blackhole"
 }
```

However, if you have a series of changes that went in close together, you may just want to know what the before and after looks like.  In that case, you want to use the -r argument to define a range of changes, like so:

```
$ sudo /opt/msys/3rdParty/bin/svn diff -r 18:20 --username=ecuser --password=$(sudo cat /opt/msys/etc/.svcpasswd)

Error validating server certificate for 'https://mgr1:2027':
 - The certificate is not issued by a trusted authority. Use the
   fingerprint to validate the certificate manually!
Certificate information:
 - Hostname: mgr1
 - Valid: from Wed, 08 Jan 2014 04:25:15 GMT until Thu, 08 Jan 2015 04:25:15 GMT
 - Issuer: ecconfigd server
 - Fingerprint: 2c:46:7a:5e:30:9a:a6:27:2f:0c:cd:f4:87:12:b5:4b:2b:e8:ec:81
(R)eject, accept (t)emporarily or accept (p)ermanently? t
Index: adaptive_domains.conf
===================================================================
--- adaptive_domains.conf    (revision 18)
+++ adaptive_domains.conf    (revision 20)
@@ -34,11 +34,11 @@
      adaptive_max_deliveries_per_connection = (1 5)
      adaptive_outbound_throttle_messages = (250 1350)
  }
-Domain "Yahoo.com" {
+Domain "yahoo.com" {
      adaptive_enabled = true
-     adaptive_max_outbound_connections = (25 38)
-     adaptive_max_deliveries_per_connection = (3 10)
-     adaptive_outbound_throttle_messages = (2225 10000)
+     adaptive_max_outbound_connections = (28 38)
+     adaptive_max_deliveries_per_connection = (8 30)
+     adaptive_outbound_throttle_messages = (4000 10000)
  }
 Domain "sbcglobal.net" {
      adaptive_enabled = true
Index: policy/outbound_policy.lua
===================================================================
--- policy/outbound_policy.lua    (revision 18)
+++ policy/outbound_policy.lua    (revision 20)
@@ -258,8 +258,8 @@
 --      msg:binding_group("warmup");
 --    end
   elseif bgroup == "commercial" then
-    local warmup = 23;
-    local commercial1 = 58;
+    local warmup = 33;
+    local commercial1 = 67;
     local commercial2 = 100;
     local randgen = math.random(100);
   if randgen <= warmup then
Index: ecelerity.conf
===================================================================
--- ecelerity.conf    (revision 18)
+++ ecelerity.conf    (revision 20)
@@ -114,8 +114,8 @@
   Auto_Log = true
   Log_Path = "cluster:///var/log/ecelerity/fbllog.cluster?subscribers=master,fbl_processor"
   Addresses = ( "^.*@fbl\\domain\\.com")
-  User_String = "%{vctx_mess:fbl_and_bounce_string}"
-  Header_Name = "X-MSFBL"
+#  User_String = "%{vctx_mess:fbl_and_bounce_string}"
+#  Header_Name = "X-MSFBL"
   Message_Disposition = "blackhole"
 }
```

**If you want a quick and easy way to generate a patch-like output of what it will take to revert a particular change, you can reverse the order of those changes, or use a negative argument to **-c** like so:

```
$ sudo /opt/msys/3rdParty/bin/svn diff -c -20 --username=ecuser --password=$(sudo cat /opt/msys/etc/.svcpasswd)
```
This will show you basically the same output but with the "+" and "-" lines reversed, so that it shows what needs to be done to change it back.
