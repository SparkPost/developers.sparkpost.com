|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.growbuf_size)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.hostname) |

<a name="conf.ref.host"></a>
## Name

host — configure host specific options

<a name="idp24823808"></a>
## Description

```
host "smtp.example.com" {
  # host specific settings
}

binding "example" {
  # binding specific settings
  host "smtp.example.com" {
    # host specific settings for this binding
  }
}
```

Use the `host` stanza to define per-host configuration options. You can nest `host` stanzas beneath `binding` stanzas to define binding::host configuration options. For additional details, see [Section 15.3, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "15.3. Configuration Scopes and Fallback").

The following options can be specified in a `host` stanza:

*   [cluster_max_outbound_connections](conf.ref.cluster_max_outbound_connections "cluster_max_outbound_connections")

*   [max_outbound_connections](conf.ref.max_outbound_connections "max_outbound_connections")

**Configuration Change. ** As of version 4.2, Regex is supported in the `Host` stanza.

In addition to specifying a host by host name, you may use Perl-compatible regular expression (PCRE) syntax to define a "Regex Host". Using regex hosts you can define common rules for hosts that have similar configurations, without needing to specify the rules for every possible matching host.

```
host "/(?:^|[.])example[.](?:com|co[.]uk)$/" {
  max_outbound_connections = 15
}
```

If you are unsure of the correct host name, you can determine it using the **domain *`domain_name`***                 command from the system console. For example, issuing the command **`domain messagesystems.com`**                     results in the following output:

```
Domain 'messagesystems.com' has 2 MXs and a TTL of 86397 seconds
    [10 edge.omniti.com. TTL:597]
  =>	[8.8.38.6]:0 IPv4 (0.00ms con 0.00ms dlv)
    [10 edge2.omniti.com. TTL:597]
      [8.8.38.36]:0 IPv4 (0.00ms con 0.00ms dlv)
      ...
```

In this case, the host name to use would be `edge.omniti.com` or `edge2.omniti.com`.

You can also determine MX servers from the Unix command line by entering **dig *`domain_name`* mx**                   . If you do a dig and there are no MX records returned, then the host name is the same as the domain name.

<a name="conf.ref.host.scope"></a>
### `host` Scope

The `host` scope is more specific than the `domain` scope; host applies to the individual host name of the mail exchanger that is being communicated with.

For example, you can determine Yahoo's MX hosts by issuing the command, **dig +short yahoo.com mx** , from the command line. You should see something similar to the following:

```
1 i.mx.mail.yahoo.com.
1 j.mx.mail.yahoo.com.
1 k.mx.mail.yahoo.com.
1 a.mx.mail.yahoo.com.
1 b.mx.mail.yahoo.com.
1 c.mx.mail.yahoo.com.
1 d.mx.mail.yahoo.com.
1 e.mx.mail.yahoo.com.
1 f.mx.mail.yahoo.com.
1 g.mx.mail.yahoo.com.
1 h.mx.mail.yahoo.com.
```

If you wanted to configure settings specific to `i.mx.mail.yahoo.com`, you would do so using a `host` stanza.

You might use a `host` stanza outside of a `domain` stanza if you were configuring concurrency limits for hosts that provide service for multiple domains. For instance, Google apps provides mail services to many domains. To limit your overall concurrency to a specific MX machine at Google for a given binding, regardless of which domain you are sending to, do the following:

```
binding "mycustomer" {
  host "aspmx.l.google.com" {
    max_outbound_connections = 32
  }
}
```

To be effective, you would do this for each of the MX hosts that service Google apps hosts. You can find the list of hosts in the documentation provided by Google.

<a name="idp24851216"></a>
## Scope

`host` is valid in the binding, binding_group, and global scopes.

<a name="idp24853504"></a>
## See Also

[binding](conf.ref.binding "binding"), [domain](conf.ref.domain "domain")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.growbuf_size)  | [Up](config.options.ref) |  [Next](conf.ref.hostname) |
| growbuf_size  | [Table of Contents](index) |  hostname |

