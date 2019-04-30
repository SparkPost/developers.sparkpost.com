|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.single_node.configuration.webui)  | Chapter 10. Upgrade - Single Node |  [Next](upgrade.single_node.complete_setup) |

## 10.7. Start Services

1.  Start the following services.

    ```
    /etc/init.d/msys-app-users-api start
    /etc/init.d/msys-app-metrics-api start
    /etc/init.d/msys-app-webhooks-api start
    ```

    ### Note

    Adaptive Delivery Services will be started later.

2.  Confirm that the following services have been started.

    ```
    /etc/init.d/msys-app-webhooks-batch start
    /etc/init.d/msys-app-webhooks-transmitter start
    /etc/init.d/msys-app-metrics-etl start
    ```

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.single_node.configuration.webui)  | [Up](upgrade.single_node) |  [Next](upgrade.single_node.complete_setup) |
| 10.6. Update Web UI Configuration  | [Table of Contents](index) |  10.8. Complete the Software Set Up |

