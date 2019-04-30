|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.configuration.config_all_nodes_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.configuration.webui_rolling) |

## 11.14. Install the Adaptive Delivery API

### Note

You must upgrade the Analytics node first.

1.  On **all Analytics nodes** , install the following packages using the new RPMs. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    `yum install --disablerepo=* --config momentum.repo --enablerepo=momentum msys-app-adaptive-delivery-api`
2.  On **all Platform nodes** , install the following packages using the new RPMs. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    `yum install --disablerepo=* --config momentum.repo --enablerepo=momentum msys-app-adaptive-delivery-etl`

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.configuration.config_all_nodes_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.configuration.webui_rolling) |
| 11.13. Configuration Changes  | [Table of Contents](index) |  11.15. Update the Web UI Configuration |

