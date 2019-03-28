| [Prev](substitution_data)  | Part VII. Message Generation (HTTP) |  [Next](web-ui.templates) |

## Chapter 47. Creating Stored Templates

**Introduction**

A key component of a successful campaign is managing your message templates. Being able to design and reuse templates allows you to provide a consistent look and feel across all your campaigns. Momentum's message generation supports template management enabling you to create, update, and reuse stored templates. You can manage your templates in a web-based User Interface (UI) or using the REST API. Your company can easily build brand-aligned templates once and then focus on other challenges, such as who to send the messages to and what content is most relevant for each recipient.

As in the case of an "inline" template, the template content must be in JSON format and can use the substitution engine's powerful features, such as key/value substitutions, conditional statements, and looping. By default, templates are created as drafts. Once created, you can perform actions such as update, publish, and delete.

**Creating a Stored Template Using the REST API**

This section provides instructions to create a simple stored template using the REST API. It introduces you to the Templates API, which provides the means to manage your templates. In this simple case, the template will include a plain-text message only.

### Note

This tutorial assumes that you have completed the tutorial in [Chapter 46, *Using Substitution Data*](substitution_data "Chapter 46. Using Substitution Data") . A general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.

You must have a valid API key to complete this tutorial. If you do not, see [Chapter 43, *Creating an API Key*](create_apikey "Chapter 43. Creating an API Key") .

Follow these steps to create a stored template:

1.  Specify your template.

    You create a template by first specifying all input data in a JSON blob that will be included in the Templates API call. The input data includes required and optional template attributes. At a minimum, you must specify the template "id" or "name" along with the "content". Content for a template is described in a JSON object. At a minimum, it must include a "from" address, a "subject", and "html" or "text" string.

    Using your text editor, create the following JSON file named `simple_template.json`. Be sure to use your information for sender address.

    {
       "id":"simple_template",
       "published":false,
       "content":{
          "from":"*`sender@your_address.com`*",
          "subject":"Sending Email Using a Stored Template",
          "text":"Hi {{firstName}},\r\nWelcome to {{sender}}!"
       }
    }

    The attribute "id" identifies the template when it is used in a transmission. As for inline templates, the "content" object includes the content that will be used to construct the message.

    The "published" attribute indicates whether the template is published or is a draft version. By default, templates are created as drafts, and this attribute is optional. It is included in this example to demonstrate how to publish a template later in this tutorial.

2.  Store your template as a draft.

    You store your template by sending a HTTP POST request to the appropriate URL with your JSON blob. To access the Templates API, you send an HTTP request to **http://*`your.server.domain`*/api/v1/templates/**.

    At the command line, enter the following command to store your template:

    curl -X POST http://*`your.server.domain`*/api/v1/templates/ \
    -d @*`path/to/file/`*simple_template.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `simple_template.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, the following response will be displayed at the command line:

    ```
    {
       "results":{
          "id":"simple_template"
       }
    }
    ```

    This response shows that the request was successful.

3.  Preview your template using substitution data.

    You can preview your template by providing a JSON blob that includes substitution data. The "content" of your template will be expanded using the "substitution_data."

    Using your text editor, create the following JSON file named `data_for_template.json`. Be sure to use your recipient name.

    {
       "substitution_data":{
          "firstName":"*`recipient first name`*            ",
          "sender":"Momentum"
       }
    }

    You preview your template by sending a HTTP POST request to the appropriate URL. Reference your template identifier and include your substitution data JSON blob. To preview a draft template, you must also include the **`draft=true`** query parameter in the API call.

    At the command line, enter the following command to preview your template:

    curl -X POST http://*`your.server.domain`*/api/v1/templates/simple_template/preview?draft=true \
    -d @*`path/to/file/`*data_for_template.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `data_for_template.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, the response will include the "content" with the data substituted, such as the following:

    {
       "results":{
          "from":"*`sender@your_address.com`*",
          "subject":"Sending Email Using a Stored Template",
          "text":"Hi *`recipient first name`*            ,\r\nWelcome to Momentum!"
       }
    }
4.  Update and publish your template.

    You can make changes to your template by specifying a JSON blob that includes the updates to the template. The "content" object given in the update request will completely overwrite any existing "content". If you want to modify fields besides "content", include the fields to modify. Only those fields specified will be updated.

    Using your text editor, create the following JSON file named `update_template.json`. This file includes updates to the content of "content" and changes the "published" attribute. Be sure to use your information for sender address.

    {
       "id":"simple_template",
       "published":true,
       "content":{
          "from":"*`sender@your_address.com`*",
          "subject":"Sending Email Using a Stored Template",
          "text":"Hi {{firstName}},\r\nWelcome to {{sender}}!\r\nThis is your first stored template."
       }
    }

    Publishing a template is just a specific case of an update. You publish your template by changing the published attribute to true **`"published": true`**      .

    You update and publish your template by sending a HTTP PUT request to the appropriate URL. Reference your template identifier and include your updates as the JSON blob.

    At the command line, enter the following command to update and publish your template:

    curl -X PUT http://*`your.server.domain`*/api/v1/templates/simple_template \
    -d @*`path/to/file/`*update_template.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `update_template.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, the following response will be displayed at the command line:

    `{ }`

    This response shows that the request was successful.

5.  Verify your updates.

    You can retrieve a template by specifying its identifier in the URI path of the GET method.

    At the command line, enter the following command to retrieve the template object:

    curl -X GET http://*`your.server.domain`*/api/v1/templates/simple_template \
    -H "Authorization: *`your_api_key`*"

    where *`your_api_key`* is your valid API key.

    If successful, a response similar to the following will be displayed at the command line:

    {
       "results":{
          "id":"simple_template",
          "name":"simple_template",
          "description":"",
          "published":true,
          "options":{

          },
          "content":{
             "from":"*`sender@your_address.com`*",
             "subject":"Sending Email Using a Stored Template",
             "text":"Hi {{firstName}},\r\nWelcome to {{sender}}!\r\nThis is your first stored template."
          }
       }
    }

    This response shows your updated template in the results JSON structure.

Congratulations! You have created your first stored template using Momentum's Templates API. To learn more about managing templates, see the Templates API documentation available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).

**Managing Templates using the UI**

**Configuration Change. ** Version 4.1 and later support managing your templates using the UI.

You can also create and manage your templates using the web-based UI. For detailed instructions, see [Chapter 48, *Managing Your Templates in the UI*](web-ui.templates "Chapter 48. Managing Your Templates in the UI") .

|     |     |     |
| --- | --- | --- |
| [Prev](substitution_data)  | [Up](p.http_rest) |  [Next](web-ui.templates) |
| Chapter 46. Using Substitution Data  | [Table of Contents](index) |  Chapter 48. Managing Your Templates in the UI |

