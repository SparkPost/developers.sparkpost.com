| [Prev](install.vertica.license)  | Chapter 12. Post-Installation |  [Next](add_remove_platform_nodes) |

## 12.6. Security Considerations

This section will document security issues and fixes for those issues.

### 12.6.1. A Note About umask

A umask setting of `0027` in the shell startup file, typically `~/.bashrc` when using the bash shell, will cause installation to fail because directories created by root will be inaccessible to the user `ecuser`.

With a umask setting of `0027`, when the initial configuration is being created, ecconfigd is started, but the Apache instance will not start. You will see output such as the following:

```
shell> CFG-07961 failed to stat
'/opt/msys/etc/installer/ecelerity.d/': Permission denied
Reconfigure failed.
Global configuration error.
```

This is also true of any files that are created as the root user under the `/opt/msys/ecelerity/etc/conf` directory.

To resolve this use a more permissive mask, for example `umask 0022`.

Another option is to `chown ecuser:ecuser` all new configuration files, or make them world readable. Likewise for directories.

If you get the permissions wrong, then you will also not be able to log in to the web UI or use the **ecconfigd** command.

### 12.6.2. POODLE Vulnerability Fix

The POODLE (Padding Oracle On Downgraded Legacy Encryption) vulnerability attacks the TLS protocol and forces clients to downgrade to the SSLv3, which has no known secure cipher suites available. This allows an attacker to read information encrypted with this version of the protocol in plain text. Another part of the POODLE attack is exploiting weaknesses in the CBC mode of operation.

**Disable SSLv3 (GNUTLS)**

If you access the REST APIs via NGINX, enable GNUTLS in the TLS_Engine and disable SSLv3 to protect SMTP traffic. To do this, set the [tls_ciphers](config.tls_ciphers "tls_ciphers") configuration option to disable SSLv3 in your `ecelerity.conf` file:

`TLS_Ciphers = "NORMAL:-VERS-SSL3.0"`

For more information, see the [GNUTLS website](http://www.gnutls.org/security.html#GNUTLS-SA-2014-4).

**Disable SSLv3 (OpenSSL)**

To fix this vulnerability in OpenSSL, make sure you are running Momentum 4.1.0.2 or later and set the [tls_protocols](config.tls_protocols "tls_protocols") configuration option to disable SSLv3 in your `ecelerity.conf` file:

`TLS_Protocols = "+ALL:-SSLv3"`

|     |     |     |
| --- | --- | --- |
| [Prev](install.vertica.license)  | [Up](post_installation) |  [Next](add_remove_platform_nodes) |
| 12.5. Upgrading the Vertica License  | [Table of Contents](index) |  Chapter 13. Adding and Removing Platform Nodes |

