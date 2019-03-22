| [Prev](sieve.differences)  | Chapter 8. Sieve++ |  [Next](sieve.enhancements) |

## 8.2. Sieve's Basic Syntax

A Sieve script consists of an optional `require` block followed by a series of tests and commands. Sieve scripts are stored using UTF-8 encoding, and textual comparisons are performed in UTF-8 where possible.

### Note

`require` is a portability concession in the Sieve specification that allows scripts to be used on different vendors implementation of Sieve safely/correctly. There is a slight performance hit at compile time to use `require`, but is inconsequential as scripts are cached.

### 8.2.1. Arguments

Sieve supports three basic argument types: strings, numbers and string lists.

Strings may take one of two forms; the first is data enclosed in double quotes, the second is a multi-line escape, similar in concept to "here documents" found in other languages. With quoted strings, a backslash character quotes the character that follows (this is **not** the same as traditional C-style escaping!) and newlines can be embedded as is.

Multi-line strings are introduced using the `text:` tag; all tokens following that marker are added to the string until a line consisting of a single ``.`' is found. You should "dot-stuff" lines to quote a literal ‘`.`’. This is similar to the DATA phase of SMTP.

Numbers are positive integers (greater than or equal to zero) followed by an optional magnitude operator such as K for kilobyte and M for megabyte. String lists consist of a comma separated list of strings enclosed in square brackets.

<a name="example.sieve.string"></a>

**Example 8.1. Sieve string syntax**

```
"this is a string";

# sieve renders \n as a literal n character, NOT a newline
"this is a single line with an \n in the middle";

# here's how to break the line
"this text runs on
two lines";

# or using multi-line syntax
text:
this text runs on
two lines
.
```

<a name="example.sieve.discard"></a>

**Example 8.2. discarding mail based on message size**

```
require "discard"<a name="sieve.ex.discard"></a>![1](images/callouts/1.png);

