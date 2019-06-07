# Why Don't Throttle Down Actions on Adaptive Delivery Seem to Have Any Effect?

Throttling limits the rate at which Momentum will attempt to deliver mail. The "down" parameter, which is the only one associated with this action, defines the throttle indicator.

If Adaptive Deliverability is correctly instantiated (see the Momentum [Adaptive Delivery User Guide](https://support.messagesystems.com/docs/web-ad/ad.using.php) for more information) and you are receiving enough bounces to trigger an adaptive rule where the action is {"throttle", "down"}, please submit a support ticket with the following:

	* Your bounce log (/var/log/ecelerity/bouncelog.ec)
	* The adaptive log (/var/log/ecelerity/adaptive/adaptive.log)
	* The AD rule in question

There may be a solution available for you. Please contact Support for this issue at support@messagesystems.com
