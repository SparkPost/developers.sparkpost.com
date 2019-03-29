|     |     |     |
| --- | --- | --- |
| [Prev](executable.adaptivedb)  | 11.2. Executable Commands |  [Next](executable.credmgr.php) |

<a name="executable.create_ssl_cert"></a>
## Name

create_ssl_cert — Create a self-signed SSL certificate

## Synopsis

`/opt/msys/ecelerity/bin/create_ssl_cert` { *`service`* } { *`hostname`* } { *`prefix`* } [ *`user`* ]

<a name="idp13041760"></a>
## Description

During installation self-signed SSL certificates valid for one year are created for some services. Use this command to create a new certificate when the original expires. When a certificate expires, you will see an error such as the following:

```
ERROR: premature EOF in "svn update '--config-dir' '/opt/msys/ecelerity/etc/.eccfg' »
'--username' 'ecuser' '--no-auth-cache' '--non-interactive' '--trust-server-cert' '.'"
svn: OPTIONS of 'https://mail2:2027/config/default/boot': Server certificate »
verification failed: certificate has expired, issuer is not trusted
```

You can create a certificate for the following services:

*   `ecconfigd`

*   `ecwebui`

*   `msyspg`

During installation you can choose to use SSL for the web UI and also for PostgreSQL. The [ecconfigd](executable.ecconfigd "ecconfigd") service requires SSL and a certificate is created when Momentum is installed. For this reason you will see the following message during installation:

```
Generating a 2048 bit RSA private key
...
writing new private key to '/var/ecconfigd/apache/server.key'
```

The parameters passed to this command are as follows:

<dl className="variablelist">

<dt>*`service`*</dt>

<dd>

The services that can be specified with this command are enumerated above. The `ecconfigd` service always uses SSL but the `ecwebui` and `msyspg` services only use SSL if the SSL option is selected during installation.

</dd>

<dt>*`hostname`*</dt>

<dd>

Specify the hostname of the machine that hosts the service you are creating a certificate for.

</dd>

<dt>*`prefix`*</dt>

<dd>

The prefix for the ecconfigd service is `/var/ecconfigd/apache`. For the `ecwebui` service use `/opt/msys/ecwebui/config/site` and `/opt/msys/3rdParty/share/postgresql` for the `msyspg` service.

</dd>

<dt>*`user`*</dt>

<dd>

For the database service, the user is `msyspg`. Use `ecuser` for the other services. If you do not specify a user, the user defaults to `ecuser`.

</dd>

</dl>

To create a new certificate, first remove the old certificate and stop the appropriate service. Then issue the **create_ssl_cert** command. For example, the following command creates a certificate for the ecconfigd service:

shell> /opt/msys/ecelerity/bin/create_ssl_cert ecconfigd *`hostname`* \
/var/ecconfigd/apache ecuser<a name="idp13066736"></a>
## See Also

[ecconfigd_ctl](executable.ecconfigd_ctl "ecconfigd_ctl"), [Section 3.1, “Starting the Web Console”](web3.starting.web.console.php "3.1. Starting the Web Console"), [Section 1.3, “Security Considerations”](install.security.php "1.3. Security Considerations") and [Section 4.3.3, “Running the PostgreSQL Server”](operations.postgresql.php#operations.postgres-server "4.3.3. Running the PostgreSQL Server")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.adaptivedb)  | [Up](exe.commands.details.php) |  [Next](executable.credmgr.php) |
| adaptivedb  | [Table of Contents](index) |  credmgr |
