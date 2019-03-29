|     |     |     |
| --- | --- | --- |
| [Prev](control_listener)  | Chapter 17. Configuring Momentum's System Console |  [Next](control_acct) |

## 17.2. Control_Listener Authentication

Momentum can be configured to perform authentication on Control connections by using the authentication modules.

The following is an example `Control_Listener` stanza:

<a name="control_auth.control_listener.stanza"></a>

**Example 17.1. Control_Listener Stanza**

```
Control_Listener {
  AuthDigestMD5Parameters = [
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

The usual fallback semantics apply to the `Enable_Authentication` option. In the example, access to the control listener via TCP requires authentication because the fallback value of "Enable_Authentication" is "true". On the other hand, authentication is disabled for access via a Unix domain socket because `Enable_Authentication` is set to `false` in the scope defined by `Listen "/tmp/2025"`. The `Enable_Authorization` option is used in the same way as the `Enable_Authentication` option.

The `uri = "ecauth://"` inside both `AuthDigestMD5Parameters` and `AuthorizationParameters` references an authentication scheme named "`ecauth`" defined in an auth_ds module. This scheme is created during installation. For more information on the `ecauth` scheme, see [Section 17.4.1, “Authorization Using the `ecauth` Scheme”](control_authz#control_authz.ecauth "17.4.1. Authorization Using the ecauth Scheme").

### 17.2.1. DIGEST-MD5 Authentication

In the following example, `DIGEST-MD5` is used to authenticate users who try to connect to the console over TCP/IP rather than by using a Unix socket.

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

The digest file, referenced by the `uri` parameter, can be created and updated using the [ec_md5passwd](executable.ec_md5passwd "ec_md5passwd") tool.

The `digest://` auth storage scheme references the path to an htdigest compatible password file. Lines starting with a ‘`#`’ are treated as comments and are ignored. The lines are divided into three fields separated by ‘`:`’ characters; e.g. `user:realm:password`.

### 17.2.2. Clear Text LOGIN Authentication

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

Currently there's no TLS/SSL support for control listeners, so the use of clear text LOGIN with anything other than Unix domain sockets is discouraged.

### 17.2.3. Operating System Authentication

On Unix systems, the control listener will implicitly authenticate connections made over Unix domain sockets using the system level username of the user connecting to the socket.

By default, the control listener creates Unix domain sockets so that they are only accessible to the user identity you have configured for ecelerity. To enable connections from other users you may specify the file mode using the following syntax:

```
Control_Listener {
  Listen "/tmp/2025" {
    File_Mode = 0666
  }
}
```

With the socket file permission set to `0666`, every user who can log in to the system can use **ec_console** to connect to the server. When using system level authentication on a Unix domain socket, all authentication and authorization events on that connection will be logged to the accounting subsystem. Note that you need to configure a location to log accounting information; you can find more details on the configuration of the accounting log in [Section 71.30, “EC_logger – Momentum-Style Logging”](modules.ec_logger "71.30. EC_logger – Momentum-Style Logging").

### 17.2.4. Overriding Authentication

You can override the results of authentication using the `always_allow` and the `always_deny` options. Consider the following code snippet:

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

In this case, access to `Peer "127.0.0.1"` is always allowed regardless of the results of authentication.

|     |     |     |
| --- | --- | --- |
| [Prev](control_listener)  | [Up](control_listener) |  [Next](control_acct) |
| Chapter 17. Configuring Momentum's System Console  | [Table of Contents](index) |  17.3. Control_Listener Accounting |

