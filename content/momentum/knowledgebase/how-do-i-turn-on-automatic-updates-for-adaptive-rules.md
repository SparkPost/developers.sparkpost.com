# How Do I Turn on Automatic Updates for Adaptive Rules?

Updates of the default Adaptive Rules are not announced for proprietary reasons, but Momentum does pull the newest version every 6 hours. If your /opt/msys/ecelerity/msys/adaptive_rules.lua file is not up to date, you can check the steps below.

1. This entry needs to be in /opt/msys/ecelerity/etc/liveupdate.conf
`
AdaptiveLiveUpdates=enabled
`
2. Make sure the lu_pull cron is enabled in /etc/cron.d/msys-ecelerity 

`
29 1,7,13,19 * * * root /opt/msys/ecelerity/bin/lu_pull >/dev/null 2>&1
`

Once both of these are in place, your default Adaptive Rules will update automatically. Make sure to commit these changes with eccfg if you wish to keep this configuration or maintain consistency across the cluster.