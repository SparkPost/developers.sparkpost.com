|     |     |     |
| --- | --- | --- |
| [Prev](modules.delay_dsn)  | Chapter 14. Modules Reference |  [Next](modules.dkim.php) |

## 14.26. disclaimer – Module

<a class="indexterm" name="idp19162432"></a>

Use the disclaimer module to append a message to an email. For example, this module may be used to indicate that an email has been scanned. The message will be inserted into the footer of the email.

### 14.26.1. Configuration

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

### 14.26.2. Sieve Usage

Use the Sieve `disclaimer_add` function to add a plain or an HTML message to an email.

When using `html` as a key, the module will look for all text/html parts that are not attachments and append the HTML disclaimer. When using `plain` as a key, the module will look for all text/plain parts that are not attachments and append the plain disclaimer. If using both, it will look for both, adding the html disclaimer to the html parts, and the plain disclaimer to the plain parts.

### 14.26.3. See Also

[disclaimer_add](sieve.ref.disclaimer_add "disclaimer_add")

|     |     |     |
| --- | --- | --- |
| [Prev](modules.delay_dsn)  | [Up](modules.php) |  [Next](modules.dkim.php) |
| 14.25. delay_dsn – Delay DSN Generation  | [Table of Contents](index) |  14.27. dkim – DomainKeys Identified Mail Signatures |
