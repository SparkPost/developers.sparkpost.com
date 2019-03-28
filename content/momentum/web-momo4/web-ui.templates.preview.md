|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.templates.create)  | Chapter 48. Managing Your Templates in the UI |  [Next](web-ui.update.template) |

## 48.3. Previewing and Testing Your Template

You can preview and test your template by specifying test data in the **`New Template form`**. Test data must be in the form of a JSON object of key/value pairs of recipient-specific data. Click `Edit`, select the **`Test Data`** tab, and type your Test Data using the online editor. Note that the test data is not saved.

[Figure 48.6, “Test Data”](web-ui.templates.preview#figure_test_data "Figure 48.6. Test Data") shows test data for the Simple Template. In this example, *John*, *simple stored template* , and *My Company*         will replace *{{name}}*, *{{subject}}*, and *{{company}}*, respectively, in the preview of your template.

<a name="figure_test_data"></a>

**Figure 48.6. Test Data**

![Test Data](https://support.messagesystems.com/docs/web-momo4/images/test_data.png)

### 48.3.1. Previewing Your Email

You can preview the HTML content, plain text content, and top-level header substitution of your email using the UI. To `Preview` your template, click Preview and select the appropriate tab.

[Figure 48.7, “Preview Template”](web-ui.templates.preview#figure_preview_template "Figure 48.7. Preview Template") shows a preview of the HMTL content for the Simple Template. Notice the substitution for *{{name}}* and *{{subject}}*.

<a name="figure_preview_template"></a>

**Figure 48.7. Preview Template**

![Preview Template](https://support.messagesystems.com/docs/web-momo4/images/test_data.png)

[Figure 48.8, “Preview Template Details”](web-ui.templates.preview#figure_preview_details "Figure 48.8. Preview Template Details") shows a preview of the Template Details for the Simple Template. Notice the substitution for *{{name}}* and *{{company}}*.

<a name="figure_preview_details"></a>

**Figure 48.8. Preview Template Details**

![Preview Template Details](https://support.messagesystems.com/docs/web-momo4/images/preview_details.png)

### 48.3.2. Sending a Test Email

In addition to the preview function, you can send a test email from the UI, using your test data to expand your template. Click the arrow on the right-hand side of the `Save Draft` button. In the list, click `Send Test`.

<a name="figure_select_test"></a>

**Figure 48.9. Send Test**

![Send Test](https://support.messagesystems.com/docs/web-momo4/images/select_test.png)

In the **`Sent Test form`**, enter your recipient's address and click `Send`.

<a name="figure_send_test"></a>

**Figure 48.10. Send Test Form**

![Send Test Form](https://support.messagesystems.com/docs/web-momo4/images/send_test.png)

If successful, a message will briefly appear indicating that your message was successfully queued. Your recipient should receive an email with your test data included in the message body.

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.templates.create)  | [Up](web-ui.templates) |  [Next](web-ui.update.template) |
| 48.2. Creating a Template  | [Table of Contents](index) |  48.4. Updating Your Template |

