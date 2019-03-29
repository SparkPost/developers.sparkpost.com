|     |     |     |
| --- | --- | --- |
| [Prev](install.post-install.vertica_mgmt_console)  | Chapter 12. Post-Installation |  [Next](install.security_considerations) |

## 12.5. Upgrading the Vertica License

Momentum 4 is shipped with a perpetual 0.1 TB license for Vertica. If you were issued a Vertica license for a different volume level, you must upgrade the license after installation.

### Note

If you are upgrading, you will need a valid HP Vertica license and password. If you have not received these items, contact your Account Representative.

To upgrade your HP Vertica license, complete the following instructions:

### Note

Portions of this procedure are adapted from the [HP Vertica License Renewals or Upgrades](https://my.vertica.com/docs/7.0.x/HTML/index.htm#Authoring/AdministratorsGuide/Licensing/HPVerticaEnterpriseEditionOrEvaluationLicenseRenewalsOrUpgrades.htm%3FTocPath%3DAdministrator's%20Guide%7CManaging%20Licenses%7CInstalling%20or%20Upgrading%20a%20License%20Key%7C_____2).

1.  Copy your HP Vertica license to one of your Analytics nodes.

    scp licensefile.txt *`vertica_dba@myverticahost`*:*`/opt/thispath/`*licensefile.txt
2.  Connect to the Analytics node as the root user.

    ssh *`root@myverticahost`*
3.  Change to the `vertica_dba` account.

    sudo su - *`vertica_dba`*
4.  Run the Administration Tools.

    `admintools`
5.  In the Main Menu, select Advanced Menu, Upgrade License Key, and then OK.

6.  Use your space bar to select the option.

7.  Enter the path to your new license key file and then select OK. The license file pathname is the path used to save the license in step 1.

8.  When prompted, select View EULA to review the End-User License Agreement (EULA).

9.  To officially accept the EULA and complete the license upgrade, exit the EULA and choose Accept EULA.

|     |     |     |
| --- | --- | --- |
| [Prev](install.post-install.vertica_mgmt_console)  | [Up](post_installation) |  [Next](install.security_considerations) |
| 12.4. Download and Install the Vertica Management Console  | [Table of Contents](index) |  12.6. Security Considerations |

