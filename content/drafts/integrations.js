import React from 'react'
import styled from 'styled-components'
import { grayscale, color, shadow } from '../utils/colors'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import BlogPost from '../components/BlogPost'
import ClientLibrary from '../components/ClientLibrary'
import Anchor from '../components/Anchor'
import Panel from '../components/Panel'
import Link from '../components/Link'
import { weight } from '../utils/fonts'
import { StickyContainer, Sticky } from 'react-sticky'

const CodeBlock = styled.code`
  border-top: 4px solid ${color('orange')};
  display: block;
  background-color: white;
  padding: 8px;
  font-family: 'Monaco';
`

const Nav = styled.ul`
  margin: 0;
  padding: 0 1.5rem;
  list-style: none;
`

const NavItemLi = styled.li`
  font-weight: ${weight('medium')};

  ${props =>
    props.light
      ? `
    color: ${grayscale(4)};
    margin: .65rem 0;
  `
      : `
    margin: .75rem 0;
  `};
`

const NavItem = ({ light, ...props }) => (
  <NavItemLi light={light}>
    <Link.Unstyled {...props} />
  </NavItemLi>
)

const NavDivider = styled.li`
  border-top: 1px solid ${grayscale(8)};
`

const BorderedPanel = styled(props => <Panel {...props} />)`
  border: 1px solid ${grayscale(8)};
`

const Integration = props => (
  <Column md={2} {...props}>
    <BorderedPanel sectioned>
      <img
        src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/logomagento-lg.png"
        alt=""
      />
    </BorderedPanel>
  </Column>
)

export default () => (
  <div>
    <Section light>
      <Container>
        <h1 className="textCenter">Libraries & Integrations</h1>
      </Container>
    </Section>

    <Section>
      <StickyContainer>
        <Container>
          <Row>
            <Column md={3}>
              <Sticky topOffset={-80}>
                {({ style, isSticky, distanceFromTop }) => (
                  <div style={{ ...style, top: isSticky ? 80 : 0, zIndex: 10 }}>
                    <Nav>
                      <NavItem to={`#${Anchor.slugify('Client Libraries')}`}>
                        Client Libraries
                      </NavItem>
                      <NavItem to={`#${Anchor.slugify('Integrations')}`}>
                        Integrations
                      </NavItem>
                      <NavItem to={`#${Anchor.slugify('Marketplaces')}`}>
                        Marketplaces
                      </NavItem>
                      <NavDivider />
                      <NavItem to="https://www.sparkpost.com/partners/" light>
                        Partners
                      </NavItem>
                      <NavItem to="" light>
                        Add your integration
                      </NavItem>
                    </Nav>
                  </div>
                )}
              </Sticky>
            </Column>
            <Column md={9}>
              <Section spacingTop="none">
                <Anchor.Target title="Client Libraries">
                  <h2>Client Libraries</h2>
                </Anchor.Target>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus, impedit.
                </p>
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
              </Section>
              <Section>
                <Anchor.Target title="Integrations">
                  <h2>Integrations</h2>
                </Anchor.Target>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus, impedit.
                </p>
                <Row>
                  {Array.from(new Array(20)).map(() => <Integration />)}
                </Row>
              </Section>
              <Section spacingBottom="none" borderless>
                <Anchor.Target title="Marketplaces">
                  <h2>Marketplaces</h2>
                </Anchor.Target>
                <Row>
                  <Column md={6}>
                    <BorderedPanel>
                      <Panel.Header
                        right={<Link.Action>learn more</Link.Action>}
                      >
                        <img
                          src="https://sakusthought.files.wordpress.com/2012/05/amazon-web-services.png?w=108"
                          alt=""
                        />
                      </Panel.Header>
                      <Panel.Section>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Non alias labore beatae eligendi, saepe
                          asperiores, amet incidunt culpa. Porro in sed ipsum
                          eveniet adipisci asperiores reprehenderit, sapiente
                          quisquam ducimus dicta.
                        </p>
                      </Panel.Section>
                    </BorderedPanel>
                  </Column>
                  <Column md={6}>
                    <BorderedPanel>
                      <Panel.Header
                        right={<Link.Action>learn more</Link.Action>}
                      >
                        <img
                          src="https://sakusthought.files.wordpress.com/2012/05/amazon-web-services.png?w=108"
                          alt=""
                        />
                      </Panel.Header>
                      <Panel.Section>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vel veniam accusantium, tenetur excepturi
                          blanditiis at vero nemo illum nam natus officia cumque
                          earum, iste saepe maxime voluptas vitae distinctio
                          maiores!
                        </p>
                      </Panel.Section>
                    </BorderedPanel>
                  </Column>
                  <Column md={6}>
                    <BorderedPanel>
                      <Panel.Header
                        right={<Link.Action>learn more</Link.Action>}
                      >
                        <img
                          src="https://sakusthought.files.wordpress.com/2012/05/amazon-web-services.png?w=108"
                          alt=""
                        />
                      </Panel.Header>
                      <Panel.Section>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Maiores ipsum similique quisquam cupiditate
                          dicta quibusdam possimus in sit saepe est hic dolor
                          laborum eos odit deserunt iusto, nesciunt facere,
                          esse.
                        </p>
                      </Panel.Section>
                    </BorderedPanel>
                  </Column>
                  <Column md={6}>
                    <BorderedPanel>
                      <Panel.Header
                        right={<Link.Action>learn more</Link.Action>}
                      >
                        <img
                          src="https://sakusthought.files.wordpress.com/2012/05/amazon-web-services.png?w=108"
                          alt=""
                        />
                      </Panel.Header>
                      <Panel.Section>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Maiores ipsum similique quisquam cupiditate
                          dicta quibusdam possimus in sit saepe est hic dolor
                          laborum eos odit deserunt iusto, nesciunt facere,
                          esse.
                        </p>
                      </Panel.Section>
                    </BorderedPanel>
                  </Column>
                </Row>
              </Section>
            </Column>
          </Row>
        </Container>
      </StickyContainer>
    </Section>
  </div>
)
