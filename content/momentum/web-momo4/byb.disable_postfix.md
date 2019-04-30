|     |     |     |
| --- | --- | --- |
| [Prev](byb.vertica_partition)  | Chapter 6. Before You Begin |  [Next](byb.analytics_reqs) |

## 6.17. Disable Postfix and QPIDD

Disable the Postfix software, which would interfere with Ecelerity's SMTP functionality. Disable qpidd, which can interfere with RabbitMQ. Ignore any errors that appear here.

```
service postfix stop
/sbin/chkconfig postfix off
service qpidd stop
/sbin/chkconfig qpidd off
```

|     |     |     |
| --- | --- | --- |
| [Prev](byb.vertica_partition)  | [Up](before_you_begin) |  [Next](byb.analytics_reqs) |
| 6.16. Separate Vertica Partition  | [Table of Contents](index) |  6.18. Verifying Analytics Node Requirements |

