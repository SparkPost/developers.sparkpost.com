|     |     |     |
| --- | --- | --- |
| [Prev](postgresql)  | Chapter 29. PostgreSQL |  [Next](postgresql.client) |

## 29.2. Running the PostgreSQL Server

<a class="indexterm" name="idp3925776"></a>

The PostgreSQL server is installed as a daemon and starts up whenever the system is rebooted. To start the PostgreSQL server immediately after installation, issue the command

`shell> /etc/init.d/msyspg start`

To determine the options that can be used with the `msyspg` command, issue the command

`shell> /etc/init.d/msyspg`

The following output is displayed:

`Usage: {start|stop|restart}`

where

*   `start` – Start the PostgreSQL server daemon named `msyspg` running at levels 3, 4 and 5

*   `stop` – Stop the PostgreSQL server

*   `restart` – Restart the PostgreSQL server

|     |     |     |
| --- | --- | --- |
| [Prev](postgresql)  | [Up](postgresql) |  [Next](postgresql.client) |
| Chapter 29. PostgreSQL  | [Table of Contents](index) |  29.3. Using the PostgreSQL Client Program |

