# How do I setup FBL on Momentum?

The main reason for FBL's or Feedback Loops is to allow clients who are part of the major isp's to take action on your mails that arrive in their inbox, whether this is via the Spam button or Junk Folder is irrelevant, but all senders who care about their reputation should sign up for FBL.  When you sign up for FBL's you should make sure that you sign up with RFC 2822 header format being sent back to you, do not select to have just text sent back to you.

When the client clicks on the Spam button this information is fed back to Momentum via an ARF or Abuse Reporting Format for the majority of larger ISP's. The exceptions to this rule are Gmail who uses unsubscribe headers (recently added FBL functionality), usually in the form of a url or possibly mailto: and all Microsoft Domains which use the JMR program (Junk Mail Reporting program) which is almost ARF format with no abuse type header.

N.B. All Feedback Loops have to be subscribed to, this means you will need to find the signup page for all major domains you are sending to an signup with them, providing them with a domain or email address that you wish these messages to be sent to, this address should be noted very carefully because you will be using this during the setup of the FBL module in momentum.

As described in the documentation regarding FBL (Feedback Loop) the following components must be listed in your ecelerity .conf




```
Relay_Domains = ( mydomain.com *.mydomain.com)
 
..
 
fbl {
  Auto_Log = true # default is "false"
  Log_Path = "/var/log/ecelerity/fbllog.ec" # this is the default
  Addresses = ( "^.*@fbl.mydomain.com|mailto:^.*@fbl.mydomain.com" ) # default is unset
  Header_Name = "X-MSFBL" # this is the default
  User_String = "%{vctx_mess:my_context_variable}" # default is unset
  Message_Disposition = "blackhole" # default is blackhole, also allowed to set to "pass"
  Condition = "can_relay" # default is unset, should be name of a vctx entry
}
```




The options above function as follows :-

- **Relay_Domains** entry, this must exist in order to allow the fbl mails to reach the fbl module to be logged. Without this when the remote ESP sends back the feedback mails they will not be processed.
- **Auto_log** entry, in order for header insertion to work, this option must be set to true and the Enable_FBL_Header_Insertion option must be enabled
- **Log_path** entry, this location is set by default, however, you can point this to anywhere you like as long as the location is writeable by the ecelerity process.
- **Addresses**, this is a list of the email domains that you are going to receive fbls on, it will be pipe delimited e.g. ("\^.*@fbl.mydomain.com (mailto:^.*@fbl.mydomain.com)|\^.*@fbl.mydomain2.com (mailto:^.*@fbl.mydomain2.com)")
- **Header_Name**, this is the custom header that is inserted into the email for fbl purposes, It can be named anything you like, as this is what is looked for when processing fbl's. If this is not present then the message will be handled as per the Message Disposition entry.
- **User_String**, in certain circumstances customers may want to store additional information relating to campaign or somethign else in a context variable in the custom header. this can be put in there during the each_rcpt phase of sieve. See the online documentation for more details.
- **Message_Disposition**, this has a direct impact on where the message entry and exit is logged, Here is the matrix for each option as to where it will be logged
    - If this is set to "Blackhole", the message will be logged in the Log_path listed file and the /var/log/ecelerity/rejectlog, with an entry of "550 550 5.7.1 [internal] processed as FBL message, and disposition is blackhole"
    - If this is set to "Pass", the message will be logged in the Log_path listed file and the /var/log/ecelerity/mainlog.ec
- **Condition**, this can be changed to the name of a context variable, assuming that you only want to set Feedback Loop on specific emails. This allows you to drive fbl header insertion based on specific context variables.