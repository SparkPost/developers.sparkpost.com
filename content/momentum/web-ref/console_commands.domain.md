|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.dns_cache)  | 12.2. System Console Commands |  [Next](console_commands.domain_all.php) |

<a name="console_commands.domain"></a>
## Name

domain — show domain statistics

## Synopsis

`domain` { *`domain_name`* }

<a name="idp15900288"></a>
## Description

The **domain** command takes a single argument specifying a domain to inspect. The DNS cache is searched and if the domain is current in the cache, detailed information about its DNS records, queues, and connections are displayed.

It is important to note the metrics displayed are for the life of the domain in the DNS cache. It is possible for the system to display zero deliveries for a domain to which Momentum has delivered messages if the domain record has been removed and subsequently reinserted into the DNS cache. Find below sample output of this command:

```
10:47:35 /tmp/2025> domain yahoo.com
Domain "/^yahoo\\.*/" {
  max_deliveries_per_connection = "5"
  max_outbound_connections = "75"
  outbound_throttle_connections = "30"
}
Domain 'yahoo.com' has 13 MXs and a TTL of 158 seconds
  [1 j.mx.mail.yahoo.com. TTL:1576]
	[66.94.237.64]:0 IPv4 (77.34ms con 9957.49ms dlv)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.br pref 1)
		(also used by yahoo.co.nz pref 1)
		(also used by yahoo.com.ar pref 1)
  [1 k.mx.mail.yahoo.com. TTL:1548]
	[98.139.54.60]:0 IPv4 (0.00ms con 0.00ms dlv)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.br pref 1)
		(also used by yahoo.co.nz pref 1)
		(also used by yahoo.com.ar pref 1)
  [1 l.mx.mail.yahoo.com. TTL:1548]
	[74.6.136.244]:0 IPv4 (0.00ms con 0.00ms dlv)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.br pref 1)
		(also used by yahoo.co.nz pref 1)
		(also used by yahoo.com.ar pref 1)
  [1 m.mx.mail.yahoo.com. TTL:1218]
	[66.94.238.147]:0 IPv4 (0.00ms con 0.00ms dlv)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.br pref 1)
		(also used by yahoo.co.nz pref 1)
		(also used by yahoo.com.ar pref 1)
  [1 a.mx.mail.yahoo.com. TTL:1548]
	[67.195.168.31]:0 IPv4 (0.00ms con 0.00ms dlv)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.br pref 1)
		(also used by yahoo.co.nz pref 1)
		(also used by yahoo.com.ar pref 1)
  [1 b.mx.mail.yahoo.com. TTL:1388]
	[74.6.136.65]:0 IPv4 (0.00ms con 0.00ms dlv)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by ymail.com pref 1)
		(also used by yahoo.com.au pref 1)
		(also used by yahoo.com.mx pref 1)
		(also used by yahoo.ca pref 1)
		(also used by rocketmail.com pref 1)
		(also used by yahoo.com.br pref 1)
		(also used by yahoo.co.nz pref 1)
		(also used by yahoo.com.ar pref 1)
...

Statistics:
-----------

Binding:              default
	              Receptions:                    0
	              Deliveries:                    0
	          Failures (5xx):                    0
	   Trans. Failures (4xx):                    0
	            Active Queue:                    0
	           Delayed Queue:                    0

Binding:           mybinding1
	              Receptions:                21538
	              Deliveries:                 7673
	          Failures (5xx):                    3
	   Trans. Failures (4xx):                   25
	            Active Queue:                13766
	           Delayed Queue:                   96

Binding:           mybinding2
	              Receptions:               116059
	              Deliveries:               115930
	          Failures (5xx):                   62
	   Trans. Failures (4xx):                  261
	            Active Queue:                    0
	           Delayed Queue:                   67

Binding:           mybinding3
	              Receptions:                  285
	              Deliveries:                  284
	          Failures (5xx):                    0
	   Trans. Failures (4xx):                    1
	            Active Queue:                    0
	           Delayed Queue:                    1

Binding:           mybinding4
	              Receptions:                35435
	              Deliveries:                35408
	          Failures (5xx):                   22
	   Trans. Failures (4xx):                   83
	            Active Queue:                    0
	           Delayed Queue:                    5

Binding:           mybinding5
	              Receptions:                    0
	              Deliveries:                    0
	          Failures (5xx):                    0
	   Trans. Failures (4xx):                    0
	            Active Queue:                    0
	           Delayed Queue:                    0

Binding:           mybinding6
	              Receptions:                 4536
	              Deliveries:                 4524
	          Failures (5xx):                    2
	   Trans. Failures (4xx):                   10
	            Active Queue:                    0
	           Delayed Queue:                   10

Binding:           mybinding7
	              Receptions:                 8981
	              Deliveries:                 8946
	          Failures (5xx):                    2
	   Trans. Failures (4xx):                   33
	            Active Queue:                    0
	           Delayed Queue:                   33

Binding:           mybinding8
	              Receptions:                12641
	              Deliveries:                12600
	          Failures (5xx):                    7
	   Trans. Failures (4xx):                   34
	            Active Queue:                    0
	           Delayed Queue:                   34

...

Binding:               #mmove
	              Receptions:                    0
	              Deliveries:                    0
	          Failures (5xx):                    0
	   Trans. Failures (4xx):                    0
	            Active Queue:                    0
	           Delayed Queue:                    0
	---------------------------------------

Server Totals:
--------------
	Active Queue:             13766
	Delayed Queue:              176
	Receptions:          243278
	Deliveries:          229149
	Failures (5xx):         116
	Failures (4xx):         526
Active Connections: 75
[Binding: default]
[Binding: mybinding1]
  [ 1] FD:    788  IP:    66.94.237.64  State: reading confirmation (381.59ms)
  [ 2] FD:    266  IP:    66.94.237.64  State: after MAIL FROM (39.20ms)
  [ 3] FD:    334  IP:    66.94.237.64  State: reading confirmation (4654.92ms)
  [ 4] FD:    268  IP:    66.94.237.64  State: while not connected (21.73ms)
  [ 5] FD:    878  IP:    66.94.237.64  State: after MAIL FROM (39.20ms)
  [ 6] FD:    144  IP:    66.94.237.64  State: reading confirmation (706.18ms)
  [ 7] FD:     46  IP:    98.139.54.60  State: after MAIL FROM (39.20ms)
  [ 8] FD:    518  IP:    98.139.54.60  State: after MAIL FROM (39.20ms)
  [ 9] FD:    921  IP:    74.6.136.244  State: reading confirmation (614.25ms)
  [10] FD:    688  IP:    74.6.136.244  State: reading confirmation (742.16ms)
  [11] FD:    783  IP:    74.6.136.244  State: reading confirmation (471.59ms)
  [12] FD:     96  IP:    74.6.136.244  State: after MAIL FROM (39.20ms)
  [13] FD:    592  IP:    74.6.136.244  State: after MAIL FROM (39.20ms)
  [14] FD:    463  IP:    74.6.136.244  State: after MAIL FROM (39.20ms)
  [15] FD:    355  IP:    74.6.136.244  State: after MAIL FROM (39.20ms)
  [16] FD:    130  IP:   66.94.238.147  State: reading confirmation (12958.05ms)
  [17] FD:    784  IP:   66.94.238.147  State: after MAIL FROM (39.20ms)
  [18] FD:    315  IP:   66.94.238.147  State: after MAIL FROM (39.20ms)
  [19] FD:    129  IP:   66.94.238.147  State: after MAIL FROM (39.20ms)
  [20] FD:     99  IP:   66.94.238.147  State: after MAIL FROM (23.25ms)
  [21] FD:    705  IP:   66.94.238.147  State: after MAIL FROM (13.09ms)
  [22] FD:    820  IP:   67.195.168.31  State: after MAIL FROM (39.20ms)
  [23] FD:    342  IP:   67.195.168.31  State: reading BANNER (891.20ms)
  [24] FD:    127  IP:   67.195.168.31  State: after RCPT TO (7.83ms)
  [25] FD:    120  IP:     74.6.136.65  State: reading confirmation (732.10ms)
  [26] FD:    694  IP:     74.6.136.65  State: reading confirmation (798.51ms)
  [27] FD:    703  IP:     74.6.136.65  State: during MAIL FROM (7.83ms)
  [28] FD:    774  IP:     74.6.136.65  State: reading confirmation (523.70ms)
  [29] FD:    785  IP:     74.6.136.65  State: after MAIL FROM (39.20ms)
  [30] FD:    593  IP:     74.6.136.65  State: reading confirmation (3733.40ms)
  [31] FD:    367  IP:     74.6.136.65  State: reading confirmation (880.82ms)
  [32] FD:    686  IP:  206.190.54.127  State: during MAIL FROM (0.00ms)
  [33] FD:    787  IP:  206.190.54.127  State: reading confirmation (702.46ms)
  [34] FD:    870  IP:  206.190.54.127  State: reading confirmation (404.26ms)
  [35] FD:    873  IP:  206.190.54.127  State: after RCPT TO (0.00ms)
  [36] FD:    297  IP:  206.190.54.127  State: reading confirmation (1506.17ms)
  [37] FD:    689  IP:  209.191.88.254  State: after MAIL FROM (39.20ms)
  [38] FD:     95  IP:  209.191.88.254  State: reading confirmation (1128.23ms)
  [39] FD:    402  IP:  209.191.88.254  State: reading confirmation (1467.62ms)
  [40] FD:    477  IP:  209.191.88.254  State: reading confirmation (590.15ms)
  [41] FD:    223  IP:  209.191.88.254  State: after MAIL FROM (39.20ms)
...
  [71] FD:    690  IP:     74.6.140.64  State: after MAIL FROM (39.20ms)
  [72] FD:    358  IP:     74.6.140.64  State: after MAIL FROM (39.20ms)
  [73] FD:    596  IP:     74.6.140.64  State: reading confirmation (1011.05ms)
  [74] FD:    600  IP:     74.6.140.64  State: reading confirmation (1467.62ms)
  [75] FD:    771  IP:     74.6.140.64  State: reading confirmation (521.13ms)
```

