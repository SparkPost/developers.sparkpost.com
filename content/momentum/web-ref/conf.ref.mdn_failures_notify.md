|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.max_timed_events_per_iter)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.memory_goal.php) |

<a name="conf.ref.mdn_failures_notify"></a>
## Name

mdn_failures_notify — mailbox to which to send null recipient MDNs

## Synopsis

`MDN_Failures_Notify = "postmaster@example.com"`

<a name="idp10346112"></a>
## Description

If `MDN_Failures_Notify` is set to an email address, Momentum will send the MDN to that mailbox, allowing a postmaster to review and perhaps take action on those bounces.

When generating an MDN, Momentum will skip the bounce message generation if the message that triggered it was from the NULL sender, as there is no information about whom should be notified.

<a name="idp10348816"></a>
## Scope

mdn_failures_notify is valid in the binding, binding_group, domain and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.max_timed_events_per_iter)  | [Up](conf.ref.files.php) |  [Next](conf.ref.memory_goal.php) |
| max_timed_events_per_iter  | [Table of Contents](index) |  memory_goal |
