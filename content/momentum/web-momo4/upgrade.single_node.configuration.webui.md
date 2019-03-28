| [Prev](upgrade.single_node.configuration.software_upgrade)  | Chapter 10. Upgrade - Single Node |  [Next](upgrade.single_node.configuration.start_services) |

## 10.6. Update Web UI Configuration

1.  Backup the `production.json` file then copy the `default.json` file to production. Answer `yes` at the prompt.

    ```
    cp /opt/msys/app/webui/scripts/config/production.json /opt/msys/app/webui/scripts/config/production.json.bkup
    cp /opt/msys/app/webui/scripts/config/default.json /opt/msys/app/webui/scripts/config/production.json
    ```

2.  Manually migrate environment-specific settings from the `/opt/msys/app/webui/scripts/config/production.json.bkup` file to the `/opt/msys/app/webui/scripts/config/production.json` file.

    All apiPorts and apiHosts default to localhost when set to false. This should be fine in most situations. There should not be many changes, and if the hosts are different they may need to be applied to the new API configuration stanzas. Specifically check for auth -> enabled and API hosts.

3.  Edit the `/opt/msys/app/webui/scripts/config/production.json` file to turn on auth and adaptive delivery reporting.

    ```
    {
      "auth" : {
        "enabled": true
      },
      "adaptiveDelivery" : {
        "enabled": true
      }
    }
    ```

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.single_node.configuration.software_upgrade)  | [Up](upgrade.single_node) |  [Next](upgrade.single_node.configuration.start_services) |
| 10.5. Software Upgrade  | [Table of Contents](index) |  10.7. Start Services |

