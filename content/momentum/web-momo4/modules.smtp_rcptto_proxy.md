| [Prev](modules.smtp_cbv)  | Chapter 71. Modules Reference |  [Next](modules.smtpapi) |

## 71.66. smtp_rcptto_proxy - SMTP Recipient-To Proxy

<a class="indexterm" name="idp23012352"></a>

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The `smtp_rcptto_proxy` module allows validation of a Lua recipient by doing an SMTP call-forward. This can be useful on edge MTAs to discover whether a user is valid or not. It will create an SMTP session to the specified server and then replay the SMTP conversation up to and including RCPT TO to determine if the recipient would be accepted.

<a name="modules.smtp_rcptto_proxy.example"></a>

**Example 71.91. Example Configuration**

```
/*
 * Syntax:
 *
 * require("msys.beta.rcptto_proxy");
 *
 * local res, err = msys.beta.rcptto_proxy.query({mailfrom = "foo@foo.com",
 *                                           rcptto = "bar@bar.com",
 *                                           host = "smtp.foo.com",
 *                                           port = 25,
 *                                           timeout = 60 -- optional, 60 default
 *                                           });
 *
 * -- res is true if everything succeeded, otherwise false and err is
 * -- set to an appropriate error string
...
```

### Note

No information is provided if the RCPT TO fails; the system just returns "fail."

| [Prev](modules.smtp_cbv)  | [Up](modules) |  [Next](modules.smtpapi) |
| 71.65. smtp_cbv – SMTP Callback Verification  | [Table of Contents](index) |  71.67. smtpapi – SMTP Engagement Tracking |

