import React from 'react'
import styled from 'styled-components'
import { grayscale, color, shadow } from '../utils/colors'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import BlogPost from '../components/BlogPost'
import ClientLibrary from '../components/ClientLibrary'
import Panel from '../components/Panel'
import Link from '../components/Link'

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
        <h1 className="textCenter">Libraries & Integrations</h1>
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
        <Container>
          <Row center="xs">
            <Column md={10}>
              <h2>Integrations</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit.</p>
              <Row>
                <Column md={2}>
                  <Panel sectioned>
                    <img src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/logomagento-lg.png" alt=""/>
                  </Panel>
                </Column>
                <Column md={2}>
                  <Panel sectioned>
                    <img src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/logomagento-lg.png" alt=""/>
                  </Panel>
                </Column>
                <Column md={2}>
                  <Panel sectioned>
                    <img src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/logomagento-lg.png" alt=""/>
                  </Panel>
                </Column>
                <Column md={2}>
                  <Panel sectioned>
                    <img src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/logomagento-lg.png" alt=""/>
                  </Panel>
                </Column>
                <Column md={2}>
                  <Panel sectioned>
                    <img src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/logomagento-lg.png" alt=""/>
                  </Panel>
                </Column>
                <Column md={2}>
                  <Panel sectioned>
                    <img src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/logomagento-lg.png" alt=""/>
                  </Panel>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Container>
    </Section>
    <Section>
      <Container>
        <Container>
          <Row center="xs">
            <Column md={10}>
              <h2>Marketplaces</h2>
              <Row>
                <Column md={6}>
                  <Panel style={{ border: `1px solid ${grayscale('light')}`}}>
                    <Panel.Header right={
                      <Link.Action>learn more</Link.Action>
                    }>
                      <img src="https://sakusthought.files.wordpress.com/2012/05/amazon-web-services.png?w=108" alt=""/>
                    </Panel.Header>
                    <Panel.Section>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non alias labore beatae eligendi, saepe asperiores, amet incidunt culpa. Porro in sed ipsum eveniet adipisci asperiores reprehenderit, sapiente quisquam ducimus dicta.</p>
                    </Panel.Section>
                  </Panel>
                </Column>
                <Column md={6}>
                  <Panel>
                    <Panel.Header right={
                      <Link.Action>learn more</Link.Action>
                    }>
                      <img src="https://sakusthought.files.wordpress.com/2012/05/amazon-web-services.png?w=108" alt=""/>
                    </Panel.Header>
                    <Panel.Section>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel veniam accusantium, tenetur excepturi blanditiis at vero nemo illum nam natus officia cumque earum, iste saepe maxime voluptas vitae distinctio maiores!</p>
                    </Panel.Section>
                  </Panel>
                </Column>
                <Column md={6}>
                  <Panel>
                    <Panel.Header right={
                      <Link.Action>learn more</Link.Action>
                    }>
                      <img src="https://sakusthought.files.wordpress.com/2012/05/amazon-web-services.png?w=108" alt=""/>
                    </Panel.Header>
                    <Panel.Section>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum similique quisquam cupiditate dicta quibusdam possimus in sit saepe est hic dolor laborum eos odit deserunt iusto, nesciunt facere, esse.</p>
                    </Panel.Section>
                  </Panel>
                </Column>
                <Column md={6}>
                  <Panel>
                    <Panel.Header right={
                      <Link.Action>learn more</Link.Action>
                    }>
                      <img src="https://sakusthought.files.wordpress.com/2012/05/amazon-web-services.png?w=108" alt=""/>
                    </Panel.Header>
                    <Panel.Section>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum similique quisquam cupiditate dicta quibusdam possimus in sit saepe est hic dolor laborum eos odit deserunt iusto, nesciunt facere, esse.</p>
                    </Panel.Section>
                  </Panel>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Container>
    </Section>
  </div>
)
