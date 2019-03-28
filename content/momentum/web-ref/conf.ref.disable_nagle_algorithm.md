|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delivery_response_timeout)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.disk_queue_drain_rate.php) |

<a name="conf.ref.disable_nagle_algorithm"></a>
## Name

disable_nagle_algorithm — disable nagle algorithm on sockets

## Synopsis

`disable_nagle_algorithm = false`

<a name="idp8963040"></a>
## Description

Momentum can be configured to disable the Nagle algorithm on the TCP connections it manages.

The default for this option is `false`.

### Warning

This is an advanced option. Thorough testing is recommended before deployment in a production environment.

<a name="idp8966528"></a>
## Scope

`disable_nagle_algorithm` is valid in the eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener and listen scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delivery_response_timeout)  | [Up](conf.ref.files.php) |  [Next](conf.ref.disk_queue_drain_rate.php) |
| delivery_response_timeout  | [Table of Contents](index) |  disk_queue_drain_rate |
