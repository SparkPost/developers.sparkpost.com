| [Prev](console_commands.cache_stats)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.count) |

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

The **config** command enables online configuration tuning for Momentum. It has three forms:

*   **config { get | eval | unset } [ scope_name ...] { optname }**

    The first form takes a `get`, `eval` or `unset` mode, zero or more scope specifiers, and an option name as arguments. It gets, evaluates, or clears the value of the specified option in the specified scope, depending on the command given.

    The scope may be a named scope or an anonymous scope. The following examples illustrate this:

    ```
    10:47:35 /tmp/2025> config set ESMTP_Listener Pathway foo
    10:47:35 /tmp/2025> config set ESMTP_Listener Peer 127.0.0.1 Pathway foo
    ```

    In these examples, `ESMTP_Listener` is an anonymous scope name and `Peer` is a named scope where `127.0.0.1` is its instance name. Note that you are allowed to have named scopes inside anonymous scopes (as in the second example) or anonymous scopes inside named scopes. It is also legal to have an optional equals sign between the option name and the assigned value; this facilitates copying and pasting from the `ecelerity.conf` file into the console. When setting options to values that contain characters such as ‘`#`’, you must use quotation marks.

    Both `get` and `eval` display the current value of an option, the difference being that `eval` will fall back to more generic scopes (and eventually to the option's default value). On the other hand, `get` only looks in the scope specified. So if an option is not specified within that scope, no value is returned. For example, if `blackhole` is not set in your configuration file, the following output shows how the result of using `get` or `eval` differs:

    ```
    10:47:35 /tmp/2025> config get blackhole
    Option 'Blackhole' is not set in scope ''.
    10:47:35 /tmp/2025> config eval blackhole
    Blackhole = 0
    ```

    Using `unset`, the value of the specified option in the specified scope is cleared; when evaluating the value, an unset option will cause the evaluation to fall back to a more generic scope or the option's default value. Thus, unsetting an option is not the same as setting it to 0, an empty string, or that option's default value.

*   **config set [ scope_name ...] { optname } { value }**

    The second form takes `set` as the mode, zero or more scope specifiers, an option name, and an option value as arguments. It sets a new value for the specified option in the specified scope.

    You can set any configuration option in any scope (except settings inside legacy modules) using the **config set**     command.

*   **config unset [ scope_name ...] [ option_name ]**

    The third form takes `unset` as the mode and one or more scope specifiers, and an option name as arguments. When this command is used without specifying an option, *it unsets all the options in the scope and that scope's subscopes, so use it carefully* . To prevent completely deconfiguring a running server by accident, unsetting the global scope is not supported.

For a complete list of available configuration options, see [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .

<a name="idp14008368"></a>
### Setting Boolean Options

Booleans are parsed using `ec_atobool`, which accepts `on` or `off`, `true` or `false`, `enabled` or `disabled` and `0` or `1`. From the console, you can set a boolean to any one of these values. For example:

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

<a name="console_commands.batch.version3.0"></a>
### Batching config Commands

You may batch configuration changes by initiating a transaction on the console, as shown in the following example:

```
10:47:35 /tmp/2025> config begin
10:47:35 /tmp/2025> config set esmtp_listener listen :587 concurrency 5
10:47:35 /tmp/2025> config set esmtp_listener listen :587 pool_name accept
10:47:35 /tmp/2025> config set threadpool accept concurrency 5
10:47:35 /tmp/2025> config commit
```

Use **config begin**       to begin a transaction. The **config commit**        command ends a transaction and activates any options set during the transaction. It changes the live configuration only and has *no* effect on the configuration file.

Transactions are isolated from each other; the transaction you initiate in your control session is yours alone. If multiple transactions are initiated in concurrent sessions, the first to commit wins; the losers commit attempt will fail.

You may **config rollback**          to cancel a set of changes and rollback a transaction.

You may alternatively **config reload**        to attempt a configuration reload and undo options set from the system console. This must happen outside of a transaction (it will indicate an error if you have begun a transaction).

<a name="console_commands.config.version3.0"></a>
### Available Modes

The following are the available modes for the **config** command:

<dl className="variablelist">

<dt>config begin</dt>

<dd>

Begin a transaction.

</dd>

<dt>config begin from scratch</dt>

<dd>

Begin a transaction from scratch.

This command starts an entirely new configuration. However, if you issue the command **`config begin from scratch`**                     and then the command **`config showrecurse`**             , you will see that some options are already set. This is not a bug; these settings are the implicit settings you get when you load an empty configuration file. You can override them with **config set** , but you cannot unset them because these settings are necessary for proper operation. The options that are already set are the `ThreadPool` stanzas, the `DebugFlags` and the `TimestampFormat` option.

</dd>

<dt>config commit</dt>

<dd>

Commit a transaction.

</dd>

<dt>config locate</dt>

<dd>

Locate a particular scope.

Use this command to locate specific scopes. The following is an example of the output resulting from issuing the command **config locate listen** :

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
</dd>

<dt>config reload</dt>

<dd>

Reload configuration options.

If no file is specified, **config reload**        reloads configuration options from the `ecelerity.conf` file. You may specify an alternate configuration file. Options changed in the configuration file come into effect immediately. Momentum does not need to be restarted. You may also use **config reload**        to attempt a configuration reload to cancel any changes made from the console. This must happen outside of a transaction, otherwise an error message will be displayed. If you make manual changes to your configuration file, issue this command to ensure that your changes are put into effect immediately.

Issuing the **config reload**        command while receiving email will trigger the `Reconfig_Message`. For more information see [Section 19.3, “`Reconfig_Message` Option”](esmtp_listener.reconfig_message "19.3. Reconfig_Message Option").

### Warning

Not all options can be changed at runtime. To confirm that an option is "dynamic", check the default column of the table at [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") . Options that cannot be changed without restarting the ecelerity process are marked as `non-dynamic`.

</dd>

<dt>config replay</dt>

<dd>

Show changes in a transaction prior to a commit or rollback.

This command can be used in an active transaction; when you have issued the command **config begin**       or **config begin from scratch**                    but have not yet done a **config commit**        or a **config rollback** . It prints out all the **config set**     and **config unset**       commands you have given since the start of the transaction. **config eval**      or **config show**      commands are not displayed.

This command is especially useful if you find that a conflict causes your commit to fail. Using **config replay** , you can determine exactly what changes you attempted before rolling back your transaction.

</dd>

<dt>config rollback</dt>

<dd>

Rollback a transaction.

</dd>

<dt>config show</dt>

<dd>

View a specific scope.

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
</dd>

<dt>config showrecurse</dt>

<dd>

View a specific scope and its child scopes.

</dd>

<dt><a name="config_writeback"></a>config writeback [*`/optional/alternate/path`*]</dt>

<dd>

Write configuration changes to your `ecelerity.conf` file or an alternate file.

The **config writeback**           command writes any changes you have made to the live configuration back to the configuration file or files that the configuration was read from originally. If you do not want to overwrite the main configuration file, you can provide an alternate path. If your configuration has "include" files, edits go to the most appropriate place. For example, suppose that you have a binding configuration that came from an included file, changes to that binding are written back to the included file.

</dd>

</dl>

<a name="idp11609264"></a>
### Example config Commands

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

The following are examples using the **config** command with outputs:

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

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.cache_stats)  | [Up](console.cmds.ref) |  [Next](console_commands.count) |
| cache stats  | [Table of Contents](index) |  count |

