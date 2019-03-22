| [Prev](executable.ad_summary)  | Chapter 74. Executable Commands Reference |  [Next](executable.credmgr) |

<a name="executable.create_ssl_cert"></a>
## Name

create_ssl_cert — create a self-signed SSL certificate

## Synopsis

`/opt/msys/ecelerity/bin/create_ssl_cert` { *`service`* } { *`hostname`* } { *`prefix`* } [ *`user`* ]

<a name="idp12917488"></a>
## Description

During installation, self-signed SSL certificates valid for one year are created for some services. Use this command to create a new certificate when the original expires. When a certificate expires, you will see an error such as the following:

```
ERROR: premature EOF in "svn update '--config-dir' '/opt/msys/ecelerity/etc/.eccfg' »
'--username' 'ecuser' '--no-auth-cache' '--non-interactive' '--trust-server-cert' '.'"
svn: OPTIONS of 'https://mail2:2027/config/default/boot': Server certificate »
verification failed: certificate has expired, issuer is not trusted
```

To create a new certificate, first stop the appropriate service and remove the old certificate. Then issue the **create_ssl_cert** command. For example, the following command creates a certificate for the **ecconfigd** service:

shell> /opt/msys/ecelerity/bin/create_ssl_cert ecconfigd *`hostname`* \
/var/ecconfigd/apache ecuser

The parameters passed to this command are as follows:

<dl className="variablelist">

<dt>*`service`*</dt>

<dd>

The following services can be specified with this command:

*   `ecconfigd` - Momentum Configuration Server

    The **ecconfigd** service requires SSL and a certificate is created when Momentum is installed. For this reason, you will see the following message during installation:

    ```
    Generating a 2048 bit RSA private key
    ...
    writing new private key to '/var/ecconfigd/apache/server.key'
    ```

*   `msyspg` - Postgresql Server

    During installation, you can choose to use SSL for PostgreSQL.

</dd>

<dt>*`hostname`*</dt>

<dd>

Specify the hostname of the machine that hosts the service for which you are creating a certificate.

</dd>

<dt>*`prefix`*</dt>

<dd>

For the **ecconfigd** service, use `/var/ecconfigd/apache`. For the **msyspg** service, use `/opt/msys/3rdParty/share/postgresql`.

</dd>

<dt>*`user`*</dt>

<dd>

For the **ecconfigd** service, use `ecuser`. For the **msyspg** service, use `msyspg`. If you do not specify a user, the user defaults to `ecuser`.

</dd>

</dl>

<a name="idp12725216"></a>
## See Also

[ecconfigd](executable.ecconfigd "ecconfigd"), [Section 29.2, “Running the PostgreSQL Server”](postgresql.server "29.2. Running the PostgreSQL Server")

| [Prev](executable.ad_summary)  | [Up](exec.cmds.ref) |  [Next](executable.credmgr) |
| ad_summary  | [Table of Contents](index) |  credmgr |

