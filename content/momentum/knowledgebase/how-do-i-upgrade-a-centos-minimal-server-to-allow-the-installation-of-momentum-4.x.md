# How do I upgrade a CentOS Minimal server to allow the installation of Momentum 4.x?

Momentum requires many other packages for its operation. In addition to the packages needed for Vertica (listed in the Momentum install documentation prior to version 4.2.28), the following command should be run on all nodes:

`
yum -y install openssh-clients bind-utils lsof ntp wget perl sysstat
`

You could also install other packages which you may use for systems administration, like editors such as vim or nano.