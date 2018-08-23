 ## July 23, 2018  
### What’s New?

* As previously communicated via email, we will deprecate TLSv1.0 on July 23. Any messages connecting to SparkPost's API that are not using TLSv1.1 or higher will fail with an authentication error. We have made test endpoints available and they are described in this [article](https://www.sparkpost.com/docs/tech-resources/tlsv1-0-test-hostname/).

## July 12, 2018  
### What’s New?

* **Changes in the UI:** we've introduced a new **Admin Bounces** view in the Bounce report

## July 7, 2018  
### What’s New?

* **A/B Testing for Transactional Messages:** The initial release of SparkPost's A/B Testing functionality is available to our US customers on SPC and Enterprise Customers on our Next Gen architecture. The [Knowledge Base](https://www.sparkpost.com/docs/tech-resources/a-b-testing-sparkpost/) article and [API docs](https://developers.sparkpost.com/api/ab-testing.html) have the details.  


## June 7, 2018  
### What’s New?

* **Changes in the UI:** we've introduced **2 new metrics:** unsubscribe and unsubscribe rate. Both link unsubscribe and list unsubscribe events are combined in the new metrics.

## May 30, 2018  
### What’s New?

* **Changes in the UI:** we've introduced **a new account navigation menu** at the top right of the screen. That menu now contains all of your account management pages such as your user profile, billing, user management, help and API docs, and the log out link. The old "Account" section in the side navigation has been renamed "Settings". All existing deep links will continue to work as expected.

## May 18, 2018  
### What’s New?

