|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.webhooks)  | Chapter 60. Managing Your Webhooks in the UI |  [Next](web-ui.webhooks.test) |

## 60.2. Creating a Webhook

In the **`Webhooks`** tab, click the **`New Webhooks`** icon in the upper-right corner to open the Create New Webhook form, as shown in [Figure 60.2, “Create New Webhook”](web-ui.webhooks.create#figure_create_webhook "Figure 60.2. Create New Webhook").

<a name="figure_create_webhook"></a>

**Figure 60.2. Create New Webhook**

![Create New Webhook](/momentum/web-momo4/images/create_webhook.png)

Enter the following information:

*   Webhook Name - User-friendly name for the webhook

*   Target URL - URL of the target to which to post data

*   Authentication - (optional) Authentication token to present in the X-MessageSystems-Webhook-Token header of POST requests to the target URL

    Use this token in your target application to confirm that data is coming from your webhook.

To receive all event types on the webhook, click the `Send all event types` option. If you want only select event types, click the `Let me choose event types` option and select from the list displayed. Events are categorized as Message, Generation, or Engagement , as shown in [Figure 60.3, “Event Types”](web-ui.webhooks.create#figure_event_types "Figure 60.3. Event Types").

<a name="figure_event_types"></a>

**Figure 60.3. Event Types**

![Event Types](/momentum/web-momo4/images/event_types.png)

When complete, click `Create` to create your new webhook.

On creation, a test POST is sent to the target URL for validation. If this request does not receive an HTTP 200 response, the webhook will not be created, and you will receive a validation error in the  **`Create New Webhooks`** form.

If the test POST is successful, a message will briefly display upon return to the **`Webhooks`** tab. The events that you selected will begin to be posted to the target URL after after a 1 minute activation time.

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.webhooks)  | [Up](web-ui.webhooks) |  [Next](web-ui.webhooks.test) |
| Chapter 60. Managing Your Webhooks in the UI  | [Table of Contents](index) |  60.3. Testing Your Webhook |

