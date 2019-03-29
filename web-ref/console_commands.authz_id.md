|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.active)  | 12.2. System Console Commands |  [Next](console_commands.authz_roles_list.php) |

<a name="console_commands.authz_id"></a>
## Name

authz id — display the id of the current user

## Synopsis

`authz id`

<a name="idp15343088"></a>
## Description

This command displays the id of the current system console user in XML format; any roles associated with that user are also displayed. You can add roles (also known as groups) and assign users to these groups from the web console. You can also do this using [ec_uipasswd](executable.ec_uipasswd "ec_uipasswd").

If you are logged in as a user named `tom` who belongs to the group `users`, you should see the following output:

```
<AuthzInformation username="tom">
  <Roles>
    <Role name="users"/>
  </Roles>
</AuthzInformation>
```
<a name="idp15348144"></a>
## See Also

[authz roles list](console_commands.authz_roles_list "authz roles list")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.active)  | [Up](console.commands.non-module.php) |  [Next](console_commands.authz_roles_list.php) |
| active  | [Table of Contents](index) |  authz roles list |
