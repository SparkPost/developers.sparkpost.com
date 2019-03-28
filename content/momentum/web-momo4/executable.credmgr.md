|     |     |     |
| --- | --- | --- |
| [Prev](executable.create_ssl_cert)  | Chapter 74. Executable Commands Reference |  [Next](executable.ec_adtool) |

<a name="executable.credmgr"></a>
## Name

credmgr — manipulate credentials used with the securecreds module

## Synopsis

`/opt/msys/ecelerity/bin/credmgr` { create_db }

`/opt/msys/ecelerity/bin/credmgr` { create_key }

`/opt/msys/ecelerity/bin/credmgr` { del_cred }

`/opt/msys/ecelerity/bin/credmgr` { get_cred }

`/opt/msys/ecelerity/bin/credmgr` { set_cred }

<a name="idp12744464"></a>
## Description

**credmgr** is used in conjunction with the [securecreds](modules.securecreds "71.61. securecreds – Password Encryption/Credential Retrieval") module. Use it to create the credentials database and the credentials key and to set, get, and delete credentials. If you are not using the securecreds module, you do not need to be concerned with this command.

### Note

If you are using this tool in a cluster configuration, you must use this tool to set up credentials on each node.

The credentials database is implemented as a SQLite 3 database. Note the following points:

*   If during installation you choose to enable encrypted passwords, the credentials database and key are created at the default location. Root has read/write access to this database and ecuser has read access. This is enforced by having credmgr explicitly set the ownership and permissions appropriately on the credentials files.

*   In a cluster configuration, the credential database and key are local to each node.

*   The credentials database stores usernames and passwords for facilities (or services) running on specified hosts.

*   The username, hostname, and facility name serve as the primary key into the credentials database.

*   The password is stored in an encrypted form and can be decrypted using the credentials key. The key file should only be available to the root and ecuser system accounts. This is enforced by **credmgr**, which explicitly sets the ownership and permissions.

The actions that you can perform using this command are:

*   `create_db` – create the SQLite database where the credentials will be stored. If you wish to use the securecreds module, perform this action immediately after installation.

*   `create_key` – create the encryption key. If you change an existing key, all encrypted passwords will be re-encrypted.

*   `del-cred` – delete the credentials for the specified user or hostname.

*   `get_cred` – when used with no other options, gets all credentials. Otherwise, this action retrieves the credentials of the specified user or hostname. If the user does not exist, no credentials are displayed.

*   `set_cred` – set the credentials for the specified user or hostname. Create credentials if the user does not exist.

The options available with **credmgr** are listed below. Not all options are applicable to all actions.

<dl className="variablelist">

<dt>-d *`db_file`*</dt>

<dd>

Set the location of the credentials database file. Use this option with the `create_db` action. The default value for this option is `/opt/msys/ecelerity/etc/credentials.db`.

### Warning

We strongly recommend that you *not* change the default location of the credentials database. If you absolutely must change the location of this file please create a symlink to the default location.

</dd>

<dt>-k *`key_file`*</dt>

<dd>

Set the location of the encryption key file. Use this option with the `create_key` action. The default value for this option is `/opt/msys/ecelerity/etc/credentials.key`.

### Warning

We strongly recommend that you *not* change the default location of the encryption key. If you absolutely must change the location of this file please create a symlink to the default location.

</dd>

<dt>-h *`hostname`* , --hostname=*`hostname`*</dt>

<dd>

Set, get or delete the credentials associated with the specified hostname. Use this option along with the `username` and `facility` options.

</dd>

<dt>-u *`username`* , --username=*`username`*</dt>

<dd>

Set, get, or delete the credentials associated with the specified username. Use this option along with the `facility` and `hostname` options.

</dd>

<dt>-f *`facility`* , --facility=*`facility`*</dt>

<dd>

Set, get, or delete the credentials associated with the specified facility. The facility name identifies the type of service associated with a set of credentials. For example, “ldap” indicates that the credentials apply to an LDAP service. Use this option along with the `username` and `hostname` options.

Facility names are as follows:

*   `pgsql` – the built-in PostgreSQL database

*   `odbc` – any ODBC databases

*   `mysql` – any MySQL databases

*   `ldap` – any LDAP services

*   `proxy` – any proxy server service

*   `eccfg` – version control management tool. Use the hostname `ecconfigd` and the username `ecuser` with this facility.

*   `ecconfigd` – configuration management server. Use the hostname `_ecconfigd_` and the username `ecuser` with this facility

</dd>

<dt>-p *`password`* , --password=*`password`*</dt>

<dd>

Set, get, or delete a password in plain text. Use this option along with the `username` `hostname` and `facility` options.

</dd>

<dt>-P</dt>

<dd>

When specified in list credential mode (`get_cred` with no other options), this option shows clear text passwords

</dd>

<dt>--cipher=[aes | des_ede3_cbc |...]</dt>

<dd>

Encrypt or decrypt a cipher type. This option defaults to `aes`. Use **`man enc`**      for all supported ciphers on your system.

</dd>

<dt>--key_size=[16 | 24 | 32]</dt>

<dd>

Length of the key size, in octets. This option defaults to `32`.

</dd>

<dt>--block_mode=[cbc | ecb | ofb |...]</dt>

<dd>

Encrypt or decrypt block mode. This option defaults to `cbc`.

</dd>

</dl>

Examples of usage follow:

<a name="executable.credmgr.examples"></a>

**Example 74.1. credmgr examples**

```
/opt/msys/ecelerity/bin/credmgr create_db -d /opt/msys/ecelerity/etc/credentials.db
            : create database at given place
/opt/msys/ecelerity/bin/credmgr create_key -k /opt/msys/ecelerity/etc/credentials.key
            : create keyfile at given place, with default encryption/decryption algorithm:
              aes_256_cbc on Linux
/opt/msys/ecelerity/bin/credmgr get_cred
            : list all the user entries in the database, without credential/password
/opt/msys/ecelerity/bin/credmgr get_cred -P
            : list all the entries in the database, with credential/password shown as clear text
/opt/msys/ecelerity/bin/credmgr get_cred --hostname=host1 --username=user1 --facility=facy1
            : retrieve the password for the user defined by hostname(host1), username(user1)
            & facility(facy1)
/opt/msys/ecelerity/bin/credmgr set_cred --hostname=host1 --username=user1 --facility=facy1 \
            -p password1
            : set the password for the user with hostname(host1),
              username(user1) & facility(facy1) to "password1"
              password is updated for existing user
/opt/msys/ecelerity/bin/credmgr del_cred --hostname=host1 --username=user1 --facility=facy1
            : delete the credential entry for the user with hostname(host1), username(user1)
            & facility(facy1)
```

<a name="idp13566480"></a>
## See Also

[Section 71.61, “securecreds – Password Encryption/Credential Retrieval”](modules.securecreds "71.61. securecreds – Password Encryption/Credential Retrieval")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.create_ssl_cert)  | [Up](exec.cmds.ref) |  [Next](executable.ec_adtool) |
| create_ssl_cert  | [Table of Contents](index) |  ec_adtool |

