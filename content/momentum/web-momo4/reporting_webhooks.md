|     |     |     |
| --- | --- | --- |
| [Prev](reporting_metrics)  | Part VIII. Reporting and Engagement Tracking |  [Next](web-ui.webhooks) |

## Chapter 59. Using Webhooks for Event Data

**Introduction**

Webhooks provide an alternate way to get reporting data from Momentum. Instead of passively polling for data, webhooks push batches of events when they happen. Webhooks act as user-defined HTTP callbacks. When you create a webhook, you register a URL and specify the events for which you want reporting data. When those events occur, Momentum will post the data to your URL in batches of 10k or 30 seconds, whichever comes first. Your application can then perform whatever action is required based on your specific needs. Webhooks enables you to fully integrate your custom application with Momentum. If the endpoint does not respond within six seconds, it adds it to a retry queue to be sent at a later date. If a batch continues to fail, it will attempt to retry at a backoff interval for four hours. If a batch fails for four hours, it will be deleted.

You can create webhooks to push data for various types of events. When an event occurs, a batch of event data is HTTP POSTed to your target URL. This batch consists of one or more event records, each composed of a payload wrapped in a type-specific JSON envelope. The payload includes all the data related to that specified event.

### Tip

To respond quickly to a batch of events, defer any processing until after the 2xx response is made to the webhooks system. Non-2xx errors will be eventually retried. (Avoid retries by listening to http close events. These events will notify when Momentum webhooks timeout. Stopping executing code on the batch that timed out will help overall performance because that batch will be retried.)

**Receiving Event Data Using Webhooks**

This section provides instructions to create a webhook using the REST API. It introduces you to the Webhooks API. You will create a webhook for tracking engagement data and generate this data by sending the email that you created in the tutorial on tracking engagement.

### Note

Generation and engagement events are emitted by Message Generation, which is licensed separately from the core Momentum platform. For this tutorial, you must have Message Generation.

This tutorial assumes that you have completed the tutorial in [Chapter 61, *Tracking Engagement for HTTP*](engagement_tracking_http "Chapter 61. Tracking Engagement for HTTP") . A general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.

You must have a valid API key to complete this tutorial. If you do not, see [Chapter 43, *Creating an API Key*](create_apikey "Chapter 43. Creating an API Key") .

You will also need a URL to receive the event data.

Follow these steps to receive event data using webhooks:

1.  Specify your webhook properties.

    You create a webhook by first specifying the webhook’s properties in a JSON blob that will be included in the Webhooks API call. You must specify a name for the webhook, the URL of the target to which to send the event data, and the event types that will trigger the webhook.

    Optionally, you can include an authentication token. This token is present in the X-MessageSystems-Webhook-Token header of POST requests to the target URL and can be used in your target application to confirm that data is coming from your webhook. This simple example does not use authentication.

    Using your text editor, create the following JSON file named `webhook_example.json`. Be sure to use your URL for the target.

    {
      "name": "Example webhook",
      "target": "http://*`your_targetURL.com`*",
      "events": [
        "injection",
        "delivery",
        "open",
        "click"
      ]
    }

    Note that this example will get data for injection, delivery, open, and click event types.

2.  Create your webhook.

    You create a webhook by sending a HTTP POST request to the appropriate URL with your JSON blob. To access the Webhooks API, you send an HTTP request to **http://*`your.server.domain`*/api/v1/webhooks/**.

    At the command line, enter the following command to create your webhook:

    curl -X POST http://*`your.server.domain`*/api/v1/webhooks/ \
    -d @*`path/to/file/`*webhook_example.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `webhook_example.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    On creation, a test POST is sent to the target URL for validation. If this request does not receive an HTTP 200 response, your request to the Webhook API will fail with HTTP 400, and the webhook will not be created.

    If the test POST is successful, a response similar to the following will be displayed at the command line:

    {
       "results":{
          "id":"*`1cc94ef0-ab17-11e4-b135-0ff9de159aa7`*",
          "links":[
             {
                "href":"*`http://your.server.domain/api/v1/webhooks/1cc94ef0-ab17-11e4-b135-0ff9de159aa7`*",
                "rel":"urn.msys.webhooks.webhook",
                "method":[
                   "GET",
                   "PUT"
                ]
             }
          ]
       }
    }
3.  Inject a message into Momentum.

    After a 1 minute activation time, the new webhook will be ready to receive event data. Send the email that you created in the tutorial in [Chapter 61, *Tracking Engagement for HTTP*](engagement_tracking_http "Chapter 61. Tracking Engagement for HTTP") .

4.  Open the email and click the link.

    Open the email and click the link included in the message body.

5.  Confirm receipt of event data.

    Confirm that the event data posted to your target URL. Your click event data should be similar to the following:

    {
     "msys": {
      "track_event": {
          "user_agent":"                                                                                                                                     *```
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.77.4 (KHTML, like Gecko) »
            Version/7.0.5 Safari/537.77.4
    ```*                                                                                                                                     ",
          "message_id":"*`0000632c8b54d53f0a00`*",
          "customer_id":"*`1`*",
          "delv_method":"rest",
          "timestamp":"*`1418407074`*",
          "type":"click",
          "node_name":"*`example_node`*",
          "target_link_url":"http://messagesystems.com",
          "transmission_id":"*`11898458545848322`*",
          "accept_language":"en-us",
        }
      }
    }
    ### Note

    The response shown is an example. For the latest mapping of the fields that constitute a payload for a given event type, see the Webhooks API documentation at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

Congratulations! You have successfully created a webhook using the Webhooks API. In addition to the POST method used in this example, the Webhooks API supports several other methods. You can find more information in the Webhooks API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

**Managing Webhooks using the UI**

You can alos create and manage your webhooks in the web-based UI. For detailed instructions, see [Chapter 60, *Managing Your Webhooks in the UI*](web-ui.webhooks "Chapter 60. Managing Your Webhooks in the UI") .

|     |     |     |
| --- | --- | --- |
| [Prev](reporting_metrics)  | [Up](p.analytics) |  [Next](web-ui.webhooks) |
| Chapter 58. Using the Metrics API for Reporting  | [Table of Contents](index) |  Chapter 60. Managing Your Webhooks in the UI |

