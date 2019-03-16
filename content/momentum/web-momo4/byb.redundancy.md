| [Prev](byb.os)  | Chapter 6. Before You Begin |  [Next](byb.load_balancing) |

## 6.3. Redundancy

Should any nodes fail, you need a [Quorum](glossary#gloss.quorum "Quorum") within both your Platform and Analytics servers in order for Momentum to continue functioning properly. For Momentum, you have a quorum when more than 50% of nodes are active. What constitutes a quorum has implications for redundancy. For example, you cannot support redundancy with only two Platform and two Analytics nodes. Should any one node go down, you will not have the 51% required for a quorum. So, for high availability, the most efficient cluster sizes will be odd numbers of three or more Platform nodes *and* three or more Analytics nodes.

| [Prev](byb.os)  | [Up](before_you_begin) |  [Next](byb.load_balancing) |
| 6.2. Operating System  | [Table of Contents](index) |  6.4. Load Balancing |

