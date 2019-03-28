|     |     |     |
| --- | --- | --- |
| [Prev](modules.postfix_logger)  | Chapter 71. Modules Reference |  [Next](modules.response_transcode) |

## 71.57. reception_timing - Reception Timing Modules

<a class="indexterm" name="idp22662400"></a>

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The `reception_timing` and `reception_timing_logger` modules provide information on how long it takes Momentum to receive or reject messages over SMTP. The timing information, which is reported for receptions, rejections, and unexpected disconnections during SMTP reception, includes the following:

*   The time it took to receive the message. This is measured from receiving the MAIL FROM up to the point where the "250 OK" response can be sent back to the SMTP client during data.

*   The time it took to scan the message. This is measured from receiving the message body data (i.e., after CRLF "." CRLF) up to the point where the "250 OK" response can be sent back. This includes the data, data_spool, data_spool_each_rcpt (also called "each_rcpt"), and final_validation SMTP phases, as well as others that are run after receiving the body content, but before the message is enqueued.

*   Data about the source IP address and port, the destination IP address and port, and the pathway. This helps customers distinguish between multiple services running on the same Momentum instance, so they can see if a particular service is slow to receive messages (e.g., due to policy script bugs).

### 71.57.1. Pre-Requisites

**71.57.1.1. chunk_logger**

The `chunk_logger` module must be loaded and configured. This module is used to log the data.

*   Example configuration to load the `chunk_logger` module with a specific timestamp format:

    ```
    chunk_logger "chunk_logger" {
       timestamp_format = "%m:%d:%H:%M:%S"
       destination = "/var/log/ecelerity/policylog.cl"
    }
    ```

You may also wish to add the chunk_logger log file to `ec_rotate.conf`, to ensure that it is rotated daily. For more information, see [Section 71.15, “chunk_logger Module”](modules.chunk_logger "71.15. chunk_logger Module") and [ec_rotate](executable.ec_rotate "ec_rotate").

### Note

The chunk_logger can also be used to log arbitrary data from Lua.

**71.57.1.2. Message-ID Header**

The logger will attempt to include the Message-ID header contents in the timing log. For that to work, the policy scripts in the system must be set to store the Message-ID header in the `cl_MID` context variable in the message part of the message context.

*   Sample Lua code to retrieve the Message-ID header and store it in the message context:

    ```
    hdrs = msg:header("Message-ID");
    if hdrs ~= nil and hdrs[1] ~= nil then
       msg:context_set(msys.core.ECMESS_CTX_MESS, "cl_MID", hdrs[1]);
    end
    ```

### Note

To run this code in the data phase, you must wrap it in `msys.runInPool()` to avoid blocking the scheduler thread.

Also, the context variable name is not currently configurable.

### 71.57.2. Receptions

Reception records will only be logged after the entire message has been received. Internally, Momentum gives each recipient its own copy of the message with its own message ID. A message with multiple recipients will have multiple message IDs, one per recipient. There is also a batch ID, which is the same for all recipients. Both the message ID and batch ID are logged.

*   Example reception line for a message with a single recipient:

    ```
    1356769421: received after 0.040929 s (scanned in 0.000519 s) size=1005 src=127.0.0.1:37656 \
       dst=127.0.0.1:8710 pathway=default ID=00/00-10012-D88AED05 batch-ID=00/00-10012-D88AED05 \
       Message-ID=""
    ```

*   Example reception line for a message with three recipients. The Momentum message ID ("ID=...") is different for each recipient while the batch ID is the same.

    ```
    1356769421: received after 0.041026 s (scanned in 0.000625 s) size=1078 src=127.0.0.1:37658 \
       dst=127.0.0.1:8710 pathway=default ID=10/00-10012-D88AED05 batch-ID=10/00-10012-D88AED05 \
       Message-ID=""
    1356769421: received after 0.041026 s (scanned in 0.000625 s) size=1078 src=127.0.0.1:37658 \
       dst=127.0.0.1:8710 pathway=default ID=20/00-10012-D88AED05 batch-ID=10/00-10012-D88AED05 \
       Message-ID=""
    1356769421: received after 0.041026 s (scanned in 0.000625 s) size=1078 src=127.0.0.1:37658 \
       dst=127.0.0.1:8710 pathway=default ID=30/00-10012-D88AED05 batch-ID=10/00-10012-D88AED05 \
       Message-ID=""
    ```

Recipients are not logged in the timing log. It is assumed that `ec_logger` or `custom_logger` has been configured to log message IDs so that they can be cross-referenced if needed.

