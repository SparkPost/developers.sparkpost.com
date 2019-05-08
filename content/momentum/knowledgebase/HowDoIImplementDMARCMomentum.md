# How do I implement DMARC (Domain-based Message Authentication, Reporting and Conformance) with Momentum?

DMARC is a method of e-mail authentication. It uses SPF and DKIM, along with header values, to verify the source and authenticity of an e-mail. More information about DMARC can be found at:

https://en.wikipedia.org/wiki/DMARC

Message Systems doesn't have specific best practices concerning DMARC. Of course, you have to have SPF and DKIM installed and already working in Momentum. The Momentum manual describes how to configure these two items:

[https://support.messagesystems.com/docs/web-momo4/modules.spf.php](https://support.messagesystems.com/docs/web-momo4/modules.spf.php)  (SPF for 4.x)
[https://support.messagesystems.com/docs/web-ref/modules.spf.php](https://support.messagesystems.com/docs/web-ref/modules.spf.php)  (SPF for 3.x)
[https://support.messagesystems.com/docs/web-momo4/using_dkim.php](https://support.messagesystems.com/docs/web-momo4/using_dkim.php)  (DKIM for 4.x)
[https://support.messagesystems.com/docs/web-mc/mc-post-dkim.php](https://support.messagesystems.com/docs/web-mc/mc-post-dkim.php)  (DKIM for 3.x)

Since DMARC is a set of policies concerning the interpretation of and actions on things like SPF and DKIM results, Lua is used to implement such a policy. Franck Martin from LinkedIn shared with the Message Systems community some Lua which he wrote that implements DMARC. You can find it at:

[https://github.com/linkedin/dmarc-msys](https://github.com/linkedin/dmarc-msys)