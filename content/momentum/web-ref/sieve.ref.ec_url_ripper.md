| [Prev](sieve.ref.ec_trunc)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_valid_binding) |

<a name="sieve.ref.ec_url_ripper"></a>
## Name

ec_url_ripper — Extract domains and urls for lookup in DNSBL

## Synopsis

`ec_url_ripper`

<a name="idp30747472"></a>
## Description

`ec_url_ripper` runs in the data phase. It extracts domains and urls in an email's headers and body and looks them up in the DNSBL specified in your Momentum configuration file. Additionally, those domains and urls found can be resolved to IP addresses, which will be looked up. You need to load the [Section 14.75, “url_ripper – URL Extraction”](modules.url_ripper "14.75. url_ripper – URL Extraction") module passively to use this action.

This action returns a hash. The hash will be empty if no domains or urls in the email are listed on the specified DNSBL. If any is listed, a hash key will be the corresponding context key specified in the configuration and the associated value will be a string list containing the domains and urls that get listed. The value of the matched context key will also be updated in this case.

<a name="example.ec_url_ripper"></a>

**Example 16.101. ec_url_ripper example**

Using the following script, domains and urls in an email are extracted and looked up in DNSBL. The `ecelerity.conf` for this setup looks something like the following:

```
url_ripper "url_ripper1" {
  enabled = false
  base = "multi.surbl.org"
  bits [
          0.0.1.0 = "xbl_hits"
          0.0.0.1 = "sbl_hits"
          0.0.0.2 = "sc_surbl_hits"
          0.0.0.4 = "ws_surbl_hits"
          0.0.0.8 = "ph_surbl_hits"
          0.0.0.16 = "ob_surbl_hits"
          0.0.0.32 = "ab_surbl_hits"
          0.0.0.64 = "jp_surbl_hits"
  ]
  values [
    127.0.0.2 = "simple_hits"
  ]
  address_headers = ( "Errors-To" "From:Reply-To" "Return-Path:Sender" )
}

sieve "sieve1" {
  script "data_phase1" {
    source = "/path/to/myscript.siv"
  }
}
```

and the contents of `myscript.siv`:

```
# Check SURBL
# url_ripper is defined in ecelerity.conf
#
if anyof (
  vctx_mess :contains "xbl_hits" "",
  vctx_mess :contains "sbl_hits" "",
  vctx_mess :contains "sc_surbl_hits" "",
  vctx_mess :contains "ws_surbl_hits" "",
  vctx_mess :contains "ph_surbl_hits" "",
  vctx_mess :contains "ob_surbl_hits" "",
  vctx_mess :contains "ab_surbl_hits" "",
  vctx_mess :contains "jp_surbl_hits" "",
  vctx_mess :contains "simple_hits" ""
) {
  ec_action 550 "SURBL hit!";
}
```

<a name="idp30757536"></a>

**Example 16.102. Example configuration for URIBL check**

For a URIBL check configure the url_ripper module as follows:

```
# ecelerity.conf stanza
#
url_ripper "url_ripper1" {
  base = "multi.uribl.com"
  max_lookups = 100
  forward = true
  bits [
    0.0.0.2 = "black_hits"
    0.0.0.4 = "grey_hits"
    0.0.0.8 = "red_hits"
  ]
  address_headers = ( "Errors-To" "From:Reply-To" "Return-Path" "Sender" )
}
```

Use the following Sieve script for a URIBL check:

```
# Check URIBL
# url_ripper is defined in ecelerity.conf
#
if anyof (
  vctx_mess :contains "black_hits" "",
  vctx_mess :contains "grey_hits" "",
  vctx_mess :contains "red_hits" ""
) {
  ec_action 550 "URIBL hit!";
}
```

<a name="idp30761664"></a>
## See Also

[Section 14.75, “url_ripper – URL Extraction”](modules.url_ripper "14.75. url_ripper – URL Extraction")

| [Prev](sieve.ref.ec_trunc)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_valid_binding) |
| ec_trunc  | [Table of Contents](index) |  ec_valid_binding |
