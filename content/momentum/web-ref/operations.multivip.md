|     |     |     |
| --- | --- | --- |
| [Prev](operations.logging)  | Chapter 4. Operations |  [Next](policy) |

## 4.6. MultiVIP© Interfaces

<a class="indexterm" name="idp2908864"></a>![](images/multivip.png)

MultiVIP© technology allows Momentum to transparently deliver different messages from different IP addresses. This is most commonly used when two or more customers are sending mail through a single Momentum instance and it is desirable (for quality of service reasons) for messages from each client to originate from unique IP addresses that have been assigned to them.

Many ISPs enforce policies on an IP level. This means that if a message from IP address 1.2.3.4 violates the terms of their service, they may choose to stop accepting mail from that IP address. Obviously, it is undesirable for a foreign decision refusing one client's emails to degrade the quality of service of an unrelated client. By assigning client 1 the IP address 1.2.3.4 and client 2 the IP address 1.2.3.5 and dictating that all messages from each client leave Momentum from their assigned IP address, the likelihood of policy enforcement against client 1 inadvertently effecting client 2 is drastically reduced. MultiVIP© is a mechanism for adding IP addresses for transit to Momentum and specifying which messages should leave the system from each IP address.

Setting up a MultiVIP© interface is a two-step process. First you must declare the interfaces to bind to (called "Bindings"), then rules must be put in place to let Momentum know which messages should transit which bindings.

### 4.6.1. Declaring Bindings

Binding *`BINDINGNAME`* {
  Bind_Address = &lt;address>
 [EHLO_Hostname = <__message__|__hostname__|literal string>]
 [Max_Outbound_Connections = ```<number>```]
 [Suspend_Delivery = &lt;true|false>]
}

A binding declaration needs to be made for every interface you want to bind messages to.

### Warning

When using bindings, Momentum binds the local side of SMTP connections to the IP address specified. This can potentially impact deliverability if the local source IP address has no route to the destination IP address.

For example, if the delivery of a message requires contacting a machine on a private network (for a multi-homed machine) and the global and all explicit bindings are specified as public IP addresses, it is likely that these internally destined messages will be undeliverable.

You should also be aware that binding names are case-sensitive.

For more information about bindings, see [binding](conf.ref.binding "binding").


|     |     |     |
| --- | --- | --- |
| [Prev](operations.logging)  | [Up](operations) |  [Next](policy) |
| 4.5. Logging  | [Table of Contents](index) |  Chapter 5. Implementing Policy with Momentum |
