|     |     |     |
| --- | --- | --- |
| [Prev](ecstream_listener)  | Part III. Configuring Momentum |  [Next](esmtp_listener.relay_domains) |
## Chapter 19. Configuring Inbound Mail Service Using SMTP
**Table of Contents**

* [19.1\. ESMTP_Listener Configuration](esmtp_listener#esmtp_listener.config)
* [19.2\. Inbound Email Relay or Gateway](esmtp_listener.relay_domains)
* [19.3\. `Reconfig_Message` Option](esmtp_listener.reconfig_message)
* [19.4\. SMTP Extensions](esmtp_listener.extensions)
* [19.5\. ESMTP_Listener Authentication](inbound_smtp)
* [19.6\. Inbound SSL](inbound_ssl)
* [19.7\. Inbound TLS](inbound_tls)

The ESMTP_Listener is the listener that enables you to inject message using SMTP. Momentum can listen on any number of Unix domain sockets and/or IP:port addresses for TCP/IP service.
The ESMTP_Listener supports all of the extended properties and extensions described below.
## 19.1. ESMTP_Listener Configuration
The ESMTP_Listener is configured in the `ecelerity.conf` file and specifies the end-point(s) on which Momentum should listen for incoming SMTP connections. The following is an example configuration:
```
ESMTP_Listener {
  Listen ":25" {
      **Listen_Backlog = 500**       # new default, can be set > 200 now
      TCP_Recv_Buffer_Size = 4096
      TCP_Send_Buffer_Size = 4096
      Disable_Nagle_Algorithm = false
  }
  Listen ":587" {
      Enable = "false"
      Accept_Queue_Backlog = 200
      Events_Per_Iter = 20
      Concurrency = 4
      # you need to also create this pool in your configuration,
      # otherwise you get a warning and use the IO pool instead
      Pool_Name = "accept-pool"
  }
  # serve inbound SMTP on port 25 in IPv6
  #Listen "[::1]:25" {}
  # serve inbound SMTP at 192.168.0.1 on port 25 in IPv6
  #Listen "[::192.168.0.1]:25" {}
  # or
  #Listen "[::C0A8:1]:25" {}
}
ThreadPool accept-pool {
  Concurrency = 4
}
```
Listen stanzas map 1:1 to an underlying socket, this means that `:25` (which is the same as *:25) binds to IPv4 (and perhaps IPv6, depending on the kernel); for explicit IPv6, use `[*]:25` instead.
The `Pool_Name` option associates the `accept-pool` ThreadPool with the listener. `Concurrency` should have a value that is equal to or less than the concurrency defined in the ThreadPool.
When using threaded accepts for listeners, you must provision the thread pool you intend to use via the ThreadPool directive. If the thread pool you name is not found or is unspecified, the IO pool will be used and a critical message will appear in your log.
For details about the non-module specific configuration options that are valid in the ESMTP_Listener and its nested scopes, refer to [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .
Modules and their configuration options are discussed in the [Chapter 71, *Modules Reference*](modules "Chapter 71. Modules Reference") .
For general information regarding listeners, see [Section 15.4, “Listeners”](listeners "15.4. Listeners").

|     |     |     |
| --- | --- | --- |
| [Prev](ecstream_listener)  | [Up](p.configuration) |  [Next](esmtp_listener.relay_domains) |
| Chapter 18. Configuring Inbound Mail Service Using ECStream  | [Table of Contents](index) |  19.2. Inbound Email Relay or Gateway |
