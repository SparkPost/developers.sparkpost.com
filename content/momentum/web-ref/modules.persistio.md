| [Prev](modules.pe2_logger)  | Chapter 14. Modules Reference |  [Next](modules.pipeio) |

## 14.53. persist_io – Persistent IO Wrapper

<a class="indexterm" name="idp20781072"></a>

The `persist_io` module provides a non-volatile cache wrapper for any other IO wrapper. For example, one could load a file over the HTTP IO wrapper, such that if the HTTP server is down then the consumer of the file will be provided with the locally cached copy. An example of how to use the persist IO wrapper with the HTTP IO wrapper to load a script in the Sieve module is below:

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

<a name="example.persist_io.3"></a>

**Example 14.81. persist_io module**

```
persist_io {
  dirmode = 0700
}
sieve "sieve1" {
  script "connect_phase1" {
    source = "persist://http://www.foo.com/mysievescript.siv"
  }
}
```

It should not be necessary to use this module in version 3.0, since the configuration repository functionality provides for persistent configurations that can be centrally managed.

Find below a description of the configuration options for the `persist_io` module.

<dl className="variablelist">

<dt>dirmode</dt>

<dd>

The octal representation of the permissions for the directory that holds the cached files. The default value is `0700`

</dd>

<dt>filemode</dt>

<dd>

The octal representation of the permissions for cached files. The default value is `0600`

</dd>

<dt>persist_path</dt>

<dd>

The path to the directory that holds the cached files. The default value is `/var/log/ecelerity/persist`.

</dd>

</dl>

| [Prev](modules.pe2_logger)  | [Up](modules) |  [Next](modules.pipeio) |
| 14.52. pe2_logger – Module  | [Table of Contents](index) |  14.54. pipe_io – Pipe IO Wrapper |
