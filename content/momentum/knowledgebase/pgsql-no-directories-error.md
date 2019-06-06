# PostgreSQL error logs on the Manager node contain references to directories not being available to write to.
 

PostgreSQL error logs on the Manager node sometimes contain references to directories not being available to writte to.

For Example:
Errors appearing in pgsql related logs  - `/var/db/msyspg/pg_log/postgresql-Tue.log`

```
2018-03-03 09:18:19 EET::@:[3929]: ERROR: could not open file "base/16397/1563993.10" (target block 2696017): No such file or directory
2018-03-03 09:18:19 EET::@:[3929]: CONTEXT: writing block 2696017 of relation base/16397/1563993
2018-03-03 09:18:22 EET::@:[3929]: ERROR: could not open file "base/16397/1563993.10" (target block 2696017): No such file or directory
2018-03-03 09:18:22 EET::@:[3929]: CONTEXT: writing block 2696017 of relation base/16397/1563993
2018-03-03 09:18:22 EET::@:[3929]: WARNING: could not write block 2696017 of base/16397/1563993
2018-03-03 09:18:22 EET::@:[3929]: DETAIL: Multiple failures --- write error might be permanent.
```

Manually create the directories that are reported missing as per the above log extract, with the permissions set to `msyspg:msyspg`

```
mkdir /var/db/msysgp/base/16397/1563993.10
```

Once completed, a database restart is required.

```
[root@momentum_manager msyspg]# service msyspg restart
Stopping msyspg service
OK
Starting msyspg service
OK
```

Now the database and it's directories should be back to their normal operational state.