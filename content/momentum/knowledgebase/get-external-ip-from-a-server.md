# Get external IP from a server

Run the following command (assuming nc supports the -s switch) replacing 10.0.0.0 with the outbound IP you want to test:


```
nc -s 10.0.0.0 whatismyip.akamai.com 80
```

The command prompt returns, type the following and hit return several times until the IP is returned:


```
GET http://whatismyip.akamai.com/ HTTP/1.1
```
