---
question: How can I test my transmission without actually sending to recipients?
author: mary_thengvall
category: transmissions
---
If you append ".sink.sparkpostmail.com" to the recipients address it will be sent to our mail sink. Here is an example if you have a recipient called "someone@example.com" then use "someone@example.com.sink.sparkpostmail.com" instead. Not these messages are counted just like any other message.
