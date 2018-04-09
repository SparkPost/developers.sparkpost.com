import React from 'React'
import { Container, Row, Column } from '../components/Grid'
import { grayscale, color } from '../utils/colors'
import styled from 'styled-components'
import BlogPost from '../components/BlogPost'

const Title = styled.h1`
  text-align: center;
  color: ${color('gray')};
`

const CodeBlock = styled.code`
  border-top: 4px solid ${color('orange')};
  display: block;
  background-color: white;
  padding: 8px;
  font-family: 'Monaco';
`

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : grayscale('dark'))};
`

export default () => (
  <div>
    <Container background={grayscale('light')}>
      <Title>SparkPost and Node.js</Title>
      <Row>
        <Column md="8" mdOffset="2">
          <CodeBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CodeBlock>
        </Column>
      </Row>
    </Container>
    <Container background={grayscale('white')} />
    <Container background={grayscale('light')}>
      <SectionTitle>Post About Node</SectionTitle>
      <Row>
        <Column md="10" mdOffset="1">
          <Row>
            <Column md="4">
              <BlogPost />
            </Column>
            <Column md="4">
              <BlogPost />
            </Column>
            <Column md="4">
              <BlogPost />
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </div>
)
