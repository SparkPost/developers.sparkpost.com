|     |     |     |
| --- | --- | --- |
| [Prev](operations.console)  | Chapter 4. Operations |  [Next](operations.postgresql) |

## 4.2. Console Commands

Besides the commands listed here, there are also module-specific console commands. Links to these commands are listed in [Section 13.3, “Module-Specific Console Commands”](module_specific_console_commands "13.3. Module-Specific Console Commands"). You can also create custom commands as described at [Section 4.2.12, “Custom Console Commands”](operations.console-commands#operations.console.lua "4.2.12. Custom Console Commands").

### Note

Preceding a command with `xml` will output the results in XML format.

### 4.2.1. Online Configuration Administration

*   [config](console_commands.config "config")

*   [module](console_commands.module "module")

*   [write config](console_commands.write_config "write config")

### 4.2.2. Information Summary

*   [sp_async](console_commands.sp_async "sp_async")

*   [binding summary](console_commands.binding_summary "binding summary")

*   [domain](console_commands.domain "domain")

*   [summary](console_commands.summary "summary")

*   [summary reset](console_commands.summary_reset "summary reset")

*   [signing_stats](console_commands.signing_stats "signing_stats")

*   [signing_stats reset](console_commands.signing_stats_reset "signing_stats reset")

*   [threads](console_commands.threads "threads")

*   [unlink stats](console_commands.unlink_stats "unlink stats")

### 4.2.3. Queue Size Reporting

*   [active](console_commands.active "active")

*   [binding active](console_commands.binding_active "binding active")

*   [binding delayed](console_commands.binding_delayed "binding delayed")

*   [delayed](console_commands.delayed "delayed")

### 4.2.4. Queue Administration per Domain

*   [fail domain](console_commands.fail_domain "fail domain")

*   [fail domain quiet](console_commands.fail_domain_quiet "fail domain quiet")

*   [flush domain](console_commands.flush_domain "flush domain")

*   [rebind](console_commands.rebind "rebind")

*   [reroute queue](console_commands.reroute_queue "reroute queue")

*   [showqueue](console_commands.showqueue "showqueue")

### 4.2.5. Queue Administration per Binding per Domain

*   [binding flush domain](console_commands.binding_flush_domain "binding flush domain")

*   [binding fail domain](console_commands.binding_fail_domain "binding fail domain")

*   [binding fail domain quiet](console_commands.binding_fail_domain_quiet "binding fail domain quiet")

*   [rebind](console_commands.rebind "rebind")

*   [showqueue](console_commands.showqueue "showqueue")

### 4.2.6. Message Administration

*   [message details](console_commands.message_details "message details")

*   [message fail](console_commands.message_fail "message fail")

*   [message fail quiet](console_commands.message_fail_quiet "message fail quiet")

*   [message retry](console_commands.message_retry "message retry")

*   [spool_in](console_commands.spool_in "spool_in")

### 4.2.7. Connections Reporting

*   [count](console_commands.count "count")

*   [show inbound](console_commands.show_inbound "show inbound")

*   [show outbound](console_commands.show_outbound "show outbound")

### 4.2.8. Memory Usage Reporting

*   [memory](console_commands.memory "memory")

### 4.2.9. Log Information and Manipulation

*   [paniclog](console_commands.paniclog "paniclog")

*   [reopen logs](console_commands.reopen_logs "reopen logs")

### 4.2.10. Utilities

*   [dig](console_commands.dig "dig")

*   [dns_cache](console_commands.dns_cache "dns_cache")

*   [help](console_commands.help "help")

*   [\pager](console_commands.pager "\pager")

*   [pid](console_commands.pid "pid")

*   [refresh domain](console_commands.refresh_domain "refresh domain")

*   [spool import](console_commands.spool_import "spool import")

*   [spool import_poll](console_commands.spool_import_poll "spool import_poll")

*   [sysinfo](console_commands.sysinfo "sysinfo")

*   [tls](console_commands.tls "tls")

*   [trace smtp](console_commands.trace_smtp "trace smtp")

*   [version](console_commands.version "version")

### 4.2.11. Shutting Down

*   [shutdown](console_commands.shutdown "shutdown")

### 4.2.12. Custom Console Commands

In addition to the built-in console commands it is possible to create your own commands using the Lua function [msys.registerControl](lua.ref.msys.registerControl "msys.registerControl"). If, for example, you have domains that are heavily throttled and discard messages that are over the limit, you can create a console command to push emails for these domains into the delayed queue:

<a name="operations.console.lua.registerControl"></a>

**Example 4.1. Create console command**

```
require("msys.core");

local function delay_domain(cc)
  local domain = cc.argv[1];
  local dr = msys.core.dns_get_domain(domain);

  if dr ~= nil then
    print ("Domain delayed as requested");
    msys.core.mail_queue_delay_domain(dr, "451 4.4.1 [internal] manually delayed domain");
  end
end

msys.registerControl("delay_domain", delay_domain);
```

This code creates the ec_console command: **delay_domain *`domain`***           . For instructions on inplementing Lua scripts see [Section 14.60, “scriptlet – Module”](modules.scriptlet "14.60. scriptlet – Module").


|     |     |     |
| --- | --- | --- |
| [Prev](operations.console)  | [Up](operations) |  [Next](operations.postgresql) |
| 4.1. The Momentum System Console  | [Table of Contents](index) |  4.3. PostgreSQL |
