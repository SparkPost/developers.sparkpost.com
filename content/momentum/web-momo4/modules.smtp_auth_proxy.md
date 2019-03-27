| [Prev](modules.sendmail_logger)  | Chapter 71. Modules Reference |  [Next](modules.smtp_cbv) |

## 71.64. smtp_auth_proxy - SMTP Authentication Proxy

<a class="indexterm" name="idp22969584"></a>

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The `smtp_auth_proxy` module allows your edge SMTP servers to forward SMTP AUTH requests onto one or more SMTP servers, with optional lookup of the authentication host for a particular user.

<a name="modules.smtp_auth_proxy.example"></a>

**Example 71.89. Example Configuration**

```
smtp_auth_proxy {
  # Host for forwarding the SMTP AUTH request.
  host = some.smtp.server
  port = 25
  timeout = 60

  # Optionally query a database to look up the SMTP server
  # for auth for a particular user.
  ds_cache = smtp_auth_proxy
  query = "SELECT host FROM auth_servers WHERE username = :username, localpart = :localpart, domain = :domain;"
}

Esmtp_Listener {
  SMTP_Extensions = ("AUTH LOGIN" XREMOTEIP XDUMPCONTEXT XCLIENT XSETCONTEXT)

  AuthLoginParameters = [
      log_authentication = "true"
      uri = "smtp_auth_proxy://"
  ]

  Listen ":25" {}
}
```

### Note

Hosts specified by the `relay_hosts` option are not subject to any SMTP authentication you may have implemented. Likewise when `open_relay` is set to `true`. For more information, see [relay_hosts](conf.ref.relay_hosts "relay_hosts").

| [Prev](modules.sendmail_logger)  | [Up](modules) |  [Next](modules.smtp_cbv) |
| 71.63. sendmail_logger – Sendmail Logging  | [Table of Contents](index) |  71.65. smtp_cbv – SMTP Callback Verification |

