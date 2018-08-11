const merge = require('lodash/merge')
const SparkPost = require('sparkpost')
const sparkpost = new SparkPost()

const PREVIEW_TEMPLATE_ID = `substitution-repl`

exports.handler = async function(event, context, callback) {
  const body = JSON.parse(event.body)

  if (!body.hasOwnProperty('html') || !body.hasOwnProperty('substitution_data')) {
    // mimic the SparkPost error response
    return error('html or substitution_data is missing', callback)
  }

  try {
    sparkpost.templates.preview(PREVIEW_TEMPLATE_ID, merge({
      substitution_data: JSON.parse(body.substitution_data)
    }, {
      substitution_data: {
        dynamic_html: {
          html: body.html
        },
      }
    }))
    .then((response) => done(response, callback))
    .catch((response) => done(response, callback))
  }
  catch(e) {
    return error(e.message, callback)
  }
}


function done(response, callback) {
  // pass the response back to the client
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response, null, 2)
  })
}


function error(message, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      errors: [
        {
          message,
          description: message
        }
      ],
      statusCode: 400
    })
  })
}
