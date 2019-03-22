| [Prev](conf.ref.delayed_binding_domain_fuzz)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.delivery_method) |

<a name="conf.ref.delayed_queue_scan_interval"></a>
## Name

delayed_queue_scan_interval — how often to call the maintainer for a domain

## Synopsis

`delayed_queue_scan_interval = 15`

<a name="idp24259248"></a>
## Description

The primary function of the `delayed_queue_scan_interval` option is to determine how often to call the maintainer for a domain. If there are messages on the active queue, then it is called at least every delayed_queue_scan_interval. If all the messages are on the delayed queue, then the maintainer is scheduled for the next attempt on the first delayed message.

Additionally, when the maintainer is called, it will sweep any delayed messages that are ready to go onto the active queue. If there are constantly active messages, `delayed_queue_scan_interval` will control how often the delayed messages get swept onto the active queue.

### Note

This option has no effect when the entire queue is delayed.

The default value is `15`.

<a name="idp24264896"></a>
## Scope

delayed_queue_scan_interval is valid in the global scope.

| [Prev](conf.ref.delayed_binding_domain_fuzz)  | [Up](config.options.ref) |  [Next](conf.ref.delivery_method) |
| delayed_binding_domain_fuzz  | [Table of Contents](index) |  delivery_method |

