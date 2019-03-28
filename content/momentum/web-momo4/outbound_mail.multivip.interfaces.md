|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail.prohibited.hosts)  | Chapter 25. Configuring Outbound Mail Delivery |  [Next](outbound_mail.traffic.shaping) |

## 25.3. MultiVIP© Interfaces

<a className="indexterm" name="idp3618464"></a>![](images/multivip.png)

MultiVIP© technology allows Momentum to transparently deliver different messages from different IP addresses. This is most commonly used when two or more customers are sending mail through a single Momentum instance, and it is desirable (for quality of service reasons) for messages from each client to originate from unique IP addresses that have been assigned to them.

Many ISPs enforce policies on an IP level. This means that if a message from IP address 1.2.3.4 violates the terms of the ISP's service, the ISP may choose to stop accepting mail from that IP address. Obviously, it is undesirable for a foreign decision refusing one client's emails to degrade the quality of service of an unrelated client. By assigning client 1 the IP address 1.2.3.4 and client 2 the IP address 1.2.3.5 and dictating that all messages from each client leave Momentum from their assigned IP address, the likelihood of policy enforcement against client 1 inadvertently effecting client 2 is drastically reduced. MultiVIP© is a mechanism for adding IP addresses for transit to Momentum and specifying which messages should leave the system from each IP address.

### 25.3.1. Configuration

Setting up a MultiVIP© interface is a two-step process:

1.  In your configuration file, use the `bindings` stanza to declare the interfaces to bind to (called "Bindings"). A binding declaration is required for every interface to which you want to bind messages. For details, see [binding](conf.ref.binding "binding").

2.  Set the rules or "policy" to inform Momentum as to which messages should transit which bindings. For details, see [Chapter 62, *Implementing Policy with Momentum*](policy "Chapter 62. Implementing Policy with Momentum") .

Messages that are not assigned to a specific binding will fallback to the `default` binding. Ensure that this fallback binding meets your needs. For details, see [the section called “`default` Binding”](conf.ref.binding#conf.ref.binding.default "default Binding").

### Warning

When using bindings, Momentum binds the local side of SMTP connections to the IP address specified. This can potentially impact deliverability if the local source IP address has no route to the destination IP address.

For example, if the delivery of a message requires contacting a machine on a private network (for a multi-homed machine) and the global and all explicit bindings are specified as public IP addresses, it is likely that these internally destined messages will be undeliverable.

Binding names are case-sensitive. Spaces and colons are not allowed in binding names.

### 25.3.2. Removing a Binding

When you are removing a binding that is in use, do the following:

1.  Examine the binding assignment to determine if there are any policy settings associated with the binding.

2.  If there are no policy settings, suspend the binding and apply the configuration changes. For information about suspending a binding, see [suspend_delivery](conf.ref.suspend_delivery "suspend_delivery").

3.  Examine the mail queue. If there is mail for the suspended binding, reassign it to another binding. If the queued messages are not reassigned to another binding, they will go to the `default` binding. For more information, see [showqueue](console_commands.showqueue "showqueue") and [reroute queue](console_commands.reroute_queue "reroute queue").

4.  Once all reassigned messages are out of the queue, restart ecelerity to fully remove the binding from the configuration.

|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail.prohibited.hosts)  | [Up](outbound_mail) |  [Next](outbound_mail.traffic.shaping) |
| 25.2. Prohibited_Hosts  | [Table of Contents](index) |  25.4. Throttling and Traffic Shaping |

