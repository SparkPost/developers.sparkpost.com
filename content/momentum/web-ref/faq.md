| [Prev](p.appendices)  | Part III. Appendices |  [Next](snmp-mib.php) |

## Frequently Asked Questions

<a name="idp31422272"></a>

<dl>

<dt>A.1\. [I see the message "421 no adequate servers" in my mainlog.ec, what's causing this?](faq#faq.no.adequate.servers)</dt>

<dt>A.2\. [How can I run two or more Momentum instances concurrently?](faq#faq.running.multiple.instances)</dt>

<dt>A.3\. [I see error messages saying "errno=24" (on linux), "nropen too low," or "Could not set nofiles high enough!" in my mainlog.ec. What do they mean and how can I prevent this?](faq#faq.num.open.files)</dt>

<dt>A.4\. [When I say:](faq#faq.sieve.array.after.variable)</dt>

</dl>

| <a name="faq.no.adequate.servers"></a><a name="idp31423264"></a>

**A.1.**

 |

I see the message "`421 no adequate servers`" in my `mainlog.ec`, what's causing this?

 |
|  |

This occurs when Momentum is unable to determine a suitable MX when attempting to deliver mail to a particular domain. There are two probable causes for this situation:

*   DNS resolution is broken.

*   The remote site is employing firewall rules which drop traffic from your IP address.

The cause can be determined via the console:

```
ecelerity> dig problemdomain.com
submitted
ecelerity> domain problemdomain.com
```

If the output indicates that there are no MXs for the domain, then the problem is likely DNS related. Check that your `/etc/resolv.conf` is correct, and that the nameservers it references are in working order.

If the output lists one or more MXs then the cause is likely due to a connectivity problem. You verify this by attempting to manually connect to the remote machine using **telnet &lt;ip> 25** . You can also use the the [swaks](http://www.jetmore.org/john/code/swaks/) tool.

 |
| <a name="faq.running.multiple.instances"></a><a name="idp31433136"></a>

**A.2.**

 |

How can I run two or more Momentum instances concurrently?

 |
|  |

If you want to run two or more Momentum instances concurrently on a single machine, you need to make some adjustments to the various instance-specific configuration options.

This requires that each instance uses its own configuration file. So the first thing you need to do is to get a separate configuration file for your new instance. Let's call it `ecelerity1.conf`. You need to modify or add the following settings in `ecelerity1.conf` (This example is based on linux, changes on other operating systems should be similar):

<dl className="variablelist">

<dt>Listeners</dt>

<dd>

ESMTP, ECSTREAM, Control and other listeners should each be configured to use distinct IP addresses and/or port numbers, as they can't both bind to the same ports on the same IPs.

The Control_Listener used for [ec_console](executable.ec_console "ec_console") connections should have a different Unix domain socket for each instance.

</dd>

<dt>SNMP</dt>

<dd>

SNMP listens on 127.0.0.1:8162 by default, even if you have no SNMP specific configuration in `ecelerity.conf`. You should change the port number used by the new instance:

```
SNMP {
  State = enabled
  Address = 127.0.0.1:8163
  Community = "public"
}
```
</dd>

<dt>SpoolBase</dt>

<dd>

Each Momentum instance must have its own spool directory. The following snippet in your `ecelerity1.conf` will change the spool base directory:

`SpoolBase = /var/spool/ecelerity1`

</dd>

<dt>Pidfile</dt>

<dd>

Since version 2.0, Momentum maintains a pidfile that can be used by other processes to determine if the instance is running; therefore, each instance must have its own pidfile.

`Pidfile = /var/run/ecelerity1.pid`

</dd>

<dt>Masterdb_file</dt>

<dd>

Momentum stores persistent summary and Sieve counter information in the masterdb_file.

`masterdb_file = /var/log/ecelerity1/ecdb`

</dd>

<dt>ec_ctl</dt>

<dd>

If you want to arrange for each Momentum instance to start at system boot time, you might want to copy and modify the [ec_ctl](executable.ec_ctl "ec_ctl") script, so that you have one copy per instance. Let's copy `/opt/msys/ecelerity/bin/ec_ctl` to `/opt/msys/ecelerity/bin/ec_ctl1` and modify the copy. Change the following two lines:

```
CONFFILE=/opt/msys/ecelerity/etc/ecelerity.conf
CONTROL=/tmp/2025
```

to

```
CONFFILE=/opt/msys/ecelerity/etc/ecelerity1.conf
CONTROL=/tmp/2026
```

Make sure the *`CONTROL`* parameter matches what you have configured for your Control_Listener in `ecelerity1.conf`.

</dd>

<dt>Logs</dt>

<dd>

While they are not strictly required to be instance-specific, you will usually want to make sure that you're logging to a separate set of log files for each instance. This is simply a matter of configuring your logging modules appropriately:

```
ec_logger "ec_logger1" {
  mainlog = /var/log/ecelerity1/mainlog.ec
  paniclog = /var/log/ecelerity1/paniclog.ec
  rejectlog = /var/log/ecelerity1/rejectlog.ec
}
```

If you do configure a separate log directory, you might also want to arrange for the logs to be rotated. Our Linux packages drop a maintenance script into `/etc/cron.d` that launches [ec_rotate](executable.ec_rotate "ec_rotate") for this purpose. It's a trivial matter to adjust it to rotate the logs for your second log directory.

</dd>

</dl>

You're now ready to start your ecelerity1 instance using the following invocation:

`# /opt/msys/ecelerity/bin/ec_ctl1 start` |
| <a name="faq.num.open.files"></a><a name="idp31465376"></a>

**A.3.**

 |

I see error messages saying "`errno=24`" (on linux), "`nropen too low`," or "`Could not set nofiles high enough!`" in my `mainlog.ec`. What do they mean and how can I prevent this?

 |
|  |

These errors happen when the Momentum process has hit either the per-process system limit for maximum open file descriptors or the `Server_Max_Outbound_Connections` limit configured in `ecelerity.conf`.

Consult your system documentation for further information on changing the per-process open file descriptor limit, or see [Section 1.5, “Operating System Specific Preparation”](install.os-specific "1.5. Operating System Specific Preparation") for recommended settings specific to your operating system.

 |
| <a name="faq.sieve.array.after.variable"></a><a name="idp31472048"></a>

**A.4.**

 |

When I say:

```
$local = envelope :localpart "from";
if ec_test :is $local ["foo1", "foo2"] {
  ec_action 550 "no foos allowed";
}
```

Why do I get the Sieve error "syntax error near token COMMA"?

 |
|  |

The Sieve parser has no way of telling a hash dereference like `$local["foo1"]` from a regular variable followed by an array like `$local ["foo1"]`, so when it sees a variable followed by an open bracket, it always assumes that it's seeing a hash dereference. As a result, once it gets to the comma in `$local ["foo1", "foo2"]` it thinks this is invalid syntax (which it is, for a hash dereference). To work around this, you can substitute the variable into a string:

```
$local = envelope :localpart "from";
if ec_test :is "${local}" ["foo1", "foo2"] {
  ec_action 550 "no foos allowed";
}
```
 |

| [Prev](p.appendices)  | [Up](p.appendices.php) |  [Next](snmp-mib.php) |
| Part III. Appendices  | [Table of Contents](index) |  Appendix B. MIB Files |
