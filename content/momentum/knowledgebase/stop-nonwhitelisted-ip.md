# Stop a non whitelisted host from succeeding a connection to Momentum

To prevent a successful connection being established if the IP/CIDR is not in your whitelist.  

You can use cidrdb ( https://developers.sparkpost.com/momentum/web-momo4/modules.cidrdb/ ) for whitelisting purposes, for example.
Here's also some Lua examples (second one querying a db) which you can use to start:

	require("msys.core");
	require("msys.extended.vctx");
	require("msys.audit");
	
	local mod = {};
	
	function mod:validate_connect(accept, vctx)
	local myipcount = msys.audit.inbound_session_count("/32", "SMTP");
	local max_con_per_ip = 2;
	
	 --Various methods could be used to determine the value of some_ip
	local some_ip = "127.0.0.1";
	local this_ip = msys.expandMacro("%{spfv1:i}");
	if this_ip == some_ip then
	max_con_per_ip = 1;
	end
	
	print("IP: " .. this_ip .. "Sessions: " .. myipcount);
	if myipcount > max_con_per_ip then
	vctx:disconnect(421, "Too many simultaneous connections from: " .. this_ip);
	return msys.core.VALIDATE_DONE;
	end
	
	return msys.core.VALIDATE_CONT;
	end
	
	msys.registerModule("connectionlimit", mod);
	
	  
	require("msys.db");
	require('msys.datasource');
	
	local mod = {};
	
	function mod:validate_data_spool_each_rcpt (msg, accept, vctx)
	
	local rowset, row, err;
	
	rowset, err = msys.db.query('devsqldb1', 'select * from sysmembers', {30});
	
	if rowset == nil then
	print("ERROR: " .. err);
	return;
	end
	
	for row in rowset do
	print("Print: MemberUID is: " .. row.memberuid .. " GroupUID is: " .. row.groupuid);
	end
	
	return msys.core.VALIDATE_CONT;
	end
	
	msys.registerModule("odbc_test", mod);

Please, remember these examples are provided as is and should be tested properly and modified to fit your environment.