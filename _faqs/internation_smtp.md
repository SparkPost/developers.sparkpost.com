---
question: I am overseas and SMTP is really slow. Is something wrong?
author: mary_thengvall
category: SMTP
---
Our servers are currently hosted in the US region so protocols, like SMTP, that make a lot of round trips will be subject to greater latency as you are seeing. We recommend you use our RESTful interface if possible. Or sending SMTP from a US region server.  We are working on providing our servers in other regions. Keep an eye on our change log here https://support.sparkpost.com/customer/portal/articles/1936102-change-log for more updates on this.
