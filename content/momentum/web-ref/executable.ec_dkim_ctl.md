| [Prev](executable.ec_ctl)  | 11.2. Executable Commands |  [Next](executable.ec_dump_config.php) |

<a name="executable.ec_dkim_ctl"></a>
## Name

ec_dkim_ctl — Manipulate the DK/DKIM database

## Synopsis

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --add-dk *`domain,selector,keyfile`* ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --add-dkim *`domain,selector,keyfile`* ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --delete-dk *`domain`* ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --delete-dkim *`domain`* ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ -h ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --list ]

### Note

When adding a domain use commas to separate values.

<a name="idp13357744"></a>
## Description

**ec_dkim_ctl** is used to manipulate a small SQLite database that can be used in conjunction with the DK and DKIM Sieve actions for signing e-mail messages. If the database does not already exist, adding a domain creates the `dkim_db` database in the `/var/log/ecelerity` directory. Its schema is as follows:

```
CREATE TABLE ec_dkim_conf (
  domain varchar(255) PRIMARY KEY,
  selector varchar(255) NOT NULL,
  keyfile varchar(255))

CREATE TABLE ec_dk_conf (
  domain varchar(255) PRIMARY KEY,
  selector varchar(255) NOT NULL,
  keyfile varchar(255))
```

This command has the following options:

<dl className="variablelist">

<dt>--add-dk domain,selector,keyfile</dt>

<dd>

Add a domain to the DomainKeys table with the defined selector and keyfile. The keyfile option may be empty.

</dd>

<dt>--delete-dk domain</dt>

<dd>

Delete a domain from the DomainKeys table.

</dd>

<dt>--add-dkim domain,selector,keyfile</dt>

<dd>

Add a domain to the DKIM table with the defined selector and keyfile. The keyfile option may be empty.

</dd>

<dt>--delete-dkim domain</dt>

<dd>

Delete a domain from the DKIM table

</dd>

<dt>-h</dt>

<dd>

Show a help message.

</dd>

<dt>--list</dt>

<dd>

List the domains in the DK and DKIM tables.

</dd>

<dt>--version or -V</dt>

<dd>

Show version information.

</dd>

</dl>

To use the database configure Momentum as follows:

<a name="example.ec_dkim_ctl.datasource"></a>

**Example 11.2. Datasource configuration 3.0**

```
Datasource "dkim_db" {
    uri = ( "sqlite:/var/log/ecelerity/dkim_db" )
}
sieve "sieve1" {
  hook core_final_validation {
    script = "/opt/msys/ecelerity/etc/dkim.siv"
    async = "false"
  }
}
```

Also create a Sieve file, `/opt/msys/ecelerity/etc/dkim.siv`, with the following content:

```
$domain = ec_dkim_responsible_domain;

$hash = ds_fetch_hash "dkim_db" "select selector,keyfile FROM ec_dkim_conf WHERE domain = ?" [ $domain ];

ec_dkim_sign $hash;
```

For the Sieve functions specific to Domain Keys and DKIM see [ec_dk_responsible_domain](sieve.ref.ec_dk_responsible_domain "ec_dk_responsible_domain") and following.

<a name="idp13381088"></a>
## See Also

[Section 14.29, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys "14.29. domainkeys – Yahoo! DomainKeys") and [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim.php "14.27. dkim – DomainKeys Identified Mail Signatures")

| [Prev](executable.ec_ctl)  | [Up](exe.commands.details.php) |  [Next](executable.ec_dump_config.php) |
| ec_ctl  | [Table of Contents](index) |  ec_dump_config |
