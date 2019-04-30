|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.templates)  | Chapter 48. Managing Your Templates in the UI |  [Next](web-ui.templates.preview) |

## 48.2. Creating a Template

In the **`New Template`**, you can specify your template details, enter your template content, preview and test your template using test data, and update your template. Templates can be saved as drafts or set to published.

### 48.2.1. Specifying Your Template Details

To open the  **`New Template`** form, click the **`New Template`** icon in the upper-right corner of the **`Templates`** tab. The **`New Template`** form is shown in [Figure 48.2, “New Template”](web-ui.templates.create#figure_new_template "Figure 48.2. New Template").

<a name="figure_new_template"></a>

**Figure 48.2. New Template**

![New Template](/momentum/web-momo4/images/new_template.png)

Enter the following information under  **`Template Details`**:

*   Label - User-friendly label for the template

*   ID - Short, unique, alphanumeric ID used to reference the template when it is used in a transmission

*   Description - (optional) Detailed description of the template

*   Subject - Email "Subject" line

*   From - Email address used to compose the email’s “From” header

*   Reply-To - (optional) Email address used to compose the email’s “Reply-To” header

By default, open tracking and click tracking are enabled in Momentum's configuration, if Message Generation is selected during installation. You can override this setting at the template or transmission level. To override open and click tracking at the template level, click the `Track Opens` option and/or `Track Clicks` option under **`Engagement`** Tracking.

### Note

The precedence for engagement tracking options, from highest to lowest is as follows:

*   transmission level

*   template level

*   msg_gen level

For example, if click tracking is not specified at the transmission level, the **`Track Clicks`** option at the template level is used. If the template level is also not specified, the setting of the configuration option in the msg_gen module is used.

If you want to disable engagement tracking globally, change the configuration option in the msg_gen module. See [Section 71.48, “msg_gen – Message Generation”](modules.msg_gen "71.48. msg_gen – Message Generation").

You can use substitution in the top-level header of your template (i.e. "Subject", "From", and "Reply-To"). The UI supports the same substitution features available in the API. For details about using substitution in your templates, see the Substitution Reference available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.htmlv1_index.html).

[Figure 48.3, “Template Details”](web-ui.templates.create#figure_template_details "Figure 48.3. Template Details") shows an example of a simple template. This example uses a simple form of direct substitution in "Subject" and "From". When the email is built, *{{company}}* and *{{name}}* will be replaced by the values you specify for a given recipient. Note that all details can be edited after the template has been created with the exception of the ID.

<a name="figure_template_details"></a>

**Figure 48.3. Template Details**

![Template Details](/momentum/web-momo4/images/template_details.png)

### 48.2.2. Entering Your Template Content

In the **`New Template form`** form, you can enter HTML content for the email’s text/html MIME part and text content for the email’s text/plain MIME part. Click `Edit`, select the appropriate tab, and type your content using the online editor. You can also use substitution in the message body of your template, enabling you to create personalized messages for every recipient.

An example of HTML content is shown in [Figure 48.4, “HTML Content”](web-ui.templates.create#figure_html_content "Figure 48.4. HTML Content"). This example uses a simple form of direct substitution. When the email is built, *{{subject}}* and *{{name}}* will be replaced by the values you specify for a given recipient.

<a name="figure_html_content"></a>

**Figure 48.4. HTML Content**

![HTML Content](/momentum/web-momo4/images/html_content.png)

An example of plain text content is shown in [Figure 48.5, “Text Content”](web-ui.templates.create#figure_text_content "Figure 48.5. Text Content").

<a name="figure_text_content"></a>

**Figure 48.5. Text Content**

![Text Content](/momentum/web-momo4/images/text_content.png)

Click `Save Draft` in the **`New Template`** form to save your template as a draft. If successfully, a message indicating that your template was saved will be displayed briefly.

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.templates)  | [Up](web-ui.templates) |  [Next](web-ui.templates.preview) |
| Chapter 48. Managing Your Templates in the UI  | [Table of Contents](index) |  48.3. Previewing and Testing Your Template |

