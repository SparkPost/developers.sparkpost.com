import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { isString, max, get, first, last } from 'lodash'
import axios from 'axios'
import { debounce } from 'lodash'
import { rgba } from 'polished'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale, color, shadow } from 'utils/colors'
import { monospace, weight } from 'utils/fonts'

const Wrapper = styled.div.attrs({ className: 'block' })`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

// prettier-ignore
const Code = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${grayscale('light')};
  border: 1px solid ${grayscale(8)};
  border-radius: 4px 4px 0 0;
  ${mediaQuery('md', `
    width: 60%;
    border-radius: 4px 0 0 4px;
  `)}
`

// prettier-ignore
const Output = styled.div`
  width: 100%;
  border: 1px solid ${grayscale(8)};
  border-top-width: 0;
  border-radius: 0 0 4px 4px;
  display: flex;
  min-height: 100px;
  ${mediaQuery('md', `
    width: 40%;
    border-top-width: 1px;
    border-left-width: 0;
    border-radius: 0 4px 4px 0;
  `)}
`

const Textarea = styled.textarea`
  ${monospace}
  color: ${grayscale('dark')};
  width: 100%;
  border: 0;
  outline: 0;
  resize: none;
  background: transparent;
  box-sizing: content-box;
  padding: .5rem;
  min-height: 100px;
  overflow: auto;
`

const Results = styled.div`
  ${monospace}
  color: ${grayscale('dark')};
  white-space: pre;
  height: 100%;
  outline: 0;
  overflow: auto;
  padding: .5rem;
`

const Errors = styled(({ errors, ...props }) => (
  <div {...props}>
    {errors.map(error => {
      return <div key={error.message}>{JSON.stringify(error, null, 2)}</div>
    })}
  </div>
))`
  ${monospace} width: 100%;
  background: #fcf2f4;
  color: #ec4852;
  white-space: pre;
  overflow: auto;
  padding: 0.5rem;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

// show the loading background after half a second
const Spinner = styled.div`
  z-index: 1;
  position: absolute;
  transform: translateZ(0);
  top: 0.55rem;
  right: 0.5rem;
  border-style: solid;
  border-width: 0.2em;
  border-color: ${color('blue')};
  border-color: ${rgba(grayscale('medium'), 0.25)};
  border-left-color: transparent;
  padding: 0;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: ${rotate360} 0.7s infinite linear;
  opacity: 0;
  transition: opacity 0.15s;
  ${props => props.visible && `opacity: 1;`};
`

const Triggers = styled.div`
  padding: 0.5rem;
  display: flex;
`

// prettier-ignore
const Trigger = styled(({ isActive, ...props }) => <div {...props}/>)`
  font-size: 0.9rem;
  font-weight: ${weight('medium')};
  border-radius: 2px;
  padding: 0.25rem 0.5rem;
  color: ${grayscale('medium')};
  margin-right: 0.5rem;
  cursor: pointer;
  border: 1px solid ${grayscale(7)};

  ${props =>props.isActive && `
    background: ${grayscale('white')};
    box-shadow: ${shadow('base')};
  `};
`

const Tabs = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`

// prettier-ignore
const Tab = styled(({ isActive, ...props }) => <div {...props}/>)`
  width: 100%;
  display: none;
  ${props => props.isActive &&`
    display: flex;
  `};
`

/**
 * get the block type: will be `json`, `html, `result`, etc
 */
const getBlockType = component => {
  return last(
    get(component, 'props.children[0].props.className', '').split('language-')
  ).trim()
}

/**
 * returns the number of lines in a string
 */
const countLines = str => str.split(/\r\n|\r|\n/).length

/**
 * converts a mdast node to a string
 */
const mdastToString = ({ props: { children } }) => {
  return children
    .map(component => {
      if (isString(component)) {
        return component
      } else {
        return mdastToString(component)
      }
    })
    .join('')
}

/**
 * Textarea that has support for tabbing
 */
class CodeEditor extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  onKeyDown = event => {
    // tab was pressed
    if (event.keyCode === 9) {
      event.preventDefault()

      const { value } = this.props
      const { selectionStart, selectionEnd } = event.target

      const tabbedValue = [
        value.substring(0, selectionStart),
        '  ',
        value.substring(selectionEnd),
      ].join('')

      this.props.onChange(
        {
          target: {
            value: tabbedValue,
          },
        },
        () => {
          this.inputRef.current.selectionStart = this.inputRef.current.selectionEnd =
            selectionStart + 2
        }
      )
    }
  }

  render() {
    return (
      <Textarea
        onKeyDown={this.onKeyDown}
        innerRef={this.inputRef}
        {...this.props}
      />
    )
  }
}

