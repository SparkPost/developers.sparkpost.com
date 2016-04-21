---
question: Why do I get the error "POST to webhook target URL failed"?
author: jason_rhodes
category: Webhooks
---
To use webhooks, you have to have a place for us to send event data, which you specify as the "target URL" when you create a webhook. If that URL does not accept HTTP POST requests containing JSON data and then return a 200 response, then webhooks won't work for you. To verify this, we send a test payload to your URL whenever you create or update the webhook. If the test payload fails, you get this error.

To fix, take a look at the status code that came back, displayed below the error, and get in touch with whoever manages your target URL to find out why it's not responding successfully to POST requests.
