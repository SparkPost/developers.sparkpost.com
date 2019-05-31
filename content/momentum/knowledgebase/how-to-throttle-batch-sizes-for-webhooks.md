# How To Throttle Batch Sizes For Webhooks

## Overview
This document outlines how to adjust the batch sizes that are sent through our webhooks.

## Before proceeding
> The first recommendation when it comes to adjusting batch sizes is don't do it. We do not recommend changing these settings for the following reasons:
> Reducing the batch size can result in increased HTTP requests to a customer's endpoint, causing it to get overwhelmed
> If customer endpoints get overwhelmed it can result in a drastic increase in RabbitMQ queue sizes

## Recommendations
If we don't want to reduce the batch sizes, what can we do?

- Ensure that customer endpoints are not doing complex processing synchronously. For example, transforming the data by looping over every item in the batch and only responding with a 200 when complete. Customers should respond with a 200 as quickly as possible and offload any heavy computation asynchronously.
- Ensure that customers performance test their endpoints. Customers have large variations in sending traffic. When creating an endpoint they should know what their burst rates are and performance test their endpoint accordingly.
- Ensure that customers understand what impacts the size of batches coming through. There are many variables that can increase the size of data coming through:
    - Which events are selected to be sent to the webhook - does the customer need every event? Or do they just need message events and engagement events?
    - Data about a message - campaign ID, metadata, tags, etc. - all this information gets sent through webhooks - the more customization you do, the bigger the payload

## Updating configuration
### Important caveats
- If a customer has ack set to false, restarting the webhooks batch process can result in data that is being sent to the endpoint the first time to be lost
- We recommend setting ack to true if you are going to update the batch sizes
- Note RabbitMQ queue sizes before the update, and monitor RabbitMQ queue sizes after the update - if you see rapidly rising queue sizes that are not draining, you likely have a problem and should consider reverting the configuration
- Keep an eye on the log file /var/log/msys-nodejs/webhooks-batch.js.log to ensure no errors appear


### Instructions
> You must ensure that prefetchCount is LARGER than batchSize to allow for a new batch to be started while an old batch is being transmitted to the customer endpoint.



1. Add the following to /opt/msys/app/webhooks-batch/config/production.json (NOTE ack is not required, but recommended if not already set):
```
"batcher": {
  "batchSize": <number>,
  "prefetchCount": (3 x <number>),
  "ack": true
}
```

2. Restart the webhooks batch process:

```
/etc/init.d/msys-app-webhooks-batch restart
```
