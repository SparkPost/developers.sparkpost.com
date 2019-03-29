|     |     |     |
| --- | --- | --- |
| [Prev](conf.ldaps)  | Chapter 2. Configuration |  [Next](conf.initial.conf.php) |

## 2.4. Configuring for Multiple Event Loops in Momentum 3.6

**Configuration Change. ** This feature is available as of version 3.6.

Prior to version 3.6, Momentum uses a single event-scheduler thread. With the ready availability of increasing numbers of CPU cores, this single thread architecture can underutilized CPU capacity. The aim of a multiple event loop configuration is to extend Momentum so that it scales with multi-core CPUs so that the overall performance of Momentum is not limited by the event scheduler thread. This is done by creating a pool of event scheduler instances that are running in separate threads. Tasks that are performed in the event scheduler thread will now be farmed out to this pool of scheduler instances. These tasks include, message reception, message delivery, mail queue maintenance, DNS lookup and event operations performed by modules.

**Supported Platforms**

The platforms that support multiple event loops are Red Hat Enterprise Linux 5 (x86_64) and Red Hat Enterprise Linux 6 (x86_64). Configuring Momentum for multiple cores requires an additional license ((the "Supercharger" license)). This license specifies a maximum number of event loops. When configuring an event loop, the `concurrency` option cannot exceed the licensed number of event loops. For a discussion of the Momentum license file see [Section 1.4.8, “Installing the License File”](install.prepare#install.license "1.4.8. Installing the License File"). Currently, you cannot use the web UI to configure multiple event loops. See [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes.php "2.8. Best Practices for Manually Changing Configuration Files") for instructions on changing configuration files.

### Warning

You cannot use Sieve with multiple event loops. If you include the Sieve module in your configuration file, Momentum will not start up and a warning will be written to the panic log. If you are upgrading to a multiple event loop configuration of Momentum, be sure to remove the Sieve module from your configuration file.

If you have purchased the additional license and wish to take advantage of multiple event loops you must make configuration changes after upgrading to version 3.6\. Find below a typical configuration.

<a name="multi-core.example.receive"></a>

**Example 2.1. Multiple event loops**

```
threadpool accept {
  concurrency = 1
}

eventloop "pool" {
  concurrency = 10
}
# associate mail delivery and maintener_pool with eventloop
delivery_pool = "pool"
maintainer_pool = "pool"

esmtp_listener {
  # associate this listener with the eventloop
  event_loop = "pool"
  ...

  listen ":25" {
    concurrency = 1
    pool_name = "accept"
  }
}
```

In the preceding code an event loop pool is defined and this pool is associated with an SMTP listener, SMTP delivery and a maintainer threadpool. The `delivery_pool` option handles threading for email delivery, the `event_loop` option inside the listener scope handles threading for email reception and the `maintainer_pool` option handles threading for other operations.

The new options introduced in version 3.6 to support multiple event loops configuration are:

*   [eventloop](conf.ref.eventloop "eventloop")

*   [delivery_pool](conf.ref.delivery_pool "delivery_pool")

*   [maintainer_pool](conf.ref.maintainer_pool "maintainer_pool")

*   [event_loop](ecelerity.conf#ecelerity.conf3.listeners.multi-core "Listener Options and Multiple Event Loops")

For more information follow the preceding links.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ldaps)  | [Up](conf.php) |  [Next](conf.initial.conf.php) |
| 2.3. Setting Up Active Directory Authentication With Momentum 3.2.2  | [Table of Contents](index) |  2.5. Options that Must Change |
