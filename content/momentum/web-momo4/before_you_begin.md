| [Prev](addl.config.notes)  | Part II. Installing Momentum |  [Next](byb.os) |
## Chapter 6. Before You Begin
**Table of Contents**

* [6.1\. Momentum License](before_you_begin#byb.msg.gen.license)
* [6.2\. Operating System](byb.os)
* [6.3\. Redundancy](byb.redundancy)
* [6.4\. Load Balancing](byb.load_balancing)
* [6.5\. Disable SELinux](byb.disable_selinux)
* [6.6\. Enable Network Time Protocol (NTP)](byb.ntp)
* [6.7\. Adjusting `/etc/sysctl.conf`](byb.sysctl.conf)
* [6.8\. Setting Hostnames](byb.set_hostnames)
* [6.9\. Java Runtime Environment (JRE)](byb.jre)
* [6.10\. Creating `root` and `vertica_dba` Accounts](byb.root_and_vertica_dba)
* [6.11\. Redefining Ephemeral Ports](byb.redefine_ephemeral_ports)
* [6.12\. Configuring Locale](byb.config_vertica_services)
* [6.13\. Configuring SSH and SSHD](byb.config_SSH_and_SSHD)
* [6.14\. Basic Required Packages](byb.basic_packages)
* [6.15\. Riak Provisioning](byb.riak_provisioning)
* [6.16\. Separate Vertica Partition](byb.vertica_partition)
* [6.17\. Disable Postfix and QPIDD](byb.disable_postfix)
* [6.18\. Verifying Analytics Node Requirements](byb.analytics_reqs)

This chapter describes issues that need to be considered or addressed prior to preparing for the installation on Analytics and/or Platform/MTA nodes.
## 6.1. Momentum License
For each of your servers that run the MTA you will need a `license` file in this directory: `/opt/msys/ecelerity/etc/`
You will need to provide Message Systems with a MAC address for each MTA node in your deployment. Be sure that your nodes have access to the Internet over port 80 so that you can download the license.
### Note
The [Momentum REST Injector](https://support.messagesystems.com/docs/web-rest-injector/) introduced in Momentum 3.14 continues to work in Momentum 4 and does not require a license. You can still use this injector to inject messages with simple template substitutions, but it has a very limited feature set compared to the Momentum 4 REST APIs.

| [Prev](addl.config.notes)  | [Up](p.installing) |  [Next](byb.os) |
| 5.7. Additional Configuration Notes  | [Table of Contents](index) |  6.2. Operating System |
