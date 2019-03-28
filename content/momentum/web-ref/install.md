|     |     |     |
| --- | --- | --- |
| [Prev](p.guide)  | Part I. Configuration Guide |  [Next](install.requirements.php) |
## Chapter 1. Installation
**Table of Contents**

* [1.1\. System Requirements](install.requirements)
* [1.2\. Ports Used by Momentum](install.ports)
* [1.3\. Security Considerations](install.security)
* [1.4\. Preparing the System](install.prepare)
* [1.5\. Operating System Specific Preparation](install.os-specific)
* [1.6\. Installation on Linux](install.linux)
* [1.7\. Installation on Solaris](install.solaris)
* [1.8\. Installer Options](install.options)
* [1.9\. Installing Additional Packages](install.additional.packages)
* [1.10\. Riak Server](install.riak)
* [1.11\. Performing a Stand-alone Installation](install.standalone)
* [1.12\. Installing a Cluster](install.cluster)

The binary packages are designed for easy installation. Each platform uses its native installation format (`RPM` for Linux, `pkg` for Solaris). All installations have identical installation paths, so no path translations are required in this section.
The supported platforms are as follows:
*   Red Hat Enterprise Linux 5 (x86_64)
*   Red Hat Enterprise Linux 5 (i386)
*   Red Hat Enterprise Linux 6 (x86_64) (As of version 3.4.)
*   Solaris 10 (amd64)
*   Solaris 10 (sparcv9)
### Note
Message Systems only supports 64-bit environments for Momentum 3.6.x and later.
### Note
Please unset the following environmental variables before installing or upgrading:
*   unset `LC_MONETARY`
*   unset `LC_NUMERIC`
*   unset `LC_MESSAGES`
*   unset `LC_COLLATE`
*   unset `LC_CTYPE`
*   unset `LC_TIME`
The variables are sometimes set by your terminal program, by iTerm for Mac OS X, for example. Also, make sure that the following variable is set:
`LANG=en_US.UTF-8`
This is especially important for upgrades from 3.2.x to 3.3.x.
The expected installation path is `/opt/msys/ecelerity`: If you choose to move this installation to a different final location we recommend soft linking `/opt/msys/ecelerity` to that location.
If you are upgrading to Momentum version 3.3, be sure to review [Section 4.3.1, “PostgreSQL in Momentum Version 3.3”](operations.postgresql#operations.postgresql.migrating.3.3 "4.3.1. PostgreSQL in Momentum Version 3.3").
## Supported Versions in Momentum 3.5.4
*   Red Hat 5.9 (and its CentOS equivalent) on both i386 and x86-64 architectures
*   Red Hat 6.4 (and its CentOS equivalent) on x86-64 architecture
*   Solaris variants: Solaris 10 (minimum level U3) on both SPARC and AMD64 architectures
*   Note that Momentum 3.5 and future releases are not supported on Red Hat 4\. Red Hat dropped support for this release in February 2012.

|     |     |     |
| --- | --- | --- |
| [Prev](p.guide)  | [Up](p.guide.php) |  [Next](install.requirements.php) |
| Part I. Configuration Guide  | [Table of Contents](index) |  1.1. System Requirements |
