# How do I see a list of open files related to a specific process?

A useful command that gets an lsof (list of open files) of the current master nginx or any process which will show us the currently open files.  

This command can be used against other processes too, example usage below:

```
ps hf -opid -C nginx | awk '{ print $1; exit }' | xargs sh -c 'lsof -p $1' sh
```

**The msys-nginx process:
**

```
ps hf -opid -C nginx | awk '{ print $1; exit }' | xargs sh -c 'lsof -p $1' sh

COMMAND  PID USER   FD   TYPE             DEVICE SIZE/OFF   NODE NAME
nginx   2029 root  cwd    DIR                8,1     4096      2 /
nginx   2029 root  rtd    DIR                8,1     4096      2 /
nginx   2029 root  txt    REG                8,1 12661065 268902 /opt/msys/3rdParty/sbin/nginx
nginx   2029 root  mem    REG                8,1   156928 286830 /lib64/ld-2.12.so
nginx   2029 root  mem    REG                8,1    22536 286857 /lib64/libdl-2.12.so
nginx   2029 root  mem    REG                8,1  1926800 286845 /lib64/libc-2.12.so
nginx   2029 root  mem    REG                8,1   145896 286849 /lib64/libpthread-2.12.so
nginx   2029 root  mem    REG                8,1   599384 286852 /lib64/libm-2.12.so
nginx   2029 root  mem    REG                8,1    91096 286853 /lib64/libz.so.1.2.3
nginx   2029 root  mem    REG                8,1   124624 286865 /lib64/libselinux.so.1
nginx   2029 root  mem    REG                8,1   113952 286870 /lib64/libresolv-2.12.so
nginx   2029 root  mem    REG                8,1    43392 286859 /lib64/libcrypt-2.12.so
nginx   2029 root  mem    REG                8,1   472064 286858 /lib64/libfreebl3.so
nginx   2029 root  mem    REG                8,1    93320 286855 /lib64/libgcc_s-4.4.7-20120601.so.1
nginx   2029 root  mem    REG                8,1   183816 262557 /lib64/libpcre.so.0.0.1
nginx   2029 root  mem    REG                8,1   944712 286874 /lib64/libkrb5.so.3.3
nginx   2029 root  mem    REG                8,1    46368 286871 /lib64/libkrb5support.so.0.1
nginx   2029 root  mem    REG                8,1    12592 262514 /lib64/libkeyutils.so.1.3
nginx   2029 root  mem    REG                8,1   177520 286872 /lib64/libk5crypto.so.3.1
nginx   2029 root  mem    REG                8,1   280520 262286 /lib64/libgssapi_krb5.so.2.2
nginx   2029 root  mem    REG                8,1  1949440 662574 /usr/lib64/libcrypto.so.1.0.1e
nginx   2029 root  mem    REG                8,1   439912 685275 /usr/lib64/libssl.so.1.0.1e
nginx   2029 root  DEL    REG                0,4           13257 /dev/zero
nginx   2029 root  mem    REG                8,1    65928 262177 /lib64/libnss_files-2.12.so
nginx   2029 root  mem    REG                8,1    17256 286873 /lib64/libcom_err.so.2.1
nginx   2029 root  mem    REG                8,1  2595185 268825 /opt/msys/3rdParty/nginx/luajit/lib/libluajit-5.1.so.2.1.0
nginx   2029 root  DEL    REG                0,4           13260 /dev/zero
nginx   2029 root    0u   CHR                1,3      0t0   3782 /dev/null
nginx   2029 root    1u   CHR                1,3      0t0   3782 /dev/null
nginx   2029 root    2w   REG                8,1        0 933477 /var/log/msys-nginx/error.log
nginx   2029 root    3u  unix 0xffff88007b7ce980      0t0  13262 socket
nginx   2029 root    4w   REG                8,1        0 933477 /var/log/msys-nginx/error.log
nginx   2029 root    5w   REG                8,1        0 933476 /var/log/msys-nginx/access.log
nginx   2029 root    6u  IPv4              13258      0t0    TCP *:http (LISTEN)
nginx   2029 root    7u  IPv4              13259      0t0    TCP *:infowave (LISTEN)
nginx   2029 root    8u  unix 0xffff88007b7cec80      0t0  13263 socket
nginx   2029 root    9u  unix 0xffff88007a8d23c0      0t0  13264 socket
nginx   2029 root   10u  unix 0xffff88007ba41c80      0t0  13265 socket
```

**The msys-rabbitmq process:
**

