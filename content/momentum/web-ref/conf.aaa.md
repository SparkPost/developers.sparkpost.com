|     |     |     |
| --- | --- | --- |
| [Prev](conf.ecelerity.conf)  | Chapter 2. Configuration |  [Next](conf.ldaps.php) |

## 2.2. Authentication, Authorization and Accounting

Momentum can be configured to perform authentication on SMTP and Control connections. Momentum 2.2 introduces an extensible authorization and accounting subsystem that can be configured to restrict access to console commands based on role while recording an audit trail.

### 2.2.1. Configuring inbound SMTP authentication and inbound TLS/SSL

Momentum provides out-of-the-box support for authenticating remote users against a flat-file using LOGIN, DIGEST-MD5 and CRAM-MD5 authentication extensions to SMTP. Additional authentication backends can be plugged into Momentum in the form of authentication modules; Momentum ships with authentication modules for a number of standard datasources, and third-party vendors may provide others. See [Section 14.7, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds "14.7. auth_ds – Datasource based SMTP Authentication") for more details on datasource based authentication modules.

### Note

Any hosts specified by the `Relay_Hosts` option are not subject to any SMTP authentication that you may have implemented. Likewise when `Open_Relay` is set to `true`. For more information see [relay_hosts](conf.ref.relay_hosts "relay_hosts").

**2.2.1.1. DIGEST-MD5 Authentication**

To configure DIGEST-MD5 authentication, you would configure your ESMTP_Listener as shown below. This configures SMTP service on port 25 with a ruleset that matches all clients connecting from any IP address . Inside that ruleset, the AUTH SMTP extension is configured for DIGEST-MD5, using the digest file `/opt/msys/ecelerity/etc/smtp_passwd` as the authentication source. The authentication realm is configured using the optional `realm` parameter; if left unspecified, the hostname of the server is used instead (see [hostname](conf.ref.hostname "hostname")).

```
ESMTP_Listener {
  Listen ":25" {
    AuthDigestMD5Parameters = [
      uri = "digest:///opt/msys/ecelerity/etc/smtp_passwd"
      realm = "my choice of realm"
    ]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH DIGEST-MD5" )
  }
}
```

The digest file referenced by the `uri` parameter, can be created and updated using the **ec_md5passwd** tool, which is documented in [ec_md5passwd](executable.ec_md5passwd "ec_md5passwd").

Upon successful authentication, the authenticated user name is stored in the connection validation context under the `auth_user` key, and the SMTP session will be marked as relayable, setting the connection context variable can_relay = "true". For more information see [Chapter 6, *Validation Context Variables*](policy.context.variables "Chapter 6. Validation Context Variables") .

The results of the authentication attempt (whether it is successful or not) are also recorded and will be used to generate an `Authentication-Results:` header in the mail before it is delivered from Momentum.

**2.2.1.2. CRAM-MD5 authentication**

CRAM-MD5 authentication is configured in a similar way to DIGEST-MD5, except that the password file stores passwords in clear text.

```
ESMTP_Listener {
  Listen ":25" {
    AuthCramMD5Parameters = [
      uri = "file:///opt/msys/ecelerity/etc/cram_md5_passwd"
    ]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH CRAM-MD5" )
  }
}
```
**2.2.1.3. Clear Text LOGIN Authentication**

The LOGIN mechanism stores passwords in clear text locally and transmits the username and password credentials in clear text over the network. Its use is discouraged unless TLS is also configured on the listener. Configuration is similar to CRAM-MD5:

```
ESMTP_Listener {
  Listen ":25" {
    AuthLoginParameters = [
      uri = "file:///opt/msys/ecelerity/etc/unsafe_passwd"
    ]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH LOGIN" )
  }
}
```
**2.2.1.4. Plain Text Authentication**

Plain text authentication is handled in the same way as clear text:

```
ESMTP_Listener {
  Listen ":25" {
    SMTP_Extensions = ("AUTH PLAIN")
    AuthPlainParameters = [
      log_authentication = "true"
      uri = "file:///opt/msys/ecelerity/etc/plain_password"
    ]
  }
}
```

