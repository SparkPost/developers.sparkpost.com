| [Prev](conf.ref.async_bounce_rendering)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.bind_address.php) |

<a name="conf.ref.authorization"></a>
## Name

authorization — configure the console commands applicable to users

<a name="idp7525808"></a>
## Description

<a name="example.authorization.3"></a>

**Example 9.4. authorization**

```
Authorization {
  Role "name" {
    allow = ( "list" "of" "patterns" )
  }
  Role "othername" {
    allow = ( "list" "of" "patterns" )
  }
}
```

The authorization stanza will prevent console commands from being run unless an "allow" entry is explicitly configured. The authorization process first enumerates the roles/group membership of the user by querying the authorization module configured in the listener configuration. Then the username and each role for the user are compared against the authorization rules; if the username or role name matches, then the "allow" rules are processed in the order that they are defined.

To use the Authorization stanza, authorization must be enabled within the listener or listen scope by setting `Enable_Authorization` to `true`. An auth_ds module must also be configured.

Each allow rule is a Perl compatible regular expression that will be matched against the command being executed. If the regular expression matches, then processing of authorization rules stops and the console command is allowed to execute. If no rules match, then the command is not allowed to execute and if account logging is enabled a log entry is written.

The default `webui-common.conf` file defines the roles as shown below:

```
Authorization {
  Role "root"{
    allow=(".*")
  }
  Role "admin"{
    allow=(".*")
  }
  Role "ecuser"{
    allow=(".*")
  }
  Role "users"{
    allow=(".*")
  }
}
```

The configuration of the autorization stanza has no effect unless `enable_authorization` is set to `true` in the control listener scope.

<a name="idp7536608"></a>
## Scope

authorization is valid in the global scope.

<a name="idp7538512"></a>
## See Also

[msys.registerAuth](lua.ref.msys.registerAuth "msys.registerAuth"), [Section 14.7, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds.php "14.7. auth_ds – Datasource based SMTP Authentication") and [Section 2.2.3, “Control Listener Authorization”](conf.aaa.php#conf.control_authz "2.2.3. Control Listener Authorization")

| [Prev](conf.ref.async_bounce_rendering)  | [Up](conf.ref.files.php) |  [Next](conf.ref.bind_address.php) |
| async_bounce_rendering  | [Table of Contents](index) |  bind_address |
