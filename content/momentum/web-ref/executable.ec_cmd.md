|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_adtool)  | 11.2. Executable Commands |  [Next](executable.ec_console.php) |

<a name="executable.ec_cmd"></a>
## Name

ec_cmd — allow the web UI to manage nodes

## Synopsis

`/opt/msys/ecelerity/bin/ec_cmd` [ start | stop | restart ]

<a name="idp13276064"></a>
## Description

**ec_cmd** is a shell script that runs on port 2028 and allows the web UI to manage the nodes and drives and enables the status page in the web UI. If you install the web UI, this service starts automatically.

If you do not want to use the status page, it is not a required service. It is considered a trusted local network service and must not be exposed to the Internet, since the ec_cmd service can start or stop eccmgr or ecelerity on the node in question.

### Warning

Access to the ec_cmd service is not authenticated. Anyone with telnet access to port 2028 can shut down the ecelerity process.

<a name="idp13279904"></a>
## See Also

[eccmgr](executable.eccmgr "eccmgr"), [ecelerity](executable.ecelerity.php "ecelerity")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_adtool)  | [Up](exe.commands.details.php) |  [Next](executable.ec_console.php) |
| ec_adtool  | [Table of Contents](index) |  ec_console |
