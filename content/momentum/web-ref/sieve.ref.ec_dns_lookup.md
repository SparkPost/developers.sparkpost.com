|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_dkim_sign)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_error_mode) |

<a name="sieve.ref.ec_dns_lookup"></a>
## Name

ec_dns_lookup — perform a DNS record lookup

## Synopsis

`ec_dns_lookup` { *`what`* } { [[ "a" ] | [ "aaaa" ] | [ "txt" ] | [ "ptr" ] | [ "ns" ] | [ "mx" ]] } [ *`server`* ]

<a name="idp29486736"></a>
## Description

This function will perform a DNS resource record lookup on the provided string, searching for the resource record type specified. The return value should be assigned to a variable. If no records are found, the variable will contain an empty string. If one record is found, the variable will contain a string representing the result. If more than one record is found, the variable will contain a stringlist representing the results. For MX lookups, the results will be ordered by the MX priority value, in ascending order.

### Note

Starting with Momentum 2.2, ec_dns_lookup always returns a stringlist. If no records were found then the first element of the stringlist will be an empty string.

For example, in order to determine if the connecting IP address has reverse DNS that resolves to the connecting IP we could:

<a name="example.ec_dns_lookup"></a>

**Example 16.39. ec_dns_lookup example**

```
$ptr = ec_dns_lookup "%{spfv1:ir}.in-addr.arpa" "ptr";
$a = ec_dns_lookup "${ptr}" "a";
if not ec_test :is $a "%{spfv1:i}" {
  # act on lacking FCrDNS
}
```

To check for DNS lookup errors examine the dns_status context variable in the following way:

```
$dns_error = vctx_conn_get "dns_status";
if not ec_test :is "${dns_error}" "" {
  ec_log "got dns error: ${dns_error}";
}
```

`dns_status` may contain one of a number of response codes (RCODE). As defined by RFC 2136, these are:

*   `NOERROR` – No error condition. The text "SUCCESS" is returned in this case.

*   `FORMERR` – The name server was unable to interpret the request due to a format error.

*   `SERVFAIL` – The name server encountered an internal failure while processing this request, for example an operating system error or a forwarding timeout.

*   `NXDOMAIN` – Some name that ought to exist, does not exist.

*   `NOTIMP` – The name server does not support the specified Opcode.

*   `REFUSED` – The name server refuses to perform the specified operation for policy or security reasons.

*   `YXDOMAIN` – Some name that ought not to exist, does exist.

*   `YXRRSET` – Some RRset that ought not to exist, does exist.

*   `NXRRSET` – Some RRset that ought to exist, does not exist.

*   `NOTAUTH` – The server is not authoritative for the zone named in the Zone Section.

*   `NOTZONE` A name used in the Prerequisite or Update Section is not within the zone denoted by the Zone Section.

The optional *`server`* argument can be used to specify the hostname or IP address of an alternate DNS server to query.


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_dkim_sign)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_error_mode) |
| ec_dkim_sign  | [Table of Contents](index) |  ec_error_mode |
