| [Prev](modules.as_logger)  | Chapter 14. Modules Reference |  [Next](modules.auth_radius.php) |

## 14.7. auth_ds – Datasource based SMTP Authentication

<a class="indexterm" name="idp17847552"></a>

**Configuration Change. ** This module is loaded automatically as required and does not need to be explicitly included.

With this module Momentum can provide authenticated SMTP sessions via SMTP AUTH by using any supported datasource as the authentication bridge. When a user connects to Momentum, if authentication is supported, it will attempt to authenticate the user by issuing a query against the configured datasource. If the result of that query is "true" then the user was successfully identified. Since the module uses the datasource layer it can take advantage of the built-in caching mechanism to avoid putting pressure on your authentication data stores. The ds_core module and datasource drivers are loaded automatically as required and do not need to be explicitly included. See [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core") for more information.

The `webui-common.conf` file has a working auth_ds configuration that is enabled by default.

You may define multiple authentication schemes against different datasources, and configure your listeners to use a different scheme depending on the connecting IP address.

### Note

Any hosts specified by the `relay_hosts` option are not subject to any SMTP authentication that you may have implemented. Likewise when `open_relay` is set to `true`. For more information see [relay_hosts](conf.ref.relay_hosts "relay_hosts").

When a user attempts to authenticate, the SMTP listener routes the authentication attempt to the authentication module, which then uses the query that you've configured. If the results of the query are not already known, a query is run asynchronously to obtain them, and the SMTP session is suspended, allowing Momentum to continue to service other sessions. When the results come back, the first column of the first row is inspected; if it is a non-zero value, then the authentication is considered successful.

If you're using a datasource, such as LDAP, where it is not possible to guarantee the ordering of the results returned, you may add a `password_column` option to the `auth_ds` module configuration to specify which named column holds the password in the result set.

<a name="example.auth_ds.password_column.3"></a>

**Example 14.10. password_column**

```
auth_ds {
  Scheme "ecauth" {
    Authenticate {
      ...
      # this scheme returns a password in the column named "password"
      password_column = "password"
      returns_password = "true"
    }
  }
}
```

<a name="example.auth_ds.configuration"></a>

**Example 14.11. auth_ds Configuration**

```
auth_ds {
  Scheme "auth" {
    Authenticate {
      query = "SELECT password FROM webconsole.users WHERE username = :user"
      cache = "auth"
      map = [
        user = "%{username}"
      ]
      type = "md5"
      returns_password = "true"
      password_column = "password"
    }
    QueryGroups {
      query = "SELECT groupname FROM webconsole.groupassignments WHERE username = :user"
      cache = "auth"
      group_column = "groupname"
      map = [
        user = "%{username}"
      ]
    }
    EnumGroups {
      query = "SELECT role from webconsole.roles"
      cache = "auth"
      group_column = "role"
    }
  }
}
```

### Configuration Options

The following options are available in authentication schemes:

<dl className="variablelist">

<dt>cache</dt>

<dd>

The datasource cache to execute the query against.

</dd>

<dt>EnumGroups</dt>

<dd>

This stanza enumerates all possible groups or roles.

</dd>

<dt>map</dt>

<dd>

The parameter expansion map to use.

</dd>

<dt>query</dt>

<dd>

The query to be executed.

</dd>

<dt>QueryGroups</dt>

<dd>

All the groups associated with the user.

</dd>

<dt>type</dt>

<dd>

The encryption type for passwords in the data store. Enabled this by setting the type parameter within the ecauth block. If this is unspecified you can extract this from the data store as well using the `type_column` option.

The type parameter can take the values "ucrypt" and "md5" specifying Unix style and digest md5 style respectively.

</dd>

<dt>type_column</dt>

<dd>

The column name containing the encryption type for a given password. This corresponds with a `type_map` specifier.

</dd>

<dt>type_map</dt>

<dd>

A dictionary that maps a column to an encryption type. See [The `type_map` Option](modules.auth_ds#modules.auth_ds.type_map "The type_map Option") for complete information.

</dd>

<dt>returns_password</dt>

<dd>

Whether or not the query returns a password for validation inside the module, or simply a truth value (for validation inside the DB).

</dd>

</dl>

**EnumGroups and QueryGroups. ** Typically the EnumGroups and QueryGroups stanzas are used with the built-in webconsole tables. They can also be used to plug in to an external authentication system defined in an Authorization stanza. For example, the EnumGroup stanza allows you to interrogate the groups and then present those in a list for assigning permissions via an Authorization stanza. See also [authorization](conf.ref.authorization "authorization").

<a name="modules.auth_ds.type_map"></a>**The `type_map` Option. ** Type maps contain key-value pairs where the key is the contents of the column identified by the `type_column` option, and the value is one of the following:

<dl className="variablelist">

<dt>clear</dt>

<dd>

Cleartext

</dd>

<dt>ucrypt</dt>

<dd>

Unix crypt

</dd>

<dt>sha1_hex</dt>

<dd>

SHA1 encryption (hex representation)

</dd>

<dt>sha1_base64</dt>

<dd>

SHA1 encryption (base64 representation)

</dd>

<dt>ssha1</dt>

<dd>

Seeded SHA1 encryption

</dd>

<dt>md5</dt>

<dd>

MD5 encryption

</dd>

<dt>md5_hex</dt>

<dd>

MD5 encryption (hex representation)

</dd>

<dt>md5_base64</dt>

<dd>

MD5 encryption (base64 representation)

</dd>

<dt>hmac_md5</dt>

<dd>

HMAC MD5 encryption

</dd>

<dt>digest-md5</dt>

<dd>

Digest-MD5 encryption

</dd>

<dt>smd5</dt>

<dd>

Seeded MD5 encryption

</dd>

<dt>rfc2307</dt>

<dd>

RFC 2307 encryption specifiers (crypt, md5, smd5, sha, ssha)

</dd>

</dl>

### Parameter expansion maps

Use parameter expansion maps to map authentication parameters into your query. The maps consist of parameter names that map to interpolated value strings based on the authentication parameters listed below. This approach allows Momentum to take advantage of native prepared statement support that may be present in the underlying datasource drivers, while still allowing you a certain amount of freedom for string building.

The right hand side of the expansion maps consists of a string value. The string can contain `%{parametername}`, where `parametername` corresponds to one of the parameters listed below. When the query is executed, the parameter name is expanded to its value before being passed on to the data source. You may interpolate multiple parameters in a single string in this way, if desired.

<dl className="variablelist">

<dt>crypt</dt>

<dd>

Describes the level of crypto in use. Can be one of `clear` (for LOGIN), `md5`, `hmac_md5` (for CRAM-MD5) or `digest-md5` (for DIGEST-MD5).

</dd>

<dt>username</dt>

<dd>

The username.

</dd>

<dt>uri</dt>

<dd>

The uri specified in the listener configuration.

</dd>

<dt>password</dt>

<dd>

The password. This may be cleartext or it may have some level of crypto applied to it, according to the `crypt` parameter.

</dd>

<dt>nonce</dt>

<dd>

The nonce for MD5 based authenticators.

</dd>

<dt>realm , digest-uri</dt>

<dd>

Parameters for DIGEST-MD5 based auth.

</dd>

</dl>

### 14.7.1. Authenticating against MySQL

The following configuration excerpt demonstrates how to configure Momentum to authenticate against MySQL:

<a name="example.auth_ds.mysql.3"></a>

**Example 14.12. Using MySQL as a data store**

```
# Define a cache named authdb
# that talks to a mysql server
Datasource "authdb" {
  uri = ( "mysql:host=localhost;port=3306;dbname=ecauth;user=root;password=password" )
}

# Load the authentication module
auth_ds {
  # register "mysqlauth" as an authentication scheme
  # this is referenced by the Esmtp_Listener below.
  Scheme "mysqlauth" {
    Authenticate {
      # This query will return a row containing the value 1 if
      # the username and password match up
        query = "SELECT 1 AS ALLOW FROM users WHERE user_name = :user and
          password = encrypt(:pass, PASSWORD)"
      # The query will be presented against the MySQL cache
      cache = "authdb"
      # This map is used to resolve the placeholders in the query by substituting
      # the username and password supplied by the user.

      map = [
        user = "%{username}"
        pass = "%{password}"
      ]
    }
  }
}

ESMTP_Listener {
  Listen ":25" {
    SMTP_Extensions = (
      "ENHANCEDSTATUSCODES"
      "STARTTLS"
      "AUTH LOGIN"
    )
    AuthLoginParameters = [uri = "mysqlauth://"]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH LOGIN" )
  }
}
```

### Note

For licensing reasons the MySQL module does not ship with Momentum and must be downloaded separately. For instructions on downloading and installing this module see [Section 14.30.3.10, “MySQL”](modules.ds_core#modules.ds_core.ds_mysql "14.30.3.10. MySQL").

### 14.7.2. Authentication against LDAP

The precise configuration used to implement LDAP based authentication varies depending on your LDAP schema. If you are migrating from our older LDAP auth module, the authentication concept was that the username and password from the SMTP session would be used as the bind name and password used to establish a connection to the LDAP server. If the bind attempt was successful, then the user was deemed to have been authenticated. With *this* module, we also need to obtain results from an LDAP query.

The suggested approach for implementing LDAP authentication using the datasource layer is to craft an LDAP query that returns the common name of the user you are authenticating.

In the case of an LDAP directory like the Openwave directory, you will need to be able to specify a type_map so that the server can correctly encrypt the provided password for comparison. The following example shows integration against an openwave directory:

<a name="example.auth_ds.ldap.3"></a>

**Example 14.13. Authenticating using LDAP**

```
auth_ds {
  Scheme "myscheme_openwave" {
    Authenticate {
      query = "ldap:///?mailpassword,mailpasswordtype?sub? »
              (|(maillogin=$user)(mail=$user)(mailalternateaddress=$user))"
      cache = "openwave_directory"
      returns_password = "true"
      password_column = "mailpassword"
      type_column = "mailpasswordtype"
      map = [
        user = "%{username}"
      ]
      type_map = [
        C = "clear"
        U = "ucrypt"
        H = "sha1_hex"
        S = "ssha1"
        M = "smd5"
      ]
    }
  }
}
```

The LDAP driver supports a bind-only mode that allows connection and authentication without execution of a query. If it succeeds, it returns a "bind" column with a value of 1\. This is useful in cases where it is desirable to pass the credentials through from SMTP authentication to the LDAP directory, for example, to eliminate the need to change the LDAP query if authentication settings change.

The following example shows how to use the bind only feature.

<a name="example.auth_ds.bind.3"></a>

**Example 14.14. Using the bind-only feature**

```
auth_ds {
  Scheme "ldapauthscheme" {
    Authenticate {
      query = "ldap://ldaphostname/????bindname=uid=$user%2Cou=people »
              %2Cdc=example%2Cdc=com,x-bindpw=$pass"
      cache = "ldapauth"
      map =  [
        user = "%{username}"
        pass = "%{password}"
      ]
    }
  }
}
```

| [Prev](modules.as_logger)  | [Up](modules.php) |  [Next](modules.auth_radius.php) |
| 14.6. as_logger – Audit series logger  | [Table of Contents](index) |  14.8. auth_radius – RADIUS based SMTP Authentication |
