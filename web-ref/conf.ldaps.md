|     |     |     |
| --- | --- | --- |
| [Prev](conf.aaa)  | Chapter 2. Configuration |  [Next](conf.multi-core.php) |

## 2.3. Setting Up Active Directory Authentication With Momentum 3.2.2

Momentum 3.2.2 supports authenticating the web UI, configuration system and command console (ec_console) against an Active Directory system using the Internet standard LDAP (Lightweight Directory Access Protocol).

### Note

If you choose to authenticate against Active Directory, the User Management menu documented at [Section 3.9, “Administering Users From the Web Console”](web3.users "3.9. Administering Users From the Web Console") will be removed from the web UI. This menu is used to create, remove or update users and groups.

For your convenience, tools such as `ldapwhoami` are available in the `/opt/msys/3rdParty/bin` directory. Message Systems does not provide support for the use of any third party tools included or referenced by name within our products or product documentation; support is the sole responsibility of the third party provider.

This document describes how to configure Active Directory. It assumes that there have been no customizations made to Momentum's authentication configuration. If customizations have been made, then these instructions may be invalid.

When authenticating against an Active Directory there are some important restrictions and considerations to bear in mind:

*   Momentum does not support SASL authentication for LDAP. Instead, it has to use the simple authentication scheme, which sends the password in plaintext to the LDAP server.

    For this reason, you will almost certainly want to use an encrypted LDAPS connection, instead of a plain LDAP connection, so that passwords are not sent over the network in the clear.

    ### Note

    LDAPS queries that don't specify the `x-ldap-version=3` extension are liable to fail. LDAP extensions are discussed in [Section 14.30.3.3, “LDAP”](modules.ds_core#modules.ds_core.ds_ldap "14.30.3.3. LDAP").

*   LDAPS encrypted connections use a TLS/SSL connection.

    You will need to provide a CA certificate bundle, so that the LDAP client can verify the server certificate on your Active Directory server.

    You can either use the one that comes with your Operating System (for example `/etc/pki/tls/cert.pem` on most Linux distributions) or supply your own bundle of trusted CA certificates.

*   You will need to know the base distinguished name (DN) for searches in Active Directory. It is likely to be something like `CN=Users,CN=company,CN=example`.

*   You will need to know how users bind to the LDAP server—whether by email address (<username@company.example>) or by distinguished name (`CN=username,CN=Users,CN=company,CN=example`).

*   Automated configuration tasks such as pulling down updated configurations from the configuration server, and saving a copy of the current configuration on Momentum are performed by the user, `ecuser`.

    The user "ecuser" will need to be created in Active Directory, so that these automated tasks can continue to run.

    Furthermore, during installation of Momentum, you will need to enter ecuser's Active Directory password as the "service" password.

*   You can restrict access to certain Active Directory groups. To do this you will need to find an LDAP attribute that is a non-zero number, and that can be returned in a query. The `primaryGroupID` attribute has been found to work well for this in testing. This restriction is imposed by Momentum's authentication layer ([Section 14.7, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds "14.7. auth_ds – Datasource based SMTP Authentication")).

### 2.3.1. Configuring Momentum's LDAP Client

Configuring Momentum's LDAP client needs to be carried out on all nodes in the cluster, including the cluster manager and all messaging nodes.

1.  Create the configuration directory:

    `shell> mkdir -p /opt/msys/3rdParty/etc/openldap`
