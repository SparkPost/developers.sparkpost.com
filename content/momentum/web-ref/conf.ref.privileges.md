| [Prev](conf.ref.pidfile)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.prohibited_hosts.php) |

<a name="conf.ref.privileges"></a>
## Name

privileges — selectively retain "root" capabilities

## Synopsis

`Security { privileges = "Solaris privileges set" }`

<a name="idp11034688"></a>
## Description

This option is only available on Solaris, since Momentum 3.0.

### Note

The Linux equivalent of "Privileges" is "Capabilities". For more information see [capabilities](conf.ref.capabilities "capabilities").

The list of possible Privileges for Solaris may vary depending on the precise version of Solaris you are using but the main privileges are documented in the privileges(5) manual page. We use the `priv_str_to_set` library function to process the Solaris privileges string, so we will accept any privilege supported by the operating system. We apply the privileges to the process by issuing a "SET" operation to replace the current privilege level with the requested set. We SET the Permitted, Limit and Effective sets in that order.

It is generally agreed that running with "root privileges" is dangerous for Internet servers. As such, Solaris exposes a "privileges" system that allows a non-privileged user to retain certain root privileges.

If you are using the `user` and `group` options in a Security stanza it may be necessary to retain some root privileges. An example of such a need is a module that can stop and start listeners during operation. On Unix, starting a listener during operation would require that the process run as a user who has the ability to perform a `bind` system call to the SMTP port; the SMTP port is reserved and only root can do this. If no privileges string is specified, no privileges are retained; this is the default.

Find below an example of using the Capabilities/Privileges option in a stand-alone configuration:

<a name="example.privileges"></a>

**Example 9.11. Privileges and Capabilities in a stand-alone configuration**

```
Security {
  user = ecuser
  group = ecuser
  # On Linux, allow binding to privileged ports without requiring
  # a process restart
  Capabilities = "cap_net_bind_service+ep"
  # On Solaris, allow binding to privileged ports without requiring
  # a process restart
  Privileges = "basic net_privaddr"
}
```

### Note

As of version 3.0.24, in order to correct a license validation error, the default `ecelerity.conf` file assigns the `net_rawaccess` privilege to the `privileges` option. Use of this privilege requires that Momentum be installed in a global zone.

Find below an example of using the Capabilities/Privileges option on a cluster node:

<a name="example.privileges.cluster"></a>

**Example 9.12. Privileges and Capabilities in a cluster configuration**

```
Security {
  user = ecuser
  group = ecuser
  # Linux
  Capabilities = "cap_net_admin+ep cap_net_bind_service+ep cap_net_raw+ep cap_sys_resource+ep"
  # Solaris
  Privileges = "basic net_privaddr net_bindmlp sys_resource sys_net_config net_rawaccess"
}
```

### Note

This example makes it possible to use DuraVIP™ bindings in a cluster when running as the user, "ecuser". Use of DuraVIP™ bindings also requires that Momentum be installed in a global zone.

The DuraVIP™ feature of Momentum requires higher privileges than usual in order to manipulate the network interfaces on the machine; rather than running with all possible privileges, you can configure Privileges to specify the subset of privileges that are required. During initialization, Momentum will adjust the process privileges as you specify, and this typically results in a process running at a lower privilege level that cannot later increase its privilege level.

### Warning

We do not recommend that the user in a `Security` stanza be set to `root`. However, if you do set `user` to `root` you will encounter permissions problems because capabilities are exclusive and not cumulative. Specifically, the `dmllog.rt` jlog won't be consumed, because it is written by a process that runs as ecuser, and when you run as root and define `Privileges`, you lose the "root access to all files" privilege unless it's defined in the privileges set. If you must run as root, comment out the `Privileges` option.

<a name="idp11058032"></a>
## Scope

`privileges` is valid in the security scope.

<a name="idp11060064"></a>
## See Also

[chroot](conf.ref.chroot "chroot"), [user](conf.ref.user.php "user"), [supplemental_groups](conf.ref.supplemental_groups.php "supplemental_groups"), [user](conf.ref.user.php "user"), [ecelerity-cluster.conf](ecelerity-cluster.conf.php "ecelerity-cluster.conf")

| [Prev](conf.ref.pidfile)  | [Up](conf.ref.files.php) |  [Next](conf.ref.prohibited_hosts.php) |
| pidfile  | [Table of Contents](index) |  prohibited_hosts |
