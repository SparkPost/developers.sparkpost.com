| [Prev](conf.ref.default_binding)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.delay_dsn_max_retry_interval.php) |

<a name="conf.ref.default_charset"></a>
## Name

default_charset — control usage of the "default" character set

## Synopsis

`default_charset = "charset"`

<a name="idp8813680"></a>
## Description

`default_charset` is intended to allow the customer to specify what the default assumed character set within the product is. This does not prevent the product from interpreting other character sets as normal. This is helpful to international customers, as some MUAs do not correctly represent their charset.

The default value for this option is `"us-ascii"`

<a name="idp8817200"></a>
## Scope

default_binding is valid in the global, pathway_group and pathway scopes.

| [Prev](conf.ref.default_binding)  | [Up](conf.ref.files.php) |  [Next](conf.ref.delay_dsn_max_retry_interval.php) |
| default_binding  | [Table of Contents](index) |  delay_dsn_max_retry_interval |
