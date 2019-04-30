|     |     |     |
| --- | --- | --- |
| [Prev](stored_list)  | Part VII. Message Generation (HTTP) |  [Next](sending_cc_bcc) |

## Chapter 51. Using Stored Recipient Lists

**Configuration Change. ** Version 4.1 and later support stored recipient lists.

**Introduction**

In the tutorial in [Chapter 45, *Generating a Transmission*](message_gen "Chapter 45. Generating a Transmission") , you sent emails by specifying your recipients "inline". This method may be sufficient for transactional transmissions, yet it can quickly become unmanageable as your number of recipients grows. Using stored recipient lists enables you to better manage your campaigns, tailoring your messages to your unique objectives.

When you send a transmission using a stored recipient list, you reference the identifier of the list and provide the dynamic content for that specific transmission. Momentum performs any substitution required to create personalized messages for each recipient.

**Sending Email Using a Stored Recipient List**

In this tutorial, you will learn how to send an email using the simple stored recipient list that you created in the previous tutorial. It builds on your knowledge of the Transmissions API, expanding its use to both inline and stored recipient lists.

### Note

This tutorial assumes that you have completed the tutorial in [Chapter 50, *Creating Stored Recipient Lists*](stored_list "Chapter 50. Creating Stored Recipient Lists") . A general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.

You must have a valid API key to complete this tutorial. If you do not, see [Chapter 43, *Creating an API Key*](create_apikey "Chapter 43. Creating an API Key") .

Follow these steps to send an email using a stored recipient list:

1.  Specify your input data for the transmission.

    You use a stored recipient list by specifying its identifier and the template-specific data as input data in the JSON blob that will be included in the Transmissions API call.

    Using your text editor, create the following JSON file named `using_list.json`. Be sure to use your information for sender address.

    {
       "return_path":"*`sender@your_address.com`*",
       "recipients":{
          "list_id":"simple_list"
       },
       "content":{
          "from":"*`sender@your_address.com`*",
          "subject":"Sending Email Using a Stored Recipient List",
          "text":"Welcome to Momentum!\r\nThis email uses your first stored recipient list."
       }
    }

    This example uses the transmission from the tutorial in [Chapter 45, *Generating a Transmission*               ](message_gen "Chapter 45. Generating a Transmission") as a starting point and replaces the "recipients" object in the transmission with the identifier that you specified when you created your stored recipient list:

    `"list_id":"simple_list"`
2.  Inject your message into Momentum.

    You inject your message by sending a HTTP POST request to the appropriate URL with your JSON blob.

    At the command line, enter the following command to inject your email:

    curl -X POST http://*`your.server.domain`*/api/v1/transmissions/ \
    -d @*`path/to/file/`*using_list.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `using_list.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, a response similar to the following will be displayed at the command line:

    {
       "results":{
          "total_rejected_recipients":0,
          "total_accepted_recipients":2,
          "id":"*`11933912318083076`*"
       }
    }

    This response shows that two emails were accepted and none were rejected.

3.  Confirm your email delivery.

    Verify that each recipient received an email, then open the UI and confirm that two messages were successfully injected into Momentum (Targeted) and accepted by the ISP (Accepted). For instructions to view reports in the UI, see [Chapter 56, *Using the UI for Reporting*](reporting_ui "Chapter 56. Using the UI for Reporting") .

Congratulations! You have successfully sent an email using a stored recipient list. To learn more about using the Recipient Lists API, see the Recipient Lists API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

|     |     |     |
| --- | --- | --- |
| [Prev](stored_list)  | [Up](p.http_rest) |  [Next](sending_cc_bcc) |
| Chapter 50. Creating Stored Recipient Lists  | [Table of Contents](index) |  Chapter 52. Sending Emails as CC and BCC |

