# Changing the subversion password (eccfg)

To check what users are currently configured, run the following command:

```
cat /var/ecconfigd/repo/svn-auth.htdigest
```

This will list your current users, which should just be `admin` and `ecuser`, and will look something like this:

```
[root@rh66-mta1 ~]# cat /var/ecconfigd/repo/svn-auth.htdigest
ecuser:ecconfigd repo:5eb22b2b6b76447351a68628b92a997b
admin:ecconfigd repo:aa200211e9e9eea161b856e7d7208132
```

To change the password, execute:

```
/opt/msys/3rdParty/apache/sbin/htdigest /var/ecconfigd/repo/svn-auth.htdigest "ecconfigd repo" <username>
```

It will prompt you to enter the new password twice. Password changed! 