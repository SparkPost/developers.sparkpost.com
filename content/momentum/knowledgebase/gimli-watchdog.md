# Create or increase Gimli watchdog interval

A watchdog kills a process when it stops responding after a certain time. You can manipulate the amount of time before a watchdog kicks in, allowing Momentum more leeway to do or finish whatever it was doing.

In the file **/opt/msys/ecelerity/etc/environment** (create if not present), add or update the watchdog (gimli) interval by editing their values.

The GIMLI_WATCHDOG_INTERVAL defaults at 60 seconds, so up it incrementally  it until you reach a balance of what you think is appropriate.

GIMLI_WATCHDOG_START_INTERVAL applies on startup. The idea is there’s a lot more going on when the system is booting up so it may need some extra time, so we give it an extra minute. 

	GIMLI_WATCHDOG_START_INTERVAL=360
	export GIMLI_WATCHDOG_START_INTERVAL
	GIMLI_WATCHDOG_INTERVAL=300
	export GIMLI_WATCHDOG_INTERVAL
