---
Do I really need to verify the sending domain!? I want to send on behalf of my customers.
author: mary_thengvall
category: Sending Domain
---
SparkPost requires you to verify the domain you send from. You can do this with SPF, DKIM in your DNS record or sending an email to abuse@example.com or postmaster@example.com. You only need one of these in order for SparkPost to consider it a valid sending domain.
