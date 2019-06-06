# How Do I Set Up "noatime"?

### What Is “noatime” and why do I want it?

Each time Linux reads or writes to a file, it also creates metadata (known as “atime information”) for that file based on when it was last modified or accessed. When it comes to a mail spool, it is incredibly taxing on your system to create atime information for each and every email received and sent. This is where the mounting option “noatime” comes into play. What noatime does, is it tells the system to only write metadata when writing to the specified files, but not when reading them. This will greatly increase performance since Linux no longer needs to create metadata for each an every email in the spool.

### How do I set up “noatime”?

To set up noatime, you will want to open up you fstab file. This file is located at “/etc/fstab”. Once in that file, you should look for the line referencing your spool partition. You will see a section across from that line that says “defaults”. You simply need to add a comma and “noatime” after defaults. As an example, a demonstration line will look like this: (As a warning, DO NOT copy this line directly as it will not work appropriately on your system!)

```
/dev/sda7          /chroot          ext2          defaults,noatime          1  2
```

You should then be all set with noatime.