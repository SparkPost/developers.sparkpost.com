|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounces_inline_original)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.chroot.php) |

<a name="conf.ref.capabilities"></a>
## Name

capabilities — selectively retain "root" capabilities

## Synopsis

`Security { capabilities = "linux capability set" }`

<a name="idp8493760"></a>
## Description

This option is only available on Linux, since Momentum 1.2.12.

**Configuration Change. ** The Solaris equivalent of "Capabilities" is "Privileges" and is available as of version 3.0\. For more information see [privileges](conf.ref.privileges "privileges").

It is generally agreed that running with "root privileges" is dangerous for Internet servers. As such, Linux exposes a "capabilities" system that allows a non-privileged user to retain certain root privileges. The capability system makes this possible.

If you are using the `user` and `group` options in a Security stanza it may be necessary to retain some root privileges. An example of such a need is a module that can stop and start listeners during operation. On Unix, starting a listener during operation would require that the process run as a user who has the ability to perform a `bind` system call to the SMTP port; the SMTP port is reserved and only root can do this.

The list of possible Capabilities for Linux may vary depending on your Linux distribution, but documentation is found in the `capabilities` manual page. We use the `cap_from_text` library function to process the Linux capabilities string, so we will accept any capability supported by the operating system. The capability adjustment is applied via the `cap_set_proc` library function. If no capabilities string is specified, no privileges are retained; this is the default.

Find below an example of using the Capabilities/Privileges option in a stand-alone configuration:

<a name="example.capabilities"></a>

**Example 9.6. Privileges and Capabilities in a stand-alone configuration**

```
Security {
  user = ecuser
  group = ecuser
  # On Linux, allow binding to privileged ports without requiring
  # a process restart
  Capabilities = "cap_net_bind_service+ep"
  # On Solaris, allow binding to privileged ports without requiring
  # a process restart (version 3.0 and higher)
  Privileges = "basic net_privaddr"
}
```

Find below an example of using the Capabilities/Privileges option on a cluster node:

<a name="example.capabilities.cluster"></a>

**Example 9.7. Privileges and Capabilities in a cluster configuration**

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

The privileges in this example make it possible to use DuraVIP™ bindings in a cluster when running as the user, "ecuser".

In a cluster configuration, when you accept the default configuration, the definition of the `Security` stanza in the `ecelerity-cluster.conf` file overrides the configuration defined in the `ecelerity.conf` file.

The DuraVIP™ feature of Momentum requires higher privileges than usual in order to manipulate the network interfaces on the machine; rather than running with all possible privileges, you can configure Capabilities to specify the subset of privileges that are required. During initialization, Momentum will adjust the process privileges as you specify, and this typically results in a process running at a lower privilege level that cannot later increase its privilege level.

### Warning

We do not recommend that the user in a `Security` stanza be set to `root`. However, if you do set `user` to `root` you will encounter permissions problems because capabilities are exclusive and not cumulative. Specifically, the `dmllog.rt` jlog won't be consumed, because it is written by a process that runs as ecuser, and when you run as root and define `Capabilities`, you lose the "root access to all files" capability unless it's defined in the capabilities set. If you must run as root, comment out the `Capabilities` option.

<a name="idp8518384"></a>
## Scope

`capabilities` is valid in the security scope.

<a name="idp8520416"></a>
## See Also

[chroot](conf.ref.chroot "chroot"), [user](conf.ref.user.php "user"), [supplemental_groups](conf.ref.supplemental_groups.php "supplemental_groups"), [user](conf.ref.user.php "user"), [ecelerity-cluster.conf](ecelerity-cluster.conf.php "ecelerity-cluster.conf")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounces_inline_original)  | [Up](conf.ref.files.php) |  [Next](conf.ref.chroot.php) |
| bounces_inline_original  | [Table of Contents](index) |  chroot |
