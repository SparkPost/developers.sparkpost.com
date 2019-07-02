
# How to enable debugging for the API with Momentum 3?

The httpsrv module is the HTTP server infrastructure module. It, along with the HTTP_Listener and restinjector enable you to use the REST API. These modules are instantiated in /opt/msys/ecelerity/etc/conf/default/msg_gen.conf

Make sure to include this file in ecelerity.conf

This module only supports the two options common to all modules, namely enabled and debug_level.
More information regarding the debugging of modules can be found here: https://support.messagesystems.com/docs/web-momo4/module_config.php#module_config.debugging

The file to edit is: /opt/msys/ecelerity/etc/conf/default/msg_gen.conf

Example configuration :

```
Set the debugging level for the http server httpsrv {debug_level = "debug"} # Set up the http listener HTTP_Listener { Listen ":8081" {} } # Activate the REST API for injection restinjector {}
```

Inject a message using curl as follows provided you have created a sample.json file from within the directory were the sample.json file exists, examples can be found here: 
[https://support.messagesystems.com/docs/web-rest-injector/rest.sample.templates.php](https://support.messagesystems.com/docs/web-rest-injector/rest.sample.templates.php)

```
curl -X POST http://localhost:2081/v1.0/inject/ -d @sample.json
```

Example of the type of logging in the paniclog.ec with the debug_level set to "debug":

```
[root@mom4 default]# tail /var/log/ecelerity/paniclog.ec 1432881598:httpsrv: allocate_handler_list h=0x7f3e1b884b40 b=0x7f3e1b8b6e80 1432881598:NLSN-01625 HTTP_listener :2081 [IPv4, backlog 500] 1432881598:http_logger: ext_init flags=2 1432881638:Caught signal 15 (Terminated); delivered by pid=28203 (parent) uid=0. Will initiate clean shutdown on next tick. 1432881651:heartbeat_init -> gimli_establish_signal_handlers 1432881651:NLSN-01625 ESMTP_listener :25 [IPv4, backlog 500] 1432881651:NLSN-01625 HTTP_listener :2081 [IPv4, backlog 500] 1432881651:NLSN-01625 Control_listener 127.0.0.1:2025 [IPv4, backlog 500] 1432881651:NLSN-01625 Control_listener /tmp/2025 [UNIX, backlog 500] 1432882236:SPSYNC-00661 NULL returned from prepare routine
```

Example of logging without debugging enabled:

```
[root@mom4 default]# tail /var/log/ecelerity/paniclog.ec 1432881598:http_logger: ext_init flags=2 1432881638:Caught signal 
```