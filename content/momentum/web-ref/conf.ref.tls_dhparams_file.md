| [Prev](conf.ref.tls_ciphers)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.tls_enable_dhe_ciphers.php) |

<a name="conf.ref.tls_dhparams_file"></a>
## Name

tls_dhparams_file — specifies the file of Diffie Hellman (DHE) parameters that add per-session randomness to the encryption. Default parameters are built in the product if none are specified.

## Synopsis

`tls_dhparams_file = /path/to/dh.pem`

<a name="idp12096640"></a>
## Description

**Configuration Change. ** This option is available as of version 3.6.6 for Momentum 3.6.

The tls_dhparams_file option can be generated with the file `openssl dhparam -out /path/to/dh512.pem 512`. It is recommended that you regularly (e.g., weekly) regenerate this file.

This option has no default value; instead, it uses internally-specified DHE parameters.

<a name="idp12100928"></a>
## Scope

tls_dhparams_file is valid in the global scope.

| [Prev](conf.ref.tls_ciphers)  | [Up](conf.ref.files.php) |  [Next](conf.ref.tls_enable_dhe_ciphers.php) |
| tls_ciphers  | [Table of Contents](index) |  tls_enable_dhe_ciphers |
