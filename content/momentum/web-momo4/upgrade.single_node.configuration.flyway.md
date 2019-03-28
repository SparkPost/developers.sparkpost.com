| [Prev](upgrade.single_node.vertica_updates)  | Chapter 10. Upgrade - Single Node |  [Next](upgrade.single_node.configuration.config_all__nodes) |

## 10.3. Prepare and Run Flyway

Configure the tables for running the Flyway data migration tool.

1.  Baseline the Flyway schema table.

    1.  Clean out the `/var/tmp/vertica-migrations` folder.

        `rm -rf /var/tmp/vertica-migrations/*`
    2.  Copy the new schema files into the `vertica-migrations` folder.

        `cp /opt/msys/app/db/schema/* /var/tmp/vertica-migrations/`
    3.  Truncate the existing `schema_version` table.

        `/opt/vertica/bin/vsql -U vertica_dba -c "TRUNCATE TABLE momo.schema_version;"`
    4.  Run the Flyway baseline, which adds a << BASELINE >> record to the table.

        `/opt/msys/app/db/flyway baseline`
    5.  Update the baseline record to point to a date formatted like the Flyway migration versions we use.

        ### Note

        The version should be formatted `YYYY.MM.DD.HH.MM.SS`.

        ```
        /opt/vertica/bin/vsql -U vertica_dba -c "UPDATE momo.schema_version SET version='2014.09.20.00.00.00' \
           WHERE version=1; COMMIT;"
        ```

2.  Run the Flyway data migration tool.

    `/opt/msys/app/db/flyway migrate -locations=filesystem:/var/tmp/vertica-migrations`
    ### Note

    Flyway will run a series of scripts, after which you may receive the warning Error Code: 6100\. This warning is about best practices from Vertica and can safely be ignored as it does not apply once the scripts have run.

3.  Fix the template column.

    ```
    echo "set search_path='momo';\\i /opt/msys/app/db/scripts/V2014.11.26_15.45.00__rename_template_column.sql" | \
       /opt/vertica/bin/vsql -U vertica_dba
    ```

4.  Fix webhook batch status grants.

    `/opt/vertica/bin/vsql -U vertica_dba -c "grant select, insert on momo.webhook_batch_status to vertica_api;"`
5.  Delete the `tdate_month` column.

    ```
    echo "set search_path='momo';\\i /opt/msys/app/db/scripts/V2015.01.27_14.35.00__drop_tdate_month.sql" | \
       /opt/vertica/bin/vsql -U vertica_dba
    ```

    ### Warning

    This command may take a while to complete, but it must be finished before you can proceed.

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.single_node.vertica_updates)  | [Up](upgrade.single_node) |  [Next](upgrade.single_node.configuration.config_all__nodes) |
| 10.2. Vertica Updates  | [Table of Contents](index) |  10.4. Configuration Changes |

