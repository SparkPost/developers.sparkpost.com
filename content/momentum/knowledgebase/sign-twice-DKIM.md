# How do I sign twice with DKIM?

If you are already signing it via configuration, you would need to do is define a new opendkim stanza. For example, if you have opendkim "opendkim1", clone it and name it "opendkim2"

    opendkim "opendkim1" {  
      header_canon = "relaxed"  
      body_canon = "relaxed"  
      headerlist = ("from", "to", "message-id", "date", "subject", "Content-Type")  
      digest = "rsa-sha256"  
      key = "/opt/msys/ecelerity/etc/conf/dkim/%{d}/%{s}.key"  
      dkim_domain "ectest.example.com" {  
      selector = "dkim-s1024"   
      }  
      }
    
    opendkim "opendkim2" {  
    	header_canon = "relaxed"  
    	body_canon = "relaxed"  
    	headerlist = ("from", "to", "message-id", "date", "subject", "Content-Type")  
    	digest = "rsa-sha256"  
    	key = "/opt/msys/ecelerity/etc/conf/dkim/%{d}/%{s}.key"  
    	dkim_domain "ectest.example.com"  {  
    	selector = "dkim-s1024"  
    }  
    }
