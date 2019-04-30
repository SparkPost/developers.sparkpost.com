|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_sendfile)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.watchdog_interval.php) |

<a name="conf.ref.user"></a>
## Name

user, group — security: user identity to assume after startup

<a name="idp12426464"></a>
## Description

```
Security {
  user = "<replaceable>user name or id</replaceable>" # default none>
  group = "<replaceable>group name or id</replaceable>" # default none>
  # On Linux, allow binding to privileged ports without requiring
  # a process restart
  Capabilities = "cap_net_bind_service+ep"
  # On Solaris, allow binding to privileged ports without requiring
  # a process restart (version 3.0 and higher)
  Privileges = "basic net_privaddr"
}
```

This security feature instructs Momentum, if run as root, to drop its superuser privileges before processing mail. By doing this, Momentum can limit the damage that could be caused by an attack on the system that results in compromise.

If you are using a Security stanza and you want to use DuraVIP bindings in a cluster, you will also need to enable appropriate capabilities so that you can retain certain root privileges. For more information see [capabilities](conf.ref.capabilities "capabilities").

### Warning

The default value for both the "user" and the "group" option is `ecuser`. It is strongly recommended that you leave these options as their defaults. If you change these options to something else, you are responsible for maintaining the ownership and permissions of the files used by the Momentum components. This is of particular importance after running an upgrade; the packaging will try to respect existing permissions but there are limits to the level of intelligence that can applied to the installer.

<a name="idp12433040"></a>
## Scope

user and group are valid in the security scope.

<a name="idp12434688"></a>
## See Also

[chroot](conf.ref.chroot "chroot"), [supplemental_groups](conf.ref.supplemental_groups.php "supplemental_groups"), [capabilities](conf.ref.capabilities.php "capabilities"), [privileges](conf.ref.privileges.php "privileges")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_sendfile)  | [Up](conf.ref.files.php) |  [Next](conf.ref.watchdog_interval.php) |
| Use_SendFile  | [Table of Contents](index) |  watchdog_interval |
