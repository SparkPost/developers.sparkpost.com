|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.failover)  | Chapter 7. Clustering |  [Next](sieve) |

## 7.10. The `cidr_server`

The **cidr_server** is part of a cluster console installation. It queries the data created by an `as_logger` module and displays the result in the cluster console. The `cidr_server` is run as a daemon so it starts automatically whenever the host server is rebooted. Instructions for starting this service are displayed on the screen immediately after installation; simply enter **`/etc/init.d/cidr_server`**. (Use **svcadm** on Solaris.) At any time you may start, stop or restart the `cidr_server` using **/opt/msys/ecelerity/bin/cidr_server_ctl *`option`***           .

### Note

The cidr_server listens on port `9000`.

### 7.10.1. The `cidr_cli` Utility

**cidr_cli** is a command-line utility which offers the same functions as cidr_server. To invoke this interface enter, **/opt/msys/ecelerity/bin/cidr_cli**. This changes the cursor to `cidr>`, opening the `cidr` shell.

From this command-line interface you can have immediate and customized access to data created by the audit series logger, `as_logger`. The CIDR data collected for these audits is defined using the Sieve++ audit_series macros. For more information regarding these macros see [the section called “Audit series”](sieve.ecaddons#sieve.ectypes_audit_series "Audit series"). The syntax used to query these data files is described in what follows.

**7.10.1.1. `cidr_cli` Grammar**

The expressions that can be used within the `cidr` shell are listed below.

<a name="cluster.cidr_cli.table"></a>

**Table 7.2. cidr_cli Grammar**

| BNF | Expression |
| --- | --- |
| list ::= | "show available" |
| show ::= | "show count for" cidr "in" seriesname query |
| cidr ::= | ip/mask |
| seriesname ::= | seriesunion | serieslist |
| serieslist ::= | series (, series )* |
| seriesunion ::= | "union(" serieslist ")" |
| series ::= | word |
| query ::= | (queryparams)* |
| queryparams ::= | datespec | cidrsize | order | aggregate | limit | threshold |
| datespec ::= | fromto | on | since |
| fromto ::= | "from" date "to" date |
| since ::= | "since" date |
| on ::= | "on" date |
| date ::= | iso8601-date-format |
| cidrsize ::= | "cidrsize" num "to" num | "cidrsize" num |
| order ::= | "order by cidr" | "order by count" |
| aggregate ::= | "aggregate daily" | "aggregate" |
| limit ::= | "limit" num |
| threshold ::= | "threshold" num |

### Note

As of version 3.4, this component fully supports IPv6 addresses.

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the Gateway, Routes and Listen options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

The following section gives examples of how to create queries.

**7.10.1.2. Using `cidr_cli`**

What you do from the cidr shell is determined by the audit series that you have defined. In this particular case, the site's administrators have defined audit series in Sieve++ scripts named `spam`, `virus` and `invalid_recipients`. In each case a counter is incremented using the **audit_series_add** macro during the each_rcpt phase.

The most useful command to use when first entering the `cidr` shell is **show available** . This command displays the various data files that you can query. Find sample output below:

```
spam : 20080423T123000 => 20080610T201500
virus : 20080425T080000 => 20080610T201500
invalid_recipient : 20080423T121500 => 20080610T201500
```

The names of the audit series are `spam`, `virus` and `invalid_recipient`. Following each name is the time period for which data is available. Since the source IP address is recorded for each event, you can obtain event counts by IP address or CIDR block. The queries that follow are examples of how to use the cidr_cli interface.

### Warning

No error message is displayed if your query syntax is incorrect. If your query has no output it may indicate an empty result set *or* incorrect syntax.

You can query data files in a variety of ways. In this example, issuing the command **`show count for 0.0.0.0/0 in spam since 20080423`**                                             results in the following output showing, individual IP addresses followed by the associated count.

```
10.79.18.1/32      :     35217
10.79.18.2/32      :     25350
10.79.18.3/32      :     21291
10.79.18.4/32      :     21183
10.79.18.5/32      :     20933
...
10.79.18.63/32     :     21179
10.79.18.64/32     :     12183
10.79.18.130/32    :         5
127.0.0.1/32       :         2
```

Find the top ten /32s since 2008-04-23 on the spam and virus audit series by issuing the query: **`show count for 0.0.0.0/0 in spam, virus since 20080423 order by count limit 10`**                                                                           . The output is shown in the following.

```
10.79.18.1/32      : 35217,1264
10.79.18.2/32      : 25350,0
10.79.18.61/32     : 21381,3421
10.79.18.30/32     : 21374,0
10.79.18.57/32     : 21335,8760
10.79.18.6/32      : 21322,0
10.79.18.3/32      : 21291,0
10.79.18.50/32     : 21271,16437
10.79.18.14/32     : 21236,0
10.79.18.24/32     : 21222,8790
```

The numbers following the ‘`:`’ are the counts for the `spam` and `virus` data files respectively. To determine the top ten IP series for a specific day replace `since` with `on` followed by the day of interest.

To find the top /24s on 2008-04-23 on the sum of spam and virus audit series issue the query: **`show count for 0.0.0.0/0 in union(spam, virus) on 20080424 cidrsize 24 order by count limit 1`**                                                                                          . The output is shown in the following.

`10.79.18.0/24      :     18492`

Since this query selects from a union, only one numeric result follows the IP address.

Using the IP address series output in the previous query you can determine the breakdown of the total count by IP address using the query: **`show count for 10.79.18.0/24 in union(spam, virus) on 20080424`**                                                           . This outputs:

```
10.79.18.1/32      :     14071
10.79.18.2/32      :      4421
```

The absolute figures shown above are perhaps less interesting than knowing the percentage of suspect mail, something that could readily be done by creating an audit_series to track the total number of mails.

Time periods can be specified in units other than days. For example, to look at data between noon and 1 PM on a specific day you would use the expression `from 20080605T120000 to 20080605T130000`.

Use the **cache details**         command to inspect the cache. If there is data in the cache you should see output like the following:

```
$VAR1 = [
'/var/log/eccluster/aslogger/spam.20080424T200000',
'/var/log/eccluster/aslogger/spam.20080424T201500',
...
'/var/log/eccluster/aslogger/spam.20080424T233000',
'/var/log/eccluster/aslogger/spam.20080424T234500'
];
```

The `spam` series files appear in the directory defined by the `base_dir` parameter in the `cidr_maintain.conf` file, in this case the `/var/log/eccluster/aslogger` directory. For more information about the `cidr_maintain.conf` file see [Section 14.6.2, “The `cidr_maintain.conf` File”](modules.as_logger#module.as_logger.cidr_maintain.conf "14.6.2. The cidr_maintain.conf File").

### Note

There is no command to exit the `cidr` shell; use **Ctrl**+**D** .

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.failover)  | [Up](cluster) |  [Next](sieve) |
| 7.9. Configuring Momentum for High Availability and Failover  | [Table of Contents](index) |  Chapter 8. Sieve++ |
