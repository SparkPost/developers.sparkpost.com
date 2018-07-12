import React from 'react'
import styled, { css } from 'styled-components'
import { color, grayscale, shadow } from 'utils/colors'
import { weight } from 'utils/fonts'
import Layout from 'components/Layout'
import { Container, Row, Column } from 'components/Grid'
import Section from 'components/Section'
import Link from 'components/Link'
import Anchor from 'components/Anchor'
import Panel from 'components/Panel'
import Markdown from 'components/Markdown'

const Subtitle = styled.p`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : color('gray'))};
  margin-bottom: 2rem;
  line-height: 28px;
  font-size: 1rem;
`

// Link.Action styles with Anchor.Link functionality
const Button = Link.Action.withComponent(Anchor.Link).extend`
  i {
    font-size: .75rem;
    margin-left: .25rem;
    transition: .15s;
  }

  ${props =>
    props.expanded &&
    css`
      i {
        transform: rotate(90deg);
      }
    `}
`

class Change extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: !!props.expanded }
  }

  toggleNotes = e => {
    // don't jump down when closing the notes area
    if (this.state.expanded) e.preventDefault()

    this.setState({ expanded: !this.state.expanded })
  }

  renderToggle() {
    return (
      this.props.notes && (
        <Button
          title={`${this.props.date} Notes`}
          expanded={this.state.expanded}
          onClick={this.toggleNotes}
        >
          notes <i className="fa fa-chevron-right" />
        </Button>
      )
    )
  }

  renderContent() {
    return (
      this.props.sections &&
      this.props.sections.map(({ title, items }) => (
        <div>
          <h4>{title}</h4>
          <ul>{items && items.map(({ text }) => <li>{text}</li>)}</ul>
        </div>
      ))
    )
  }

  renderNotes() {
    return (
      this.props.notes &&
      this.state.expanded && (
        <Anchor.Target title={`${this.props.date} Notes`}>
          <Panel.Section>
            <Markdown
              components={{
                h1(props) {
                  return <h4 {...props} />
                },
                h2(props) {
                  return <h4 {...props} />
                },
                h3(props) {
                  return <h4 {...props} />
                },
                h4(props) {
                  return <h3 {...props} />
                },
                h5(props) {
                  return <h3 {...props} />
                },
                h6(props) {
                  return <h3 {...props} />
                },
              }}
            >
              {this.props.notes}
            </Markdown>
          </Panel.Section>
        </Anchor.Target>
      )
    )
  }

  render() {
    return (
      <Panel>
        <Panel.Header right={this.renderToggle()}>
          <Anchor title={this.props.date}>
            <Panel.Title>{this.props.date}</Panel.Title>
          </Anchor>
        </Panel.Header>
        <Panel.Section>{this.renderContent()}</Panel.Section>
        {this.renderNotes()}
      </Panel>
    )
  }
}

const ChangelogPage = props => (
  <Layout {...props}>
    <Section light>
      <Container>
        <h1 className="textCenter">Changelog</h1>
        <Row>
          <Column md={8} mdOffset={2}>
            <Subtitle>
              Keep up-to-date with all changes to the SparkPost API
            </Subtitle>
          </Column>
        </Row>
        <Row>
          <Column md={8} mdOffset={2}>
            {props.data.changelogJson.changes.map(change => (
              <Change
                {...change}
                expanded={
                  props.location.hash ===
                  `#${Anchor.slugify(`${change.date} Notes`)}`
                }
              />
            ))}
          </Column>
        </Row>
      </Container>
    </Section>
  </Layout>
)

export default ChangelogPage

export const pageQuery = graphql`
  query changelogQuery {
    changelogJson {
      changes {
        date(formatString: "MMMM D, YYYY")
        notes
        sections {
          title
          items {
            text
          }
        }
      }
    }
  }
`
