| [Prev](sieve.ref.ec_header_prefix)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_inc_counter) |

<a name="sieve.ref.ec_host_fingerprint"></a>
## Name

ec_host_fingerprint — return genre and detail of the passive host fingerprinting operation

## Synopsis

`ec_host_fingerprint`

<a name="idp29890704"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

In order to use this command, you must have the Policy Tools suite installed. Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite see [Section 1.9, “Installing Additional Packages”](install.additional.packages "1.9. Installing Additional Packages").

The `ec_host_fingerprint` function returns the genre and detail regarding the current inbound connection.

<a name="example.ec_host_fingerprint"></a>

**Example 16.58. ec_host_fingerprint example**

```
($genre, $detail) = ec_host_fingerprint;
ec_header_add "X-Host-Fingerprint" "%{i} %{p} ${genre} ${detail}";
```

**Configuration Change. ** This feature is available starting from Momentum 3.0.24.

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/msys-p0f start** . The fingerprints are all included in the msys-p0f package and are located here: `/opt/msys/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.

| [Prev](sieve.ref.ec_header_prefix)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_inc_counter) |
| ec_header_prefix  | [Table of Contents](index) |  ec_inc_counter |
