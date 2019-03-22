| [Prev](upgrade.two_tier.preparation.stop_generations_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.preparation.stop_transmissions_rolling) |

## 11.6. Upgrade Ecelerity and the Cassandra Schema on the First Platform Node

1.  The following steps connect Ecelerity and Cassandra. These steps should be done only on the **first Platform node** . Be sure you perform these steps in the order shown below.

    1.  Upgrade the RPM packages with yum (this includes all Momentum and third party packages).

        `yum --disablerepo=* --config momentum.repo --enablerepo=momentum upgrade`
    2.  Set up Cassandra-Momentum compatibility (i.e., the Cassandra schema to be used) (**first Platform node only** ).

        `/opt/msys/ecelerity/bin/cassandra_momo_setup.sh --multinode /opt/msys/ecelerity/etc`
    3.  Start ecconfigd (**first Platform node only** ).

        `service ecconfigd start`
    4.  Start Momentum.

        `service ecelerity start`
        ### Note

        If Ecelerity fails to start due to a licensing issue, copy your license to the `/opt/msys/ecelerity/etc/license` file on **all nodes** .

2.  Modify the `populate_customer_metadata.cql` file to apply the Cassandra schema (**first Platform node only** ).

    ```
    sed -i 's/, sending_disabled//' \
    /opt/msys/app/users-api/cql/upgrades/V2015.01.20_02.00.00__populate_customer_metadata.cql
    ```

3.  Apply the Users API schema changes (**first Platform node only** ).

    ```
    export UPG=/opt/msys/app/users-api/cql/upgrades
    export CQLSH=/opt/msys/3rdParty/bin/cqlsh
    $CQLSH -k authentication -f $UPG/V2015.01.20_00.00.00__create_customer_metadata.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.01.20_01.00.00__extract_customers.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.01.20_02.00.00__populate_customer_metadata.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.01.21_00.00.00__add_terms_of_use_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.09_00.00.00__create_unsuccessful_logins.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.10_00.00.00__two_factor.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.28_00.00.00__add_is_sso_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.28_00.00.00__add_tou_last_updated.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.05.21_00.00.00__add_email_verified_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.05.21_00.00.00__create_email_verification_tokens.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.16_00.00.00__add_saml_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.17_00.00.00__add_valid_ip_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.22_00.00.00__add_last_login_column.cql 2>&1 >> cassandra_schema.log
    ```

| [Prev](upgrade.two_tier.preparation.stop_generations_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.preparation.stop_transmissions_rolling) |
| 11.5. Stop Transmissions to the First Platform Node  | [Table of Contents](index) |  11.7. Restore Transmissions to the First Platform Node and Stop Transmissions to all other Platform Nodes |

