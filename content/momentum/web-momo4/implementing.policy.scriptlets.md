|     |     |     |
| --- | --- | --- |
| [Prev](policy)  | Chapter 62. Implementing Policy with Momentum |  [Next](policy.context.variables) |

## 62.2. Policy Scriptlets

Lua scripts provide you with the capability to express the logic behind your policy. Aside from being very convenient (policy scripts can be reloaded on the fly, allowing real-time adjustment of policy without interrupting service), the Momentum implementation has extremely low overhead and tightly integrates with the event-based architecture, being able to suspend processing until asynchronous operations (such as DNS resolution, or database queries) complete. Note that variables used in a policy script are scoped locally and only persist in the particular policy script in which it is defined. Use the [validation context](policy#policy.validation "62.1. Validation and the Validation Context") to persist data over different policy phases and policy scripts.

This section of the manual explains how to implement basic Lua policy scripts. For more information about this language, see [http://www.lua.org](http://www.lua.org).

### Warning

Many Lua functions act as wrappers for C code, which means that the calling code needs to take steps to ensure safety. When calling a C API, make sure that all the arguments are valid as an unexpected `nil` may crash the system or have other undesirable results. Additionally, the data structures returned from C APIs are often shared between C and Lua. The most important consequence of this is that arrays coming from C APIs must only be accessed with existing indices, as opposed to Lua which simply returns `nil` on out-of-bounds access. Failure to do this on a Lua table connected to a C array will cause the system to fail.

### 62.2.1. Helper Functions

The `/opt/msys/ecelerity/libexec/scriptlets/msys/` and `/opt/msys/ecelerity/libexec/embed/lua/msys/` directories contain modules with useful helper functions.

For a list of all Lua Functions, see [Chapter 64, *Lua Functions Summary*](lua.summary_table "Chapter 64. Lua Functions Summary") .

### 62.2.2. Callouts

All user-defined scripts must implement one or more of the following function calls:

*   init()

    The registration point for long-lived states, such as timed events or control functions. You should avoid using the init routine unless necessary, as it ties up an additional interpreter on the main scheduler thread. In the current architecture, things set up via the init routine have strong thread affinity with the scheduler thread and are not suitable for scheduling jobs to thread pools.

    The init routine must return `true` if it successfully initializes. Any other return value results in a failure to apply the configuration.

*   deinit()

    The resource destruction point for things that were set up in the init phase. This function must return `true` when successful, otherwise resources may not be cleaned up.

*   validate_connect(accept_construct, vctx)

    This function maps to the `validate_connect` C hook of the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_ehlo(str, accept_construct, vctx)

    This function maps to the `validate_ehlo` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_mailfrom(str, accept_construct, vctx)

    This function maps to the `validate_mailfrom` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_rcptto(ec_message, str, accept_construct, vctx)

    This function maps to the `validate_rcptto` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_data(ec_message, accept_construct, vctx)

    This function maps to the `validate_data` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_data_spool(ec_message, accept_construct, vctx)

    This function maps to the `validate_data_spool` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_data_spool_each_rcpt(ec_message, accept_construct, vctx)

    This function maps to the `validate_data_spool_each_rcpt` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_set_binding(ec_message)

    Maps to the `validate_set_binding` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, or `msys.core.VALIDATE_DONE`.

*   validate_rcptto_list(list_node, vctx)

    Maps to the `validate_rcptto_list` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_rcptto_list_final(node, vctx)

    Maps to the `validate_rcptto_list_final` C hook from the validation subsystem. Return values are one of `msys.core.VALIDATE_CONT`, `msys.core.VALIDATE_AGAIN`, or `msys.core.VALIDATE_DONE`.

*   validate_dealloc()

    This callout maps to the `validate_local_dealloc` C hook from the validation subsystem. This callout is only invoked if it is defined and if an earlier phase of processing invoked Lua code from this module. Its purpose is to allow your code a chance to act when the validate_context is torn down. If you used "self" in an earlier validation phase, it will be available in this function. You do not (and should not) need to define this callback unless you are doing something esoteric and accessing resources outside of the usual garbage collection mechanism. In most cases, your per-session state will be collected automatically.

If you attempt to add a function call that does not match one of the above function signatures, you'll see an error message similar to the following:

1251465322:scriptlet: no usable methods found for module
   *`mod_name`* in registerModule call

If you are calling Lua helper functions, copy the `msg` parameter into a table as shown in the following:

```
function mod:validate_set_binding(msg)
  local ctx = {
    ec_message = msg
  };
  ...
end
```

At the moment, only the `msg` parameter is used by existing helpers. Be sure to map it to a field named `ec_message` as this is the name of the underlying type.

### 62.2.3. Default Policy Scripts

Default Lua policy scripts are included with Momentum for receiving. These scriptlets are found in the `/opt/msys/ecelerity/libexec/scriptlets/msys/default_policy.lua` file. These files are discussed in detail in the [Default Policy User Guide](https://support.messagesystems.com/docs/web-policy/index).

In order to use the default policy scriptlets, you must add the `/opt/msys/ecelerity/etc/sample-configs/default_policy.conf` file to your configuration. For instructions on adding a configuration file, see [Section 15.1.5, “Adding Configuration Files”](conf.overview#conf.adding.configuration.files "15.1.5. Adding Configuration Files").

You will likely need to alter the `default_policy.conf` file to suit your circumstances—by only enabling specific scanners, for example.

In the `default_policy.conf` file, you should also enable the datasource(s) suitable for your language encoding. A datasource is necessary for the keyword filter, which is described at the bottom of the `/opt/msys/ecelerity/etc/conf/default/dp_config.lua` file. The keyword file, `dp_config.lua`, and `custom_policy.lua` must be copied from `/opt/msys/ecelerity/etc/sample-configs/` to `/opt/msys/ecelerity/etc/conf/default/`.

### 62.2.4. Creating Policy Scripts

Following best practices when creating policy scripts is important, especially in a cluster environment when scripts are used on more than one node. Scripts should take advantage of Momentum's built-in revision control and be added to the repository using the [eccfg](executable.eccfg "eccfg") command.

To create a policy script, perform the following:

1.  Take steps to avoid conflicts.

    When working with files that are under revision control, it is important to take steps to avoid conflicts with changes made elsewhere in the system and to be able to track changes. For this reason, perform the following actions before creating any policy scripts:

    *   Provision a user account for each admin user, so that the history in the repository is meaningful.

    *   Ensure that you have the latest updates on the node where you are creating the scripts by running **`/opt/msys/ecelerity/bin/eccfg pull`**      .

        ### Note

        Pay special attention to the instructions for using the **pull** command—if the configuration is updated your current directory may be invalidated. For more information, see [eccfg](executable.eccfg "eccfg").

2.  Create a directory for your script.

    Scripts should be created in a directory that is under revision control. Create a directory for your scripts in the working copy of the repository on a node where you intend to run the script:

    *   If your scripts apply to all nodes in the cluster, create this directory under the `/opt/msys/ecelerity/etc/conf/default` directory or store them in the `global` directory. Typically, policy scripts are saved under Momentum's default working copy directory `/opt/msys/ecelerity/etc/conf/default/scripts`.

    *   If your scripts apply to only one node, create a node-specific directory.

3.  Write your script.

    All scripts must

    *   Include the `msys.core` package.

    *   Implement one or more of the function calls described in [Section 62.2.2, “Callouts”](implementing.policy.scriptlets#implementing.policy.scriptlets.callouts "62.2.2. Callouts").

    *   Return one of the following values:

        *   `msys.core.VALIDATE_CONT` – continue with validation routines.

        *   `msys.core.VALIDATE_DONE` – do not execute any more validation hooks from the same phase.

        *   `msys.core.VALIDATE_AGAIN` – this validation routine is doing something that blocks, so call again later.

    The following is a simple script that runs in the EHLO phase and writes an entry to the `paniclog.ec` file. To create this example, same the script as a file named `ehlo_phase.lua` in the appropriate directory.

    <a name="policy.scriptlets.ehlo.example"></a>

    **Example 62.2. EHLO Example**

    ```
    require("msys.core");

    local mod = {};

    function mod:validate_ehlo(str, accept, vctx)
      print("ehlo string is:", msys.expandMacro("%{vctx_conn:ehlo_string}"));
      return msys.core.VALIDATE_CONT;
    end

    msys.registerModule("ehlo_phase", mod);
    ```

    Note that the script requires the `msys.core` package, the function name `validate_ehlo` matches the callout described in [Section 62.2.2, “Callouts”](implementing.policy.scriptlets#implementing.policy.scriptlets.callouts "62.2.2. Callouts"), and the script returns a legitimate value `msys.core.VALIDATE_CONT`.

    Failure to return a legitimate value from a scriptlet means that the script will not execute properly. For example, if you remove the line, `return msys.core.VALIDATE_CONT;` from the script, you should see errors similar to the following in the `paniclog`:

    ```
    1252601378:scriptlet-00147: validate_ehlo error: (null)
    1252601378:scriptlet-00239: ehlo_phase error: (null)
    ```

    These messages indicate a scriptlet error and give both the name of the script and the callout that failed.

4.  Update your configuration to properly reference your script.

    After writing a script and saving it to the repository, you must include it in the [`scriptlet`](modules.scriptlet "71.60. scriptlet - Lua Policy Scripts") module using a `script` stanza in your `ecelerity.conf` file.

    For the example script, create a script scope named `ehlo_phase` inside the `scriptlet "scriptlet"` scope. Set the script name to `ehlo_phase`. Set the `source` option of this scope to "*`myscripts`*.ehlo_phase" replacing *`myscripts`* with the name of the directory that you created. The scriptlet stanza should be similar to:

    <a name="policy.scriptlets.configuration"></a>

    **Example 62.3. Scriptlet Configuration**

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

    Lua looks for scripts in the repository working directories. If your script has been saved to a top level directory, you need only specify the script name when defining the `source` option. Otherwise, specify the relative path to the script separating directories using the ‘`/`’ character. In the example above, the `ehlo_phase.lua` file is in the `/opt/mys/ecelerity/etc/conf/default/myscripts` directory. Names of scripts can be anything you like, as long as the name is a valid file system name and does not cause an error when the configuration file is parsed.

    ### Note

    You can use either a ‘`.`’ or a ‘`/`’ as a directory separator.

    Be sure to specify the correct name of your script file as the `source` value within the scriptlet::script scope and be sure to drop the file extension.

    For example, specifying the file name `myscripts.ehlo_phase.lua` instead of `myscripts.ehlo_phase` results in the following error:

    ```
    ...
    Unable to open '/opt/mys/ecelerity/etc/conf/default/myscripts/ehlo_phase/lua.lua',
      errno=2 No such file or directory
    ```

    The name of the `script` scope within the scriptlet module can also be anything of your choosing though it is good practice to use a name that describes the phase that the script runs in. Failure to register a module or misregistration does not result in an error when the console command **`config reload`**         is issued. At runtime, your script simply will not execute.

    For additional details about editing your configuration files, see [Section 15.1.4, “Changing Configuration Files”](conf.overview#conf.manual.changes "15.1.4. Changing Configuration Files").

5.  Check the validity of your script.

    Since a malformed configuration file will not reload, using **config reload**        is one way of validating your scriptlet syntax. After your configuration has been changed, issue the command:

    **`/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`**

    If there are errors in your script, the reload may fail and display a message such as the following:

    ```
    Module 'scriptlet' instance 'scriptlet' initialization failed while
    preparing to commit. Consult your vendor.
    ```

    This message usually indicates a syntax error in a script file. Note that reloading the configuration will not signal an error in *registering* the code module. Improperly registered scriptlets do not execute, so no error messages will be displayed when the configuration is reloaded or at runtime.

    If the configuration fails to reload, Momentum continues to function using the running configuration and ignoring your changes.

    In a cluster, if you commit before you test on the local node, you risk pushing out a broken configuration across your cluster/subcluster. Therefore, it is best practice to try the **config reload**        locally until you are happy that the configuration operates as expected, before making a commit. This may need to be staged; for instance, you will likely need to push out DuraVIP™ or binding configuration changes before policy script changes can be made.

    ### Note

    You can also use the `/opt/msys/3rdParty/bin/rcluac` to check Lua syntax.

    However, please note that Message Systems does not provide support for the use of any third party tools included or referenced by name within our products or product documentation; support is the sole responsibility of the third party provider.

6.  Debug your script.

    Successfully reloading the configuration file does not guarantee that your script will run. Your script may be syntactically correct but have semantic errors. As always, you should test the functionality of scripts before implementing them in a production environment.

    The following are some methods that can be used to debug your script:

    *   Look in your `paniclog`.

        Reloading the configuration will not indicate other kinds of errors, such as a misidentified `binding` field. In this case, you would find the following error in `/var/log/ecelerity/paniclog.ec`:

        `1251382104:datasource: failed to prepare`

        This indicates a datasource error in creating the prepared statement.

        You can also view the last few entries in the `paniclog.ec` file by using the [paniclog](console_commands.paniclog "paniclog") console command.

    *   Use the `print` function.

        If your Lua syntax is correct but you are not seeing the desired result, you can log output to your `paniclog` using the `print` function. Output is formatted showing a Unix timestamp, the module name and the print argument, as shown in the following example:

        `1251200446:scriptlet: Confirming entry in panic log.`

        You can also use the `print` statement to output error messages returned by functions. For example, the `print("set_binding: error querying binding:", err);` line creates a `paniclog` entry such as the following when there is an SQL error:

        ```
        1251382104:scriptlet: set_binding: error querying binding:
        prepare: 1: no such column: bindings
        failed to prepare:     SELECT bindings FROM customer_binding WHERE
        customer_id = ? LIMIT 1
        ```

        This log entry clearly indicates that the query references a nonexistent column and can be much more helpful than the terse log entry.

    *   Dump a variable.

        To output structured information about a variable, you can use the `msys.dumper.Dumper` function. To use this function, include the code `require("msys.dumper");`. When you wish to output the value of a variable, add the statement print(msys.dumper.Dumper(*`var_name`*));.

        The following is an example of a `paniclog` entry:

        ```
        1251390180:scriptlet: return { recipient="no-reply@mydomain.com",
          note="No email received at this address", code="550"}
        ```

7.  Commit your changes.

    Once you are satisfied that your scripts function correctly, commit your changes. From the directory above your newly created directory, use **eccfg** to add both the directory and the script to the repository:

    *   If you are adding a new script, issue the command

        **eccfg commit ––username *`admin_user`* ––password *`passwd`* ––add-all --message *`message here`***                                                                                             .

    *   If you are editing a script, you need not use the `––add-all` option.

8.  Repply your changes, if required.

    In all cases, edits made to the local configuration will need to be manually applied to the node via **config reload** . The **eccfg commit**        command will not do it for you. If you have not reloaded your configuration, issue the console command:

    **`/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`**

    If your changes affect more than one node, each node will check for an updated configuration each minute and automatically check out your changes and issue a **config reload** .

### 62.2.5. Examples

This section includes examples of using policy scripts.

**62.2.5.1. Setting the Priority of a Message**

In some circumstances, you may wish to deliver certain messages ASAP. You can do this by setting the `priority` of a message in the following way:

```
require("msys.core");
require("msys.extended.message");

local mod = {};

function mod:validate_set_binding(msg)
  print("mod:validate_set_binding: Setting msg priority to 1");
  msg.priority = 1;
  return msys.core.VALIDATE_CONT;

end

msys.registerModule("binder", mod);
```

Message priority is a bit field in the ec_message struct, so the only valid values are 0 and 1\. The message priority is set to `0` when a message is created. Set the message priority to `1` to create a high priority message. Normally, messages are pulled from the queue in the order they were added. When a message priority is set to `1`, that message will be pulled first from whatever queue it is on.

Use `msg.priority` to read the priority of a message.

### Note

It is important not to overuse the priority setting. High priority messages should be reserved for messages that need to go out immediately, before other messages. Keeping high priority messages to a low percentage of the total message volume is important so the high priority messages do not cause delays for normal priority messages. A common use case for high priority messages is sending out password resets in the midst of a major mail campaign.

|     |     |     |
| --- | --- | --- |
| [Prev](policy)  | [Up](policy) |  [Next](policy.context.variables) |
| Chapter 62. Implementing Policy with Momentum  | [Table of Contents](index) |  Chapter 63. Validation Context Variables |

