|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.active)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.authz_roles_list) |

<a name="console_commands.authz_id"></a>
## Name

authz id — display the id of the current user

## Synopsis

`authz id`

<a name="idp14041952"></a>
## Description

This command displays the id of the current system console user in XML format; any roles associated with that user are also displayed.

If you are logged in as a user named `tom` who belongs to the group `users`, you should see the following output:

```
<AuthzInformation username="tom">
  <Roles>
    <Role name="users"/>
  </Roles>
</AuthzInformation>
```
<a name="idp14045664"></a>
## See Also

[authz roles list](console_commands.authz_roles_list "authz roles list")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.active)  | [Up](console.cmds.ref) |  [Next](console_commands.authz_roles_list) |
| active  | [Table of Contents](index) |  authz roles list |

