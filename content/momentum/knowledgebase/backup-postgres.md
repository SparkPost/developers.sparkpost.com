# How do I backup and restore the PostgreSQL database?

The purpose of this document is to provide generic steps on how to basically take a backup of a Postgres DB / Table. The provided example commands do not refer to any specific table or database.

It was assumed that the person who would be actually using this article, would have a fair idea of what he/she is trying to backup, and if he/she chooses to backup a specific table it will be his/her responsibility to actually backup the other tables which refer the original tables. Postgres being a relational database, there will always be references between a number of tables.

This is a 'how to' article which only gives example commands, how it is done actually is solely dependent on the person doing it. It will be their responsibility to maintain the integrity of the data they are trying to backup and also will depend on the specific use case.

Backing up the entire DB is always a safe option, but when backing up specific tables, one needs to be careful.


**SQL-dump/pg_dump:**  
The idea behind the SQL-dump method is to generate a text file with SQL commands that, when fed back to the server, will recreate the database in the same state as it was at the time of the dump. PostgreSQL provides the utility program pg_dump for this purpose.

pg_dump is an effective and comprehensive tool to take Postgres database backups and use the backups to restore the postgres database. However, it is not restricted to database only. We can use pg_dump to take backups of the tables and then use that to restore individual tables as well. Using pg_dump, you can take a backup of the local database and restore it on a remote database.

## Backup a Postgres Table:

`$ /opt/msys/3rdParty/bin/pg_dump --table maincontrol.orgs -U ecuser pe -f ms_table.sql`

The above command is an example of how to backup a specific table from a Postgres database. Using the above command, we are backing up table "orgs" in schema "maincontrol" from database "pe" to ms_table.sqlfile. To backup a specific table, use the "–table TABLENAME" option in the pg_dump command. If there are same table names in different schema, then use the "–schema SCHEMANAME" option.

## Backup a specific Postgres database:

`$ /opt/msys/3rdParty/bin/pg_dump -U ecuser pe -f pe_dump.sql`

This is an example of backing up a specific Postgres database. Using the above command we are backing up the database for Message Central "pe" to file pe_dump.sql. The backup file has the create table, alter tableand copy commands for all the tables in the "pe" database.

## Backup all Postgres databases:

`$ /opt/msys/3rdParty/bin/pg_dumpall -U ecuser> all_dump.sql`

You can backup all the databases using pg_dumpall command. The above command will create a dump of all the databases that reside on the Postgres instance running on a particular server. To list all the database that have been backed up use the command: 

`grep "^[\]connect" all.sql`

# How to Restore Postgres Database:

## Restore a Postgres table:

`$ /opt/msys/3rdParty/bin/psql -U ecuser -f ms_table.sql pe`

The above command will install the table that was backed up in ms_table.sql file to the "pe" database. Ensure that this table does not already exist, or you will see a bunch of "already exists" errors. This command creates and the table and exports all the data to the newly created table.

## Restore a Postgres database:   

$ /opt/msys/3rdParty/bin/psql -U ecuser -d pe -f pe_dump.sql
Similar to the restore of the table we can use the above command to restore the complete database. Here we are restoring the "pe" database using the file pe_dump.sql which we had created while backing up the DB in the Backup section above.

## Restore all databases:

`$  /opt/msys/3rdParty/bin/psql -u ecuser -f all_dump.sql`

Restore all the databases using the above command. The "all_dump.sql" file was created using pg_dumpall. The above command will give us all the Postgres databases in the exact state that they were in when a dump was taken from the original DB server.