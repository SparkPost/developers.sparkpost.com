| [Prev](conf.ref.capabilities)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.clear_mail_queue_maintainers.php) |

<a name="conf.ref.chroot"></a>
## Name

chroot — chroot to a secure environment

## Synopsis

`Security { chroot = "/chroot/dir" }`

<a name="idp8531696"></a>
## Description

This security feature invokes the underlying operating system's `chroot` call to place Momentum in an alternate root directory. This can be used to limit the portions of the file system that are available to Momentum and can be an added protection should the instance be compromised.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

The default value for this option is to use no chroot.

<a name="idp8535936"></a>
## Scope

chroot is valid in the security scope.

<a name="idp8537568"></a>
## See Also

[chroot](conf.ref.chroot "chroot"), [supplemental_groups](conf.ref.supplemental_groups.php "supplemental_groups"), [capabilities](conf.ref.capabilities.php "capabilities")

| [Prev](conf.ref.capabilities)  | [Up](conf.ref.files.php) |  [Next](conf.ref.clear_mail_queue_maintainers.php) |
| capabilities  | [Table of Contents](index) |  clear_mail_queue_maintainers |
