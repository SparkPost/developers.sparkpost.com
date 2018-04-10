import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'
import { color, grayscale, shadow } from '../utils/colors'
import { weight } from '../utils/fonts'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import Card from '../components/Card'
import ClientLibrary from '../components/ClientLibrary'
import Event from '../components/Event'
import BlogPost from '../components/BlogPost'

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

const Button = styled.button`
  background: transparent;
  font: inherit;
  border: 0;
  font-size: .888888889rem;
  color: ${color('orange')};
  font-weight: ${weight('medium')};
  cursor: pointer;
  outline: 0;

  i {
    font-size: .75rem;
    margin-left: .25rem;
    transition: .15s;
  }

  ${props => props.isOpen && css`
    i {
      transform: rotate(90deg);
    }`}
`

const Body = styled.div`
  padding: 1.5rem 1rem;

  > * {
    margin-top: 0;
  }
`

const Notes = Body.extend`
  display: none;
  border-top: 1px solid ${grayscale(8)};


  ${props => props.isOpen && css`
  display: block;
  `}
`

class Changelog extends React.Component {

  constructor(props) {
    super(props)

    this.state = { notesOpen: false }
  }

  toggleNotes = () => {
    this.setState({ notesOpen: !this.state.notesOpen })
  }

  render() {
    return (
      <Panel>
        <Header>
          <PanelTitle>
            December 8, 2017
          </PanelTitle>
          <Button isOpen={this.state.notesOpen} onClick={this.toggleNotes}>notes <i className="fa fa-chevron-right"></i></Button>
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
        <Notes isOpen={this.state.notesOpen}>
          <h4>Title goes here</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores fugiat non dignissimos voluptate, veniam sunt debitis numquam aliquam aperiam.</p>
        </Notes>
      </Panel>)
  }
}

const IndexPage = () => (
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
            <Changelog />
          </Column>
        </Row>
      </Container>
    </Section>
  </div>
)

export default IndexPage
