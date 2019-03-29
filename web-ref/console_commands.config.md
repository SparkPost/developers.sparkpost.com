|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.cache_stats)  | 12.2. System Console Commands |  [Next](console_commands.count.php) |

<a name="console_commands.config"></a>
## Name

config — online configuration tuning for Momentum

## Synopsis

`config` begin

`config` begin from scratch

`config` commit

`config` locate { *`scope_name`* } [ *`regex`* ]

`config` reload [ *`/alternate/path`* ]

`config` { get | eval | unset } [ *`scope_name`* ...] { *`optname`* }

`config` replay

`config` rollback

`config` set [ *`scope_name`* ...] { *`optname`* } { *`value`* }

`config` show [ *`scope_name`* ...] [ *`option_name`* ]

`config` showrecurse [ *`scope_name`* ...]

`config` writeback [ *`/alternate/path`* ]

<a name="console_commands.config.original"></a>
## Description

The first form of the **config** command takes a `get`, `eval` or `unset` mode, zero or more scope specifiers and an option name as arguments. It gets, evaluates or clears the value of the specified option in the specified scope, depending on the command given.

When getting or setting or evalling an option, the scope may be a named scope or an anonymous scope. The following examples illustrate this:

```
10:47:35 /tmp/2025> config set ESMTP_Listener Pathway foo
10:47:35 /tmp/2025> config set ESMTP_Listener Peer 127.0.0.1 Pathway foo
```

In these examples `ESMTP_Listener` is an anonymous scope name, `Peer` is a named scope where `127.0.0.1` is its instance name. Note that you're allowed to have named scopes inside anonymous scopes (as in the second example) or anonymous scopes inside named scopes. It is also legal to have an optional equals sign between the option name and the assigned value; this facilitates copying and pasting from the `ecelerity.conf` file onto the console. When setting options to values that contain characters such as ‘`#`’ you must use quotation marks. For more information see [Section 2.1, “The `ecelerity.conf` File”](conf.ecelerity.conf "2.1. The ecelerity.conf File").

