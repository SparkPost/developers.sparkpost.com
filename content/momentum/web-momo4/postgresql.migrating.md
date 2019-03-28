|     |     |     |
| --- | --- | --- |
| [Prev](postgresql.client)  | Chapter 29. PostgreSQL |  [Next](riak) |

## 29.4. Dumping and Restoring the Database

In some circumstances, you may need to change the machine that hosts Momentum and migrate your data to new hardware. When moving to a host with the same operating system, architecture, and bit size, you can simply archive the `/var/db/msyspg` directory and then restore it. Otherwise, you can use PostgreSQL tools to dump and restore the database.

Database dumps are plain-text files that contain the SQL commands and data required to rebuild the database. Create a dump file using the **pg_dump** command and then restore your database by passing the dump file to **pg_restore**. The steps are itemized in the following:

1.  Ensure that the database is not in use. Go to the command line of the machine that hosts the PostgreSQL server and issue the following command:

    `shell> /opt/msys/3rdParty/bin/pg_dump -Fc -U msyspg ecelerity -f /path/to/db.dump`

    No password is required to access the database from localhost.

    Using `-c` creates custom output making it possible to select and reorder archived items if necessary when restoring the database. It also compresses the file. The user `msyspg` is the PostgreSQL superuser; all database dumps and restorations should be performed as this user.

2.  Since the dump file is compressed, you must use the **pg_restore** to restore the database. Go to the command line of the destination machine and issue the command:

    `shell> /opt/msys/3rdParty/bin/pg_restore -c -U msyspg -d ecelerity /path/to/db.dump`
3.  Examine any warnings that are output. You will get errors trying to drop and create some of the schemas, but they are harmless.

|     |     |     |
| --- | --- | --- |
| [Prev](postgresql.client)  | [Up](postgresql) |  [Next](riak) |
| 29.3. Using the PostgreSQL Client Program  | [Table of Contents](index) |  Chapter 30. Riak |

