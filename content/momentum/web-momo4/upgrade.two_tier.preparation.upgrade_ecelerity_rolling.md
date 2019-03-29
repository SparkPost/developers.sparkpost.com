|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.preparation.stop_transmissions_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.preparation.restore_tranmissions_rolling) |

## 11.8. Upgrade Ecelerity on the Remaining Platform Nodes

Upgrade the packages on the **remaining Platform Nodes** .

1.  Upgrade the RPM packages with yum (this includes all Momentum and third party packages).

    `yum --disablerepo=* --config momentum.repo --enablerepo=momentum upgrade`
    ### Warning

    If you are performing an upgrade on a Combined Node, you must exclude Vertica.

    `yum --disablerepo=* --config momentum.repo --enablerepo=momentum upgrade --exclude=msys-vertica`
2.  Start Momentum.

    `service ecelerity start`
    ### Note

    If Ecelerity fails to start due to a licensing issue, copy your license to the `/opt/msys/ecelerity/etc/license` file **on all nodes** .

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.preparation.stop_transmissions_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.preparation.restore_tranmissions_rolling) |
| 11.7. Restore Transmissions to the First Platform Node and Stop Transmissions to all other Platform Nodes  | [Table of Contents](index) |  11.9. Restore Transmissions to the Remaining Platform Nodes |

