# How do I uninstall Momentum 4.1?

### Momentum 4.1 uninstall procedure.

#### Change into the installation directory

```
$ ./installer --uninstall
[root@mom4 momentum-4.1.0.46749]# ./installer --uninstall
Uninstalling packages from last run
Stopping services...
Shutting down ecconfigd: done.
Shutting down Ecelerity: running shutdown includes (if any)
done.
Stopping msc_server process
cat: /var/run/msc_server.pid: No such file or directory
kill: usage: kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]
riak: stopping
Killed
Stopping msyspg service:
OK
Stopping rabbitmq-server: [ OK ]
Stopping cassandra: ... [ OK ]
Stopping all Vertica nodes: [ OK ]
...completed
```

#### Run the uninstall script, the output should look something like this:

```
$ cd /opt
$ rm -rf msys/ vertica/
$ cd /var/
$ rm -rf eccluster/ ecconfigd/
$ cd db
$ rm -rf cassandra/ messagescope/ msyspg/ rabbitmq/ riak/ vertica/
$ cd /var/spool
$ rm -rf ecelerity
```
#### Remove various directories not cleaned up by uninstall script:

```

$ cd /opt
$ rm -rf msys/ vertica/
$ cd /var/
$ rm -rf eccluster/ ecconfigd/
$ cd db
$ rm -rf cassandra/ messagescope/ msyspg/ rabbitmq/ riak/ vertica/
$ cd /var/spool
$ rm -rf ecelerity
```

#### Remove various log files and directories not cleaned up by uninstall script:

```
$ cd /var/log
$ rm -rf eccluster/ ecelerity/ msys* riak/ spread/
```

#### Delete any other created users in /etc/passwd

**Two Ways:**

Using Script:

```
$ cat /etc/passwd | grep msys* | grep ecspread | grep ecuser | grep vert* >> user.del
$ for user in `cat user.del`;do userdel -r $user;done
```

Manually one by one:

```
$ userdel -r msysnginx
$ userdel -r ecspread
$ userdel -r msys-cass
$ userdel -r ecuser
$ userdel -r msysrabbitmq
$ userdel -r msysnodejs
$ userdel -r msysriak
$ userdel -r msyspg
$ userdel -r vertica_dba
```
	
#### Delete any other created groups in /etc/group :

```
$ groupdel verticadba
```

#### Remove any Momentum related pid files and directories not cleaned up by uninstall script:

```
$ cd /var/run
$ rm -rf msys-app/ cassandra/
$ rm -rf ecconfigd.perl ecelerity.monitor.pid ecelerity.pid.instance
```

#### Remove files created from previous install:

```
$ rm -rf /var/tmp/vertica-migrations /var/tmp/nginx/
$ cd /path/to/bundle-extraction
$ rm -rf install201* install_vertica.log silent_install
$ rm -rf /root/.cassandra
```
#### Optional:

```
$ rm -rf /path/to/bundle-extraction
```
#### Remove Java Runtime Environment / JRE:

```
$ yum list installed | grep jre
jre.x86_64 1.7.0_80-fcs installed
$ yum remove jre.x86_64
```