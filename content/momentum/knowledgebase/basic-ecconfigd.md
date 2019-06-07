# Basic Ecconfigd Guide  
  
  
**ecconfigd** is the Momentum Configuration Server. The configuration files are maintained in a version control repository and exported via this service. The repository lives in /var/ecconfigd/repo and runs off Apache on port 2027.

The logs are present here:  

```
/var/ecconfigd/apache/access.log  
/var/ecconfigd/apache/error.log  
```

All nodes pull copies of the configuration into:
```
/opt/msys/ecelerity/etc/conf
```

* "bootstrap" = start from scratch, initialize with default
* It will auto push every minute via cron. 
* To manually pull, run the eccfg pull command on each node.
* Must run in "root"
* Must be in the "conf" directory

### BASIC steps to commit

1. Make a change on config and test it out for any errors using the following command:
	```
	/opt/msys/ecelerity/bin/ec_console shim:// 
	```
2. Commit when you're ready. 
3. If there are any conflicts between the files while pulling or committing changes, you can specify if the changes in the local copy or the files already in the repository should be preserved. 

### To Bootstrap 

#### for cluster

 ```
 /opt/msys/ecelerity/bin/eccfg bootstrap --clustername default -u admin -p admin [manager’s hostname or IP]
 ```

#### For MTA only

```
/opt/msys/ecelerity/bin/eccfg bootstrap --singlenode --username admin --password admin
```


### To PULL

```
/opt/msys/ecelerity/bin/eccfg pull -u admin -p password
```



### To COMMIT

```
/opt/msys/ecelerity/bin/eccfg commit -u admin -p admin --add-all —m "Enabling Event Hose”
```

### To DEBUG or test out the commit for issues

```
/opt/msys/ecelerity/bin/eccfg commit -u admin -p admin --debug 
```

### To view current STATUS
```
/opt/msys/ecelerity/bin/eccfg status -u admin -p password
```

Please find more information on **eccfg** commands in the following URL on our support portal:
https://github.com/SparkPost/developers.sparkpost.com/blob/master/content/momentum/web-momo4/executable.eccfg.md

#### Notes for SVN

Customers running latest versions of Momentum should never have to utilize the message systems provided version of SVN 
```
/opt/msys/3rdParty/bin/svn 
```
directly, unless directed to, by engineering. They should always be using **eccfg** 
```
/opt/msys/ecelerity/bin/eccfg
```
 to commit changes to the configuration repos.