| [Prev](lua.ref.msys.base64.encode)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.bounce.classify_smtp_response) |

<a name="lua.ref.msys.bounce.classify"></a>
## Name

msys.bounce.classify — Create a bounce classification for a message

<a name="idp17592288"></a>
## Synopsis

`msys.bounce.classify(msg);`

`msg: userdata, ec_message type`<a name="idp17595232"></a>
## Description

This function takes a mail message (msys.core:_ec_message) and returns a tuple (code, code_string, description, orig_rcpt). `code` is a numerical classification code; `code_string` is the string representation of the code (such as BC_UNDETERMINED, BC_SOFT_TIMEOUT, etc); `description` is the textual description of the code; `orig_rcpt` is the original recipient of the mail. This function should be called only if a mail is an MDN. The bounce_classifier_override module must be configured for this function to produce the correct result.

Enable this function with the statement `require('msys.bounce');`.

<a name="idp17600272"></a>
## See Also

[Section 71.12, “bounce_classifier_override – Override/Augment Bounce Classifications”](modules.bounce_classifier_override "71.12. bounce_classifier_override – Override/Augment Bounce Classifications"), [msys.bounce.classify_smtp_response](lua.ref.msys.bounce.classify_smtp_response "msys.bounce.classify_smtp_response")

| [Prev](lua.ref.msys.base64.encode)  | [Up](lua.function.details) |  [Next](lua.ref.msys.bounce.classify_smtp_response) |
| msys.base64.encode  | [Table of Contents](index) |  msys.bounce.classify_smtp_response |

