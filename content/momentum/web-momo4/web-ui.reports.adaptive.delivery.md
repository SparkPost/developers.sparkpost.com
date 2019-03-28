|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.reports.viewing.reports)  | Chapter 57. Reports and Engagement Tracking in the UI |  [Next](web-ui.reports.evaluating.campaign.performance) |

## 57.3. Adaptive Delivery Report

Adaptive Delivery® auto-tunes your outbound email delivery parameters and traffic shaping in real-time to avoid blocks, to safeguard your reputation, and to optimize delivery. Adaptive delivery events occur when an adaptive rule is triggered or as a result of automatic performance tuning. For details about Momentum's Adaptive Delivery® feature, see [Adaptive Delivery User Guide](https://support.messagesystems.com/docs/web-ad/index). The **`Adaptive Delivery`** report in the UI enables you to view details about adaptive delivery events when they occur and to relate these events to deliverability metrics that may be impacted by them.

### Note

Navigating to the **`Adaptive Delivery`** report removes all filters except time period, binding, and domain.

[Figure 57.16, “Adaptive Delivery Report”](web-ui.reports.adaptive.delivery#figure_adaptive_report "Figure 57.16. Adaptive Delivery Report") shows an example report.

<a name="figure_adaptive_report"></a>

**Figure 57.16. Adaptive Delivery Report**

![Adaptive Delivery Report](https://support.messagesystems.com/docs/web-momo4/images/adaptive_report.png)

The following are the metrics displayed in the upper area of this report:

*   Suspensions - Number of suspensions on outgoing messages for a given domain and binding

*   Throttles - Number of times Momentum limited the rate of outgoing messages

*   Reduced Connections - Number of connections Momentum reduced in response to an adaptive rule trigger

*   Reduced Deliveries - Number of deliveries Momentum reduced in response to an adaptive rule trigger

### 57.3.1. Time Period

The **`Adaptive Delivery`** report provides access to the most recent week's worth of data, which is a shorter time period than provided by the other reports. [Figure 57.17, “Time Period Drop-down List”](web-ui.reports.adaptive.delivery#figure_adaptive_time "Figure 57.17. Time Period Drop-down List") shows the pre-set time periods available in this report. By default, the UI displays data for the `Last Hour` pre-set.

### Note

If you need to capture adaptive delivery data over time ranges longer than one week, create a webhook for Adaptive Delivery events. For information about webhooks, see [Chapter 60, *Managing Your Webhooks in the UI*](web-ui.webhooks "Chapter 60. Managing Your Webhooks in the UI")

<a name="figure_adaptive_time"></a>

**Figure 57.17. Time Period Drop-down List**

![Time Period Drop-down List](https://support.messagesystems.com/docs/web-momo4/images/adaptive_time.png)

For information about selecting the time period filter, see [Section 57.1.3.1, “Time Period”](web-ui.reports#web-ui.reports.select.time "57.1.3.1. Time Period").

### 57.3.2. Analyzing Adaptive Delivery Events

The graph in the **`Adaptive Delivery`** report displays the effective throttles and suspensions along with relative deliverability metrics, enabling you to see how the individual adaptive event effects the message activity. The graph uses a different color for each metric with the color corresponding to the legend above the graph. The precision of the graph changes based on the time period selected. In [Figure 57.18, “Adaptive Delivery Graph”](web-ui.reports.adaptive.delivery#figure_suspension_detail "Figure 57.18. Adaptive Delivery Graph"), the time period is `Last Hour`. Note that the units on the x-axis are by minutes.

To view the values of the deliverability metrics and effective throttles at a specific time, hover over the line graph. The values are displayed in the legend above the graph. This feature enables you to see the relationship of the selected metrics as a function of time.

Suspensions are displayed by Gantt Bars representing the timespan of the event. To view the value of a suspension for a specific domain and binding, hover over the Gantt Bar, as shown in [Figure 57.18, “Adaptive Delivery Graph”](web-ui.reports.adaptive.delivery#figure_suspension_detail "Figure 57.18. Adaptive Delivery Graph").

<a name="figure_suspension_detail"></a>

**Figure 57.18. Adaptive Delivery Graph**

![Adaptive Delivery Graph](https://support.messagesystems.com/docs/web-momo4/images/suspension_detail.png)

To view an expanded graph for a given suspension timespan, click the Gantt Bar for the suspension. [Figure 57.19, “Expanded View”](web-ui.reports.adaptive.delivery#figure_suspension_detailed "Figure 57.19. Expanded View") shows an expanded view of the timespan for the example suspension on hotmail.com/binding-86\. Note that the x-axis of the graph spans the time of the selected suspension, allowing you to view a finer precision of the other metrics during the duration of the suspension.

<a name="figure_suspension_detailed"></a>

**Figure 57.19. Expanded View**

![Expanded View](https://support.messagesystems.com/docs/web-momo4/images/suspension_detailed.png)

### 57.3.3. Viewing Adaptive Delivery Event Details

The table provided in the lower area of the **`Adaptive Report`** lists details related to a specific adaptive delivery event. [Figure 57.20, “Adaptive Delivery Table”](web-ui.reports.adaptive.delivery#figure_adaptive_details "Figure 57.20. Adaptive Delivery Table") shows an example.

<a name="figure_adaptive_details"></a>

**Figure 57.20. Adaptive Delivery Table**

![Adaptive Delivery Table](https://support.messagesystems.com/docs/web-momo4/images/adaptive_details.png)

The following are the columns in the table:

*   Type - Type of adaptive event (throttle or suspension)

*   Trigger - Response from the ISP that triggered the adaptive rule

*   Domain - Parent domain of whatever domain triggered the adaptive event

*   Binding - Binding on which the adaptive event was triggered

*   Start - Start timestamp of the adaptive event

*   Duration - Duration of the adaptive event

You can filter the data further by **`Type`** to narrow the scope of your report. Click the filter icon in the **`Type`** column to select Throttle or Suspension from the drop-down list. Sort the table by any column to show different arrangements. For example, filter by Throttle for **`Type`**, and then sort in descending order by **`Trigger`**. The resulting table displays the reasons why messages were throttled in descending order of trigger code.

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui.reports.viewing.reports)  | [Up](web-ui.reports) |  [Next](web-ui.reports.evaluating.campaign.performance) |
| 57.2. Viewing Your Reports  | [Table of Contents](index) |  57.4. Evaluating Your Campaign Performance |

