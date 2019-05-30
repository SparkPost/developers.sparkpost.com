# YUM install issue with RHEL 6 and 7 on AWS
When installing Momentum on RHEL 6 and 7 in AWS, we have seen some customers run into issues where the installation fails with the following error:

```
Could not retrieve mirrorlist https://None/pulp/mirror/rhui-client-config/rhel/server/6/x86_64/os error was
14: PYCURL ERROR 6 - "Couldn't resolve host 'None'"
Error: Cannot retrieve repository metadata (repomd.xml) for repository: rhui-eu-west-1-client-config-server-6. Please verify its path and try again
```  

Please try the following if you see this issue:  

1. Make sure the file /etc/yum.repos.d/rhui-load-balancers.conf has the AWS region set properly. For example, for us-east:

	```
	rhui2-cds01.us-east-1.aws.ce.redhat.com
	rhui2-cds02.us-east-2.aws.ce.redhat.com
	```  
  
2. The usual way we start the installation is by:

	`sudo ./setrepodir`  

The ./setrepodir script establishes some environmental parameters for the installation.

Instead do this:  
`sudo ./setrepodir -i`  

The  option "-i" in the setrepodir script would copy the repository file to /etc/yum.repos.d/ folder which would be good for keeping the repository configuration file in the default location.  
Also remove the --config momentum.repo part of the yum install command for a couple of different reasons:  
When a configuration file is defined for yum with --config it will not read other included configuration files, but does not disable any of the other repositories that are currently enabled on the instance. When you pass your original command, this means that yum is still going to look through the 3 default Red Hat repositories, but not have the configuration for the Red Hat yum plugins that are required in the AWS environment to authenticate with the Red Hat repositories or the load balancers used to hit Red Hat mirrors. This will result in the errors that are currently being shown.
Between the yum.conf and other included configurations in /etc/yum/pluginconf.d/ there will be discrepancies in the yum install process.