The `file://` authentication storage scheme references the path to a plain text password file. Within this file lines starting with a ‘`#` are treated as comments and are ignored. The lines are divided into two fields separated by a ‘`:` character where the first field is the username and the second is the plain text password.

**2.2.1.5. SMTP Authentication Accounting**

You can enable logging of SMTP authentication events by setting the `log_authentication` to `true` in your SMTP authentication configuration block.

```
ESMTP_Listener {
  Listen ":25" {
    AuthCramMD5Parameters = [
      uri = "file:///opt/msys/ecelerity/etc/cram_md5_passwd"
      log_authentication = "true"
    ]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH CRAM-MD5" )
  }
}
```

However, you still need to configure an account log logging module in order to record the accounting information. When log authentication is enabled and the `acctlog` option is set in your `ec_logger` module, a line is written to the account log for every authorization event. Each command and its authorization status will be logged to the account log. If a command is allowed, the role that matched will be included in the log entry. For information on configuring an accounting log and its format see [Section E.1.3, “The `acctlog.ec` Format”](log_formats.version_3#log_formats.acctlog3 "E.1.3. The acctlog.ec Format").

**2.2.1.6. Inbound TLS**

Transport Layer Security (TLS) can be easily configured on an SMTP listener using the following configuration snippet:

```
Esmtp_Listener {
  Listen ":25" {
    TLS_Certificate = "/path/to/cert.pem"
    TLS_Key = "/path/to/key.pem"
    TLS_Client_CA = "/path/to/clientca.bundle"
    TLS_Ciphers = "DEFAULT"
    TLS_Verify_Mode = "require"
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "STARTTLS" )
  }
}
```

The `TLS_Key` and `TLS_Certificate` parameters specify which server certificate will be presented by Momentum to connecting clients, and the optional `TLS_Client_CA` parameter specifies a set of issuing certificate authorities that will be used to validate client certificates. The `TLS_Verify_Mode` option can be set to `require` or `none`. When set to `none`, if the SMTP client presents a certificate, it is ignored. When set to `require`, the SMTP client must present a certificate. When set to anything else, the client certificate will be verified if it is presented. By default no certificate is required.

If client certificate verification fails, the SMTP session does not terminate. The TLS status is stored in predefined context validation variables so it is possible to drive TLS policy from policy scripts. You can use this to reject messages when client verification failed. For more information regarding the TLS-related context variables see [Chapter 6, *Validation Context Variables*](policy.context.variables "Chapter 6. Validation Context Variables") .

**2.2.1.7. Inbound SSL**

Secure Sockets Layer (SSL) can also be configured on an SMTP listener using the following configuration snippet:

```
Esmtp_Listener = {
  Listen ":465" {
    Use_SSL = true
    TLS_Certificate = "/path/to/cert.pem"
    TLS_Key = "/path/to/key.pem"
    TLS_Client_CA = "/path/to/clientca.bundle"
    TLS_Ciphers = "DEFAULT"
  }
}
```

SSL Listeners function similarly to STARTTLS Listeners, except that connections are handed up to SSL immediately. For this reason, SSL is mutually exclusive with STARTTLS and cannot be configured on the same listener. The recommended configuration is to have any SSL listeners on separate ports from standard or STARTTLS listeners.

### 2.2.2. Configuring Authentication for the Control Listener

Authentication can also be configured for the control listener by using the authentication modules. For example:

```
Control_Listener {
  Listen /tmp/2025 {}
  Listen ":2025" {
    AuthDigestMD5Parameters = [
      uri = digest:///opt/msys/ecelerity/etc/console_passwd
    ]
  }
}
```

In this case, `DIGEST-MD5` is used to authenticate users who try to connect to the system console over TCP/IP rather than by using a Unix socket.

The digest file referenced by the `uri` parameter, can be created and updated using the **ec_md5passwd** tool, which is documented in [ec_md5passwd](executable.ec_md5passwd "ec_md5passwd").

The `digest://` auth storage scheme references the path to an htdigest compatible password file. Lines starting with a ‘`#` are treated as comments and are ignored. The lines are divided into three fields separated by ‘`:` characters; `user:realm:password`.

**2.2.2.1. Clear Text LOGIN authentication for a Control_Listener**

The LOGIN mechanism stores passwords in clear text locally and transmits the username and password credentials in clear text over the network. Configuration is similar to DIGEST-MD5:

```
Control_Listener {
  Listen "/tmp/2025" {
    AuthLoginParameters = [
      uri = "file:///opt/msys/ecelerity/etc/unsafe_passwd"
    ]
  }
}
```

Currently there's no TLS/SSL support for control listeners so the use of clear text LOGIN with anything other than Unix domain sockets is discouraged.

The options that are valid within the Listen scope within a Control_Listen are:

*   accept_queue_backlog

*   always_allow

*   always_deny

*   authcrammd5parameters

*   authdigestmd5parameters

*   authloginparameters

*   authorizedparameters

*   concurrency

*   disable_nagle_algorithm

*   duravip_follow

*   duravip_preference

*   enable

*   enable_authentication

*   enable_authorization

*   enable_duravip

*   events_per_iter

*   file_mode

*   listen_backlog

*   pool_name

*   tcp_recv_buffer_size

*   tcp_send_buffer_size

*   timeout

**2.2.2.2. Operating System Authentication**

On Unix systems, the control listener will implicitly authenticate connections made over Unix domain sockets using the system level username of the user connecting to the socket.

By default, the control listener creates Unix domain sockets so that they are only accessible to the user identity you have configured for ecelerity. To enable connections from other users you may specify the file mode using syntax like this:

```
Control_Listener {
  Listen "/tmp/2025" {
    File_Mode = 0666
  }
}
```

With the socket file permission set to `0666`, every user who can log in to the system can use **ec_console** to connect to the server. When using system level authentication on a Unix domain socket, all authentication and authorization events on that connection will be logged to the accounting subsystem. Note that you need to configure a location to log accounting information; you can find more details on the configuration of the accounting log in [Section 14.31, “ec_logger – Momentum-Style Logging”](modules.ec_logger "14.31. ec_logger – Momentum-Style Logging").

**2.2.2.3. Overriding Authentication**

It is possible to override the results of authentication using the `always_allow` and the `always_deny` options. Consider the following code snippet:

```
Control_Listener {
  Listen "127.0.0.1:2025" {
    Enable_Authentication = true
    Peer "127.0.0.1" {
      Always_Allow = true
    }
  }
  ...
}
```

In this case, access to `Peer "127.0.0.1"` is always allowed regardless of the results of authentication. These two options are valid in the listener, listen and peer scopes and have a default value of `false`

The options that are valid within the Peer scope within a Control_Listener scope are:

*   always_allow

*   always_deny

*   authcrammd5parameters

*   authdigestmd5parameters

*   authloginparameters

*   authorizedparameters

*   enable_authentication

*   enable_authorization

*   timeout

**2.2.2.4. Control Listener Accounting**

Accounting is enabled by default for Unix socket connections. However, if you are connecting via TCP/IP then accounting for the control listener will not be enabled unless you explicitly turn it on. To employ an authentication scheme such as `DIGEST-MD5` and to log authentication events use the following syntax:

```
Control_Listener {
  Listen "/tmp/2025" {
    File_Mode = 0666
  }
  Listen ":2025" {
    AuthDigestMD5Parameters = [
      uri = digest:///opt/msys/ecelerity/etc/console_passwd
      log_authentication = "true"
    ]
  }
}
```

Logging of authentication events is enabled by turning on `log_authentication` in the listener configuration *and* configuring an accounting log in the `ec_logger` module. You may also develop your own accounting modules by implementing a hook.

More information about authentication modules can be found at [Section 14.7, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds "14.7. auth_ds – Datasource based SMTP Authentication").

For a listing of all the options valid in the Control_Listener scope see [the section called “Options Valid in the Control_Listener Scope”](operations.console#operations.console.options "Options Valid in the Control_Listener Scope").

### 2.2.3. Control Listener Authorization

The authorization subsystem allows you to restrict the ability to run console commands based on the role of the user. The role membership of the user is determined based on the authenticated username; pluggable authorization modules provide the means to map the username to a number of roles (or groups) than can then be matched against the rules defined in the Authorization stanza. The Authorization stanza is only in effect in the scope where the `enable_authorization` is set to `true`. For more information about the Authorization stanza see [authorization](conf.ref.authorization "authorization").

The logging of authorization events is controlled by the `Enable_Authorization` option; if it is enabled, then authorization is turned on, triggering the authorization logging hook. To capture that information, you also need to configure a logger. The only way to do this in the main product is to configure an `acctlog.ec` log in one of your ec_logger modules. Users may build their own accounting logger if they desire. An example configuration with authorization enabled is shown below:

```
Control_Listener {
  Listen "/tmp/2025" {
    File_Mode = 0666
    AuthorizationParameters = [
      uri = "groups:///opt/msys/ecelerity/etc/console_roles"
    ]
  }

  Listen ":2025" {
    AuthDigestMD5Parameters [
      uri = "digest:///opt/msys/ecelerity/etc/console_passwd"
      log_authentication = "true"
    ]
    Enable_Authorization = "true"
    AuthorizationParameters = [
      uri = "groups:///opt/msys/ecelerity/etc/console_roles"
    ]
  }
}

Authorization {
 Role "root" {
   allow = ( ".*" )
 }
 Role "admin" {
   allow = ( "^config" "^summary$" )
 }
 Role "ec" {
   allow = ( "^flush" )
 }
}
```

This configuration enables the `groups` authorization module that provides Unix style `/etc/group` and Apache style `htgroup` flat file database of role membership.

In this example, `/opt/msys/ecelerity/etc/console_roles` is being used to hold the group membership information.

The contents of the groups file can be one of the following two formats:

`group:user1[,user2,user3, ...]``group:unusedpasswd:user1[,user2,user3, ...]`

The following file asserts that the role `root` applies to users with the username `root` and that the role `admin` applies to users names `serv` and `ec`.

```
root:root
admin:serv,ec
```

In this example, authorization is enabled for all connections over TCP as well as over the Unix domain socket. Note that connections over a Unix domain socket are mapped as loopback addresses when applying the listener ACL to determine which authentication and authorization rulesets to select.

The `Authorization` stanza is used at the global level of `ecelerity.conf` and details the rules for Authorization. The syntax is:

```
Authorization {
   Role "name" {
     allow = ( "list" "of" "patterns" )
   }
   Role "othername" {
     allow = ( "list" "of" "patterns" )
   }
}
```

The authorization system will prevent console commands from being run unless an allow entry is explicitly configured. The authorization process first enumerates the roles/group membership of the user by querying the authorization module. Then the username and each role for the user are compared against the authorization rules; if the username or rolename matches, then the `allow` rules are processed in the order that they are defined.

Each `allow` rule is a Perl compatible regular expression that will be matched against the command being executed. If the regular expression matches, then processing of authorization rules stops and the console command is allowed to execute.

If no rules matched, then the command is not allowed to execute.

**2.2.3.1. Authorization Using the `ecauth` Scheme**

Proper use of an authorization stanza requires that a number of different elements be present. This example shows how using the `ecdb` datasource. The steps are as follows:

*   You must identify a role for the target user within the Authorization stanza. In this example the user, `john`, is allowed to execute **config** commands.

*   The user associated with the defined role must exist in the webconsole users table. You can add a user through the web console. To do this see [Section 3.9, “Administering Users From the Web Console”](web3.users "3.9. Administering Users From the Web Console"). You can also add users using the **ec_uipasswd** command. For more information see [ec_uipasswd](executable.ec_uipasswd.php "ec_uipasswd").

*   The `AuthorizationParameters` option must be defined within the scope of the Control_Listener or within a Listen scope within the Control_Listener. In this example, the `ecauth` authentication scheme is used. This scheme is defined in the auth_ds module in the default `webui-common.conf` file. For easy reference, the relevant parts are reproduced below.

*   Authorization must be enabled. In this case it is enabled within the scope of the TCP/IP Listen stanza.

```
Datasource "ecdb" {
  uri = ( "pgsql:host=192.168.0.50;dbname=ecelerity;user=ecuser;password=admin" )
}

auth_ds {
  Scheme "ecauth" {
    Authenticate {
      query = "SELECT password from webconsole.users where username = :user"
      cache = "ecdb"
      map = [
        user = "%{username}"
      ]
      type = "md5"
      returns_password = "true"
      password_column = "password"
    }
  ...
}
Authorization {
 Role "john" {
   allow = ("^config")
 }
 Role "admin" {
   allow = ( "^config" "^summary$" )
 }
 Role "root" {
   allow = ( ".*" )
 }
}
Control_Listener {
  ...
  AuthorizationParameters = [
    uri = "ecauth://"
  ]

  Listen "127.0.0.1:2025" {
    Enable_Authorization = "true"
  }
  ...
}
```

Given this control listener configuration, the user `john` can log in to the control listener at 127.0.0.1:2025 using TCP/IP in the following way:

```
shell> /opt/msys/ecelerity/bin/ec_console john@127.0.0.1:2025
Authorization required for console session
Password:
```

If a password is not supplied when issuing the **ec_console** command, then the user will be prompted for one as shown in the preceding example.

Given that this user is allowed commands with the regex pattern `^config`, he can successfully execute any of the **config** commands. The default action for authorization is to deny. When deciding whether a user is allowed to execute a command, the command is matched against the regular expressions for all the roles that that user has. For this reason, an attempt by john to execute the **summary** command results in the following error message:

```
09:05:45 john@127.0.0.1:2025> summary
Not Authorized for this command
```

If account logging is configured, an attempt to execute an unauthorized command will create an `acctlog.ec` entry such as the following:

`1242133558@Z@127.0.0.1:2025@127.0.0.1:49440@john@0@summary`

The last three fields indicate a failed execution of the summary command by the user `john`. For a description of the meaning of all the fields see [Section E.1.3, “The `acctlog.ec` Format”](log_formats.version_3#log_formats.acctlog3 "E.1.3. The acctlog.ec Format").

### 2.2.4. Authentication and Authorization in a Cluster

Configuration of ec_console on the cluster manager (sometimes referred to as eccmgr) is controlled by the `eccluster.conf` file and configuration of ec_console on the nodes is controlled by `ecelerity.conf`.

Because the web UI runs commands on the eccmgr console, in a cluster configuration the authentication and authorization configuration needs to be the same for ec_console when it is run on the manager or on one of the nodes.

For example both files might share the following Control_Listener configuration:

```
Control_Listener {

  AuthDigestMD5Parameters = [
    uri = "ecauth://"
  ]

  Enable_Authentication = "true"
  Enable_Authorization = "true"

  AuthorizationParameters = [
    uri = "ecauth://"
  ]

  Listen "/tmp/2025" {
    Enable_Authentication = "false"
    Enable_Authorization = "false"
  }
  Listen "127.0.0.1:2025" {
    # Only allow access from the localhost.
    Always_Deny = true

    Peer "127.0.0.1" {
      Always_Deny = false
    }
  }
}

Authorization {
  ...
}
```

Different Control_listener authorization or authentication configurations on the nodes and the manager can result in erratic behavior.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ecelerity.conf)  | [Up](conf.php) |  [Next](conf.ldaps.php) |
| 2.1. The `ecelerity.conf` File  | [Table of Contents](index) |  2.3. Setting Up Active Directory Authentication With Momentum 3.2.2 |
