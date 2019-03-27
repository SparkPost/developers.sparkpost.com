| [Prev](conf.ref.capabilities)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.clear_mail_queue_maintainers) |

<a name="conf.ref.chroot"></a>
## Name

chroot — chroot to a secure environment

## Synopsis

`Security { chroot = "/chroot/dir" }`

<a name="idp23843264"></a>
## Description

This security feature invokes the underlying operating system's `chroot` call to place Momentum in an alternate root directory. This can be used to limit the portions of the file system that are available to Momentum and can be an added protection should the instance be compromised.

The default value for this option is to use no chroot.

### Note

Changing the value of options in the `security` scope at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp23848224"></a>
## Scope

chroot is valid in the security scope.

<a name="idp23850048"></a>
## See Also

[security](conf.ref.security "security"), [capabilities](conf.ref.capabilities "capabilities"), [user](conf.ref.user "user"), and [supplemental_groups](conf.ref.supplemental_groups "supplemental_groups")

| [Prev](conf.ref.capabilities)  | [Up](config.options.ref) |  [Next](conf.ref.clear_mail_queue_maintainers) |
| capabilities  | [Table of Contents](index) |  clear_mail_queue_maintainers |

