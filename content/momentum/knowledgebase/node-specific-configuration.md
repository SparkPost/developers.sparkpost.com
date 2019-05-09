# How do I add a node specific configuration

TL;DR - Add a node-local.conf file to /opt/msys/ecelerity/etc/conf/nodename 

If you have any configurations specific to a particular node, fallback values for configuration options in that node-local configuration file cannot be included via the /opt/msys/ecelerity/etc/conf/ecelerity.conf file. For an included file, the parent file's path is added to the search path, so if a file is included from /opt/msys/ecelerity/etc/conf/default/ecelerity.conf, the search path becomes:

/opt/msys/ecelerity/etc/conf/default:/opt/msys/ecelerity/etc:/opt/msys/ecelerity/etc/conf/global:»
/opt/msys/ecelerity/etc/conf/nodename:/opt/msys/ecelerity/etc/conf/default

If there are minor differences between nodes, you can include a local node configuration file as discussed in the following the example:

For one node, you want OPTION = "FOO".
For another node, you want OPTION = "BAR".

Do not define OPTION in the ecelerity.conf file.

Set OPTION in a node-local.conf file in all the /opt/msys/ecelerity/etc/conf/nodename directories.

Add an "include node-local.conf" statement to /opt/msys/ecelerity/etc/default/ecelerity.conf.

If there are major differences between node configurations, it is probably simpler to create a separate configuration file for each node as described in Section 16.1.1.1, “Repository Working Copy for Cluster”