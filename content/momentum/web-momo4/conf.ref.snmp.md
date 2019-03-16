| [Prev](conf.ref.skip_hosts)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.soft_bounce_drain_rate) |

<a name="conf.ref.snmp"></a>
## Name

SNMP — Simple Network Management Protocol Support

<a name="idp26620224"></a>
## Description

Momentum contains an embedded SNMPv2 agent primarily used to provide statistical data to Momentum utilities such as **ec_stat_watcher**. However, the agent may be queried by third-party SNMP Managers. Momentum's SNMP agent supports and provides information for Mail Monitoring MIB (MTA-MIB) objects as specified in RFC 2789\. Additionally, the agent provides Momentum product information objects, several system level MIB objects and extends the MTA-MIB. Momentum product objects and MTA-MIB extensions are defined in OmniTI's enterprise MIB.

Product information:

*   Product Name

*   Product Version

*   Product Build Date

Additional per MTA-MIB group metrics

*   active queue size

*   delayed queue size

*   failed message count

Per domain statistics

*   domain name

*   receptions

*   failures

*   deliveries

*   transient failures

*   outbound connections

*   active queue size

*   delayed queue size

## SNMP Agent setup

A configuration directive similar to the one shown below is used to configure the Momentum SNMP agent.

```
SNMP {
  State = enabled
  Address   = 192.168.1.2:8162
  Community = "Public"
  SysContact = administrator
  SysLocation = columbia
  SysDescription = mta01
}
```

### Note

Changing the value of these options at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

The SNMP Agent option settings are:

<dl className="variablelist">

<dt><a name="conf.ref.snmp.address"></a>Address</dt>

<dd>

This option specifies the IP address and UDP port number Momentum's SNMP Agent listens on for SNMP requests. The format for the value of this option is `ip_address:udp_port`. A `‘*’` character may be used for `ip_address` to cause the agent to listen on all IP addresses configured on the system. In order to avoid conflicts with other agents running on the system, an UDP port number of `8162` is suggested.

</dd>

<dt><a name="conf.ref.snmp.community"></a>Community</dt>

<dd>

Set the Community option value to the desired SNMP community the agent is to join. `"Public"` is the default value for this option.

### Note

Be sure to use quotation marks when assigning a value to this option. Without them, this option will not work.

</dd>

<dt>State</dt>

<dd>

Set the State option value to `Enabled` to enable the SNMP Agent. The SNMP Agent is enabled by default.

</dd>

<dt>SysContact</dt>

<dd>

Set the SysContact option value to the desired text that the agent should return when queried for this system-level object. There is no default value for this option.

</dd>

<dt>SysDescription</dt>

<dd>

Set the SysDescription option value to the desired text that the agent should return when queried for this system-level object. There is no default value for this option.

</dd>

<dt>SysLocation</dt>

<dd>

Set the SysLocation option value to the desired text that the agent should return when queried for this system-level object. There is no default value for this option.

</dd>

</dl>

Momentum supports the generation of SNMPv2 Traps for certain global conditions. Supported trap conditions are:

*   Momentum Start Up - generated when Momentum starts.

*   Momentum Shutdown - generated when Momentum shuts down.

*   Total Queued Messages - generated when the total messages in the system global queue exceeds the specified limit.

*   Total Active Messages - generated when the total messages on the system active queue exceeds the specified limit.

*   Total Delayed Messages - generated when the total messages on the system delayed queue exceeds the specified limit.

*   Total Failed Messages - generated when the total messages failed exceeds the specified limit.

Momentum trap definitions are contained in the MIB file `OMNITI-SNMP-MIB.txt` found in the `/opt/msys/ecelerity/docs/` directory. This file is reproduced in [Appendix B, *MIB Files*](snmp-mib "Appendix B. MIB Files") .

A configuration directive similar to the one shown below is used to enable and configure generation of SNMP traps. The directive consists of the outer `SNMP_TRAPS` stanza which encloses several global option settings, one or more `Destination` stanzas and a single `Watch_Variable` stanza.

<a name="example.snmp.3"></a>

**Example 72.9. Trap_Destination**

```
SNMP_TRAPS {
  State = enabled
  Watch_Interval = 10
  Trap_Interval = 60
  Destination "192.168.1.2:162" {
    Community = "Public"
  }
  Watch_Variables = [
    GlobalMailQueue = 20000
    ActiveQueue     = 10000
    DelayedQueue    = 10000
    FailedMessages  = 5000
  ]
}
```

Global option settings are:

<dl className="variablelist">

<dt>State</dt>

<dd>

Set the State option value to `Enabled` to enable generation of SNMP traps. SNMP traps are disabled by default.

</dd>

<dt><a name="conf.ref.snmp.trap_interval"></a>Trap_Interval</dt>

<dd>

Once a trap condition occurs, Momentum will continue to send traps as long as the condition persists. The value of this option, expressed as number of seconds, determines how frequently traps for a current condition are generated. By default a trap will be generated every 60 seconds for a persistent condition.

</dd>

<dt><a name="conf.ref.snmp.watch_interval"></a>Watch_Interval</dt>

<dd>

Momentum trap processing periodically samples the value of watched system variables. The value of this option, expressed as number of seconds, determines how frequently the variables are checked. By default Momentum will sample every 10 seconds.

</dd>

</dl>

A `Destination` stanza is required for each trap destination. The IP address, UDP port number, and SNMP Community name is specified in each stanza. The `Community` option value defaults to `"Public"`. If trap destination(s) are configured, then the traps will automatically be sent to each configured trap destination.

```
Destination "192.168.1.2:162" {
  Community = "Public"
}
```

<a name="conf.ref.snmp.watch_variables"></a>A single `Watch_Variable` stanza is required. At least one of `GlobalMailQueue`, `ActiveQueue`, `DelayedQueue` or `FailMessages` options must be specified. The value specified for each option is the queue size limit specified as number of messages on the queue. When the queue size reaches or exceeds the specified limit, Momentum will generate a trap to all specified trap destinations.

```
Watch_Variables = [
  GlobalMailQueue = 20000
  ActiveQueue     = 10000
  DelayedQueue    = 10000
  FailedMessages  = 5000
]
```

Changing the value of SNMP options at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp26689568"></a>
## Scope

SNMP directives are valid in the global scope.

| [Prev](conf.ref.skip_hosts)  | [Up](config.options.ref) |  [Next](conf.ref.soft_bounce_drain_rate) |
| skip_hosts  | [Table of Contents](index) |  soft_bounce_drain_rate |

