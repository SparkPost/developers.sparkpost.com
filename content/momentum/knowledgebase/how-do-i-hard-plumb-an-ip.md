# How do I hard-plumb an IP?

If you are not using DuraVIPs, you might be hard-plumbing IPs to your machine for use in your bindings. In order to do so, please make sure you have an interface configuration file created for every IP you wish to attach to your NIC. Each ifcfg file must have a colon and a number after the name of the interface you are attaching the IP to. If you are plumbing multiple IPs to the same NIC, make sure the numbers after the colon are sequential. Your ifcfg-ethX file might look something like this:


```
ifcfg-eth0:1

DEVICE=eth0:1
BOOTPROTO=static
BROADCAST=X.X.X.X
HWADDR=XX:XX:XX:XX:XX:XX
IPADDR=X.X.X.X
NETMASK=X.X.X.X
NETWORK=X.X.X.X
ONBOOT=yes
```


where the IPADDR is a free IP in your network. In most cases you can copy and paste the ifcfg file from your actual NIC and change the IP address accordingly. 

**Please note, Ecelerity will need to be restarted for all IP-related changes to take effect. A 'config reload' will not suffice.

For information on DuraVIPs, please look here:[https://developers.sparkpost.com/momentum/web-momo4/cluster.config.duravip/](https://developers.sparkpost.com/momentum/web-momo4/cluster.config.duravip/) (access to support.messagesystems.com required)