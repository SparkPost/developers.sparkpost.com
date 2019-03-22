| [Prev](executable.ec_spp)  | 11.2. Executable Commands |  [Next](executable.eccfg.php) |

<a name="executable.ec_uipasswd"></a>
## Name

ec_uipasswd — manage users and groups for authentication

## Synopsis

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ addgroup *`groupname`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ adduser *`username`* [*`password`*] ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ assign *`user`* *`group`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ deletegroup *`groupname`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ deleteuser *`username`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ demote *`username`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ -h ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ info *`user_or_group`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ password *`username`* *`new_password`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ promote *`username`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ unassign *`user`* *`group`* ]

`/opt/msys/ecwebui/scripts/ec_uipasswd` [ -v ]

<a name="idp14195536"></a>
## Description

**ec_uipasswd** is used to manage users and groups for the built-in authentication database. When the Message Systems MTA is installed, a PostgreSQL database is created to store user credentials. *This command can only be used to manage the built-in data store*                                                            and, in a cluster configuration, is only available on the node where the web UI is installed.

### Note

In version 3.0, if you use the default configuration settings, web console authentication is handled by the `ecauth` authorization scheme and the `ecdb` datasource. This is the preferred method of authentication. For more information see [webui-common.conf](webui-common.conf "webui-common.conf").

Use this command to add users to the web UI. Any users and groups added, show up in the web UI.

<dl className="variablelist">

<dt>addgroup</dt>

<dd>

Add a new group.

</dd>

<dt>adduser</dt>

<dd>

Add a user. If you do not specify a password when this command is invoked you are prompted for one. This option adds a regular user who can be promoted to a superuser using the `promote` option. Currently, superusers are identical to regular users with the additional privilege of being able to administer users through the web UI.

</dd>

<dt>demote</dt>

<dd>

Demote a user from super user status. Currently you cannot use the web UI to demote a user. You must use **ec_uipasswd**.

</dd>

<dt>deletegroup</dt>

<dd>

Delete a group.

</dd>

<dt>deleteuser</dt>

<dd>

Delete a user.

</dd>

<dt>-h</dt>

<dd>

Display help.

</dd>

<dt>info</dt>

<dd>

Display information about the specified user or group.

</dd>

<dt>password</dt>

<dd>

Change a user's password.

</dd>

<dt>promote</dt>

<dd>

Promote a user to super user status. Gives a regular user the capability of administering users through the web UI. Currently you cannot use the web UI to promote an existing user. You must use **ec_uipasswd**.

</dd>

<dt>unassign</dt>

<dd>

Remove a user from a group

</dd>

<dt>-v</dt>

<dd>

Display version information.

</dd>

</dl>

<a name="idp14221728"></a>
## See Also

[Section 3.9, “Administering Users From the Web Console”](web3.users "3.9. Administering Users From the Web Console").

| [Prev](executable.ec_spp)  | [Up](exe.commands.details.php) |  [Next](executable.eccfg.php) |
| ec_spp  | [Table of Contents](index) |  eccfg |
