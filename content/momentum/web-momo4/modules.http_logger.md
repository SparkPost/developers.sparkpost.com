| [Prev](modules.host_fingerprint)  | Chapter 71. Modules Reference |  [Next](modules.httpsrv) |

## 71.37. http_logger – HTTP Requests and Responses

The http_logger module enables logging of HTTP requests and responses made by the [httpsrv Module](https://support.messagesystems.com/docs/web-rest-injector/rest.configuring.php).

### 71.37.1. Configuration

To configure the http_logger module, load it in the `ecelerity.conf` file. The following is the default configuration:

<a name="modules.http_logger.configuration.example"></a>

**Example 71.65. http_logger Configuration**

```
http_logger "http_logger"{
  log = "file:///var/log/ecelerity/httplog.ec"
}
```

The following is the configuration option defined by this module:

<dl className="variablelist">

<dt>log</dt>

<dd>

Define the logfile used by the http_logger. The default value for this option is `file:///var/log/ecelerity/httplog.ec`.

For details about the format of `httplog.ec`, see [Section 35.5, “`httplog`”](log_formats.httplog "35.5. httplog").

</dd>

</dl>

The default log file created by this logger is rotated by the utility script **ec_rotate**. For more information, see [ec_rotate](executable.ec_rotate "ec_rotate").

| [Prev](modules.host_fingerprint)  | [Up](modules) |  [Next](modules.httpsrv) |
| 71.36. fingerprint – Host Fingerprinting  | [Table of Contents](index) |  71.38. httpsrv – HTTP Server |

