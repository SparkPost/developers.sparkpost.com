| [Prev](create_apikey)  | Part VII. Message Generation (HTTP) |  [Next](web-ui.apikeys.create) |
## Chapter 44. Managing Your API Keys
**Table of Contents**

* [44.1\. Viewing Your API Keys](web-ui.apikeys#web-ui.apikeys.viewing)
* [44.2\. Creating an API Key](web-ui.apikeys.create)
* [44.3\. Updating an API Key](web-ui.apikeys.update)
* [44.4\. Deleting an API Key](web-ui.apikeys.delete)

<a class="indexterm" name="idp4330416"></a>
**Configuration Change. ** As of version 4.1, API authentication is enabled by default. For instructions to disable it, see [Chapter 21, *Enforcing REST API/UI User Authentication*](auth "Chapter 21. Enforcing REST API/UI User Authentication") . Version 4.2 and later add View Adaptive Delivery Data grant type.
When API authentication is enabled, all APIs require that you authenticate with every request by providing an `Authorization` header with a value equal to a valid API key. The API key must have the appropriate permissions to use the API. Using the UI, administrators can view details about the existing API keys, create new API keys, update existing API keys, and delete API keys no longer need.
Click *`admin`* in the upper-right corner, as shown in [Figure 44.1, “admin Username”](web-ui.apikeys#figure_username_icon "Figure 44.1. admin Username"), to open the Settings section.
<a name="figure_username_icon"></a>
**Figure 44.1. admin Username**
![admin Username](images/username_icon.png)
## 44.1. Viewing Your API Keys
The Settings section provides a tabular view of your existing API keys, as shown in [Figure 44.2, “API Keys Table”](web-ui.apikeys#figure_apikeys_list "Figure 44.2. API Keys Table"). The following information is displayed in the table for each API key:
*   Key - Label specified when you created the API key
*   Permissions - Valid grant types for which the API key will have access
<a name="figure_apikeys_list"></a>
**Figure 44.2. API Keys Table**
![API Keys Table](images/apikeys_list.png)
API keys can access any resource you give them access to except for the user resources. This restriction is for security reasons. An API key should not be able to modify users. If your key gets loose, this restriction prevents it from being used to gain unfettered access to your system accounts. In [Figure 44.2, “API Keys Table”](web-ui.apikeys#figure_apikeys_list "Figure 44.2. API Keys Table"), example_api_key has access to metrics, webhooks, and transmissions.
To create an API key that meets your specific requirements, you must understand the permissions required by each API. [Table 44.1, “Grant Types”](web-ui.apikeys#table_grant_types "Table 44.1. Grant Types") gives a mapping of the permissions for a given grant type.
<a name="table_grant_types"></a>
**Table 44.1. Grant Types**
| Grant | Privileges |
| --- | --- |
| View Metrics | GET requests on /api/v1/metrics |
| View Adaptive Delivery Data | GET requests on /api/v1/adaptive-delivery |
| View Webhooks | GET requests on /api/v1/webhooks |
| Modify Webhooks | GET, POST, PUT, DELETE requests on /api/v1/webhooks |
| View Templates | GET requests on /api/v1/templates |
| Modify Templates | GET, POST, PUT, DELETE requests on /api/v1/templates |
| Preview Templates | POST requests on /api/v1/templates |
| View Transmissions | GET requests on /api/v1/transmissions |
| Modify Transmissions | GET, POST, PUT, DELETE requests on /api/v1/transmissions |
| Send via SMTP | Allow this API Key to perform SMTP injection (Note that your configuration must support SMTP authorization.) |
| Manage recipient lists | GET, POST, PUT, DELETE requests on /api/v1/recipient-lists |

| [Prev](create_apikey)  | [Up](p.http_rest) |  [Next](web-ui.apikeys.create) |
| Chapter 43. Creating an API Key  | [Table of Contents](index) |  44.2. Creating an API Key |
