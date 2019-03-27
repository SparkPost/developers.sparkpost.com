| [Prev](web-ui.webhooks.create)  | Chapter 60. Managing Your Webhooks in the UI |  [Next](web-ui.webhooks.update) |

## 60.3. Testing Your Webhook

In addition to the validation performed when you create your webhook, you can test your webhook by posting an example message event batch to the target URL. The test sends an HTTP request to the client endpoint in the same way that the batch transmitter will. This test will validate that the target responds with an "OK" (i.e. HTTP 200) and return a detailed information response.

From the Webhooks tab, click the icon in the upper-right corner of the webhook you want to test. In the drop-down list, click Test Webhook, as shown in [Figure 60.4, “Test Webhook”](web-ui.webhooks.test#figure_test_webhook "Figure 60.4. Test Webhook").

<a name="figure_test_webhook"></a>

**Figure 60.4. Test Webhook**

![Test Webhook](https://support.messagesystems.com/docs/web-momo4/images/test_webhook.png)

The **`Test Webhook`** window displays the example message event batch that will be posted to your target webhook, as shown in [Figure 60.5, “Test Request”](web-ui.webhooks.test#figure_test_request "Figure 60.5. Test Request"). The **`Request`** shows the full content of the HTTP request, which is exactly the same as what the batch transmitter would send to the client endpoint. To continue with the test, click **`Submit Test`**

<a name="figure_test_request"></a>

**Figure 60.5. Test Request**

![Test Request](https://support.messagesystems.com/docs/web-momo4/images/test_request.png)

The test returns a detailed information response, as shown in [Figure 60.6, “Test Response”](web-ui.webhooks.test#figure_test_response "Figure 60.6. Test Response").

<a name="figure_test_response"></a>

**Figure 60.6. Test Response**

![Test Response](https://support.messagesystems.com/docs/web-momo4/images/test_response.png)

The **`Response`** shows the full content of the HTTP response sent by the client endpoint after receiving the test request. It includes a standard HTTP status. In the example response, the "OK" **(HTTP/1.1 200)** indicates that the example message event batch was successfully posted to the target URL. Any other response code indicates some type of error.

| [Prev](web-ui.webhooks.create)  | [Up](web-ui.webhooks) |  [Next](web-ui.webhooks.update) |
| 60.2. Creating a Webhook  | [Table of Contents](index) |  60.4. Updating Your Webhook |

