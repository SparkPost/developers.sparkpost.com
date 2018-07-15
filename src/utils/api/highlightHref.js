import dataStructureToJson from './dataStructureToJson'
import escapeRegExp from 'escape-string-regexp'
import { isUndefined } from 'lodash'

export default function highlightHref(href, hrefVariables) {
  let modifiedHref = href

  if (hrefVariables) {
    const jsonArray = dataStructureToJson({ content: hrefVariables })

    for (let param of jsonArray) {
      const value = isUndefined(param.value) ? '' : param.value
      // replace it if it is a url parameter
      modifiedHref = modifiedHref.replace(
        `{${param.name}}`,
        `<span class="hljs-string">${value}</span>`
      )

      // add the value if it is a query parameter or remove it if the value is empty
      const replacementString = isUndefined(param.value)
        ? '$1$2$3'
        : `$1$2<span class="hljs-literal">${
            param.name
          }</span>=<span class="hljs-string">${value}</span>&$3`
      modifiedHref = modifiedHref.replace(
        // eslint-disable-next-line
        new RegExp(
          `(.+)({\\?(?:.+,)?)${escapeRegExp(param.name)}((?:,.+)?})`,
          'i'
        ),
        replacementString
      )
    }

    // remove the comma deliminators
    modifiedHref = modifiedHref.replace(/&,+/g, '&')

    // remove the wrapper notation from the query params
    modifiedHref = modifiedHref.replace(/(.+){\?(.+)}/i, `$1?$2`)

    // remove the extra ampersand
    modifiedHref = modifiedHref.replace(/&$/, '')

    // if there was no variables inserted we end up with "{?}" on the end - we should remove it
    modifiedHref = modifiedHref.replace(/{\?}$/, '')
  }

  return modifiedHref
}
