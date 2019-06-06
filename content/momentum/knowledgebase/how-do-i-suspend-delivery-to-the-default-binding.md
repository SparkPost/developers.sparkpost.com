# How do I suspend delivery to the default binding?

Sometimes, if there is a misconfiguration to your bindings, some mail destined at a binding may ' fall through ' and go out via the default binding. If you have not configured the default binding,  this may cause issues. 

If you find messages are erroneously going out through the default binding, you should check your binding configuration, your /var/log/ecelerity/mainlog.ec lines for messages that were errantly assigned, and check any policy you might have related to binding assignment.  If you require Support to assist you in finding out why your messages are being sent through the default binding, please collect the above configuration to send,  plus  a copy of a raw message that was injected and errantly assigned to the default binding. 

To disable mail going out of the default binding, you can run the below command:

```
echo "config set binding default suspend_delivery true" / | sudo /opt/msys/ecelerity/bin/ec_console
```

or if you want this to be more permanently the case put the following entry in your **/opt/msys/ecelerity/etc/conf/default/ecelerity.conf** file (then commit if you are on a cluster, or config reload if on a singlenode):

```
binding "default" {
  suspend_delivery = true
}
```
