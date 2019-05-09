# How do I enforce or auto fix 998 character length limit for headers

Per RFC2822 section 2.1.1 there is 998 character limit per line for the header. By default, Momentum 4 by default will ignore this 998 character limit. The consequence of this is that remote domains are not obligated to accept non-RFC compliant messages.

You can change this by using the global "rfc2822_max_line_length" option. 

Please refer to the user's guide for more details : https://support.messagesystems.com/docs/web-momo4/conf.ref.rfc2822_max_line_length.php