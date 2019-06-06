Generating ILF Report manually

If the ILF logger does not work for whatever reason and you are running Vertica, you can query the sum from it. 

On the  analytics node (adjust the time range accordingly):

	su - vertica_dba
	/opt/vertica/bin/vsql
	
	SELECT month(tdate_hour) tdate_hour, COUNT(*) COUNT FROM momo.msg_events WHERE event_type in (4) and YEAR(tdate_hour) = ‘2017’ GROUP BY MONTH(tdate_hour) ORDER BY MONTH(tdate_hour);


That will give the number of injections from 2017, month by month. 

If there’s 0 there, PROBABLY you may have had Vertica issues and started from the last epoch. Running that won’t cause problems, will take a bit seeing there’s a lot of stuff to run through but there is no issues with disk space since its just reading it.  Here’s a sample of how it looks like: 

	0]
	vertica_dba=> SELECT month(tdate_hour) tdate_hour, COUNT(*) COUNT FROM momo.msg_events WHERE event_type in (4) and YEAR(tdate_hour) = '2017' GROUP BY MONTH(tdate_hour) ORDER BY MONTH(tdate_hour);
	tdate_hour | COUNT
	------------+-------
	2 | 59
	3 | 19
	4 | 79
	5 | 120
	6 | 45
	7 | 82
	8 | 77
	9 | 6
	(8 rows)
