|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.configuration.software_upgrade_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.configuration.start_services_rolling) |

## 11.15. Update the Web UI Configuration

We recommend you make these changes on one Analytics node and then use the scp command to copy them to the other Analytics nodes.

1.  Backup the `production.json` file then copy the `default.json` file to production. Answer `yes` at the prompt.

    ```
    cp /opt/msys/app/webui/scripts/config/production.json \
    /opt/msys/app/webui/scripts/config/production.json.bkup

    cp /opt/msys/app/webui/scripts/config/default.json \
    /opt/msys/app/webui/scripts/config/production.json
    ```

2.  Manually migrate environment-specific settings from the `/opt/msys/app/webui/scripts/config/production.json.bkup` file to the `/opt/msys/app/webui/scripts/config/production.json` file.

    All apiPorts and apiHosts default to localhost when set to false. This should be fine in most situations. There should not be many changes, and if the hosts are different they may need to be applied to the new API configuration stanzas. Specifically check for auth -> enabled and API hosts.

    ### Note

    Be sure to set the auth stanza to `"enabled": true`. Failure to do so will result in the message "Data could not be retrieved. Following is a list of errors:"

3.  Edit the `/opt/msys/app/webui/scripts/config/production.json` file to turn on adaptive delivery reporting.

    ```
    {
      "adaptiveDelivery" : {
        "enabled": true
      }
    }
    ```

4.  SCP the file to the other nodes.

    ### Note

    Attempts to scp between nodes may trigger the message "Error reading response length from authentication socket" before the password is requested. Enter your password to continue. You can clear the errors by logging out and back in to each of the nodes.

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.configuration.software_upgrade_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.configuration.start_services_rolling) |
| 11.14. Install the Adaptive Delivery API  | [Table of Contents](index) |  11.16. Start Services |

