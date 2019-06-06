# How do I install Momentum 4.x in a virtual environment?

**Note**: To be used as a guide to installing Momentum 4.x in a staging or testing environment only, to familiarize yourself with the installer and the procedure only. VM installation is not recommended in a production environment.

### Momentum 4 VM installation

#### VM specification:

- Redhat64
- 2GB memory
- 16GB Drive space
- 2 network interfaces,1st is NAT the 2nd is "host only adapter"

#### OS installation:

- Basic Storage Devices
- Which type of installation would you like?
select "custom layout".
- Select the device, then click "Create a standard partition"
- Create a partition with / as the mount point, ext4 as the file system type and 12000MB as the size.
- Create a swap partition:
- Select the Free space, click create, select swap as the file system type, fill to maximum allowable size, click next, click Format.
- Install bootloader on /dev/sda
- Install as a "basic server"

#### OS Customizations:

- Switch off IP tables,

	*chkconfig iptables off*

- Switch off Postfix, 

	*chkconfig postfix off*

- Switch on ntpd,

	*chkconfig ntpd on*

- Switch off SELinux by setting it to disabled.

	*vi /etc/selinux/config *

	```
	SELINUX=disabled
	```
	
- Check that eth0 is set to \"ONBOOT=yes\" in /etc/sysconfig/network-scripts/ifcfg-eth0

- Create new eth1 interface so ssh access is allowed from the host to the vm instance.

	*vi /etc/sysconfig/network-scripts/ifcfg-eth1*
	
	```
	DEVICE=eth1
	BOOTPROTO=static
	IPADDR=192.168.56.202
	NETMASK=255.255.255.0
	```
	
	**Note**:  IPADDR=192.168.xxx.yyy (this corresponds to the vboxnet0 network, mine is 192.169.56.100, so an IP from 101 and onwards)
	NETMASK=255.255.255.0

- Add the IP address and hostname to /etc/hosts

	*vi /etc/hosts*
	
	```
	<IP_ADDRESS> <$hostname>
	```
	
- Restart the network making sure both eth0 and eth1 come up

	*/etc/init.d/networking restart*
	
- ping an internet address to check external connectivity

	Add the following to /etc/rc.local
	
	```
	Momo 4.0 - Vertica
echo deadline > /sys/block/sda/queue/scheduler
/sbin/blockdev --setra 2048 /dev/sda
/sbin/blockdev --setra 2048 /dev/sda1
/sbin/blockdev --setra 2048 /dev/sda2
	```
	
	```
	Disable transparent_hugepage
if test -f /sys/kernel/mm/transparent_hugepage/enabled; then
 echo never > /sys/kernel/mm/transparent_hugepage/enabled
fi
	```
	
	Add the following to /etc/sysctl.conf
	
	```
	Momentum 4 specific
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
net.core.somaxconn = 1024
net.core.rmem_max = 262144
vm.max_map_count = 768000
net.core.wmem_max = 262144
	```
	
**Important**:  REBOOT the system.

The instance should be accessible via ssh

- Remove openjdk
- Confirm if any openjdk packages are installed by running;

	*rpm -qa | grep openjdk*
	
- To remove them, execute the following command, repeating it until all the openjdk packages are removed.

	*yum remove $package_name* 
	
- Installing the Java Runtime Enviromment (JRE)
- Download the rpm from the Oracle downloads page: [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

To install Oracle's Java go to Downloads and download version 7 the JRE RPM for 64 bit Linux.  

- Download the .rpm JRE file: jre-7-linux-x64.rpm
- Install it as follows

	*sudo rpm -Uvh jre-$version-linux-x64.rpm*
	
#### Momentum Installation:

*cd /root*
	
- Unpack the archive:

	*tar zxvf momentum-4$*
	
- Change into the newly created directory:

	*cd momentum-4$*
	
- Change the validate_vertica_node script's permissions to executable:

	*chmod +x validate_vertica_node*	
	
- Run the script, if given the "all clear" proceed to install momentum: 

	*./validate_vertica_node*	

- Run the installer:

	*./installer*
	
#### Enter prompted for information:	

```
Multiple servers? n
Enable Message Generation support (requires additional license)? n (this is for Message Central)
Do you want to enable secure credentials? n
Enter passwords
Confirm services
Confirm reporting UI and REST end points
```

#### Open a new shell session and copy licence file to /opt/msys/ecelerity/etc/ before starting the services.

- Add paths to /etc/init.d/msys-cassandra for the java_home variable if issues arise starting Cassandra:

	Add the following line: *PATH=/bin:/usr/bin:/sbin:/usr/sbin:/usr/java/jre1.7.0/bin/*  just below the line:
	
	*CASS_PID=/var/run/cassandra/cassandra.pid*
	
	then start the Cassandra process:
	
	*/etc/init.d/msys-cassandra start*
	
	If all went well you should see something like;
	
	```
	riak: starting
Starting ecconfigd: done.
Starting Vertica: [ OK ]
Starting API Process: [ OK ]
Starting nginx: [ OK ]
Starting rabbitmq-server: [ OK ]
Starting ETL Process: [ OK ]
Starting cassandra: ........ [ OK ]
Pulling latest config files from repo
Running startup includes (if any)
Starting Ecelerity: 31371
```
```
Welcome to Momentum!
You have made the following selections:
Single node install: mom4-test
```
```
Services:
Reporting UI: http://mom4-test
REST endpoints: http://mom4-test:8081
```

**Note**:  "mom4-test" is the hostname I chose when setting up Linux.

- Install telnet for testing, yum install -y telnet

	