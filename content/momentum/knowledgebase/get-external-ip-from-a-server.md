# Get external IP from a server

Run the following command (assuming nc supports the -s switch) replacing 10.0.0.0 with the outbound IP you want to test:


## Using netcat
```
nc -s 10.0.0.0 whatismyip.akamai.com 80
```

The command prompt returns, type the following and hit return several times until the IP is returned:


```
GET http://whatismyip.akamai.com/ HTTP/1.1
```

## Using curl
Hit ip.me to get public IP and the "-i" flag for interface

```
curl -i 1.2.3.4 ip.me
```