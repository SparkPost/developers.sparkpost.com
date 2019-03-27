| [Prev](config.tls_certificate)  | Chapter 72. Configuration Options Reference |  [Next](config.tls_client_ca) |

<a name="config.tls_ciphers"></a>
## Name

tls_ciphers — specify allowable ciphers for TLS inbound and outbound sessions

## Synopsis

`TLS_Ciphers = "DEFAULT"|"NORMAL"`

<a name="idp26967120"></a>
## Description

**Configuration Change. ** Support for GNUTLS is available as of version 4.1 for SMTP reception and SMTP deliveries only.

This option specifies the allowable ciphers for a TLS session. The allowable ciphers must be a subset of the available ciphers on the host system.

**OpenSSL**

When TLS_Engine is set to `openssl`, TLS_Ciphers specifies a "cipher list", which is a list of the supported algorithms, plus some special keywords that specify ciphers of a certain strength of type (e.g.: "MEDIUM"). A full list of ciphers can be obtained by running `openssl ciphers` from a command shell on the host machine. For more information about the available ciphers, see [http://www.openssl.org/docs/apps/ciphers.html](http://www.openssl.org/docs/apps/ciphers.html).

This option can be set to the following:

*   `DEFAULT` – This setting is exactly the same as leaving it unset. If you do not explicitly set the ciphers, OpenSSL will use "DEFAULT". You can be more specific and disable "low" and "export" encryption cipher suites, using a string such as: `tls_ciphers = "DEFAULT:!LOW:!EXP"`.

    The meaning of "DEFAULT" depends upon how OpenSSL was built. On Red Hat Enterprise Linux and Red Hat clones, OpenSSL has certain ciphers disabled for patent reasons and other ciphers disabled because they are insecure. So the "DEFAULT" cipher list varies from one platform to another. To view documentation of ciphers on your system, run **`man ciphers`**         .

*   *`Number of different ciphers`*                       – To specify a number of different ciphers, use the following syntax: `TLS_Ciphers = "DHE-RSA-AES256-SHA:DHE-DSS-AES256-SHA:DHE-RSA-CAMELLIA256-SHA"`.

**GNUTLS**

When TLS_Engine is set to `gnutls`, TLS_Ciphers specifies a "priority string", which is quite different from OpenSSL's cipher list. Priority strings do not allow configuration of specific cipher suites. The priority string can indirectly set the cipher suite, by setting the allowed ciphers, key-exchange, MAC, compression, and signature algorithms; TLS versions; and elliptic curves. Priority strings also allow the enabling or disabling of specific TLS extensions. Note that GNUTLS uses a scheme to describe cryptographic algorithms that is different than OpenSSL. An ecelerity.conf with a specific TLS_Ciphers configuration for OpenSSL will most likely not work with GNUTLS.

For a detailed description of GNUTLS priority strings, see [http://www.gnutls.org/manual/gnutls.html#Priority-Strings](http://www.gnutls.org/manual/gnutls.html#Priority-Strings).

### Note

Momentum 4.1 is using GNUTLS 3.1.x. The GNUTLS manual is for the latest version of GNUTLS, and there may be some priority string keywords that are not supported by GNUTLS in Momentum 4.1.

This option can be set to `NORMAL`.

<a name="idp26985552"></a>
## Scope

`tls_ciphers` is valid in the binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.

| [Prev](config.tls_certificate)  | [Up](config.options.ref) |  [Next](config.tls_client_ca) |
| tls_certificate  | [Table of Contents](index) |  tls_client_ca |

