import React from 'react'
import Markdown from 'components/Markdown'

const Json = ({ children, ...props }) => {
  return (<Markdown {...props}>
{`\`\`\`json
${children}
\`\`\``}
</Markdown>)
}

export default Json