import React from 'react'
import Markdown from 'components/Markdown'

function format(content) {
  try {
    return JSON.stringify(JSON.parse(content.trim()), null, 2)
  } catch (e) {
    return content
  }
}

const Json = ({ children, ...props }) => {
  return (
    <Markdown {...props}>
      {`\`\`\`json
${format(children)}
\`\`\``}
    </Markdown>
  )
}

export default Json
