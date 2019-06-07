# How do I verify that the pe2m processes are connected to the pe2sched process?

### Symptoms

The following conditions would have to be met for this to be something that you could diagnose:

   1. Mailings are going into mailing state 4 (built) and are not moving to state 5 (running).
   2. Pe2m on the generator nodes is running
   3. Pe2sched on the manager/db node is running

It is distinctly possible in this scenario that the manager is not currently connected to the scheduler. Running the echo command on one of the Momentum MTA nodes or the Momentum manager node would help ensure that this is either the issue or not.


### Steps

Assuming that the ip address of the scheduler (where pe2sched is running) is 172.16.206.10.

You can execute:

```
echo "pe2g status" |/opt/msys/ecelerity/bin/ec_console 172.16.206.10:2026
```

This will give you the following output:

```
15:27:04 172.16.206.10:2026> pe2g status
SUMMARY OF ALL CLIENTS STATUS
 total active clients:2
number of runnable mailings: 0
Client 1 (test2.messagesystems.com) Status:
Mon 2013-04-08 15:27:11 UTC: client cpu load:0.350000, 0.260000, 0.240000
 number of running process:0
Client 2 (test3.messagesystems.com) Status:
Mon 2013-04-08 15:27:11 UTC: client cpu load:0.000000, 0.000000, 0.000000
 number of running process:0
Orgs: 1 active
orgid: 1
 servers: test2.messagesystems.com test3.messagesystems.com
```

This particular output,  will give the list of all clients(managers) that are connected to the scheduler, along with the active clients (active managers). It has been noted in the past that the managers can lose connections to the scheduler (particular if the scheduler is taken down and the manager is not) and due to this have mailings in built status but being generated.