# Reading messages from the spool

**Purpose**   
Sometimes it is necessary to look at the content of a message to ensure that the correct changes have occurred to the message. The easiest way to do that is to read the message on the spool.

**Configuration**   
In most cases, messages are removed from the spool as soon as they are delivered. So if you want to examine the message, you must either suspend the domain or use the maildir module. To suspend the domain, set the Suspend_delivery option for that domain in ecelerity.conf. The following will suspend all delivery to the domain suspend.com

	domain suspend.com {
	  suspend_delivery = true
	}

The maildir module write the message to a configured directory. Some processing is done on the message so this may not be the best option in all choices. The base automation configuration configures the maildir module to write all messages to maildir.com to the spool. It has the following.

	maildir "maildir1" {
	  basedir = "/var/spool/ecelerity"
	  dirmode = 775
	  filemode = 664
	  create_users = true
	  domain_in_path = false
	  all_domains = false
	  domains = ( "maildir.com" )
	}

For automated tests there are macros and config properties for the suspended domain and the maildir domain.

	$Tools::CFG::maildir_domain - the config property for the maildir domain
	maildirDomain               - the macro for the maildir domain
	
	$Tools::CFG::suspended_domain - the config property for the suspended domain
	suspendDomain                 - the macro for the suspended domain


**Automated Tests**  
To read a message from the spool in an automated test, use the helper function Tools::Tools::getMessageFromSpool. You must inject the message to either the maildir domain or the suspended domain. To get the current set of options for this function use

	perldoc <pathto automation repo>/perllib/Tools/Tools.pm

**Manual Tests**   
When the message is received, get the message id for the message out of the mainlog. It is the second field, immediately after the UNIX timestamp. Get the part of the id that follows the /, because using the whole id will mess up find. Then do

	find /var/spool/ecelerity -name <msgid>

This may return more than 1 file. Get the one who's path matches the whole message id in the mainlog. This is the full path of the file on the spool.

For example, my message id was 20/00-29263-36AD7E4, so leaving off the characters upto and including the / I did

	# find /var/spool/ecelerity -name 00-29263-36AD7ED4.
	/var/spool/ecelerity/58A3A/10/00-29263-36AD7ED4.
	/var/spool/ecelerity/58A3A/20/00-29263-36AD7ED4.
	/var/spool/ecelerity/58A3A/30/00-29263-36AD7ED4.

My message contents would be in /var/spool/ecelerity/58A3A/20/00-29263-36AD7ED4. because that file matches my whole message id.