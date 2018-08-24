import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Panel from 'components/Panel'
import Markdown from 'components/Markdown'
import Link from 'components/Link'
import { grayscale } from 'utils/colors'
import { weight } from 'utils/fonts'

const markdownComponents = {
  h1({ children, ...props }) {
    return <h4 {...props}>{children}</h4>
  },
  h2({ children, ...props }) {
    return <h5 {...props}>{children}</h5>
  },
  h3({ children, ...props }) {
    return <h5 {...props}>{children}</h5>
  },
}

const ChangeMarkdown = styled(Markdown)`
  > div {
    > *:first-child {
      margin-top: 0;
    }

    > *:last-child {
      margin-bottom: 0;
    }
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`

const DateLabel = styled.span`
  font-size: 0.833333333rem;
  font-weight: ${weight('medium')};
  color: ${grayscale(4)};
`

// prettier-ignore
const DetailsSection = styled(({ isActive, ...props }) => (
  <Panel.Section {...props} />
))`
  display: ${props => props.isActive ? 'block' : 'none'};
`

// prettier-ignore
const ReadMore = styled(({ isActive, ...props }) => (
  <Link.ReadMore {...props}>
    {isActive ? 'hide' : 'read'} more
  </Link.ReadMore>
))`
  display: inline-block;
  margin-top: 0.5rem;

  i {
    transition: transform .15s;

    ${props => props.isActive && `
      transform: rotate(90deg);
    `}
  }
`

class Change extends Component {
  state = {
    isActive: this.props.expanded || false,
  }

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    const {
      change: {
        frontmatter: { title, date, rawDate, image, details },
        fields: { path },
        rawMarkdownBody: body,
      },
      expanded,
    } = this.props

    return (
      <Panel>
        <Panel.Header
          right={<DateLabel>{rawDate !== title && date}</DateLabel>}
        >
          <Panel.Title>
            <Link.Unstyled to={path}>
              {rawDate === title ? date : title}
            </Link.Unstyled>
          </Panel.Title>
        </Panel.Header>
        {image && (
          <img
            src={image}
            alt={`${title}`}
            style={{
              width: `100%`,
            }}
          />
        )}
        <Panel.Section>
          <ChangeMarkdown components={markdownComponents}>{body}</ChangeMarkdown>
          {!expanded &&
            details && (
              <ReadMore
                isActive={this.state.isActive}
                onClick={this.toggleActive}
              />
            )}
        </Panel.Section>
        {details && (
          <DetailsSection isActive={this.state.isActive}>
            <ChangeMarkdown components={markdownComponents}>{details}</ChangeMarkdown>
          </DetailsSection>
        )}
      </Panel>
    )
  }
}

export default Change

export const changeFragment = graphql`
  fragment Change on MarkdownRemark {
    frontmatter {
      title
      image
      details
      rawDate: date
      date(formatString: "MMMM D, YYYY")
    }
    fields {
      path
    }
    rawMarkdownBody
  }
`
