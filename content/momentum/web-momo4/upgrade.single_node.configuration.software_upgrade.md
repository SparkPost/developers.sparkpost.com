|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.single_node.configuration.config_all__nodes)  | Chapter 10. Upgrade - Single Node |  [Next](upgrade.single_node.configuration.webui) |

## 10.5. Software Upgrade

### Note

You must upgrade the Analytics packages first.

1.  Install the following Analytics packages using the new RPMs:

    `yum install --disablerepo=* --enablerepo=momentum msys-app-adaptive-delivery-api`
2.  Install the following Platform packages using the new RPMs:

    `yum install --disablerepo=* --enablerepo=momentum msys-app-adaptive-delivery-etl`

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.single_node.configuration.config_all__nodes)  | [Up](upgrade.single_node) |  [Next](upgrade.single_node.configuration.webui) |
| 10.4. Configuration Changes  | [Table of Contents](index) |  10.6. Update Web UI Configuration |