```
ps hf -opid -C S80msys-rabbitmq | awk '{ print $1; exit }' | xargs sh -c 'lsof -p $1' sh

COMMAND    PID USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME
S80msys-r 1722 root  cwd    DIR    8,1     4096      2 /
S80msys-r 1722 root  rtd    DIR    8,1     4096      2 /
S80msys-r 1722 root  txt    REG    8,1   938832    141 /bin/bash
S80msys-r 1722 root  mem    REG    8,1   156928 286830 /lib64/ld-2.12.so
S80msys-r 1722 root  mem    REG    8,1    22536 286857 /lib64/libdl-2.12.so
S80msys-r 1722 root  mem    REG    8,1  1926800 286845 /lib64/libc-2.12.so
S80msys-r 1722 root  mem    REG    8,1   138280 286884 /lib64/libtinfo.so.5.7
S80msys-r 1722 root  mem    REG    8,1    65928 262177 /lib64/libnss_files-2.12.so
S80msys-r 1722 root  mem    REG    8,1 99158576 658864 /usr/lib/locale/locale-archive
S80msys-r 1722 root  mem    REG    8,1    26060 659122 /usr/lib64/gconv/gconv-modules.cache
S80msys-r 1722 root    1w   REG    8,1      343 927166 /var/log/msys-rabbitmq/startup_log
S80msys-r 1722 root    2w   REG    8,1        0 933380 /var/log/msys-rabbitmq/startup_err
```

**The ecelerity process:
**

