|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.configuration.flyway_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.configuration.config_all_nodes_rolling) |

## 11.12. Upgrade Remaining RPMs on Analytics Nodes

### Note

If you are performing an upgrade on a Combined Node, skip this section.

1.  Upgrade existing RPMs on **all Analytics nodes**                 except Vertica (since that was done in the previous section).

    `yum upgrade --disablerepo=* --config momentum.repo --enablerepo=momentum --exclude=msys-vertica`

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.configuration.flyway_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.configuration.config_all_nodes_rolling) |
| 11.11. Prepare and Run Flyway  | [Table of Contents](index) |  11.13. Configuration Changes |

