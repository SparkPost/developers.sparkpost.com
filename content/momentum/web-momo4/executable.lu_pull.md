|     |     |     |
| --- | --- | --- |
| [Prev](executable.jlogctl)  | Chapter 74. Executable Commands Reference |  [Next](executable.validate_config) |

<a name="executable.lu_pull"></a>
## Name

lu_pull — update the Live Updates database

## Synopsis

`/opt/msys/ecelerity/bin/lu_pull` [ --ad_update_only | -a ]

`/opt/msys/ecelerity/bin/lu_pull` [ --ad_updatesdir *`/path/to/updatesdir`* ]

`/opt/msys/ecelerity/bin/lu_pull` [ --feedback *`/path/to/feedback_dir`* ]

`/opt/msys/ecelerity/bin/lu_pull` [ --help ]

`/opt/msys/ecelerity/bin/lu_pull` [ --license *`/path/to/license`* ]

`/opt/msys/ecelerity/bin/lu_pull` [ --product *`productname`* ]

`/opt/msys/ecelerity/bin/lu_pull` [ --proxy *`proxy_url`* --proxy_user *`username`* --proxy_password *`password`* ]

`/opt/msys/ecelerity/bin/lu_pull` [ --updatesdir *`/path/to/updatesdir`* ]

`/opt/msys/ecelerity/bin/lu_pull` [ --url *`update_url`* ]

`/opt/msys/ecelerity/bin/lu_pull` [ --version *`version_number`* ]

<a name="idp12665088"></a>
## Description

The **lu_pull** command is used to update the Live Updates database either for bounce or adaptive rules.

<dl className="variablelist">

<dt>--ad_update_only</dt>

<dd>

Update adaptive rules only.

</dd>

<dt>--ad_updatesdir *`/path/to/updatesdir`*</dt>

<dd>

Override the default adaptive rules location, `/opt/msys/ecelerity/etc/msys`.

</dd>

<dt>--feedback *`/path/to/feedback_dir`*</dt>

<dd>

The location of the bounce classification files. The default value for this option is `/opt/msys/ecelerity/etc/updates`.

</dd>

<dt>--help</dt>

<dd>

Display the command options.

</dd>

<dt>--license *`/path/to/license`*</dt>

<dd>

The default value for this option is `/opt/msys/ecelerity/etc/license`. Use this option to overrride the default.

</dd>

<dt>--product *`productname`*</dt>

<dd>

Override the default productname. The default value for this option is `ecelerity`.

</dd>

<dt>--proxy *`proxy_url`* --proxy_user *`username`* --proxy_password *`password`*</dt>

<dd>

If you are using a proxy server to access updates use this option to specify the proxy server and your credentials. Use of a proxy server with live updates is discussed in [Using a Proxy Server](https://support.messagesystems.com/docs/web-ad/ad.adaptive.automated.proxy).

</dd>

<dt>--url *`update_url`*</dt>

<dd>

Override the default update URL. The default for this option is `https://support.messagesystems.com`.

</dd>

<dt>--updatesdir *`/path/to/updatesdir`*</dt>

<dd>

Override the default update directory. The default value for this option is `/opt/msys/ecelerity/etc/updates`.

</dd>

<dt>--version *`version_number`*</dt>

<dd>

Override the product version of the installation. For example, if you would like to run lu_pull from a 3.2 installation to pull down a 3.0 update, you can do that using this option. This is strictly for testing purpose. We do not support using it in production.

</dd>

</dl>

<a name="idp12695168"></a>
## See Also

[Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.jlogctl)  | [Up](exec.cmds.ref) |  [Next](executable.validate_config) |
| jlogctl  | [Table of Contents](index) |  validate_config |

