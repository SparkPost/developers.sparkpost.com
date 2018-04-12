import React from 'react'
import styled from 'styled-components'
import { grayscale, color } from '../utils/colors'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import BlogPost from '../components/BlogPost'
import ClientLibrary from '../components/ClientLibrary'

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


export default () => (
  <div>
    <Section light>
      <Container>
        <Title>Libraries & Integrations</Title>
      </Container>
    </Section>
    <Section>
      <Container>
        <h2>Client Libraries</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit.</p>
        <Container>
          <Row>
            <Column md={8} mdOffset={2}>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Node.js" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="PHP" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="Python" />
                </Column>
              </Row>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Java" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="Elixir" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="NodeMailer" />
                </Column>
              </Row>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Go" />
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Container>
    </Section>
    <Section light>
      <Container>
        <h2>Integrations</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit.</p>
        <Container>
          <Row>
            <Column md={8} mdOffset={2}>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Node.js" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="PHP" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="Python" />
                </Column>
              </Row>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Java" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="Elixir" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="NodeMailer" />
                </Column>
              </Row>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Go" />
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Container>
    </Section>
    <Section>
      <Container>
        <h2>Marketplaces</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit.</p>
        <Container>
          <Row>
            <Column md={8} mdOffset={2}>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Node.js" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="PHP" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="Python" />
                </Column>
              </Row>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Java" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="Elixir" />
                </Column>
                <Column md={4}>
                  <ClientLibrary img="" title="NodeMailer" />
                </Column>
              </Row>
              <Row>
                <Column md={4}>
                  <ClientLibrary img="" title="Go" />
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Container>
    </Section>
  </div>
)
