| [Prev](conf.starting)  | Part V. Using the System Console |  [Next](operations.console-commands) |
## Chapter 37. Using the System Console (ec_console)
**Table of Contents**

* [37.1\. Connecting to the Console](operations#operations.console)
* [37.2\. Console Commands](operations.console-commands)
* [37.3\. Using Module-Specific Console Commands](module_specific_console_commands.using)
* [37.4\. Setting and Getting Module Options from the Console](modules.options.console)
* [37.5\. Creating Custom Console Commands](operations.console.lua)

## 37.1. Connecting to the Console
Momentum's online administration, management, and analysis is through the Momentum System Console program **ec_console**, henceforth referred to as the console. For details about the available options, see [ec_console](executable.ec_console "ec_console").
The console can connect to a Momentum instance via a Unix domain socket or a TCP/IP socket (with an optional user@ prefix) depending upon how the Control_Listener is configured. For details on configuring the Control_Listener behavior, see [Chapter 17, *Configuring Momentum's System Console*](control_listener "Chapter 17. Configuring Momentum's System Console") .
### Note
To connect to the console, you must have root privileges.
### Connecting via a Unix Domain Socket
The console assumes that Unix domain sockets are located in `/tmp`. The standard endpoint for a control listener is `/tmp/2025`. When using the standard endpoint to connect to the console, issue the **ec_console** command with no options:
`shell> /opt/msys/ecelerity/bin/ec_console`
If you choose to bind your Control_Listener to a non-standard value, issue the **ec_console** with an optional argument to specify an endpoint, as shown:
`shell> /opt/msys/ecelerity/bin/ec_console /tmp/2030`
This will attempt to connect to the local Momentum instance listening at `/tmp/2030`.
### Connecting via TCP/IP
To connect via TCP/IP, issue the **ec_console** with an optional argument to specify the IP address and port. The following example attempts to connect the Momentum instance located at the IPv4 address 10.2.4.1 on port 2025:
`shell> /opt/msys/ecelerity/bin/ec_console 10.2.4.1:2025`
Likewise, you can attempt to connect to the Momentum instance located at the IPv6 address fd82:7796:815b:af9d:2e0:81ff:fe63:5ce8 on port 2424 in the following way:
`shell> /opt/msys/ecelerity/bin/ec_console ec_console [fd82:7796:815b:af9d:2e0:81ff:fe63:5ce8]:2424`
### Note
IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.
The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.
### Connecting Using SSH Tunnel
The **ec_console** command has ssh tunnel support. Assuming that you have a properly configured Control_Listener, you can connect in the following ways:
```
shell> ec_console ssh://user@hostname/ecuser@hostname:2025
shell> ec_console ssh://user:passwd@hostname/ecuser:passwd@*:2025
```
You need operating system (OS) credentials for the ssh connection to the machine hosting the MTA and console credentials because the control listener requires authentication. The listener stanza is shown below:
```
Control_Listener {
  Enable_Authentication = "true"
  Listen "*:2025" {
  }
  ...
}
```
SSH support requires the remote server to support SSH protocol version 2, and that the server be configured to allow port-forwarding. It is not possible to tunnel Unix domain socket connections over SSH.
For details on configuring authentication, see [Section 17.2, “Control_Listener Authentication”](control_auth "17.2. Control_Listener Authentication").
### Successful Connection
A successful launch of the console will result in output similar to the following:
```
# /opt/msys/ecelerity/bin/ec_console
##############################################
# ecelerity version: 3.0.10.30987
# Copyright (c) 1999-2009 Message Systems, Inc.
# All Rights Reserved.
##############################################
```
By default, an interactive console session is established, and the console client provides line editing features and tab completion (it will load your `~/.inputrc` on startup). In this mode, the version of the remote server is displayed at connect time.
The console client enters batching mode if it detects that it is not connected to a terminal or if additional command line parameters beyond the listener endpoint are specified. For example, you can list all your active modules and then exit in the following way:
`shell> ec_console /tmp/2025 module list`
For a TCP/IP connection to localhost requiring authentication of the user, `admin`, use the following command:
`shell> ec_console admin@localhost:2025 module list`
You will be asked for admin's password before the **module list**      command executes. Batch mode suppresses the version information that is normally displayed at connect time and disables advanced line editing features.
### Exiting the Console
To exit the console, enter the **quit** command.

| [Prev](conf.starting)  | [Up](p.operations) |  [Next](operations.console-commands) |
| Chapter 36. Starting Momentum (**ecelerity**)  | [Table of Contents](index) |  37.2. Console Commands |
