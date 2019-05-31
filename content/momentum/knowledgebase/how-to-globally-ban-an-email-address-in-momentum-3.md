# How to globally ban an email address in Momentum 3.x



There's no email address blacklist on Momentum out of the box (using ecelerity.conf) so you would have to write something in Lua. There are some examples on [https://support.messagesystems.com/docs/web-ref/implementing.policy.scriptlets.php](https://support.messagesystems.com/docs/web-ref/implementing.policy.scriptlets.php).

If you want to blackhole a domain, for example, you can do so using Blackhole ( [https://support.messagesystems.com/docs/web-ref/conf.ref.blackhole.php](https://support.messagesystems.com/docs/web-ref/conf.ref.blackhole.php)).

Example:

```
Domain xyz.com {

Blackhole = true 

}
```