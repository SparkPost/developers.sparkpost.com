# Using email_rfc822 with multiple recipients in the To and CC headers 

Message Systems will support Carbon Copy (CC) functionality using the content.email\_rfc822 field in the JSON payload going forward. 
 
Since there is currently little documentation on how to use email\_rfc822, below you will find more detail and an example of using email\_rfc822 with multiple recipients in the To and CC headers.

**Example:**

When using the “content.email_rfc822” field in the JSON payload:
 

* All recipients must be listed in the recipient list.
* The data in email\_rfc822 is the fully formed message; this information will be in every message generated.
* The CC header in email\_rfc822 may contain multiple recipients.
* BCC functionality is accomplished by including a recipient in the list who is not included in the TO or CC header in email\_rfc822; do not include a BCC header in email\_rfc822.

The sample transmission below will result in five (5) emails being sent. Each recipient will see two recipients in the To field and two recipients in the CC field:

```
{
 "return_path":"sender@return_path.com",
  "recipients":[
    {"address":{"email”:”To Recip#1 <to1_recipient@their_address.com>”}},
    {"address":{"email”:”To Recip#2 <to2_recipient@their_address.com>”}},
    {"address":{"email”:”CC Recip#1 <cc1_recipient@their_address.com>”}},
    {"address":{"email”:”CC Recip#2 <cc2_recipient@their_address.com>”}},
    {"address":{"email”:”BCC Recip <bcc_recipient@their_address.com>”}}
  ],
  "content":{
    “email_rfc822”:
    ”to: To Recip#1, To Recip#2
    cc: CC Recip#1, CC Recip#2
    from: sender@your_address.com 
    subject: email_rfc822 cc testing
    text: This is an example of including a CC and BCC header."
  }
}
```