|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.authz_id)  | 12.2. System Console Commands |  [Next](console_commands.binding_active.php) |

<a name="console_commands.authz_roles_list"></a>
## Name

authz roles list — display the currently defined roles

## Synopsis

`authz roles list`

<a name="idp15357280"></a>
## Description

This command displays all the defined roles in XML format. In the web console, roles are know as `groups`.

Execute this command and you should see output similar to the following:

```
<Roles>
 <Role name="users"/>
 <Role name="admin"/>
 <Role name="ecuser"/>
 <Role name="fred"/>
</Roles>
```
<a name="idp15361136"></a>
## See Also

[authz id](console_commands.authz_id "authz id")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.authz_id)  | [Up](console.commands.non-module.php) |  [Next](console_commands.binding_active.php) |
| authz id  | [Table of Contents](index) |  binding active |
