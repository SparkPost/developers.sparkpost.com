# How to trace a SMTP inbound session?
 

Momentum does not have a command to trace an inbound session, for that, you would need to use a packet analyser like tcpdump or WireShark, for example.

If you need tcpdump you will need to either install the rpm, or run something like: yum install tcpdump.
Wireshark is available here: [https://www.wireshark.org/](https://www.wireshark.org/)

There is an enhancement request for that for a future release but there is no firm date.

You can, though, [trace a outbound smtp session using trace smtp](https://developers.sparkpost.com/momentum/web-momo4/console_commands.trace_smtp/)