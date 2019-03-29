|     |     |     |
| --- | --- | --- |
| [Prev](using_list)  | Part VII. Message Generation (HTTP) |  [Next](complex_template) |

## Chapter 52. Sending Emails as CC and BCC

**Configuration Change. ** Sending emails as BCC is supported as of version 4.1-HF4.

**Introduction**

An email's header provides details about the sender and recipients, in addition to descriptive information about the message. Typically, the header will include "From", displaying who sent the message, and "To", displaying who received the message. However, you can also send an email as a Carbon Copy ("CC") or Blind Carbon Copy ("BCC").

Carbon Copy or "CC" indicates that the recipient received a "copy" of an email that was sent to another recipient. The email's header will include "To", showing the original recipient, and "CC", showing the recipient who received the copy. Recipients will see the email addresses of all the persons who received the email. Conversely, Blind Carbon Copy or "BCC" indicates that the recipient also received a "copy" of an email that was sent to another recipient, however, the recipients do not know to who the email was copied. The email's header will include only "To". The *BCC* recipient's email address is not visible to the other recipients. This capability enables you to protect the email addresses of your recipients. To maintain your recipient's privacy, you can send the email to yourself and *BCC* all your recipients.

When you create your transmission using the REST API, you can include *CC* and *BCC* recipients by using optional fields available in the Template and Recipient Lists API. You must specify separate data for your "To", "CC", and "BCC" recipients. Ensure that this data is, in fact, a carbon copy of each other. When "CC" and "BCC" are specified, your recipients will then receive emails with the appropriate header.

**Sending Email with *CC* and *BCC* Recipients**

In this tutorial, you will learn how to send an email as a *CC* and *BCC* using the REST API. It will build on your knowledge of the Template and Recipient Lists API by using optional fields to specify the *CC* and *BCC* recipients. The example in this tutorial specifies the recipients inline and uses a simple inline template with a plain-text message, but the transmission can also reference a stored template and recipient list.

### Note

This tutorial assumes that you have completed the tutorial in [Chapter 50, *Creating Stored Recipient Lists*](stored_list "Chapter 50. Creating Stored Recipient Lists") . A general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.

You must have a valid API key to complete this tutorial. If you do not, complete the tutorial in [Chapter 43, *Creating an API Key*](create_apikey "Chapter 43. Creating an API Key") .

Follow these steps to send a simple transmission with *CC* and *BCC* recipients:

1.  Specify your input data.

    The Recipient List API supports a "header_to" field in the "address" attribute. This field will be displayed in the "To" header instead of the "email" field of the recipient. To send an email as a *CC* or *BCC*, you must specify the *CC* or *BCC* recipient using the "email" field and the recipient that you want displayed in the "To" header using the "header_to" field in the "recipients" JSON array. Each recipient must have the same substitution data and meta data, if included in the transmission.

    ### Note

    The "header_to" field is not designed to be used with email_rfc822 templates.

    The Template API supports a "headers" field in the "content" JSON array. This field is a JSON dictionary that can be used to specify additional headers in your emails, such as "CC". To include a "CC" header in your email, you must specify the *CC* recipient in the "recipients" JSON array, as previously described, and in the "headers" field in the "content" JSON array using the "CC" field.

    Note that the *BCC* and *To* recipients are not specified in the "headers" field. The "To" header is generated from the *`to_recipient's`* "email" field. For details about constructing additional headers using the "headers" field, see the Template API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

    Using your text editor, create the following JSON file named `cc_bcc_example.json`. Be sure to use your sender address and recipient addresses. Note that the "header_to" fields are a carbon copy of the "To" recipient's email address.

    {
       "return_path":"*`sender@return_path.com`*",
       "recipients":[
          {
             "address":{
                "email":"*`to_recipient@their_address.com`*"
             },
             "substitution_data":{
                "some_sub_data":"Momentum"
             }
          },
          {
             "address":{
                "email":"*`cc_recipient@their_address.com`*",
                "header_to":"*`to_recipient@their_address.com`*"
             },
             "substitution_data":{
                "some_sub_data":"Momentum"
             }
          },
          {
             "address":{
                "email":"*`bcc_recipient@their_address.com`*",
                "header_to":"*`to_recipient@their_address.com`*"
             },
             "substitution_data":{
                "some_sub_data":"Momentum"
             }
          }
       ],
       "content":{
          "from":"*`sender@your_address.com`*",
          "headers":{
             "CC":"*`cc_recipient@their_address.com`*"
          },
          "subject":"Sending Email with CC and BCC Recipients",
          "text":"Welcome to {{some_sub_data}}!\r\nThis is an example of including a CC and BCC header."
       }
    }

    In this example, the email will be sent to the *`to_recipient`*, as indicated in the email's "To" header, and a copy of the email will be sent to the *`cc_recipient`*, as indicated in the email's "CC" header. A second copy will be sent to the *`bcc_recipient`*. However, this recipient's email address will not be displayed.

    ### Note

    There is no support for `rcpt_type` in the webhook events. To track the `rcpt_type` of each message copy, you must include this information in the recipient level meta data.

    We recommend you submit one set of message copies per submission so that you can correlate reports using the transmission ID. If you submit multiple sets of message copies, you can correlate the copies by providing your own tracking data element in the meta data for each message in the set.

2.  Inject your message into Momentum.

    At the command line, enter the following command to inject your email:

    curl -X POST http://*`your.server.domain`*/api/v1/transmissions/ \
    -d @*`path/to/file/`*cc_bcc_example.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `cc_bcc_example.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, a response similar to the following will be displayed at the command line:

    {
       "results":{
          "total_rejected_recipients":0,
          "total_accepted_recipients":3,
          "id":"*`11977354662379529`*"
       }
    }

    This response shows that three emails were accepted and none were rejected.

3.  Confirm your email delivery.

    Each recipient (To, CC, BCC, and archive) is counted as a targeted message. As a result, each *CC* and *BCC* message, as well as the archive copy of the nmessage, is given a unique tracking URL.

    Verify that your recipients received the emails, then open the UI and confirm that your message was successfully injected into Momentum (Targeted) and accepted by the ISP (Accepted). For instructions to view reports in the UI, see [Chapter 56, *Using the UI for Reporting*](reporting_ui "Chapter 56. Using the UI for Reporting") .

Congratulations! You have used your knowledge of the REST API to send an email as a *CC* and *BCC*. You can find more information about the attributes used in the Templates and Recipient Lists API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

|     |     |     |
| --- | --- | --- |
| [Prev](using_list)  | [Up](p.http_rest) |  [Next](complex_template) |
| Chapter 51. Using Stored Recipient Lists  | [Table of Contents](index) |  Chapter 53. Using Complex Templates |

