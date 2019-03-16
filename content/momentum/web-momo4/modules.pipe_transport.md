| [Prev](modules.pipeio)  | Chapter 71. Modules Reference |  [Next](modules.postfix_logger) |

## 71.55. pipe_transport – Module

<a class="indexterm" name="idp22619968"></a>

Instead of immediately spooling messages to disk, the pipe_transport I/O module causes them to be piped into a program on the local machine. This module provides a means of running a program whenever there is mail for a specific domain or domains. The success of that program affects the success of the SMTP transaction.

### 71.55.1. Configuration

The pipe_transport module is configured in your `ecelerity.conf` file. To load this module, add the following lines to the main body of your `ecelerity.conf` file:

<a name="example.pipe_transport.3"></a>

**Example 71.80. pipe_transport version**

```
pipe_transport "pipe_transport1"
{
   program_name  = "/bin/cat"
   output_file = "/var/log/ecelerity/pipe.stdout"
   error_file = "/var/log/ecelerity/pipe.stderr"
   domain =  ( "example.com" "another.example.com" )
   code = [
     "0" = "250 ok"
   ]
}
```

The following configuration options are available:

<dl className="variablelist">

<dt>code</dt>

<dd>

By default, if `program_name` exits with a "0" exit status, it is assumed that the message was delivered correctly and the SMTP response to the client will be the usual 250 response along with the queue ID. If `program_name` exits with a non-0 exit status then the pipe is assumed to have failed, and the SMTP response will be set to "504 5.5.0 pipe transport gave exit status %d" where "%d" is replaced by the exit status. If your `program_name` uses different exit statuses to inform you of different outcomes, you can map them to SMTP response codes. This is used by Unix MTA software. For example, read the EXIT CODES portion of this manual page: [http://untroubled.org/ezmlm/man/man8/qmail-queue.8.html](http://untroubled.org/ezmlm/man/man8/qmail-queue.8.html). If `program_name` has a set of defined exit codes, you can map them to meaningful SMTP response codes. So for **qmail-command**, 100 would equate to a 550 code because it indicates a hard error, but 111 would be a 450 code because it indicates a soft error. You might want to indicate this in the following way:

```
code = [
        100 = "550 command failed"
        111 = "450 try again later"
]
```
</dd>

<dt>domain</dt>

<dd>

This option determines which domains should be piped through the module.

</dd>

<dt>error_file</dt>

<dd>

This option determines the error file. If the error_file is omitted, it is assumed to be `/dev/null`.

</dd>

<dt>output_file</dt>

<dd>

This option determines the output file. If the output_file is omitted, it is assumed to be `/dev/null`.

</dd>

<dt>program_name</dt>

<dd>

This option configures the program that will be used.

</dd>

</dl>

| [Prev](modules.pipeio)  | [Up](modules) |  [Next](modules.postfix_logger) |
| 71.54. pipe_io – Pipe IO Wrapper  | [Table of Contents](index) |  71.56. postfix_logger – Postfix Logging |

