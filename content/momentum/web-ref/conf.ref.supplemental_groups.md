| [Prev](conf.ref.starttls_injection_policy)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.suspend_delivery.php) |

<a name="conf.ref.supplemental_groups"></a>
## Name

supplemental_groups — security: supplemental groups to assume after startup

<a name="idp11919120"></a>
## Description

<a name="conf.ref.supplemental_groups.example"></a>

**Example 9.17. supplemental_groups example**

Security {
  Supplemental_Groups = ( *`"list of group names or ids"`*                         )
  # On Linux, allow binding to privileged ports without requiring
  # a process restart
  Capabilities = "cap_net_bind_service+ep"
  # On Solaris, allow binding to privileged ports without requiring
  # a process restart (version 3.0 and higher)
  Privileges = "basic net_privaddr"
}

This security feature instructs Momentum to issue a `setgroups` system call to set the supplemental groups for the Momentum process. This allows more flexibility for granting Momentum access to resources that are restricted based on group membership.

<a name="idp11924848"></a>
## Scope

Supplemental_Groups is valid in the security scope.

<a name="idp11926496"></a>
## See Also

[user](conf.ref.user "user"), [chroot](conf.ref.chroot.php "chroot"), [capabilities](conf.ref.capabilities.php "capabilities")

| [Prev](conf.ref.starttls_injection_policy)  | [Up](conf.ref.files.php) |  [Next](conf.ref.suspend_delivery.php) |
| starttls_injection_policy  | [Table of Contents](index) |  suspend_delivery |
