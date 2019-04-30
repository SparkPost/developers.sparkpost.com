|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_round)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_set_routing_gateway) |

<a name="sieve.ref.ec_set_binding"></a>
## Name

ec_set_binding, ec_set_binding_group — Assign a message to a MultiVIP© binding

## Synopsis

`ec_set_binding` [ *`binding`* ]

`ec_set_binding_group` [ *`binding_group`* ]

<a name="idp30494512"></a>
## Description

`ec_set_binding` assigns the current message to the *`binding`* you specify. If the binding does not exist, then an error message will be logged to the paniclog, and the current binding assignment for the message will not be changed.

### Note

If you assign messages to bindings, it is important to ensure that *all* messages are assigned to bindings, or to make sure that the fallback binding (otherwise known as "default") does what you want. Good scripting practice would be to ensure that there is always an `else` clause or some other way of ensuring that all messages are always dealt with in some way. For example, you could create a variable at the top of your script with the most general binding, then `if` blocks to assign a message to a more specific binding if it matches. At the end of the script, assuming no `if` condition applies, the `else` clause would assign the message to the most general binding.

You can use this function to set the binding to the `default` binding. For more information see [the section called “The "default" Binding”](conf.ref.binding#conf.ref.binding.default "The "default" Binding").

`ec_set_binding_group` assigns the current message to a randomly selected binding that belongs to the *`binding_group`* you specify. The selection algorithm will not consider bindings that are currently unplumbed.

<a name="example.ec_set_binding"></a>

**Example 16.91. ec_set_binding example**

In the following script, mail for `example.com` is routed out of a binding named `example`, which is set to send mail out via 10.0.0.1\. All other mail is routed via the default binding. The `ecelerity.conf` for this setup looks something like the following:

```
Binding "example" {
  Bind_Address = 10.0.0.1
}

sieve "sieve1" {
  script "set_binding_phase1" {
    source = "/path/to/myscript.siv"
  }
}
```

and the contents of `myscript.siv`:

```
if envelope :domain :is "to" "example.com" {
  ec_set_binding "example";
}
```

<a name="example.ec_set_binding_group"></a>

**Example 16.92. ec_set_binding_group example**

In the following script, mail for `example.com` is routed out of one of the bindings in the binding group named `example`, which is set to send mail out via the range of IPs from 10.0.0.1 to 10.0.0.5\. All other mail is routed via the default binding. The `ecelerity.conf` for this setup looks something like the following:

```
Binding_Group "example" {
  Binding "ex1" {
    Bind_Address = 10.0.0.1
  }
  Binding "ex2" {
    Bind_Address = 10.0.0.2
  }
  Binding "ex3" {
    Bind_Address = 10.0.0.3
  }
  Binding "ex4" {
    Bind_Address = 10.0.0.4
  }
  Binding "ex5" {
    Bind_Address = 10.0.0.5
  }
}

sieve "sieve1" {
  script "set_binding_phase1" {
    source = "/path/to/myscript.siv"
  }
}
```

and the contents of `myscript.siv`:

```
if envelope :domain :is "to" "example.com" {
  ec_set_binding_group "example";
}
```

<a name="idp30517344"></a>
## See Also

[Section 4.6, “MultiVIP© Interfaces”](operations.multivip "4.6. MultiVIP© Interfaces"), .


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_round)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_set_routing_gateway) |
| ec_round  | [Table of Contents](index) |  ec_set_routing_gateway |
