| [Prev](modules.mxip)  | Chapter 14. Modules Reference |  [Next](modules.outbound_audit) |

## 14.49. opendkim – OpenDKIM module

The `opendkim` module adds OpenDKIM capabilities to Momentum. OpenDKIM is an open source implementation of the DKIM (Domain Keys Identified Mail) sender authentication system that implements the DKIM service. For a full description see [OpenDKIM.org](http://www.opendkim.org/).

**Configuration Change. ** This module is available in Momentum 3.6.

### Note

The OpenDKIM modules replace the DKIM modules. If Multiple Event Loop Mode is enabled, you *must* use the opendkim modules for DKIM signing and verification. The legacy [DKIM modules](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures") are not supported in Multiple Event Loop Mode.

The `opendkim` module is deployed in much the same way as the `dkim_sign` module. For a general overview of DKIM signing and validation, as well as how to generate DKIM public and private keypairs, see [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures"). When verifying messages, with opendkim you must use Lua.

### 14.49.1. Signing

Like the `dkim_sign` module ([Section 14.27.3, “Signing”](modules.dkim#modules.dkim.signing "14.27.3. Signing")), this module implements the DKIM standard and provides for signing email messages on a per-binding and/or per-domain basis. You can choose to sign messages through module configuration settings or do so at runtime using Lua functions.

### Note

In order to use the `opendkim` module for signing you must set [opendkim_sign](conf.ref.opendkim_sign "opendkim_sign") to `true` in the appropriate scope.

In order to sign using a Lua script, you must create a script and reference it from the [scriptlet](modules.scriptlet "14.60. scriptlet – Module") module as shown in [Example 14.76, “opendkim example”](modules.opendkim#modules.opendkim.example "Example 14.76. opendkim example"). For a sample script see [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign "msys.validate.opendkim.sign").

### Warning

You cannot DKIM sign messages using both OpenDKIM and DKIM. You must configure either `opendkim` or `dkim_sign`. OpenDKIM is the preferred method of signing.

To control how OpenDKIM signing statistics are recorded see [signing_stats](conf.ref.signing_stats "signing_stats"). The console command [signing_stats](console_commands.signing_stats "signing_stats") is used to examine signing statistics and [signing_stats reset](console_commands.signing_stats_reset "signing_stats reset") resets statistics.

### 14.49.2. Validating

*Unlike the `dkim_validate` module, verification of DKIM messages with the `opendkim` module is only driven through Lua.*                                                                                                                  Links to the appropriate Lua functions are listed below at [Section 14.49.4, “Runtime Usage”](modules.opendkim#modules.opendkim.runtime "14.49.4. Runtime Usage").

For an example of a verification script, see [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify "msys.validate.opendkim.verify").

### Note

You cannot use Sieve functions for signing or verifying when using the `opendkim` module. You must use Lua functions.

### 14.49.3. Configuration

Find below an example of how to configure the opendkim module to sign outgoing messages using both module configuration options and Lua.

<a name="modules.opendkim.example"></a>

**Example 14.76. opendkim example**

```
Binding_Group "opendkim_signing" {
  opendkim_sign = "enabled"

  binding "foo"{
    domain "test1.example.com" { opendkim_sign = "enabled" }
    domain "test2.example.com" { opendkim_sign = "disabled" }
  }
}

opendkim "opendkim1" {
  header_canon = "relaxed"
  body_canon = "relaxed"
  headerlist = ("from", "to", "message-id", "date", "subject", "Content-Type")
  digest = "rsa-sha256"
  key = "/opt/msys/ecelerity/etc/conf/dkim/%{d}/%{s}.key"
  dkim_domain "ectest.example.com" {
    selector = "dkim-s1024"
  }
}
# reference a Lua script to sign using a script
scriptlet "scriptlet" {
  ...
  script "opendkim_sign" {
    source = "luaScripts.opendkim_sign"
  }
}
```

DKIM signing using module configuration options is controlled by the scope of `opendkim_sign` and by the `dkim_domain` scope.

The options defined by this module are as follows:

<dl className="variablelist">

<dt>base_domain</dt>

<dd>

This option specifies which domain should be used for signing. DKIM allows for emails to be signed by a parent domain. For example, an email from `test@corp.example.com` can be signed in the `example.com` domain. This option is only valid within the `dkim_domain` scope.

</dd>

<dt>body_canon</dt>

<dd>

Specifies the canonicalization that should be performed on the email body before digesting and signing the message. The two supported canonicalizations are `simple` and `relaxed`. The default value for this option is `simple`.

</dd>

<dt>body_length_limit</dt>

<dd>

Whether or not there is a limit on the length of the email body. The default value for this option is `false`.

</dd>

<dt>copy_headers</dt>

<dd>

This option causes all of the headers that were selected for signing by `headerlist` to be quoted-printable encoded and placed in the `z=` tag of the `DKIM-Signature` header. This can be useful for debugging. The default value for this option is `false`.

</dd>

<dt>digest</dt>

<dd>

Specifies the algorithms that should be used to create the message digest and the resulting signature. The supported mechanisms are `rsa-sha1` and `rsa-sha256`. The default value for this option is `rsa-sha256`.

</dd>

<dt>dkim_domain</dt>

<dd>

This 'option' is a scope within the opendkim scope. Any option can appear within the opendkim module scope or within this scope. The only exception is the `base_domain` option which can only appear within the dkim_domain scope. For a listing of all the options valid in this scope see [Section 14.49.3.1, “The `dkim_domain` Scope”](modules.opendkim#modules.opendkim.dkim_domain "14.49.3.1. The dkim_domain Scope").

</dd>

<dt>header_canon</dt>

<dd>

Specifies the canonicalization that should be performed on the email headers before digesting and signing the message. The two supported canonicalizations are `simple` and `relaxed`. Due to the way MTAs operate, the simple canonicalization is very fragile and prone to failure because of header rewriting and rewrapping. The default value for this option is `simple`.

</dd>

<dt><a name="modules.opendkim.headerlist"></a>headerlist</dt>

<dd>

The headerlist configuration directive is required and differs from the option of the same name used with the [DKIM](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures") module. During digestion DKIM will sign all headers specified in the headerlist in the order they are specified. Although there is no default headerlist, the DKIM specification requires signing the `From` header and any header field that describes the role of the signer such as `Sender` or `Resent-From`. The specification also recommends signing `Subject`, `Date`, all MIME header fields and all existing, non-repeatable header fields.

The headerlist itself is a comma or space separated list of header field names such as `headerlist = ( "From", "Subject", "Content-Type" )`.

DKIM provides for a signer to sign a non-existent header. This mechanism can be used to prevent the header from being added to the message during transit. If the header is added during transit the DKIM signature will not verify. Using this mechanism the signer asserts that the header was not there when the message was signed. There is no default value for this option.

</dd>

<dt>identity</dt>

<dd>

This option is configurable from the web UI but its use is deprecated. There is no default value for this option.

</dd>

<dt>key</dt>

<dd>

This option is required and specifies the location of the RSA private key file on disk. The key file must be readable by the user that Momentum is running as and must be in Privacy Enhanced Mail (PEM) format.

### Warning

Note that Google requires all senders to sign with a 1024 bit or greater DKIM key size.

The file name has two expandable variables that may be used to ease deployment over multiple domains: %{d} expands to the responsible domain and %{s} expands to the selector.

</dd>

<dt>keycache_size</dt>

<dd>

The key cache size expressed as the number of keys. The default value for this option is `2048`.

</dd>

<dt>lifetime</dt>

<dd>

The `lifetime` option can be used to specify the length of time a signature remains valid. An expiration value is included in the signature header added to each email message. The lifetime of the signature begins at signing and expires some time later as determined by the `lifetime` option value. A message will not verify after the signature lifetime has expired. The value of this option is specified in hours. The default value for this option is `0`, indicating that the module does not mark the signature with *any* expiration timestamp.

</dd>

<dt>neg_keycache_ttl</dt>

<dd>

In the event that the key isn't already in the cache, the amount of time in seconds before retrieving it again. The default value for this option is `3600`.

</dd>

<dt>oversign_headerlist</dt>

<dd>

This option asserts headers. It has no default value.

</dd>

<dt>pos_keycache_ttl</dt>

<dd>

The total time in seconds for items to stay in the cache before fetching them again. The default value for this option is `300`.

</dd>

<dt>selector</dt>

<dd>

This option specifies the DKIM selector to be used for signing. During verification the `selector` is used, along with the signing domain, to retrieve the signing domain's public key. The key retrieved will be contained in the DNS TXT record for {selector}._domainkey.{domain}. There is no default value for this option.

</dd>

<dt>sign_condition</dt>

<dd>

This option specifies which validation context variable must exist as a predicate to signing messages. When an SMTP client performs an SMTP AUTH action, the `auth_user` context key will be set to the username used during authorization. When an SMTP client is allowed to relay through Momentum because of an entry in `Relay_Hosts` or a `relaying` declaration in an ESMTP_Listener IP access control list, the `can_relay` context key is set to "true."

In most corporate environments, sign_condition should be `auth_user` and in large sending architectures where the relaying SMTP clients are implicitly trusted the sign_condition should be `can_relay`. There is no default value for this option.

</dd>

<dt>skip_headerlist</dt>

<dd>

An array of the headers that will be skipped. For more information about headers see [headerlist](modules.opendkim#modules.opendkim.headerlist) . There is no default value for this option.

</dd>

<dt>testing</dt>

<dd>

Set this option to `true` if you are not in a production environment. The default value for this option is `false`.

</dd>

</dl>

**14.49.3.1. The `dkim_domain` Scope**

The `dkim_domain` scope is used to define a selector or signing domain for specified domains. Use this option in the following way:

```
opendkim "opendkim1" {
  ...
  selector = "dkim1024"  # default selector
  ...

  dkim_domain "corp.example.com" {
    selector = "dkim-s1024"
    base_domain = "example.com"
  }
}
```

The options valid in this scope are:

*   `base_domain`

*   `body_canon`

*   `body_length_limit`

*   `digest`

*   `header_canon`

*   `key`

*   `key_cache_size`

*   `neg_keycache_ttl`

*   `pos_keycache_ttl`

*   `selector`

*   `sign_condition`

*   `testing`

See [Section 14.49.3, “Configuration”](modules.opendkim#modules.opendkim.configuration "14.49.3. Configuration") for a description of these options.

### 14.49.4. Runtime Usage

You can sign OpenDKIM domains using module configuration settings or at runtime using Lua functions. *Verification of DKIM messages is only driven through Lua.*                                              The Lua APIs mirror the OpenDKIM API.

### Note

The OpenDKIM API is very similar to the existing DKIM API but lacks an option for the header list because the header list is a global setting; consequently, you cannot change the header list per message.

In order to sign at runtime you must create a Lua script and reference it from the scriptlet module (see [Section 14.60, “scriptlet – Module”](modules.scriptlet "14.60. scriptlet – Module")) as shown in [Example 14.76, “opendkim example”](modules.opendkim#modules.opendkim.example "Example 14.76. opendkim example") and likewise with verification.

Loading the `opendkim` module exposes the following Lua functions:

*   [msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons "msys.validate.opendkim.get_sig_canons")

*   [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign "msys.validate.opendkim.sign")

*   [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify "msys.validate.opendkim.verify")

*   [msys.validate.opendkim.get_num_sigs](lua.ref.msys.validate.opendkim.get_num_sigs "msys.validate.opendkim.get_num_sigs")

*   [msys.validate.opendkim.get_sig](lua.ref.msys.validate.opendkim.get_sig "msys.validate.opendkim.get_sig")

*   [msys.validate.opendkim.get_sig_domain](lua.ref.msys.validate.opendkim.get_sig_domain "msys.validate.opendkim.get_sig_domain")

*   [msys.validate.opendkim.get_sig_selector](lua.ref.msys.validate.opendkim.get_sig_selector "msys.validate.opendkim.get_sig_selector")

*   [msys.validate.opendkim.get_sig_errorstr](lua.ref.msys.validate.opendkim.get_sig_errorstr "msys.validate.opendkim.get_sig_errorstr")

*   [msys.validate.opendkim.get_sig_flags](lua.ref.msys.validate.opendkim.get_sig_flags "msys.validate.opendkim.get_sig_flags")

*   [msys.validate.opendkim.get_sig_identity](lua.ref.msys.validate.opendkim.get_sig_identity "msys.validate.opendkim.get_sig_identity")

*   [msys.validate.opendkim.get_sig_keysize](lua.ref.msys.validate.opendkim.get_sig_keysize "msys.validate.opendkim.get_sig_keysize")

*   [msys.validate.opendkim.get_sig_signalg](lua.ref.msys.validate.opendkim.get_sig_signalg "msys.validate.opendkim.get_sig_signalg")

*   [msys.validate.opendkim.get_sig_hdrsigned](lua.ref.msys.validate.opendkim.get_sig_hdrsigned "msys.validate.opendkim.get_sig_hdrsigned")

*   [msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons "msys.validate.opendkim.get_sig_canons")

The following OpenDKIM objects are passed in to or returned by these functions:

*   `DKIM` – A signing or verifying context for a message

*   `DKIM_SIGINFO` – Private handle referencing information about a particular signature on a signed message

*   `DKIM_STAT` – Return value or status

For more information about these data types see [OpenDKIM Library](http://www.opendkim.org/libopendkim/index.html).

| [Prev](modules.mxip)  | [Up](modules) |  [Next](modules.outbound_audit) |
| 14.48. mxip - IP Addresses In MX Records  | [Table of Contents](index) |  14.50. outbound_audit – Outbound traffic analytics |