### 71.57.3. Rejections

Rejections can occur at many points during SMTP reception, including MAIL FROM, RCPT TO, DATA, CRLF "." CRLF. Rejections may also include dropping the SMTP connection. The module logs reject-and-continue and reject-with-disconnect exactly the same way.

*   Example rejection after MAIL FROM:

    ```
    1356769436: rejected after 0.000000 s (scanned in 0.000000 s) size=0??? src=127.0.0.1:40587 \
       dst=127.0.0.1:8879 pathway=default ID=00/00-10822-C98AED05 batch-ID=00/00-10822-C98AED05 \
       Message-ID="" phase=4 (awaiting mailfrom)
    ```

*   Example rejection after RCPT TO:

    ```
    1356769441: rejected after 0.000435 s (scanned in 0.000000 s) size=0??? src=127.0.0.1:41931 \
       dst=127.0.0.1:8992 pathway=default ID=00/00-11022-1A8AED05 batch-ID=00/00-11022-1A8AED05 \
       Message-ID="" phase=6 (awaiting rcptto)
    ```

*   Example rejection of multiple RCPT TOs:

    ```
    1356769441: rejected after 0.000576 s (scanned in 0.000000 s) size=0??? src=127.0.0.1:41932 \
       dst=127.0.0.1:8992 pathway=default ID=10/00-11022-1A8AED05 batch-ID=10/00-11022-1A8AED05 \
       Message-ID="" phase=6 (awaiting rcptto)
    1356769441: rejected after 0.001893 s (scanned in 0.000000 s) size=0??? src=127.0.0.1:41932 \
       dst=127.0.0.1:8992 pathway=default ID=10/00-11022-1A8AED05 batch-ID=10/00-11022-1A8AED05 \
       Message-ID="" phase=6 (awaiting rcptto)
    1356769441: rejected after 0.002541 s (scanned in 0.000000 s) size=0??? src=127.0.0.1:41932 \
       dst=127.0.0.1:8992 pathway=default ID=10/00-11022-1A8AED05 batch-ID=10/00-11022-1A8AED05 \
       Message-ID="" phase=6 (awaiting rcptto)
    ```

*   Example rejection during the data phase:

    ```
    1356769445: rejected after 1.039839 s (scanned in 1.000001 s) size=1008 src=127.0.0.1:57889 \
       dst=127.0.0.1:8702 pathway=default ID=00/00-11224-4A8AED05 batch-ID=00/00-11224-4A8AED05 \
       Message-ID="" phase=9 (reading body)
    ```

*   Example rejection of multiple recipients during the data phase:

    ```
    1356769446: rejected after 1.040390 s (scanned in 1.000000 s) size=1075 src=127.0.0.1:57890 \
       dst=127.0.0.1:8702 pathway=default ID=10/00-11224-5A8AED05 batch-ID=10/00-11224-5A8AED05 \
       Message-ID="" phase=9 (reading body)
    1356769446: rejected after 1.040390 s (scanned in 1.000000 s) size=1075 src=127.0.0.1:57890 \
       dst=127.0.0.1:8702 pathway=default ID=10/00-11224-5A8AED05 batch-ID=10/00-11224-5A8AED05 \
       Message-ID="" phase=9 (reading body)
    1356769446: rejected after 1.040390 s (scanned in 1.000000 s) size=1075 src=127.0.0.1:57890 \
       dst=127.0.0.1:8702 pathway=default ID=10/00-11224-5A8AED05 batch-ID=10/00-11224-5A8AED05 \
       Message-ID="" phase=9 (reading body)
    ```

*   Example rejection of multiple recipients during the each_rcpt phase:

    ```
    1356769460: rejected after 3.043582 s (scanned in 3.003623 s) size=1123 src=127.0.0.1:49148 \
       dst=127.0.0.1:8956 pathway=default ID=10/00-11629-1B8AED05 batch-ID=10/00-11629-1B8AED05 \
       Message-ID="" phase=12 (async body response)
    1356769460: rejected after 3.043582 s (scanned in 3.003623 s) size=1123 src=127.0.0.1:49148 \
       dst=127.0.0.1:8956 pathway=default ID=10/00-11629-1B8AED05 batch-ID=10/00-11629-1B8AED05 \
       Message-ID="" phase=12 (async body response)
    1356769460: rejected after 3.043582 s (scanned in 3.003623 s) size=1123 src=127.0.0.1:49148 \
       dst=127.0.0.1:8956 pathway=default ID=10/00-11629-1B8AED05 batch-ID=10/00-11629-1B8AED05 \
       Message-ID="" phase=12 (async body response)
    ```

