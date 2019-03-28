| [Prev](web-ui.templates.delete)  | Part VII. Message Generation (HTTP) |  [Next](stored_list) |

## Chapter 49. Using Stored Templates

**Introduction**

In the tutorial in [Chapter 45, *Generating a Transmission*](message_gen "Chapter 45. Generating a Transmission") , you sent emails using an "inline" template. While in-line templates might be best for one-off transmissions, it is more efficient to create stored templates for high-volume message campaigns. Using stored templates enables you to control the look-and-feel of your messages across all your campaigns, while focusing on providing recipient-specific content for each transmission.

When you send a transmission using a stored template, you reference the identifier of the template and provide the dynamic content for that specific transmission. Momentum performs the substitution to create personalized messages for each recipient. By default, the published version of the template is used. However, you can submit a transmission that uses a draft template by setting the appropriate field in the transmission.

**Sending Email Using a Stored Template**

In this section, you will learn how to send an email using the simple stored template that you created in the previous tutorial. It builds on your knowledge of the Transmissions API, expanding its use to both inline and stored templates.

### Note

This tutorial assumes that you have completed the tutorial in [Chapter 47, *Creating Stored Templates*](stored_template "Chapter 47. Creating Stored Templates") . A general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.

You must have a valid API key to complete this tutorial. If you do not, see [Chapter 43, *Creating an API Key*](create_apikey "Chapter 43. Creating an API Key") .

Follow these steps to send an email using a stored template:

1.  Specify your input data for the transmission.

    You use a stored template by specifying its identifier and the recipient-specific data as input data in the JSON blob that will be included in the Transmissions API call.

    Using your text editor, create the following JSON file named `simple_subdata.json`. Be sure to use your information for sender address, recipient addresses, and recipient names.

    {
       "return_path":"*`sender@your_address.com`*",
       "substitution_data":{
          "sender":"Momentum"
       },
       "recipients":[
          {
             "address":{
                "email":"*`recipient1@their_address.com`*"
             },
             "substitution_data":{
                "firstName":"*`recipient1 first name`*            "
             }
          },
          {
             "address":{
                "email":"*`recipient2@their_address.com`*"
             },
             "substitution_data":{
                "firstName":"*`recipient2 first name`*            "
             }
          }
       ],
       "content":{
          "template_id":"simple_template",
          "use_draft_template":false
       }
    }

    This example uses the transmission from the tutorial in [Chapter 46, *Using Substitution Data*                  ](substitution_data "Chapter 46. Using Substitution Data") as a starting point and replaces the "content" object in the transmission with the identifier that you specified when you created your stored template:

    `"template_id": "simple_template"`

    The optional "use_draft_template" field indicates whether to use a draft version or the published version of the template when generating messages. When “use_draft_template" is not specified (or set to false), the latest published version of the specified stored template is used. If “use_draft_template" is set to true, the latest draft version is used in the transmission instead. Once message generation has been initiated, all messages in the transmission will use the template selected at the start of the generation. If a template update is made during the generation of a transmission that uses that template, the template update will succeed but the transmission will continue to use the version that was selected at the start of the generation.

2.  Inject your message into Momentum.

    You inject your message by sending a HTTP POST request to the appropriate URL with your JSON blob.

    At the command line, enter the following command to inject your email:

    curl -X POST http://*`your.server.domain`*/api/v1/transmissions/ \
    -d @*`path/to/file/`*simple_subdata.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `simple_subdata.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, a response similar to the following will be displayed at the command line:

    {
       "results":{
          "total_rejected_recipients":0,
          "total_accepted_recipients":2,
          "id":"*`11933912318083075`*"
       }
    }

    This response shows that two emails were accepted and none were rejected.

3.  Confirm your email delivery.

    Verify that each recipient received a personalized email, then open the UI and confirm that two messages were successfully injected into Momentum (Targeted) and accepted by the ISP (Accepted). For instructions to view reports in the UI, see [Chapter 56, *Using the UI for Reporting*](reporting_ui "Chapter 56. Using the UI for Reporting") .

Congratulations! You have successfully sent an email using a stored template. To learn more about using the Transmissions API, see the Transmission API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.templates.delete)  | [Up](p.http_rest) |  [Next](stored_list) |
| 48.6. Deleting a Template  | [Table of Contents](index) |  Chapter 50. Creating Stored Recipient Lists |

