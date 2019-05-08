# How Do I Enable Outbound SMTP Authentication

Below is an example of the configuration options needed to enable this module. The only supported Outbound_SMTP_AUTH_Type options are PLAIN and LOGIN.

```
outbound_smtp_auth { }
Keep_Message_Dicts_In_Memory = true

# Example of use . Here with a domain:
Domain "messagesystems.com" {
 Outbound_SMTP_AUTH_Type = "LOGIN"
 Outbound_SMTP_AUTH_User = "myuser"
 Outbound_SMTP_AUTH_Pass = "mypass"
}
```