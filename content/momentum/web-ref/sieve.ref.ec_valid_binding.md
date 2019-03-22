| [Prev](sieve.ref.ec_url_ripper)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_valid_mime) |

<a name="sieve.ref.ec_valid_binding"></a>
## Name

ec_valid_binding, ec_valid_binding_group — Check whether a named MultiVIP© binding exists

## Synopsis

`ec_valid_binding` [ *`binding`* ]

`ec_valid_binding_group` [ *`binding_group`* ]

<a name="idp30776208"></a>
## Description

`ec_valid_binding` is a Sieve test that checks whether the specified binding *`binding`* exists.

`ec_valid_binding_group` is a Sieve test that checks whether the specified binding group *`binding_group`* exists.

<a name="example.ec_valid_binding"></a>

**Example 16.103. ec_valid_binding example**

The following example shows how you can check whether a binding or binding group exists before assigning a message to it. Note that the binding `smtp-04` and binding group `group-c` do not exist.

```
Binding_Group "group-a" {
  Binding "smtp-01" {
    EHLO_Hostname = smtp-01.com
  }
}

Binding_Group "group-b" {
  Binding "smtp-02" {
    EHLO_Hostname = smtp-02.com
  }
  Binding "smtp-03" {
    EHLO_Hostname = smtp-03.com
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
$to = envelope :domain "to";
if ec_test :is $to "foo.com" {
  if ec_valid_binding "smtp-04" {
    ec_set_binding "smtp-04";
  } elsif ec_valid_binding "smtp-01" {
    ec_set_binding "smtp-01";
  }
} elsif ec_test :is $to "bar.com" {
  if ec_valid_binding_group "group-c" {
    ec_set_binding_group "group-c";
  } elsif ec_valid_binding_group "group-b" {
    ec_set_binding_group "group-b";
  }
}
```

<a name="idp30787024"></a>
## See Also

[ec_set_binding](sieve.ref.ec_set_binding "ec_set_binding").

| [Prev](sieve.ref.ec_url_ripper)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_valid_mime) |
| ec_url_ripper  | [Table of Contents](index) |  ec_valid_mime |
