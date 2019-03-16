| [Prev](byb.sysctl.conf)  | Chapter 6. Before You Begin |  [Next](byb.jre) |

## 6.8. Setting Hostnames

<a class="indexterm" name="idp417632"></a>

You must set up system hostnames in a manner that is consistent with Momentum; however, this can be difficult to do in an Amazon Web Services (AWS) environment.

Momentum's installation requires that each node is able to resolve its own hostname (e.g., the value of $HOSTNAME), as well as the hostnames of all nodes in the cluster. We recommend you use fully qualified domain names (FQDNs) for these hostnames.

### Warning

Failure to use consistent and well-resolved hostnames will result in various installation problems and errors.

Run the following commands if your current hostnames are not FQDNs and do not resolve cleanly.

### Note

The following solution is run using basic tools, but you may want to use advanced solutions such as Puppet and cloud-config.

1.  Change the output of `hostname`.

    hostname `hostname -f`
2.  Manually edit the `/etc/sysconfig/network` file so its HOSTNAME field matches the output of `hostname -f`.

    ```
    NETWORKING=yes
    HOSTNAME='mymta1.localnet.example.com'
    ```

3.  Reboot the system. You may also choose to do this:

    `source /etc/sysconfig/network`
4.  Confirm your new hostname resolves successfully.

    `dig +short $HOSTNAME`
5.  Either edit the `/etc/hosts` file on **all systems in the cluster**                        to match this convention or configure your Domain Name Server accordingly.

| [Prev](byb.sysctl.conf)  | [Up](before_you_begin) |  [Next](byb.jre) |
| 6.7. Adjusting `/etc/sysctl.conf`  | [Table of Contents](index) |  6.9. Java Runtime Environment (JRE) |