class REPL extends Component {
  constructor(props) {
    super(props)

    // calculate the inital heights for the textarea
    const htmlLines = countLines(props.html)
    const substitutionDataLines = countLines(props.substitution_data)

    // get the tallest height
    const editorHeight = 16 * max([htmlLines, substitutionDataLines])

    this.state = {
      code: {
        substitution_data: props.substitution_data,
        html: props.html,
      },
      response: {
        results: props.results,
        errors: [],
      },
      loading: true,
      activeTab: props.activeTab || 0,
      editorHeight,
    }
  }

  onChange = (code, done) => {
    const newCode = {
      ...this.state.code,
      ...code,
    }

    this.setState({ code: newCode, loading: true }, done)
    this.debouncedFetchPreview({ code: newCode })
  }

  // request a preview from the API
  fetchPreview = async ({ code }) => {
    try {
      const { data } = await axios.post(
        '/.netlify/functions/substitution-repl',
        code
      )
      const { results, errors = [] } = data

      this.setState({
        response: { results: get(results, 'html', ''), errors },
        loading: false,
      })
    } catch (e) {
      this.setState({
        response: { errors: [{ message: e.message }] },
        loading: false,
      })
    }
  }

  debouncedFetchPreview = debounce(this.fetchPreview, 500)

  /**
   * if we weren't given a default result, fetch a preview
   */
  componentDidMount() {
    const { results } = this.state.response

    if (results.length > 0) {
      this.setState({ loading: false })
    } else {
      this.fetchPreview(this.state)
    }
  }

  render() {
    const {
      loading,
      activeTab,
      code,
      response,
      editorHeight: height,
    } = this.state

    return (
      <Wrapper>
        <Code>
          <Triggers>
            <Trigger
              isActive={activeTab === 0}
              onClick={() => this.setState({ activeTab: 0 })}
            >
              HTML
            </Trigger>
            <Trigger
              isActive={activeTab === 1}
              onClick={() => this.setState({ activeTab: 1 })}
            >
              Data
            </Trigger>
          </Triggers>
          <Tabs>
            <Tab isActive={activeTab === 0}>
              <CodeEditor
                style={{ height }}
                value={code.html}
                onChange={(event, done) =>
                  this.onChange(
                    {
                      html: event.target.value,
                    },
                    done
                  )
                }
              />
            </Tab>
            <Tab isActive={activeTab === 1}>
              <CodeEditor
                style={{ height }}
                value={code.substitution_data}
                onChange={(event, done) =>
                  this.onChange(
                    {
                      substitution_data: event.target.value,
                    },
                    done
                  )
                }
              />
            </Tab>
          </Tabs>
        </Code>
        <Output>
          <Spinner visible={loading} />
          {response.errors.length > 0 ? (
            <Errors errors={response.errors} />
          ) : (
            <Results>{response.results}</Results>
          )}
        </Output>
      </Wrapper>
    )
  }
}

/**
 * Convert the markdown into props for the REPL component
 */
export default ({ children }) => {
  const codeBlocks = children.filter(
    component =>
      component.type &&
      (component.type.displayName || component.type.name === 'pre')
  )

  const jsonBlock = codeBlocks.find(
    component => getBlockType(component) === 'json'
  )
  const htmlBlock = codeBlocks.find(
    component => getBlockType(component) === 'html'
  )
  const resultsBlock = codeBlocks.find(
    component => getBlockType(component) === 'results'
  )

  // default html and substitution data
  const html = htmlBlock ? mdastToString(htmlBlock) : ''
  const results = resultsBlock ? mdastToString(resultsBlock) : ''
  let json = jsonBlock ? mdastToString(jsonBlock) : '{}'
  try {
    json = JSON.stringify(JSON.parse(json), null, 2)
  } catch (e) {
    // fallbacks to the broken json
  }

  const isJsonFirst =
    codeBlocks.length > 0 && getBlockType(first(codeBlocks)) === 'json'

  // set the the second tab to active, if the json block was written first
  return (
    <REPL
      html={html}
      results={results}
      substitution_data={json}
      activeTab={isJsonFirst ? 1 : 0}
    />
  )
}
