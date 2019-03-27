| [Prev](esmtp_listener.reconfig_message)  | Chapter 19. Configuring Inbound Mail Service Using SMTP |  [Next](inbound_smtp) |

## 19.4. SMTP Extensions

### 19.4.1. XCLIENT Extension for SMTP

Implements the receiving side of an XCLIENT capable interaction. XCLIENT allows trusted senders to alter the connecting IP address and other connection-level identifiers to appear to be someone they are not. This is used for internally trusted re-mailing. More information on XCLIENT can be found at [http://www.postfix.org/XCLIENT_README.html](http://www.postfix.org/XCLIENT_README.html).

Advertise support for the Enhanced-Status-Codes extension as defined in RFC 2034\. `ENHANCEDSTATUSCODE` is the EHLO keyword value associated with this extension. This capability makes reporting of success and errors more precise.

### 19.4.2. XDUMPCONTEXT Extension for SMTP

Enables the dumping of connection and message contexts during an SMTP conversation via an XDUMPCONTEXT command. This is mainly useful for debugging.

```
% telnet 10.80.116.84 25
Trying 10.80.116.84...
Connected to ecbuild-14.int.omniti.net (10.80.116.84).
Escape character is '^]'.
220 ecbuild-14 ESMTP ecelerity HEAD r(9610M) Wed, 08 Mar 2006 16:21:51 -0500
ehlo there
250-ecbuild-14 says EHLO to 10.80.116.73
250-PIPELINING
250-XDUMPCONTEXT
250-8BITMIME
250-AUTH=LOGIN
250-AUTH LOGIN
250 STARTTLS
XDUMPCONTEXT
250-[connection] ehlo_domain there
250-[connection] ehlo_string ehlo there
250 XDUMPCONTEXT complete
```

### 19.4.3. XREMOTEIP Extension for SMTP

This extension enables a connecting client to change the perceived IP address from which it connected. This is useful when the Momentum instance is deployed behind a trusted SMTP gateway. If enabled, then the remote client may, at anytime, present **XREMOTEIP *`IP_address`***                and Momentum will alter all identifying information to appear as if the client originally connected from the provided IP address.

### 19.4.4. XSETCONTEXT Extension for SMTP

XSETCONTEXT lets a client set name/value pairs in the connection level validation context. The extension takes a series of RFC1891 encoded parameters; each name=value pair sets the connection level validation context key "name" to value "value", overriding whatever other value was previously set (if any).

Since the extension can set arbitrary items in the validation context, it should be considered a trusted extension and should not be enabled for public Internet facing listeners, because there is a risk that an attacker can manipulate their way through a policy script. This also holds true for XCLIENT.

Set a name/value pair in the following way:

`XSETCONTEXT option1=value1 option2=value2`
### 19.4.5. ALWAYS-ALLOW Property

If present, the connection will succeed and will automatically be authenticated as the `anonymous` user.

| [Prev](esmtp_listener.reconfig_message)  | [Up](esmtp_listener) |  [Next](inbound_smtp) |
| 19.3. `Reconfig_Message` Option  | [Table of Contents](index) |  19.5. ESMTP_Listener Authentication |

