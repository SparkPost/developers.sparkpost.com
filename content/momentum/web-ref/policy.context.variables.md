| [Prev](policy.conclusion)  | Part I. Configuration Guide |  [Next](policy.predefined-context-conn) |
## Chapter 6. Validation Context Variables
**Table of Contents**

* [6.1\. Connection Context Variables](policy.predefined-context-conn)
* [6.2\. Message Context Variables](policy.context-mess)

<a class="indexterm" name="idp3424576"></a>
As mentioned in [Chapter 5, *Implementing Policy with Momentum*](policy "Chapter 5. Implementing Policy with Momentum") , context variables have a significant role to play when policy is enforced using scripts. There is a description of a user-defined connection context variables set within a listener stanza in [Context](ecelerity.conf#ecelerity.conf3.listener.options.context) . In addition to user-defined variables, there are predefined validation context variables accessible in both the connection context and the message context. Not all context variables will be set in all cases; some, for example, depend on TLS settings and others on which modules are loaded into Momentum. Some context variables are defined in a global scope and some in a module scope.

| [Prev](policy.conclusion)  | [Up](p.guide) |  [Next](policy.predefined-context-conn) |
| 5.7. Conclusion  | [Table of Contents](index) |  6.1. Connection Context Variables |
