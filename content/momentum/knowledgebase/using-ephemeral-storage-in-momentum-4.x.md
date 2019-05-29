# Using Ephemeral Storage in Momentum 4.x



### Introduction
Ephemeral storage is a special block device that is included with certain types of AWS instances.  Ephemeral storage is directly attached to the host of your AWS instances, run on and provide high performance storage to your instance.  As the name suggest, data stored on ephemeral storage is lost when your instances is restarted.  The amount of ephemeral storage, is dependent on the instance type.  Moreover, it is important to note that Ephemeral storage must be enabled when you provision your AWS instance for the first time.


If you are installing Momentum in AWS, do not use ephemeral disks in your production environment as this can potentially cause a loss of messages.

### Ephemeral Disk: Pros and Cons

**Pros:**

“Highly available” AWS claims to provide redundancy and a lower failure rate than physical disks.   Additional pros that support the use of Ephemeral Disk include the fact that they are:

Free (included in cost of EC2 instance)
Stable, predictable performance on par with a standard physical hard disk
Provides abundant storage (up to 1.7TB on a c1.xlarge)

**Cons:**

If the instance shuts down, all data is lost
Has a maximum throughput of 1Gbit/s
