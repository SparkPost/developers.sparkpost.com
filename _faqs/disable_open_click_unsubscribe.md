---
question: How do I disable open/click and unsubscribe in SMTP?
author: mary_thengvall
category: SMTP
---
You can add this message header to your transmission  `X-MSYS-API: { "options" : { "open_tracking" : false, "click_tracking" : false } }`  or turn it off for all your SMTP transmissions by default by visiting the [SMTP Relay page](https://app.sparkpost.com/account/smtp).
