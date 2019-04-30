|     |     |     |
| --- | --- | --- |
| [Prev](modules.response_transcode)  | Chapter 14. Modules Reference |  [Next](modules.scriptlet) |

## 14.59. sched – The Schedule Module

<a class="indexterm" name="idp21021504"></a>

The sched module is used to schedule tasks that can be run from the console.

The following configuration stanza loads the sched module:

<a name="example.sched.3"></a>

**Example 14.86. sched module**

```
sched {
  backing_store = "/path/to/sqlite.db"
}
```

`backing_store` defines the path to a SQLite database. If the specified file does not already exist it will be created. The directory containing this database file must be writable by the user/group that the Momentum instance is running as, typically ecuser. Specifying a `backing_store` is not a requirement but if it is not specified any scheduled tasks will be forgotten when the instance is restarted.

### 14.59.1. sched Management Using Console Commands

The sched module can be controlled through `ec_console`; the following commands are available:

**14.59.1.1. sched list**

List any scheduled tasks. The output of this command is shown in the following:

```
JOB ID        	    NEXT RUN TIME	REC	COMMAND
example.com-000000005	1215702990	 y	config set message_expiration 300
```

The output shows the job id followed by the scheduled run time expressed in Unix timestamp format. If the job is recurrent a ‘`y`’ appears under the `REC` column. A command will only be recurrent if it is invoked using **every**. The scheduled command appears under the `COMMAND` column.

**14.59.1.2. sched delete *`id`***

This command deletes a scheduled job. To determine the job id use the **sched list**      command. The **delete** command removes a job from memory and from the database.

**14.59.1.3. sched every *`seconds`* *`command`***

Create a recurrent command that repeats at the specified interval.

**14.59.1.4. sched at *`seconds`* *`command`***

Run a command at the specified time expressed as a Unix timestamp.

**14.59.1.5. sched in *`seconds`* *`command`***

Run a command at the specified number of seconds from the current time.


|     |     |     |
| --- | --- | --- |
| [Prev](modules.response_transcode)  | [Up](modules) |  [Next](modules.scriptlet) |
| 14.58. response_transcode – Module  | [Table of Contents](index) |  14.60. scriptlet – Module |
