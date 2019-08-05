import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { color, grayscale } from 'utils/colors'
import { uppercase, weight } from 'utils/fonts'
import Markdown from 'components/Markdown'
import { isString, isUndefined, isEmpty, first, uniq } from 'lodash'
import dataStructureToJson from 'utils/api/dataStructureToJson'

const AttributesTitle = styled.h4`
  && {
    ${uppercase} font-weight: ${weight('medium')};
    font-size: 0.9rem;
    color: ${grayscale(4)};
    margin: 2rem 0 0.5rem;
  }
`

const AttributesWrapper = styled.div`
  margin-bottom: 1rem;
`

function toType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}

const Enums = styled.p`
  margin-top: 0.5rem;
`

const EnumTitle = styled.b`
  color: ${grayscale(4)};
  font-size: 0.9rem;
  font-weight: ${weight('medium')};
`

const nativeTypes = ['boolean', 'string', 'number', 'object', 'array', 'enum']

function Attribute(props) {
  let {
    name,
    type,
    description,
    required,
    samples,
    children,
    value,
    default: defaultValue,
    enumerations,
    isParameter,
  } = props

  const sample = first(samples)
  const sampleTypes =
    sample && type === 'array' && sample.map(member => toType(member))
  const actualType = nativeTypes.includes(type) ? type : 'object'

  let isMultipleTypes, types
  if (!!enumerations && actualType === 'enum') {
    types = uniq(enumerations.map(({ type }) => type))
    isMultipleTypes = types.length > 1
  }

  if (
    !!enumerations &&
    !children &&
    enumerations.find(({ type }) => type === 'object')
  ) {
    children = enumerations.find(({ type }) => type === 'object').children
  }

  return (
    <AttributeWrapper>
      <div>
        <Name>{name}</Name>{' '}
        <Property>
          {isMultipleTypes ? types.join(' or ') : type}
          {actualType === 'array' &&
            ((sampleTypes &&
              uniq(sampleTypes).length === 1 &&
              ` of ${first(sampleTypes)}s`) ||
              (value &&
                value.length === 1 &&
                isEmpty(value[0]) &&
                ` of ${toType(
                  value[0] || ''
                )}s`)) /* if its an array, array of what??? */}
        </Property>
        {'' /* required, value, and default are all mutually exlusive */}
        {required && (
          <Fragment>
            {' '}
            <Required>required</Required>
          </Fragment>
        )}
        {!isParameter &&
          actualType !== 'object' &&
          !isEmpty(actualType === 'array' ? value[0] : value) && (
            <Property>
              , value is{' '}
              <code>{isString(value) ? value : JSON.stringify(value)}</code>
            </Property>
          )}
        {actualType !== 'object' &&
          !isUndefined(defaultValue) && (
            <Property>
              , default is{' '}
              <code>
                {isString(defaultValue)
                  ? defaultValue
                  : JSON.stringify(defaultValue)}
              </code>
            </Property>
          )}
      </div>
      {description && <AttributeMarkdown>{description}</AttributeMarkdown>}
      {'' /* samples should be shown through example JSON blobs */}
      {
        '' /* type !== 'object' && sample && <div>Example: <code>{isString(sample) ? sample : JSON.stringify(sample)}</code></div> */
      }
      {enumerations &&
        !isMultipleTypes && (
          <Enums>
            <EnumTitle>Possible Values:</EnumTitle>{' '}
            {enumerations.map(({ value }, i) => (
              <Fragment key={i}>
                <code>{value}</code>
                {i !== enumerations.length - 1 ? ', ' : ''}
              </Fragment>
            ))}
          </Enums>
        )}
      {children &&
        children.length > 0 && (
          <AttributeChildren>
            {children.map((props, i) => (
              <Attribute key={i} {...props} />
            ))}
          </AttributeChildren>
        )}
    </AttributeWrapper>
  )
}

const AttributeWrapper = styled.div`
  padding: 0.888888889rem 0;
  border-bottom: 1px solid ${grayscale(8)};

  div &:first-of-type {
    border-top: 1px solid ${grayscale(8)};
  }

  p {
    font-size: 0.95rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`

const Property = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: ${weight('medium')};
  color: ${grayscale(4)};

  code {
    color: ${grayscale('medium')};
  }
`

const Name = styled.span`
  display: inline-block;
  font-size: 1rem;
  margin-right: 0.333333333rem;
  font-weight: ${weight('medium')};
  color: ${grayscale('medium')};
`

const Required = styled(Property)`
  margin-left: 0.333333333rem;

  && {
    color: ${color('mustard')};
  }
`

const AttributeMarkdown = styled(Markdown)`
  padding-top: 0.25rem;
`

const ChildrenWrapper = styled.div`
  border: 1px solid ${grayscale(8)};
  border-radius: 4px;
  margin: 0.833333333rem 0 0.333333333rem 1rem;

  &:before {
    width: 0.5rem;
  }

  /* extra specificity to fix some weird server-side vs client-side rendering */
  && {
    ${AttributeWrapper} {
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`

class AttributeChildren extends Component {
  constructor(props) {
    super(props)

    this.state = { open: false }
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <ChildrenWrapper>
        <ChildrenToggle onClick={this.toggleOpen}>
          {this.state.open ? 'Hide' : 'Show'} attributes
        </ChildrenToggle>
        {this.state.open && this.props.children}
      </ChildrenWrapper>
    )
  }
}

const ChildrenToggle = styled.button`
  color: ${color('blue')};
  border: 0;
  background: transparent;
  font: inherit;
  font-weight: ${weight('medium')};
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  width: 100%;
  display: block;
  outline: 0;
  cursor: pointer;
  text-align: left;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export default function DataStructure({
  title = 'Request Body',
  dataStructure,
  jsonArray,
  isParameter,
  ...props
}) {
  jsonArray = jsonArray || dataStructureToJson(dataStructure)

  return (
    <AttributesWrapper className="block" {...props}>
      {title && (
        <AttributesTitle>
          {title.trim().length > 0 ? title : <span>&nbsp;</span>}
        </AttributesTitle>
      )}
      {jsonArray.map((props, i) => (
        <Attribute key={i} isParameter={isParameter} {...props} />
      ))}
    </AttributesWrapper>
  )
}
