const merge = require('lodash/merge')
const SparkPost = require('sparkpost')
const sparkpost = new SparkPost()

const PREVIEW_TEMPLATE_ID = `substitution-repl`

// for updating the draft in dynamic previews
const generateTemplateContent = (html) => ({
  html,
  "subject": "subject",
  "from": {
      "email": "noreply@challenge.sparkpost.com",
      "name": "SparkPost"
  }
})

/**
 * Given html and substitution_data, this function renders a preview of the
 * combined result via the SparkPost API.
 *
 * There are two types of previews: dynamic and simple.
 *
 * Dynamic previews are previews that have dynamic content. Dynamic content
 * is content passed in through substitution_data.dynamic_html or
 * substitution_data.dynamic_plain which can contain expressions to
 * be render (.i.e. "hello {{name}}").
 *
 * Simple previews are previews without any dynamic content.
 *
 * We use dynamic content to render the simple previews to avoid updating
 * the template, unnecessarily. However, for dynamic previews to work properly
 * we have to update the template draft and _then_ preview the new draft.
 */
exports.handler = async function(event, context) {
  const body = JSON.parse(event.body)
  const { html, substitution_data: substitution_data_string } = body

  if (!html) {
    return sparkPostError('html is missing')
  }

  if (!substitution_data_string) {
    return sparkPostError('substitution_data is missing')
  }

  // convert substitution_data_string into a JSON object
  let substitution_data
  try {
    substitution_data = JSON.parse(substitution_data_string)
  } catch(e) {
    return sparkPostError(e.message)
  }

  if (/{{\s*render_dynamic_content.*}}/.test(html)) {
    return dynamicPreview({ html, substitution_data })
  } else {
    return simplePreview({ html, substitution_data })
  }

}


/**
 * Update the template draft and then preview it with the given
 * substitution_data to properly handle any dynamic content.
 */
function dynamicPreview({ html, substitution_data }) {
  return sparkpost.templates.update(PREVIEW_TEMPLATE_ID, {
    content: generateTemplateContent(html)
  })
  .then(() => {
    return sparkpost.templates.preview(PREVIEW_TEMPLATE_ID, {
      substitution_data,
      draft: true
    })
  })
  .then((response) => done(response))
  .catch((response) => done(response))
}


/**
 * Preview the published template which will render the dynamic
 * content in substitution_data.dynamic_html.html
 */
function simplePreview({ html, substitution_data }) {
  return sparkpost.templates.preview(PREVIEW_TEMPLATE_ID, merge({
    substitution_data,
    draft: 'false'
  }, {
    substitution_data: {
      dynamic_html: { html },
    }
  }))
  .then((response) => done(response))
  .catch((response) => done(response))
}

/**
 * Passthrough for SparkPost API responses
 */
function done(response) {
  // pass the response back to the client
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify(response, null, 2)
  })
}

/**
 * Function for returning SparkPost-like errors
 */
function sparkPostError(message) {
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify({
      errors: [
        {
          message,
        }
      ],
      statusCode: 400
    })
  })
}
