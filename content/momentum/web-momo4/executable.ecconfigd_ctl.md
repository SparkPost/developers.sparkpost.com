|     |     |     |
| --- | --- | --- |
| [Prev](executable.ecconfigd)  | Chapter 74. Executable Commands Reference |  [Next](executable.ecelerity) |

<a name="executable.ecconfigd_ctl"></a>
## Name

ecconfigd_ctl — start, stop or restart the Momentum Configuration Server

## Synopsis

`/opt/msys/ecelerity/bin/ecconfigd_ctl` [ start | stop | restart ]

<a name="idp11870448"></a>
## Description

**ecconfigd_ctl** is a shell script that you can use to start, stop, or restart the Momentum configuration server **ecconfigd**.

The `TRY` environment variable is one of the variables that may be set in the `environment` file. This variable controls the number of times to loop waiting for **ecconfigd** to start up. In some configurations, it can take a long time for **ecconfigd** to start and, if the default `TRY` value is too small, the **ecconfigd_ctl** script may decide that startup has failed. The default value for this variable is `10`. Increasing `TRY` to a higher value will increase the amount of time that **ecconfigd_ctl** will wait for **ecconfigd** to start before deciding that it is broken. With `TRY` set to a default value of `‘10’`, the amount of time that **ecconfigd_ctl** waits is 55 seconds (10+9+8+7+6+5+4+3+2+1).

If the `EXTRA_ARGS` environment variable is set, its contents will be passed as additional arguments to **ecconfigd**.

<a name="idp11881392"></a>
## See Also

[ecconfigd](executable.ecconfigd "ecconfigd"), [Chapter 31, *Configuring the Environment File*](environment_file "Chapter 31. Configuring the Environment File")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ecconfigd)  | [Up](exec.cmds.ref) |  [Next](executable.ecelerity) |
| ecconfigd  | [Table of Contents](index) |  ecelerity |

