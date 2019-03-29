|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.webhooks.test)  | Chapter 60. Managing Your Webhooks in the UI |  [Next](web-ui.webhooks.delete) |

## 60.4. Updating Your Webhook

You can edit any configuration option of an existing webhook. From the **`Webhooks`** tab, click the icon in the upper-right corner of the webhook you want to update. In the list, click `Edit Configuration`, as shown in [Figure 60.7, “Update Webhook”](web-ui.webhooks.update#figure_update_webhook "Figure 60.7. Update Webhook").

<a name="figure_update_webhook"></a>

**Figure 60.7. Update Webhook**

![Update Webhook](/momentum/web-momo4/images/update_webhook.png)

Make your changes in the **`Edit Webhook`** form, as shown in [Figure 60.8, “Edit Webhook”](web-ui.webhooks.update#figure_edit_webhook "Figure 60.8. Edit Webhook"), and then click `Update`.

<a name="figure_edit_webhook"></a>

**Figure 60.8. Edit Webhook**

![Edit Webhook](/momentum/web-momo4/images/edit_webhook.png)

If the webhook successfully updates, a message will briefly display upon return to the **`Webhooks`** tab. Batches currently queued for delivery to this webhook will not be affected by these modifications. For example: If you change the webhook’s target URL, batches already queued for delivery will still be posted to the previous URL.

Also if you update the target URL, a test POST will be sent to the URL for validation, as described in [Section 60.2, “Creating a Webhook”](web-ui.webhooks.create "60.2. Creating a Webhook").

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.webhooks.test)  | [Up](web-ui.webhooks) |  [Next](web-ui.webhooks.delete) |
| 60.3. Testing Your Webhook  | [Table of Contents](index) |  60.5. Deleting a Webhook |

