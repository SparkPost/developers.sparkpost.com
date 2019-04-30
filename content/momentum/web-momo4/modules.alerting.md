|     |     |     |
| --- | --- | --- |
| [Prev](modules.adaptive)  | Chapter 71. Modules Reference |  [Next](modules.alias) |

## 71.4. alerting – Send Alerting Emails

<a className="indexterm" name="idp19664624"></a>

The alerting module provides the ability to send alerting emails when a script examines data. If you intend to create scripts using the [`scriptlet`](modules.scriptlet "71.60. scriptlet - Lua Policy Scripts") module, you must have the alerting module loaded.

It is especially important to load this module when you are using [Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery"). You will not receive adaptive alerts if this module is not loaded.

### 71.4.1. Configuration

The alerting module is a singleton, so it does not have an instance name. To use this module, you must also load the [inbound_audit](modules.inbound_audit "71.41. inbound_audit – Inbound traffic analytics") module. The following is an example configuration:

<a name="example.alerting"></a>

**Example 71.7. alerting configuration**

```
alerting {}

inbound_audit {
  monitors = ("300,6")
}
```

The following configuration options are available:

<dl className="variablelist">

<dt>alerting_cache_ttl</dt>

<dd>

Time to live for the alerting cache. Default value is `3600` seconds.

</dd>

<dt>alerting_cache_size</dt>

<dd>

Alerting cache size. Default value is `1048576` bytes.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](modules.adaptive)  | [Up](modules) |  [Next](modules.alias) |
| 71.3. adaptive – Adaptive Delivery  | [Table of Contents](index) |  71.5. alias – Alias Expansion |

