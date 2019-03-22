| [Prev](modules.http_logger)  | Chapter 71. Modules Reference |  [Next](modules.icu) |

## 71.38. httpsrv – HTTP Server

The httpsrv module is the HTTP server infrastructure module. It, along with the [HTTP_Listener](http_listener "Chapter 20. Configuring Inbound Mail Service Using HTTP"), enables you to use the REST API.

### 71.38.1. Configuration

The httpsrv module must be loaded in the `msg_gen.conf` file, as follows:

`httpsrv { }`

This module only supports the two options common to all modules, namely `enabled` and `debug_level`.

For more information about the `debug_level` option, see [Section 15.5.2, “Module Debugging”](module_config#module_config.debugging "15.5.2. Module Debugging").

| [Prev](modules.http_logger)  | [Up](modules) |  [Next](modules.icu) |
| 71.37. http_logger – HTTP Requests and Responses  | [Table of Contents](index) |  71.39. icu – ICU |

