| [Prev](install.solaris)  | Chapter 1. Installation |  [Next](install.additional.packages.php) |

## 1.8. Installer Options

The following installation options may be used with the installer script:

*   `--upgrade` – Use the same answers as the last installation. This option can only be used when upgrading within major versions, for example, when upgrading from 3.*`num`* to a higher version number. It *cannot* be used for upgrading from version 2.2 to 3.0.

*   `--dry-run` – Attempt the installation, but do not actually install any files.

*   --option-file *`/path/to/file`* – When Momentum is installed, the `/opt/msys/etc/installer/lastinstall` file is created. You can facilitate installation by pointing to a `lastinstall` file.

    Note that the `/opt/mys/etc/installer/lastinstall` file is used to recreate the Momentum configuration files. On upgrade, the installer will recreate the Momentum nodes that existed at the time of the last installation. Any new nodes added to a cluster after the original installation will **not** appear in the lastinstall file so will not be recreated. A warning notice will appear during installation alerting you to this fact. After an upgrade you must manually add any new nodes.

*   `––uninstall` – Remove all packages previously installed.

    This option does **not** return a machine to the state it was in prior to installation. It will remove all of the files that were added as part of each installed `msys-` package file, as well as any package-related directories that were created and are (as a result of uninstalling) now completely empty. (If you wish you can identify these directories by running **rpm -ql msys-*`package-name`***                          .)

    Any configuration file added or changed after installation will be retained, as well as the numerous "generated" files such as the `/var/ecconfigd/repos` directory contents. The following directories (and files below these directories) are not removed:

    *   `/opt/msys` and all files and directories below this directory

    *   Any Momentum-related files in `/var/log` and `/var/spool`

    *   The `/var/ecconfigd`directory and all files and directories below this directory

    *   Any Momentum-related files in `/var/db`

### Warning

Reinstalling over top of an existing installation is not supported. You must manually uninstall before reinstalling. Remove the following directories:

*   `/opt/msys`

*   `/var/log/ecelerity`

*   `/var/ecconfigd`

If the installer detects that you are reinstalling the database, you can choose to overwrite the existing database if you wish.

| [Prev](install.solaris)  | [Up](install.php) |  [Next](install.additional.packages.php) |
| 1.7. Installation on Solaris  | [Table of Contents](index) |  1.9. Installing Additional Packages |