2.  Create the `ldap.conf` configuration file. This is used to set up the server certificate verification options. For more details regarding the format of this file see [http://linux.die.net/man/5/ldap.conf](http://linux.die.net/man/5/ldap.conf) .

    The configuration file should be created with the filename `/opt/msys/3rdParty/etc/openldap/ldap.conf`.

    An example follows:

    ```
    # Allow TLS/SSL connections to servers that present
    # a certificate issued by one of our trusted CAs.
    TLS_REQCERT try

    # Bundle of CA certificates, for CAs that we trust.
    TLS_CACERT /etc/pki/tls/cert.pem
    ```

    If you wanted to ignore server certificate verification errors, use:

    ```
    TLS_REQCERT try
    TLS_CACERT /etc/pki/tls/cert.pem
    ```

    Note that the CA certificate bundle needs to be readable by the user "ecuser". If it isn't, then it will cause Active Directory authentication to fail.

3.  Make sure that the configuration files are readable by ecuser:

    ```
    shell> chmod a+rx /opt/msys/3rdParty/etc/openldap
    shell> chmod a+r /opt/msys/3rdParty/etc/openldap/ldap.conf
    ```

### 2.3.2. Configuring Momentum to Authenticate Against Active Directory

1.  On the cluster manager, update `ecelerity.conf` to use the "LOGIN" authentication scheme, rather than "MD5 digest". Authentication schemes are documented in [Section 2.2, “Authentication, Authorization and Accounting”](conf.aaa "2.2. Authentication, Authorization and Accounting"). This is needed so that passwords are passed in plaintext to the LDAP server.

    You must also change `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf` from:

    ```
    Control_Listener {
      AuthDigestMD5Parameters = [
        uri = "ecauth://"
      ]
      ...
    ```

    to:

    ```
    Control_Listener {
      # AuthDigestMD5Parameters = [
      AuthLoginParameters = [
        uri = "ecauth://"
      ]
      ...
    ```

2.  Add an identical Control_Listener stanza to the `eccluster.conf` file. *If the `ecelerity.conf` file uses LOGIN authentication then `eccluster.conf` must also use LOGIN authentication.*

3.  Back-up `webui-common.conf`:

    ```
    shell> cd /opt/msys/ecelerity/etc/conf/default
    shell> cp webui-common.conf webui-common.conf.pg
    ```

4.  Update `webui-common.conf` to specify your Active Directory server:

    ```
    Datasource "activedirectory_auth" {
      uri = ( "ldaps://ads.company.example" )
      no_cache = true
    }

    Datasource "activedirectory_groups" {
      uri = ( "ldaps://ads.company.example" )
      no_cache = true
    }
    ```

    Delete the `Datasource "ecdb" { ... }` section.

    ### Note

    For more information about the Datasource module see [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core").

5.  Update the `Authenticate {}` section to query your LDAP server.

    The QueryGroups and EnumGroups authentication parameters are not currently supported (in 3.2.x) for authentication against Active Directory.

    If you just want to make sure that users exist in Active Directory, you can use a configuration like the following. This will perform a bind-only LDAP query. You will need to adjust the LDAP query to match your own Active Directory structure.

    ```
    auth_ds {
      Scheme "ecauth" {
        Authenticate {
          query = "ldaps:///????bindname=$user@company.example,x-bindpw=$pass,x-disable-connection-cache=true"
          cache = "activedirectory_auth"
          map = [
            user = "%{username}"
            pass = "%{password}"
          ]
        }
      }
    }
    ```

    If you want to make sure that users exist in Active Directory, and that they are members of specific groups (groups that are allowed to administer Momentum), then you can use a configuration like the following. You will need to adjust the LDAP query to match your own Active Directory structure.

    Note that the LDAP query returns the primaryGroupID attribute—this has been chosen as an attribute that is a non-zero number. If primaryGroupID can be zero, you will instead need to use another LDAP attribute that is always non-zero.

    ```
    auth_ds {
      Scheme "ecauth" {
        Authenticate {
          # Return the primaryGroupID field, which is an integer.
          # The auth_ds module will authenticate the user
          # if the following query succeeds,
          # and the primaryGroupID is non-zero.
          query = "ldaps:///CN=$user,CN=Users,DC=company,DC=example?primaryGroupID??»
            (&(objectClass=user)(|(memberOf=CN=Group1,CN=Users,DC=company,DC=example)»
            (memberOf=Group2,CN=Users,DC=company,DC=example)»
            (memberOf=Group3,CN=Users,DC=company,DC=example)))»
            ?bindname=$user@company.example,x-bindpw=$pass,x-disable-connection-cache=true"
          cache = "activedirectory_auth"
          map = [
            user = "%{username}"
            pass = "%{password}"
          ]
        }
      }
    }
    ```

    ### Note

    The ‘`»`’ character in the preceding example is used to indicate that the `query` should appear on one line. If this line is not broken up, it will be truncated in some forms of the documentation.

    The queries above assume that the user needs to bind to the directory using an email address. If your Active Directory requires binding using a distinguished name (DN) instead, you might use a bindname parameter like this:

    `bindname=CN=$user%2cCN=Users%2cDC=company%2cDC=example`

    This preceding example replaces `bindname=$user@company.example`. The commas in the DN must be URL-encoded as "%2c" in the bindname parameter.

### Note

An example `webui-common.conf` file is reproduce in [Appendix D, *Example LDAP `webui-common.conf` File*](webui-common.example "Appendix D. Example LDAP webui-common.conf File") .

### 2.3.3. Testing Active Directory Authentication

See [Section 2.3.4, “Debugging Active Directory Authentication”](conf.ldaps#conf.ldaps.debug "2.3.4. Debugging Active Directory Authentication") if you have problems with any of the following steps.

1.  Web UI – Once you have made the changes above, you should be able to log into the web UI using your Active Directory credentials.

    ### Warning

    The User Management menu in the web UI is unavailable when you authenticate against Active Directory.

2.  Configuration system – You should be able to commit these changes on the cluster manager, using your Active Directory credentials.

    shell> /opt/msys/ecelerity/bin/eccfg commit --username *`username`*

    When you issue this command, you are asked if you want to add `webui-common.conf.pg`. Answer `yes`.

3.  Configuration system, part 2 – On a messaging node, try to download the latest configuration by issuing the command: **`/opt/msys/ecelerity/bin/eccfg pull --auto`**             . If you are not successful, it is probably because the service password set during installation does not match the password for "ecuser" in Active Directory.

    Try pulling the configuration as a different user. **/opt/msys/ecelerity/bin/eccfg pull --username *`username`***                             . You will need to do this on all messaging nodes. Once you have pulled the configuration, reload the configuration: **`/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`**                         .

4.  ec_console – On any node including the manager, you should be able to connect to ec_console using your Active Directory credentials. For example:

    shell > /opt/msys/ecelerity/bin/ec_console *`username`*@127.0.0.1:2025

    This command will prompt for your password. Enter your Active Directory password. If you can connect with ec_console, try running commands such as summary, domains.

### 2.3.4. Debugging Active Directory Authentication

1.  Edit `webui-common.conf`, and add the following lines to turn on debugging of LDAP queries:

    ```
    ds_ldap {
      debug_level = "DEBUG"
    }

    ds_core {
      debug_level = "DEBUG"
    }
    ```

2.  The configuration system will log LDAP queries to `/var/ecconfigd/apache/error.log`. Check the logs.

3.  LDAP queries relating to ec_console failures are logged to `/var/log/ecelerity/paniclog.ec`.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.aaa)  | [Up](conf.php) |  [Next](conf.multi-core.php) |
| 2.2. Authentication, Authorization and Accounting  | [Table of Contents](index) |  2.4. Configuring for Multiple Event Loops in Momentum 3.6 |
