| [Prev](policy.validation)  | Chapter 5. Implementing Policy with Momentum |  [Next](default.policy.scriptlets.php) |

## 5.2. Implementing Policy Using Scriptlets

In version 3.0, scripting via Lua has been adopted instead of extending Sieve ++ for the following reasons:

*   Sieve has no concept of looping or iterators

*   Simple comparative logic in Sieve is awkward to author

*   Every module we add needs explicit C development to enable Sieve capabilities

### Warning

Many Lua functions act as wrappers for C code which means that the calling code needs to take steps to ensure safety. When calling a C API, make sure that all the arguments are valid as an unexpected `nil` may crash the system or have other undesirable results. Additionally, the data structures returned from C APIs are often shared between C and Lua. The most important consequence of this is that arrays coming from C APIs must only be accessed with existing indices, as opposed to Lua which simply returns `nil` on out-of-bounds access. Failure to do this on a Lua table connected to a C array will cause the system to fail.

Scripts should take advantage of Momentum's built-in revision control and be added to the repository using the [eccfg](executable.eccfg "eccfg") command. For a description of best practices when creating your own scriptlets see [Section 5.6, “Best Practices for Manually Created Policy Scripts”](policy.best.practices.php "5.6. Best Practices for Manually Created Policy Scripts").

After writing a script and saving it to the repository, you must include it in the scriptlet module using a `script` stanza. For more information about the scriptlet module see [Section 14.60, “scriptlet – Module”](modules.scriptlet "14.60. scriptlet – Module"). Detailed instructions for installing scripts are found at [Section 5.2.3.1, “Installing Your Script”](implementing.policy.scriptlets.php#policy.scriptlets.binding.installation "5.2.3.1. Installing Your Script").

This section of the manual creates and explains some basic Lua policy scripts. For more information about this language see [http://www.lua.org](http://www.lua.org).

Restarting an MTA that uses Lua policy scripts can result in duplicate deliveries, when the MTA is shut down under load. This is because some messages may not be deleted from the spool on shutdown. As a workaround see [Section 14.60.2, “Scriptlets and Shutdown”](modules.scriptlet#modules.scriptlet.shutdown "14.60.2. Scriptlets and Shutdown").

### 5.2.1. Callouts

All user-defined scripts must implement one or more of the following function calls:

*   init()

    The registration point for long-lived states, such as timed events or control functions. You should avoid using the init routine unless necessary, as it ties up an additional interpreter on the main scheduler thread. In the current architecture, things set up via the init routine have strong thread affinity with the scheduler thread and are not suitable for scheduling jobs to thread pools.

    The init routine must return `true` if it successfully initializes. Any other return value results in a failure to apply the configuration.

*   deinit()

    The resource destruction point for things that were set up in the init phase. This function must return `true` when successful, otherwise resources may not be cleaned up.

*   validate_connect(accept_construct, vctx)

    This function maps to the `validate_connect` C hook of the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_ehlo(str, accept_construct, vctx)

    This function maps to the `validate_ehlo` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_mailfrom(str, accept_construct, vctx)

    This function maps to the `validate_mailfrom` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_rcptto(ec_message, str, accept_construct, vctx)

    This function maps to the `validate_rcptto` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_data(ec_message, accept_construct, vctx)

    This function maps to the `validate_data` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_data_spool(ec_message, accept_construct, vctx)

    This function maps to the `validate_data_spool` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_data_spool_each_rcpt(ec_message, accept_construct, vctx)

    This function maps to the `validate_data_spool_each_rcpt` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_set_binding(ec_message)

    Maps to the `validate_set_binding` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT` or `msys.core.VALIDATE_DONE`.

*   validate_rcptto_list(list_node, vctx)

    Maps to the `validate_rcptto_list` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_rcptto_list_final(node, vctx)

    Maps to the `validate_rcptto_list_final` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN` or `msys.core.VALIDATE_DONE`.

*   validate_dealloc()

    This callout maps to the `validate_local_dealloc` C hook from the validation subsystem. This callout is only invoked if it is defined and if an earlier phase of processing invoked Lua code from this module. Its purpose is to allow your code a chance to act when the validate_context is torn down. If you used "self" in an earlier validation phase, it will be available in this function. You do not (and should not) need to define this callback unless you are doing something esoteric and accessing resources outside of the usual garbage collection mechanism. In most cases, your per-session state will be collected automatically.

For more information about these callouts see [msys.registerModule](lua.ref.msys.registerModule "msys.registerModule").

If you attempt to add a function call that does not match one of the above function signatures, you'll see an error message similar to the following:

1251465322:scriptlet: no usable methods found for module
   *`mod_name`* in registerModule call

If you are calling Lua helper functions copy the `msg` parameter into a table as shown in the following:

```
function mod:validate_set_binding(msg)
  local ctx = {
    ec_message = msg,
  };
  ...
end
```

At the moment, only the `msg` parameter is used by existing helpers. Be sure to map it to a field named `ec_message` as this is the name of the underlying type.

### 5.2.2. Helper Functions

The `/opt/msys/ecelerity/libexec/scriptlets/msys/` and `/opt/msys/ecelerity/libexec/embed/lua/msys/` directories contain modules with useful helper functions.

**5.2.2.1. The Functions in `policyeditor.lua`**
### Note

The policyeditor scripts have been deprecated; Use the message object methods instead. For example, `msys.policyeditor.get_header` can be replaced by [msg:header](lua.ref.header "msg:header").

The functions in the `policyeditor.lua` are listed in [Section 3.10.2, “Actions”](web3.policy.editor#web3.script.actions "3.10.2. Actions") and are the functions that will most commonly be used. Each one of these functions takes three arguments as shown in the following example:

`local sender = msys.policyeditor.get_mailfrom(ctx, {}, {});`

Each argument passed in is a table. The arguments are as follows:

1.  A table containing object(s) from the callout. Currently, only `ec_message` is supported.

2.  A table containing script variables

3.  A table containing parameters to be passed to this routine

However, the return values differ. Find below a list of the functions and their return values:

*   `get_mess_recv_via` – a string of the form "IP:port"

    ### Warning

    In versions of Momentum prior to 3.0.18, using this function causes duplicate sending. To fix this problem upgrade to version 3.0.18 or download the appropriate version of the packages, msys-ecelerity-core-3.0.17.34536-*`TYPE.version.os.arch`*.rpm and msys-ecelerity-cluster-3.0.17.34536-*`TYPE.version.os.arch`*.rpm. These packages can be installed on top of an existing 3.0.17 installation in the following way: **rpm -Uvh *`filename`***                  .

*   `get_mess_recv_from` – a string of the form "IP:port"

    ### Warning

    In versions of Momentum prior to 3.0.18, using this function causes duplicate sending. To fix this problem upgrade to version 3.0.18 or download the appropriate version of the packages, msys-ecelerity-core-3.0.17.34536-*`TYPE.version.os.arch`*.rpm and msys-ecelerity-cluster-3.0.17.34536-*`TYPE.version.os.arch`*.rpm. These packages can be installed on top of an existing 3.0.17 installation in the following way:**rpm -Uvh *`filename`***                  .

*   `vctx_mess_get` – the context value or `nil` if it is not defined

*   `vctx_mess_set` – the context value or nil if it is not defined

*   `vctx_conn_set` – the context value or nil if it is not defined

*   `vctx_conn_get` – the context value or nil if it is not defined

*   `get_mailfrom` – the envelope sender

*   `get_rcptto` – the envelope recipient

*   `get_header` – the value of the named header, formatted as a single line with RFC2047 encoded portions transformed to UTF-8

*   `del_header` – the name of the deleted header

*   `set_binding` – true if the assignment was successful, otherwise false (likely cause is attempting to assign to a binding that does not exist)

*   `set_binding_group` – true if the assignment was successful, or false otherwise (likely cause is that there are no suitable bindings on this node)

*   `send_email` – no return value

*   `send_trap` – no return value

*   `get_binding_domain_failure_rate` – true if the assignment was successful, otherwise false ( likely cause is that there are no suitable bindings on this node

*   `get_variable` – the value of the named variable, or nil if that variable is not defined

*   `set_variable` – the new value of the variable

*   `pcre_match` – true if the pattern matched, otherwise false

**The `send_email` Function**

The third argument passed to the `send_email` function should be a table containing the follow fields:

*   `from`

*   `to`

*   `subject`

*   `body`

*   `throttle`

Find below an example of how you might call the `msys.policyeditor.send_email` function:

```
msys.policyeditor.send_email(ctx, vars,
 { from = "admin@centos.com",
   to = "peter@kubuntu.com",
   subject = "Gmail binding failure rate",
   body = "30 per cent failure rate exceeded",
   throttle = 5 });
```

As of version 3.0.17, you may use this function to send email to multiple recipients. Use commas or spaces to separate recipients.

**The `send_trap` Function**

The third argument passed to the `send_trap` function should be a table containing the follow fields:

*   `type`

*   `payload`

*   `address`

*   `community`

*   `port`

*   `mib`

*   `tmib`

*   `throttle`

When invoking the `msys.policyeditor.send_trap` function assign values to these parameters as shown in [the section called “The `send_email` Function”](implementing.policy.scriptlets#policy.scriptlets.msys.send_mail "The send_email Function").

**5.2.2.2. Database Functions**

This section describes the available database functions.

**The `msys.db.query` Function**

The signature of this function is as follows: `msys.db.query(cachename, query [, queryparams [, options]])`.

The parameters passed to the `msys.db.query` function are the name of the cache and the SQL statement followed by the values for the prepared statement parameters and a fourth argument that turns off caching in the following way `{nocache=true}`. The fourth argument must be passed as a table. The third and fourth arguments are optional.

The query may use placeholder characters in the form `:name`, `?` or `$name` depending on the underlying driver. If the `?` placeholder is used, then queryparams must be a table with numeric keys, with index 1 corresponding to the 1st `?` in the query string. Otherwise, the keys must be string keys with names that match up to the defined parameters. For instance, `$name` or `:name` expect to find a parameter in the table using the key `name`; the leading `?` or `:` is removed before looking up the value.

An example of using this function is shown below.

```
require("msys.db");
  require("msys.datasource");
  local rowset, row, err;

  rowset, err = msys.db.query('mycache', 'select firstname, lastname from names where age < ?', {30});

  if rowset == nil then
    print("ERROR: " .. err);
    return;
  end

  for row in rowset do
    print(row.firstname, row.lastname);
  end
```

### Warning

Be sure to include `require("msys.db");` and `require("msys.datasource");` when using this and other database function.

### Note

The data cache used in the preceding example must be defined in your configuration file. For more information see [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core").

This function returns an iterator and an error message. If the query is unsuccessful then the first returned value is `nil` and the second returned value is the error message. If no error occurs, then the error message is `nil`. For an example of using the `msys.db.query` function see [Example 5.5, “Querying a database”](implementing.policy.scriptlets#policy.scriptlets.query.db.example "Example 5.5. Querying a database").

Each iteration over the returned rowset yields a table with string keys corresponding to the names of the columns from the row. If the driver does not return names, the values are indexed by their ordinal position instead, with the first column at ordinal position `1`. For drivers that can return multiple values for a given named column (such as LDAP), the values may in turn be tables indexed by ordinal position of the sub-value.

For more information about datasources and prepared statements see [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core").

**The `msys.db.fetch_row` Function**

**Configuration Change. ** This feature is available starting from Momentum 3.0.19.

The signature of this function is as follows: `msys.db.fetch_row(cachename, query [, queryparams [, options]])`.

The arguments to this function are identical to those described in [the section called “The `msys.db.query` Function”](implementing.policy.scriptlets#policy.scriptlets.msys.db.query "The msys.db.query Function"). If the query returns no data, `nil` is returned. Otherwise, the first row of the query results is returned as a table. If you need to handle errors when using this function, set `options` to `{ raise_error = false }` If the query fails and `raise_error` is set to false, it returns:

*   `nil` – indicating query failure

*   `errmsg` – indicating what failed

If the query fails and `raise_error` is set to `true` an exception is raised.

For more information see [msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row").

*Note*: To use this function include `require("msys.db");` and `require("msys.datasource");`.

**5.2.2.3. Extracting the Message Context**

Instead of using the functions defined in `policyeditor.lua` you can also extract information from the message context using **msg:context_get(msys.core.ECMESS_CTX_MESS, *`key`*)**          where `msg` is one of the parameters passed in to the callout. The following list shows the keys followed by sample return values:

*   `mailfrom_domain` – *`example.com`*

*   `mailfrom_localpart` – *`user`*

*   `mailfrom_string` – MAIL FROM:<*`user@example.com`*>

*   `rcptto_domain` – *`example.com`*

*   `rcptto_localpart` – *`user`*

*   `rcptto_string` – RCPT TO:<*`recipient@example.com`*>

For example, use the following syntax to extract the recipient's domain:

<a name="policy.scriptlets.rcptto.example"></a>

**Example 5.1. Getting the recipient's domain**

`local value = msg:context_get(msys.core.ECMESS_CTX_MESS, "rcptto_domain")`

If you are only interested in the recipient's domain, the code shown in [Example 5.1, “Getting the recipient's domain”](implementing.policy.scriptlets#policy.scriptlets.rcptto.example "Example 5.1. Getting the recipient's domain") is simpler to use than `msys.policyeditor.get_rcptto`—it does away with the need to extract the domain using a regular expression.

**5.2.2.4. Using `msys.expandMacro`**

The preferred method for accessing context variables is described in [Section 5.2.2.3, “Extracting the Message Context”](implementing.policy.scriptlets#policy.scriptlets.message.context "5.2.2.3. Extracting the Message Context") but not all context variables are accessible this way.

You can also use `msys.expandMacro` to access message or connection context variables. For example you can capture the EHLO string by using the following code:

`local ehlo_string = msys.expandMacro("%{vctx_conn:ehlo_string}"));`

To access message context variables use `vctx_mess` instead of `vctx_conn`. For a complete list of message and connection context variables see [Chapter 6, *Validation Context Variables*](policy.context.variables "Chapter 6. Validation Context Variables") .

### 5.2.3. A Simple EHLO Scriptlet

This section explains a simple script that runs in the EHLO phase and writes an entry to the `paniclog.ec` file.

Save the following script as `ehlo_phase.lua`

<a name="policy.scriptlets.ehlo.example"></a>

**Example 5.2. EHLO example**

```
require("msys.core")

local mod = {};

function mod:validate_ehlo(str, accept, vctx)
  print("ehlo string is:", msys.expandMacro("%{vctx_conn:ehlo_string}"));
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("ehlo_phase", mod);
```

At the top of this script, there's a requirement for the `msys.core` package. This package should be included in all scripts.

Notice that the function name is `validate_ehlo`. This name matches one of the callout function names described in [Section 5.2.1, “Callouts”](implementing.policy.scriptlets#implementing.policy.scriptlets.callouts "5.2.1. Callouts"). The use of the `registerModule` function is explained in the following section.

**5.2.3.1. Installing Your Script**

Once you've created your script there are a number of steps to take to ensure that it runs as expected.

If you haven't already done so, create a directory in the working copy of the repository to house your scripts. Create this directory under the `/opt/msys/ecelerity/etc/conf/default` directory if your scripts apply to the default. If not, use the appropriate subcluster or node-specific directory. Make sure you change the ownership of this directory to `ecuser` by issuing the command **chown ecuser:ecuser *`dir_name`***                           .

### Note

Files and directories that are under revision control must be owned by `ecuser`. Beginning with version 3.0.17, **eccfg** sets the ownership of all new files/directories to `ecuser`, prior to calling the actual **svn add**     command.

A detailed description of best practices for adding script files to the repository is given in [Section 5.6, “Best Practices for Manually Created Policy Scripts”](policy.best.practices "5.6. Best Practices for Manually Created Policy Scripts").

Copy the script `ehlo_phase.lua` to this directory and change the ownership and group to `ecuser`.

From the directory above your newly created directory use **eccfg** to add both the directory and the `ehlo_phase.lua` script to the repository. Do this by issuing the command **eccfg commit --username admin --password *`admin_passwd`* --add-all**                                                              .

Apply your changes by issuing the command **`config reload`**         from the system console. If there are errors in your script then the configuration file may not reload.

Open the web UI so that you can create a script scope named `ehlo_phase` inside the `scriptlet "scriptlet"` scope. Set the script name to `ehlo_phase`. Set the `source` option of this scope to "*`myscripts`*.ehlo_phase" replacing *`myscripts`* with the name of the directory that you created. Here's what the entire scriptlet stanza might look like:

<a name="policy.scriptlets.configuration"></a>

**Example 5.3. scriptlet configuration**

```
alerting {}

scriptlet "scriptlet" {
  # this loads default scripts to support enhanced control channel features
  script "boot" {
    source = "msys.boot"
  }
  # this loads the user-defined script
  script "ehlo_phase" {
    source = "myscripts.ehlo_phase"
  }
}
```

### Note

You can use either a ‘`.`’ or a ‘`/`’ as a directory separator.

Lua looks for scripts in the repository working directories. If your script has been saved to a top level directory, you need only specify the script name when defining the `source` option. Otherwise specify the relative path to the script separating directories using the ‘`/`’ character. In the example above, the `ehlo_phase.lua` file is in the `/opt/mys/ecelerity/etc/conf/default/myscripts` directory. Names of scripts can be anything you like, as long as the name is a valid file system name and does not cause an error when the configuration file is parsed.

The name of the `script` scope within the scriptlet module can also be anything of your choosing though it is good practice to use a name that describes the phase that the script runs in. Failure to register a module or misregistration does not result in an error when the system console command **`config reload`**         is issued. At runtime your script simply will not execute.

When you've finished installing your script, inject an email and confirm that your script has executed by looking for the entry ehlo string is: *`ehlo name`* in the panic log.

### Note

Scripts created manually cannot be edited through the web UI. Likewise, scripts created using the configuration editor should not be changed manually.

### 5.2.4. Setting the Priority of a Message

In some circumstances you may wish to deliver certain messages ASAP. You can do this by setting the `priority` of a message in the following way:

```
require 'msys.core'
require 'msys.extended.message'

local mod = {}

function mod:validate_set_binding(msg)
  print("mod:validate_set_binding: Setting msg priority to 1")
  msg.priority = 1;
end

msys.registerModule('binder', mod)
```

Message priority is a bit field in the ec_message struct, so the only valid values are 0 and 1\. The message priority is set to `0` when a message is created. Set the message priority to `1` to create a high priority message. Normally messages are pulled from the queue in the order they were added. When a message priority is set to `1`, that message will be pulled first from whatever queue it is on.

Use `msg.priority` to read the priority of a message.

### Note

It is important not to overuse the priority setting. High priority messages should be reserved for messages that need to go out immediately, before other messages. Keeping high priority messages to a low percentage of the total message volume is important so the high priority messages do not cause delays for normal priority messages. A common use case for high priority messages is sending out password resets in the midst of a major mail campaign.

### 5.2.5. Assign a Binding Based on the Sender's Domain

This script extracts the domain from the message return path and assigns the message to a binding with the matching name. For instance, if mail is sent to anyone at `example.com` and the binding `example.com` exists, then the email is assigned to the `example.com` binding. Otherwise the email will use the default binding. The suggested name for this script is `set_binding.lua`.

<a name="policy.scriptlets.binding.example"></a>

**Example 5.4. Set binding example**

```
require("msys.policyeditor");
require("msys.core");
local mod = {};

function mod:validate_set_binding(msg)
  local ctx = {
    ec_message = msg,
  };
  local vars = {};
  local sender = msys.policyeditor.get_mailfrom(ctx, {}, {});
  -- use regex
  msys.policyeditor.pcre_match(ctx, vars, { subject = sender, pattern = "(?P<user>(\\w+\\.)*\\w+)@(?P<domain>.*)" });
  if (vars["$domain"]) then
    msys.policyeditor.set_binding(ctx, {}, { binding = vars["$domain"] });
  end
  -- print for debugging purposes only
  print("Confirming entry in panic log.");
  print(vars["$user"]);
  print(vars["$domain"]);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("set_binding", mod);
```

The function name, `validate_set_binding`, ensures that this script runs at the set_binding phase. Any code that you wish to execute during this phase should appear inside this function.

Note that at the top of this script, there's a requirement for the `msys.policyeditor` package. This is the same package that the Web UI uses for the policy configuration editor. This script uses the `pcre_match` and the `set_binding` functions that are defined in this package.

### Note

You can use this function to set the binding to the `default` binding. For more information see [the section called “The "default" Binding”](conf.ref.binding#conf.ref.binding.default "The "default" Binding").

The `msg` parameter is copied to a field named `ec_message` in a local table named `ctx`. This table is passed as the first parameter to the `policyeditor.pcre_match` helper function.

For more information about using regular expressions from within a Lua script see [Section 3.10.5, “Using Regular Expressions with the Policy Editor”](web3.policy.editor#web3.policy.editor.regex "3.10.5. Using Regular Expressions with the Policy Editor"). In the `msys.policyeditor.set_binding` function, there are actions taken to determine whether the binding is assignable so this function can save you a lot of work.

The `print` statements shown in the script above are for debugging purposes only and write entries to the `paniclog.ec`. If this script is in place and an email is sent from `alice@gmail.com`, then the following entries should appear in the `paniclog.ec` file.

```
1251200446:scriptlet: Confirming entry in panic log.
1251200446:scriptlet: alice
1251200446:scriptlet: gmail.com
```

When any email is received and the binding `gmail.com` exists, then there should be an entry in the `mainlog.ec` with the final field showing the binding assignment. The example below shows that an email from `alice@gmail.com` has in fact been assigned to the binding `gmail.com`.

```
1251200446@B1/00-01974-EBDC39A4@B1/00-01974-EBDC39A4@D0/00-01974-EBDC39A4@R »
  @mary@gmail.com@alice@gmail.com@192.168.0.5@514@esmtp@default@gmail.com
```

For more information about the format of the `mainlog.ec` file see [Section E.1.1, “The `mainlog.ec` Format”](log_formats.version_3#log_formats.mainlog3 "E.1.1. The mainlog.ec Format").

When no binding identical to the domain name exists, no binding assignment will be made and the email will use the default binding.

There are several values that a module can return:

*   `msys.core.VALIDATE_CONT` – continue with validation routines.

*   `msys.core.VALIDATE_DONE` – do not execute any more validation hooks from the same phase.

*   `msys.core.VALIDATE_AGAIN` – this validation routine is doing something that blocks, so call us again later to see if we have the answer.

msys.core.VALIDATE_CONT is used most often and simply continues with validation routines. msys.core.VALIDATE_DONE is used when no further validation hooks will be called for this mail. For example, it might be used after sending a 550 code.

In order for your code to execute, you must register your module using the `registerModule` function. This function is explained in more detail in [Section 5.2.3.1, “Installing Your Script”](implementing.policy.scriptlets#policy.scriptlets.binding.installation "5.2.3.1. Installing Your Script"). Don't forget to add the appropriate script scope to the scriptlet module. This is also described in [Section 5.2.3.1, “Installing Your Script”](implementing.policy.scriptlets.php#policy.scriptlets.binding.installation "5.2.3.1. Installing Your Script").

To test your script you might want to create a test binding to use with a test email. The example below shows a binding named "disappear.com" with the blackhole option set to `internal`.

```
Binding "disappear.com" {
  Blackhole = "internal"
}
```

Any email sent from `disappear.com` should show a main log entry with the binding `disappear.com`. Test your script by injecting email from "anyone@disappear.com". You can confirm the results by looking at the log entries described in [Section 5.2.5, “Assign a Binding Based on the Sender's Domain”](implementing.policy.scriptlets#policy.scriptlets.binding "5.2.5. Assign a Binding Based on the Sender's Domain").

### 5.2.6. Querying a Database

This script extracts an identifier from a header and queries a datasource for a binding name based on this header. It then assigns the email to the binding returned from the query.

The SQLite executable is located in the `/opt/msys/3rdParty/bin` directory. Add this directory to your `PATH` variable and you can create a database by invoking SQLite issuing the command **sqlite3 *`db_name`***            . In this example, the database is created in the `/opt/msys/ecelerity/etc/conf/default/dbs/` directory by issuing the command **`sqlite3 bindings.db`**              from that same directory. Find the table creation statement below:

CREATE TABLE `customer_binding` (
 `customer_id` integer PRIMARY KEY,
 `binding` text NOT NULL
);

The datasource definition in the configuration file is as follows:

```
datasource "bindingsdb" {
  uri = ( "sqlite:/opt/msys/ecelerity/etc/conf/default/dbs/bindings.db" )
}
```

Find below the scriplet module definition used with this script.

```
scriptlet "scriptlet" {
  script "boot" {
    source = "msys.boot"
  }

  script "set_bindingdb" {
    source = "myscripts.set_binding"
  }
}
```

Since the scripting module is registered as `set_bindingdb` the script scope must use this name.

Save as `set_binding.lua`, though as noted earlier the file name may be any name of your choosing. However, you must use this filename when setting the source of the script.

<a name="policy.scriptlets.query.db.example"></a>

**Example 5.5. Querying a database**

```
require("msys.db")
require("msys.datasource");
require("msys.core")
require("msys.policyeditor")
local mod = {};

function mod:validate_set_binding(msg)
  local ctx = {
    ec_message = msg,
  };

  local cust_id = msys.policyeditor.get_header(ctx, {}, { header = "X-CustID" });

  -- example using sqlite ds cache
  local iter, err = msys.db.query("bindingsdb", [[
    SELECT binding FROM customer_binding WHERE
    customer_id = ? LIMIT 1]], { cust_id }, {});
  if iter then
    local row;
    for row in iter do
      msys.policyeditor.set_binding(ctx, {}, { binding = row.binding });
    end
  else
    -- print error to paniclog.ec
    print("set_binding: error querying binding:", err);
  end

  return msys.core.VALIDATE_CONT;
end
msys.registerModule("set_bindingdb", mod);
```

The `msys.policyeditor.get_header` looks for the header `X-CustID` and returns its associated value.

The `msys.db.query` function returns two values, an iterator and an error. Since `iter` is an iterator a foreach loop must be used. However, since the customer_id field is a primary key, only one row will be returned. The binding is then set to the value of the `binding` field. For more information about iterators in Lua see [http://www.lua.org/pil/7.1.html](http://www.lua.org/pil/7.1.html) . For a description of the arguments to this function see [the section called “The `msys.db.query` Function”](implementing.policy.scriptlets#policy.scriptlets.msys.db.query "The msys.db.query Function").

### 5.2.7. Removing a Message

This script checks the recipient of a message against a database of suppressed addresses. If there is a match, it kills the message.

<a name="policy.scriptlets.remove.message.example"></a>

**Example 5.6. Removing a message**

```
require("msys.db")
require("msys.datasource");
require("msys.core")
require("msys.policyeditor")
require("msys.dumper");

local mod = {};

function mod:validate_rcptto(msg, str, accept, vctx)
  local ctx = {
    ec_message = msg,
  };

  local rcptto = msys.policyeditor.get_rcptto(ctx, {}, {});
  local iter, err = msys.db.query("killdb", [[
    SELECT * FROM kill_addresses WHERE recipient = ? LIMIT 1]], { rcptto }, {});
  if iter then
    local row;
    for row in iter do
      -- print for debugging purposes only
      print(msys.dumper.Dumper(row));
      vctx:set_code(row['code'], row['note']);
      return msys.core.VALIDATE_DONE;
    end
  end
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("kill_message", mod);
```

This script uses the helper function `msys.policyeditor.get_rcptto` to get the message recipient and compare this value to entries in the `kill_addresses` table. Find below the DDL statement used to create this table as a SQLite table:

```
CREATE TABLE kill_addresses (
  recipient text NOT NULL,
  note text NOT NULL,
  code text NOT NULL
);
```

If there is a match, the validation context is changed to the values of the `code` and `note` fields.

The script dumps the value of the selected row so you should see the following entry in the `paniclog.ec`:

`1251719401:scriptlet: return { code="550", note="No such address", recipient="noreply@yahoo.com" }`

If the message is killed, then `return msys.core.VALIDATE_DONE;` is returned by this function. In this case, the message sender should receive the bounce message, `550 No such address`. There should also be a `rejectlog.ec` entry similar to the following:

```
1251721963: R="192.168.0.5:34814" L="192.168.0.50:25" C="C0/00-02000-BE2CB9A4" »
  PATH="default" PATH_GRP="default" P="reading body" E=550 M=scriptlet »
  CTXCONN=[can_relay=true,pathway=default,ehlo_domain=kubuntu,message_rcpt_count=1, »
  connection_rcpt_count=1,connection_message_count=1,ehlo_string="EHLO kubuntu"] »
  CTXMESS=[mailfrom_localpart=peter,mailfrom_domain=kubuntu.lan,rcptto_domain=yahoo.com, »
  mailfrom_string="MAIL FROM:<peter@kubuntu.lan>",rcptto_string="RCPT TO:<noreply@yahoo.com>", »
  rcptto_localpart=noreply] 550 No such address
```

Notice especially that the error message and the error code are those defined in the database and associated with the recipient `noreply@yahoo.com`. For more information about the `rejectlog.ec` file format see [Section E.1.2, “The rejectlog.ec Format”](log_formats.version_3#log_formats.rejectlog.ec3 "E.1.2. The rejectlog.ec Format").

### 5.2.8. Debugging Scriptlets

**Reloading the Configuration**

When adding a file or making changes to an existing file in the repository you should always reload the configuration to ensure that the configuration is up to date. Since a malformed configuration file won't reload, using **config reload**        is one way of validating your scriptlet syntax.

As long as your script is referenced from the configuration file, you can quickly check the syntax of any recent changes by issuing the command **`/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`**                         . If the reload fails look for a message such as:

```
Module 'scriptlet' instance 'scriptlet' initialization failed while
preparing to commit. Consult your vendor.
```

This usually indicates a syntax error in a script file. Note that reloading the configuration will not signal an error in *registering* the code module. Improperly registered scriptlets do not execute so will not display any error messages when the configuration is reloaded or at runtime. For information on registering scriplets see [Section 5.2.3.1, “Installing Your Script”](implementing.policy.scriptlets#policy.scriptlets.binding.installation "5.2.3.1. Installing Your Script").

### Note

You can also use the `/opt/msys/3rdParty/bin/rcluac` to check Lua syntax.

However, please note that Message Systems does not provide support for the use of any third party tools included or referenced by name within our products or product documentation; support is the sole responsibility of the third party provider.

**Look in the Panic Log**

Reloading the configuration also won't indicate other kinds of errors. To use the code in [Section 5.2.6, “Querying a Database”](implementing.policy.scriptlets#policy.scriptlets.query.db "5.2.6. Querying a Database") as an example, suppose that the `binding` field was misidentified as `bindings`. You would find the following error in `/var/log/ecelerity/paniclog.ec`:

`1251382104:datasource: failed to prepare`

This indicates a datasource error in creating the prepared statement.

You can also view the last few entries in the `paniclog.ec` file by using the [paniclog](console_commands.paniclog "paniclog") console command.

**Use the `print` Function**

If your Lua syntax is correct but you are not seeing the desired result you can log output to the panic log using the `print` function. Use of this function is demonstrated in the [Example 5.4, “Set binding example”](implementing.policy.scriptlets#policy.scriptlets.binding.example "Example 5.4. Set binding example"). Output is formatted showing a Unix timestamp, the module name and the print argument, as shown in the following example:

`1251200446:scriptlet: Confirming entry in panic log.`

You can also use the `print` statement to output error messages returned by functions. To again use the code in [Section 5.2.6, “Querying a Database”](implementing.policy.scriptlets#policy.scriptlets.query.db "5.2.6. Querying a Database"), the `print("set_binding: error querying binding:", err);` line creates a panic log entry such as the following when there is an SQL error:

```
1251382104:scriptlet: set_binding: error querying binding:
prepare: 1: no such column: bindings
failed to prepare:     SELECT bindings FROM customer_binding WHERE
customer_id = ? LIMIT 1
```

This is much more helpful than the terse log entry, `1251382104:datasource: failed to prepare`, clearly indicating that the query references a nonexistent column.

**Dumping a Variable**

To output structured information about a variable you can use the `msys.dumper.Dumper` function. To use this function include the code `require("msys.dumper");` and when you wish to output the value of a variable add the statement print(msys.dumper.Dumper(*`var_name`*));. For example, inspecting a row of the database table, `kill_addresses`, as shown in [Example 5.6, “Removing a message”](implementing.policy.scriptlets#policy.scriptlets.remove.message.example "Example 5.6. Removing a message") results in the following panic log entry:

```
1251390180:scriptlet: return { recipient="no-reply@mydomain.com",
  note="No email received at this address", code="550"}
```

The column names and their values are shown in the panic log.

**Scripts Not Owned by ecuser**

Prior to version 3.0.17, when a script is committed to the repository using **eccfg**, file ownership is not checked so a file owned by a user other than `ecuser` can be committed successfully. Such scriptlet files may not be able to execute. This can be confusing as there is no entry in the panic log that indicates the problem.

### Note

As of version 3.0.17, the ownership of any scripts committed to the repository is automatically changed to `ecuser` so script ownership is no longer an issue.

However, finding a `rejectlog.ec` entry such as the following may indicate this problem:

```
1251465831: R="192.168.0.5:52795" L="192.168.0.50:25" C="42/00-02001-76AD79A4" »
  PATH="default" PATH_GRP="default" P="reading body" E=421 M=scriptlet »
  CTXCONN=[can_relay=true,ehlo_string="EHLO kubuntu",connection_rcpt_count=1,»
  connection_message_count=1,ehlo_domain=kubuntu,pathway=default,message_rcpt_count=1] »
  CTXMESS=[rcptto_domain=mydomain.com,rcptto_string="RCPT TO:<no-reply@mydomain.com>",»
  mailfrom_string="MAIL FROM:<peter@kubuntu.lan>",mailfrom_domain=kubuntu.lan,»
  rcptto_localpart=no-reply,mailfrom_localpart=peter] 421 centos temporary issue, »
  please retry your message later
```

If the responsible module is the scriptlet module, as indicated by the field, `M=scriptlet`, and the final reject log field entry shows the error 421 *`server_name`* temporary issue, please retry your message later then the issue may be that the script file is not owned by `ecuser`. To remedy the error change the ownership of the script.

**Specifying an Incorrect Script File Name**

Be sure to specify the correct name of your script file as the `source` value within the scriptlet::script scope and be sure to drop the file extension.

For example, specifying the file name `myscripts.set_binding.lua` instead of `myscripts.set_binding` results in the following error:

```
...
Unable to open '/opt/msys/3rdParty/share/lua/5.1/myscripts/set_binding/lua.lua',
  errno=2 No such file or directory
```
**No Return Value**

Failure to return a legitimate value from a scriptlet means that the script will not execute properly. All scriptlets must return a value and it must be one of the following:

*   `msys.core.VALIDATE_CONT`

*   `msys.core.VALIDATE_DONE`

*   `msys.core.VALIDATE_AGAIN`

For example, if you remove the line, `return msys.core.VALIDATE_CONT;` from the script, [Example 5.2, “EHLO example”](implementing.policy.scriptlets#policy.scriptlets.ehlo.example "Example 5.2. EHLO example"), you should see errors similar to the following in the panic log:

```
1252601378:scriptlet-00147: validate_ehlo error: (null)
1252601378:scriptlet-00239: ehlo_phase error: (null)
```

These messages indicate a scriptlet error and give both the name of the script and the callout that failed.

### 5.2.9. Creating and Installing a Compiled Lua Module

**Configuration Change. ** This feature is available as of version 3.2.

As of version 3.2, you can build a native-C module that implements Lua functionality.

A sample module with extensive notes is provided in the `/opt/msys/ecelerity/docs/lua_sample.c` file. This sample adds functionality to enable suspend and resume actions and the ability to receive core Momentum data structures as parameters.

The examples in this file are trivial but demonstrate best-practice coding paradigms for integrating with Lua. To build these examples do the following:

1.  During installation install the Ecelerity developer tools on the build machine. For more information see [Section 1.9, “Installing Additional Packages”](install.additional.packages "1.9. Installing Additional Packages"). (To add this package after installation download msys-ecelerity-devel-*`version.os.arch`*.rpm from the Message Systems website.)

2.  Follow the instructions in `/opt/msys/ecelerity/docs/lua_sample.c` and compile the source code using `/opt/msys/ecelerity/bin/ecxs`.

    shell> /opt/msys/ecelerity/bin/ecxs -c *`/path/to/`*lua_sample.c
3.  Install the module so that it can be found at runtime:

    ```
    shell> cp lua_sample.so /opt/msys/ecelerity/libexec/lua
    shell> chmod +x /opt/msys/ecelerity/libexec/lua/lua_sample.so
    ```

To run the example create a Lua script with the following contents:

```
require("lua_sample");
local mod = {};

function mod:validate_data(msg, ac, vctx)
  print("size", lua_sample.size_by_two(msg))
  lua_sample.sleep(5);
  print("after sleep")
  print("answer", lua_sample.mul_by_seven(6));
end

msys.registerModule("sample", mod);
```

Save this file as `samplescript.lua` following the instructions given at [Section 5.6, “Best Practices for Manually Created Policy Scripts”](policy.best.practices "5.6. Best Practices for Manually Created Policy Scripts"). You must also configure a scriptlet stanza in your `ecelerity.conf` file:

```
scriptlet "scriptlet" {
  script "sample" {
   source = "samplescript"
  }
}
```

For detailed information about how Lua is implemented in Momentum see [Section 14.60, “scriptlet – Module”](modules.scriptlet "14.60. scriptlet – Module") and [Section 5.2, “Implementing Policy Using Scriptlets”](implementing.policy.scriptlets.php "5.2. Implementing Policy Using Scriptlets").

| [Prev](policy.validation)  | [Up](policy.php) |  [Next](default.policy.scriptlets.php) |
| 5.1. Validation and the Validation Context  | [Table of Contents](index) |  5.3. Default Policy Scriptlets |
