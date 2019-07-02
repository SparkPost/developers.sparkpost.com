# How do I set up authorization for the ec_console?

It is possible to limit access to the ec_console commands using the Authorization stanza. It will prevent console commands from being run unless an "allow" entry is explicitly configured. 

To use the Authorization stanza, authorization must be enabled within the listener or listen scope by setting Enable_Authorization to true.


Example:

	Authorization {
	
	 Role "root" {
	
	   allow = ( ".*" )
	
	 }
	
	 Role "dev" {
	
	   allow = (
	
	     "^delayed [0-9]+$"
	
	     "^dig [-0-9a-zA-Z.]+$"
	
	     "^domain [-0-9a-zA-Z.]+$"
	
	     "^domains$"
	
	     "^fail domain quiet [-0-9a-zA-Z.]+$"
	
	     "^pid$"
	
	     "^show inbound$"
	
	     "^show outbound$"
	
	     "^showqueue binding [-0-9a-zA-Z]+ [-0-9a-zA-Z.]+
	
	     (active|delayed) [0-9]+$"
	
	     "^summary$"
	
	     "^summary reset$"
	
	     "^sysinfo$"
	
	     )
	 }	
	}

 
For each user that will be using the console, you'll need to setup the console passwords using the method documented here:

https://developers.sparkpost.com/momentum/web-momo4/executable.ec_md5passwd/
 
Remember the file that was used to store the passwords. I'd recommend using /opt/msys/ecelerity/etc/console_passwd for this since that's what's recommended in the documentation.

 
Example:
 

	ec_md5passwd -f /opt/msys/ecelerity/etc/console_passwd root rootpassword
	
	ec_md5passwd -f /opt/msys/ecelerity/etc/console_passwd ecuser ecuserpassword

 

Next, you will have to add an AuthDigestMD5Parameters block to the Control_Listener's Listen block in your config. Your Control_Listener block should end up looking like the following:


	Control_Listener {
	 
	
	 Listen "/tmp/2025" {
	   Enable_authentication = "true"
	   Enable_authorization = "true"
	   AuthorizationParameters = [
	     uri = "groups:///opt/msys/ecelerity/etc/conf/default/console_roles"
	
	   ]
	   AuthDigestMD5Parameters = [
	     uri = "digest://[FILE]"
	
	   ]
	 }
	}

 

Replace [FILE] with the path to the location where the password file is store (or the existing file maintaining console passwords if one already exists).

 

## Setting up using Operating System Authentication
 

You will need to setup your Control_Listener as such:

	 
		Control_Listener {
		
		 Listen "/tmp/2025” {
		
		   File_Mode = 0666
		
		   Enable_Authorization = "true"
		
		   Enable_Authentication = "false"
		
		   AuthorizationParameters = [
		
		   uri = "groups:///opt/msys/ecelerity/etc/conf/default/console_roles"
		
		     ]
		 }
		}

 

The two notable changes from the standard setup are File_Mode = 0666 and Enable_Authentication = "false”.