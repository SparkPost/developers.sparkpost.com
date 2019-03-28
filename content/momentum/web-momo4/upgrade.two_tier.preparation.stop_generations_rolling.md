| [Prev](upgrade.two_tier.preparation.upgrade_cassandra_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.preparation.ecelerity_rolling) |

## 11.5. Stop Transmissions to the First Platform Node

Be sure that the first Platform node will no longer have transmission requests routed to it.

1.  On **all Analytics nodes** , edit `/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf` and either delete or comment out the line identifying the Platform node to be upgraded. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    ```
    # Edit /opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf

    #  In momo_upstream.conf, comment out the Platform node WHICH YOU ARE UPGRADING
    #  from the upstream momo-rest stanza
         upstream momo-rest {
             server node1.int.messagesystems.com:2081;
             server node2.int.messagesystems.com:2081;
             server node3.int.messagesystems.com:2081;
           least_conn;
       }
    ```

    Reload the NGINX configuration.

    `pssh -h /var/tmp/vertica-hosts-file "/etc/init.d/msys-nginx reload"`
2.  Allow the node time to finish generation.

    ```
    $ /opt/msys/ecelerity/bin/ec_console
    16:26:02 /tmp/2025> msg_gen joblist
    Job: 84158406797069455 jctl: 4 Restarts: 0 resync: 0 complete: 0 del_pend: 0
          inprog: 1 Recips:    100  LastStart:      1 worker(count: 1 complete: 0)

          own  start count s_recip s_count s_total complete fail status state restart seqno finish
            4      1   100       1     100       0        0    0      0     0       0     1      0
    Job: 84158406797069346 jctl: 4 Restarts: 0 resync: 0 complete: 0 del_pend: 0
          inprog: 1 Recips:    100  LastStart:      1 worker(count: 1 complete: 0)

          own  start count s_recip s_count s_total complete fail status state restart seqno finish
            4      1   100       1     100       0        0    0      0     0       0     1      0

    16:26:06 /tmp/2025> msg_gen joblist
    Ok
    ```

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.preparation.upgrade_cassandra_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.preparation.ecelerity_rolling) |
| 11.4. Upgrade Cassandra on the Platform Nodes  | [Table of Contents](index) |  11.6. Upgrade Ecelerity and the Cassandra Schema on the First Platform Node |