if size :under 1M<a name="sieve.ex.size"></a>![2](images/callouts/2.png) {
  keep;
} else {
  discard;
}
if header :contains ["from", "reply-to"]<a name="sieve.ex.list"></a>![3](images/callouts/3.png) "bad.guy@example.com" {
  discard;
}
```

|

[![1](images/callouts/1.png)](#sieve.ex.discard)

 | `"discard"`

This is the string `discard`.

 |
|

[![2](images/callouts/2.png)](#sieve.ex.size)

 | `1M`

This is the number `1048576`.

 |
|

[![3](images/callouts/3.png)](#sieve.ex.list)

 | `["from", "reply-to"]`

This is a string list consisting of `from` and `reply-to`.

 |

### 8.2.2. Actions

The baseline standard Sieve actions are quite limited in scope compared to the range of actions that one might want to take during each phase of an SMTP transaction. All standard Sieve actions are implemented with the exception of "fileinto", and several other Momentum-specific actions are implemented as Sieve extensions.

<dl className="variablelist">

<dt>keep</dt>

<dd>

The message should be kept and the Sieve script should be terminated. If used in a non-message phase of the SMTP transaction, the default action of returning an "OK" SMTP result will be taken.

</dd>

<dt>redirect</dt>

<dd>

The `rcptto` address is replaced with the address supplied and the message is redirected. The message's headers and body is not changed. No further Sieve actions or scripts will be performed on the message.

</dd>

<dt>discard</dt>

<dd>

The message will be silently discarded. This mechanism is only available if a message is present (during the data, spool and each_rcpt phases).

</dd>

<dt>reject</dt>

<dd>

The message will be rejected "inline" by providing a permanent failure message (550) back to the sending MTA. If it is not possible to reject the message inline then a mail delivery notification (MDN) will be sent describing the failure. For example, if multiple envelope recipients have been specified in the SMTP transaction and the Sieve script is executing in the each_rcpt phase, it is impossible to provide a failure code to the remote MTA as that code may conflict with the decision made by the Sieve script when executed subsequently on the next recipient of the same message.

</dd>

<dt>stop</dt>

<dd>

Stop processing the current script. No further tests nor actions will be run. If the message status has been set to anything other than a 250 response code, no further Sieve scripts will be run for that message. Otherwise, execution will continue with the next script in the phase, or with the next phase.

</dd>

</dl>

### 8.2.3. Comparisons

As with any language that is used for decision making, you must be able to provide an expression that yields a truth value. Sieve provides several such tests:

**8.2.3.1. :over**

Used to compare message sizes. This will yield true if it is larger than the argument.

**8.2.3.2. :under**

Used to compare message sizes. This will yield true if it is smaller than the argument.

<a name="example.sieve.discard.size"></a>

**Example 8.3. discarding messages based on size**

This example discards messages larger than 1 megabyte or smaller than 100 bytes.

```
if size :over 1M {
  discard;
} elsif size :under 100 {
  discard;
}
```

**8.2.3.3. :is**

Provides absolute matching semantics. The two values being compared must be the same to yield true.

<a name="example.sieve.validation"></a>

**Example 8.4. making decisions based on the validation context**

```
# This rejects the transaction if either the context variable "connect-blacklist"
# or "mailfrom-blacklist" has the exact value "match"
if vctx :is ["connect-blacklist", "mailfrom-blacklist"] "match" {
  ec_action 550 "5.7.1 you're blacklisted here.";
  stop;
}
```

**8.2.3.4. :contains**

Provides substring matching. This will return true if the specified string or a member of the string list is found within the subject string(s). All non-null strings `contains` the empty string `""`. This is a feature of the language that may be used to check for the existence of a key or header, depending on the test.

<a name="example.sieve.substring"></a>

**Example 8.5. substring matching**

```
# This checks if the can_relay context key is set (exists)
if vctx :contains "can_relay" "" {
  keep;
  stop;
}
# This checks to see if the subject of the email contains the word "test"
if header :contains "Subject" "test" {
  ec_log "Test message seen";
}
```

**8.2.3.5. :matches**

Provides glob-style expression matching. The pattern for matching can specify a wild card match using the "*" and "?" characters, matching zero or more characters, and a single character, respectively. In order to match an actual "*" or "?", they must be escaped as "\\?" and "\\*", respectively.

<a name="example.sieve.glob"></a>

**Example 8.6. glob-style string matching**

```
# Match subjects like "Hey you! Make  .. Money... Fast" and
# "University Dipl0mas 4sale" and make them wait 2 minutes, transient fail
# them and snip the connection.
if header :matches "subject" ["*make*money*fast*", "*university*dipl*mas*"] {
  ec_tarpit 120 "my tag";
  ec_action 451 "perhaps some other time";
  ec_disconnect;
}
```

**8.2.3.6. :regex**

This comparison provides the much more powerful semantics of Perl-compatible regular expressions (PCREs). PCREs are extremely flexible and powerful and describing them is beyond the scope of this manual. Extensive documentation can be found in the Perl distribution that ships with Momentum by typing . **`man -M /opt/msys/3rdParty/man pcrepattern`**                                       .

<a name="example.sieve.regex"></a>

**Example 8.7. perl regex string matching**

```
# if a message's subject contains 2 or 4 digits dash 2 digits dash 2 digits bordered
# by word boundaries, then log that it has a date in it.
if header :regex "subject" "\\b(\\d{4}|\\d{2})-\\d{2}-\\d{2}\\b" {
  ec_log "has date";
}
```

### Note

In a Sieve string, `\\` represents a single `\` character.

### 8.2.4. Comparators

Unless specified otherwise, Sieve will always compare strings as strings in a case sensitive manner. Often, you will want to match case insensitively or based on the numeric values. You can specify an alternate comparator for `:is`, `:contains`, `:matches` and `:regex` comparisons by using the `:comparator` tag.

The following comparators are available:

<dl className="variablelist">

<dt>"i;octet"</dt>

<dd>

The default comparator; the strings are compared octet by octet for equality. This is a case-sensitive comparison.

</dd>

<dt>"i;ascii-casemap"</dt>

<dd>

Strings are compared octet-by-octet for equality, mapping uppercase characters to lowercase. This is a case-*in*sensitive comparison.

</dd>

<dt>"i;ascii-numeric"</dt>

<dd>

The numeric value of the strings are used for the comparison. If the string contains numbers and letters, or a series of whitespace separated numbers, only the first number portion is taken.

</dd>

</dl>

```
# We keep getting bad messages with the phrase "sPeCIaL DEal" in the subject.
# But would like to receive mails with subjects containing "Special Deal".
if header :contains :comparator "i;octet" "Subject" "sPeCIaL DEal" {
  discard;
  stop;
}
```

### 8.2.5. Tests

Sieve's standard tests are very specific to email messages and their parts. Tests can be performed on the envelope sender, the addresses contained in headers, arbitrary content contained in headers, the existence of headers, arbitrary content in the body of the message and finally the size of the message. Sieve's tests are the beginning of an expression that will yield a truth value and are found exclusively within an `if` conditional statement.

In addition to the tests specified in the Sieve RFC, Momentum implements a plethora of other convenient tests and actions that can be performed on a message, the SMTP session and the overall context of the transaction.

**8.2.5.1. Standard Sieve Tests****8.2.5.1.1. true**`if true { ... }`

Takes no arguments and evaluates to true.

**8.2.5.1.2. false**`if false { ... }`

Takes no arguments and evaluates to false.

**8.2.5.1.3. not**`if not <test> { ... }`

Inverts the result of the given test; true becomes false and false becomes true.

**8.2.5.1.4. isset**`if isset (<stringlist> <number>|<hash> <string>) { ... }`

The `isset` test will check whether an element of a stringlist or hash exists. The arguments are a stringlist and a number, or a hash and a string.

<a name="example.sieve.isset"></a>

**Example 8.8. isset example**

```
$a = ["one", "two"];
$b = ["only_one"];

