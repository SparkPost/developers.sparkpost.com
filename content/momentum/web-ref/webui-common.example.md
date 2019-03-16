| [Prev](smtp-response-codes)  | Part III. Appendices |  [Next](log_formats) |

## Example LDAP `webui-common.conf` File

This appendix provides a sample `webui-common.conf` file for use when setting up Active Directory authentication with Momentum 3.2.2\. For more information see [Section 2.3, “Setting Up Active Directory Authentication With Momentum 3.2.2”](conf.ldaps "2.3. Setting Up Active Directory Authentication With Momentum 3.2.2").

### Note

The ‘`»`’ character in the following example is used to indicate that the `query` should appear on one line. If this line is not broken up, it will be truncated in some forms of the documentation.

```
# Holds definitions needed by both ecelerity and eccmgr when used with
# the webui and user management database

# WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
# For this to actually work, you'll also need to set the Control_Listener
# to use AuthLoginParameters instead of AuthDigestMD5Parameters.
# WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING

Datasource "activedirectory_auth" {
  uri = ( "ldaps://ads.example.com" )
  no_cache = true
}

Datasource "activedirectory_groups" {
  uri = ( "ldaps://ads.example.com" )
  no_cache = true
}

ds_ldap {
  debug_level = "DEBUG"
}

ds_core {
  debug_level = "DEBUG"
}

auth_ds {
  Scheme "ecauth" {
    Authenticate {
      # Return the primaryGroupID field, which is an integer.
      # The auth_ds module will authenticate the user
      # if the following query succeeds, and the primaryGroupID is non-zero.
      query = "ldaps:///CN=$user,CN=Users,DC=ads,DC=example,DC=com?primaryGroupID??(&(objectClass=user)»
                 (|(memberOf=cn=Momo-SuperAdmins,cn=users,dc=ads,dc=example,dc=com)»
                 (memberOf=cn=Momo-Admins,cn=users,dc=ads,dc=example,dc=com)»
                 (memberOf=cn=Momo-Users,cn=users,dc=ads,dc=example,dc=com)))»
                 ?bindname=CN=$user%2cCN=Users%2cDC=ads%2cDC=example%2cDC=com,»
                 x-bindpw=$pass,x-disable-connection-cache=true"
      cache = "activedirectory_auth"
      map = [
        user = "%{username}"
        pass = "%{password}"
      ]
    }
    # Groups aren't supported in Momentum 3.2.0.
  }
}
```

| [Prev](smtp-response-codes)  | [Up](p.appendices) |  [Next](log_formats) |
| Appendix C. SMTP Response Codes  | [Table of Contents](index) |  Appendix E. Log Formats |