```
ps hf -opid -C ecelerity | awk '{ print $1; exit }' | xargs sh -c 'lsof -p $1' sh

COMMAND    PID   USER   FD   TYPE             DEVICE  SIZE/OFF   NODE NAME
ecelerity 2121 ecuser  cwd    DIR                8,1      4096      2 /
ecelerity 2121 ecuser  rtd    DIR                8,1      4096      2 /
ecelerity 2121 ecuser  txt    REG                8,1 135253547 277974 /opt/msys/ecelerity/sbin/ecelerity
ecelerity 2121 ecuser  mem    REG                8,1    156928 286830 /lib64/ld-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1     22536 286857 /lib64/libdl-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1   1926800 286845 /lib64/libc-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1    145896 286849 /lib64/libpthread-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1     47064 286850 /lib64/librt-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1    599384 286852 /lib64/libm-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1     91096 286853 /lib64/libz.so.1.2.3
ecelerity 2121 ecuser  mem    REG                8,1    124624 286865 /lib64/libselinux.so.1
ecelerity 2121 ecuser  mem    REG                8,1    113952 286870 /lib64/libresolv-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1     19016 262498 /lib64/libcap.so.2.16
ecelerity 2121 ecuser  mem    REG                8,1    472064 286858 /lib64/libfreebl3.so
ecelerity 2121 ecuser  mem    REG                8,1     21152 262360 /lib64/libattr.so.1.1.0
ecelerity 2121 ecuser  mem    REG                8,1    116368 262397 /lib64/libnsl-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1     93320 286855 /lib64/libgcc_s-4.4.7-20120601.so.1
ecelerity 2121 ecuser  mem    REG                8,1     17256 286873 /lib64/libcom_err.so.2.1
ecelerity 2121 ecuser  mem    REG                8,1    944712 286874 /lib64/libkrb5.so.3.3
ecelerity 2121 ecuser  mem    REG                8,1     46368 286871 /lib64/libkrb5support.so.0.1
ecelerity 2121 ecuser  mem    REG                8,1     12592 262514 /lib64/libkeyutils.so.1.3
ecelerity 2121 ecuser  mem    REG                8,1    177520 286872 /lib64/libk5crypto.so.3.1
ecelerity 2121 ecuser  mem    REG                8,1    280520 262286 /lib64/libgssapi_krb5.so.2.2
ecelerity 2121 ecuser  mem    REG                8,1   1949440 662574 /usr/lib64/libcrypto.so.1.0.1e
ecelerity 2121 ecuser  mem    REG                8,1    439912 685275 /usr/lib64/libssl.so.1.0.1e
ecelerity 2121 ecuser  mem    REG                8,1    683189 268652 /opt/msys/3rdParty/lib64/libpq.so.5.3
ecelerity 2121 ecuser  mem    REG                8,1    243369 398281 /opt/msys/ecelerity/libexec/datasource/ds_pgsql.so
ecelerity 2121 ecuser  mem    REG                8,1    242330 398953 /opt/msys/ecelerity/libexec/schedulers/epoll.so
ecelerity 2121 ecuser  mem    REG                8,1    350521 402638 /opt/msys/ecelerity/libexec/esmtp/smtputf8.so
ecelerity 2121 ecuser  mem    REG                8,1  98994649 402667 /opt/msys/ecelerity/libexec/embed/lua/msys/core.so
ecelerity 2121 ecuser  mem    REG                8,1    132289 275509 /opt/msys/3rdParty/lib64/libffi.so.6.0.1
ecelerity 2121 ecuser  mem    REG                8,1   1115961 270262 /opt/msys/3rdParty/lib64/libthrlua.so.0.0.0
ecelerity 2121 ecuser  mem    REG                8,1   3131101 402769 /opt/msys/ecelerity/libexec/scriptlets/scriptlet.so
ecelerity 2121 ecuser  mem    REG                8,1    282924 277449 /opt/msys/ecelerity/libexec/generic/alerting.so
ecelerity 2121 ecuser  mem    REG                8,1    429084 398923 /opt/msys/ecelerity/libexec/validate/inbound_audit.so
ecelerity 2121 ecuser  mem    REG                8,1    989840 660824 /usr/lib64/libstdc++.so.6.0.13
ecelerity 2121 ecuser  mem    REG                8,1   8869284 269018 /opt/msys/3rdParty/lib64/libicudata.so.34.1
ecelerity 2121 ecuser  mem    REG                8,1   3654393 269036 /opt/msys/3rdParty/lib64/libicuuc.so.34.1
ecelerity 2121 ecuser  mem    REG                8,1    309778 270015 /opt/msys/ecelerity/libexec/generic/icu.so
ecelerity 2121 ecuser  mem    REG                8,1    303481 277433 /opt/msys/ecelerity/libexec/generic/spf_macros.so
ecelerity 2121 ecuser  mem    REG                8,1    253012 398918 /opt/msys/ecelerity/libexec/validate/mail_loop.so
ecelerity 2121 ecuser  mem    REG                8,1   2846614 403063 /opt/msys/ecelerity/libexec/mobility/mb_smpp.so
ecelerity 2121 ecuser  mem    REG                8,1    695004 403061 /opt/msys/ecelerity/libexec/mobility/mb_shared.so
ecelerity 2121 ecuser  mem    REG                8,1    381798 272866 /opt/msys/3rdParty/lib/librabbitmq.so.1.1.1
ecelerity 2121 ecuser  mem    REG                8,1    266400 397944 /opt/msys/ecelerity/libexec/logging/event_hose.so
ecelerity 2121 ecuser  mem    REG                8,1   1973060 398851 /opt/msys/ecelerity/libexec/logging/event_hydrant.so
ecelerity 2121 ecuser  mem    REG                8,1    254033 398452 /opt/msys/ecelerity/libexec/logging/http_logger.so
ecelerity 2121 ecuser  mem    REG                8,1    291389 398945 /opt/msys/ecelerity/libexec/logging/bounce_logger.so
ecelerity 2121 ecuser  mem    REG                8,1    295632 277326 /opt/msys/ecelerity/libexec/generic/bounce_classifier.so
ecelerity 2121 ecuser  mem    REG                8,1    366189 398906 /opt/msys/ecelerity/libexec/logging/ec_logger.so
ecelerity 2121 ecuser  mem    REG                8,1     65928 262177 /lib64/libnss_files-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1    327164 398797 /opt/msys/ecelerity/libexec/rest/injector.so
ecelerity 2121 ecuser  mem    REG                8,1    438066 398225 /opt/msys/ecelerity/libexec/listeners/httpsrv.so
ecelerity 2121 ecuser  mem    REG                8,1   4296212 265232 /opt/msys/3rdParty/lib64/libxml2.so.2.9.1
ecelerity 2121 ecuser  mem    REG                8,1    224113 277311 /opt/msys/ecelerity/libexec/generic/xml.so
ecelerity 2121 ecuser  mem    REG                8,1     81209 265222 /opt/msys/3rdParty/lib64/libjson.so.0.0.1
ecelerity 2121 ecuser  mem    REG                8,1    220977 277320 /opt/msys/ecelerity/libexec/generic/json.so
ecelerity 2121 ecuser  mem    REG                8,1    265498 398894 /opt/msys/ecelerity/libexec/auth/auth_ds.so
ecelerity 2121 ecuser  mem    REG                8,1   1008866 398959 /opt/msys/ecelerity/libexec/datasource/ds_core.so
ecelerity 2121 ecuser  mem    REG                8,1    988442 398951 /opt/msys/ecelerity/libexec/listeners/esmtp.so
ecelerity 2121 ecuser  mem    REG                8,1    359086 398896 /opt/msys/ecelerity/libexec/validate/sieve.so
ecelerity 2121 ecuser  mem    REG                8,1   2681560 268915 /opt/msys/3rdParty/lib64/libgmp.so.10.2.0
ecelerity 2121 ecuser  mem    REG                8,1   3751025 270091 /opt/msys/3rdParty/lib64/libhogweed.so.2.5
ecelerity 2121 ecuser  mem    REG                8,1   2906158 270094 /opt/msys/3rdParty/lib64/libnettle.so.4.7
ecelerity 2121 ecuser  mem    REG                8,1     43392 286859 /lib64/libcrypt-2.12.so
ecelerity 2121 ecuser  mem    REG                8,1    154065 278187 /opt/msys/ecelerity/lib64/libecmem_malloc.so
ecelerity 2121 ecuser  mem    REG                8,1   1538972 270117 /opt/msys/3rdParty/lib64/libgnutls.so.28.21.3
ecelerity 2121 ecuser  mem    REG                8,1     43900 268908 /opt/msys/3rdParty/lib64/libck.so.0.4.1
ecelerity 2121 ecuser  mem    REG                8,1    106262 268697 /opt/msys/gimli/lib64/libgimli.so.0.0.0
ecelerity 2121 ecuser  DEL    REG                8,1           135974 /tmp/gimlihbIsvOtK
ecelerity 2121 ecuser  mem    REG                8,1   2076992 266736 /opt/msys/3rdParty/lib64/libsqlite3.so.0.8.6
ecelerity 2121 ecuser  mem    REG                8,1    684680 265213 /opt/msys/3rdParty/lib64/libpcre.so.1.2.1
ecelerity 2121 ecuser  mem    REG                8,1    154935 278186 /opt/msys/ecelerity/lib64/libecmem_jemalloc.so
ecelerity 2121 ecuser  mem    REG                8,1   1409382 271528 /opt/msys/3rdParty/lib64/libjemalloc.so.1
ecelerity 2121 ecuser    0u   CHR                1,3       0t0   3782 /dev/null
ecelerity 2121 ecuser    1u   CHR                1,3       0t0   3782 /dev/null
ecelerity 2121 ecuser    2u   CHR                1,3       0t0   3782 /dev/null
ecelerity 2121 ecuser    3uW  REG                8,1         4 786906 /var/run/ecelerity.pid.instance
ecelerity 2121 ecuser    4u   REG                8,1         4 786902 /var/run/ecelerity.monitor.pid
ecelerity 2121 ecuser    5u  pack              13745       0t0    ALL type=SOCK_PACKET
ecelerity 2121 ecuser    6u  sock                0,6       0t0  13746 can't identify protocol
ecelerity 2121 ecuser    7r   CHR                1,9       0t0   3787 /dev/urandom
ecelerity 2121 ecuser    8u   REG                0,9         0   3780 [eventpoll]
ecelerity 2121 ecuser    9u   REG                0,9         0   3780 [eventpoll]
ecelerity 2121 ecuser   10u  unix 0xffff88007b0aa6c0       0t0  13750 socket
ecelerity 2121 ecuser   11u  unix 0xffff88007b0aa0c0       0t0  13751 socket
ecelerity 2121 ecuser   12u   REG                8,1      7168 933428 /var/log/ecelerity/ecdb
ecelerity 2121 ecuser   13uW  REG                8,1         4 933429 /var/spool/ecelerity/.lock
ecelerity 2121 ecuser   14u  IPv4              13758       0t0    UDP localhost:8162
ecelerity 2121 ecuser   15w   REG                8,1     25109 933434 /var/log/ecelerity/mainlog.ec
ecelerity 2121 ecuser   16w   REG                8,1     31017 933435 /var/log/ecelerity/rejectlog.ec
ecelerity 2121 ecuser   17w   REG                8,1        64 933436 /var/log/ecelerity/acctlog.ec
ecelerity 2121 ecuser   18w   REG                8,1       607 933433 /var/log/ecelerity/paniclog.ec
ecelerity 2121 ecuser   19w   REG                8,1     19201 933401 /var/log/ecelerity/smpplog.ec
ecelerity 2121 ecuser   20w   REG                8,1     25109 933432 /var/log/ecelerity/bouncelog.ec
ecelerity 2121 ecuser   21w   REG                8,1         0 933488 /var/log/ecelerity/httplog.ec
ecelerity 2121 ecuser   22u  IPv4              14295       0t0    TCP *:tproxy (LISTEN)
ecelerity 2121 ecuser   23u  IPv4              14296       0t0    TCP *:smtp (LISTEN)
ecelerity 2121 ecuser   24u  IPv4              14297       0t0    TCP localhost:ellpack (LISTEN)
ecelerity 2121 ecuser   25u  unix 0xffff88000c7bdc80       0t0  14298 /tmp/2025
ecelerity 2121 ecuser   26u  IPv4              14504       0t0    UDP 192.168.1.106:52649->indnsc90.ukcore.bt.net:domain
```