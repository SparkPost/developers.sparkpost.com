# Long Time to Deliver

1. **Long Time to Deliver**

	The best place to find out why it's taking long to deliver is the mainlog.ec.
	Since messages eventually get delivered, it seems like the receivers are
	temporarily failing the message. There are many reasons why they could, which
	is why it's a good idea to monitor the mainlog continuously. The log is
	probably in /var/log/ecelerity/mainlog.ec.

	A command like this will show you how many transient failures per domain:
	
	```
	cat /var/log/ecelerity/mainlog.ec | grep " (T)" | cut -d "@" -f 4 | sort | uniq -c
	```
	
	You can then get a little more insight as to the specific transient failuremessage by adding in the domain, for example "yahoo.com":
	
	```
	cat /var/log/ecelerity/mainlog.ec | grep "@Tyahoo.com@" | cut -d "@" -f 12,13 | sort | uniq -c
	```
	
2. **Mail is not getting accepted on a particular binding. Use netcat on sending box to verify that box and binding can send mail.**

	First test general mail sending then try the particular binding IP.
	
	```
	nc -s xxx.www.yyy.zzz edge.omniti.com 25

	usage: nc -46DdhklnrStUuvzC -i interval -p source_port -s source_ip_address -T ToS -w timeout -X proxy_version          [-x proxy_address:port] hostname [ports]
	
	
