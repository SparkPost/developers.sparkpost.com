|     |     |     |
| --- | --- | --- |
| [Prev](policy.implementing)  | Chapter 5. Implementing Policy with Momentum |  [Next](policy.best.practices) |

## 5.5. Setting Context Based on Connecting IP

It is often useful to bypass anti-spam checks when you know that the sender is a machine on your network; it could be either a local user or an internal mail exchange machine that is merely forwarding the mail on via Momentum. In the former case, it's not good for your own users not to be able to mail out of your network, and in the latter case, it doesn't help you if you are tarpitting your own mail infrastructure if spam has managed to leak in.

The ESMTP_Listener configuration shown in [Example 5.9, “Connection context variables in ESMTP_Listener”](policy.context-based-on-ip#policy.context-based-on-ip3.ex "Example 5.9. Connection context variables in ESMTP_Listener") will set `my_key` and `my_other_key` in the connection context for machines connecting from the netblock 0.0.0.0/0 (this matches all connections). It will set the `trusted_mx` connection context for machines connecting from the 10.0.0.0/32 network, which is assumed to be a trusted internal network. You can set arbitrary context information using this mechanism, and then inspect it in your Sieve scripts and act accordingly, as hinted at by [Example 5.10, “Acting on Connection Context Using Sieve”](policy.context-based-on-ip#policy.context-based-on-ip.ex2 "Example 5.10. Acting on Connection Context Using Sieve").

<a name="policy.context-based-on-ip3.ex"></a>

**Example 5.9. Connection context variables in ESMTP_Listener**

```
Esmtp_Listener = {
   Listen "*:25" {
      Peer "0.0.0.0/0" {
         context = [
           my_key = "my_value"
           my_other_key = "my_other_value"
         ]

      }
      Peer "10.0.0.0/32" {
         context = [
            trusted_mx = "yes"
         ]
      }
   }
}
```

<a name="policy.context-based-on-ip.ex2"></a>

**Example 5.10. Acting on Connection Context Using Sieve**

```
if not vctx_conn :is "trusted_mx" "yes" {
   # Apply policy checks, as shown above.
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](policy.implementing)  | [Up](policy) |  [Next](policy.best.practices) |
| 5.4. Implementing Policy Using Sieve  | [Table of Contents](index) |  5.6. Best Practices for Manually Created Policy Scripts |
