|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_thread_pool_get_queue_size)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_tolower) |

<a name="sieve.ref.ec_throttle"></a>
## Name

ec_throttle_create, ec_throttle_inc, ec_throttle_dec, ec_throttle_check, ec_throttle_tarpit — Named Throttling

## Synopsis

`ec_throttle_create` { *`name`* } { *`messages/seconds`* }

`ec_throttle_inc` { *`name`* }

`ec_throttle_dec` { *`name`* }

`ec_throttle_check` { *`name`* }

`ec_throttle_tarpit` { *`name`* }

<a name="idp30677152"></a>
## Description

Allow any number of named throttles to be created within Sieve to handle a variety of throttling situations and permutations that the single inbound throttle cannot.

**ec_throttle_create** creates a throttle named *`name`* with a throttle of X/Y where X is a number of messages and Y is an interval of time in seconds. Note that the throttle will do nothing on its own, but with the other functions, its full functionality can be exploited. This must be called before other functions attempt to access the throttle. The `siv_throttle_cache_size` option determines the maximum number of named throttles that can be created. For more information see [siv_throttle_cache_size](conf.ref.siv_throttle_cache_size "siv_throttle_cache_size"). A throttle is removed from the cache when either of the following occur:

*   The throttle cache is full and another **ec_throttle_create** request is issued. The least recently used throttle will be removed from the cache in this case.

*   The time interval specified on **ec_throttle_create** is exceeded by one second.

In order to ensure correct thottling behavior, once a throttle has been removed from the cache, a new **ec_throttle_create** must be issued for the removed throttle name before using other throttle functions on it. Issuing an **ec_throttle_create** on the name of a throttle that is already in the throttle cache is a null operation.

**ec_throttle_inc** indicates to the specified throttle that it has received a message to be counted by its mechanisms. This will not stop more messages than desired from passing into the system. This should be called before **ec_throttle_check**.

**ec_throttle_dec** indicates to the specified throttle that it should remove a message from being counted by its mechanisms. This is intended to allow a message which is added via **ec_throttle_inc** to later be removed.

**ec_throttle_check** checks to see if the specified throttle currently exceeds its quota. If it does so, then **ec_throttle_check** returns true, otherwise, it returns false. This does not work when nested with the :is command. It needs to be assigned to a Sieve variable and then checked in a statement such as:

```
$var = ec_throttle_check "foo";
if ec_test :is $var "true" {
...
```

**ec_throttle_tarpit** increments the named throttle and returns if the resulting throttle quota has not been exceeded. Otherwise, **ec_throttle_tarpit** waits (tarpits) for a length of time such that the throttle will return to a state where it is once again permissible to send a message through.

<a name="example.ec_throttle_tarpit"></a>

**Example 16.98. Emulating Inbound_Throttle_Messages**

```
...

ec_throttle_create "foo" "30/1";
ec_throttle_tarpit "foo";

...
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_thread_pool_get_queue_size)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_tolower) |
| ec_thread_pool_get_queue_size  | [Table of Contents](index) |  ec_tolower |
