| [Prev](policy)  | Chapter 5. Implementing Policy with Momentum |  [Next](implementing.policy.scriptlets) |

## 5.1. Validation and the Validation Context

The validation process in Momentum is extensible, designed to consist of any number of disparate modules provided either by Message Systems, a third-party vendor or developed directly by a customer. Momentum provides a validation context which allows validation modules to store and share validation information, so that the final decision about what to do with a message (discard, reject, quarantine, modify, forward etc.) can be made using the policy scripts, based on the results from a variety of virus scanners, authentication results, block-list data and so on.

The validation context contains two dictionaries of information, referred to as the `connection context` and `message context` respectively. The former holds information associated with the remote client connected to Momentum, whereas the latter holds information about the current message. The message context is emptied for each message transmitted on a given connection, whereas the connection context retains its information for the lifetime of that connection.

A number of context variables are pre-defined by Momentum, depending on how the connection was made, and what modules are loaded. A complete list of pre-defined context variables can be found in [Chapter 6, *Validation Context Variables*](policy.context.variables "Chapter 6. Validation Context Variables") .

| [Prev](policy)  | [Up](policy) |  [Next](implementing.policy.scriptlets) |
| Chapter 5. Implementing Policy with Momentum  | [Table of Contents](index) |  5.2. Implementing Policy Using Scriptlets |
