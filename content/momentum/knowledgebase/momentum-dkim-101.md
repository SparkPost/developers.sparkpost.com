# Momentum DKIM 101

## Creating DKIM keys

```
openssl genrsa -out selector01.domain.pem 1024 # creates this 1024bit key file
```

```
openssl rsa -in selector01.domain.com -out domainpublickey.pub  -pubout -outform PEM # uses the above file to create a public key
```

In the DNS, create a TXT record with for host "selector01._domainkey" with this value below (GoDaddy). 


```
v=DKIM1; h=sha256; p=(paste the public key here)
```

## DKIM config

```
opendkim_sign = "true"
opendkim "opendkim1" {
header_canon = "relaxed"
body_canon = "relaxed"
headerlist = ("from", "to", "messageid", "date", "subject", "ContentType")
key = "/opt/msys/ecelerity/etc/conf/dkim/selector01.domain.pem"
dkim_domain "domain.com" {
selector = "selector01"
 }
}
```


Save config, and then run shim to confirm its OK


```
/opt/msys/ecelerity/bin/ec_console shim://  # if there are no issues run the config reload command below
echo "config reload" | /opt/msys/ecelerity/bin/ec_console
```

## Testing
Send message to the Port25 verifier


```
swaks -f me@jasmatazz.com -t check-auth-jsingh=sparkpost.com@verifier.port25.com
```
