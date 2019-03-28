|     |     |     |
| --- | --- | --- |
| [Prev](engagement_tracking_smtp.policy)  | Chapter 41. Tracking Engagement for SMTP |  [Next](smtp_reporting_options) |

## 41.4. Escaping {{ and }} in SMTP Message Body

Since Momentum inserts open-tracked and click-tracked URLs using its substitution engine, any existing `{{` or `}}` that exist in the SMTP message must be escaped. Before injection, `{{` must be replaced with `{{opening_double_curly()}}` and `}}` must be replaced with `{{closing_double_curly()}}`.

|     |     |     |
| --- | --- | --- |
| [Prev](engagement_tracking_smtp.policy)  | [Up](engagement_tracking_smtp) |  [Next](smtp_reporting_options) |
| 41.3. Using Policy for Engagement Tracking  | [Table of Contents](index) |  Chapter 42. Reporting Options |