if isset $a 1 {
   ec_log "element 1 exists (correct)";
}

if not isset $b 1 {
   ec_log "element 1 of b does not exist (correct!)";
}
$c = hash_create;
hash_set $c "thing" "value";

if isset $c "thing" {
   ec_log "element \"thing\" of c exists (correct)";
}

if not isset $c "nothing" {
   ec_log "element \"nothing\" of c does not exist (correct!)";
}
```

**8.2.5.1.5. size**`if size :over <number> { ... }``if size :under <number> { ... }`

The size will be evaluated with either the :over or :under comparison and the result will be based on the size of the entire message including headers, prior to any character conversion. NOTE: also included in the size is an extra byte for every line in the email message that begins with a '.'. This extra byte represents the additional '.' character introduced to preserve SMTP transparency described in RFC 2821 (so-called dot "stuffing").

<a name="example.sieve.size"></a>

**Example 8.9. size example**

```
if size :over 10M {
  ...
} elsif size :under 1K {
  ...
}
```

**8.2.5.1.6. exists**`if exists ( string | stringlist ) { ... }`

The exists test will check for the existence of a header in the email message, returning true if it exists and false otherwise.

<a name="example.sieve.exists"></a>

**Example 8.10. exists example**

```
# Reject messages without a Date header
if not exists "Date" {
  reject;
}
```

**8.2.5.1.7. envelope**`if envelope <address part> <comparison> ( "from" | "to" ) ( keylist: string | stringlist ) { ... }`

The envelope test allows you to investigate the email addresses provided as the envelope sender (the MAIL FROM command) and the envelope recipient (the RCPT TO command) and compare it to the keylist.

*`address part`*       is one of `:all`, `:localpart` (left of the @), or `:domain` (right of the @). The `subaddress` Sieve extension provides `:user` and `:detail` selectors to break apart the `:localpart` of the email address. In other words, Sieve sees an email address in the following format: `user+detail@domain` or `localpart@domain`.

In many Sieve implementations this test is not always 100% accurate due to the message already having been accepted and subjected to alias expansion. In Momentum, you have direct access to the MAIL FROM: and RCPT TO: commands issued in the SMTP session and can be certain that these tests will be correct.

<a name="example.sieve.envelope"></a>

**Example 8.11. envelope example**

```
if envelope :localpart :is "to" ["postmaster", "abuse"] {
  keep;
}
if envelope :domain :is "from" "bad-guy.com" {
  ec_disconnect;
  ec_action 550 "5.7.1 stopping calling here.";
}
```

**8.2.5.1.8. address**
```
if address <address part> <comparison> ( headers: string | stringlist )
 ( keylist: string | stringlist ) { ... }
```

The address test will analyze addresses in the specified headers compared to the keylist.

*`address part`*       is one of `:all`, `:localpart`, `:domain`, `:user`, `:detail` as mentioned in the `envelope` test above.

<a name="example.sieve.address"></a>

**Example 8.12. address example**

```
# Reject mail with support@a-common-bank.com (and .net and .org) in the
# "From", "Reply-To", or "Sender" headers
if address :all :regex ["From", "Reply-To", "Sender"]
                       "^support@a-common-bank.(com|org|net)$" {
  ec_log "Phishing attempt";
  discard;
}
```

**8.2.5.1.9. header**`if header <comparison> ( headers: string | stringlist) ( keylist: string | stringlist ) { ... }`

The header test will examine all headers matching the headers specified and compare them to the keylist. The test will return true at the first successful match.

<a name="example.sieve.header"></a>

**Example 8.13. header example**

```
# 550 mail with X-Spam-Status: Yes
if header :contains "X-Spam-Status" "yes" {
  ec_action 550 "no spam thank you"
  stop;
}
```

**8.2.5.1.10. is_valid_ip**`if is_valid_ip (string | stringlist) { ... }`

`is_valid_ip` returns true if a given address is a valid IP address, false otherwise. It also accepts a list of addresses and returns true only when all of them are valid IP addresses.

**8.2.5.1.11. is_rfc821_ip**`if is_rfc821_ip (string | stringlist) { ... }`

`is_rfc821_ip` returns true if a given address is a valid address judged by `is_valid_ip` or such an address in `[]`. It also accepts a list of addresses and returns true only when each of them is valid.

| [Prev](sieve.differences)  | [Up](sieve) |  [Next](sieve.enhancements) |
| 8.1. The differences between Sieve and Sieve++  | [Table of Contents](index) |  8.3. RFC Standard Sieve Enhancements |
