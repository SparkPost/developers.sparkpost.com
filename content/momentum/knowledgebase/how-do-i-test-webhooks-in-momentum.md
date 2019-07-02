# How do I test webhooks in Momentum?

## What is a webhook?
A webhook is an HTTP-enabled callback. Basically, it is a web-based URL to which data is POSTed when an event occurs. In Momentum 4.x, there are multiple events which can cause a webhook to be called; for example, when a message is injected. The data in the POST to the webhook URL is JSON-encoded and includes various details about the event or events which triggered the webhook. Webhooks are configured in the Momentum web-based UI 

## How do I test webhooks?
To test a webhook, you need two things. First, you need to cause an event to happen which can trigger a webhook call. The easiest way to do this is probably to inject a message.

Second, you need to have an HTTP endpoint which will be called by the webhook using an HTTP POST. One quick-and-easy way to create such an endpoint is with Webhook.site. This free website allows you to create a temporary URL which can receive POSTs and show you what was sent to that URL. To set up an endpoint, go to http://webhook.site. Click on the "New URL" on the upper right corner of the page. This would give you a permanent unique URL that would be your webhook endpoint. That's it! 

If you have successfully enabled webhooks post-install, Momentum should be pushing out the events as they happen.  Do a simple test by injecting a message and observing if 

- webhook endpoint receives data
- write several other ways of checking - Rabbit, mainlog.ec, htttplog


## Key operational details:

Webhooks must be configured in the text based configuration file /opt/msys/app/webhooks-api/config/webhooks.json 

- Any webhook batch that does not receive an HTTP 200 response will be retried for a total of 4 hours before the data is discarded.
- Each webhook batch contains the header X-MessageSystems-Batch-ID, which is useful for auditing and prevention of processing duplicate batches.
- Webhooks posting to your endpoint will timeout after 10 seconds. For best results, write webhook batches to disk and then process asynchronously to minimize data loss if you have a problem with your database.

## What are common caveats and gotchas?
- Endpoint unable to accept JSON package
    - Ensure that you test the collector thoroughly including the firewall
    - Monitor collector status diligently
- Authentication on the endpoint fails
    - If auth depends on external data sources, ensure they are monitored
- JSON package too large
    - Collectors often to not take into consideration the large package size
- RabbitMQ process stalls on node
    - Webhooks delivery is dependent on RabbitMQ in Momentum
- NOT cluster aware
    - Webhooks are node specific. Each node pushes its own data to the endpoint
