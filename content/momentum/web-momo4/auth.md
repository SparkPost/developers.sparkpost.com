|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.msg_gen.conf)  | Part III. Configuring Momentum |  [Next](using_domainkeys) |

## Chapter 21. Enforcing REST API/UI User Authentication

**Configuration Change. ** As of version 4.1, user authentication is enforced on the web-based UI and all REST API by default.

Enforcing authentication is recommend for security reasons. However, your system administrator can disable user authentication if your application does not require it. Note that if you wish to disable user authentication, you must disable it for both the UI and REST API. You cannot disable authentication for one and not the other.

The procedure to disable user authentication requires a restart of Nginx on all Analytics nodes in your cluster. It is recommended that you make any changes at a time that impacts your users the least.

To disable user authentication, do the following:

1.  Shut down Nginx on each Analytics node using the following command:

    `/etc/init.d/msys-nginx stop`
    ### Note

    Users will be unable to access the REST API or UI once this command is executed.

2.  Disable authentication at the REST API layer by modifying the web proxy configuration of Nginx.

    This modification must take place on each Analytics node.

    In the file `/opt/msys/3rdParty/nginx/conf.d/web_proxy.conf`, comment out the line `access_by_lua_file "/opt/msys/app/users-api/nginx/access.lua";`. Commenting in Nginx is done through the use of the *#* symbol.

    Your `web_proxy.conf` file should look like the following:

    ```
    more_set_input_headers 'X-MSYS-CUSTOMER: 1';
    #access_by_lua_file "/opt/msys/app/users-api/nginx/access.lua";
    proxy_set_header  X-Real-IP  $remote_addr;
    proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header  Host $http_host;
    proxy_redirect    off;
    proxy_max_temp_file_size 0;
    proxy_intercept_errors on;
    ```

3.  Disable authentication in the web-based UI by modifying the UI configuration.

    This modification must take place on each Analytics node.

    In the file `/opt/msys/app/webui/scripts/config/production.json`, edit the "auth" stanza so that the value of the "enabled" key is false. Note that the value of the "enabled" key is a Boolean value and should not be quoted as a string value.

    The "auth" stanza of your `production.json` file should look similar to the following:

    ```
    "auth": {
      "apiPrefix": "/api/v1",
      "apiHost": "example-host.com",
      "apiPort": 80,
      "cookieDuration": 1209600,
      "enabled": false
    },
    ```

4.  Restart Nginx on each Analytics nodes using the following command:

    `/etc/init.d/msys-nginx start`

    Once Nginx has been turned back on, your users should be able to access all of the REST API and web-based UI without having to supply credentials or API keys.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.msg_gen.conf)  | [Up](p.configuration) |  [Next](using_domainkeys) |
| 20.2. `msg_gen.conf` File  | [Table of Contents](index) |  Chapter 22. Using Yahoo! DomainKeys |

