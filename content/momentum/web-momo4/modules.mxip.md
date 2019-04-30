|     |     |     |
| --- | --- | --- |
| [Prev](modules.msg_gen)  | Chapter 71. Modules Reference |  [Next](modules.opendkim) |

## 71.49. mxip - IP Addresses In MX Records

<a className="indexterm" name="idp22302992"></a>

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

Several domains on the internet have configured their MX records so that the hostname field contains a textual IP address. This is against the DNS standard RFC 1035 [Domain Names - Implementation and Specification](http://www.rfc-editor.org/rfc/rfc1035.txt), which says that MX records must contain a domain name, not an IP address. Unfortunately, many domains ignore the standard.

```
3.3.9\. MX RDATA format

    +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
    |                  PREFERENCE                   |
    +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
    /                   EXCHANGE                    /
    /                                               /
    +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

where:

PREFERENCE      A 16 bit integer which specifies the preference given to
                this RR among others at the same owner.  Lower values
                are preferred.

EXCHANGE        A <domain-name> which specifies a host willing to act as
                a mail exchange for the owner name.
```

### 71.49.1. Configuration

It is possible to configure the bind nameserver, and perhaps other nameservers, with an IP address in this field.

<a name="modules.mxip.test.domain.example"></a>

**Example 71.73. Example Configuration - Test Domain**

```
dig mx broken.mxip.example @127.0.0.1

; <<>> DiG 9.3.6-P1-RedHat-9.3.6-4.P1.el5_4.2 <<>> mx broken.mxip.example @127.0.0.1
;; global options:  printcmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 49365
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 1, ADDITIONAL: 0

;; QUESTION SECTION:
;broken.mxip.example.		IN	MX

;; ANSWER SECTION:
broken.mxip.example.	86400	IN	MX	10 10.79.0.143.

;; AUTHORITY SECTION:
mxip.example.		86400	IN	NS	localhost.

;; Query time: 3 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Fri Mar  5 00:23:02 2010
;; MSG SIZE  rcvd: 87
```

The mxip module implements a dns_get_As hook in order to augment the DNS resolution behaviour. If your integration or deployment also implements a dns_get_As hook, then you may not be able to use the mxip module.

The mxip module only supports IPv4 addresses in the hostname field of MX records. IPv6 addresses are explicitly not supported by the mxip module.

The mxip module can be configured as follows:

```
mxip
{
  # The module creates a "fake" hostname for the IP address
  # in the MX record. It gives these "fake" hostnames
  # a TTL, which defaults to 600 seconds (10 minutes).
  # The TTL can be configured via the TTL option (see below).
  #
  # Note that the TTL of the "fake" hostnames respects
  # the Min_DNS_TTL and Max_DNS_TTL options. See:
  #
  # <https://support.messagesystems.com/docs/web/conf.ref.min_dns_ttl>
  # <https://support.messagesystems.com/docs/web/conf.ref.max_dns_ttl>
  #
  # TTL = "600"
}
```

The mxip module will log information at the INFO level, when it sees an IP address in the MX record. You can enable this at run-time using the "debug" command:

`debug module mxip INFO`

If you want to run with it enabled permanently, you can do that via the module configuration:

```
mxip
{
  Debug_Level = "INFO"
}
```

|     |     |     |
| --- | --- | --- |
| [Prev](modules.msg_gen)  | [Up](modules) |  [Next](modules.opendkim) |
| 71.48. msg_gen – Message Generation  | [Table of Contents](index) |  71.50. opendkim – Open Source DKIM |

