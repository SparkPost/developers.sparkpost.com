#How to change admin user password for Momentum 4.1?



In order to change the password for the 'admin' user in Momentum 4.1, you will need to execute a NodeJS script from the Platform node where the Web UI is hosted. You will need to execute the following commands (be sure to remove the comments preceding the commands):

```
cd /opt/msys/app/users-api 
```

The script below relies on a relative path, so be sure to execute the script from within the above directory:

```
# Replace 'password' with your preferred password.

/opt/msys/3rdParty/bin/node etc/update_user.js --NODE_ENV=production --username admin --password password --customer 1 

```

Once this is complete, you should have no trouble logging into the Web UI.
