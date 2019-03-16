| [Prev](modules.compress_spool)  | Chapter 71. Modules Reference |  [Next](modules.csapi) |

## 71.22. conntrol – Fine-Grained Connection Control

<a className="indexterm" name="idp20736944"></a>

The conntrol module is designed to allow control over how connections are established into Momentum. The module currently implements one check - early data sending, which is designed to spot so-called ratware.

### 71.22.1. Configuration

Early sender detection causes Momentum to pause before its initial banner is sent to a connecting client. If the client sends data before the banner and `disconnect_ratware` is set, Momentum will disconnect them. To enable this, use the following stanza:

<a name="example.conntrol.3"></a>

**Example 71.37. conntrol Configuration**

```
conntrol "conntrol1" {
  banner = "220-Welcome to Momentum!\r\n"
  pause_time = 2
  disconnect_ratware = "421 my.host.name service denied to those who send before the banner\r\n"
}
```

This will set a custom banner and a two second delay for that banner. If the `disconnect_ratware` option is also set, it must be a valid SMTP protocol response string. With these three options set, this module will immediately send the defined response and disconnect the peer, possibly bypassing other policy. For this reason, we generally recommend that customers not use the `disconnect_ratware` option and instead look at the `early_talker` validation context variable using a policy script; this gives greater flexibility. The conntrol module context variables are listed in the following section.

### 71.22.2. Connection Context Variables

The conntrol module sets the following connection context variables:

<dl className="variablelist">

<dt>conntrol_bad_commands</dt>

<dd>

Number of valid SMTP commands that were sent, but had syntax errors

</dd>

<dt>conntrol_unrecognized_commands</dt>

<dd>

Number of unrecognized commands seen in this SMTP session

</dd>

<dt>early_talker</dt>

<dd>

Whether the peer started issuing commands before Momentum sent the initial SMTP banner (literal string `yes`)

</dd>

</dl>

| [Prev](modules.compress_spool)  | [Up](modules) |  [Next](modules.csapi) |
| 71.21. compress_spool – Dynamic Spool Compression  | [Table of Contents](index) |  71.23. csapi – Symantec CSAPI Antivirus Support |

