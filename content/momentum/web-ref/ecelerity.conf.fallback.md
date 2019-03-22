| [Prev](conf.initial.conf)  | Chapter 2. Configuration |  [Next](conf.ecconfigd.php) |

## 2.6. Configuration Scopes and Fallback

Momentum has a flexible configuration system that allows many options to be set to different values for different hosts, domains, bindings and binding groups.

The `Binding_Group` stanza is used to create binding-group-specific options, the `Binding` stanza is used to configure binding-specific options, the `Domain` stanza for MultiVIP© domain-specific options, and the `Host` stanza is for host-specific options.

`Domain` stanzas can be nested inside a `Binding` stanza, creating a per-binding, per-domain configuration. This is referred to as a `binding::domain` scope. Also, since hosts may appear within bindings, there is also a `binding::host` scope. Other permutations also apply; for example, when a domain is within a binding that is in turn a member of a binding group, the scope is `binding-group::binding::domain`.

From within the system console you can determine the value of an option within a specific scope using **config eval** . For example, to determine the value of `Enable_Authentication` within the scope of a TCP/IP Listen stanza within a Control_Listener, issue the command, **`config eval Control_Listener Listen 127.0.0.1:2025 Enable_Authentication`**                                                                   . If `Enable_Authentication` is set to `true` within the Control_Listener scope and not overridden in the TCP/IP Listen stanza, its value will be the fallback value of `true`.

From within the web UI you can always determine the value of an option within the current scope. For example, if you are viewing a Listen scope within a Control_Listener scope and `Enable Authentication` is defined in the Control_Listener scope but not the Listen scope, its value will be the fallback value assigned in the Control_Listener scope. You will know that the value is a fallback value because the option name will be grayed. See the following example:

<a name="figure_fallback_value"></a>

**Figure 2.1. Fallback values**

![Fallback values](images/web3/fallback_value.png)

Options that have default values also show up as grayed.

Since options may be defined in more than one scope, it can sometimes be difficult to determine what value applies. Momentum resolves the configuration options by looking for the most specific setting it can find; if it doesn't find a precise match, it falls back to the parent level(s) and repeats this process until it reaches the globally configured value. How this works is best demonstrated by example:

<a name="domain-scope-fallback"></a>

**Example 2.2. Domain scope and fallback**

```
max_outbound_connections = 40

domain "example.com" {
  max_outbound_connections = 20
}

domain "someotherexample.com" {
  max_resident_active_queue_size = 500
}
```

This configures Momentum to open no more than 40 connections to a given domain, except for the domain `example.com`, which is limited to 20 connections. The domain `someotherexample.com` doesn't explicitly specify a value for `Max_Outbound_Connections`, so it falls-back to the globally configured value of 40.

A similar fallback occurs when using bindings:

<a name="binding-scope-fallback"></a>

**Example 2.3. Binding scope and fallback**

```
message_expiration = 86400

binding "example" {
  message_expiration = 3600
}

domain "example.com" {
  message_expiration = 120
}

binding "example2" {
  message_expiration = 7200

  domain example.com {
    message_expiration = 86400
  }

  domain "anotherexample.com" {
    max_resident_active_queue_size = 500
  }
}

binding "example3" {

  domain "example.com" {
    max_resident_active_queue_size = 500
  }

  domain "anotherexample.com" {
    message_expiration = 86400
  }
}
```

In this configuration, the message expiration time is 86400 seconds, unless the mail is attached to one of the bindings, `example`, `example2` or `example3`. Mail on binding `example` is subject to an expiration time of 3600 seconds. On binding `example2`, the expiration time is 7200 seconds except for mail destined for the `example.com` domain, which is set to 86400 seconds. Because the most specific setting for the `example.com` domain is the domain stanza within the binding stanza, this is the setting that takes effect. Outside the `Binding example2` binding, in a global domain stanza, `Message_Expiration` is set to `120` for example.com but this setting won't take effect because it is overridden by the more specific setting.

Note that because the domain `anotherexample.com` within `Binding Example2`, doesn't specify a value for `Message_Expiration`, the effective value is taken from its parent binding, which is 7200\. The same value will be used for any other domain routed via that binding unless it is explicitly overridden.

`Binding example3` is configured similarly to `example2`, except that it does not specify a value for `Message_Expiration`. This means that mail for domain `anotherexample.com` will be subject to a message expiration of 86400, because it is explicitly configured. All other domains will fall back to the value of their parent binding, which, in this case is "unset", so the value will fall back again and look for a global domain setting. For the `example.com` domain there is a global domain configuration that sets message expiration to 120 seconds, so this value will be used. For all other domains within this binding, there is no global domain stanza so the fallback ends up at the globally configured value of 86400.

Bindings can be nested within binding groups as shown in the following example:

<a name="binding-group-fallback"></a>

**Example 2.4. Binding_Group and fallback**

```
max_outbound_connections = 30

binding_group "group1" {
  max_outbound_connections = 5

  binding "example" {
    bind_address = 10.10.10.10
    max_outbound_connections = 15

    domain "example.com" {
      #some other options
    }
  }
}
```

In this specific case, the value of `Max_Outbound_Connections` for example.com will be `15` because `Max_Outbound_Connections` is not defined within the domain `example.com` this option then assumes the value of the binding that contains the domain. You can confirm the value by opening the system console and using **config eval** . For example:

```
ecelerity(/tmp/2025)> config eval binding_group group1 binding example \
 domain example.com max_outbound_connections Max_Outbound_Connections = 15
```

If you remove `Max_Outbound_Connections` from the binding `example` then the value of this option for the domain example.com becomes `5`, namely its value within the binding group that contains domain `example.com`.

In sum, the value that a configuration option assumes, in order of decreasing precedence, is as follows:

*   The value given in a domain stanza within a binding that is part of a binding group

*   The value given in a domain stanza within a binding

*   The value given in a domain stanza within a binding_group

*   The value specified within the binding stanza

*   The value specified within a global domain stanza

*   The global setting

| [Prev](conf.initial.conf)  | [Up](conf.php) |  [Next](conf.ecconfigd.php) |
| 2.5. Options that Must Change  | [Table of Contents](index) |  2.7. The Momentum Configuration Server: ecconfigd |
