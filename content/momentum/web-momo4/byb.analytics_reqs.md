|     |     |     |
| --- | --- | --- |
| [Prev](byb.disable_postfix)  | Chapter 6. Before You Begin |  [Next](download_bundle) |

## 6.18. Verifying Analytics Node Requirements

Analytics nodes have very specific requirements for the HP Vertica Analytic Database. Ensure that the node is suitable for Vertica prior to installation.

First, verify that each Vertica/Analytics node contains at least 8GB of RAM overall and at least 2GB of RAM per CPU.

Next run the `validate_vertica_node` script to ensure that the node's hardware is properly configured for Vertica. You can get this script from the Message Systems Support Download page. Click on Momentum 4.0.0, then click on 'Script to validate if the Analytics software can be installed on a server'. Please note: you will need to run `chmod +x validate_vertica_node` to make the script executable.

This validation script checks that these requirements have been met. After you download the script to the target server, ensure that it is executable and execute it. An unsuitable node will display errors such as the following:

```
Checking node.lan suitability for installing Vertica
    FAIL (S0150): https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0150
        These disks do not have 'deadline' or 'noop' IO scheduling: '/dev/sda1,/dev/sda2'
    FAIL (S0020): https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0020
        Readahead size of /dev/sda2 is too low for typical systems: 256 < 2048
    FAIL (S0020): https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0020
        Readahead size of /dev/sda1 is too low for typical systems: 256 < 2048
    FAIL (S0180): https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0180
        Insufficient swap size. Need 2.00 GB, have 0 GB
    FAIL (S0081): https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0081
        SELinux appears to be enabled and not in permissive mode.
    FAIL (S0310): https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0310
        Transparent hugepages is set to 'always'. Must be 'never' or 'madvise'.
    FAIL (S0030): https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0030
        ntpd process is not running: ['ntpd', 'ntp']
```

When `FAIL` is returned, check the referenced URL for a detailed description of the error. The failures shown above relate to:

*   See [I/O Scheduling](https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0150)

*   See [Disk Readahead](https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0020)

*   See [Swap Space Requirements](https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0180)

*   See [SELinux](https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0081) and [Section 6.5, “Disable SELinux”](byb.disable_selinux "6.5. Disable SELinux")

*   See [Transparent Hugepages](https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0310)

*   See [The NTP Server](https://my.vertica.com/docs/7.0.x/HTML/index.htm#cshid=S0030) and [Section 6.6, “Enable Network Time Protocol (NTP)”](byb.ntp "6.6. Enable Network Time Protocol (NTP)")

|     |     |     |
| --- | --- | --- |
| [Prev](byb.disable_postfix)  | [Up](before_you_begin) |  [Next](download_bundle) |
| 6.17. Disable Postfix and QPIDD  | [Table of Contents](index) |  Chapter 7. Download the Software Bundle and Prepare |

