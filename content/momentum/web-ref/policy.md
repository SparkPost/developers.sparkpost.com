| [Prev](operations.multivip)  | Part I. Configuration Guide |  [Next](policy.validation) |
## Chapter 5. Implementing Policy with Momentum
**Table of Contents**

* [5.1\. Validation and the Validation Context](policy.validation)
* [5.2\. Implementing Policy Using Scriptlets](implementing.policy.scriptlets)
* [5.3\. Default Policy Scriptlets](default.policy.scriptlets)
* [5.4\. Implementing Policy Using Sieve](policy.implementing)
* [5.5\. Setting Context Based on Connecting IP](policy.context-based-on-ip)
* [5.6\. Best Practices for Manually Created Policy Scripts](policy.best.practices)
* [5.7\. Conclusion](policy.conclusion)

<a class="indexterm" name="idp2924496"></a><a name="policy.flow-diagram"></a>
**Figure 5.1. Mail flow through Momentum**
![](images/ecelerity-flow.png)
In order to effectively implement your site policy in Momentum, it is important to understand how mail transits through Momentum. [Figure 5.1, “Mail flow through Momentum”](policy#policy.flow-diagram "Figure 5.1. Mail flow through Momentum") gives a visual representation that will be useful in the following discussion.
Momentum waits for connections to be made to its ESMTP Listener. Once a connection has been made, the SMTP session undergoes a validation process, which allows you to perform various validation checks at each stage of the SMTP conversation. These validation checks can be passive (collecting information) or active (perhaps terminating the connection).
Once a message has passed all the validation checks, it is sent to the IO layer, which attempts to journal the message to the spool. Once the message is successfully stored in the spool, an acknowledgment is returned to the sender, and the message is enqueued to the delivery subsystem.
The delivery subsystem looks at each message to decide which MultiVIP© binding will be used for outbound delivery. It then determines the domain for the recipient and attempts to connect to the domain's mail exchange and deliver the mail onwards.

| [Prev](operations.multivip)  | [Up](p.guide) |  [Next](policy.validation) |
| 4.6. MultiVIP© Interfaces  | [Table of Contents](index) |  5.1. Validation and the Validation Context |
