| [Prev](sieve.ref.smtp_callback_verify)  | 16.2. Sieve Function Details |  [Next](sieve.ref.split) |

<a name="sieve.ref.snmp_trap"></a>
## Name

snmp_trap — Send SNMP traps from a Sieve script

## Synopsis

`snmp_trap` { *`hash`* }

<a name="idp31222944"></a>
## Description

`snmp_trap` sends an SNMPv2 trap described by the given hash, which must be created by [hash_create](sieve.ref.hash_create "hash_create"). The hash may have the following elements:

<dl className="variablelist">

<dt>address</dt>

<dd>

IP address of the server to send the trap to. If no address is specified, the port and community options are ignored and the trap is sent to the server(s) specified by one or more `Trap_Destination` stanzas within the `SNMP_TRAPS` stanza in [SNMP](conf.ref.snmp "SNMP").

### Warning

Currently, the `snmp_trap` action does **not** fall back to the address configured in the `Trap_Destination` stanzas within the `SNMP_TRAPS` scope. As a workaround, use this hash element to configure an explicit trap address when sending a trap from Sieve.

</dd>

<dt>port</dt>

<dd>

UDP port number on the destination server, as specified by `address`, to send the trap to. The default port number is UDP port 162.

</dd>

<dt>community</dt>

<dd>

Set the Community option value to the desired SNMP community the traps are to be a part of. "Public" is the default value for this option.

</dd>

<dt>mib</dt>

<dd>

The object identifier (OID) to use for the trap. The default value is a generic trap using the OmniTI Enterprise MIB, "1.3.6.1.4.1.19552.1.4.7".

</dd>

<dt>trapvar.type</dt>

<dd>

The type of trap variable to send. This may be one of the following: "COUNTER", "GAUGE", "STRING", "IPADDRESS". "STRING" is the default value for this option.

</dd>

<dt>trapvar.mib</dt>

<dd>

The object identifier (OID) to use for the trap variable. The default value corresponds to a generic trap using the OmniTI Enterprise MIB and is "1.3.6.1.4.1.19552.1.4.1.0".

</dd>

<dt>trapvar</dt>

<dd>

The actual contents of the trap variable to send. This option specifies the data to be transferred in the trap.

</dd>

</dl>

The following example will send an SNMP trap to the server specified by the `SNMP_TRAPS` stanza of [SNMP](conf.ref.snmp "SNMP") (if any) when a message is received that contains a `X-Spam-Status` header with a value of `Yes`.

<a name="example.snmp_trap"></a>

**Example 16.125. snmp trap using global settings**

```
if header :contains "X-Spam-Status" "Yes" {
        $hash = hash_create;
        hash_set $hash "trapvar" "SPAM detected";

        snmp_trap $hash;
        ec_action 550 "spam detected";
    }
```

To send the trap to a specific host and port combination, something like the following can be used.

<a name="example.snmp_trap.second"></a>

**Example 16.126. snmp trap to specific host and port**

```
if header :contains "X-Spam-Status" "Yes" {
        $hash = hash_create;
        hash_set $hash "address" "10.1.2.3";
        hash_set $hash "port" 1062;
        hash_set $hash "trapvar" "SPAM detected";

        snmp_trap $hash;
        ec_action 550 "spam detected";
    }
```

<a name="idp31252592"></a>
## See Also

[Appendix B, *MIB Files*](snmp-mib "Appendix B. MIB Files")

| [Prev](sieve.ref.smtp_callback_verify)  | [Up](sieve.ref.files) |  [Next](sieve.ref.split) |
| smtp_callback_verify  | [Table of Contents](index) |  split |
