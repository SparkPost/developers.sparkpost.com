|     |     |     |
| --- | --- | --- |
| [Prev](operations.riak.backups)  | Part III. Configuring Momentum |  [Next](p.logs) |

## Chapter 31. Configuring the Environment File

Environment variables should be set or adjusted on startup. If Momentum is started up using the [ec_ctl](executable.ec_ctl "ec_ctl") script, any environment variables included in the `environment` file will be set.

Environment variables can be set in the `/opt/msys/ecelerity/etc/environment` file. The variables that can be set are as follows:

*   `BINDIR` – path to the Momentum `bin` directory, typically `/opt/msys/ecelerity/bin`

*   `CONFFILE` – path to the `ecelerity.conf` file to be used

*   `CONTROL` – path to a Unix domain control listener endpoint

    This parameter should match what you have configured for your Control_Listener in `ecelerity.conf`.

*   `EC_CONF_SEARCH_PATH` – this value defines the search path used by [**ecconfigd**](conf.overview#conf.ecconfigd "15.1.3. Configuration Management (ecconfigd)") to determine the applicable configuration file

    Add this variable to the environment file if you wish to change the search order.

*   `EC_DIGEST_REALM` – MD5 digest realm (see [ec_md5passwd](executable.ec_md5passwd "ec_md5passwd").)

*   `ECELERITY_DNS_BACKEND` – the variable for setting the DNS resolver.

    The unbound resolver is a modern DNS resolver that is replacing Momentum’s older internal ARES resolver. The unbound resolver will provide more features, more efficient code, and smoother integration with Momentum.

    The unbound server is turned off by default, but can be enabled by entering the following lines into `/opt/msys/ecelerity/etc/environment`:

    ```
    ECELERITY_DNS_BACKEND='unbound'
    export ECELERITY_DNS_BACKEND
    ```

    To confirm the resolver's status, look for the following line in the summary command:

    `DNS Resolver: unbound`
    ### Note

    The only other valid value is `ares`.

*   `ECELERITY_MEMORY` – to use pipe_io on Linux, this variable must be set to `NOREPLACE`

*   `EXTRA_ARGS` – additional parameters to pass to Momentum

*   `HTTPS_PROXY_PASSWORD` – for use with Adaptive Delivery (see [Using a Proxy Server](https://support.messagesystems.com/docs/web-ad/ad.adaptive.automated.proxy).)

*   `HTTPS_PROXY_USERNAME` – for use with Adaptive Delivery (see [Using a Proxy Server](https://support.messagesystems.com/docs/web-ad/ad.adaptive.automated.proxy).)

*   `LD_LIBRARY_PATH` – in case the ld path needs to be augmented

    This mechanism is used for module specific adjustments to the environment.

*   `PLAT` – platform name

*   `TMPDIR` – specify a temporary directory

    Ecelerity creates an executable file in TMPDIR (a file used by the Lua Timed Events support). If you do not set TMPDIR, it defaults to `/tmp`. If, as a security measure, you mount `/tmp` with the `noexec` option and you also want to use Lua Timed Events, you need to set TMPDIR to a directory that permits executable scripts.

*   `TRY` – number of times to loop waiting for Momentum to start up

    For examples of usage, see [ec_ctl](executable.ec_ctl "ec_ctl") and [ecconfigd_ctl](executable.ecconfigd_ctl "ecconfigd_ctl").

### Note

The `GIMLI_WATCHDOG_INTERVAL`, `GIMLI_WATCHDOG_START_INTERVAL`, and `GIMLI_WATCHDOG_STOP_INTERVAL` variables set the interval for restarting Momentum when it has been unresponsive. For more details execute **`man -M /opt/msys/gimli/man monitor`**                                .

|     |     |     |
| --- | --- | --- |
| [Prev](operations.riak.backups)  | [Up](p.configuration) |  [Next](p.logs) |
| 30.4. Backups  | [Table of Contents](index) |  Part IV. Logging |

