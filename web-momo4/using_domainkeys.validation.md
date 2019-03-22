| [Prev](using_domainkeys)  | Chapter 22. Using Yahoo! DomainKeys |  [Next](using_dkim) |

## 22.2. DomainKeys Validation

To perform validation on all inbound messages received via SMTP, load the dk_validate module in your configuration. For details, see [Section 71.28, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys "71.28. domainkeys – Yahoo! DomainKeys").

When a message is received, it is inspected to determine the responsible sending party, which is either the "Sender" or the "From" (in that order) from the message headers. If there exists a header called "DomainKey-Signature", the signature is parsed for validity. If valid, the appropriate DNS operations are performed to find the policy and public key for the signer, the message is canonicalized as described in the signature, and the signature is validated.

Subsequent to processing the email, any preexisting "DomainKey-Status" headers are removed from the email and the dk_validate module will prepend a "DomainKey-Status" header to the email with the results of the signature verification process. Valid results are "good," "bad," and "error".

| [Prev](using_domainkeys)  | [Up](using_domainkeys) |  [Next](using_dkim) |
| Chapter 22. Using Yahoo! DomainKeys  | [Table of Contents](index) |  Chapter 23. Using DomainKeys Identified Mail (DKIM) Signatures |

