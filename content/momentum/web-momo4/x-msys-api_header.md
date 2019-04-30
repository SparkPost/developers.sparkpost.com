|     |     |     |
| --- | --- | --- |
| [Prev](engagement_tracking_smtp)  | Chapter 41. Tracking Engagement for SMTP |  [Next](engagement_tracking_smtp.policy) |

## 41.2. Using the X-MSYS-API Header for Engagement Tracking

The X-MSYS-API header can be used to override the configuration option to enable or disable engagement tracking for a specific message. Also, you can specify engagement tracking data in the header fields. For details about engagement tracking for SMTP injections, see [Chapter 41, *Tracking Engagement for SMTP*](engagement_tracking_smtp "Chapter 41. Tracking Engagement for SMTP") .

**X-MSYS-API Header Attributes**

The X-MSYS-API header must be a JSON object serialized as a string that holds the various attributes for the message. [Table 41.1, "X-MSYS-API Header Attributes"](x-msys-api_header#x-msys-api-header-table "Table 41.1. X-MSYS-API Header Attributes") lists the fields supported in the JSON object.

<a name="x-msys-api-header-table"></a>

**Table 41.1. X-MSYS-API Header Attributes**

| Field | Type | Description | Required | Notes |
| --- | --- | --- | --- | --- |
| campaign_id | string | Name of the campaign to associate with the SMTP message | no | Campaign ID is available during engagement events. Maximum length - 64 bytes |
| metadata | JSON object | JSON key value pairs associated with the SMTP message | no | Metadata is available during engagement events based on a configuration option. See [Section 71.32, "engagement_tracker – HTTP Engagement Tracking"](modules.engage_tracker "71.32. engagement_tracker – HTTP Engagement Tracking"). A maximum of 200 bytes is available. |
| options | JSON object | JSON object in which engagement tracking options are enabled or disabled | no | For a full description, see the Options Attributes. |
| tags | JSON object | Array of text labels associated with the SMTP message | no | Tags are available during engagement events. Maximum number of tags = 10 per recipient, 100 system wide. Any tags over the limits are ignored. |

[Table 41.2, "Options Attributes"](x-msys-api_header#x-msys-api-options-table "Table 41.2. Options Attributes") lists the fields supported in the "options" JSON object.

<a name="x-msys-api-options-table"></a>

**Table 41.2. Options Attributes**

| Field | Type | Description | Required | Notes |
| --- | --- | --- | --- | --- |
| click_tracking | boolean | Whether click tracking is enabled or disabled for the SMTP message | no | If specified, this field takes precedence over the configuration option. For the order of precedence, see [Section 71.67.3, “Enabling Engagement Tracking”](modules.smtpapi#modules.smtpapi.enable "71.67.3. Enabling Engagement Tracking"). |
| open_tracking | boolean | Whether open tracking is enabled or disabled for the SMTP message | no | If specified, this field takes precedence over the configuration option. For the order of precedence, see [Section 71.67.3, “Enabling Engagement Tracking”](modules.smtpapi#modules.smtpapi.enable "71.67.3. Enabling Engagement Tracking"). |

### Note

There are no X-MSYS-API header fallbacks for the following:

<a name="no_fallbacks"></a>

**Table 41.3. **

| Configuration Option | Context Variable |
| --- | --- |
| click_tracking_scheme | smtpapi_click_tracking_scheme |
| open_tracking_scheme | smtpapi_open_tracking_scheme |
| tracking_domain | smtpapi_tracking_domain |
| tracking_link_expiry | smtpapi_tracking_link_expiry |

You must specify the configuration options or the context variables in Lua policy. This is especially important for `tracking_domain`, as the default value of **`"localhost:8080"`** is not appropriate for production environments. See [Section 71.67.4, “Configuration Options for Engagement Tracking”](modules.smtpapi#modules.smtpapi.config.options "71.67.4. Configuration Options for Engagement Tracking") or [Section 41.3, “Using Policy for Engagement Tracking”](engagement_tracking_smtp.policy "41.3. Using Policy for Engagement Tracking"), respectively.

**X-MSYS-API Header Line Length**

SMTP defines a maximum line length of 1000 characters including CRLF. Since the X-MSYS-API header is a JSON-encoded string possibly containing many tags and metadata, it is likely that this limit will be exceeded. If the value of the JSON string is longer than 998 characters, it must be folded across multiple lines before the message is injected, as shown in the following example:

```
X-MSYS-API: {"options" : {"open_tracking" : false, "click_tracking" : true},
   "metadata" : {"key" : "value"}, "tags" : ["cat", "dog"], "campaign_id" :
   "my_campaign"}
```

When the header is unfolded on the receiving system, as per [rfc2822](https://www.ietf.org/rfc/rfc2822.txt), a single space will be added between each line of the header.

For example,

```
X-MSYS-API: {"options" : {"open_tracking" : false }, "campaign_id" : "my_awes
   ome_campaign" }
```

will be unfolded with a space in the **`"my_awes ome_campaign"`** string:

`X-MSYS-API: {"options" : {"open_tracking" : false }, "campaign_id" : "my_awes ome_campaign" }`

Ideally, header values should be folded on whitespace. To ensure whitespace is present in a JSON-encoded string in Perl, use the JSON module's **`space_before`** and **`space_after`** modifiers, as shown in the following example:

```
my $api_hash = {
  options => {
    open_tracking => JSON::false
  },
  campaign_id => "my_awesome_campaign"
};

my $js = JSON->new();
$js->space_before(1);
$js->space_after(1);

my $x_msys_api_string = $js->encode($api_hash);
```

**non-ASCII Characters in the X-MSYS-API Header**

If non-ASCII characters are present in the **`"campaign_id"`**, **`"tags"`**, or **`"metadata"`** fields, they must be escaped or rfc2047-encoded.

For example,

```
my $js = JSON->new();
$js->ascii(1);
```

will cause `$js->encode` to escape non-ASCII characters resulting in a JSON-encoded string such as:

```
X-MSYS-API: {"options" : {"open_tracking" : false, "click_tracking" : true},
   "metadata" : {"my_utf8" : "\u00e7\u00a7\u0081\u00e3\u0081\u00af\u00e3\u0082\u00ac" },
   "tags" : ["cat", "dog"], "campaign_id" : "my_campaign"}
```

**Invalid JSON Values in the X-MSYS-API Header**

If the X-MSYS-API header includes invalid JSON values, the SMTP message will be rejected with one of the following codes:

<a name="x-msys-api-error-table"></a>

**Table 41.4. SMTP Error Codes**

| Code | Examples |
| --- | --- |
| 550 | 5.6.0 X-MSYS-API 'metadata' must be of type 'json object <br/>5.6.0 smtpapi_campaign_id context is limited to 64 bytes<br/> |
| 421 | 4.3.3 [internal] smtpapi unable to generate unique transmission id |


|     |     |     |
| --- | --- | --- |
| [Prev](engagement_tracking_smtp)  | [Up](engagement_tracking_smtp) |  [Next](engagement_tracking_smtp.policy) |
| Chapter 41. Tracking Engagement for SMTP  | [Table of Contents](index) |  41.3. Using Policy for Engagement Tracking |

