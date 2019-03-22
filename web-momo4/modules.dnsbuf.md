| [Prev](modules.delay_dsn)  | Chapter 71. Modules Reference |  [Next](modules.domainkeys) |

## 71.27. dnsbuf – Dynamically Set the DNS UDP Buffer Size

<a className="indexterm" name="idp21233792"></a>

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

Momentum does not manipulate the size of UDP sockets it creates and uses for DNS queries; instead, it will use the default sizes configured by the Operating System. This can create problems for clients with too many domains (e.g., tens of thousands) in the system. Responses may be dropped, causing unnecessary DNS failures and retries, thus further increasing the DNS query volume. The `dnsbuf` module enables the client to manipulate the DNS buffer sizes on demand, on the fly.

### 71.27.1. Configuration

The `dnsbuf` module is configured as follows:

<a name="example.dnsbuf"></a>

**Example 71.43. dnsbuf module**

```
dnsbuf {
    sndbuf_size = "65536" # Default value is 131072
    rcvbuf_size = "65536" # Default value is 131072
    interval = "30"       # Default value is 60 seconds
}
```

<dl className="variablelist">

<dt>sndbuf_size</dt>

<dd>

The SO_SNDBUF value is set to this value for all UDP DNS sockets in the Momentum DNS implementation. Minimum value is 1024\. Note that in Linux the value in the kernel is automatically doubled; e.g., when a value of 65536 is configured in the module, the kernel will implement a buffer size of 131072.

</dd>

<dt>rcvbuf_size</dt>

<dd>

The SO_RCVBUF value is set to this value for all UDP DNS sockets in the Momentum DNS implementation. Minimum value is 1024\. Note that in Linux the value in the kernel is automatically doubled; e.g., when a value of 65536 is configured in the module, the kernel will actually implement a buffer size of 131072.

</dd>

<dt>interval</dt>

<dd>

This parameter determines how often the `setsockopt()` operations are performed. This process must be performed on a periodic basis as there is no hook point available in the system that allows the task to be performed when new UDP DNS sockets are created. The value is defined in terms of seconds.

</dd>

</dl>

### 71.27.2. dnsbuf Management Using Console Commands

The following console commands are specific to the `dnsbuf` module.

<dl className="variablelist">

<dt>config set dnsbuf sndbuf_size *`xxx`*</dt>

<dd>

Change the `sndbuf_size` value on the fly to *`xxx`*. This does not persist after a restart of Ecelerity; therefore, the configuration file must also be changed. Note that the change to the DNS socket buffer sizes is not immediate. Those values will not change until the next interval as described previously.

</dd>

<dt>config set dnsbuf rcvbuf_size *`xxx`*</dt>

<dd>

Change the `rcvbuf_size` value on the fly to *`xxx`*. This does not persist after a restart of Ecelerity; therefore, the configuration file must also be changed. Note that the change to the DNS socket buffer sizes is not immediate. Those values will not change until the next interval as described previously.

</dd>

<dt>config set dnsbuf interval *`xxx`*</dt>

<dd>

Change how often the `setsockopt()` operations are performed. This change is not honored until the next automatic run; e.g., if the previous value was 60 and you call 'dnsbuf interval 10' 30 seconds after the last run happened, the next run will not happen for 30 seconds, but subsequent runs will happen every 10 seconds.

</dd>

<dt>dnsbuf verify</dt>

<dd>

Using `getsockopt()`, query all active sockets for their current buffer sizes and report the results. These are the actual values reported by the kernel, and take into account the doubling behavior described previously. These values may not reflect recent changes made to the configured values in the `dnsbuf` module as the next periodic `setsockopt()` may not have been called yet.

</dd>

</dl>

### 71.27.3. Subtleties

The following are subtleties associated with the `dnsbuf` module:

*   When the system starts up, it is common to fail on the first attempt to update the buffer sizes. While the DNS system is initialized on startup, the UDP sockets are not actually created until the first DNS query is pushed into the system. Therefore, if a **dnsbuf verify**        is performed right after startup it will likely report the system default settings.

*   Worst case, it will take 60 seconds from when the first email message is processed by the system to when the DNS buffer sizes are raised. The interval could be made smaller, although there is a risk that running the `setsockopt()` routines too often could reduce performance.

*   Server numbers are indexed based on their order in the `resolv.conf` file. So server 0 represents the first `nameserver` line, server 1 represents the second `nameserver` line, and so on.

*   The buffer cannot be set beyond the sysctl-defined maximums in Linux:

    ```
    net.core.rmem_max
    net.core.wmem_max
    ```

    Note that those values are the post-doubled values; e.g., if `net.core.wmem_max` is set to 65536, the maximum value that will work in the `dnsbuf` module is `sndbuf_max` = 32768.

### 71.27.4. Limitations

The following are limitations of the `dnsbuf` module:

*   Alternative DNS resolution channels are used by the Sieve `ec_dns_lookup` action when a custom server is specified, e.g.:

    `$result = ec_dns_lookup "foo.com" "a" "ns.foo.com";`
*   The module can only modify the buffer sizes for the primary DNS resolution channel. This module cannot alter the UDP buffer size for alternative DNS resolution channels.

### 71.27.5. Determining that DNS Responses are Being Dropped

To determine whether the DNS responses are being dropped because the DNS UDP socket buffer is full, look for a corresponding increase in the "Pending DNS Queries" statistic from Momentum and the UDP packet errors from netstat, e.g.:

```
while sleep 1; do (netstat --udp -s | grep error; echo summary |
    /opt/msys/ecelerity/bin/ec_console | grep DNS); echo; done
```

The following is an example in which Momentum started with ~30,000 unresolvable domains in the queue. Notice that the "packet receive errors" number has increased, and there are a high number of pending DNS queries.

```
1559857 packet receive errors
  DNS A Queries: 924801
  DNS AAAA Queries: 0
  DNS MX Queries: 907577
  Pending DNS Queries: 312

    1559857 packet receive errors
  DNS A Queries: 924803
  DNS AAAA Queries: 0
  DNS MX Queries: 907849
  Pending DNS Queries: 43

    1560125 packet receive errors
  DNS A Queries: 924803
  DNS AAAA Queries: 0
  DNS MX Queries: 908388
  Pending DNS Queries: 311
```

| [Prev](modules.delay_dsn)  | [Up](modules) |  [Next](modules.domainkeys) |
| 71.26. delay_dsn – Delay DSN Generation  | [Table of Contents](index) |  71.28. domainkeys – Yahoo! DomainKeys |

