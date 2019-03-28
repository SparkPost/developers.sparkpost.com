|     |     |     |
| --- | --- | --- |
| [Prev](using_dkim.validation)  | Part III. Configuring Momentum |  [Next](outbound_mail) |

## Chapter 24. Configuring Multiple Event Loops

To fully utilize the capacity of multi-core CPU architectures, you can configure Momentum for multiple event loops. This configuration enables Momentum to scale so that the overall performance is not limited by a single event-scheduler thread. Instead, a pool of event scheduler instances is created, running in separate threads. Tasks that are performed in the event scheduler thread will now be farmed out to this pool of scheduler instances. These tasks include message reception, message delivery, mail queue maintenance, DNS lookup, and event operations performed by the various modules.

The platforms that support multiple event loops are Red Hat Enterprise Linux 5 (x86_64) and Red Hat Enterprise Linux 6 (x86_64).

### Note

Configuring Momentum for multi-core CPUs requires an additional Supercharger license. This license specifies a maximum number of event loops. When configuring an event loop, the `concurrency` option cannot exceed the licensed number of event loops.

To enable the multiple event loop feature for SMTP and HTTP injection, add the following options to your [`ecelerity.conf`](conf.ref.ecelerity.conf "15.6. ecelerity.conf File") file:

1.  Define a new [eventloop](config.ref.eventloop "eventloop") pool called "events_pool" and set the concurrency (i.e. number of event loops) to 75% of the number of available CPUs.

    eventloop "events_pool" {
      concurrency = *`75%_of_available_CPUs`*
    }
2.  Associate email delivery with the new eventloop pool by assigning the eventloop name to [delivery_pool](config.ref.delivery_pool "delivery_pool").

    `delivery_pool = "events_pool"`
3.  Associate mail queues, DNS lookup, and module events with the new eventloop pool by assigning the eventloop name to [maintainer_pool](config.ref.maintainer_pool "maintainer_pool").

    `maintainer_pool = "events_pool"`
4.  Associate the SMTP listener with the new eventloop pool by assigning the eventloop name to [event_loop](config.ref.event_loop "event_loop") inside the listener scope.

    ```
    ESMTP_Listener {
      event_loop = "events_pool"
      Listen ":25" {
        Concurrency = 1
      }
      ...
    }
    ```

5.  Associate the HTTP listener with the new eventloop pool by assigning the eventloop name to [event_loop](config.ref.event_loop "event_loop") inside the listener scope.

    ```
    HTTP_Listener {
      event_loop = "events_pool"
       ...
    }
    ```

After you edit your ecelerity.conf file, you must restart the ecelerity process using **/opt/msys/ecelerity/bin/ec_ctl** — issuing the ec_console command **config reload**        will not suffice. See [ec_ctl](executable.ec_ctl "ec_ctl").

|     |     |     |
| --- | --- | --- |
| [Prev](using_dkim.validation)  | [Up](p.configuration) |  [Next](outbound_mail) |
| 23.2. DKIM Validation  | [Table of Contents](index) |  Chapter 25. Configuring Outbound Mail Delivery |

