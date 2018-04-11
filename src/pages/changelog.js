import React from 'react'
import styled, { css } from 'styled-components'
import { color, grayscale, shadow } from '../utils/colors'
import { weight } from '../utils/fonts'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import Link from '../components/Link'
import Anchor from '../components/Anchor'

const Title = styled.h1`
  text-align: center;
  color: ${color('gray')};
`

const Subtitle = styled.p`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : color('gray'))};
  margin-bottom: 2rem;
  line-height: 28px;
  font-size: 1rem;
`

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : grayscale('dark'))};
`

const Panel = styled.div`
  background: ${grayscale('white')};
  box-shadow: ${shadow(1)};
`

const Header = styled.div`
  padding: .888888889rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${grayscale(8)};
`

const PanelTitle = styled.h3`
  margin: 0;
`


const Body = styled.div`
  padding: 1.5rem 1rem;

  > * {
    margin-top: 0;
  }
`

// Link.Action styles with Anchor.Link functionality
const Button = Link.Action.withComponent(Anchor.Link).extend`
  i {
    font-size: .75rem;
    margin-left: .25rem;
    transition: .15s;
  }

  ${props => props.expanded && css`
    i {
      transform: rotate(90deg);
    }`}
`

// Panel Body styles with Anchor.Target functionality
const Notes = Body.withComponent(Anchor.Target).extend`
  display: none;
  border-top: 1px solid ${grayscale('light')};


  ${props => props.expanded && css`
  display: block;
  `}
`

class Changelog extends React.Component {

  constructor(props) {
    super(props)

    this.state = { expanded: props.expanded || false }
  }

  toggleNotes = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <Panel>
        <Header>
          <Anchor title="December 8, 2017">
            <PanelTitle>
              December 8, 2017
            </PanelTitle>
          </Anchor>
          <Button title="December 8, 2017 Notes" expanded={this.state.expanded} onClick={this.toggleNotes}>notes <i className="fa fa-chevron-right"></i></Button>
        </Header>
        <Body>
          <h4>Added</h4>
          <p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </p>
          <h4>Removed</h4>
          <p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </p>
        </Body>
        <Notes expanded={this.state.expanded} title="December 8, 2017 Notes">
          <h4>Title goes here</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores fugiat non dignissimos voluptate, veniam sunt debitis numquam aliquam aperiam.</p>
        </Notes>
      </Panel>)
  }
}

const ChangelogPage = (props) => (
  <div>
    <Section light>
      <Container>
        <Title>Changelog</Title>
        <Row>
          <Column md={8} mdOffset={2}>
            <Subtitle>
              Keep up-to-date with all changes to the SparkPost API
            </Subtitle>
          </Column>
        </Row>
        <Row>
          <Column md={8} mdOffset={2}>
            <Changelog expanded={props.location.hash === '#December-8-2017-Notes'} />
          </Column>
        </Row>
      </Container>
    </Section>
  </div>
)

export default ChangelogPage
