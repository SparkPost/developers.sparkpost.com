/**
  Event formatting maps for email demo.
  Most possible events are listed though some will never happen in the demo.
*/


export const NAMES = {
  bounce: 'Bouce',
  injection: 'Injection',
  delivery: 'Delivery',
  initial_open: 'Initial Open',
  open: 'Open',
  click: 'Click',
  out_of_band: 'Out-of-Band Bounce',
  policy_rejection: 'Policy Rejection',
  generation_failure: 'Generation Failure',
  generation_rejecetion: 'Generation Rejection',
  list_unsubscribe: 'List Unsubcribe',
  link_unusbscribe: 'Link Unsubcribe',
  delay: 'Delay',
  spam_complaint: 'Spam Complaint',
}

export const DESCRIPTIONS = {
  bounce: 'Your mailbox provider rejected the email!',
  injection: 'The email is being generated.',
  delivery: 'The email was received by your mailbox provider, it\'s likely in your inbox now. Try opening it!',
  initial_open: 'You opened the email! This event was recorded by a tracking pixel in the top section of the email. Try clicking a link in the email next!',
  open: 'You opened the email! This event was recorded by a tracking pixel in the bottom section of the email. Try clicking a link in the email next!',
  click: 'You clicked a link in the email. These events are recorded by wrapping the destination link with a tracking domain.',
  out_of_band: 'Your mailbox provider rejected the email after initially accepting.',
  policy_rejection: 'SparkPost did not create this email for some account related reason.',
  generation_failure: 'There was a technical problem creating your email.',
  generation_rejecetion: 'There was a problem creating your email.',
  delay: 'Your mailbox provider requested we attempt delivering the email later. Stay tuned for a delivery event.',
  spam_complaint: 'Oh no! You marked the email as spam, that wasn\'t very nice.',
}
