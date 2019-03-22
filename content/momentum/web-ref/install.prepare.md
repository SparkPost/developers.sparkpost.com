| [Prev](install.security)  | Chapter 1. Installation |  [Next](install.os-specific.php) |

## 1.4. Preparing the System

While Momentum will install and run out of the box, with very little configuration, some steps should be taken to remove or reduce obvious performance bottlenecks.

### 1.4.1. Allocating Spool Space

Like all MTAs, Momentum must journal the messages it receives to disk before responding to the sender with a positive reception code. This is typically the largest bottleneck in mailing systems. Momentum is specifically designed to reduce the negative effect that writing to and reading from the queue has on the overall speed of delivery. Nevertheless, it is important to note that you simply cannot deliver messages faster than the underlying hardware allows.

### Note

It is possible to circumvent the journaling of messages to disk (and thus boost performance) via the modular IO system. This is an advanced topic and requires real-time interaction with the message generation system to ensure complete and unduplicated delivery in the event of a system failure.

The spool storage facility should be the fastest media available on your system. At a minimum, it should be a dedicated 10,000 RPM SCSI2 spindle. RAID1 and RAID10 are the only RAID levels supported. (RAID levels 4 and 5 are not recommended due to the access patterns on mail spools.)

### Warning

For the spool, Momentum only supports RAID 10.

Serious performance degradation may occur if spool information is stored on the same disk or RAID volume as log information or system swap space.

The base path for the spool directory used in all examples throughout this manual is `/var/spool/ecelerity`.

Momentum uses a hashed, two-level directory structure for storing spool messages and headers. Two files are stored per message (one data and another metadata). The metadata file consists of various information concerning the reception and state of the message as well as the sender and the recipient. The data file contains the body of the message and should be viewable via typical system commands like **less** and **more**.

The first level of the spool directory stores no files. It has 256 directories under which the spooled data/metadata files reside. Assuming a spool size of 10,000 messages, you will find 20,000 files evenly distributed across 256 directories resulting in approximately 78 files per directory. Any file system should support this structure.

However, depending on your volume of your mail service and the immediate deliverability of your emails, the queue size can potentially grow quite large. A properly chosen file system is important for managing larger queues. A spool size of 1,000,000 messages will result in roughly 7800 files per directory.

The metadata file is small (less than one disk block - 512 bytes). The data file represents the email message to be delivered and as such fluctuates with the content size of the emails sent - typically between 4k and 16k. If your spool volume is small and you wish to conserve space, a file system block size of 1k is appropriate. As this block size requires several blocks to be allocated per data file, it does not lead to the best I/O performance. Assuming spool space is not a reasonable restriction, an 8k block size may be more appropriate.

Momentum does not require the creation, modification or access times on either the data or metadata files to be correct (or maintained). So mounting a volume with the `noatime` mount option will greatly reduce the number of unnecessary disk accesses. The spool array should be formatted using either the ext2 or ext4 file system. ext2 and ext4 have comparable performance, with ext4 being considered more reliable (because of journaling). ext3 can slow down performance, so is not recommended.

### 1.4.2. The NFS File System and Momentum

### Warning

We expressly recommend **against** using NFS, because of concerns about its reliability—especially on Linux—and its performance in general.

*   **Do not put the database on NFS**                             – Postgres does not seem to be stable under high load on NFS, and may shut down with database corruption. Linux's NFS is not reliable enough for storing Postgres databases.

*   **Do not put jlogs on NFS**                      – They are not designed to work on NFS.

*   **Do not put software on NFS**                         – Doing this will cause a lot of NFS traffic due to stat operations when various cron jobs start. Additionally, program start up will be really slow.

### 1.4.3. The XFS File System and Momentum 3.4.x

Momentum 3.4.x *cannot* be installed on the XFS file system. If you have already installed Momentum and created links to an XFS file system, you can reinstall in the following way.

### Warning

Attempting the following recovery on a production server is *not* recommended.

First follow these steps on the manager:

1.  Uninstall Momentum by navigating to the directory where Momentum was decompressed and issue the command: **`./installer --uninstall`**             .

2.  Remove any symlinks but not the files themselves.

3.  Unmount the XFS file system partition(s) and use ext2 or ext3 partitions as appropriate.

