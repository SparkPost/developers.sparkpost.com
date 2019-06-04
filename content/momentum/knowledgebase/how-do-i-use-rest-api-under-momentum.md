# How Do I use Rest API under Momentum?

Initially the documentation here ([https://support.messagesystems.com/docs/web-rest-injector/index.php](https://support.messagesystems.com/docs/web-rest-injector/index.php)) appears to cover this however, there are some significant parts of the injection process that aren't covered in the REST API documentation that would be worth going over here

1. After setting up the listener and REST API as per the documentation in the ecelerity.conf under /opt/msys/ecelerity/etc/conf/default, if this is a cluster it is recommended you make this change on the manager.

	```
	#Set up the http listener
	HTTP_Listener {
	  Listen ":8081" {}
	}  
	#Activate the REST API for injection
	restinjector {}
	```

2. Once the above has been done there are two alternatives to doing a json injection.

	* Inject using a file, this is quite well documented in the online pages under support.messagesystems.com however, I have included the command line to inject as well as the file format that you can use:

		```
		curl -X POST  http://localhost:4043/v1.0/inject/  -d @example.json
		```
		followed by the file: example.json:

		```
		{
		"template":
			"From: tester@mgr.example.org\nTo: someone@example.com\nSubject:Simple content\n\nThis is your injected message",
			"recipients":
			[
			  {
				"to":"someone@example.com",
				"from":"postmaster@example.com",
				"vctx":{"subject":"Verification",
						   "sent":"4444"},
			  }
			]
		}
		```
Please note that in this not only is the To and the From being set but you can also set multiple context variables using the vctx stanza. Also note that the "inject" resource is only valid in the v1.0 API.
<<<<<<< HEAD

* Injection using no file and the entire body and context variables through the command line.


	```
	curl -X POST  http://localhost:4043/v1.0/inject/  -H 'Content-Type:application/json' --data-binary '{"template":"From: tester@mgr.example.org\nTo: someone@example.com\nSubject:Simple content\n\nThis is your injected message","recipients":[ { "to":"someone@example.com", "from":"postmaster@example.com", "vctx":{"subject":"Verification","sent":"4444"}, } ] }'
	```
		
=======
    
    * Injection using no file and the entire body and context variables through the command line.
    
    ```
	curl -X POST  http://localhost:4043/v1.0/inject/  -H 'Content-Type:application/json' --data-binary '{"template":"From: tester@mgr.example.org\nTo: someone@example.com\nSubject:Simple content\n\nThis is your injected message","recipients":[ { "to":"someone@example.com", "from":"postmaster@example.com", "vctx":{"subject":"Verification","sent":"4444"}, } ] }'
	```
	
>>>>>>> 6796020db9af8395281b68a7d0db1b314e2a66c0
	This is exactly the same as the previous json blob, however all additional CF/LF have been removed and the entire blob is stored on a single line for ease of parsing. It is also mandatory that you escape any control characters. Obviously if you are doing this via the command line and you intend to use non ASCII characters then you need to change the character set to utf-8 or whatever is allowed by your systems character set so that the command line doesn't corrupt characters.
	
3. The response to either of the two above methodologies should be similar to what follows:

	```
	{ "results": [ { "status": "success", "mid": "35\/00-14330-BC5E7A15", "reason": "250 35\/00-14330-BC5E7A15" } ], "status": "success" }
	```
4. If you get something different to this, I would advise changing the debug level for the httpsrv as follows, in the ecelerity.conf under /opt/msys/ecelerity/etc/conf/default

	```
	#Set the debugging level for the http server
	httpsrv {debug_level = "debug"}
	```
Please note leaving this in the debug_level of debug, will verbosely printout all REST API injections to the paniclog (/var/log/ecelerity/paniclog.ec) which can quite rapidly consume the entire partition. However, if you do not get success as your status from the previous step this is often a good way to track down why this is occurring.

Also please note that the Momentum REST API does not do any conversion inherently so what you inject will be what you get back, ie. if you inject with a body using utf-8 character set then you will get utf-8 character set body when you look at it in your email client.