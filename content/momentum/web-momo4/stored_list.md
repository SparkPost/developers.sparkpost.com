| [Prev](using_template)  | Part VII. Message Generation (HTTP) |  [Next](using_list) |
## Chapter 50. Creating Stored Recipient Lists
**Table of Contents**

* [50.1\. Managing Recipient Lists using the UI](stored_list#manage_list_ui)

**Configuration Change. ** Version 4.1 and later support stored recipient lists.
**Introduction**
As consumer behaviors and preferences continue to change rapidly, it’s critical that you send the right message to the right customer at the right time and place. Creating different recipient lists based on various demographic information enables you to personalize messages and to provide relevant content to your customers. Momentum's message generation supports creating stored recipient lists, to reuse in future campaigns, using the REST API . The REST API also supports associating tags, metadata, and substitution data with a recipient, providing further insight into your customer engagement.
As in the case of an "inline" recipient list, the recipient list must be in JSON format and can use the substitution engine's powerful features. Note that recipient substitution data takes precedence over transmission substitution data.
**Creating a Stored Recipient List**
This section provides instructions to create a stored recipient list using the REST API. It introduces you to the Recipient Lists API, which provides the means to create and manage your recipient lists.
### Note
This tutorial assumes that you have completed the tutorial in [Chapter 45, *Generating a Transmission*](message_gen "Chapter 45. Generating a Transmission") . A general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.
You must have a valid API key to complete this tutorial. If you do not, see [Chapter 43, *Creating an API Key*](create_apikey "Chapter 43. Creating an API Key") .
Follow these steps to create a stored recipient list:
1.  Specify your recipient information.
    You create a stored recipient list by first specifying all recipient data in a JSON blob that will be included in the Recipient Lists API call. The recipient data includes required and optional attributes. At a minimum, you must specify the recipient's email address.
    Using your text editor, create the following JSON file named `simple_list.json`. Be sure to use your information for recipient addresses and recipient names.
    {
       "id":"simple_list",
       "recipients":[
          {
             "address":{
                "email":"*`recipient1@their_address.com`*",
                "name":"*`recipient1`*"
             }
          },
          {
             "address":{
                "email":"*`recipient2@their_address.com`*",
                "name":"*`recipient2`*"
             }
          }
       ]
    }
    As for inline recipient lists, the "recipients" object includes the email address for each recipient.
    An identifier for the recipient list is optional. However, this field will be required to identify the recipient list when it is used in a transmission. If an "id" is not specified, one will be generated when the recipient list is created.
2.  Store your recipient list.
    You store your recipient list by sending a HTTP POST request to the appropriate URL with your JSON blob. To access the Recipient Lists API, you send an HTTP request to **http://*`your.server.domain`*/api/v1/recipient-lists/**.
    At the command line, enter the following command to store your recipient list:
    curl -X POST http://*`your.server.domain`*/api/v1/recipient-lists/ \
    -d @*`path/to/file/`*simple_list.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"
    where `simple_list.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.
    If successful, the following response will be displayed at the command line:
    ```
    {
       "results":{
          "total_rejected_recipients":0,
          "total_accepted_recipients":2,
          "name":"simple_list",
          "id":"simple_list"
       }
    }
    ```
    This response shows that a list including two recipients was successfully stored.
3.  View your stored recipient list.
    You can retrieve details about your recipient list by specifying its identifier in the URI path of the GET method. To retrieve the recipients contained in a list, you must include the **`show_recipients=true`** query parameter in the API call.
    At the command line, enter the following command to retrieve the recipient list object:
    curl -X GET http://*`your.server.domain`*/api/v1/recipient-lists/simple_list?show_recipients=true \
    -H "Authorization: *`your_api_key`*"
    where *`your_api_key`* is your valid API key.
    If successful, a response similar to the following will be displayed at the command line:
    {
       "results":{
          "id":"simple_list",
          "name":"simple_list",
          "description":"",
          "total_accepted_recipients":2,
          "recipients":[
             {
                "address":{
                   "email":"*`recipient1@their_address.com`*",
                   "name":"*`recipient1`*"
                },
                "return_path":""
             },
             {
                "address":{
                   "email":"*`recipient2@their_address.com`*",
                   "name":"*`recipient2`*"
                },
                "return_path":""
             }
          ]
       }
    }
Congratulations! You have created your first stored recipient list using Momentum's Recipient Lists API. To learn more about managing recipient lists, see the Recipient Lists API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).
## 50.1. Managing Recipient Lists using the UI
**Configuration Change. ** Version 4.2 and later support managing your recipient lists using the UI.
You can also create and manage your recipient lists using the web-based UI. For detailed instructions, see [Section 55.1, “Recipient Lists”](web-ui#web-ui.recipients "55.1. Recipient Lists").

|     |     |     |
| --- | --- | --- |
| [Prev](using_template)  | [Up](p.http_rest) |  [Next](using_list) |
| Chapter 49. Using Stored Templates  | [Table of Contents](index) |  Chapter 51. Using Stored Recipient Lists |
