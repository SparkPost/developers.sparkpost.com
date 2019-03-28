|     |     |     |
| --- | --- | --- |
| [Prev](modules.dnsbuf)  | Chapter 71. Modules Reference |  [Next](modules.ds_core) |

## 71.28. domainkeys – Yahoo! DomainKeys

<a className="indexterm" name="idp21294224"></a>

The domainkeys module, comprised of dk_sign and dk_validate, add Yahoo! DomainKeys capabilities to Momentum. Together, these modules implement the DomainKeys standard, providing for conditionally signing outbound messages and validating DomainKeys signatures for inbound messages.

DomainKeys is a technology proposal that can bring "yes or no" back to the decision process by giving email providers a mechanism for verifying both the domain of each email sender and the integrity of the messages sent (i.e,. that they were not altered during transit). For a general overview of DomainKeys signing and validation, as well as how to generate DomainKeys public and private keypairs, see [Chapter 22, *Using Yahoo! DomainKeys*](using_domainkeys "Chapter 22. Using Yahoo! DomainKeys") .

### 71.28.1. Signing Configuration

The dk_sign module provides the ability to conditionally attach DomainKeys signatures to emails that are submitted into the MTA.

In your `ecelerity.conf` file, set [domainkeys](conf.ref.domainkeys "domainkeys") in the appropriate scope and configure the dk_sign module. The following is an example configuration:

<a name="example.dk_sign.3"></a>

**Example 71.44. dk_sign module**

```
dk_sign "dk_sign1" {
  sign_condition = "can_relay"
  canon = "nofws"
  digest = "rsa-sha1"
  key = "/opt/msys/ecelerity/etc/conf/dk/%{d}/%{s}.key"
  dk_domain "example.com" {
    selector = "s1024"
  }
  dk_domain "corp.example.com" {
    selector = "s1024"
    base_domain = "example.com"
  }
}
```

The following are the configuration options defined by the dk_sign module. Any option can appear as a dk_sign or dk_domain scope configuration option with the exception of the `base_domain` option which can only appear within the `dk_domain` scope.

<dl className="variablelist">

<dt>base_domain</dt>

<dd>

Specifies which domain should be used for the signing. DomainKeys allows for emails to be signed by a parent domain. For example, a mail from `test@corp.example.com` can be signed in the `example.com` domain. This option is only valid within the `dk_domain` scope.

</dd>

<dt>canon</dt>

<dd>

Specifies the canonicalization that should be performed on the email before digesting and signing the message. The two supported canonicalizations are `simple` and `nofws`. Due to the way MTAs operate, the simple canonicalization is very fragile and prone to failure due to header rewriting and rewrapping. `nofws` canonicalization should always be used instead of `simple`. The `nofws` canonicalization removes all whitespace within the body and the eighth bit of the data before calculating the hash.

</dd>

<dt>digest</dt>

<dd>

Specifies the algorithms that should be used to create the message digest and resulting signature. The only supported mechanism is `rsa-sha1`.

</dd>

<dt>*`domain`* [ ... ]</dt>

<dd>

The system will automatically find the appropriate key if a top-level key file is defined and the domains use the same selector. If the selectors differ, a domain subconfiguration must be specified. When a message is received, the responsible sender is determined by looking for the domain part of the email address used in the "Sender" or "From" header (in that order). That subconfiguration for that domain is used for signing.

</dd>

<dt>headerlist</dt>

<dd>

The configuration directive is optional and instructs Momentum that only the specified headers should be signed in the order specified during digestion. This option can be used to sign only a limited subset of headers. By default, the implementation will extract all appropriate headers, sign them, and manufacture a headerlist for use with that message. The final headerlist describing the order and inclusion of headers will be included in the DomainKey-Signature as the h= value.

</dd>

<dt>key</dt>

<dd>

This option is required and specifies the location of the RSA private key file on disk. The key file must be readable by the user that Momentum is running as and must be in Privacy Enhanced Mail (PEM) format.

The file name has two expandable variables that may be used to ease deployment over multiple domains: %{d} expands to the responsible domain and %{s} expands to the selector.

</dd>

<dt>keycache_size</dt>

<dd>

Key cache size expressed as the number of keys. Default value is 2048.

</dd>

<dt>neg_keycache_ttl</dt>

<dd>

In the event that the key is not already in the cache, the amount of time in seconds before retrieving it again. Default value is 3600.

</dd>

<dt>pos_keycache_ttl</dt>

<dd>

Total time in seconds for items to stay in the cache before fetching them again. Default value is 300.

</dd>

<dt>selector</dt>

<dd>

Specifies the DomainKeys selector to be used for signing. The selector is required per the DomainKeys specification. Selectors allow for easier key management as multiple keys can be phased in and out over time. When accessing the appropriate public key for a signature, the TXT record for {selector}._domainkey.{domain} is resolved.

</dd>

<dt>sign_condition</dt>

<dd>

Specifies which validation context variable must exist as a predicate to signing messages. When an SMTP client performs an SMTP AUTH action, the [auth_user](policy.context.variables#predefined-context-conn-global "Table 63.1. Global Predefined Connection Context Variables") connection context variable will be set to the username used during authorization. When an SMTP client is allowed to relay through Momentum because of an entry in [relay_hosts](conf.ref.relay_hosts "relay_hosts") option or a `relaying` declaration in an ESMTP_Listener IP access control list, the [can_relay](policy.context.variables#predefined-context-conn-global "Table 63.1. Global Predefined Connection Context Variables") connection context variable is set to "true."

In most corporate environments, `sign_condition` should be `auth_user`. In large sending architectures where the relaying SMTP clients are implicitly trusted, `sign_condition` should be `can_relay`. In highly-structured sending architectures where ecstream injection is the only method, this option can be omitted entirely, with the result that any message for which a key exists will be signed.

</dd>

</dl>

### 71.28.2. Validation Configuration

The dk_validate module performs validation on all inbound messages received via SMTP.

In your `ecelerity.conf` file, load the dk_validate module, as shown:

<a name="example.dk_validate.3"></a>

**Example 71.45. dk_validate module**

```
dk_validate "dk_validate1" {
}
```

### 71.28.3. Message Context Variables

The domainkeys module sets one message context variable:

<dl className="variablelist">

<dt>dk_status</dt>

<dd>

Returns the domain key status, which can have one of the following values:

*   good

*   bad

*   bad (key type)

*   bad (no key)

*   bad (key revoked)

*   bad (public key)

*   bad (malformed signature)

*   bad (unsupported query type)

</dd>

</dl>

### 71.28.4. Lua Functions

Loading the domainkeys module exposes the following Lua functions:

*   [msys.validate.dk.get_responsible_domain](lua.ref.msys.validate.dk.get_responsible_domain "msys.validate.dk.get_responsible_domain")

*   [msys.validate.dk.sign](lua.ref.msys.validate.dk.sign "msys.validate.dk.sign")

### 71.28.5. Console Commands

The domainkeys module can be controlled through the `ec_console`. The following commands are available:

<dl className="variablelist">

<dt>dk_sign:*`dk_sign1`* stats</dt>

<dd>

Display statistics relating to domain key signing.

</dd>

<dt>dk_sign:*`dk_sign1`* flush keycache</dt>

<dd>

This command flushes all entries from the keycache. If you alter the private key run this command after doing so.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](modules.dnsbuf)  | [Up](modules) |  [Next](modules.ds_core) |
| 71.27. dnsbuf – Dynamically Set the DNS UDP Buffer Size  | [Table of Contents](index) |  71.29. ds_core - Datasource Query Core |

