# How do I prevent OOM (Out of Memory) issue(s)?

Disable transparent hugepages:

```
echo never  > /sys/kernel/mm/redhat_transparent_hugepage/enabled
```

Applies to all versions of Momentum. 