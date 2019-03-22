| [Prev](conf.ref.scope_max_outbound_connections)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.send_8bitmime.php) |

<a name="conf.ref.security"></a>
## Name

security — Scope for defining which permissions are retained by which user

## Synopsis

`security { ... }`

<a name="idp11612448"></a>
## Description

It is generally agreed that running with "root privileges" is dangerous for Internet servers. As such, Linux exposes a "security" system that allows a non-privileged user to retain certain root privileges.

If you are using the `user` and `group` options in a Security stanza it may be necessary to retain some root privileges. An example of such a need is a module that can stop and start listeners during operation. On Unix, starting a listener during operation would require that the process run as a user who has the ability to perform a `bind` system call to the SMTP port; the SMTP port is reserved and only root can do this.

The list of possible capabilities for Linux may vary depending on your Linux distribution, but documentation is found in the `capabilities` manual page. We use the `cap_from_text` library function to process the Linux capabilities string, so we will accept any capability supported by the operating system. The capability adjustment is applied via the `cap_set_proc` library function. If no capabilities string is specified, no privileges are retained; this is the default.

Find below an example of using the Security scope in a stand-alone configuration:

<a name="example.security"></a>

**Example 9.14. Security scope in a Stand-alone Configuration**

```
security {
  user = ecuser
  group = ecuser
  # On Linux, allow binding to privileged ports without requiring
  # a process restart
  capabilities = "cap_net_bind_service+ep"
  # On Solaris, allow binding to privileged ports without requiring
  # a process restart (version 3.0 and higher)
  privileges = "basic net_privaddr"
}
```

Find below an example of using the Security scope on a cluster node:

<a name="example.security.cluster"></a>

**Example 9.15. Security scope in a cluster configuration**

```
security {
  user = ecuser
  group = ecuser
  # Linux
  capabilities = "cap_net_admin+ep cap_net_bind_service+ep cap_net_raw+ep cap_sys_resource+ep"
  # Solaris
  privileges = "basic net_privaddr net_bindmlp sys_resource sys_net_config net_rawaccess"
}
```

The privileges in the previous example make it possible to use DuraVIP™ bindings in a cluster when running as the user, "ecuser".

### Note

On Solaris, in order to validate MAC-based licences add **net_rawaccess** to privileges. Also, note that zones may not have the **net_rawaccess** privilege. For zones you need an IP-based licence or a wildcard licence.

The DuraVIP™ feature of Momentum requires higher privileges than usual in order to manipulate the network interfaces on the machine; for more information see [capabilities](conf.ref.capabilities "capabilities").

### Warning

We do not recommend that the user in a `security` stanza be set to `root`. However, if you do set `user` to `root` you will encounter permissions problems because capabilities are exclusive and not cumulative. Specifically, the `dmllog.rt` jlog won't be consumed, because it is written by a process that runs as ecuser, and when you run as root and define `Capabilities`, you lose the "root access to all files" capability unless it's defined in the capabilities set. If you must run as root, comment out the `Capabilities` option.

Options valid in the `security` scope are:

*   `capabilities` (Linux)

*   `privileges` (Solaris)

*   `group`

*   `user`

*   `chroot`

*   `supplemental_groups`

Changing the value of options in the security scope at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp11644000"></a>
## Scope

`security` is valid in the global scope.

<a name="idp11646032"></a>
## See Also

[capabilities](conf.ref.capabilities "capabilities"), [privileges](conf.ref.privileges.php "privileges"), [chroot](conf.ref.chroot.php "chroot"), [supplemental_groups](conf.ref.supplemental_groups.php "supplemental_groups") and [user](conf.ref.user.php "user")

| [Prev](conf.ref.scope_max_outbound_connections)  | [Up](conf.ref.files.php) |  [Next](conf.ref.send_8bitmime.php) |
| scope_max_outbound_connections  | [Table of Contents](index) |  send_8bitmime |
