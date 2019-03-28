| [Prev](upgrade.two_tier.configuration.webui_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.complete_setup_rolling) |

## 11.16. Start Services

1.  Start the following services on **all nodes** .

    ```
    /etc/init.d/msys-app-users-api start
    /etc/init.d/msys-app-metrics-api start
    /etc/init.d/msys-app-webhooks-api start
    ```

    ### Note

    Adaptive Delivery Services will be started later.

2.  Confirm that the following services have been started on **all Platform nodes** . For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    ```
    /etc/init.d/msys-app-webhooks-batch start
    /etc/init.d/msys-app-webhooks-transmitter start
    /etc/init.d/msys-app-metrics-etl start
    ```

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.configuration.webui_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.complete_setup_rolling) |
| 11.15. Update the Web UI Configuration  | [Table of Contents](index) |  11.17. Complete the Software Set Up |

