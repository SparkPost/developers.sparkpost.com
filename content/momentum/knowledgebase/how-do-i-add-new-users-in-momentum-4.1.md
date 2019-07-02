# How do I add new users in Momentum 4.1?

With Momentum 4.1, all user management tasks are handled by multiple Node.js scripts. First, you'll need to log into the Platform node that hosts the Web UI. Afterwards, you'll want to run the commands below; please be sure to to update username and password, and remove the preceding comment (#). The 'customer' field will almost always be 1.

```
cd /opt/msys/app/users-api
```

```
NODE_ENV=production /opt/msys/3rdParty/bin/node etc/add_user.js --customer 1 --username <username> --password <password>
```

You will be able to log into the Web UI with your new user immediately after these steps are completed.