### Note

This console command manipulates the *route cache* , and likewise with the [dig](console_commands.dig "dig") and [refresh domain](console_commands.refresh_domain.php "refresh domain") commands. The *DNS cache* , as manipulated by the [dns_cache](console_commands.dns_cache.php "dns_cache") series of console commands.

### Domain Configuration

The configuration will only appear if the domain in question has explicit per-domain configuration options set. For example:

```
Domain "/^yahoo\\.*/" {
  max_deliveries_per_connection = "5"
  max_outbound_connections = "75"
  outbound_throttle_connections = "30"
}
```

### DNS Information

The name of the domain is displayed as well as the number of seconds it will continue to be valid in the cache (time-to-live, TTL).

`Domain 'yahoo.com' has 13 MXs and a TTL of 158 seconds`

The preceding output shows the domain name (yahoo.com), number of MXs and the number of seconds remaining before this record is refreshed.

`[1 j.mx.mail.yahoo.com. TTL:1576]`

The preceding output displays combined MX and Host information. `1` denotes the MX preference, `j.mx.mail.yahoo.com` is the MX's hostname and `1576` is the DNS TTL.

`[66.94.237.64]:0 IPv4 (77.34ms con 9957.49ms dlv)`

displays information representing one of the address records A/AAAA (A in this case) for a host. 77.34ms denotes the average (decayed) length of time required to establish a connection to that IP address. 9957.49ms denotes the average (decayed) amount of time spent delivering a single email message (from MAIL FROM to receipt of confirmation) to that IP address.

