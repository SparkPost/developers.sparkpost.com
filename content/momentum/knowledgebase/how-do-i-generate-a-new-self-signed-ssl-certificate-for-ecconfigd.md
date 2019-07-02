# How do I generate a new self-signed SSL certificate for ecconfigd?

## Introduction
Momentum relies on SVN for configuration management. Before Momentum 3.5.8 and 3.6.1, these SSL certificates had an expiration date of one year. In order to prevent any interruption with your ability to commit or pull your configuration, we've laid out some steps for you to check when your certificate will expire, how to increase the validity period and finally how to regenerate your certificate.

## The Error

ERROR: premature EOF in "svn update '-config-dir' '/opt/msys/ecelerity/etc/.eccfg' 'username' 'ecuser' 'no-auth-cache' 'non-interactive' '-trust-server-cert' '.'"
svn: OPTIONS of 'https://mail35.prod:2027/config/default/boot': Server certificate verification failed: certificate has expired, issuer is not trusted (https://mail35.prod:2027)
at /opt/msys/lib/perl5/vendor_perl/5.10.0/Expect.pm line 870

The error listed above is one of several that you may encounter depending on the situation. Each of these errors will indicate that the 'certificate has expired'.

## Verifying Your Validity Period
Running the following command will allow you to see information regarding your certificate. One of these bits of information is the 'Validity' field, which tells you when the certificate was generated and when it expires.
openssl x509 -noout -text -in /var/ecconfigd/apache/server.crt

An example of the output that you will see is included below:
Validity
Not Before: Jun 13 00:03:40 2013 GMT
Not After : Jun 13 00:03:40 2014 GMT

## Extending the Validity Period
If you are running an older version of Momentum (pre-3.5.8 and pre-3.6.1) then you have a Validity period of one year. If you'd like to extend this, then please open the following file:
/opt/msys/ecelerity/bin/create_ssl_cert

Towards the bottom of the file you will find the following line:
qx|$openssl req -new -x509 -nodes -config $CONF -out ${PREFIX}/server.crt -keyout ${PREFIX}/server.key -days 365|;

You will want to modify the '-days' value to a higher value. An example has been provided below:
qx|$openssl req -new -x509 -nodes -config $CONF -out ${PREFIX}/server.crt -keyout ${PREFIX}/server.key -days 11499|;

Note: Please keep in mind that you are limited to a maximum of 11499 days if you are running Momentum in a 32bit environment.

## Regenerating Your Certificate
In order to regenerate your SSL certificate, please run through the following commands:
cd /var/ecconfigd/apache
mv server.crt server.crt.old
mv server.key server.key.old
/opt/msys/ecelerity/bin/create_ssl_cert ecconfigd $(hostname) /var/ecconfigd/apache
chmod 700 server.crt server.key
chown ecuser:ecuser server.crt server.key

**Note: Do not replace the word 'hostname'. This is actually a Linux command that will automatically fetch your hostname.**

These commands will move you into the appropriate directory, rename the current certificate and key files, regenerate the certificate and ensure that the ownership and permissions are set correctly.

You will also have to restart eccmgr and ecconfigd after the new certificate has been generated. 

## Conclusion
Please feel free to contact Support if you have any further questions regarding this.