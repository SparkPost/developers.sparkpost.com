|     |     |     |
| --- | --- | --- |
| [Prev](esmtp_listener)  | Chapter 19. Configuring Inbound Mail Service Using SMTP |  [Next](esmtp_listener.reconfig_message) |

## 19.2. Inbound Email Relay or Gateway

When configuring Momentum as an inbound mail relay or gateway, you must specify for which domains you are willing to accept mail. Accepting mail from anyone destined to anywhere would make you an open relay and vulnerable to abuse. The `relay_domains` option controls this setting. For details, see [relay_domains](conf.ref.relay_domains "relay_domains").

|     |     |     |
| --- | --- | --- |
| [Prev](esmtp_listener)  | [Up](esmtp_listener) |  [Next](esmtp_listener.reconfig_message) |
| Chapter 19. Configuring Inbound Mail Service Using SMTP  | [Table of Contents](index) |  19.3. `Reconfig_Message` Option |

