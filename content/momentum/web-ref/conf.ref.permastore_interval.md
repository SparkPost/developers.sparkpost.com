|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.pcre_cache_ttl)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.pidfile.php) |

<a name="conf.ref.permastore_interval"></a>
## Name

permastore_interval — the frequency for saving various statistics

## Synopsis

`permastore_interval = 300`

<a name="idp11009072"></a>
## Description

Statistics related to global connections, global and per-binding signing and sieve are stored in an SQLite database whose location is configured by the `Masterdb_File`. Every Permastore_Interval a snapshot of these statistics is saved so that in the event of a crash, this data is not lost. These values are also saved during a normal shutdown.

if your disk subsystem is under pressure, and you have a large number of bindings and domains, Momentum may become unresponsive while it journals statistics to the permastore. As of version 3.1, in these circumstances you may turn off the periodic permastore writes by setting the interval to `0`. It is safe to set this to `0` even if you are not experiencing unresponsive behavior.

The default value for this option is `300`.

<a name="idp11013952"></a>
## Scope

permastore_interval is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.pcre_cache_ttl)  | [Up](conf.ref.files.php) |  [Next](conf.ref.pidfile.php) |
| pcre_cache_ttl  | [Table of Contents](index) |  pidfile |
