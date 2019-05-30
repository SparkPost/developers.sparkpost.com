# If I have a lengthy DNS query, is it possible to get Momentum to fallback to TCP?


Yes, there is an option ( [https://support.messagesystems.com/docs/web-ref/conf.ref.dns_fallback_to_tcp.php](https://support.messagesystems.com/docs/web-ref/conf.ref.dns_fallback_to_tcp.php) ) which is disabled by default. Enabling that, Momentum tries first with UDP then fails over to TCP if the query response is too large avoiding having lengthy DNS responses truncated.