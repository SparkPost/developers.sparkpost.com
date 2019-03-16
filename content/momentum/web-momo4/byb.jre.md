| [Prev](byb.set_hostnames)  | Chapter 6. Before You Begin |  [Next](byb.root_and_vertica_dba) |

## 6.9. Java Runtime Environment (JRE)

<a class="indexterm" name="idp481328"></a>

You must have an official Oracle Java 7 release installed, as **Java 8 is not supported for use with Cassandra and Momentum** . Run the following command to ensure that the version of Java installed on each Platform node is compatible with Cassandra.

`java -version`

Your results should look something like this:

```
java version "1.7.0_75"
Java(TM) SE Runtime Environment (build 1.7.0_75-b13)
Java HotSpot(TM) 64-Bit Server VM (build 24.75-b04, mixed mode)
```

### Warning

OpenJDK is not supported, and neither are variants such as IBM Java.

If you use OpenJDK, you will receive the following installation error:

```
Unable to install packages due to:
No package matched to upgrade: msys-cassandra
Error: msys-cassandra conflicts with 
1:java-1.7.0-openjdk-1.7.0.51-2.4.4.1.el6_5.x86_64
```

If the OpenJDK package is already installed, run **`rpm -qa | grep openjdk`**                     to determine the OpenJDK package names. Then execute **yum remove *`package_name`***                         for each package.

If you need to install Java 7, follow the steps below.

1.  Download and install [Sun Java JRE 7](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html#jre-7u80-oth-JPR) for 64 bit Linux.

    ### Note

    Oracle JRE 1.7 is approaching its end-of-life status. If the above link does not work, or if you cannot find an appropriate version to download, then run the following command to download Java 1.7.0_51\. This version, although a bit old, is still usable.

    `wget http://javadl.sun.com/webapps/download/AutoDL?BundleId=83375 -O jdk-7u51-linux-x64.rpm`
2.  Run **sudo rpm -Uvh *`jre-7u51-linux-x64`*.rpm**                                     to install the RPM.

3.  Ensure that Cassandra can locate the installed version of Java. Be sure to adjust the pathnames based upon the version of Java you are using and where you have installed it.

    alternatives --install *`/usr/bin/java java /usr/java/jre1.7.0_51/bin/java 2`*                                       
    alternatives --config java
    ### Note

    Simply setting the PATH environment variable will not work.

    You should see an interface similar to the one below.

    ```
    There are 3 programs which provide 'java'.

      Selection    Command
    -----------------------------------------------
    *  1           /opt/jdk1.7.0_60/bin/java
     + 2           /opt/jdk1.7.0_72/bin/java
       3           /usr/java/jrel.7.0_51/bin/java

    Enter to keep the current selection[+], or type selection number:
    ```

4.  Select the version of Java you just installed (in our example, this is option #3).

    ### Note

    If your results display a single option, then select that option.

For more information, contact Message Systems Professional Services.

| [Prev](byb.set_hostnames)  | [Up](before_you_begin) |  [Next](byb.root_and_vertica_dba) |
| 6.8. Setting Hostnames  | [Table of Contents](index) |  6.10. Creating `root` and `vertica_dba` Accounts |