* Customers that pay by credit card can now view copies of past invoices in the UI, on the [Billing](https://app.sparkpost.com/account/billing) page. The 20 most recent invoices are available for download.


## May 17, 2018  
### What’s New?

* Smart Send launched as a [SparkPost Labs](https://developers.sparkpost.com/api/labs-introduction.html) feature. This [Transmissions API](https://developers.sparkpost.com/api/transmissions.html) option will not attempt to send to any recipients who have not engaged (received messages but not open or clicked) in at least 6 months. More details in the [blog post](https://www.sparkpost.com/blog/smart-send/). 
  * NOTE: Not yet available in the EU. Enterprise customers, please contact your TAM for information on how to enable this option.

## May 14, 2018  
### What Changed?

* We changed the "rate" type metrics in the Summary Report to use "Sent" or "Accepted" as the denominator, rather than "Targeted" across the board.
  * This will make Open Rate, Click Rate, and Bounce Rates higher since there's a lower number in the denominator. The counts have not changed.
  * This is a UI-only change. There are no "rate" metrics in webhooks or Message Events
  * You can read about the rationale for these changes in this [blog post](https://www.sparkpost.com/blog/metrics-calculation-update/)
  
## April, 2018  
### What’s New?
  
* SparkPost.com is now available in the EU. If you need your data hosted in the EU, check out [SparkPost EU](https://app.eu.sparkpost.com)

* SparkPost is GDPR compliant - well ahead of the May deadline. For details, read our [blog post](https://www.sparkpost.com/blog/announcing-sparkpost-eu/)

* You can now set a default bounce domain (return-path domain) for each subaccount, in addition to the account-wide option. 
  * The "is_default_bounce_domain" can be set at the account or subaccount level via the Sending Domains API. 

## March 31, 2018  
### What’s New?

* We launched our new UI.

## March 15, 2018  
### What’s New?

* Open and Click tracking options are now independent of eachother as account-level defaults.

## February, 2018
### What's New?
* Shorter SparkPost Link-Unsubscribe Header URLs and FBLs.
  * SparkPost shortened the links for the list-unsubscribe header and FBLs. 
  * This is addition to the shorter tracking links completed in December.

* Addressed the issue of some messages not being delivered due to cached out-of-date MX records.

## December 8, 2017
### What’s New?

* SparkPost optimised our engagement tracking our engagement tracking URLs to make them shorter. Their length still depends on the amount personalization and metadata used in each message.


## November 30, 2017
### What’s New?
* Additional Open Pixel at message top
  * SparkPost has added an open pixel to the top of each message when open tracking is selected. This is in addition to the open pixel that is inserted at the bottom of the message
  * Customers should expect a new event in the Message Events API and in webhook events: initial_open
  * Customer should also expect an additional Metric in the Metrics API: initial_rendered


## November 9, 2017
### What’s New?

* You now have the ability to set up secure engagement tracking links using a custom tracking domain, [Check it out](https://www.sparkpost.com/docs/tech-resources/enabling-https-engagement-tracking-on-sparkpost/).
* On the Transmissions API, a GET request will only return scheduled transmissions.
* Minor change - On the Tracking Domains API, a GET request for newly verified Tracking Domains will return a blank CNAME_status (rather than cname_status of “verified”). For verified tracking domains, the VERIFIED field will still be set to TRUE.

## October 27, 2017
### What’s New?

* SparkPost introduces [HEML Email Development Framework](https://www.sparkpost.com/press-releases/sparkpost-introduces-heml-email-development-framework/), an open source markup language for building responsive email.

## September 29, 2017
### What’s New?

* We have added the option of stored templates by subaccount. [Check it out](https://www.sparkpost.com/blog/stored-templates-subaccount/)
* You can now verify your sending domain with any mailbox that you control on your domain.

## August 21, 2017
### What’s New?

* [New pricing options](http://sparkpost.com/pricing) with phone support included on all paid plans.
* You can now submit custom headers for SparkPost to send to your relay webhook endpoints. Check out the custom_headers field on [the relay webhooks API endpoint](https://developers.sparkpost.com/api/relay-webhooks.html).
* We just released a new version of the [Java SparkPost client library](https://github.com/SparkPost/java-sparkpost). The current version is 0.19. The main change was adding support for Message Events API endpoint. As always you can find more details [on GitHub](https://github.com/SparkPost/java-sparkpost).
* We added advanced filtering on the [tracking domains page](https://app.sparkpost.com/account/tracking-domains) for people with lots of tracking domains.


## July 21,2017
### What’s New?

* Improved sending domains page in the UI, now allowing for the creation of multiple bounce domains in the UI. [More info](https://www.sparkpost.com/docs/getting-started/setting-up-domains/)
* You can now submit custom headers for SparkPost to send to your webhook endpoints. Check out the custom_headers field on [the webhooks API endpoint](https://developers.sparkpost.com/api/webhooks.html).
* We have improved the performance of initial test messages on new accounts

## Fixed

* Mask sensitive information in email headers


## June 23, 2017
 
### What’s New?
 
* You now can analyze and report engagement activity by domain, sending domain, sending ip, and ip pool; beginning with data from 5/10/2017 forward.
* API keys are now optional when creating a subaccount

## June 21, 2017

### What’s New?

* We are rewording one of our SMTP delivery temporary failure messages, to better reflect the reason for the error. Namely, that our system could not connect to the receiving mail servers for a domain, because the host was down or otherwise unreachable.

Many customers commonly (and quite undertandably!) misinterpreted the previous message as a problem resolving the mail servers’ host names in DNS, rather than difficulty reaching the destination server.

The previous failure reason was:

> 4.4.0 [internal] no MXs for this domain could be reached at this time

This has been replaced with:

> 4.4.0 [internal] no mail servers for this domain could be reached at this time

## June 2, 2017

### What’s New?

* Looking to add iOS universal links into your your emails? [This writeup](https://www.sparkpost.com/docs/tech-resources/ios-universal-links-self-serve/) shows you how!


## May 26, 2017

### What’s New?

* Subaccount news! You can now create separate webhook endpoints for each [subaccount](https://www.sparkpost.com/docs/user-guide/subaccounts/#master-account-operating-on-behalf-of-a-subaccount). 


## May 12, 2017

### What’s New?

* Looking for some assistance to get started using SparkPost? We published a brand new [getting started guide](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/). 
* Need help converting your SendGrid Templates? Check out our SendGrid to SparkPost [template converter](https://github.com/SparkPost/sendgrid-sparkpost-templates).


## May 8, 2017

### What’s New?

* Improved support documentation with a cleaner look and better search. We also open sourced the documentation- pull requests welcome!
* You can now create multiple bounce domains for your sending domains using the sending domain [REST API](https://developer.sparkpost.com/api/sending-domains.html). [More Info](https://www.sparkpost.com/docs/tech-resources/custom-bounce-domain/)

### Fixed

* A defect was fixed to ensure when customers inject a multi-recipient transmission using REST, the Message-ID header in the email will be unique.


## April 21, 2017

### What’s New?

* You can now sign up for or upgrade to plans for sending up to 50 million messages per month. Check out our [high volume pricing page](https://www.sparkpost.com/high-volume-email-sending/) for more info.
* We have improved suppression look-ups speeds in the user interface.

### Fixed

* We no longer show an empty graph and blank cards on the accepted report when you don’t have any accepted messages.


## March 24, 2017

### What’s New?

* You can now view the advantages of Priority, Premium, and Enterprise add-on/plans within the billing section of app
* To better protect you and to prevent the misuse of our service, we have added better security features for checking email addresses on sign-up and billing addresses on payments
* We now offer self service plans for sending up to 50 Million emails per month

## March 10, 2017

### What’s New?

* When you enable two-factor auth, you can now download backup codes if you lose your device.
* Use our [new CLI](https://github.com/SparkPost/node-sparkpost-cli) to do SparkPost things straight from your terminal.
* Released [python-sparkpost 1.3.5](https://github.com/SparkPost/python-sparkpost/releases/tag/v1.3.5) which adds validation for recipients and URI parameter support for transmissions list endpoint.
* Released [java-sparkpost 0.17](https://github.com/SparkPost/java-sparkpost/releases/tag/0.17)
  * Updated `Client.SendMessage` to automatically set the sandbox option of the from address is @sparkpostbox.com
  * Fixes incompatibility with httpclient >= 4.5.3
  * Deprecates String path arguments in RestConnection
  * Extracts and interface for `RestConnection` and adds more unit tests

### Fixed

* We improved our support for password managers
* We now properly encode non-ASCII names in the To and Reply-To headers


## March 3, 2017

### What’s New?

* We’ve launched a new suite of [email tools](https://www.sparkpost.com/email-tools/)!
  * Want to [inspect your SPF record](https://tools.sparkpost.com/spf/inspector)? You can!
  * We can also help [build your SPF Record](https://tools.sparkpost.com/spf/builder)
  * While you are at it, [validate your DKIM](https://tools.sparkpost.com/dkim) signature
* We made some changes to our [pricing plans](https://www.sparkpost.com/pricing/); we now offer a 150K plan and we also lowered the price for the 1M Plan by 99 cents!
* Released [elixir-sparkpost 0.4.0](https://github.com/SparkPost/elixir-sparkpost/releases) with contribution from community member @asgoel

### Fixed

* The SMTP API now checks the `transactional_default` account option even if message options are not set in the `X-MSYS-API` header.


## February 24, 2017

### What's New?

* You can now update your suppression list in real-time! No more waiting for edits to take effect
* We have a shiny new SparkPost Labs A/B test API ([docs](https://developers.sparkpost.com/api/ab-testing.html))
* We sped up the SparkPost API, especially for small transmissions and sending from Europe.
* When creating sending domains, we clarified our requirements to help make the process easier
* If you lose your device, you can now disable 2fa by re-entering your password (backup codes are coming soon).
* We now accept any inbound messages sent to abuse@<bounce_domain> or postmaster@<bounce_domain> and forward them to abuse@sparkpost.com or postmaster@sparkpost.com


## February 10, 2017

### What's New?

* You can now update your account-level options such as SMTP engagement tracking and API engagement tracking through the API using the [Account update endpoint](https://developers.sparkpost.com/api/account.html#account-update-put).

### Fixed

* We corrected an issue where web UI assets were being improperly cached. For those of you that saw the red bar of doom at the top of the screen, a hard refresh was required.


## February 3, 2017

### What's New?

* Released version 2.6.3 of the WordPress plugin ([changelog](https://wordpress.org/plugins/sparkpost/changelog/))
* Released [elixir-sparkpost 0.3.0](https://github.com/SparkPost/elixir-sparkpost/releases) which adds an HTTP timeout parameter and sets the default connection timeout to 30 seconds


## January 27, 2017

### What's New?

* Simplified the way you verify ownership of your sending domains with SparkPost. We removed the redundant SPF-based verification mechanism on the "sending domains" page.
* Out of band events - outofband, list, link, feedback, open, and click - are now enriched with more data from the originating delivery event. You can hit the events samples endpoints for [message events](https://api.sparkpost.com/api/v1/message-events/events/samples?event=outofband) or [webhooks](https://api.sparkpost.com/api/v1/webhooks/events/samples?event=outofband) to see sample data.
* Released [php-sparkpost 2.1.0](https://github.com/SparkPost/php-sparkpost/releases) with lots of little fixes, a new debug option to see the full request sent to SparkPost, and updates to ensure compatibility with php 7.
* Released [python-sparkpost 1.3.3](https://github.com/SparkPost/python-sparkpost/releases) with a fix to properly surface some underlying API errors.
* Released node-sparkpost 2.1.1 and 2.1.2 with minor fixes and an update to our handling of promises.

### Fixed

* You can now filter the message events in the app by generation rejection.
* We now make sure all emails uploaded to a suppression list are lower-cased before saving them.


## December 9, 2016

### What's New?

* You can now duplicate templates in the app

### Fixed

* The recipient list CSV template file can be downloaded again
* The suppression list CSV now includes the `type` column
* Relay events are now coming through properly in webhooks
* We are no longer improperly DKIM signing messages for sending domains that were only verified via the abuse@ or postmaster@ verification method.


## November 18, 2016

### What's New?

* We added advanced filtering to the [message events](https://app.sparkpost.com/reports/message-events) in the app, which allows you to filter by from addresses, event types, templates, subaccounts, campaigns, and message IDs.
* Migrating from SendGrid to SparkPost? We put together a [SendGrid migration guide](https://www.sparkpost.com/migration-guides/sendgrid/) to help you along the way.
* Released [python-sparkpost 1.3.2](https://github.com/SparkPost/python-sparkpost/releases), with fixes to cc/bcc handling and instructions for use with Google App Engine.
* [Updates](https://www.sparkpost.com/blog/suppression-list-api-updates/) to suppression list for API and UI

### Fixed

* Our webhooks started sending the bounce_class field along as an integer when it should have stayed a string. The field is now behaving properly.


## November 4, 2016

### What's New?

* Released [node-sparkpost 2.0.0](https://github.com/SparkPost/node-sparkpost) - major version bump with huge feature, usability and maintainability improvements! Check out the [release notes](https://github.com/SparkPost/node-sparkpost/releases/tag/v2.0.0) for all the delicious details.
* Released [elixir-sparkpost 0.2.1](http://github.com/SparkPost/elixir-sparkpost) - huge thanks to @david.antaramian!
* If you’ve ever wanted to view a sending domain’s DKIM settings after it’s been verified, you can do that now.

### Fixed

* Transactional / non-transactional flags are now set correctly when importing CSVs for suppression lists in the app. Excel auto-upcases boolean values, and we weren’t accounting for that.
* Messages to inbound domains no longer incorrectly move `cc` recipients into the `to` array of relay webhook payloads.


## October 21, 2016

### What's New?

* Improved DKIM validation in the Sending Domains API by ensuring that submitted public and private keys match
* Released version 2.5.0 of our [WordPress plugin](https://github.com/SparkPost/wordpress-sparkpost/releases/tag/2.5.0), which adds support for transactional email and hooks

### Fixed

* Our [DKIM Validator Tool](https://www.sparkpost.com/resources/tools/dkim-tool/) now properly shows the `Sender` as the value of the `From` header on the test results page


## October 14, 2016

* We’ve got a shiny new [website](https://www.sparkpost.com/) and added our [DKIM Validator Tool](https://www.sparkpost.com/resources/tools/dkim-tool/) to it!
* Released version 1.3.0 of [python-sparkpost](https://github.com/SparkPost/python-sparkpost/releases/tag/v1.3.0) - adds extended error code to exception, adds delete method for `Transmission` class, honors HTTP keep-alive, and guesses mimetype if necessary in Django email backend


## September 30, 2016

### Fixed

* You can use a url with query string included so that they can receive inbound messages through different webhooks
* You can now use proper template previewing for html/text content that contains `render_dynamic_content()` macro calls
* You are now able to click-track links that are defined in html area elements


## September 2, 2016

### Fixed

* Windows users can now upload CSVs of their suppression list in the app
* Blocked sending domains can now be removed from your account
* In plain text emails, square brackets at the end of tracked links no longer break


## August 26, 2016

### What's New?

* You can now add a credit card to free accounts to accrue overages and purchase add-ons

### Fixed

* Substitution data now gets stored in the browser when clicking preview & send on a template in the app
* Reply-to now works properly with the WordPress 4.6 release in the SparkPost WordPress plugin​


## August 05, 2016

### Fixed

* Generation rejection events now include `bounce_class: 25` in the Message Events API and Webhooks to align with the Metrics API


## July 29, 2016

### What's New?

* Released version 1.0.0 of [nodemailer-sparkpost-transport](https://github.com/SparkPost/nodemailer-sparkpost-transport), which now properly implements the nodemailer API
* Released version 2.0.3 of [php-sparkpost](https://github.com/SparkPost/php-sparkpost), which removed any dependency on Guzzle by replacing it with `MessageFactoryDiscovery`

### Fixed

* We now properly validate long-format emails (like `Homer Simpson <homer.simpson@springfield.org>`) in the Reply-To field in templates in the app


## July 22, 2016

### What's New?

* Paid accounts can purchase sending IPs in the app! Time for an IP!
* You can now [manage your suppression list](https://app.sparkpost.com/lists/suppressions) in the app.

### Fixed

* It’s no longer possible to attempt to share a sending domain with all subaccounts and specify a specific subaccount - the two are mutually exclusive


## July 15, 2016

### What's New?

* You can now use tracking domains with subaccounts
* You can now see message events details in the app by clicking on the + next to a row of data
* Released [version 1.3.6](https://github.com/SparkPost/node-sparkpost/releases/tag/1.3.6) of the Node.js client library

### Fixed

* We now return a 503 when the Unable to contact authorization service error occurs


## June 30, 2016

### What's New?

* Our API docs now have a snazzy new fuzzy search!
* You can now specify reply to via the template editor in the app. Substitution variables work too!
* sp_shared is now available to be selected as an IP pool for subaccounts in the app.
* Released [version 2.0.1](https://github.com/SparkPost/php-sparkpost/releases/tag/2.0.1) of the PHP client library with an important fix from our awesome community.
* For those migrating from 1.x to 2.x of the PHP client library, we created a [migration guide](https://github.com/SparkPost/php-sparkpost/blob/master/MIGRATION.md).


### Fixed

* Objects no longer throw errors when used in substitution variables in the from email (e.g. `{{domains.marketing}}`).


## June 24, 2016

### What's New?

* Version 2.0 of the PHP client library has arrived! Note that this is a major release with breaking changes to the interface. It has been renamed sparkpost/sparkpost. Feedback welcome!
* We now show Timestamp, Event, Campaign, Friendly From, Recipient, Message ID, Bounce Reason, and Bounce Classification Code as the columns in the Message Events report in the app

### Fixed

* The `sending_ip` key in webhooks and message events is no longer coming through as “shared” when using the sp_shared IP pool


## June 17, 2016

### What's New?

* Configure IP pools using the app or the the IP Pools API ([docs](https://developers.sparkpost.com/api/ip-pools.html))
* Manage dedicated sending IPs using the Sending IPs API ([docs](https://developers.sparkpost.com/api/sending-ips.html))
* Configure a custom bounce domain for your account using the app or the Bounce Domains API ([docs](https://developers.sparkpost.com/api/bounce-domains.html))
* Messages are now accepted and queued for a max of 24 hours for accounts that are suspended
* We now bill accounts for overages when they reach $100 or more

### Fixed

* SPF settings in the app no longer show an insanely long list of ip4: values
* The bounce domains API now returns more than just `{}` on creation
* Errors encountered when editing IP pools in the app now properly display error information
* The recipient list API now returns a 4xx instead of a 500 when the JSON format is invalid
* Tables in our API docs now display properly on mobile devices


## June 03, 2016

### What's New?

* The "Oh Snap!" error messages weren't too helpful - we now surface 4xx errors and include the error message, code, and description in the big red error bar
* Our API docs are now static HTML files - they load a LOT faster and work on mobile devices now
* The webhooks batch status now shows the previous failure after the webhook starts to be successfully delivered again
* You can now use substitution variables in the from domain in the templates web UI
* We've given the [C# client library](https://github.com/darrencauthon/csharp-sparkpost) back to you, the community, with @darrencauthon at the helm

### Fixed

* The Oauth2 authentication method for webhooks is properly refreshing tokens again (thanks @qianyu6688999, et. al.!)
* When templates contained an image as the first element, our preview in the web UI was getting cut off - no more!
* We squashed the pesky that was causing 500 errors when creating multiple subaccounts programmatically


## May 27, 2016

### What's New?

* For improved deliverability we no longer set the `X-AntiAbuse` header
* For improved deliverability we no longer include sparkpost.com in the List-Id header
Version 1.2.1 of the PHP library ([see release notes](https://github.com/SparkPost/php-sparkpost/releases/tag/1.2.1))

### Fixed

* *Keep me logged in* now keeps you logged in in the web UI
* SMTP configuration info mysteriously disappeared from the UI... it's back!
* We now return better error messages via the sending domains API when SPF or DKIM verification fails
* We no longer require the existence of k=rsa when verifying DKIM for a sending domain
* When trying to create a sending domain on a subaccount and specifying shared_with_subaccounts = false, we now return a 400 (instead of a 500)
* When trying a PUT call to the transmissions API, we now return a 405 (instead of a 500)


## May 20, 2016

### What's New?

* Tracking domains can now be used with subaccounts
* The account API is now public, allowing you to get details about your account including subscription and usage
* Nested includes are allowed in SPF records for verification
* Click tracking can be disabled on a per-link basis using `data-msys-clicktrack="0"`
* You can request up to 10k results from several metrics API endpoints using the limit parameter

### Fixed

* Campaigns that include commas "like, totally" can be searched via metrics API, message events API (web UI coming soon!)
* Substitution data now gets properly shown for from name and from email localpart in the web UI template preview
* The alt attribute is now included in our open pixel img tag


## May 06, 2016

### What's New?

* We now prorate billing when upgrading plans.
* The `shared_with_subaccounts` boolean key is now returned with GET requests to the Sending Domains API.
* Version 0.16.1 of the Java library ([see release notes](https://github.com/SparkPost/java-sparkpost/releases/tag/v0.16.1))
* Version 1.2.0 of the PHP library ([see release notes](https://github.com/SparkPost/php-sparkpost/releases/tag/1.2.0))

### Fixed

* Remove the possibility of DNS lookup errors on SPF records due to lookup limits.
* Rejections report details now properly show up in the web UI when there were rejections logged.
* The message shown when an email verification can't be sent is no longer meh.
* Webhooks batch status now show success for all 2xx responses in the web UI, not just 200s.


## April 29, 2016

### What's New?

* Sending domains on the master account can now be used by subaccounts.
* The master account can now send on behalf of the subaccount using the master account API key.
* Messages marked as transactional no longer include the List-Unsubscribe header by default.
* Subaccounts can now be associated with IP pools in the web UI.
* You can now request a sending limit increase from the web UI.
* You can now request dedicated IPs from the web UI.
* Version 1.4.0 of the C# library ([see release notes](https://github.com/SparkPost/csharp-sparkpost/releases/tag/1.4.0))
* Version 1.3.3 of the Node.js library ([see release notes](https://github.com/SparkPost/node-sparkpost/releases/tag/1.3.3))
* Version 2.3.0 of the WordPress plugin ([see release notes](https://wordpress.org/plugins/sparkpost/changelog/))

### Fixed

* Timestamps are now strings in our webhooks example endpoint to match the payload from real webhooks.
* Removed relay webhook events from Message Events API samples/docs - we don't send events for those!
* Our Sending Domains API was rejecting valid DKIM pairs wrapped with BEGIN/END text.
* Sending domains attached to subaccounts no longer show up in the template UI dropdown (we don't currently support stored templates for subaccounts).


## March 30, 2016

* We have released the subaccount feature. You can read more here and in SparkPost API


## March 16, 2016

* We have configured a special domain for testing More details
* Minor user interface changes


## March 11, 2016

* We have introduced CSS Inlining in SparkPost API and SMTP via the inline_css option


## February 25, 2016

* We introduced new price plans, check on our website
* Now you can upload your recipient lists in UI


## February 19, 2016

* Improved Dashboard which shows user's progress


## January 14, 2016

We now have a Reporting only role available with multiple user support


## January 11, 2016

* You now have the ability to enable and disable Engagement tracking for SMTP from the User Interface


## December 22, 2015

* Introduced the ability to manage inbound domains via API


## December 09, 2015

* We have a new price plan called Express Check it out


## December 02, 2015

* Engagement tracking for SMTP is now "off" by default


## November 25, 2015

* Engagement tracking for SMTP usage is now set to "on" More info


## November 20, 2015

* You can now add additional users to your account More Info
* View and search for message events in the user interface
* We have added the ability to verify your sending domains using postmaster@ /abuse@ More Info


## November 13, 2015

* We now have multiple user support


## October 30, 2015

* Improved support for SMTP relay set-up


## October 22, 2015

* With daily and hourly limits the same, the hourly section of the Usage report was removed
* You can now remove unused sending domains from your account via UI and API
* Improved processing time for transmissions schedule with “now” parameter


## October 01, 2015

* We have added the ability to enable multiple custom tracking domains via user interface or APIs. More details
* You can now view the first 4 digits of the API key on the API Key page within the application


## September 17, 2015

* A dashboard was added in the user interface that walks a user through steps needed to set-up your account.
* We updated the user interface to support the Basis Authentication that was rolled out last month. More Details
* We have corrected the situation that in some cases, under certain circumstances, Out Of Band bounces were double counted. More Details on Out of Band Bounces
* We updated webhooks documentation endpoint to include friendly_from, rcpt_tags, template_version,  transmission_id,  subject and for event type spam_complaint


## August 28, 2015

* The Message Events API provides the means to search the raw events generated by SparkPost. More Details
* We have added support for Oauth2 authentication and Basic Authentication when setting up a webhook.
* We have added SMTP inbound relay to allow easier processing for inbound messages. More Details
* We have the raised the limit on the number of data that customers can pass into the metadata of the transmission from 200 to 1000 bytes (approximately 1000 characters).


## July 31, 2015

* Schedule Transmissions for Future Date/Time. More info
* You may now replace an existing recipient list (and maintain the same “id”) More Info
* You may now enable a list of allowable IP addresses to a given API key


## June 23, 2015

* Improved support for BCC/CC functionality. More info


## May 28, 2015

* Added initial support for handling Inbound email processing as a Beta feature - includes new API permissions and additional Webhook events.  If you are interested in participating in the Beta, please contact us through support.


## May 14, 2015

* We have expanded our list of countries for sign-up to include India, Singapore and Japan
* Return-path is now optional for the Transmission API


## May 07, 2015

* You can now log in using your Username or Email address. Previously, you needed your username to log in.
* Bounce and delayed message reporting now includes the receiving internet service provider (ISP)
* Improved error handling on template creation in user interface (UI) and the REST API- On the UI an error message displayed in the upper right of the screen that shows the line number of the error, and the actual line in the content box is highlighted


## April 14, 2015

* Introduced optional 2-Factor Authentication in order to help customers further protect their account from unauthorized access.  Check it out under the 'Account' tab, 'Security' setting: https://app.sparkpost.com/#/account/security  There is also a knowledge base article on how to set it up here.


## April 10, 2015

* Introduced the ability to sign up for a paid tier directly from the SparkPost.com web site. Go to https://www.sparkpost.com/pricing


## March 31, 2015

* Introduced the ability to sign up for a paid tier using your credit card. Select the new 'Billing' page: https://app.sparkpost.com/#/settings/billing


## March 12, 2015

* Ability to "Select All" in API Data Access Permissions
* Added new Suppression List API
* New List Unsubscribe and Link Unsubscribe Events Types added to the Message Category Webhook (see Webhooks API for more information, in particular the Event-To-Field Mapping for Message Events Category).


## February 10, 2015

* Password Reset Feature
* Account Usage Report (see Usage Report in the User Guide for more details)
* New fields in a number of the web hooks events (see Webhooks API for more information, in particular the Event-To-Field Mapping).   All events now contain the recipient address (rcpt_to), meta data now included in click and open events (rcpt_meta)
* Tags, metadata and campaign information may all now be added to messages sent to SparkPost through SMTP.  See SMTP API in the User Guide for more details.


## December 08, 2014

# Release of the Sending Domains API allowing programmatic configuration of your SparkPost Sending Domains.


## November 17, 2014

* Users can now easily test their DNS configuration in order to verify their custom sending domain


## November 04, 2014

* SMTP validation of a customer's sending domain will return an SMTP error when invalid
* Updated the domain/campaign filter field on the Engagement report to clarify that data on this report cannot be filtered by domain; it can only be filtered by campaign


## October 23, 2014

* Added validation and error messages in the UI
* Added a basic HTML syntax editor in the Template UI
* Changed the API/SMTP setup page to show smtp.sparkpostMAIL.com
* When create/edit form is open, hid the add buttons at the top of the config screens for API & SMTP, Sending Domains, and Webhooks
* Improved the loading state when pages are loading
* Updated styling to match prototype
* Added GoogleAnalytics to the application
* Production bug fixes:
* Messages that are generated were not being properly signed when the sender was sparkpostmail.com
* When sending a test message from the Template UI, the system was always using the Published version of the template instead of the Draft version
* Filtering on the category column in the Rejections report was missing


## October 20, 2014

* Added the ability to configure custom sending domains via the UI
* Added 5 new reports, which include:
* Bounces: shows details for bounced messages including counts and rates by category, classification, and reason
* Rejections: shows details for messages that were rejected for generation or policy reasons
* Accepted: shows details for messages that were accepted by the receiving MTA including; number of attempts, latency, and average message size
* Delayed: shows details for messages required multiple delivery attempts
* Engagement: shows the number of messages that were targeted, accepted, opened, and clicked; along with details on clicks by link


## October 14, 2014

* Went live with the new user interface and SparkPost.com!