A '`=>`' preceding an IP address indicates that it would be chosen for the next connection to this domain if a connection were to be opened at this moment.

A '`*`' preceding an IP address indicates that the IP address has failed due to a `connect()` call that could not be completed. Reasons for `connect()` failures include refused connections or connections that timed out during one of the SMTP phases. If the address has failed, the age of that failure will be displayed at the end of the line as above: "89.27s since failure." This indicates how long ago the failure occurred.

<a name="idp15935744"></a>
### Statistics

Statistics are displayed by binding. Receptions, deliveries, permanent failures and transient failures are show. The active and delayed queues are also shown.

Note that the default binding is shown. For more information about this binding see [the section called “The "default" Binding”](conf.ref.binding#conf.ref.binding.default "The "default" Binding"). In a cluster configuration the `#mmove` binding is also displayed. This built-in binding shows messages that have moved between nodes.

<a name="idp15939152"></a>
### Server Totals

### Active Queue

The number of messages in the system that require immediate delivery attempts.

### Delayed Queue

The number of messages in the system that have been delayed. A message is delayed due to transient delivery failures (4*`xx`* SMTP codes) and a retry time is calculated for the message. When that retry time is reached, the message will be moved from the delayed queue to the active queue.

### Receptions

The total number of messages received from this domain since insertion into the DNS cache.

### Deliveries

The total number of messages delivered to this domain since insertion into the DNS cache.

### Failures (5xx)

The total number of permanently failed delivery attempts to this domain since insertion into the DNS cache.

### Failures (4xx)

The total number of transiently failed delivery attempts to this domain since insertion into the DNS cache.

### Active Connections

The current number of established outbound SMTP sessions.

Below the active connections count is a list that details the system file descriptor and IP address that each SMTP session is using. The state reflects the current point in the SMTP transaction and the length of time since entering that state.

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.dns_cache)  | [Up](console.commands.non-module.php) |  [Next](console_commands.domain_all.php) |
| dns_cache  | [Table of Contents](index) |  domain all |
