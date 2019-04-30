|     |     |     |
| --- | --- | --- |
| [Prev](modules.commtouch)  | Chapter 14. Modules Reference |  [Next](modules.conntrol.php) |

## 14.20. compress_spool – Dynamic Spool Compression

<a class="indexterm" name="idp18605536"></a>

One of the principle bottlenecks in handling a large amount of inbound mail is writing spool messages to disk on reception, and then reading them back from disk again when they need to be delivered. The spool compression module attempts to assist in the IO demands of large messages by compressing them prior to writing them to disk. This module is primarily useful on systems which have IO bottlenecks but CPU to spare.

### Warning

This module will fail to load if you set the configuration option `Use_MMAP` to `true`. For more information about this option see [Use_MMAP](conf.ref.use_mmap "Use_MMAP").

### 14.20.1. Basic Configuration

To enable compression of spool entries over 32k in size, you can use the following stanza:

<a name="example.compress_spool.3"></a>

**Example 14.34. compress_spool module**

```
compress_spool {
  minimum_size = 32768
  read_only = 1
}
```

This module is loaded automatically as required and does not need to be explicitly included. Include it if you wish to change the default values.

Messages greater than or equal to the minimum size will be stored with compression. The default value for `minimum_size` is `4096`. Anything under the minimum_size will be spooled directly to disk uncompressed. You can also set a `read_only` parameter. Its default value is `0`.

### Warning

This module compresses the spool messages in place. If you enable this module you MUST be certain that the queue is empty before you disable it, or else you risk sending compressed messages without decompressing them.

### 14.20.2. Compression Algorithms

The default compression algorithm is gzip. The gzipio module is loaded automatically as required and does not need to be explicitly included.

<a name="example.bzipio.3"></a>

**Example 14.35. bzip2io compression**

```
compress_spool {
  compress = "bzip2"
  minimum_size = 32768
}
```

bzip2 compression is also available. The "bzip2io {}" stanza is not necessary as it loads on demand when the compress spool module attempts to use the "bzip2" io wrapper.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.commtouch)  | [Up](modules.php) |  [Next](modules.conntrol.php) |
| 14.19. commtouch_ctasd – Commtouch_ctasd Module  | [Table of Contents](index) |  14.21. conntrol – Fine-Grained Connection Control |