### 71.57.4. Unexpected Disconnects

An "unexpected disconnect" occurs when the SMTP client disconnects without receiving a "250 OK" after data or without sending a QUIT command; that is, when the SMTP client disconnects while sending a message or without waiting for a response after sending CRLF "." CRLF.

*   Example unexpected disconnect after client sent MAIL FROM:

    ```
    1356769476: unexpected disconnect after 1.001713 s (scanned in 0.000000 s) size=0??? src=127.0.0.1:43877 \
       dst=127.0.0.1:9192 pathway=default ID=00/00-12431-3C8AED05 batch-ID=00/00-12431-3C8AED05 Message-ID="" \
       phase=6 (awaiting rcptto)
    ```

*   Example unexpected disconnect after client sent RCPT TO:

    ```
    1356769481: unexpected disconnect after 1.002820 s (scanned in 0.000000 s) size=0??? src=127.0.0.1:58014 \
       dst=127.0.0.1:9106 pathway=default ID=00/00-12631-8C8AED05 batch-ID=00/00-12631-8C8AED05 Message-ID="" \
       phase=6 (awaiting rcptto)
    ```

*   Example unexpected disconnect after client sent the data, but before sending CRLF "." CRLF:

    ```
    1356769486: unexpected disconnect after 1.002144 s (scanned in 0.000000 s) size=0??? src=127.0.0.1:42835 \
       dst=127.0.0.1:9447 pathway=default ID=00/00-12832-DC8AED05 batch-ID=00/00-12832-DC8AED05 Message-ID="" \
       phase=9 (reading body)
    ```

*   Example unexpected disconnect after client sent the data:

    ```
    1356769563: unexpected disconnect after 0.007025 s (scanned in 0.007025 s) size=504 src=127.0.0.1:45734 \
       dst=127.0.0.1:9262 pathway=default ID=00/00-15446-B19AED05 batch-ID=00/00-15446-B19AED05 Message-ID="" \
       phase=12 (async body response)
    ```

### 71.57.5. SMTP Reception States

SMTP stage numbers, reception states, and descriptions are listed below:

<a name="modules.reception.states"></a>

**Table 71.1. SMTP Reception States**

| Stage # | Reception State | Description |
| --- | --- | --- |
| 0 | just connected |   |
| 1 | sending banner |   |
| 2 | awaiting ehlo/helo |   |
| 3 | sending ehlo/helo response | Processing the EHLO/HELO command, and then sending the SMTP response. This includes running any EHLO phase policy scripts / hooks. |
| 4 | awaiting mailfrom |   |
| 5 | sending mailfrom response | Processing the MAIL FROM command, and then sending the SMTP response. This includes running any MAIL FROM phase policy scripts / hooks. |
| 6 | awaiting rcptto |   |
| 7 | sending rcptto response | Processing the RCPT TO command, and then sending the SMTP response. This includes running any RCPT TO phase policy scripts / hooks. |
| 8 | data phase | Send back the "354 continue" message in response to the DATA command. |
| 9 | reading body | Waiting for the SMTP client to the message (headers and body), and the terminating CRLF "." CRLF. |
| 10 | sending body response | The message has been received, and is being processed with the data phase policy scripts / hooks. |
| 11 | async body handler |   |
| 12 | async body response | The message has been received, and is being processed with the data_spool and each_rcpt phase policy scripts / hooks. |
| 13 | relaying denied |   |
| 14 | extension 1 |   |
| 15 | extension 2 |   |
| 16 | extension 3 |   |
| 17 | extension 4 |   |
| 18 | concurrency limit |   |
| 19 | rcptto list response |   |
| 20 | rcptto list final response |   |
| 21 | esmtp setup phase |   |

### 71.57.6. Configuration

There are no configuration options. Load the timing module as shown below:

```
reception_timing reception_timing1 {
}

reception_timing_logger reception_timing_logger1 {
}
```

Both parts need to be loaded; otherwise, the timing data will not be collected or logged correctly.

### Warning

The `reception_timing` module is not compatible with the Supercharger feature.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.postfix_logger)  | [Up](modules) |  [Next](modules.response_transcode) |
| 71.56. postfix_logger – Postfix Logging  | [Table of Contents](index) |  71.58. response_transcode – Module |

