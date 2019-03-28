|     |     |     |
| --- | --- | --- |
| [Prev](modules.adaptive)  | Chapter 14. Modules Reference |  [Next](modules.alias.php) |

## 14.3. alerting – alerting

<a class="indexterm" name="idp17640720"></a>

The alerting module provides the ability to send alerting emails when a script examines data. If you intend to create scripts, either using the web policy editor or manually, you must have the alerting module loaded. Loading this module when you are using [Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery") is especially important. You will not receive adaptive alerts if this module is not loaded.

### Note

To use this module you must also load the [inbound_audit module](modules.inbound_audit "14.41. inbound_audit – Inbound traffic analytics") and likewise with the [scriptlet module](modules.scriptlet.php "14.60. scriptlet – Module").

### 14.3.1. Configuration

`alerting { }`

The alerting module is a singleton so does not have an instance name.

The following options are available:

<dl className="variablelist">

<dt>alerting_cache_ttl</dt>

<dd>

**Configuration Change. ** Prior to version 3.4, the default value for this option was `60`.

The time to live for the alerting cache. The default value for this option is `3600` seconds.

</dd>

<dt>alerting_cache_size</dt>

<dd>

**Configuration Change. ** Prior to version 3.4, the default value for this option was `200000`.

The alerting cache size. The default value for this option is `1048576` bytes.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](modules.adaptive)  | [Up](modules.php) |  [Next](modules.alias.php) |
| 14.2. adaptive – Adaptive Delivery  | [Table of Contents](index) |  14.4. alias – Alias Expansion Module |
