| [Prev](conf.ref.async_bounce_rendering)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.bind_address) |

<a name="conf.ref.authorization"></a>
## Name

authorization — configure the console commands applicable to users

<a name="idp23548720"></a>
## Description

<a name="example.authorization.3"></a>

**Example 72.2. authorization**

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

To use the Authorization stanza, authorization must be enabled within the listener or listen scope by setting `enable_authorization` to `true`. An auth_ds module must also be configured.

Each allow rule is a Perl compatible regular expression that will be matched against the command being executed. If the regular expression matches, then processing of authorization rules stops and the console command is allowed to execute. If no rules match, then the command is not allowed to execute and if account logging is enabled a log entry is written.

The configuration of the autorization stanza has no effect unless `enable_authorization` is set to `true` in the control listener scope.

<a name="idp23556848"></a>
## Scope

authorization is valid in the global scope.

<a name="idp23558608"></a>
## See Also

[msys.registerAuth](lua.ref.msys.registerAuth "msys.registerAuth"), [Section 71.8, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds "71.8. auth_ds – Datasource based SMTP Authentication") and [Section 17.4, “Control_Listener Authorization”](control_authz "17.4. Control_Listener Authorization")

| [Prev](conf.ref.async_bounce_rendering)  | [Up](config.options.ref) |  [Next](conf.ref.bind_address) |
| async_bounce_rendering  | [Table of Contents](index) |  bind_address |

