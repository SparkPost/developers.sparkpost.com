# How do I enable log rotation with Momentum 4?

To ensure log rotation is set up and working.
Check that **ec_rotate.conf** exists in **/opt/msys/ecelerity/etc** and that **enabled=yes** is set.

An example of which is below:



```
# If enabled=yes, then ec_rotate will perform logfile rotation
# on the set of logfiles listed below.
# If you prefer to disable the default action without modifying
# the crontab entry installed by the package, you should do it here
# by setting enabled=no
#################################
# the options are as follows:
# enabled - yes/no - enables ec_rotate to be run
# logfiles - list of log files to rotate
# retention - the number of old log files to retain
# control_socket - the path to the eelerity Control_Listener socket
# path_to_bzip - where to find the bzip2 binary on your system

enabled=yes

# The list of logfiles to rotate
logfiles =  /var/log/ecelerity/mainlog.ec \
            /var/log/ecelerity/paniclog.ec \
            /var/log/ecelerity/rejectlog.ec \
            /var/log/ecelerity/bouncelog.ec \
            /var/log/ecelerity/acctlog.ec \
            /var/log/ecelerity/smpplog.ec \
            /var/log/ecelerity/ecconfigd.log \
            /var/log/ecelerity/httplog.ec \
            /var/ecconfigd/apache/access.log \
            /var/ecconfigd/apache/error.log
logdirs = /var/log/ecelerity/adaptive

retention = 7

# vim:ts=2:sw=2:et:ft=conf:
```


More information about the file can be found here:  https://support.messagesystems.com/docs/web-momo4/log_rotating.php#conf.ref.ec_rotate.conf.default

Next, please check that a cronjob exists to run the **/opt/msys/ecelerity/bin/ec_rotate** utility daily.  

The contents of **/etc/cron.d/msys-ecelerity-core** should be the following:

`0 0 * * * root /opt/msys/ecelerity/bin/ec_rotate -d >/dev/null 2>&1`

More information about that can be found here:  https://support.messagesystems.com/docs/web-momo4/log_rotating.php#conf.ref.ec_rotate.conf.default

Next, check that the cron jobs are in fact being run as expected and that crond is running.  

```
[root@mom4 default]# ps afx | grep crond
32270 pts/0    D+     0:00          \_ grep crond
 2388 ?        Ss     0:14 crond

```

You could create a test cronjob to run frequently, for example every 1 minute to verify this.

	[root@mom4 default]crontab -e 
	*/1 * * * * echo "job every minute"


Then, please manually run ec_rotate as root by issuing the following command:

`$  /opt/msys/ecelerity/bin/ec_rotate`

