# How do I classify out of band bounce messages based on certain phrases read from a text file?

This is basically how the bounce classification works anyway: it searches the first 400kb of the message for a specific string and classifies it appropriately. You can instantiate the `bounce_classifer_override` module to allow you to set up custom strings. Therefore, you can set up your own classification overrides to search for whatever string you want and classify it.

The documentation for the bounce_classifier_override module can be found at:

[https://developers.sparkpost.com/momentum/web-momo4/modules.bounce_classifier_override/](https://developers.sparkpost.com/momentum/web-momo4/modules.bounce_classifier_override/)

Example overrides in the `user_mdn_classification.ovr` may look something like:


```
60,|out of office
60,|out of the office
60,|absent
60,|out of touch
40,|recipients failed
41,|sender not pre-approved
22,|mailbox unavailable
55,|accepting mail with embedded images
22,|4.2.2 (Over quota)
```


Therefore, you could create a new classification with a bounce code of 50 based on "custom string":

`50,|custom string`