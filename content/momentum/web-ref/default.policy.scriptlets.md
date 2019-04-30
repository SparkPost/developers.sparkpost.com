|     |     |     |
| --- | --- | --- |
| [Prev](implementing.policy.scriptlets)  | Chapter 5. Implementing Policy with Momentum |  [Next](policy.implementing.php) |

## 5.3. Default Policy Scriptlets

As of version 3.2, default Lua policy scripts are included with Momentum for receiving. These scriptlets are found in the `/opt/msys/ecelerity/libexec/scriptlets/msys/default_policy.lua` file. These files are discussed in detail in the [Default Policy User Guide](https://support.messagesystems.com/docs/web-policy/index).

In order to use the default policy scriptlets you must add the `/opt/msys/ecelerity/etc/sample-configs/default_policy.conf` file to your configuration. For instructions on adding a configuration file see [Section 2.9, “Best Practices for Adding Configuration Files”](conf.adding.configuration.files "2.9. Best Practices for Adding Configuration Files").

You will likely need to alter the `default_policy.conf` file to suit your circumstances—by only enabling specific scanners, for example.

In the `default_policy.conf` file you should also enable the datasource(s) suitable for your language encoding. A datasource is necessary for the keyword filter, which is described at the bottom of the `/opt/msys/ecelerity/etc/conf/default/dp_config.lua` file. As of version 3.4, the keyword file, `dp_config.lua`, and `custom_policy.lua` must be copied from `/opt/msys/ecelerity/etc/sample-configs/` to `/opt/msys/ecelerity/etc/conf/default/`.

|     |     |     |
| --- | --- | --- |
| [Prev](implementing.policy.scriptlets)  | [Up](policy.php) |  [Next](policy.implementing.php) |
| 5.2. Implementing Policy Using Scriptlets  | [Table of Contents](index) |  5.4. Implementing Policy Using Sieve |
