#How can I view the service and admin passwords with Momentum 4.2

The svcspasswd is randomly generated, not entered manually.
The admin password is entered manually during the installation process. 

Enter the following commands into the terminal.

```
[root@mom42 etc]# echo $SVCPASSWD

rmZk155U
[root@mom42 etc]# echo $ADMINPASS
admin
```