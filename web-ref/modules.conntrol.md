|     |     |     |
| --- | --- | --- |
| [Prev](modules.compress_spool)  | Chapter 14. Modules Reference |  [Next](modules.csapi.php) |

## 14.21. conntrol – Fine-Grained Connection Control

<a class="indexterm" name="idp18627808"></a>

The Connection Control module is designed to allow control over how connections are established into Momentum. The module currently implements one check - early data sending, which is designed to spot so-called ratware.

### 14.21.1. Early Sender Detection

Early sender detection causes Momentum to pause before its initial banner is sent to a connecting client. If the client sends data before the banner, and `disconnect_ratware` is set, then Momentum will disconnect them. To enable this, you can use the following stanza:

<a name="example.conntrol.3"></a>

**Example 14.36. conntrol module**

```
conntrol "conntrol1" {
  banner = "220-Welcome to Momentum!\r\n"
  pause_time = 2
  disconnect_ratware = "421 my.host.name service denied to those who send before the banner\r\n"
}
```

This will set a custom banner and a two second delay for that banner. If the `disconnect_ratware` parameter is also set, it must be a valid SMTP protocol response string. With these three parameters set, this module will immediately send the defined response and disconnect the peer, possibly bypassing other policy. For this reason, we generally recommend that customers not use the `disconnect_ratware` option and instead look at the `early_talker` validation context variable using a policy script; this gives greater flexibility. The conntrol module context variables are listed in the following section.

### 14.21.2. Conntrol Runtime Usage

The conntrol module sets the following context variables:

<dl className="variablelist">

<dt>conntrol_bad_commands</dt>

<dd>

The number of valid SMTP commands that were sent, but had syntax errors.

</dd>

<dt>conntrol_unrecognized_commands</dt>

<dd>

The number of unrecognized commands seen in this SMTP session.

</dd>

<dt>early_talker</dt>

<dd>

This variable holds the literal string `yes` if the peer started issuing commands before Momentum sent the initial SMTP banner.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](modules.compress_spool)  | [Up](modules.php) |  [Next](modules.csapi.php) |
| 14.20. compress_spool – Dynamic Spool Compression  | [Table of Contents](index) |  14.22. csapi – The Content Scanning API Module |
