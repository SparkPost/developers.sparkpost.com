|     |     |     |
| --- | --- | --- |
| [Prev](roles_behaviors)  | Part I. Introduction to Momentum |  [Next](licensed_features.adaptive.delivery) |
## Chapter 4. Licensed Features
**Table of Contents**

* [4.1\. Message Generation](licensed_features#licensed_features.message.generation)
* [4.2\. Adaptive Delivery](licensed_features.adaptive.delivery)
* [4.3\. Supercharger](licensed_features.supercharger)

## 4.1. Message Generation
Message Generation enables you to inject your recipient list, template, and message content separately, using the HTTP protocol. It takes these components of a transmission and generates personalized messages for each recipient. The generation and transmission of messages is triggered by the REST API interface.
You must choose to enable Message Generation during installation. It can be configured to run on a stand-alone or cluster installation. In a cluster configuration, it is not necessary for all nodes to load the message generation module, nor is it necessary for those that do load that module to participate in message generation. For example, you may want to have a node (such as the Manager) solely for establishing a [quorum](glossary#gloss.quorum "Quorum"), but not for generating messages.

|     |     |     |
| --- | --- | --- |
| [Prev](roles_behaviors)  | [Up](p.intro) |  [Next](licensed_features.adaptive.delivery) |
| Chapter 3. Roles and Behaviors  | [Table of Contents](index) |  4.2. Adaptive Delivery |
