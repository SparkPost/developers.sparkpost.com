---
question: I set up DKIM hours ago but it still hasn't been verified.
author: chris_wilson
category: Domains
---
It's possible that you've set up your zone record incorrectly. Most providers will automatically append your domain name to whatever subdomain/host name you enter, so make sure you haven't included your domain in the subdomain/host field when you registered.

e.g. if your domain is `example.com` and your DKIM record is `spch0316._domainkey`, don't include `spch0316._domainkey.example.com` in your subdomain/host field.
