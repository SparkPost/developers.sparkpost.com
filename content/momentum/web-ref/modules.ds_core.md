|     |     |     |
| --- | --- | --- |
| [Prev](modules.domainkeys)  | Chapter 14. Modules Reference |  [Next](modules.ec_logger.php) |

## 14.30. ds_core – Datasource Query Core

<a class="indexterm" name="idp19558176"></a>

The datasource core module provides a modular data access and caching layer for consumption by other Momentum modules. Datasource driver modules can be loaded to provide access to third-party data stores (such as LDAP, ODBC, etc.). A C-language SDK is available to allow third parties to build their own datasource drivers for use with the datasource layer.

The datasource layer is designed to cache query results to avoid overwhelming the data store. Each cache is configured to query against a particular data store, and can have distinct size and time-to-live (TTL) settings for the data, allowing an administrator many opportunities for tuning.

The following configuration stanza loads the datasource core and the ODBC datasource driver and configures a cache to query against a MS SQL Server:

<a name="example.ds_core.3"></a>

**Example 14.51. datasource scope**

```
Datasource "mssql" {
  uri = ( "odbc:DSN=sqlserver;UID=user;PWD=pass" )
  cache_size = 1000
  cache_life = 3600
}
```

The ds_core module is loaded implicitly as required and need not be specified in the configuration file. Nor do datasource drivers need to be explicitly loaded. However, you must add the appropriate database modules during installation. Note that a datasource must have a name. The reason for this is to identify a given datasource instance in order to apply configuration changes. Also notice that the `uri` option is an array, letting you specify more than one datasource.