Both `get` and `eval` display the current value of an option, the difference being that `eval` will fall back to more generic scopes (and eventually to the option's default value, even if the provided scope is invalid). On the other hand, `get` only looks in the scope specified so if an option is not specified within that scope, no value is returned. For example, if `blackhole` is not set in your configuration file, the following output shows how the result of using `get` or `eval` differs:

```
10:47:35 /tmp/2025> config get blackhole
Option 'Blackhole' is not set in scope ''.
10:47:35 /tmp/2025> config eval blackhole
Blackhole = 0
```

Using `unset`, the value of the specified option in the specified scope is cleared; when evaluating the value, an unset option will cause the evaluation to fall back to a more generic scope, or the option's default value. Thus, unsetting an option is not the same as setting it to 0, an empty string, or that option's default value.

The second form of the **config** command takes `set` as the mode, zero or more scope specifiers, an option name and an option value as arguments. It sets a new value for the specified option in the specified scope. The format of values is the same as in [ecelerity.conf](ecelerity.conf "ecelerity.conf").

In version 3.0, you can set any configuration option in any scope (except settings inside legacy modules) using the **config set**     command.

The third form of the **config** command takes `unset` as the mode and one or more scope specifiers and an option name as arguments. When this command is used without specifying an option, *it unsets all the options in the scope and that scope's subscopes, so use it carefully* . To prevent completely deconfiguring a running server by accident, unsetting the global scope is not supported.

<a name="idp15647696"></a>
### Setting Boolean Options

Booleans are parsed using `ec_atobool` which accepts `on` or `off`, `true` or `false`, `enabled` or `disabled` and `0` or `1`. From the system console you can set a boolean to any one of these values. For example:

```
07:50:47 /tmp/2025> config set suspend_delivery true
Suspend_Delivery = true
08:02:16 /tmp/2025> config set suspend_delivery 1
Suspend_Delivery = 1
08:02:19 /tmp/2025> config set suspend_delivery enabled
Suspend_Delivery = enabled
08:02:22 /tmp/2025> config set suspend_delivery on
Suspend_Delivery = on
```

Any one of the above commands suspends delivery in the global scope.

<a name="idp15655184"></a>
### Using The config Command

Suppose you have the following part in your `ecelerity.conf` file:

```
Message_Expiration = 86400

Domain earthlink.net {
  Message_Expiration = 900
}

Binding smtp-01 {
  EHLO_Hostname = "smtp-01.com"
  Domain relay.com {
    EHLO_Hostname = "relay.com"
  }
}
```

Here are some examples using the commands with outputs:

```
10:47:35 /tmp/2025> config get message_expiration
Message_Expiration = 86400

10:47:35 /tmp/2025> config get domain earthlink.net message_expiration
        Message_Expiration = 900

10:47:35 /tmp/2025> config unset domain earthlink.net message_expiration
"Message_Expiration" has been unset. Effective value is now:
        Message_Expiration = 86400

10:47:35 /tmp/2025> config get binding smtp-01 ehlo_hostname
        EHLO_Hostname = "smtp-01.com"

10:47:35 /tmp/2025> config get binding smtp-01 domain relay.com ehlo_hostname
        EHLO_Hostname = "relay.com"

10:47:35 /tmp/2025> config unset binding smtp-01 domain relay.com ehlo_hostname
"EHLO_Hostname" has been unset. Effective value is now:
        EHLO_Hostname = "smtp-01.com"

10:47:35 /tmp/2025> config set Relay_Hosts ( 10.0.0.1 10.0.0.2 )
Relay_Hosts = (
  10.0.0.1
  10.0.0.2
  )
```

For a complete list of configuration options see [Section 9.1, “Options Summary”](options-summary "9.1. Options Summary").

<a name="console_commands.config.version3.0"></a>
### Console Commands Introduced in Version 3.0

The following config commands were added in version 3.0:

*   config begin – begin a transaction.

*   config begin from scratch – begin a transaction from scratch.

*   config replay – show changes in a transaction prior to a commit or rollback.

*   config commit – commit a transaction.

*   config rollback – rollback a transaction.

*   config writeback [*`/optional/alternate/path`*] – write configuration changes to your `ecelerity.conf` file or an alternate file.

*   config show – view a specific scope

*   config showrecurse .– view a specific scope and its child scopes

*   config locate – locate a particular scope

*   config reload – reload configuration options.

These commands are discussed in the following sections.

<a name="console_commands.batch.version3.0"></a>**Batching config Commands**

You may batch configuration changes by initiating a transaction on the console:

```
10:47:35 /tmp/2025> config begin
10:47:35 /tmp/2025> config set esmtp_listener listen :587 concurrency 5
10:47:35 /tmp/2025> config set esmtp_listener listen :587 pool_name accept
10:47:35 /tmp/2025> config set threadpool accept concurrency 5
10:47:35 /tmp/2025> config commit
```

The **config commit**        command ends a transaction and activates any options set during the transaction. It changes the live configuration only and has *no* effect on the configuration file.

You may **config rollback**          to cancel a set of changes.

Transactions are isolated from each other; the transaction you initiate in your control session is yours alone. If multiple transactions are initiated in concurrent sessions, the first to commit wins; the losers commit attempt will fail.

You may alternatively **config reload**        to attempt a configuration reload and undo options set from the system console. This must happen outside of a transaction (it will indicate an error if you have begun a transaction).

### config replay

This command can be used in an active transaction; when you have issued the command **config begin**       or **config begin from scratch**                    but haven't yet done a **config commit**        or a **config rollback** . It prints out all the **config set**     and **config unset**       commands you have given since the start of the transaction. **config eval**      or **config show**      commands are not displayed.

This command is especially useful if you find that a conflict causes your commit to fail. Using **config replay**        you can determine exactly what changes you attempted before rolling back your transaction.

### config begin from scratch

This command starts an entirely new configuration. However, if you issue the command **`config begin from scratch`**                     and then the command **`config showrecurse`**              you will see that some options are already set. This is not a bug; these settings are the implicit settings you get when you load an empty configuration file; you can override them with **config set**     but you can't unset them because these settings are necessary for proper operation. The options that are already set are the ThreadPool stanzas, the DebugFlags and the TimestampFormat option.

<a name="config_writeback"></a>**config writeback**<a class="indexterm" name="idp15694480"></a>

The **config writeback**           command writes any changes you have made to the live configuration back to the configuration file or files that the configuration was read from originally; if you don't want to overwrite the main configuration file, you can provide an alternate path. If your configuration has "include" files, edits go to the most appropriate place. For example, suppose that you have a binding configuration that came from an included file, changes to that binding are written back to the included file.

<a name="console_config_reload"></a>**config reload**<a class="indexterm" name="idp15698736"></a>

If no file is specified, **config reload**        reloads configuration options from the `ecelerity.conf` file. You may specify an alternate configuration file. Options changed in the configuration file come into effect immediately: Momentum does not need to be restarted. You may also use **config reload**        to attempt a configuration reload to cancel any changes made from the system console. This must happen outside of a transaction otherwise an error message will be displayed. If you make manual changes to your configuration file, issue this command to ensure that your changes are put into effect immediately. For more information about include files see [ecelerity.conf](ecelerity.conf "ecelerity.conf").

If you have changed a Sieve script, reloading the configuration also takes care of flushing the Sieve cache.

Issuing the **config reload**        command while receiving email will trigger the `Reconfig_Message`. For more information see [the section called “The `Reconfig_Message` Option”](ecelerity.conf#reconfig_message "The Reconfig_Message Option").

### Warning

In a cluster configuration, if you modify DuraVIP™ bindings a possible race condition means that a **config reload**        taking effect on multiple machines at the same time can cause nodes to disagree about who owns which binding. For this reason it is strongly suggested that you execute the console command **broadcast cluster duravip announce view**                               immediately after **config reload** . Doing this synchronizes ownership of the bindings and eliminates a possible race condition among the nodes.

Not all options can be changed at runtime. To confirm that an option is "dynamic", check the default column of the table at [Section 9.1, “Options Summary”](options-summary "9.1. Options Summary"). Options that cannot be changed without restarting the ecelerity process are marked as `non-dynamic`.

<a name="console_config_locate"></a>**config locate**<a class="indexterm" name="idp15711712"></a>

Use this command to locate specific scopes. Find below an example of the output resulting from issuing the command **config locate listen** :

```
Listen ":25"
  is at Esmtp_Listener::Listen:\:25:
Listen ":587"
  is at Esmtp_Listener::Listen:\:587:
Listen "127.0.0.1:2025"
  is at Control_Listener::Listen:127.0.0.1\:2025:
Listen "/tmp/2025"
  is at Control_Listener::Listen:/tmp/2025:
```

Where a scope has an instance name, that instance name may also be specified. For example, the command, **config locate listen 127.0.0.1**                         is also legal.

This command is particularly useful for showing the exact location of a scope. For example:

```
10:47:35 /tmp/2025> config locate QueryGroups
QueryGroups
  is at auth_ds::Scheme:ecauth:QueryGroups::
```

You can then examine the particulars of this scope by issuing the command **config show auth_ds Scheme ecauth QueryGroups** .

You can also use this command specifying a regular expression as an optional argument, for example:

```
12:00:12 /tmp/2025> config locate Scheme ec.+
Scheme "ecauth"
  is at auth_ds::Scheme:ecauth:
```

The regex argument need not be quoted unless it contains spaces; specifically, enclosing it in forward slashes is not necessary and will not work. Note that the use of this command with a scope and a regular expression is different from regex scopes such as regex domains. In the case of a regex domain, (see [Regex Domains](conf.ref.domain#conf.ref.domain.regex "Regex Domains")) the regular expression denoted by *`pattern`* in the command **config locate Domain *`pattern`***                           will be matched against the regex domain treated as an ordinary string. For example, the command **config locate Domain ex.+**                    would locate a regex domain defined as:

```
Domain "/(?:^|[.])example[.](?:com|co[.]uk)$/" {
  ...
}
```
<a name="console_config_show"></a>**config show and config showrecurse**<a class="indexterm" name="idp15724256"></a>

**config show**      and **config showrecurse** are similar. As with **config get**     or **config eval** , you supply a path into the configuration tree, but without specifying an option name. You can then view the whole scope. **config showrecurse**             also shows child scopes.

Given the following mail_loop configuration:

```
mail_loop "mail_loop1"
{
  Use_IP = false
}
```

Issuing the command **`config show mail_loop mail_loop`**                           yields the output:

`Use_IP = false`

The difference between **config show *`scope`***                and **config showrecurse *`scope`***                       is illustrated using the following ESMTP listener configuration:

```
Esmtp_Listener {
  Listen ":25" {
  }
  Listen ":587" {
    Enable = false
    SMTP_Extensions = (
      "ENHANCEDSTATUSCODES"
      "STARTTLS"
      "AUTH LOGIN"
    )
    TLS_Key = "cert.key"
    TLS_Certificate = "cert.pem"
    TLS_Client_CA = "ca-bundle.crt"
    TLS_Ciphers = "DEFAULT"
  }
  Idle_Time = 300
  SMTP_Extensions = (
    "ENHANCEDSTATUSCODES"
  )
}
```

Issuing the command **`config showrecurse ESMTP_Listener`**                             reproduces the entire configuration as shown above. On the other hand, issuing the command, **`config show ESMTP_Listener`**                     , outputs only the following:

```
Listen ":25" { ... }
Listen ":587" { ... }
Idle_Time = 300
SMTP_Extensions = (
  "ENHANCEDSTATUSCODES"
)
```
<a name="idp15734608"></a>**Setting debug Levels**

The **debug** console command has been removed in version 3.0\. Setting and getting debug levels is done using the **config** command.

To determine the global `Debug Flags` setting issue the command **`config show Debug_Flags`**                   and to set the `Debug Flags` level use **config set Debug_Flags *`level`* (*`system`*)**                                       . For example:

`17:30:30 /tmp/2025>  config set Debug_Flags DEBUG (LOG1)`<a name="console_commands.config.modules"></a>**Using config With Modules**

When using the **config** command with module-specific options the syntax depends upon whether a module is a singleton or not. For modules that are not singletons, use the following syntax to set or get options: **config {set or get} *`scope_name`* [*`instance_name`*] option [value]** . If the module is a singleton, you cannot specify an instance name.

To determine whether a module is a singleton use the **module list**      command. The API name of singleton modules is `Singleton`. You can also determine whether a module is a singleton by looking at the table of modules [Section 13.2.1, “All Modules”](modules.summary#modules.summary.all.modules "13.2.1. All Modules")

### Note

Note that the syntax for using **config** with modules differs from the syntax used for module-specific console commands such as the Sieve command to flush the cache. To flush the Sieve cache for a sieve module named `sieve1` issue the command **`sieve:sieve1 flush cache`**             . When using **config** with module options there is no ‘`:`’ between the module and the instance name.

<a name="console.debug.version_3"></a>**Module Level Debugging From the System Console**<a class="indexterm" name="idp15752912"></a>

Like global debugging, module level debugging is also set using the **config** command. Find below examples of setting and getting the debug level for an smtp_cbv module with the name `foo`:

```
10:47:35 /tmp/2025> config eval smtp_cbv foo Debug_Level
10:47:35 /tmp/2025> config set smtp_cbv foo Debug_Level DEBUG
```

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.cache_stats)  | [Up](console.commands.non-module.php) |  [Next](console_commands.count.php) |
| cache stats  | [Table of Contents](index) |  count |
