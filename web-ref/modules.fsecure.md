|     |     |     |
| --- | --- | --- |
| [Prev](modules.fbl)  | Chapter 14. Modules Reference |  [Next](modules.host_fingerprint.php) |

## 14.35. fsecure – F-Secure

<a class="indexterm" name="idp20041616"></a><a name="idp20043248"></a>

**Example 14.67. fsecure module**

```
av_fsecure "av_fsecure1" {
  daemon = "/tmp/.fsav-65534"
  timeout = 60
  action = pass
  paranoid = false
  context_variable = "virus"
  skip_context_variable = "skip_virus_check"
  file_base = "/var/tmp"
}
```

In version 3.0, the antivirus module does not need to be explicitly included.

**Configuration Change. ** This module is **not** supported in version 3.1.

<dl className="variablelist">

<dt>daemon</dt>

<dd>

The F-Secure antivirus runs as an independent process, and relies on a Unix domain socket for synchronization. The socket name defaults to `/tmp/.fsav-#####`, where "#####" is the userid that is executing the daemon. See the FSecure documentation at [http://www.f-secure.com/](http://www.f-secure.com/) for more details on setting the socket name. This engine runs in the IO pool by default.

</dd>

</dl>

For a list of the configuration options that this module shares with other antivirus modules see [Section 14.5.1, “antivirus Configuration”](modules.antivirus#modules.antivirus.configuration "14.5.1. antivirus Configuration").

This module supports the **f_secure_avscan** Sieve command. For more information see [antivirus](sieve.ref.antivirus "antivirus").

For more information about F-Secure see [http://www.f-secure.com/](http://www.f-secure.com/).

|     |     |     |
| --- | --- | --- |
| [Prev](modules.fbl)  | [Up](modules.php) |  [Next](modules.host_fingerprint.php) |
| 14.34. fbl – Feedback Loop Module  | [Table of Contents](index) |  14.36. fingerprint – Host Fingerprinting |