Datasources are not modules so you cannot determine their names using the **module list**      command. Use **config locate datasource**                   instead. To set datasource options from the system console use the syntax config set datasource *`ds_name option value`* . For example, set the `cache_life` of the datasource defined in [Example 14.51, “datasource scope”](modules.ds_core#example.ds_core.3 "Example 14.51. datasource scope") in the following way:

`07:57:51 /tmp/2025> config set datasource mssql cache_life 3500`

For more information see [config](console_commands.config "config").

The example code in [Example 14.51, “datasource scope”](modules.ds_core#example.ds_core.3 "Example 14.51. datasource scope") creates a cache named `mssql` that will store the results of up to 1000 distinct queries. Cache items will remain in the cache for up to 3600 seconds. If a cache miss occurs, the `uri` parameter specifies how to connect to the datasource to fetch the data. The syntax for `uri` is the driver name followed by a single colon character. Everything after the colon is passed verbatim to the driver in order to create the connection. What is passed varies depending upon the requirements of the driver. For example, the SQLite driver only requires the driver name followed by the path to the database. The ODBC driver shown above requires a DSN, a user ID and password in addition to the driver name. Check driver documentation for the exact syntax.

### Note

The cache name is a token of your choosing. Typically, the name reflects the database type as it does in the preceding examples. However, the cache name is the value that must be passed to Lua database functions when querying a datasource. *Note*: "Cache name" and "datasource name" are used interchangeably throughout the Message Systems documentation.

Datasource queries are run in one of the thread pools (almost always the IO thread pool, as the data fetch is an IO-bound operation), which allows Momentum to continue serving other sessions while a query completes. As of version 3.0.15, you may specify the threadpool using the `pool` option.

### Character Encoding Support

Where possible, the datasource layer determines the charset encoding of the data and stores it in the cache in the form requested by the first query for that data. This will usually be for UTF-8 data, since this is the encoding form used by Sieve.

If a driver is unable to determine the charset, Momentum will assume that the data is encoded using ISO-8859-1 (latin-1). You may override this assumption by setting the `assume_charset` option in the datasource declaration:

`assume_charset = "iso-2022-jp"`
### Policy Script Support

For instructions on accessing datasources from scriptlets see [the section called “The `msys.db.query` Function”](implementing.policy.scriptlets#policy.scriptlets.msys.db.query "The msys.db.query Function"), [the section called “The `msys.db.fetch_row` Function”](implementing.policy.scriptlets.php#policy.scriptlets.msys.db.fetch_row "The msys.db.fetch_row Function") and [Section 5.2.6, “Querying a Database”](implementing.policy.scriptlets.php#policy.scriptlets.query.db "5.2.6. Querying a Database").

When loaded, the ds_core module extends the Sieve subsystem to allow scripts to be loaded from a datasource cache. This applies to scripts configured in the module configuration stanza as well as to scripts included dynamically via [ec_include](sieve.ref.ec_include "ec_include").

Additionally, ds_core provides a set of Sieve actions that can be used to perform queries as part of your site policy. See [ds_fetch](sieve.ref.ds_fetch "ds_fetch") for more details.

### 14.30.1. Configuration Options

The following options can be specified on a per-cache basis:

<dl className="variablelist">

<dt>cache_life</dt>

<dd>

Specifies the time-to-live of a given cache entry, in seconds. The default value is `3600` seconds.

</dd>

<dt>cache_size</dt>

<dd>

The maximum number of cache entries to store in the cache. During cache maintenance, if the cache size exceeds this amount, the oldest cache entries will be dropped until the cache size returns to the configured size. The default value for this option is `1000`.

</dd>

<dt>max_rows</dt>

<dd>

The maximum number of rows to fetch while performing a query. This acts as a brake to prevent accidental (or perhaps deliberate) querying of a very large number of rows from a database. The default value is `100` rows. To return an unlimited number of rows use `-1`. *Note*: When querying a CSV data source you have no option but to return all rows. Otherwise, setting this value to `-1` is not recommended.

</dd>

<dt>no_cache</dt>

<dd>

When set to `true`, query results will not be cached. The default value for this option is `false`.

</dd>

<dt><a name="modules.ds_core.pool"></a>pool</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.15.

Systems with a large IO pool may run into an issue whereby Momentum maintains many idle connections to the datasource or datasources that are in use; this can potentially starve other machines of connections. By specifying the thread pool that is used, you can configure the datasource thread [pool](modules.ds_core#modules.ds_core.pool) size independently of the IO pool size, dispatching datasource queries on a per-datasource basis. The threadpool referenced by this option must be defined. For more information about threadpools see [threadpool](conf.ref.threadpool.php "threadpool"). The default value for this option is `IO`.

</dd>

<dt>serialized</dt>

<dd>

When set to `true`, query results will be serialized and published across the cluster. This is most effective when used with queries that are expensive to run, and where the results are likely to be needed on more than one node of the cluster within a short time span. To share a cache across a cluster you also need to add a replicate stanza to the cluster module. For an example see [Section 7.7.1.6, “Replicated Caches”](cluster.config.replication#cluster.replicatedcache "7.7.1.6. Replicated Caches"). The default value for this option is `true`.

You are encouraged to create a separate cache dedicated to this type of query, should you require it.

</dd>

<dt>uri</dt>

<dd>

The `uri` contains all the details required to locate a driver and connect to the data source. There is no universal format, except that the start of the string, up to the first colon (`:`) character specifies the driver name.

Multiple `uri` lines can be provided, and will be used in a round-robin fashion for simplistic load balancing. It is important that all such datasources return identical results, since each URI will be chosen sequentially. All URI's are considered equivalent (i.e. no one URI can be marked as "preferred"), and no failover action will be attempted (except in the sense that "dead" connections will be skipped).

The `uri` option is an array and is configured as shown below:

```
Datasource "mssql" {
  uri  = (
           "odbc:DSN=sqlserver;UID=user;PWD=pass"
           "odbc:DSN=sqlserver2;UID=user2;PWD=pass3"
           "odbc:DSN=sqlserver3;UID=user3;PWD=pass3"
           "odbc:DSN=sqlserver4;UID=user4;PWD=pass4"
         )
  cache_size = 200
  cache_life = 360
}
```
</dd>

</dl>

### 14.30.2. ds_core Management Using Console Commands

The datasource module provides the following console commands:

**14.30.2.1. flush**ds_core flush *`cache_name`*

The ds_core flush command takes a single argument specifying the name of the cache to flush. Find below the output of the command **ds_core flush sqlite** :

`flushed 2 entries from cache 'sqlite'`

In this case `sqlite` corresponds to a cache defined in the following way:

<a name="example.ds_core.sqlite.cache.3"></a>

**Example 14.52. "sqlite" cache**

```
Datasource "sqlite" {
    uri = ( "sqlite:/path/to/db" )
}
```

Datasources are not modules so you cannot determine their names using the **module list**      command. Use **config locate datasource**                   instead.

**14.30.2.2. stats**`ds_core stats`

For each cache, this command prints statistics including the hit rate, number of cache hits and misses during lookups, number of inserts, and number of deletions. The deletions are broken down into entries explicitly (manually) deleted, those deleted due to time-to-live (ttl) expiration as configured via `cache_life`, and least-recently-used (lru) items deleted due to the `cache_size` being reached.

```
13:07:12 ecelerity> ds_core stats
cache name                      lookups %                  deletions %
                       elts  hit miss pend  total  inserts man ttl lru  total
---------------------- ----- -------------------- -------- ------------------
ecdb
                           2  72  28   0      335        6   0 100   0      4
```

*Note*: Cache names may be truncated; only the first 10 characters are shown.

### 14.30.3. Datasource Drivers

Datasource drivers are loaded automatically as needed and do not need to be explicitly included in your configuration. The following drivers are available:

**14.30.3.1. SQLite**

The SQLite driver provides access to any SQLite database. This driver is installed by default. The following code includes the SQLite driver and sets a SQLite database as the datasource for the Sieve editor.

<a name="example.ds_core.sqlite.3"></a>

**Example 14.53. SQLite datasource**

```
Datasource "sieveeditor" {
  uri = ( "sqlite:/opt/ecapache/data/sieve_db" )
}
```

The *`uri`* consists of the string `sqlite:` followed by the path to the SQLite database.

The SQLite driver accepts `?` and `:named` style parameters in prepared statements.

**14.30.3.2. ODBC**<a class="indexterm" name="idp19645792"></a>

The ODBC driver provides database access to any data source for which an ODBC compliant driver is installed.

<a name="example.ds_core.odbc.3"></a>

**Example 14.54. odbc datasource**

```
Datasource "mssql" {
  uri = ( "odbc:DSN=sqlserver;UID=user;PWD=pass" )
  cache_size = 200
  cache_life = 360
}
```

### Note

Installation of the ODBC module is optional. Install msys-ecelerity-odbc-*`TYPE.version.os.arch`*.rpm if you wish to add support for ODBC.

The *`uri`* consists of the string `odbc:` followed by any valid ODBC connection string; the connection string is passed directly to the ODBC driver manager to establish the connection.

The ODBC driver accepts `?` and `:named` style parameters in prepared statements.

### Note

There is an ODBC-specific internal parameter, `long_threshold`, used for determining whether a field data type should be treated as a long value. Changing this parameter without the guidance of support is not recommended.

**14.30.3.2.1. unixODBC**

The unixODBC package files are stored in directories below the `/opt/msys/3rdParty` directory. The library files are found in the `lib` directory, (`lib64` on 64 bit systems) and the executables in the `bin` directory.

If you are installing a driver or configuring an ODBC DSN, use the **odbcinst** command found in the `bin` directory. For information on using this tool see [http://www.unixodbc.org/odbcinst.html](http://www.unixodbc.org/odbcinst.html).

In order for unixODBC to work with Momentum the configuration files, `odbc.ini` and `odbcinst.ini`, must be installed in the `/opt/msys/3rdParty/etc` directory.

The Message Systems unixODBC package automatically adds itself to the appropriate unixODBC configuration files when installed. Likewise, when it is removed.

The configuration of a unixODBC datasource is identical to the configuration of an ODBC datasource.

**14.30.3.3. LDAP**<a class="indexterm" name="idp19667280"></a>

The LDAP driver provides access to LDAP directories, including Microsoft ActiveDirectory. The connection URI should be an [RFC 2255](http://www.ietf.org/rfc/rfc2255.txt) compliant LDAP URL. Briefly, the format for RFC 2255 URLs is `ldap://host:port/dn?attributes?scope?filter?extensions`

Queries are also specified in the form of an LDAP URL, any components of the search criteria that are not specified in the query string are taken from the connection URI. Momentum supports the RFC 2255 `bindname` extension for specifying the DN to use for a bind, the commonly used `x-bindpw` extension to specify the associated password, and the additional `x-ignore-referrals=(0|1)` extension to allow disabling following referrals. If you wish to have the DN of the resulting object returned as results of the query, you may use the 'x-return-dn' extension to define the attribute name to assign to the DN in the resulting data set.

By default, LDAP connections are cached and re-used for subsequent queries with the same hostname, port and bind parameters. If one wishes to disable such caching, the `x-disable-connection-cache=true` extension may be used.

<a name="example.ds_core.ldap.3"></a>

**Example 14.55. ldap datasource**

```
Datasource "mydirectory" {
  uri = ( "ldap://10.80.116.112" )
  cache_size = 200
  cache_life = 360
}
```

The following Sieve snippet demonstrates referencing an ActiveDirectory server to perform recipient validation. Since the host and port are not specified in the query, the values specified in the cache configuration are used instead. This query will retrieve the `cn`, `mail` and `displayName` attributes for the recipient of the current message. Momentum will bind to the LDAP server using `CN=user,OU=unit` for the distinguishing name and `password` for the password.

Note that the "ldap://..." line has been wrapped for display purposes; it should occupy a single line in your script.

```
$results = ds_fetch_hash "mydirectory"
  "ldap:///DC=subdomain,DC=example,DC=com?cn,mail,displayName?sub?
  (&(&(mailnickname=*)(|(&(objectCategory=person)(objectClass=user)
  (!(homeMDB=*))(!(msExchHomeServerName=*)))(&(objectCategory=person)
  (objectClass=user)(|(homeMDB=*)(msExchHomeServerName=*)))
  (&(objectCategory=person) (objectClass=contact))(objectCategory=group)
  (objectCategory=publicFolder)))
  (proxyAddresses=SMTP:%{rcptto_localpart}@%{rcptto_domain}))
  ?bindname=CN=user%2cOU=unit,x-bindpw=password";
```

The LDAP driver accepts `$named` parameters, where `$name` corresponds to the parameter named `name`. An alternate form of the query mentioned above, using parameters, might look like this:

```
$rcpt = envelope "from";
$params = hash_create;
hash_set $params "rcpt" $rcpt;
hash_set $params "username" "CN=user,OU=unit";
hash_set $params "passwd" "password";

$results = ds_fetch_hash "mydirectory"
  "ldap:///DC=subdomain,DC=example,DC=com?cn,mail,displayName?sub?
  (&(&(mailnickname=*)(|(&(objectCategory=person)(objectClass=user)
  (!(homeMDB=*))(!(msExchHomeServerName=*)))(&(objectCategory=person)
  (objectClass=user)(|(homeMDB=*)(msExchHomeServerName=*)))
  (&(objectCategory=person) (objectClass=contact))(objectCategory=group)
  (objectCategory=publicFolder)))
  (proxyAddresses=SMTP:$rcpt))
  ?bindname=$username,x-bindpw=$passwd" $params;
```

Note that the parameters are automatically escaped correctly for use in the LDAP URL.

For scripting examples that use Lua see:

*   [msys.db.execute](lua.ref.msys.db.execute "msys.db.execute")

*   [msys.db.query](lua.ref.msys.db.query "msys.db.query")

*   [msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row")

The extensions supported by ds_ldap are:

<dl className="variablelist">

<dt>bindname</dt>

<dd>

DN to use for a bind.

</dd>

<dt>x-bindpw</dt>

<dd>

Password associated with the `bindname`.

</dd>

<dt>x-connect-timeout</dt>

<dd>

A number specifying the time-out in seconds for connecting to the LDAP server. If this time is exceeded, the query fails. The default is determined by your Operating System, and is typically of the order of several minutes.

</dd>

<dt>x-disable-connection-cache</dt>

<dd>

If `true`, disable re-use of LDAP server connections for queries with the same server parameters (see above).

</dd>

<dt>x-ignore-referrals</dt>

<dd>

If `0`, disables following referrals.

</dd>

<dt>x-ldap-version</dt>

<dd>

A number specifying the LDAP protocol version to use.

### Note

LDAPS queries that don't specify `x-ldap-version=3` are liable to fail.

</dd>

<dt>x-return-dn</dt>

<dd>

The attribute name to assign to the DN in the resulting data set.

</dd>

<dt>x-search-timeout</dt>

<dd>

A number in seconds that specifies: how long ds_ldap should wait for a query to complete; how long the server should spend processing the query (the search time limit). If this time is exceeded, the query fails. The default is 60 seconds.

</dd>

</dl>

The configuration options supported by ds_ldap are:

<dl className="variablelist">

<dt>connection_cache_size</dt>

<dd>

Maximum number of connections to store in the cache. Once this limit is reached, the creation of a new connection will cause an existing connection to be closed, so that the new connection can be added to the cache.

</dd>

<dt>connection_cache_life</dt>

<dd>

Maximum age of a connection in the cache, after which the connection is closed (and re-opened, if necessary). This option is specified in seconds.

</dd>

</dl>

**14.30.3.4. Configuring Authentication with Active Directory**

**Configuration Change. ** This feature is available as of version 3.2.

To authenticate using Active Directory, create a configuration such as the following:

<a name="module.ds_core.ldap.authentication.example"></a>

**Example 14.56. Active Directory authentication configuration**

```
Datasource "ldap" {
  uri = ( "ldap://example.com" )
  no_cache = true
}

ds_ldap {}

auth_ds {
  Scheme "ecauth" {
    Authenticate {
      query =
"ldap:///????bindname=CN=$user%2cCN=Users%2cDC=int%2cDC=omniti%2cDC=net,x-bindpw=$pass"
      cache = "ldap"
      map = [
        user = "%{username}"
        pass = "%{password}"
      ]
    }
  }
}
Control_Listener {
  AuthLoginParameters = [
    uri = "ecauth://"
  ]
  Enable_Authentication = "true"
  Enable_Authorization = "false"
  AuthorizationParameters = [
    uri = "ecauth://"
  ]
  Listen "/tmp/2025" {
    Enable_Authentication = "false"
  }
  Listen "127.0.0.1:2025" {
  }
}
```

### Note

Momentum 3.2.2 supports authenticating the web UI, configuration system and command console (ec_console) against an Active Directory system using the Internet standard LDAP. For details see [Section 2.3, “Setting Up Active Directory Authentication With Momentum 3.2.2”](conf.ldaps "2.3. Setting Up Active Directory Authentication With Momentum 3.2.2").

The Momentum LDAP driver supports a "bindname" extension for overriding the DN, user, and password used to connect to LDAP. The DN specified in the LDAP query is standard; in [Example 14.56, “Active Directory authentication configuration”](modules.ds_core#module.ds_core.ldap.authentication.example "Example 14.56. Active Directory authentication configuration") you'll notice the substitutions for both `$user` and `$pass`. The only non-standard additional bit is `x-bindpw`, which is again supported by our LDAP driver.

**Limiting Access by Roles**

You can limit access to specific roles defined in Active directory by creating an LDAP query to specify only a single group or multiple groups in the query. That query would look something like:

`(&(objectClass=user))(memberOf=cn=$user,cn=GROUPNAME,ou=ORGUNIT,dc=DCPART))`

To a degree the format depends upon on how the LDAP database is set up, but generally speaking the user's name is the most specific part of the common name.

### Note

If you choose to authenticate using Active Directory, you *cannot* also authenticate using the Momentum PostgreSQL database. If you wish to use both, you must consult with professional services. Also note that the User Management option on the Administration page of the web UI is unavailable if you choose to authenticate against Active Directory.

**14.30.3.5. ds_ldap Management Using Console Commands**

The ds_ldap module can be controlled through the `ec_console`; the following commands are available:

**14.30.3.5.1. ds_ldap show connection cache stats**

This command outputs statistics relating to the connection cache.

**14.30.3.5.2. ds_ldap flush connection cache**

This command removes all entries from the connection cache.

**14.30.3.6. CSV**<a class="indexterm" name="idp19740272"></a>

The CSV driver provides access to any comma-separated file. This driver is installed by default. The following code includes the CSV driver and defines the properties of the CSV cache.

<a name="example.ds_core.csv.3"></a>

**Example 14.57. csv datasource**

```
Datasource "csv" {
  uri = ( "csv:" )
  max_rows = -1
}
```

In this example the *`uri`* parameter only defines the protocol so the data source must be specified in your script. For example:

`$data = ds_fetch_flat "csv" "/opt/msys/ecelerity/etc/ds_csv.csv?cols=2";`

Since you must use the `ds_fetch_flat` function with a CSV data source and since this function returns all rows, the `max_rows` parameter is set to `-1`, indicating that an unlimited number of rows are being returned.

Because CSV data sources return all rows, they are useful for look-up operations where every record must be examined. For an example of a CSV file used as the source for CIDR data see [Section 14.16, “cidrdb – CIDRDB”](modules.cidrdb "14.16. cidrdb – CIDRDB").

For scripting examples that use Lua see:

*   [msys.db.execute](lua.ref.msys.db.execute "msys.db.execute")

*   [msys.db.query](lua.ref.msys.db.query "msys.db.query")

*   [msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row")

**14.30.3.7. PostgreSQL**<a class="indexterm" name="idp19756048"></a>

The PostgreSQL driver provides access to any PostgreSQL database. The following code includes the PostgreSQL driver and configures a cache to query against a PostgreSQL database.

<a name="example.ds_core.postgresql.3"></a>

**Example 14.58. PostgreSQL datasource**

```
Datasource "pgsql" {
    uri = ( "pgsql:host=example.com;dbname=db_name;user=user_name;»
    password=secret;port=5432" )
}
```

This data source also makes use of the other configuration parameters described in [Section 14.30.1, “Configuration Options”](modules.ds_core#modules.ds_core.configuration "14.30.1. Configuration Options").

In version 3.0, the PostgreSQL driver is installed by default and a PostgreSQL data source is used for web console and system console authentication. For more information see [Section 14.7, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds "14.7. auth_ds – Datasource based SMTP Authentication").

For scripting examples that use Lua see:

*   [msys.db.execute](lua.ref.msys.db.execute "msys.db.execute")

*   [msys.db.query](lua.ref.msys.db.query "msys.db.query")

*   [msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row")

**14.30.3.8. Constant Database (CDB)**<a class="indexterm" name="idp19769792"></a>

The CDB driver provides access to any CDB database. This driver is installed by default. The following code includes the CDB driver and configures a cache to query against a CDB database.

<a name="example.ds_core.cdb.3"></a>

**Example 14.59. cdb datasource**

```
Datasource "cdb" {
  uri = ( "cdb:/path/to/data.cdb" )
}
```

The *`uri`* consists of the string `cdb:` followed by the path to the CDB database. You need not specify the path to your database when defining the cache; if you wish you can instead specify it in a Sieve script. For example:

```
$domain = envelope :domain "to";
$params = hash_create;
hash_set $params "domain" $domain;
$result = ds_fetch "cdb" "/opt/msys/ecelerity/etc/bl.cdb?$domain" $params;
```

This code example also demonstrates that the CDB driver accepts `$named` parameters, where `$domain` corresponds to the parameter named `domain`.

For scripting examples that use Lua see:

*   [msys.db.execute](lua.ref.msys.db.execute "msys.db.execute")

*   [msys.db.query](lua.ref.msys.db.query "msys.db.query")

*   [msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row")

**14.30.3.9. I/O Wrapper**

The I/O Wrapper driver allows the contents of a file to be queried and returned as a single row consisting of a single column. While this doesn't sound hugely impressive on its own, it provides access to any resource for which an IO wrapper exists. For instance, loading the http_io module provides support for pulling data over HTTP.

The I/O wrapper driver is installed by default and supports `$named` style parameters.

<a name="example.ds_core.iowrapper.3"></a>

**Example 14.60. iowrapper datasource**

```
Datasource "io" {
  uri = "iowrapper:"
  cache_size = 200
  cache_life = 360
}
```

**14.30.3.10. MySQL**

The MySQL driver provides access to a MySQL database. Go to the Message Systems support website and download the MySQL driver suitable to your operating system, architecture and version of Momentum. Install this driver by issuing the command: **rpm -Uvh mysy-ecelerity-mysql-*`version.os.arch`*.rpm**

Add the following to your configuration:

<a name="example.ds_core.mysql.3"></a>

**Example 14.61. MySQL datasource**

```
Datasource "mysqldb" {
  uri = ( "mysql:host=localhost;port=3306;dbname=ecmail; »
  user=user;password=password" )
}
```

For scripting examples that use Lua see:

*   [msys.db.execute](lua.ref.msys.db.execute "msys.db.execute")

*   [msys.db.query](lua.ref.msys.db.query "msys.db.query")

*   [msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row")

### Note

For licensing reasons the MySQL module does not ship with Momentum and must be downloaded separately.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.domainkeys)  | [Up](modules.php) |  [Next](modules.ec_logger.php) |
| 14.29. domainkeys – Yahoo! DomainKeys  | [Table of Contents](index) |  14.31. ec_logger – Momentum-Style Logging |
