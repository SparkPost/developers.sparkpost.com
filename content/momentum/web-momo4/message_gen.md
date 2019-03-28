| [Prev](web-ui.apikeys.delete)  | Part VII. Message Generation (HTTP) |  [Next](substitution_data) |

## Chapter 45. Generating a Transmission

**Introduction**

Message generation is one of Momentum's most powerful and flexible features. When using SMTP, your client mail application must send fully formed messages to Momentum. But what if the components of your transmission are in different systems? Momentum offers a set of REST API enabling you to inject your recipient list, template, and message content separately. It takes these components of a transmission and generates personalized messages for each recipient.

The REST API integrates with Momentum using the HTTP protocol and conforms to REpresentational State Transfer (REST) architecture style, which uses client-server communications. The [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html) provides the means to send HTTP requests to Momentum, while Momentum processes the requests and returns appropriate HTTP responses. Momentum's REST API exposes common HTTP methods and returns standard error code formats. JSON is the basis for the request and response format.

### Note

Message Generation requires a separate license.

**Sending Email Using the REST API**

This section provides instructions to send a simple email using the REST API. It introduces you to the Transmissions API, which provides the means for creating and managing transmissions. In this simple case, the template and recipient list for the transmission are included "inline".

You will use the cURL command line tool to send an HTTP request. cURL provides an easy way for doing URL transfers, but you can use any HTTP client or create your own scripts using the language of your choice.

### Note

This tutorial is intended for beginners. However, a general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.

You must have a valid API key to complete this tutorial. If you do not, see [Chapter 43, *Creating an API Key*](create_apikey "Chapter 43. Creating an API Key") .

Follow these steps to create a simple transmission:

1.  Specify your input data.

    You create a transmission by first specifying all input data in a JSON blob that will be included in the Transmissions API call. The input data includes required and optional transmission attributes. At a minimum, you must specify the "return_path", "recipients", and "content". The recipients can be specified inline or can reference a stored recipient list. Likewise, the content can be an inline template or can reference a stored template. This example specifies the recipients inline and uses a simple inline template with a plain-text message.

    Using your text editor, create the following JSON file named `inline_template.json`. Be sure to use your sender address and recipient address.

    {
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
          "subject":"Sending Email Using HTTP",
          "text":"Welcome to Momentum!\r\nThis email was sent using an inline template."
       }
    }

    The attribute "return_path" is the email address to use in the FROM portion of the email header. The attribute "recipients" is a JSON array of recipient objects. This array must include the recipient's "email" address. For inline templates, the transmission includes the "content" attribute providing the message content. Content for a template is described in a JSON object. At a minimum, it must include a "from" address, a "subject", and "html" or "text" string.

2.  Inject your message into Momentum.

    You inject your message by sending a HTTP POST request to the appropriate URL with your JSON blob. The path part specifies which REST API to use. For example to access the Transmissions API, you send an HTTP request to **http://*`your.server.domain`*/api/v1/transmissions/**.

    At the command line, enter the following command to inject your email:

    curl -X POST http://*`your.server.domain`*/api/v1/transmissions/ \
    -d @*`path/to/file/`*inline_template.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `inline_template.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, a response similar to the following will be displayed at the command line:

    {
       "results":{
          "total_rejected_recipients":0,
          "total_accepted_recipients":1,
          "id":"*`11668787484950529`*"
       }
    }

    This response shows that one email was accepted and none were rejected.

3.  Confirm your email delivery.

    Verify that your recipient received the email, then open the UI and confirm that your message was successfully injected into Momentum (Targeted) and accepted by the ISP (Accepted). For instructions to view reports in the UI, see [Chapter 56, *Using the UI for Reporting*](reporting_ui "Chapter 56. Using the UI for Reporting") .

Congratulations! You have sent your first email using Momentum's Transmissions API and a simple inline template. In addition to the POST method used in this example, the Transmissions API supports the GET method to retrieve or list details about your transmissions. You can find more information in the Transmissions API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.apikeys.delete)  | [Up](p.http_rest) |  [Next](substitution_data) |
| 44.4. Deleting an API Key  | [Table of Contents](index) |  Chapter 46. Using Substitution Data |