4.  Reinstall Momentum and check that it can start up using the default configuration.

5.  Copy the current `/opt/msys/ecelerity/etc/conf/` from one of the MTAs:

    ```
    shell>  cd /opt/msys/ecelerity/etc
    shell>  tar -zcf running_conf.tgz conf/ --exclude=.svn
    ```

    (we will confirm later that there are no uncommitted changes on the other MTA's)

6.  Copy the archive file to the manager and uncompress it.

    ```
    shell>  cd /opt/msys/ecelerity/etc
    shell>  tar -zxf running_conf.tgz
    ```

7.  Confirm that the configuration is valid by issuing the command: **`/opt/msys/ecelerity/bin/ec_dump_config`**. If there are any errors, fix them.

8.  Commit the configuration to the repository:

    shell> /opt/msys/ecelerity/bin/eccfg commit -u admin -p *`password`*

Perform the following steps for each MTA.

1.  Uninstall Momentum by navigating to the directory where Momentum was decompressed and issue the command: **`./installer --uninstall`**             .

2.  Remove any symlinks but not the files themselves.

3.  Unmount the XFS file system partition(s) and use ext2 or ext3 partitions as appropriate.

4.  Install Momentum bootstrapping the configuration from the manager. Do not start services when installation completes.

5.  If the bootstrapped configuration differs from the desired configuration, copy the configuration from the to the `/opt/msys/ecelerity/etc` directory.

6.  Determine if there were any local uncommitted changes: **`/opt/msys/3rdParty/bin/svn diff /opt/msys/ecelerity/etc/conf`**                                   .

7.  Commit valid changes or revert invalid ones.

8.  Start services and confirm that the MTA is functional.

### 1.4.4. Allocating Log Space

Momentum can write logs in a variety of formats and can be customized through the use of custom loadable logging modules to log in any format. The default logging format used by Momentum is called "ec format" and is provided by the `ec_logger.so` logging module. This format requires approximately 300MB of log space per 1 million messages.

The other officially supported logging format resembles closely the format produced by the Exim MTA. Aside from the spoolname length being slightly larger, it is identical. This log format provides slightly more information about transactions and requires 700MB of log space per 1 million messages.

Storage allocated for logging must perform reasonably well for sequential write access.

Storage space required for logs is completely dependent upon the data/log retention policies dictated at your facility. The above numbers can be used to make rough projections on capacity; however, we recommend that the sizes of your log files be reviewed periodically to ensure that capacity projections remain accurate based on your locally collected data.

### Warning

Serious performance degradation may occur if log information and spool information are stored on the same disk or RAID volume.

### 1.4.5. Configuring Domain Name Service

Domain Name Service (DNS) is the fundamental network service that provides facilities for mapping "names" to "numbers." For email services, it is used to resolve the domain portion of email addresses to a set of publicized mail exchanges (MXs) and to subsequently resolve those MX hostnames to numeric IP addresses.

Momentum is designed to utilize DNS information as efficiently as possible. In other words, no question is ever asked of a DNS server "unnecessarily." When DNS responses are received by Momentum, the data therein is cached and subsequent demands for that information are served immediately from the internal cache instead of attempting to resolve against the DNS server.

Running a DNS server such as the Internet Software Consortium Berkley Internet Name Domain (BIND) server locally with respect to the Momentum instance has the advantage of reduced DNS query/response latency. Sending a high volume of email through Momentum can induce up to 200 DNS queries per second. If your DNS server is not capable of sustaining such a query rate, DNS service may become the limiting factor in delivery speed.

If you already have a DNS server running on your server, you do not need to take any further steps. If you don't, the following configuration provides the minimum services to support Momentum using BIND9.

Use your package manager to install BIND. On Red Hat-type systems you can do this by issuing the command: **`sudo yum install bind`**                  .

A typical caching-only BIND `named.conf` configuration file is as follows:

```
options {
        directory "/var/named";
};
zone "." {
        type hint;
        file "named.ca";
};
zone "0.0.127.in-addr.arpa"{
        type master;
        file "named.local";
};
```

On Red Hat-type systems this file is installed to the `/etc` directory.

`/var/named` is the directory that the cache lives in. Inside that directory you need the files `named.ca` and `named.local`. named.ca contains the addresses of the root DNS servers. If you don't have one of these, you can generate it with the following command:

`dig @[some working nameserver] > /var/named/named.ca`
### Note

Instead of using **`dig`**, you can get this file directly by going to [www.internic.net/domain/named.root](http://www.internic.net/domain/named.root).

`named.local` just needs to provide lookups for localhost. You can use the following file:

```
@               IN      SOA     localhost.      root.localhost. (
                        1997022700 ; serial
                        28800 ; refresh
                        14400 ; retry
                        3600000 ; expire
                        86400 ; default_ttl
                        )
@               IN      NS      localhost.
1               IN      PTR     localhost.
```

### 1.4.6. Stop Any MTAs That May be Running

If another MTA is running, Momentum may fail after installation. To avoid this possibility, stop or remove any existing MTAs. For example, you can determine if **sendmail** is running by issuing the command **`ps aux | grep sendmail`**                     . If **sendmail** is running you should see output such as the following:

```
root   3078  0.0  0.3   7780  1656 ?    Ss   15:15  »
  0:00 sendmail: accepting connections
mail   3120  0.0  0.2   6988  1436 ?    Ss   15:15  »
  0:00 sendmail: Queue control
mail   3121  0.0  0.2   6988  1328 ?    S    15:15  »
  0:00 sendmail: running queue: /var/spool/clientmqueue
```

The same warnings apply if other mail servers such as Postfix are running. To determine if Postfix is running issue the command **`ps aux | grep postfix`**                    . (On some systems this process may be running as `smtpd`.)

To determine if a mail server is currently running, you can also connect to port 25 using telnet. If you cannot connect then there is no service running on that port. If there is, the banner that is returned should indicate which service.

To determine if sendmail is running on Solaris issue the command:

`shell> svcs -x sendmail`

If the service is running you will see output such as the following:

```
svc:/network/smtp:sendmail (sendmail SMTP mail transfer agent)
State: online since Wed Jun 16 10:14:50 2009
See: sendmail(1M)
See: /var/svc/log/network-smtp:sendmail.log
Impact: None.
```
**1.4.6.1. Stopping and Removing Mail Servers**

Remove **sendmail** or **postfix** by using the package manager appropriate to your operating system. On CentOS, for example, issue the command **yum remove *`mail_server`***                       . On Solaris use the **pkgrm** command.

Alternately, you can simply stop the *`mail_server`* daemon. On CentOS you can stop the sendmail service by issuing the command **service sendmail stop** . To make sure that the service doesn't restart after rebooting, use the **sudo chkconfig sendmail off**                        command.

To stop the sendmail service on Solaris use the command:

`shell> svcadm disable sendmail`

You can stop Postfix on Solaris in the same way.

### 1.4.7. Cluster Nodes

In a cluster configuration, the node names must be DNS-resolvable in order for nodes to communicate with each other and the cluster manager.

### Note

Prior to Momentum version 3.4, node names could not exceed nineteen characters. As of version 3.4, Momentum uses [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules") for cluster communication and this limitation no longer applies.

The preferred method is to use the machine name and not the fully qualified domain name. This can be achieved using the `/etc/hosts` file as shown below:

```
127.0.0.1      localhost.localdomain localhost
10.79.0.30     manager.example.com   manager
10.79.24.120   mta1.example.com      mta1
10.79.24.125   mta2.example.com      mta2
```

### Note

The hostname and DNS resolution, especially overrides in `/etc/hosts`, must be consistent across the network. The `/etc/hosts` file is only for internal usage and hence should point to internal addresses; external DNS entries (e.g. with a load balancer or NAT host) may bear no relation to the internal mapping.

You can confirm that your `hosts` file is correctly configured by issuing the command **ping *`unqualified_domain_name`***                            . The output should display the FQDN and the IP address. For example, with an `/etc/hosts` file with the entry `192.168.0.50 centos.lan centos` output should be similar to the following:

```
shell> ping centos -c 1
PING centos.lan (192.168.0.50) 56(84) bytes of data.
64 bytes from centos.lan (192.168.0.50): icmp_seq=1 ttl=64 time=0.034 ms
```

This serves two purposes:

1.  It makes sure that the unqualified name can be resolved to an address

2.  Ensures that the address can be resolved back to a FQDN

If your `hosts` file is not configured correctly and a node name is not resolvable, the installer will inform you immediately.

### 1.4.8. Installing the License File

Momentum uses digitally signed software license keys. Momentum licenses can be keyed to a variety of system attributes including but not limited to the hardware address of an Ethernet interface (a.k.a. a MAC address) and the number of processors in the system. After installation, your license is automatically downloaded and installed to the appropriate directory.

Momentum looks to `/opt/msys/ecelerity/etc/license` for the license to operate on this system. This file will be provided by Message Systems as a part of the software license agreement. As a digitally signed file, if the file is modified in any fashion it will be invalidated and Momentum will refuse to use it. If for some reason, your machine configuration changes contact your sales representative for a new license file.

After installation, if you are not connected to the Internet, copy your license to the `/opt/msys/ecelerity/etc` directory before starting the services. If you are installing a cluster configuration, the cluster manager does not require a license.

**1.4.8.1. About Momentum's Licensing**

Momentum licenses are generally tied to the MAC address of the server. They can be tied to the IP address in certain circumstances.

When Momentum is started, it will try to validate the license. If the license is invalid, it will try to fetch the license using the HTTP protocol from http://licenses.messagesystems.com/ on port 80.

If the license is set to expire in less than one week (7 days), then Momentum will try to fetch a new license. If a license cannot be fetched (invalid/expiring soon), then Momentum will fail to start.

When the Momentum ecelerity process is running, it will check that the license is valid every 15 minutes. If the license has expired, the ecelerity process will shut down.

A cron job also runs daily and attempts to fetch the latest license for the server, if one is available. See the ec_lic_cron command in the crontab file `/etc/cron.d/msys-ecelerity`.

For a MAC address of `xx:00:xx:00:xx:00`, the license would be fetched from `http://licenses.messagesystems.com/all/xx00xx00xx00`.

**1.4.8.2. Connectivity to Message Systems' License Server**

You can check whether a Momentum server has connectivity to Message Systems' license server using **curl**, a 3rd-party tool shipped with Momentum. Issuing the **`/opt/msys/3rdParty/bin/curl http://licenses.messagesystems.com/`**                                      command should return the following output:

```
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
  <HTML><HEAD>
  <TITLE>301 Moved Permanently</TITLE>
  </HEAD><BODY>
  <H1>Moved Permanently</H1>
  The document has moved <A HREF="http://www.messagesystems.com/">here</A>.<P>
  </BODY></HTML>
```

To fetch the license manually for a server with the MAC address `1c:c1:de:07:bf:d6`, issue the command: **`/opt/msys/3rdParty/bin/curl http://licenses.messagesystems.com/all/1cc1de07bfd6`**                                                     .

**1.4.8.3. Access via an HTTP Proxy**

**ec_lic_wrapper** is a shell script that executes the script **/opt/msys/ecelerity/bin/prepare_ec_lic** (if it exists). **prepare_ec_lic** provides a way of defining an HTTP proxy that should be used for downloading licenses.

**ec_lic_wrapper** recognizes the following environment variables:

*   PROXYHOST

*   PROXYPORT

*   PROXYUSER

*   PROXYPASS

A sample file might define the following variables:

```
PROXYHOST=10.8.1.140
PROXYPORT=3128
```

**ec_lic_cron** calls **ec_lic_wrapper**, so license downloads via cron will also use the HTTP proxy configuration if it is defined.

**1.4.8.4. Machines with Multiple Interfaces**

Momentum can cope with machines with multiple MAC addresses. It will try to download a license for each of the interfaces, until it finds one. Note that it will stop at the first license found, even if it has expired. Care is needed to ensure that licenses are issued for the same MAC each time, or that older licenses are removed. Otherwise it may not be able to automatically download new licenses.

Momentum queries the available network interfaces from the OS. The order returned by the OS to Momentum is not necessarily the same as shown by **ifconfig**. The first interface shown by **ifconfig** may not be the same as the first interface found by Momentum.

### Note

The maximum number of IP aliases that Momentum supports is `10240`. Also, it is better to enumerate the interfaces sequentially rather than assigning them arbitrarily.

| [Prev](install.security)  | [Up](install.php) |  [Next](install.os-specific.php) |
| 1.3. Security Considerations  | [Table of Contents](index) |  1.5. Operating System Specific Preparation |
