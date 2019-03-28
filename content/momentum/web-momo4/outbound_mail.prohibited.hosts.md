|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail)  | Chapter 25. Configuring Outbound Mail Delivery |  [Next](outbound_mail.multivip.interfaces) |

## 25.2. Prohibited_Hosts

Some providers use DNS tricks to deter systems they feel are abusing their resources. One technique is to return a loopback or other local address to you when you query their MX records.

There are some addresses you may never want to deliver mail to. For example, when configured as an outbound e-mail relay, you have no reason to deliver mail to your own IP or any loopback addresses on your machine. To prevent delivery to loopback addresses (127.0.0.0/8) or the null route 0.0.0.0, you can use the following line `ecelerity.conf` file:

`Prohibited_Hosts = ( "127.0.0.0/8" 0.0.0.0 )`
### Note

This setting does not in any way affect where you can receive mail from, only where you can deliver mail to.

|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail)  | [Up](outbound_mail) |  [Next](outbound_mail.multivip.interfaces) |
| Chapter 25. Configuring Outbound Mail Delivery  | [Table of Contents](index) |  25.3. MultiVIP© Interfaces |

