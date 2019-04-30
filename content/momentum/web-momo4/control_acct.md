|     |     |     |
| --- | --- | --- |
| [Prev](control_auth)  | Chapter 17. Configuring Momentum's System Console |  [Next](control_authz) |

## 17.3. Control_Listener Accounting

Momentum contains an extensible authorization and accounting subsystem that can be configured to restrict access to console commands based on role while recording an audit trail. Accounting is enabled by default for Unix socket connections. However, if you are connecting via TCP/IP then accounting for the Control_Listener will not be enabled unless you explicitly turn it on. To employ an authentication scheme such as `DIGEST-MD5` and to log authentication events use the following syntax:

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

Logging of authentication events is enabled by turning on `log_authentication` in the Control_Listener configuration *and* configuring an accounting log in the [Section 71.30, “EC_logger – Momentum-Style Logging”](modules.ec_logger "71.30. EC_logger – Momentum-Style Logging") module. You may also develop your own accounting modules by implementing a hook.

More information about authentication modules can be found at [Section 71.8, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds "71.8. auth_ds – Datasource based SMTP Authentication").

|     |     |     |
| --- | --- | --- |
| [Prev](control_auth)  | [Up](control_listener) |  [Next](control_authz) |
| 17.2. Control_Listener Authentication  | [Table of Contents](index) |  17.4. Control_Listener Authorization |

