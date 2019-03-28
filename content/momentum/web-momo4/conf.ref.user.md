|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_sendfile)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.xclient) |

<a name="conf.ref.user"></a>
## Name

user, group — security: user identity to assume after startup

<a name="idp27358336"></a>
## Description

If you are using the `user` and `group` options in a Security stanza, it may be necessary to retain some root privileges. An example of such a need is a module that can stop and start listeners during operation. On Unix, starting a listener during operation would require that the process run as a user who has the ability to perform a `bind` system call to the SMTP port; the SMTP port is reserved and only root can do this.

If Momentum is run as root, it will drop its superuser privileges before processing mail. By doing this, Momentum can limit the damage that could be caused by an attack that compromises the system.

The following is an example of using the user and group options:

<a name="example.user"></a>

**Example 72.11. user and group Configuration**

```
Security {
  user = ecuser
  group = ecuser
  Capabilities = "cap_net_bind_service+ep"
}
```

The default value for both the `user` and the `group` option is `ecuser`.

### Warning

It is strongly recommended that you leave these options as their defaults. If you change these options to something else, you are responsible for maintaining the ownership and permissions of the files used by the Momentum components. This is of particular importance after running an upgrade; the packaging will try to respect existing permissions but there are limits to the level of intelligence that can applied to the installer.

### Note

Changing the value of options in the `security` scope at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp27370752"></a>
## Scope

user and group are valid in the security scope.

<a name="idp27372592"></a>
## See Also

[security](conf.ref.security "security"), [capabilities](conf.ref.capabilities "capabilities"), [chroot](conf.ref.chroot "chroot"), and [supplemental_groups](conf.ref.supplemental_groups "supplemental_groups")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_sendfile)  | [Up](config.options.ref) |  [Next](conf.ref.xclient) |
| use_sendfile  | [Table of Contents](index) |  xclient |

