| [Prev](modules.ilf_logger)  | Chapter 14. Modules Reference |  [Next](modules.inbound_audit.php) |

## 14.40. imageanalyzer – Module

<a class="indexterm" name="idp20121216"></a>

**Configuration Change. ** This feature is available starting from Momentum 3.0.23.

The imageanalyzer module supports the Image Analyzer engine used to identify pornographic or inappropriate image content within email. For more information see [Image Analyzer](http://www.image-analyzer.com/). You cannot configure this module using the web UI. To manually configure it be sure to consult [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

### Note

This module is only supported for Red Hat 5 32 bit operating systems.

In order to run this module, your license must be Image Analyzer enabled.

Momentum version 3.3 uses version `4.0.2.0` of the Image Analyzer Engine.

### 14.40.1. Configuration

This module is configured in the following way:

```
imageanalyzer "imageanalyzer1" {
 Threshold_Highly_Suspect = 74
 Threshold_Suspect = 50
 Engine_Sensitivity = 65
}
```

The followng options are available:

<dl className="variablelist">

<dt>Engine_Sensitivity</dt>

<dd>

Use this option to scale the engine sensitivity from 0 to 100\. The higher the value the higher the detection rate and the higher the false positive rate. Vice versa the lower the value the lower the detection rate and the lower the false positive rate. The default value for this option is `65`.

</dd>

<dt>Threshold_Highly_Suspect</dt>

<dd>

If a message's score is greater than or equal to this value an `image_analyzer_result` key is set in the message context with a value of `Highly-Suspect-image`. The default value for this option is `74`.

</dd>

<dt>Threshold_Suspect</dt>

<dd>

If the message's score is greater than or equal to this value, an `image_analyzer_result` key is set in the message context with a value of `Suspect-image`. The default value for this option is `50`.

</dd>

</dl>

To determine the results of a scan you need to look at the `image_analyzer_result` message context variable. Possible values are:

*   `Highly-Suspect-image`

*   `Suspect-image`

If no suspect images are detected, this context variable is not set.

| [Prev](modules.ilf_logger)  | [Up](modules.php) |  [Next](modules.inbound_audit.php) |
| 14.39. ilf_logger Module  | [Table of Contents](index) |  14.41. inbound_audit – Inbound traffic analytics |
