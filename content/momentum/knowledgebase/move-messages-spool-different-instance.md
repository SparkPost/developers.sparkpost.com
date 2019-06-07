# How do I Move Messages in Spool to a Different Instance of Momentum?

If you have remaining messages in the spool during but are doing an upgrade, clean install, hardware migration, or a disaster happens, you will need to export the spool and import it to the new instance/cluster. To export, copy the existing spool, /var/spool/ecelerity/*, to a temporary directory of your choice on the new MTA. You can then use the Spool Import function to add the messages into the new spool. We also advise turning on the import log (https://developers.sparkpost.com/momentum/web-momo4/log_formats.importlog/). 

This will log the old message information along with the new message ID that will be assigned during import so it will be useful should you need to locate anything post-import. If the import is successful you will see entries in this log. If this is empty then your import has failed. 

For more information on Spool Import and the import log, please search 'spool import' and 'ec_logger import log' in our support documentation.