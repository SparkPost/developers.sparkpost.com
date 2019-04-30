|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.webhooks.delete)  | Part VIII. Reporting and Engagement Tracking |  [Next](p.policy) |

## Chapter 61. Tracking Engagement for HTTP

**Introduction**

Understanding how your messaging is or isn't performing is a critical factor in creating a successful campaign. Just knowing that your messages are being delivered is not enough. You need to know how your customers interact with your message content. Are your customers opening your messages? Are they clicking the links you provide? Momentum provides real-time event tracking data, enabling you to track campaigns as they are being sent and to make modifications to improve customer engagement.

Engagement describes how a recipient interacts with your message. An engagement event occurs when the recipient opens an email or clicks a link within an email. By default, open tracking and click tracking are enabled in Momentum's configuration, if Message Generation is selected during installation. You can override the configuration option for a specific stored template by specifying the attributes in the template or for a specific transmission by specifying the attributes in the transmission. For details about these attributes, see the Transmissions and Templates API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

### Note

If you want to disable engagement tracking globally, change the configuration option in the msg_gen module. See [Section 71.48, “msg_gen – Message Generation”](modules.msg_gen "71.48. msg_gen – Message Generation").

When you create your recipient lists and transmissions, you specify various attributes including metadata using the [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html). This data is included in the tracked URLs for each message. For open tracking, Momentum inserts an open-tracked image into the message. For click tracking, Momentum converts the target link into a click-tracked link. By default, metadata is included for open and click tracking, if specified.

**Configuration Change. ** Version 4.1 and earlier include metadata in open tracking only. As of version 4.1-HF4, metadata is available in open tracking and optionally in click tracking.

### Note

If you want to exclude metadata from click tracking, change the configuration option in the [Section 71.32, “engagement_tracker – HTTP Engagement Tracking”](modules.engage_tracker "71.32. engagement_tracker – HTTP Engagement Tracking") module.

Tracked links include an expiry time of 1 year. After that time, engagement events will not be reported for that specific message.

With click and open tracking enabled, you can track engagement using the REST API or a specially designed report in the UI. The Engagement report enables you to drill down to the level of a link within your message. Using this report, you can quickly view the number of messages that were accepted, were opened, and had a link selected and view how many times a link within your message was clicked.

**Including a Link in the Message Body**

This section provides instructions to send an email using an inline template with a link in the message body and track engagement in the UI. The template will show how to override the configuration option, in the event you have globally disabled this feature. Later sections will discuss tracking engagement data and retrieving reporting data using the REST API.

### Note

Engagement events are emitted by Message Generation, which is licensed separately from the core Momentum platform. For this tutorial, you must have Message Generation.

This tutorial assumes that you have completed the tutorial in [Chapter 45, *Generating a Transmission*](message_gen "Chapter 45. Generating a Transmission") . A general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.

You must have a valid API key to complete this tutorial. If you do not, see [Chapter 43, *Creating an API Key*](create_apikey "Chapter 43. Creating an API Key") .

Follow these steps to create a transmission with a link in the message body:

1.  Specify your input data.

    This example uses the simple inline template from the tutorial in [Chapter 45, *Generating a Transmission*               ](message_gen "Chapter 45. Generating a Transmission") as a starting point and adds a link in the message body.

    Using your text editor, create the following JSON file named `sample_link.json`. Be sure to use your sender and recipient addresses.

    {
       "options":{
          "open_tracking":true,
          "click_tracking":true
       },
       "return_path":"*`sender@your_address.com`*",
       "recipients":[
          {
             "address":{
                "email":"*`recipient@their_address.com`*"
             }
          }
       ],
       "content":{
          "from":"*`sender@your_address.com`*",
          "subject":"Tracking Engagement",
          "text":"Welcome to Momentum!\r\nClick http://www.messagesystems.com to learn more about Momentum."
       }
    }

    The "content" object includes a link to the Message Systems, Inc. website so that you can verify click tracking in the UI.

    ### Note

    The [Substitutions Reference](https://support.messagesystems.com/docs/web-rest/v1_index.html) in the REST API documentation provides important information about including links in your messages. See the sections on *Personalized Links* , *Link Names* , *URLs Generated Using Substitution Data* , and *Links and Substitution Expressions Within Substitution Values* .

    Engagement tracking is globally enabled or disabled in your configuration settings. You can override this setting at the transmission or template level. If your engagement tracking is disabled by default, include the following attributes as shown in this example to override open and click tracking at the transmission level.

    ```
    "options":{
      "open_tracking":true,
      "click_tracking":true
    }
    ```

    ### Note

    The precedence for engagement tracking options, from highest to lowest is as follows:

    *   transmission level

    *   template level

    *   msg_gen level

    For example, if click tracking is not specified at the transmission level, the "click_tracking" attribute at the template level is used. If the template level is also not specified, the setting of the configuration option in the msg_gen module is used.

    By default, open tracking and click tracking are enabled in Momentum's configuration, if Message Generation is selected during installation.

2.  Inject your message into Momentum.

    At the command line, enter the following command to inject your email:

    curl -X POST http://*`your.server.domain`*/api/v1/transmissions/ \
     -d @*`path/to/file/`*sample_link.json \
     -H "Content-Type: application/json" \
     -H "Authorization: *`your_api_key`*"

    where `sample_link.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, a response similar to the following will be displayed at the command line:

    {
       "results":{
          "total_rejected_recipients":0,
          "total_accepted_recipients":1,
          "id":"*`11668787484950529`*"
       }
    }

    This response shows that one email was accepted and none were rejected.

**View Engagement Data**

Follow these steps to view your engagement data:

1.  Open the email and click the link.

    Verify that your recipient received the email. Open the email and click the link included in the message body.

2.  Open the UI and navigate to the Engagement report. In the Engagement report, confirm that your message was successfully injected into Momentum (Targeted), accepted by the ISP (Accepted), and opened (Unique Confirmed Opens) and that the link was clicked (Unique Clicks), as shown in [Figure 61.1, “Engagement Report”](engagement_tracking_http#figure_engagement "Figure 61.1. Engagement Report").

    <a name="figure_engagement"></a>

    **Figure 61.1. Engagement Report**

    ![Engagement Report](/momentum/web-momo4/images/engagement.png)

Congratulations! You have successfully sent an email with a link and tracked the engagement of your message in the UI. To learn more about using the Engagement report, see [Section 57.4, “Evaluating Your Campaign Performance”](web-ui.reports.evaluating.campaign.performance "57.4. Evaluating Your Campaign Performance").

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.webhooks.delete)  | [Up](p.analytics) |  [Next](p.policy) |
| 60.5. Deleting a Webhook  | [Table of Contents](index) |  Part IX. Writing Policy |

