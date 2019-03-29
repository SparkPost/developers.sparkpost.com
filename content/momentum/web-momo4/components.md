|     |     |     |
| --- | --- | --- |
| [Prev](p.intro)  | Part I. Introduction to Momentum |  [Next](loam) |

## Chapter 1. Components

The principle components that make up Momentum 4 are Platform nodes and Analytics nodes.

*   Platform nodes handle the MTA including injection and message generation, the configuration server, engagement tracking, and engagement proxy server responsibilities. They also host the distributed online transaction processing (OLTP) database and event hose.

*   Analytics nodes host the distributed analytics database and the web-based UI. Event data is loaded into the database via the event hose and is available via the web-based UI, reporting API, and jlogs for integration with external processes or systems. The Analytics nodes are also responsible for the API proxy server, which handles both message and reporting APIs.

<a name="architecture.image"></a>

**Figure 1.1. Momentum 4 Components**

![Momentum 4 Components](/momentum/web-momo4/images/components.png)

|     |     |     |
| --- | --- | --- |
| [Prev](p.intro)  | [Up](p.intro) |  [Next](loam) |
| Part I. Introduction to Momentum  | [Table of Contents](index) |  Chapter 2. Life of A Message |

