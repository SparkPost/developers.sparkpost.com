| [Prev](sieve.ref.advertize_esmtp_capability)  | 16.2. Sieve Function Details |  [Next](sieve.ref.audit_connections_on_listener) |

<a name="sieve.ref.antivirus"></a>
## Name

f_secure_avscan, clamav_avscan, csapi_avscan — antivirus functions for Sieve

## Synopsis

`f_secure_avscan`

`clamav_avscan`

`csapi_avscan`

<a name="idp28565968"></a>
## Description

These Sieve tests and actions are provided by the [Section 14.5, “antivirus – Antivirus Modules”](modules.antivirus "14.5. antivirus – Antivirus Modules"); you must have loaded and correctly configured it before you can successfully use them. They can be used only in the data validation phase.

### Note

The fsecure module is not supported in version 3.1.

The antivirus framework automatically registers Sieve actions for each antivirus engine that is loaded into Momentum, allowing you to selectively run the engine based on criteria in a Sieve script. The chief benefit of doing this is to reduce the CPU cost of scanning messages if some earlier validation has decided that the mail will be rejected. In order to reap this benefit, you should load your antivirus modules in "passive" mode:

```
clamav {
  Enabled = false
  ...
}
```

Validation modules loaded in passive mode will not have their validation hooks called automatically, which means that inbound messages will not be virus scanned unless you explicitly call the corresponding Sieve action.

As each AV module is loaded, the AV framework registers a Sieve action to trigger a scan. The action name is built up from the name of the AV engine with non alpha-numeric characters translated to underscores with `_avscan` appended to it. The F-Secure engine using **f_secure_avscan**, the ClamAV engine using **clamav_avscan** and the csapi engine using **csapi_avscan**. Other third party AV modules will be named in a similar fashion.

Usage is as simple as:

`clamav_avscan;`

The action returns no value. The scanning process will mark up the validation context for further processing by a Sieve script. For example, add the following block in your `ecelerity.conf`:

```
clamav {
  Enabled = false
  daemon = "127.0.0.1:3310"
  timeout = "20"
  action = pass
  paranoid = false
  context_variable = "VIRUS"
  skip_context_variable = "skip_virus_check"
  file_base = "/var/tmp"
}

sieve "sieve1" {
  script "data_phase1" {
    source = "/path/to/clamav.siv"
  }
}
```

The value of `context_variable` is prefixed to `_info` to create the vctx_mess context variable `VIRUS_info`. This variable is used in the following Sieve script saved as `/path/to/clamav.siv`:

```
clamav_avscan;

if vctx :contains "VIRUS_info" "error" {
  ec_action 451 "AV system offline" "virus:check error";
  stop;
}
elsif vctx :contains "VIRUS_info" "" {
  ec_action 550 "Virus detected %{vctx_mess:clamav_status_info}" "virus:Viruses rejected";
  stop;
}
# if we got here, there was no virus detected
```

The %{vctx_mess:*`avscan`*_status_info} will contain textual information from the AV engine itself, typically the virus name. The actual name of this context variable is the engine name prepended to `_status_info` so it varies depending upon the antivirus engine used. (In this particular case it is `clamav_status_info`.) See [Section 14.5, “antivirus – Antivirus Modules”](modules.antivirus "14.5. antivirus – Antivirus Modules") for more details.

| [Prev](sieve.ref.advertize_esmtp_capability)  | [Up](sieve.ref.files) |  [Next](sieve.ref.audit_connections_on_listener) |
| advertize_esmtp_capability  | [Table of Contents](index) |  audit_connections_on_listener |
