#How to monitor the Vertica Database status on all nodes?

You can run something like this and you will be able to see the status for all nodes:

```
echo "select node_name, node_state from nodes;" | /opt/vertica/bin/vsql -U 'vertica_dba'

ie: 

    node_name    | node_state
-----------------+------------
 v_msys_node0001 | UP
 v_msys_node0002 | UP
 v_msys_node0003 | UP
(3 rows)
```