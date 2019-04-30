|     |     |     |
| --- | --- | --- |
| [Prev](modules.eleven)  | Chapter 71. Modules Reference |  [Next](modules.event_hydrant) |

## 71.32. engagement_tracker – HTTP Engagement Tracking

**Configuration Change. ** For version 4.1 and earlier, metadata is included in open tracking only. As of version 4.1-HF4, metadata can also be included in click tracking based on the `click_tracking_include_metadata` option.

The engagement_tracker module handles the creation of open-tracked and click-tracked links and the corresponding parsing of the links when an open or click event occurs. When open tracking is enabled, the engagement_tracker module constructs an open-tracked link from the transmission-level and recipient-level data. Likewise, when click tracking is enabled, it constructs a click-tracked link from the target link, link name, transmission-level data, and recipient-level data. When a recipient opens an email or clicks a link within the email, this module parses the tracked URLs for this data to be used by the various reporting options.

### 71.32.1. Configuration

The [msg_gen](modules.msg_gen "71.48. msg_gen – Message Generation") module requires the engagement_tracker module and will autoload it in the `msg_gen.conf` file that is created during installation. The following is the default configuration:

<a name="modules.engage_tracker.configuration.example"></a>

**Example 71.59. engage_tracker Configuration**

```
engagement_tracker {
  click_tracking_include_metadata = "true"
  max_metadata_len = 1000
}
```

The following are the configuration options defined by this module:

<dl className="variablelist">

<dt>click_tracking_include_metadata</dt>

<dd>

Determines if metadata is included in the click-tracked links for engagement tracking. By default, metadata is included, i.e.: `"true"`. To disable metadata in the tracked links set the option to `"false"`.

Whether metadata is included depends on the setting at the time Momentum sent the message, i.e.: If this option is set to include metadata in click tracking but later changed to disable metadata, messages sent while metadata was enabled will still include metadata when parsed.

</dd>

<dt>max_metadata_len</dt>

<dd>

The maximum amount of metadata bytes that will be encoded into click and open tracking URLs and provided in click and open events. Defaults to 1000 bytes.

**Configuration Change. ** This option is available as of Momentum 4.2.

</dd>

</dl>

### Note

Metadata can be included in click tracking for messages injected using SMTP and REST. The setting of the `click_track_include_metadata` and `max_metadata_len` options applies to both types of messages.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.eleven)  | [Up](modules) |  [Next](modules.event_hydrant) |
| 71.31. eleven – Eleven eXpurgate Content Scanning  | [Table of Contents](index) |  71.33. event_hydrant – Message Tracking |

