|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.preparation.rpms_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.configuration.software_upgrade_rolling) |

## 11.13. Configuration Changes

Move the Vertica stanza to the root level in the configuration files on all nodes as detailed below.

### Note

Multiple stanzas in the root must be separated by commas. For example, in the webhooks-api version, a Cassandra stanza follows the Application stanza, so you will need to add a comma to the Vertica sub-stanza getting moved. This will help preserve the proper json formatting.

1.  Open a file editor on the **first Analytics node** .

    ```
    % shopt -s extglob
    vim -o /opt/msys/app/+(metrics|webhooks)-api/config/production.json
    ```

2.  Configure the `/opt/msys/app/<metrics and webhooks>-api/config/production.json` file.

    ```
    {
      "application":{
        "vertica": {  //from here
            // stuff, probably hosts
        } //to here
      },

      //put it here
      "vertica": {
         // stuff, probably hosts
      }
    }
    ```

3.  The application stanza (`"application": { }`) is now empty and may be deleted. Save the file and exit the file editor.

4.  Open a file editor on the **first Platform node** .

    `vim /opt/msys/app/metrics-etl/config/production.json`
5.  Update or verify the `/opt/msys/app/metrics-etl/config/production.json` file by copying the root -> application -> vertica stanza to root -> vertica.

    ```
    {
      "application":{
        "vertica": {  //from here
            // stuff, probably hosts
        } //to here
      },

      //put it here
      "vertica": {
         // stuff, probably hosts
      }
    ```

6.  The application stanza (`"application": { }`) is now empty and may be deleted. Save the file and exit the file editor.

7.  SCP the Analytics changes to the **other Analytics nodes** . See below for an example scp command:

    ```
    scp –p /opt/msys/app/webhooks-api/config/production.json {nodename or IP}:/opt/msys/app/webhooks-api/config/production.json
    scp –p /opt/msys/app/metrics-api/config/production.json {nodename or IP}:/opt/msys/app/metrics-api/config/production.json
    ```

8.  SCP the Platform changes to the **other Platform nodes** . See below for an example scp command:

    `scp –p /opt/msys/app/metrics-etl/config/production.json {nodename or IP}:/opt/msys/app/metrics-etl/config/production.json`

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.preparation.rpms_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.configuration.software_upgrade_rolling) |
| 11.12. Upgrade Remaining RPMs on Analytics Nodes  | [Table of Contents](index) |  11.14. Install the Adaptive Delivery API |

