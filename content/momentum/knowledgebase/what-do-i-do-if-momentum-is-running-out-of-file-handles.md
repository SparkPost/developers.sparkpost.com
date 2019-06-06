# What do I do if Momentum is Running Out of File Handles?

A file handle identifies the file in various function calls. It is associated with an open file until either the process terminates or the handle is closed. If you find that your box is running out of file handles, add the following line to `/etc/sysctl.conf`:

```
fs.file-max = 250000
```

Then either execute the following command or reboot the box:

`sysctl -p` It is advised at this point to check that the following entry in the `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf`:


```
Server_Max_File_Descriptors = 80000
```


You can verify the current count of Momentum's file handles by using the following command ("yum install lsof" will install this):


```
lsof -a -p <momentum pid> | wc -l
```
