|     |     |     |
| --- | --- | --- |
| [Prev](web-ui)  | Part VIII. Reporting and Engagement Tracking |  [Next](web-ui.reports) |

## Chapter 56. Using the UI for Reporting

**Introduction**

"How do I know what happened to the email?" This question is just as important as "How do I send email?" To run a successful messaging campaign, you need to know that your messages were successfully injected into the MTA and accepted by the recipient's ISP. If they were not, you need to determine what happened to your messages and retrieve data to analyze and correct these issues. Momentum provides copious amounts of data to answer these questions.

Reporting data is available in a web-based User Interface (UI) or using the REST API. The UI provides a flexible, easy-to-use interface to evaluate your message deliverability and campaign performance. Using the UI, you can select metrics, filter the metric data, and view detailed reports based on your specific needs. Its drill-down capabilities enable you to focus your reporting on the message events and data that are most important to you.

**Reporting Data Using the UI**

This section provides instructions to view delivery data in the UI. Later tutorials will discuss tracking engagement data and retrieving reporting data using the REST API.

### Note

For this tutorial, you will need a web browser to access the UI. The UI supports Firefox and Internet Explorer, version 9 and 10. All browsers must have cookies and JavaScript enabled.

Follow these steps to view reports in the UI:

Open the UI by pointing your web browser at the appropriate IP address and log in using your credentials. If you do not know the IP address, contact your system administrator. Your UI opens in the Summary section under Reports [Figure 56.1, “User Interface”](reporting_ui#figure_summary "Figure 56.1. User Interface").

<a name="figure_summary"></a>

**Figure 56.1. User Interface**

![User Interface](images/summary_report.png)

In the METRICS area of the Summary section, the UI reports how many of your messages were successfully injected into Momentum (Targeted) and accepted by the ISP (Accepted). This data is displayed based on time in the corresponding graph.

The Reports tab consists of six sections. Use the drop-down list shown in [Figure 56.2, “Navigating the UI”](reporting_ui#figure_navigation "Figure 56.2. Navigating the UI") to navigate the UI.

<a name="figure_navigation"></a>

**Figure 56.2. Navigating the UI**

![Navigating the UI](images/navigation_menu.png)

To create your custom reports, begin in theSummary section by selecting your metrics and filters. Next, view the summary report provided in the Summary section and the detailed reports provided in the Bounces, Rejections, Accepted, and Delayed sections to evaluate your deliverability and performance. The Engagement section includes a specialized report enabling you to drill down to the level of a link within your campaign.

See [Chapter 57, *Reports and Engagement Tracking in the UI*                                  ](web-ui.reports "Chapter 57. Reports and Engagement Tracking in the UI") for detailed information about the six reports including screen captures, descriptions of the various metrics, and instructions to create custom reports.

Congratulations! You have successfully logged into Momentum's UI. You can create custom reports in the UI by selecting the metrics and filters for your specific reporting needs. Become familiar with the UI and explore its capabilities.

|     |     |     |
| --- | --- | --- |
| [Prev](web-ui)  | [Up](p.analytics) |  [Next](web-ui.reports) |
| Chapter 55. Getting Started with the Web-based User Interface  | [Table of Contents](index) |  Chapter 57. Reports and Engagement Tracking in the UI |

