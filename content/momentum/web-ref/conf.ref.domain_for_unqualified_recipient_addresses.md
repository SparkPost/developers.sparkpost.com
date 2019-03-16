| [Prev](conf.ref.domain)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.domain_for_unqualified_sender_address.php) |

<a name="conf.ref.domain_for_unqualified_recipient_addresses"></a>
## Name

domain_for_unqualified_recipient_addresses — configure a domain which will be used to resolve delivery for unqualified addresses

## Synopsis

`Domain_for_unqualified_recipient_addresses = "example.com"`

<a name="idp9428080"></a>
## Description

RFC-2821, section 4.5.1, requires that all compliant MTA's accept the special address of "RCPT TO:&lt;postmaster>" without a domain name. Mail sent to this address should normally be forwarded to the entity responsible for the MTA as a whole, not some specific domain being accepted by that MTA. To make this support more flexible, `Domain_for_unqualified_recipient_addresses` will actually support any unqualified e-mail address. For example, a site may wish to also support "RCPT TO:&lt;abuse>" as an alias, as suggested by RFC-2142.

When set, `Domain_for_unqualified_recipient_addresses` will rewrite the envelope address internally, although the original "RCPT TO:" is still available from Sieve during all rcptto and data phases, using `vctx rcptto_string`. The envelope address is actually rewritten before the each_rcpt phases, and will now use the expanded address when relayed to the final destination. The trace headers, however, will reflect the original "RCPT TO" string. NOTE that the "TO:" header in the e-mail is never rewritten.

`Domain_for_unqualified_recipient_addresses` is valid in either a global scope (for a single fallback domain for all unqualified addresses) or can be set in a Pathway scope (for specific fallback domains for any number of specific domains). The more specific Pathway scope overrides any existing value set in a global scope.

To accept unqualified "Postmaster" mail for the entire MTA, one would specify

`domain_for_unqualified_recipient_addresses = "example.com"`

which would rewrite any message sent to "RCPT TO:&lt;postmaster>" as if it had originally been written "RCPT TO:<postmaster@example.com>" .

<a name="idp9436624"></a>
## Scope

Domain_for_unqualified_recipient_addresses is valid in pathway, pathway_group, global and listener scopes.

| [Prev](conf.ref.domain)  | [Up](conf.ref.files.php) |  [Next](conf.ref.domain_for_unqualified_sender_address.php) |
| domain  | [Table of Contents](index) |  domain_for_unqualified_sender_address |
