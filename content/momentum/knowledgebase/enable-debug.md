# How do I run Momentum in debug mode?
 

Sometimes when there are issues preventing Momentum from starting up properly, or with a configuration change, the output you get from a failed startup or from running "config\_shim\_wrapper" are insufficient to understand the problem.  In these cases it can be helpful to run Momentum in "debug" mode to help get additional context.

Note that this is never a viable option for running Momentum.  It behaves differently in this mode than when started normally, and will not perform well.  This approach is specifically only useful for troubleshooting problems at startup.

To start Momentum in debug mode in current releases, use the following command (as root):

 
`# /opt/msys/ecelerity/sbin/run.ecelerity -d`

 

This will produce copious output, showing you the configuration as it is processed, and then information about other steps taking during initialization until you come to the point of the error where it fails.  Sometimes important information can hide further up in the stream as well, so the most important data is not always right at the end.  If you need help evaluating the output, please include the entire debug output in a ticket and support will be happy to assist.

If it completes the startup process it will enter the normal processing loop.  At that point you will need to use the "CTRL-C" combination to "break" out of the application and return to the prompt.

This same methodology can be used for **ecconfigd** and **eccmgr** (on the manager/log aggregator)