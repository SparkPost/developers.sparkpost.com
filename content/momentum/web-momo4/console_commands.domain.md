| [Prev](console_commands.dns_cache)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.domain_all) |

<a name="console_commands.domain"></a>
## Name

domain — show domain statistics

## Synopsis

`domain` { *`domain_name`* }

<a name="idp11355440"></a>
## Description

The **domain** command takes a single argument specifying a domain to inspect. The DNS cache is searched and if the domain is current in the cache, detailed information about its DNS records, queues, and connections are displayed.

It is important to note the metrics displayed are for the life of the domain in the DNS cache. It is possible for the system to display zero deliveries for a domain to which Momentum has delivered messages if the domain record has been removed and subsequently reinserted into the DNS cache.

```
10:47:35 /tmp/2025> domain hotmail.com
Domain hotmail.com {
  max_outbound_connections = 20
}
Domain 'hotmail.com' has 4 MXs and a TTL of 1902 seconds
  [5 mx1.hotmail.com TTL:1902]
 *      [65.54.254.129] IPv4 (0.00ms con 10259.03ms dlv) 54.27s since failure
        [65.54.252.99] IPv4 (743.66ms con 11976.77ms dlv)
        [65.54.166.99] IPv4 (77.25ms con 11726.36ms dlv)
                (also used by email.msn.com pref 5)
                (also used by msn.com pref 5)
  [5 mx2.hotmail.com TTL:1902]
        [65.54.252.230] IPv4 (77.13ms con 9427.74ms dlv)
        [65.54.166.230] IPv4 (78.02ms con 10526.13ms dlv)
 =>     [65.54.254.145] IPv4 (77.34ms con 9957.49ms dlv)
                (also used by email.msn.com pref 5)
                (also used by msn.com pref 5)
  [5 mx3.hotmail.com TTL:1902]
        [65.54.167.5] IPv4 (77.30ms con 9198.22ms dlv)
 *      [65.54.254.140] IPv4 (0.00ms con 10567.53ms dlv) 89.27s since failure
        [65.54.253.99] IPv4 (78.24ms con 9187.18ms dlv)
                (also used by email.msn.com pref 5)
                (also used by msn.com pref 5)
  [5 mx4.hotmail.com TTL:1902]
        [65.54.254.151] IPv4 (6827.57ms con 10014.24ms dlv)
        [65.54.253.230] IPv4 (153.76ms con 10711.45ms dlv)
        [65.54.167.230] IPv4 (77.91ms con 9482.38ms dlv)
                (also used by email.msn.com pref 5)
                (also used by msn.com pref 5)
Domain has had 1 consecutive connection failures
Queue:
        Active:        212
        Delayed:       190
Deliveries:     10715
Failures:         612
Active Connections: 12
[ 1] FD:    174  IP:    65.54.252.99  State: reading confirmation (4615.39ms)
[ 2] FD:    270  IP:    65.54.252.99  State: reading confirmation (4605.68ms)
[ 3] FD:    171  IP:   65.54.254.129  State: reading confirmation (332.74ms)
[ 4] FD:    307  IP:    65.54.252.99  State: reading confirmation (3612.59ms)
[ 5] FD:    176  IP:   65.54.252.230  State: reading confirmation (6076.36ms)
[ 6] FD:    163  IP:   65.54.166.230  State: reading confirmation (4025.86ms)
[ 7] FD:     96  IP:   65.54.254.145  State: reading confirmation (5355.87ms)
[ 8] FD:    226  IP:   65.54.166.230  State: reading confirmation (2799.31ms)
[ 9] FD:    209  IP:   65.54.252.230  State: reading confirmation (4293.11ms)
[10] FD:    133  IP:   65.54.254.140  State: after RCPT TO (308.59ms)
[11] FD:    142  IP:     65.54.167.5  State: reading confirmation (3678.08ms)
[12] FD:    118  IP:   65.54.254.151  State: reading confirmation (960.39ms)
```

### Note

This console command manipulates the *route cache* , and likewise with the [dig](console_commands.dig "dig") and [refresh domain](console_commands.refresh_domain "refresh domain") commands. The *DNS cache* , as manipulated by the [dns_cache](console_commands.dns_cache "dns_cache") series of console commands.

## Domain Configuration

The configuration will only appear if the domain in question has explicit per-domain configuration options set.

```
Domain hotmail.com {
  max_outbound_connections = 20
}
```

## DNS Information

The name of the domain is displayed as well as the number of seconds it will continue to be valid in the cache (time-to-live, TTL).

`'hotmail.com' has 4 MXs and a TTL of 1902 seconds`

shows the domain name (hotmail.com), number of MXs and the number of seconds remaining before this record is refreshed.

`[5 mx1.hotmail.com TTL:1902]`

displays combined MX and Host information. 5 denotes the MX prefrence, mx1.hotmail.com is the MX's hostname and 1902 is the DNS TTL.

`[65.54.254.145] IPv4 (77.34ms con 9957.49ms dlv)`

displays information representing one of the address records A/AAAA (A in this case) for a host. 77.34ms denotes the average (decayed) length of time required to establish a connection to that IP address. 9957.49ms denotes the average (decayed) amount of time spent delivering a single email message (from MAIL FROM to receipt of confirmation) to that IP address.

A '`=>`' preceding an IP address indicates that it would be chosen for the next connection to this domain if a connection were to be opened at this moment.

A '`*`' preceding an IP address indicates that the IP address has failed due to a `connect()` call that could not be completed. Reasons for `connect()` failures include refused connections or connections that timed out during one of the SMTP phases. If the address has failed, the age of that failure will be displayed at the end of the line as above: "89.27s since failure." This indicates how long ago the failure occurred.

## Active Queue Size

The number of messages in the system that require immediate delivery attempts.

## Delayed Queue Size

The number of messages in the system that have been delayed. A message is delayed due to transient delivery failures (4*`xx`* SMTP codes) and a retry time is calculated for the message. When that retry time is reached, the message will be moved from the delayed queue to the active queue.

## Deliveries

The total number of messages delivered to this domain since insertion into the DNS cache.

## Failures

The total number of permanently failed delivery attempts to this domain since insertion into the DNS cache.

## Active Connections

The current number of established outbound SMTP sessions.

Below the count is a list that details the system file descriptor and IP address that each SMTP session is using. The state reflects the current point in the SMTP transaction and the length of time since entering that state.

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.dns_cache)  | [Up](console.cmds.ref) |  [Next](console_commands.domain_all) |
| dns_cache  | [Table of Contents](index) |  domain all |

