| [Prev](modules.reception_timing)  | Chapter 14. Modules Reference |  [Next](modules.sched) |

## 14.58. response_transcode – Module

<a class="indexterm" name="idp21004752"></a>

The response_transcode module can be used to work around broken remote servers that send incorrect response codes. For example, with this module you can change a hard bounce to a soft bounce, enabling you to log the bounce in order to later resend the message.

### Warning

Since it is possible to rewrite permanent errors as temporary errors, use this module carefully. Resubmitting mail that a remote server has already rejected with a permanent error can be seen as a hostile action.

### 14.58.1. Configuration

<a name="example.response_transcode.3"></a>

**Example 14.85. response_transcode module**

```
response_transcode {
}
```

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

### Note

You can transcode "[internal]" transient failures but you cannot transcode "[internal]" permanent failures. For a listing of "[internal]" failures see [Appendix F, *Message Responses*](responses "Appendix F. Message Responses") .

The module defines two options, Response_Transcode_Pattern and Response_Transcode_Replace. For more information about these options see [response_transcode_replace](conf.ref.response_transcode_replace "response_transcode_replace") and [response_transcode_pattern](conf.ref.response_transcode_pattern "response_transcode_pattern"). If you reference either of these options, the response_transcode module will be loaded automatically.

| [Prev](modules.reception_timing)  | [Up](modules) |  [Next](modules.sched) |
| 14.57. reception_timing - Reception Timing Modules  | [Table of Contents](index) |  14.59. sched – The Schedule Module |
