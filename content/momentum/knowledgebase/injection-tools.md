# Tools for Injecting/submitting messages


Plain ole' Telnet
This simple, ubiquitous yet powerful tool is the most surefire way to submit a message into an MTA. You can use it to manually submit messages into any IP address and on any port. Just doing this basically fulfils these things:

* Network connectivity - does the IP address on that port even work? Is it responding? 
* Is the MTA responding? Momentum greets with "ESMTP ecelerity 4.2.31.59853" and so on. 
* Does it have any issues delivering the message? Anything other than a "250 2.6.0 message received" would be an indicator of bad bad things (example below)

Here's a sample of Telnet-ing:

	[root@pmta ~]# telnet 127.0.0.1 25
	Trying 127.0.0.1...
	Connected to 127.0.0.1.
	Escape character is '^]'.
	220 2.0.0 hostname.something ESMTP ecelerity 4.2.38.62370 r(:)
	EHLO hi
	mail from: me@from.com
	rcpt to: them@recipient.com
	DATA
	Date: Mon, 20 Aug 2018 17:54:24 +0000
	To: test@gmail.com
	From: j@jasdevism.com
	Subject: test Mon, 20 Aug 2018 17:54:24 +0000
	hello world mr.jas is the best
	.
	250 2.6.0 message received

## Smtp-source
This is my favourite because it comes built-in with most Linux distributions and gives plenty of options. The strength in this tool lies in the fact that it can submit multiple messages very rapidly from the command line - great for performance testing. 

Basic
You can start off with this basic command of :   
sending one (1) message to test@yahoo.com from return@path.com through 127.0.0.1

	smtp-source -cdm 1 -f me@from.com -t them@recipient.com  127.0.0.1

## Send multiple messages

Sends 10 messages

	smtp-source -cdm 10 -f me@from.com -t them@recipient.com 127.0.0.1 

Send multiple with subject, size, interval, port on multiple connections/threads

	smtp-source -vcdm 10 -R 10 -l 1000 -S 100 -S "Hi, testing 1000byte msg on 10 threads" -f return@path.com  127.0.0.1:2525 -t to@domain.com


Here's a quick reference guide on the flags. Check the man for more:

	-vcdm  visual counter, display running counter, dont disconnect connection,  number of of_msges
	
	-l size (in bytes)
	
	-R interval (for all threads)
	
	-s smtp sessions threads (equiv to  connections)
	
	-S subject header
	
	-v verbose (shows SMTP to stdout)
	
	-t recipient address
	
	-f from address



## SWAKS

The swiss army knife of SMTP, gives you tons of options. IMHO the only thing it doesn't do is send multiples fast, unlike smtp-source. 

For a list of all the options, please refer the documentation at http://www.jetmore.org/john/code/swaks/latest/doc/ref.txt.

Installation
If you're having trouble running installing it via yum on CentOS/Red Hat 6, run: 

	yum install epel-release perl-Net-SSLeay && yum install swaks -y


On AWS instances, depending on the OS, you may need to install the EPEL repos as described on this page: 
https://aws.amazon.com/premiumsupport/knowledge-center/ec2-enable-epel/

### Basic message   
	
	swaks -s 127.0.0.1 -f someone@example.net -t them@recipient.com

### With a header

	swaks -s 127.0.0.1 -f someone@example.net -t them@recipient.com --header “Subject: Hello! This is the subject header” 

### use "--ah" to append header, which is different than just adding a header like above

	swaks -s 127.0.0.1 -f someone@example.net -t them@recipient.com --h "Subject:Hello! This is the subject header” --ah “header-X-something:123” 

### Multiple headers

	# separated by "\n"
	swaks -s 127.0.0.1-f someone@example.net -t them@recipient.com --header "Subject: Hello! This is the subject header\nSecond_header:123\nThird_Header”
	Include text in the body of email
	swaks -s 127.0.0.1 -f me@from.com -t them@recipient.com --body  "This text is in the body of the email" 
	Include text in the body of email from a file
	swaks -s 127.0.0.1 -f me@from.com -t them@recipient.com --body /path/to/file.txt 
	Include attachment
	swaks -s 127.0.0.1 -f me@from.com -t them@recipient.com --attach /path/to/file.tgz 
	Using Auth
	swaks -s 127.0.0.1 -f me@from.com -t them@recipient.com --auth-user=jasdev --auth-password=jasdev 

## Send via Sparkpost using TLS

	swaks -server smtp.sparkpostmail.com:587 -tls --auth-user SMTP_Injection --auth-password [your auth key] -f me@from.com -t them@recipient.com


### Quit after a certain phase (to test connectivity) on a certain port using TLS

	swaks -tls -s 127.0.0.1 -p 465 -f me@from.com -t them@recipient.com --quit-after RCPT

### Test TLS versions and Ciphers

	swaks -s smtp.sparkpostmail.com -tls  -p 587 -f me@from.com -t them@recipient.com -tlsp tlsv1_2 --tls-cipher ECDHE-RSA-AES128-GCM-SHA256 --quit-after RCPT

### To get the list of available ciphers on your system

	Openssl ciphers


### For fun - Send using a webmail service like gmail


	swaks -t rcpt@domain.com -s smtp.gmail.com:587 -tls -a LOGIN # it will prompt for username/passwd
