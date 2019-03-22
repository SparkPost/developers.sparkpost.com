| [Prev](sieve.ref.ec_include)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_ip_connections) |

<a name="sieve.ref.ec_interfaces"></a>
## Name

ec_interfaces — obtain a list of network interfaces

## Synopsis

`ec_interfaces`

<a name="idp29961392"></a>
## Description

This function returns a stringlist of all IPv4 addresses assigned to the local machine except for localhost (127.0.0.1).

### Note

This feature is an extension to the Sieve system and can be made available by loading the mail_loop module. See [Section 14.45, “mail_loop – Mail Loop Detection”](modules.mail_loop "14.45. mail_loop – Mail Loop Detection") for more information.

This function can be useful for detecting spoofing attacks that use the local machine's IP address as the argument to EHLO (a common spamming mistake).

<a name="example.ec_interfaces"></a>

**Example 16.62. ec_interfaces test**

```
$ips = ec_interfaces;
if ec_test :contains "%{spfv1:h}" $ips {
  ec_action 550 "spoof from %{spfv1:i} claiming to be me %{spfv1:h}";
}
stop;
```

| [Prev](sieve.ref.ec_include)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_ip_connections) |
| ec_include  | [Table of Contents](index) |  ec_ip_connections |
