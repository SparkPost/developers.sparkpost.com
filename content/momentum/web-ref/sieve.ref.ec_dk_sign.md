|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_dk_responsible_domain)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_dkim_domains) |

<a name="sieve.ref.ec_dk_sign"></a>
## Name

ec_dk_sign — Sign a message with the DomainKeys protocol

## Synopsis

`ec_dk_sign` [ *`parameters_hash`* ]

<a name="idp29365168"></a>
## Description

`ec_dk_sign` signs the current message with a DomainKey signature. By default it uses the configured parameters on the DomainKey module configuration stanza. If desired, a hash table of parameter overrides may be passed as the only argument to the Sieve extension. It may contain the following parameters:

<dl className="variablelist">

<dt>base_domain</dt>

<dd>

Override the default signing domain.

</dd>

<dt>selector</dt>

<dd>

Override the default signing selector.

</dd>

<dt>keyfile</dt>

<dd>

Override the default signing key file, which may be parameterized as defined in the [Section 14.29, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys "14.29. domainkeys – Yahoo! DomainKeys") configuration documentation.

</dd>

<dt>keybuf</dt>

<dd>

Override the default signing key. This hash entry must contain the PEM encoded private key to use for signing the messages. This must be a contiguous string, with no line breaks and no white space, without the --BEGIN and --END tags that are found in the key file itself. The format is similar to the format used to store the public key in the DomainKeys DNS records.

</dd>

</dl>

The `core_final_validation` hook is triggered from the SWAPOUT pool as the last step before journaling the message to spool. Because you are guaranteed that nothing will change the message contents, it is best to execute `ec_dk_sign` in the `core_final_validation` hook. This is important because message modifications that occur after a signature is computed will render the signature invalid. This hook point must run synchronously; doing otherwise will lead to undefined behavior.

### Warning

While it is possible to use this function in the data phase, doing so will have a massive impact on performance, as the system would be occupied with signing instead of processing mail, and the throughput would suffer tremendously. However, there can only be one Sieve script bound to the core_final_validation hook. If you want to sign both DKIM and DomainKeys, put your code into the same file.

Set the sieve `async` option to `false` when using the core_final_validation_hook otherwise you may experience spool corruption.

Sieve scripts implementing the core_final_validation hook should not modify the message since it may have already been written to the spool.

Documentation for how to execute a Sieve script at a hook point can be found on the [Section 14.64, “sieve – The Sieve Module”](modules.sieve "14.64. sieve – The Sieve Module") documentation page.

### Note

This feature requires the DomainKeys module. See [Section 14.29, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys "14.29. domainkeys – Yahoo! DomainKeys") for more information.

<a name="example.ec_dk_sign"></a>

**Example 16.35. ec_dk_sign example**

```
$params = hash_create;
hash_set $params "selector" "myselector";
hash_set $params "base_domain" "my.signing.domain.com";
ec_dk_sign $params;
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_dk_responsible_domain)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_dkim_domains) |
| ec_dk_responsible_domain  | [Table of Contents](index) |  ec_dkim_domains |
