| [Prev](modules.host_fingerprint)  | Chapter 14. Modules Reference |  [Next](modules.icu.php) |

## 14.37. http_io – HTTP I/O Provider

<a class="indexterm" name="idp20081456"></a>

The `http_io` module provides facilities for reading content located in an URI with the schema `http` and `https`. Momentum uses an I/O abstraction layer for reading Sieve++ scripts (and their includes). With this module, you specify remote web-accessible locations for script files that will be fetched on the fly.

### Note

This module is designed so that Sieve scripts can include web-accessible files on the fly. It *cannot* be used to include start-up configuration files.

### 14.37.1. Configuration

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

| [Prev](modules.host_fingerprint)  | [Up](modules.php) |  [Next](modules.icu.php) |
| 14.36. fingerprint – Host Fingerprinting  | [Table of Contents](index) |  14.38. icu – ICU |
