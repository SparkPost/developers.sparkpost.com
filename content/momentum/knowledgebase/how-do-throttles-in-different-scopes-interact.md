#How do throttles in different scopes interact?

The standard precedence for throttles (and limits, as well) is as follows, from less specific to more specific:

Global -> Domain -> Binding Group -> Domain -> Binding - > Domain

This means that a setting in a precedence level will override the same setting in any precedence levels to its left; settings in the global scope are always overridden by the same setting in any other precedence level.

*N.B. this is not applicable at this level to Adaptive Delivery.*

Using throttles as an example, ecelerity.conf could contain the following:

```
Outbound_Throttle_Messages="10/5"

domain "fakedomain.com" {
    Outbound_Throttle_Messages="1/5"
}

binding "test" {
    domain "fakedomain.com" {
        Outbound_Throttle_Messages="5/5"
 }
```

In this example, the domain fakedomain.com will have an Outbound_Throttle_Messages setting of 1/5 unless it is going out the binding "test", when it will increase to 5/5. The global setting of 10/5 will always be overridden for fakedomain.com. All other domains will use the global setting of 10/5.