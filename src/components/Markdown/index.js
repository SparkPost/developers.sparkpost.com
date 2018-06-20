import React from 'react'
import { castArray } from 'lodash'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
// import rehypeRaw from 'babel-loader?presets=env!hast-util-raw'
import rehypeHighlight from 'rehype-highlight'
import rehypeReact from 'rehype-react'
import Link from 'components/Link'

// console.log(rehypeRaw.toString())

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHTML: true })
  .use(rehypeRaw)
  .use(rehypeHighlight)

const baseMarkdownProcessor = markdownProcessor().use(rehypeReact, {
  createElement: React.createElement,
  components: {
    a: Link,
  },
})

/**
 * Component to render markdown to React
 *
 * <Markdown components={{
 *   h1: MyH1,
 *   custom-component: CustomComponent
 * }}>
 * # Heading
 *
 * [Sign up](https://app.sparkpost.com/join) for SparkPost..
 * </Markdown>
 */
export default ({ children, components, ...props }) => {
  const markdown = castArray(children).join('')

  let processor = baseMarkdownProcessor

  /* create a custom processor if given components */
  if (components) {
    processor = markdownProcessor().use(rehypeReact, {
      createElement: React.createElement,
      components: {
        a: ({ href, ...props }) => <Link to={href} {...props} />,
        ...components,
      },
    })
  }

  return <div {...props}>{processor.processSync(markdown).contents}</div>
}
