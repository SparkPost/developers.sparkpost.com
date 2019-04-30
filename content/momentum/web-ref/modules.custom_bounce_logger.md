|     |     |     |
| --- | --- | --- |
| [Prev](modules.csapi)  | Chapter 14. Modules Reference |  [Next](modules.custom_logger.php) |

## 14.23. custom_bounce_logger – Custom Bounce Logging

<a class="indexterm" name="idp18864944"></a>

**Configuration Change. ** This feature is available as beta in Momentum 3.6.5.

The `custom_bounce_logger` is similar to the `bounce_logger` module. It supports the same functionality as the `bounce_logger` and adds the capability to append a "User_String" to the end of each bounce record. This addition can be used to include some message context data in each bounce record.

### 14.23.1. Configuration

The writing of custom_bounce_logger format logs is configured in your `ecelerity.conf` file. To load the custom_bounce_logger module and include the connection context variable "foo" in each log record, you add the following lines to the main body of your `ecelerity.conf` file:

<a name="example.custom_bounce_logger"></a>

**Example 14.39. custom_bounce_logger module**

```
custom_bounce_logger custom_bounce_logger1 {
    bouncelog = "/var/log/ecelerity/bouncelog.cl"
    user_string = "%{vctx_conn:foo}"
 }
```

### Note

The user string uses Sieve++-style macros and expands them, while most other custom logging uses custom_logger-style macros which have a different format. For more information on Sieve++, see [Section 8.4, “Sieve++, Momentum-specific extensions”](sieve.ecaddons "8.4. Sieve++, Momentum-specific extensions").

### 14.23.2. See Also

[Section 14.13, “bounce_logger – Momentum-Style Bounce Logging”](modules.bounce_logger "14.13. bounce_logger – Momentum-Style Bounce Logging")

|     |     |     |
| --- | --- | --- |
| [Prev](modules.csapi)  | [Up](modules.php) |  [Next](modules.custom_logger.php) |
| 14.22. csapi – The Content Scanning API Module  | [Table of Contents](index) |  14.24. custom_logger – Customizable Logging |
