| [Prev](snmp-mib.pergroup)  | Appendix B. MIB Files |  [Next](smtp-response-codes) |

## B.3. The `OMNITI-SNMP-MIB.txt` file

```
OMNITI-SNMP-MIB DEFINITIONS ::= BEGIN

  IMPORTS
  OBJECT-TYPE, NOTIFICATION-TYPE, MODULE-IDENTITY,
  Integer32, Opaque, enterprises, Counter32
  FROM SNMPv2-SMI
  mtaStoredMessages FROM MTA-MIB

  TEXTUAL-CONVENTION, DisplayString, TruthValue
  FROM SNMPv2-TC;

  omniti MODULE-IDENTITY
  LAST-UPDATED "200601090000Z"
  ORGANIZATION "Omniti Computer Consulting"
  CONTACT-INFO
  "email:    ec-support@omniti.com
  "
  DESCRIPTION  "Omniti Enterprise Mib
  "
  ::= { enterprises 19552 }

  ecelerity        OBJECT IDENTIFIER ::= { omniti    1 }
  productInfo      OBJECT IDENTIFIER ::= { ecelerity 1 }
  perDomainMetrics OBJECT IDENTIFIER ::= { ecelerity 2 }
  perGroupMetrics  OBJECT IDENTIFIER ::= { ecelerity 3 }
  ecelerityTraps   OBJECT IDENTIFIER ::= { ecelerity 4 }
  unlinkStats      OBJECT IDENTIFIER ::= { ecelerity 5 }
  threadsStats     OBJECT IDENTIFIER ::= { ecelerity 6 }
  message          OBJECT IDENTIFIER ::= { unlinkStats 3 }
  header           OBJECT IDENTIFIER ::= { unlinkStats 4 }
  body             OBJECT IDENTIFIER ::= { unlinkStats 5 }
  largeMessage     OBJECT IDENTIFIER ::= { unlinkStats 6 }
  overlay          OBJECT IDENTIFIER ::= { unlinkStats 7 }

  productName OBJECT-TYPE
  SYNTAX      DisplayString
  MAX-ACCESS  read-only
  STATUS      current
  DESCRIPTION
  "Product Name"
  ::= { productInfo 1 }

  productVersion OBJECT-TYPE
  SYNTAX      DisplayString
  MAX-ACCESS  read-only
  STATUS      current
  DESCRIPTION
  "Product Version"
  ::= { productInfo 2 }

  productBuildDate OBJECT-TYPE
  SYNTAX      DisplayString
  MAX-ACCESS  read-only
  STATUS      current
  DESCRIPTION
  "Product BuildDate"
  ::= { productInfo 3 }

  activeQueueSize OBJECT-TYPE
  SYNTAX SEQUENCE OF Counter32
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "The table holding group current active queue size."
  ::= {perGroupMetrics 1}

  delayQueueSize OBJECT-TYPE
  SYNTAX SEQUENCE OF Counter32
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "The table holding group current delay queue size."
  ::= {perGroupMetrics 2}

  failedMessageCt OBJECT-TYPE
  SYNTAX SEQUENCE OF Counter32
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "The table holding group current failed message count."
  ::= {perGroupMetrics 3}

  groupName OBJECT-TYPE
  SYNTAX SEQUENCE OF DisplayString
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "The table holding group names."
  ::= {perGroupMetrics 4}

  ecelerityStart NOTIFICATION-TYPE
  STATUS current
  DESCRIPTION
  "Ecelerity Startup"
  ::= { ecelerityTraps 1 }

  ecelerityShutdown NOTIFICATION-TYPE
  STATUS current
  DESCRIPTION
  "Ecelerity Shutdown"
  ::= { ecelerityTraps 2 }

  mailQueueWarning NOTIFICATION-TYPE
  STATUS current
  OBJECTS {mtaStoredMessages.1}
  DESCRIPTION
  "Total Messages Queued Has Reached or Exceed Specified Threshold"
  ::= { ecelerityTraps 3 }

  activeQueueWarning NOTIFICATION-TYPE
  STATUS current
  OBJECTS {activeQueueSize.1}
  DESCRIPTION
  "Total Active Messages Has Reached or Exceed Specified Threshold"
  ::= { ecelerityTraps 4 }

  delayedQueueWarning NOTIFICATION-TYPE
  STATUS current
  OBJECTS {delayQueueSize.1}
  DESCRIPTION
  "Total Delayed Messages Has Reached or Exceed Specified Threshold"
  ::= { ecelerityTraps 5 }

  failedMessageCtWarning NOTIFICATION-TYPE
  STATUS current
  OBJECTS {failedMessageCt.1}
  DESCRIPTION
  "Total Failed Messages Has Reached or Exceed Specified Threshold"
  ::= { ecelerityTraps 6 }

  unlinkBacklog OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "The unlink backlog."
  ::= {unlinkStats 1}

  unlinkBatchBacklog OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "The unlink batch backlog."
  ::= {unlinkStats 2}

  unlinkMessageSubmissions OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink message submissions"
  ::= {message 1}

  unlinkMessageAttempts OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink message attempts"
  ::= {message 2}

  unlinkMessageFailures OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink message failures"
  ::= {message 3}

  unlinkHeaderSubmissions OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink header submissions"
  ::= {header 1}

  unlinkHeaderAttempts OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink header attempts"
  ::= {header 2}

  unlinkHeaderFailures OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink header failures"
  ::= {header 3}

  unlinkBodySubmissions OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink body submissions"
  ::= {body 1}

  unlinkBodyAttempts OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink body attempts"
  ::= {body 2}

  unlinkBodyFailures OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink body failures"
  ::= {body 3}

  unlinkLargeMessageSubmissions OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink largemessage submissions"
  ::= {largeMessage 1}

  unlinkLargeMessageAttempts OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink largemessage attempts"
  ::= {largeMessage 2}

  unlinkLargeMessageFailures OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink largemessage failures"
  ::= {largeMessage 3}

  unlinkOverlaySubmissions OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink overlay submissions"
  ::= {overlay 1}

  unlinkOverlayAttempts OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink overlay attempts"
  ::= {overlay 2}

  unlinkOverlayFailures OBJECT-TYPE
  SYNTAX INTEGER
  MAX-ACCESS read-only
  STATUS current
  DESCRIPTION
  "unlink overlay failures"
  ::= {overlay 3}

  END
```

| [Prev](snmp-mib.pergroup)  | [Up](snmp-mib) |  [Next](smtp-response-codes) |
| B.2. Per-group (binding) Metrics, 1.3.6.1.4.1.19552.1.3  | [Table of Contents](index) |  Appendix C. SMTP Response Codes |

