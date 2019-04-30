|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.domain_for_unqualified_recipient_addresses)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.domainkeys.php) |

<a name="conf.ref.domain_for_unqualified_sender_address"></a>
## Name

domain_for_unqualified_sender_address — configure a domain which will be used to substitute for unqualified sender addresses

## Synopsis

`Domain_for_unqualified_sender_address = "example.com"`

<a name="idp9445248"></a>
## Description

When set, `Domain_for_unqualified_sender_address` will rewrite the envelope address internally, although the original "MAIL FROM:" is still available from Sieve during all rcptto and data phases, using `vctx mailfrom_string`. The trace headers, however, will reflect the original "MAIL FROM" string. NOTE that the "FROM:" header in the e-mail is never rewritten.

`Domain_for_unqualified_sender_address` is valid in either a global scope (for a single fallback domain for all unqualified addresses) or can be set in a Pathway scope (for specific fallback domains for any number of specific domains). The usual fallback semantics apply.

<a name="idp9449488"></a>
## Scope

Domain_for_unqualified_sender_address is valid in a pathway, pathway_group, listener and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.domain_for_unqualified_recipient_addresses)  | [Up](conf.ref.files.php) |  [Next](conf.ref.domainkeys.php) |
| domain_for_unqualified_recipient_addresses  | [Table of Contents](index) |  domainkeys |
