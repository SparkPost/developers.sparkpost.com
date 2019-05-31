#DMARC - Basics

This document is not meant to replace the information available on DMARC at these locations:

[https://datatracker.ietf.org/doc/draft-kucherawy-dmarc-base/?include_text=1](https://datatracker.ietf.org/doc/draft-kucherawy-dmarc-base/?include_text=1)

[http://www.dmarc.org/](http://www.dmarc.org/)

###DNS entries that DMARC uses:

#####1 - The DMARC DNS text entry
The following is an example DMARC text entry for DNS :

```
"v=DMARC1; p=none; rua=mailto:postmaster@mydomain.com; ruf=mailto:postmaster@mydomain.com; adkim=r; aspf=r; rf=afrf; sp=none"
```

This was generated with this utility: [http://www.kitterman.com/dmarc/assistant.html](http://www.kitterman.com/dmarc/assistant.html)

In order to get this in the real world use **dig +short _dmarc.<domain> TXT**

```
[root@mymachine ~]# dig +short txt _dmarc.sovereignsociety.com
"v=DMARC1\; p=none\; rua=mailto:84tcdfj1@ag.dmarcian.com\;"
```

#####2 - The SPF DNS text entry
The following is an example of a SPF DNS text entry:

***mydomain.com. IN SPF "v=spf1 ip4:192.0.2.0/24 ip4:198.51.100.123 a -all"***

You can find this for most domains by issuing a dig +short <domain> TXT here is an example

```
[root@mymachine ~]# dig +short hotmail.com txt
"v=spf1 include:spf-a.hotmail.com include:spf-b.hotmail.com include:spf-c.hotmail.com include:spf-d.hotmail.com ~all"

[root@mymachine default]# dig +short spf-a.hotmail.com txt
"v=spf1 ip4:157.55.0.192/26 ip4:157.55.1.128/26 ip4:157.55.2.0/25 ip4:65.54.190.0/24 ip4:65.54.51.64/26 ip4:65.54.61.64/26 ip4:65.55.111.0/24 ip4:65.55.116.0/25 ip4:65.55.34.0/24 ip4:65.55.90.0/24 ip4:65.54.241.0/24 ip4:207.46.117.0/24 ~all"
```

See this page relating to creating an SPF DNS text entry: [http://www.openspf.org/SPF_Record_Syntax](http://www.openspf.org/SPF_Record_Syntax)

For SPF validation you can use: [http://www.kitterman.com/spf/validate.html](http://www.kitterman.com/spf/validate.html)

#####3 - The DKIM DNS text entry
The following is an example of an DKIM DNS text entry:

```
dkim1024._domainkey.mydomain.com. 86400 IN TXT "v=DKIM1; k=rsa; h=sha1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrZXNwzXOk0mRqPcgSUOnmVHro rg/BZHybpiBoDS/g6IaMjmVwaQf2E72x9yDBTgiUBtTCqydQRZJ3EbfYfvo+WAHq 2yz6HKR0XCwMDSE2S3brVe7mbV/GPEvnCuFPPEVjbfL4w0tEAd8Seb5h07uVQqy1 Q7jIOnF5fG9AQNd1UQIDAQAB"
```

 You generally can find this by doing a dig +short _domainkey.<domain> TXT here is an example

```
[root@mymachine ~]# dig +short google._domainkey.protodave.com TXT

"v=DKIM1\; k=rsa\; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCGfiExKCF1qk/JMaESySByrwx2VjPYDZThQa8432pSTf9mj+AtFiY6wo9A4CMMDLfUBzbDhXFzw3s/qci/tTut+sqv+MSAHhCBJV72Kai64j6TjxUUnfW1RkEYvDhXL+9Wy9OODx2DBZeTpPd6N2Rm4ks3b5wvg73s7RCKjTA7XQIDAQAB"
```

See this page for details on validation of DKIM: [http://dkimcore.org/tools/keycheck.html](http://dkimcore.org/tools/keycheck.html)

Utility to create DKIM DNS entries: [http://www.dnswatch.info/dkim/create-dns-record](http://www.dnswatch.info/dkim/create-dns-record)

###The DMARC validation process.

In order for DMARC to begin passing a message, either the DKIM must pass or the SPF must pass, if neither pass then the action requested, in p (Domain policy) or sp (Subdomain policy) in the above DMARC DNS text entry will be adhered to. The options on the policies are none, quarantine or reject.

Once either DKIM or SPF have passed, and it can be both, DMARC will then take action based on the requested behavior of adkim or aspf.

###For strict:

1. In all cases, the RFC5321:Mailfrom and the RFC5322:From must match exactly.
2. If the adkim is set to strict then the d= entry must match exactly the RFC5322:From domain.
3. If spf is set to strict then spf domain must exactly match the RFC5322:From domain.

###For relaxed:

1. In all cases both RFC5321:Mailfrom and RF5322:From must share an organizational domain.
2. For dkim relaxed the d= domain must share an organizational domain with the RFC5322:From domain.
3. For spf relaxed the domain must share an organizational domain with the RFC5322:From domain.	
