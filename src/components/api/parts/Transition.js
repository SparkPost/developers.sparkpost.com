import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { color, grayscale } from 'utils/colors'
import { weight } from 'utils/fonts'
import slugify from 'utils/api/slugify'
import mergeDuplicateTransactions from 'utils/api/mergeDuplicateTransactions'
import Debug from 'components/api/Debug'
import { Heading, BlockMarkdown, Row, Right } from 'components/api/components'
import Transaction from './Transaction'
import DataStructure from './DataStructure'

const Wrapper = styled(Row)`
  ${props =>
    props.index > 0 &&
    `
    padding-top: 3rem;
  `};
`

const TransitionHeading = Heading.extend`
  margin-top: 0;
`

const HrefWrapper = styled.div`
  border-top: 1px solid ${grayscale(8)};
  border-bottom: 1px solid ${grayscale(8)};
  padding: 0.5rem 0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
`
// prettier-ignore
const Method = styled.b`
  color: ${props => props.children === 'POST' && darken(0.175, color('green'))}
         ${props => props.children === 'GET' && color('blue')}
         ${props => props.children === 'PUT' && color('magenta')}
         ${props => props.children === 'DELETE' && color('red')};
  font-weight: ${weight('medium')};
  margin-right: 0.666666667rem;
`

const Href = styled.span`
  font-weight: ${weight('medium')};
  color: ${grayscale(4)};
`

function Parameters({ parameters }) {
  return (
    <DataStructure
      title="Parameters"
      isParameter={true}
      dataStructure={{ content: parameters }}
    />
  )
}

function Attributes({ attributes }) {
  return <DataStructure title="Request Body" dataStructure={attributes} />
}

export default function Transition({
  transition,
  resource,
  resourceGroup,
  index,
}) {
  const title = transition.title.toValue()
  const copy = transition.copy.toValue()
  const method = transition.method.toValue()
  const parameters = transition.hrefVariables
  const attributes = transition.data
  const transactions =
    transition.transactions.length > 0
      ? mergeDuplicateTransactions(transition.transactions)
      : []
  const href = (transition.href || {}).content || resource.href.content

  return (
    <Debug title="Transition">
      <Wrapper index={index}>
        <Right>
          {transactions.map((transaction, i) => (
            <Transaction
              key={i}
              transaction={transaction}
              transition={transition}
              resource={resource}
            />
          ))}
        </Right>
        {title && (
          <TransitionHeading
            className="block"
            level={3}
            id={slugify.transition({ resourceGroup, resource, transition })}
          >
            {title}
          </TransitionHeading>
        )}
        <div className="block">
          <HrefWrapper>
            <Method>{method}</Method>
            <Href>{`/api${href}`}</Href>
          </HrefWrapper>
        </div>
        {parameters && <Parameters parameters={parameters} />}
        {attributes && <Attributes attributes={attributes} />}
        {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
      </Wrapper>
    </Debug>
  )
}
