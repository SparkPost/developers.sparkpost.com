# How to disable version control or eccfg/ecconfigd in Momentum?

You may want use your own version control like Git, use your own config your own config management tools, or not use it at all. 

Start with clean slate. Make sure you have pushed or pulled the latest commits and have no config errors. 

- Disable the "**eccfg pull**" cronjob set up in **/etc/cron.d/msys-ecelerity**. Comment out in-case you need it back one fine day. 

```  
/opt/msys/ecelerity/bin/eccfg put running  
/opt/msys/ecelerity/bin/eccfg pull --auto >/dev/null 2>&1  
```  

- The eccfg service (on all nodes) and ecconfigd process (on manager) should be stopped

```
/etc/init.d/eccfg stop
/etc/init.d/ecconfigd stop  
```

- Most importantly, *comment out* these two lines Momentum's init script on /**etc/init.d/ecelerity** so it doesn't try to invoke eccfg:

```  
echo “Pulling latest config files from repo”
`$BINDIR/eccfg pull --auto  
```

- Finally, to seal the deal, make sure it doesn't run during startup by turning ecconfigd off:

`chkconfig ecconfigd off`