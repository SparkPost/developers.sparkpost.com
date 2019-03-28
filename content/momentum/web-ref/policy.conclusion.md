|     |     |     |
| --- | --- | --- |
| [Prev](policy.best.practices)  | Chapter 5. Implementing Policy with Momentum |  [Next](policy.context.variables) |

## 5.7. Conclusion

That's essentially all there is to implementing policy. Sieve or Lua scripts provide you with enough flexibility to express the logic behind your policy. Aside from being very convenient (policy scripts can be reloaded on the fly, allowing real-time adjustment of policy without interrupting service), the Momentum implementation has extremely low overhead and tightly integrates with the event based architecture, being able to suspend processing until asynchronous operations (such as DNS resolution, or database queries) complete.

You can find more examples of Sieve policy in the `/opt/msys/ecelerity/etc/sieve-scripts` directory and sample Lua scripts in [Section 5.2, “Implementing Policy Using Scriptlets”](implementing.policy.scriptlets "5.2. Implementing Policy Using Scriptlets").


|     |     |     |
| --- | --- | --- |
| [Prev](policy.best.practices)  | [Up](policy) |  [Next](policy.context.variables) |
| 5.6. Best Practices for Manually Created Policy Scripts  | [Table of Contents](index) |  Chapter 6. Validation Context Variables |
