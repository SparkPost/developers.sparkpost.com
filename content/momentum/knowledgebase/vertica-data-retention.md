# How do I change the data retention time in Vertica?

The default Vertica configuration in Momentum 4.x is set to delete log data older than six months. If you want to delete data more or less often, this number can be changed, with a very important caveat. The default configuration is as follows, in **/opt/msys/app/metrics-api/cron/config/default.json** :

	  "dataPurger": {
	    "msgEventsRetentionTime": 213,
	    "batchStatusRetentionTime": 25
	  },
The important entry is **msgEventsRetentionTime**. The number is in days. You can copy this entire stanza into **/opt/msys/app/metrics-api/cron/config/production.json**, change the msgEventsRetentionTime value, and save it. After you change this value, restart the Ecelerity service.

Here's the caveat: if you change this number to something less than 33 days, it will delete all of your log data. This is due to the fact that it deletes data in month-sized chunks. So, using some number a bit over the size of one month will prevent that from happening. Do not use a value less than 33.

For a maximum value, you may be limited by the storage amount allowed by your Vertica license, either the one you got from Message Systems or from HP directly; keep this in mind if you increase this number.

If you're curious about the actual code which uses this value, it is found in **/opt/msys/app/metrics-api/cron/purge_msg_events_data.js**. The relevant portion is:

	/*
	 * Use the configuration value for data retention, or default to current month - 7
	 * months so we don't accidentally blow away everything if someone removes the config option
	 */
	var date = getDate(config.dataPurger.msgEventsRetentionTime || 213);
	var purgeSql = 'SELECT drop_partition(\'' + config.vertica.schema + '.msg_events\', \'' + date + '\', true)';



