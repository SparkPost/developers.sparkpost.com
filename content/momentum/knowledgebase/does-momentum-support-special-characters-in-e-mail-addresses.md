# Does Momentum Support Special Characters in E-mail Addresses?

## Introduction
In the context of electronic mail, messages are viewed as having an envelope and contents.  The envelope contains whatever information is needed to accomplish transmission and delivery.  (See [[RFC2821](http://tools.ietf.org/html/rfc2821)] for a discussion of the envelope.)  The contents comprise the object to be delivered to the recipient.  This standard applies only to the format and some of the semantics of message contents.  It contains no specification of the information in the envelope.
 
## Segments of an E-mail Address
According to [RFC2822](http://tools.ietf.org/html/rfc2822), the local portion of an email address (i.e. the part before the @ symbol), can contain certain non-alphanumeric characters including: ``!, #, $, %, &, ', *, +,-,/,=,?,^,_,`,{,|, } and ~``.

For example, you could have an e-mail address such as `fred/john%!2@domain.com`. These characters are extremely rare in e-mail addresses; many e-mail providers don't even allow them. Momentum, though, allows these characters in e-mail addresses and should send such an e-mails without delay.