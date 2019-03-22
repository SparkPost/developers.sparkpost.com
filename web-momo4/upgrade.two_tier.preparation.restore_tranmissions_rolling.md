| [Prev](upgrade.two_tier.preparation.upgrade_ecelerity_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.preparation.upgrade_vertica_rolling) |

## 11.9. Restore Transmissions to the Remaining Platform Nodes

1.  On **all Analytics nodes** , edit `/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf` and restore the lines identifying all nodes other than the first Platform node. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

2.  Reload the NGINX configuration.

    `pssh -h /var/tmp/vertica-hosts-file "/etc/init.d/msys-nginx reload"`

| [Prev](upgrade.two_tier.preparation.upgrade_ecelerity_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.preparation.upgrade_vertica_rolling) |
| 11.8. Upgrade Ecelerity on the Remaining Platform Nodes  | [Table of Contents](index) |  11.10. Upgrade Vertica on the Analytics Nodes |

