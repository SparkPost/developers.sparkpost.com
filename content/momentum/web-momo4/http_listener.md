|     |     |     |
| --- | --- | --- |
| [Prev](inbound_tls)  | Part III. Configuring Momentum |  [Next](conf.ref.msg_gen.conf) |
## Chapter 20. Configuring Inbound Mail Service Using HTTP
**Table of Contents**

* [20.1\. HTTP_Listener Configuration](http_listener#http_listener.config)
* [20.2\. `msg_gen.conf` File](conf.ref.msg_gen.conf)

The HTTP_Listener is the listener that enables you to inject messages using HTTP and to use the REST API.
## 20.1. HTTP_Listener Configuration
The HTTP_Listener is configured in the `msg_gen.conf` file that is included from within `ecelerity.conf` and specifies the end-point(s) on which Momentum should listen for incoming HTTP connections. The following is an example configuration:
```
HTTP_Listener {
  Listen ":2081" {}
}
```
By default, the HTTP_Listener listens on port 2081.
### Note
In version 4.0, the API endpoints were accessed on port 8081\. As of version 4.1, no explicit port number is required to access the API endpoints.
For details about the non-module specific configuration options that are valid in the HTTP_Listener and its nested scopes, refer to [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .
Modules and their configuration options are discussed in the [Chapter 71, *Modules Reference*](modules "Chapter 71. Modules Reference") .
For general information regarding listeners, see [Section 15.4, “Listeners”](listeners "15.4. Listeners").

|     |     |     |
| --- | --- | --- |
| [Prev](inbound_tls)  | [Up](p.configuration) |  [Next](conf.ref.msg_gen.conf) |
| 19.7. Inbound TLS  | [Table of Contents](index) |  20.2. `msg_gen.conf` File |
