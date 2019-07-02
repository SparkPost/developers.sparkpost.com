# How do I Set Multiple Listener Stanzas with Supercharger?

If you are using Multiple Event Loops (Supercharger) with multiple listener types, you will need a different thread pool for each listener, which is then specified in the listen stanza. Thread pools cannot be reused. For example:

```
eventloop "pool" {
  concurrency = 10
}

threadpool esmtplistener {
  concurrency = 1
}
threadpool ecstreamlistener { 
  concurrency = 1 
}

Then modify your listener and subsequent listen stanzas:
esmtp_listener {
  # associate this listener with the eventloop 
  event_loop = "pool"
  ...

  listen ":25" {
    concurrency = 1
    pool_name = "esmtplistener"
  }
}
ecstream_listener {
  # associate this listener with the eventloop 
  event_loop = "pool"
  ...

  listen ":1825" {
    concurrency = 1
    pool_name = "ecstreamlistener"
  }
}

# associate mail delivery and maintener_pool with eventloop
delivery_pool = "pool"
maintainer_pool = "pool"
```

**Note** if you are wildcarding ports or specifying specific IP, use one or the other, but not both.