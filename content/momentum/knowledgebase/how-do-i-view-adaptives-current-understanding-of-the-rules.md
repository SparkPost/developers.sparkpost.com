#How do I view Adaptive's Current Understanding of the Rules?

##Overview

With Base rules, overrides, custom domain settings, etc it can become difficult (especially at scale) to track what the cumulative impact of the rules are.  Using the scriptlet eval functionality within ec_console can give you a good picture of what the resulting ruleset is:

> scriptlet eval require ("msys.dumper")
> 
> scriptlet eval require ("msys.adaptive_rules")
> 
> scriptlet eval msys.dumper.Dumper(msys.adaptive_rules.Rules)

For example:

```
18:47:51 /tmp/2025> \pager
pager mode is now on
$PAGER is not set, assuming less
                                                                                                                                  18:47:57 /tmp/2025> scriptlet eval require ("msys.dumper")
table: 0x2aaac367a840
                                                                                                                                  18:48:05 /tmp/2025> scriptlet eval require ("msys.adaptive_rules")
table: 0x2aaac1924840


18:48:14 /tmp/2025> scriptlet eval msys.dumper.Dumper(msys.adaptive_rules.Rules)
return {
  ["126.com"]="163.com",
  ["163.com"]={
    configuration={ max_deliveries_per_connection={ 1, 7 }, max_outbound_connections={ 19, 39 } },
    responses={
      {
        action={ "suspend", "15 minutes" },
        code="^421 HL:REP",
        message="Description => Triggered temporary anti-spam policies on Netease, suspended for 15 minutes",
        trigger="1"
      },
...
[snip]
```