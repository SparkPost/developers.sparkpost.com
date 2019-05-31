# How do I troubleshoot TLS handshakes with a remote server?
 

How can I specify strong (or weak) TLS ciphers for STARTTLS (OpenSSL)?

Ecelerity relies on the ciphers available which are provided by the OpenSSL package installed on your server. The ciphers you use are dictated by the version of OpenSSL installed in addition to how it was compiled. When two MTAs establish a handshake to create a TLS stream, they must agree on a cipher in which to use. In some cases, some ESPs will only allow strong ciphers, whereas other ESPs can only utilize weak "export" ciphers due to cryptographic export/import laws. In the event that your MTA cannot connect to another via STARTTLS, your message may bounce with the following error:

`451 4.7.5 [internal] TLS negotiation failed`

To resolve this, you may need to adjust the "**tls_ciphers**" stanza in ecelerity.conf in order to accomodate the remote MTA's cipher requirements.

To test whether a TLS handshake with a remote MTA is even possible, run the following command from your server:

`openssl s_client -connect 213.165.67.114:25 -crlf -starttls smtp`

When this is executed, you should see "CONNECTED" in the output. You should also see details about the SSL certificate, in addition to the cipher used:


	New, TLSv1/SSLv3, Cipher is AES256-SHA
	Server public key is 2048 bit
	Secure Renegotiation IS supported
	Compression: NONE
	Expansion: NONE
	SSL-Session:
	Protocol : TLSv1
	Cipher : AES256-SHA
	Session-ID: 922DF917D2CE63CF62B69D462E6F19BF04B662F89EC01157FCA1B7853809C6A8
	Session-ID-ctx:
	Master-Key: 9D10F911EB7AF237F1D8B4E437A896881FFC113BE48811E0BCD0E3FB1F7A5AEF243449F64DD90E7DA9052F51BFA3518B
	Key-Arg : None
	Krb5 Principal: None
	Start Time: 1397499577
	Timeout : 300 (sec)
	Verify return code: 19 (self signed certificate in certificate chain)
	---
	250 STARTTLS


To determine the ciphers available on your server, you can run these:

	openssl ciphers DEFAULT
	openssl ciphers LOW
	openssl ciphers EXPORT

This information can help us determine which ciphers are available on the machine for Ecelerity to use. Ecelerity will advertise whichever cipher suites are available in the "tls_ciphers" directive set in ecelerity.conf. By default, tls_ciphers looks like so:

`ciphers = DEFAULT`

To add or ignore a particular cipher or ciphersuite, you may use "+" or "!" in the stanza respectively, like so:

`tls_ciphers = "DEFAULT:AES256-SHA:!EXPORT"`

This will allow the OpenSSL default ciphers and AES256-SHA, but disallow weak, export ciphers. Please be careful; if the ciphers you set are too limited, your MTA may not be able to establish a TLS stream with another remote server advertising STARTTLS, causing deliverability issues. 

You can also configure a wider range of TLS protocols as well, instead of individual ciphers and ciphersuites. To do so, you'll want to configure the "tls_protocols" parameters as outlined here: 

https://developers.sparkpost.com/momentum/web-momo4/config.tls_protocols/

**PLEASE NOTE**: This does not apply when GnuTLS (https://developers.sparkpost.com/momentum/web-momo4/config.tls_engine/) is configured.