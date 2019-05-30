
#How to Start/Stop/Restart Vertica

Vertica is very sensitive to server reboots done without shutting Vertica down properly. To restart it, you will have to use HP's AdminTools. Execute the following to get to the ASCII menu page for AdminTools:

su vertica_dba
/opt/vertica/bin/admintools

Once you are at the menu, you can use the options to:

```
1 to 'View Database Cluster State'
3 to 'Start Database'
4 to 'Stop Database' 
```

etc. 

Options 3 and 4 will start/stop the whole cluster. If you need to stop a specific node, use #7 'Advanced Menu' for other options.

While Vertica can be started using commands/scripts, this is the recommended and most effective method for Vertica administration and we advise that AdminTools be used for such tasks. If these steps fail, please contact Support.

More information on HP Vertica Administration can be found on the HP Vertica Support Website. For visual aids and HP documentation recent as of the date of this publication, please see [https://my.vertica.com/docs/7.1.x/HTML/index.htm#Authoring/ConceptsGuide/Other/HP_Vertica_Documentation.htm%3FTocPath%3DHP%2520Vertica%25C2%25AE%25207.1.x%2520Documentation%7C_____0](https://my.vertica.com/docs/7.1.x/HTML/index.htm#Authoring/ConceptsGuide/Other/HP_Vertica_Documentation.htm%3FTocPath%3DHP%2520Vertica%25C2%25AE%25207.1.x%2520Documentation%7C_____0)
