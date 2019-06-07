# How do I rebuild the SVN repository?

1. Disable the cron jobs on all nodes (including manager) in /etc/cron.d/msys-ecelerity (/etc/cron.d/msys-ecelerity-cluster-mgr on the manager)
This prevents a node from accidentally pulling down an incomplete set of config files.


```
#* * * * * root /opt/msys/ecelerity/bin/eccfg pull --auto 
#* * * * * root /opt/msys/ecelerity/bin/eccfg put running
```



2. Stop ecconfigd, remove the .eccfg directory under /opt/msys/ecelerity/etc and the cluster.boot file, and start ecconfigd (ecconfigd only applies to manager - on the nodes skip that part)


```
/etc/init.d/ecconfigd stop
rm -Rf /opt/msys/ecelerity/etc/.eccfg /opt/msys/ecelerity/etc/cluster.boot
/etc/init.d/ecconfigd start
```



3. Move the old conf directory out of the way so we can checkout a clean copy from the new repository.


```
mv /opt/msys/ecelerity/etc/conf /opt/msys/ecelerity/etc/conf.old
```

4. Now we can bootstrap the manager so we have a checkout of the new repository. This will contain only the default files at this point. Replace "<manager>" with the correct manager name.

The non-manager nodes will require a username and password in the command:


```
/opt/msys/ecelerity/bin/eccfg bootstrap --clustername=default <manager>
/opt/msys/ecelerity/bin/eccfg bootstrap --user admin --password admin --clustername=default <manager>
```

5. Copy the old config files into the new conf directory. The old conf directory is going to have .svn metadata directories that we do not want to copy. They will break the checkout directory so we must not copy them over. rsync will help us with this.


```
rsync -var --exclude='.svn' /opt/msys/ecelerity/etc/conf.old/ /opt/msys/ecelerity/etc/conf/
```

6. Make sure all the files were copied of successfully. Use the following command but you may need to drill down into subdirectories.


```
ls -la /opt/msys/ecelerity/etc/conf/
```

7. Your conf directory should now have all your old config files. Commit the changes to the repository


```
/opt/msys/ecelerity/bin/eccfg -u admin commit
```

8. Re-enable cron jobs from step #1 on all nodes


```
/etc/cron.d/msys-ecelerity
```


```
* * * * * root /opt/msys/ecelerity/bin/eccfg pull --auto
* * * * * root /opt/msys/ecelerity/bin/eccfg put running
```

If all is working correctly you should now perform steps 2 - 4 on each node. This will put the new repository in place on the nodes. The old repository will not be compatible with the new one and will prevent the nodes from pulling down config changes. Restart ecelerity on each node after confirming the checkout was successful.