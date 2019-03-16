| [Prev](modules.securecreds)  | Chapter 71. Modules Reference |  [Next](modules.sendmail_logger) |

## 71.62. seedlist – Seedlist Integration

<a class="indexterm" name="idp22912176"></a>

The seedlist module allows for seamless, zero-effort integration with the popular deliverability monitoring service, ReturnPath's [Mailbox Monitor](http://www.returnpath.net/commercialsender/monitoring/). Services of this nature automatically monitor your deliverability into various ISPs by having you send a copy of every campaign/mailing to a set of unique addresses, which they then poll on a regular basis. Momentum's seedlist module simplifies this process by allowing you to pass the list of seeds to the MTA, as well as define criteria that distinguish unique campaigns (for example matching a VERP pattern or a particular header). When Momentum detects a new campaign, it will send a copy of the new campaign to every address on the seedlist. Campaigns are determined by patterns specified in either the `match_verp` or `match_header` options.

### Note

The Momentum seedlist module was designed with ReturnPath seed lists in mind, not real email addresses. If you use the seedlist module in conjunction with Message Central, this module will send a copy of the first email it sees to the entire seedlist *as a copy* . What this means is that if the first email to hit the seedlist module was customized for "John Smith", then that exact email will be copied and send to *all* the addresses in the seedlist. This is by design because this is how ReturnPath seed lists work. However, if your seedlist has *real* email addresses in it, then recipients will get a copy of John Smith's customized email. That also means that if those real people click or open the email, it will represent a click or open associated with John Smith. This is probably not what you want.

If you are using ReturnPath seeds and just want to test domain penetration, with generic mail then use this module. If you want to send customized mail to each recipient in a real-person seed list, then you should create a target list of Message Central recipients.

### 71.62.1. Configuration

The following is a typical seedlist configuration:

<a name="example.seedlist.2"></a>

**Example 71.86. seedlist Configuration**

```
seedlist "seedlist1" {
  seedlist_file = "/opt/msys/ecelerity/etc/conf/default/seeds"
  no_seed_condition = "context_variable"
  match_verp = ( "bounces-(?P<campaignid>\w+)" )
}
```

The following configuration options are available:

<dl className="variablelist">

<dt>cache_name</dt>

<dd>

Identifies datasource cache. Default value is `ecdb`. There should be no need to change this option.

</dd>

<dt>insert_campaign_header</dt>

<dd>

(Optional) Allows Momentum to add a header to the seedlist copy mails that contains just the campaign identifier extracted by the matching rules. This can be convenient for integrating against services like Return Path's Mailbox Monitor, which prefer you to use a header to uniquely identify campaigns.

</dd>

<dt>mail_from</dt>

<dd>

If a sender is using a VERP'd MAIL FROM and doing unsubscribe management using this MAIL FROM, users can be unintentionally unsubscribed if a seed address bounces. In such cases, use this option to override the MAIL FROM in the envelope of generated seeds.

</dd>

<dt>match_verp</dt>

<dd>

Tells Momentum how to detect a new campaign. Momentum applies the specified pattern to the envelope sender (MAIL FROM) of the message and tries to extract the campaign identifier. You must extract the campaign identifier into a subexpression named `campaignid`. The localpart of your VERP address should be constructed so that a unique expression is extracted to the `campaignid` identifier. For example, `bounces-123-456@bounces.foo.com` will extract '123-456' into the `campaignid` identifier. This will enable the seedlist module to recognize your campaign as new.

</dd>

<dt>no_seed_condition</dt>

<dd>

Tells Momentum to check for the context variable that you specify. If that variable is set to **ANY** value, the message is assumed *not* to be part of that campaign.

</dd>

<dt>schema_name</dt>

<dd>

Identifies a PostgreSQL schema. Default value is `seedlist`. There should be no need to change this option.

</dd>

<dt>seedlist_file</dt>

<dd>

Sets the path to the file containing the list of *seed* email addresses to which to send copies. This file should contain the destination addresses, one per line. It is recommended practice to store the seedlist file in the repository. You can add arbitrary files to the repository in exactly the same way that configuration files are added. For more information, see [Section 15.1.5, “Adding Configuration Files”](conf.overview#conf.adding.configuration.files "15.1.5. Adding Configuration Files").

</dd>

</dl>

In addition to matching VERP'd senders, you can also match against headers in the mail, for instance:

<a name="example.seedlist.headers.3"></a>

**Example 71.87. seedlist VERP**

```
seedlist "seedlist1" {
  seedlist_file = "/opt/msys/ecelerity/etc/conf/default/seeds"
  no_seed_condition = "context_variable"
  match_verp = ( "bounces-(?P<campaignid>\w+)" )
  match_header Message-ID {
    pattern = ( "foo-(?P<campaignid>\w+)"
                "bar-(?P<campaignid>\w+)" )
  }
  insert_campaign_header = "X-Campaign-ID"
}
```

This example matches the original VERP header, as well as two possible patterns, against the `Message-ID` header in the mail. You can specify an arbitrary number of patterns—they will be applied in order until one matches. If there are no matches, the mail will not be considered part of a campaign and a message will not be sent to the seedlist.

### 71.62.2. Runtime Usage

For custom processing from a Lua script, use the `seedlist_generate_seed` hook point. After seed generation, the message context variable, `#seedlist-orig-from`, is accessible from this hook point and contains the original MAIL FROM of the triggering message. You can take a custom processing step, such as inspecting the `#seedlist-orig-from` context variable and rewriting the MAIL FROM.

| [Prev](modules.securecreds)  | [Up](modules) |  [Next](modules.sendmail_logger) |
| 71.61. securecreds – Password Encryption/Credential Retrieval  | [Table of Contents](index) |  71.63. sendmail_logger – Sendmail Logging |

