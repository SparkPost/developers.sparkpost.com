|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.threads)  | 12.2. System Console Commands |  [Next](console_commands.trace_smtp.php) |

<a name="console_commands.tls"></a>
## Name

tls show cache, tls flush cache, tls rekey — manage TLS cache used by Momentum

## Synopsis

`tls flush cache`

`tls rekey`

`tls show cache`

<a name="idp16525136"></a>
## Description

**tls show cache**            shows information of the TLS cache used by the server.

```
10:47:35 /tmp/2025> tls show cache
   1) server context
              age: 28404 seconds old
        in use by: 0 sessions
      certificate: /opt/msys/ecelerity/etc/mail.omniti.com.cert
          ca list: /etc/ssl/ca.cert
          ciphers: default
   2) server context
              age: 25681 seconds old
        in use by: 0 sessions
      certificate: /opt/msys/ecelerity/etc/mail.omniti.com.cert
          ca list: /opt/msys/ecelerity/etc/ca-bundle.crt
          ciphers: default
Temp RSA key is uncached.
```

**tls flush cache**             flushes TLS cache.

```
10:47:35 /tmp/2025> tls flush cache
Cache flush request submitted.
```

**tls rekey**       removes the temporary RSA key. Next use will force the generation and caching of a new key.

```
13:34:55 ecelerity(/tmp/2025)> tls rekey
Rekey request submitted.
```

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.threads)  | [Up](console.commands.non-module.php) |  [Next](console_commands.trace_smtp.php) |
| threads  | [Table of Contents](index) |  trace smtp |
