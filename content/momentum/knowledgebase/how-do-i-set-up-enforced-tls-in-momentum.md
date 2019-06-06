# How do I set up Enforced TLS in Momentum?

####Enforced TLS
 
#####SMTP Delivery
The following is how to enforce TLS to the domain bank.fi . "TLS = required" is enforced TLS. If the remote domain does not support the STARTTLS extension, then messages will be temporarily failed with the message "451 4.7.6 [internal] STARTTLS required but not advertised".

```
Domain bank.fi {
  TLS = required 
  TLS_CA = "/path/to/CA-bundle.pem"
  TLS_Key = "/path/to/client-key.pem" # if needed.
  TLS_Certificate = "/path/to/client-cert.pem" # if needed.
  TLS_Ciphers = "DEFAULT" # OpenSSL cipher list, if you need to change it.
  TLS_Verify = "CA" # How to verify the certificate. ca/host/no
 }
```
 
Search for these options in:
[https://support.messagesystems.com/docs/web-ref/options-summary.php](https://support.messagesystems.com/docs/web-ref/options-summary.php).
 
For details of OpenSSL cipher lists, see "man ciphers".
 
OpenSSL can tell you what is in the "DEFAULT" list. OpenSSL can be built with various compile-time options. Red Hat's build of OpenSSL, for instance, has certain ciphers removed/disabled. So, the "DEFAULT" list may vary, depending on the platform that you're using OpenSSL on.

```
$ openssl ciphers
DEFAULT DHE-RSA-AES256-SHA:DHE-DSS-AES256-SHA:AES256-SHA:EDH-RSA-DES-CBC3-SHA:EDH-DSS-DES-CBC3-SHA:DES-CBC3-SHA:DES-CBC3-MD5:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA:AES128-SHA:DHE-RSA-SEED-SHA:DHE-DSS-SEED-SHA:SEED-SHA:RC2-CBC-MD5:RC4-SHA:RC4-MD5:RC4-MD5:EDH-RSA-DES-CBC-SHA:EDH-DSS-DES-CBC-SHA:DES-CBC-SHA:DES-CBC-MD5:EXP-EDH-RSA-DES-CBC-SHA:EXP-EDH-DSS-DES-CBC-SHA:EXP-DES-CBC-SHA:EXP-RC2-CBC-MD5:EXP-RC2-CBC-MD5:EXP-RC4-MD5:EXP-RC4-MD5
```
 
`openssl ciphers -v DEFAULT` will show you a more readable version of the cipher list.


#####SMTP Reception
 
There is an example TLS reception configuration that comes with Momentum, in the example ecelerity.conf file:

``` 
Esmtp_Listener {
   ...  
  Listen ":587" {
    Enable = false # <-- REMOVE THIS TO ENABLE!
    TLS_Certificate = "cert.pem"
    TLS_Key = "cert.key"
    TLS_Client_CA = "ca-bundle.crt"
    TLS_Ciphers = "DEFAULT"
    ...
    SMTP_Extensions = (
      "ENHANCEDSTATUSCODES"
      "STARTTLS"
      "AUTH LOGIN"
    )
  }
} 
```
 
So you could update your port 25 listener to look something like this:

```
Listen ":25" {   
	TLS_Certificate = "/path/to/server-cert.pem"   
	TLS_Key = "/path/to/server-key.pem"   
	TLS_Client_CA = "/path/to/CA-bundle.pem"   
	TLS_Ciphers = "DEFAULT"   
	SMTP_Extensions = (
		"ENHANCEDSTATUSCODES"     
		"STARTTLS"    
	) 
}
```
 
**Note**: One side-effect of turning on STARTTLS is that anyone can transmit mail to you over TLS.
That's how you turn on TLS, but how do you enforce TLS in SMTP reception? That requires some Lua policy scripting, to implement the TLS
enforcement. TLS for SMTP reception sets various fields in the message context, as described in [https://support.messagesystems.com/docs/web-ref/policy.predefined-context-conn.php](https://support.messagesystems.com/docs/web-ref/policy.predefined-context-conn.php) . If the sender matches the sending domain "bank.fi", you would likely want to check that the following is set in the message context (untested):
 
```
    "tls" is set (I think it's set to "on").
    "tls_client_verified" is yes => certificate is valid.
```