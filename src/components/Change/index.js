import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Panel from 'components/Panel'
import Markdown from 'components/Markdown'
import Link from 'components/Link'
import { grayscale } from 'utils/colors'
import { weight } from 'utils/fonts'

const markdownComponents = {
  h1(props) {
    return <h4 {...props} />
  },
  h2(props) {
    return <h5 {...props} />
  },
}

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
          <Markdown components={markdownComponents}>{body}</Markdown>
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
            <Markdown components={markdownComponents}>{details}</Markdown>
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
