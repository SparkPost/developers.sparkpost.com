|     |     |     |
| --- | --- | --- |
| [Prev](control_acct)  | Chapter 17. Configuring Momentum's System Console |  [Next](ecstream_listener) |

## 17.4. Control_Listener Authorization

The authorization subsystem allows you to restrict the ability to run console commands based on the role of the user. The role membership of the user is determined based on the authenticated username. Pluggable authorization modules provide the means to map the username to a number of roles (or groups) that can then be matched against the rules defined in the Authorization stanza. The Authorization stanza is only in effect in the scope where the `enable_authorization` is set to `true`. For more information about the Authorization stanza, see [authorization](conf.ref.authorization "authorization").

Logging of authorization events is controlled by the `Enable_Authorization` option. If it is enabled, authorization is turned on, triggering the authorization logging hook. To capture the information, you must configure an account log logging module. Set the `acctlog` option in an [ec_logger](modules.ec_logger "71.30. EC_logger – Momentum-Style Logging") module in your configuration or build your own custom accounting logger. For `acctlog` format, see [Section 35.1, “`acctlog`”](log_formats#log_formats.acctlog "35.1. acctlog").

The following is an example configuration with authorization enabled:

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

The authorization system will prevent console commands from being run unless an allow entry is explicitly configured. The authorization process first enumerates the roles/group membership of the user by querying the authorization module. Then the username and each role for the user are compared against the authorization rules. If the username or rolename matches, the `allow` rules are processed in the order that they are defined.

Each `allow` rule is a Perl compatible regular expression that will be matched against the command being executed. If the regular expression matches, processing of authorization rules stops and the console command is allowed to execute.

If no rules matched, the command is not allowed to execute.

### 17.4.1. Authorization Using the `ecauth` Scheme

Proper use of an authorization stanza requires that a number of different elements be present. This example shows how using the `ecdb` datasource. The steps are as follows:

1.  Identify a role for the target user within the Authorization stanza. In the following example, the user, `john`, is allowed to execute **config** commands.

2.  Ensure that the user associated with the defined role exists.

3.  Define the `AuthorizationParameters` option within the scope of the Control_Listener or within a Listen scope within the Control_Listener. In this example, the `ecauth` authentication scheme is used.

4.  Enable authorization. In this case, it is enabled within the scope of the TCP/IP Listen stanza.

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

Given this Control_Listener configuration, the user `john` can log in to the Control_Listener at 127.0.0.1:2025 using TCP/IP in the following way:

```
shell> /opt/msys/ecelerity/bin/ec_console john@127.0.0.1:2025
Authorization required for console session
Password:
```

If a password is not supplied when issuing the **ec_console** command, the user will be prompted for one as shown in the preceding example.

Given that this user is allowed commands with the regex pattern `^config`, he can successfully execute any of the **config** commands. The default action for authorization is to deny. When deciding whether a user is allowed to execute a command, the command is matched against the regular expressions for all the roles given to that user. For this reason, an attempt by john to execute the **summary** command results in the following error message:

```
09:05:45 john@127.0.0.1:2025> summary
Not Authorized for this command
```

If account logging is configured, an attempt to execute an unauthorized command will create an `acctlog.ec` entry such as the following:

`1242133558@Z@127.0.0.1:2025@127.0.0.1:49440@john@0@summary`

The last three fields indicate a failed execution of the summary command by the user `john`. For a description of the meaning of all the fields, see [Section 35.1, “`acctlog`”](log_formats#log_formats.acctlog "35.1. acctlog").

|     |     |     |
| --- | --- | --- |
| [Prev](control_acct)  | [Up](control_listener) |  [Next](ecstream_listener) |
| 17.3. Control_Listener Accounting  | [Table of Contents](index) |  Chapter 18. Configuring Inbound Mail Service Using ECStream |

