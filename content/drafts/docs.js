import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale, shadow } from '../utils/colors'
import { uppercase, weight } from '../utils/fonts'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import Card from '../components/Card'
import ClientLibrary from '../components/ClientLibrary'
import Event from '../components/Event'
import BlogPost from '../components/BlogPost'
import Link from '../components/Link'
import map from '../utils/map'

const SearchInput = styled.input`
  background: ${grayscale('white')};
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  border-radius: 2px;
  font: inherit;
  font-size: 0.888888889rem;
  padding: 0.5rem;
  width: 100%;
  outline: 0;

  &:focus {
    border-color: ${color('blue')};
    box-shadow: 0 0 0 1px ${color('blue')}, ${shadow(1)};
  }
`

const SearchResults = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  border-radius: 2px;
  background: ${grayscale('white')};
  margin: 0.166666667rem 0;
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  z-index: 9;
`

const SearchResult = styled(Link.Unstyled)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.833333333rem;

  &:hover {
    background: ${grayscale('light')};
    color: ${grayscale(1)};
  }
`

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = { visible: false }
  }

  toggleResults = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <div>
        <SearchInput
          placeholder="Search something"
          onFocus={this.toggleResults}
          onBlur={this.toggleResults}
        />
        <SearchResults visible={this.state.visible}>
          <SearchResult>Substitution Data </SearchResult>
          <SearchResult>Substitution Syntax Examples</SearchResult>
        </SearchResults>
      </div>
    )
  }
}

const navHeight = `63px`
const sidebarWidth = `300px`

const SidebarWrapper = styled.aside`
  width: ${sidebarWidth};
  // background: ${grayscale('light')};
  padding: 1rem;
  // border-right: 1px solid ${grayscale(8)};
  overflow: auto;
`

const Category = styled.div`
  margin: 1.5rem 0.5rem;

  &:not(:last-child) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${grayscale(8)};
  }
`

const CategoryTitle = styled.div`
  ${uppercase} font-size: .75rem;
  margin: 0.888888889rem 0;
  color: ${grayscale(4)};
  font-weight: ${weight('medium')};
`

const ApiLink = styled(Link.Unstyled)`
  display: block;
  font-size: 0.888888889rem;
  font-weight: ${weight('medium')};
  margin: 0.666666667rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`

const Sidebar = () => (
  <SidebarWrapper>
    <Search />
    <Category>
      <CategoryTitle>Core Concepts</CategoryTitle>
      <ApiLink>Getting Started</ApiLink>
      <ApiLink>Sending</ApiLink>
      <ApiLink>Deliverability</ApiLink>
      <ApiLink>Analytics</ApiLink>
      <ApiLink>Templates and Substitution</ApiLink>
      <ApiLink>Receiving</ApiLink>
      <ApiLink>Subaccounts</ApiLink>
    </Category>
    <Category>
      <CategoryTitle>Guides</CategoryTitle>
      <ApiLink>Getting Started</ApiLink>
      <ApiLink>Sending</ApiLink>
      <ApiLink>Deliverability</ApiLink>
      <ApiLink>Analytics</ApiLink>
      <ApiLink>Templates and Substitution</ApiLink>
      <ApiLink>Receiving</ApiLink>
      <ApiLink>Subaccounts</ApiLink>
    </Category>
    <Category>
      <CategoryTitle>Reference</CategoryTitle>
      <ApiLink>Best Practices</ApiLink>
      <ApiLink>Email Errors</ApiLink>
    </Category>
  </SidebarWrapper>
)

const Reference = styled.div``

const Content = styled.div`
  width: 45rem;
  max-width: 100%;
  padding: 0 1rem 1rem 1rem;
  margin: auto;
`

const Banner = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${grayscale('light')};
  border-left: 0;
  border-radius: 2px;
  box-shadow: ${shadow(1)};

  background: ${grayscale('white')};

  &:before {
    display: block;
    position: absolute;
    content: '';
    top: 0px;
    left: 0px;
    bottom: 0px;

    width: 5px;
    background: ${grayscale(6)};
    border-radius: 2px 0 0 2px;

    ${props =>
      props.status === 'success' &&
      css`
        background: ${color('green')};
      `} ${props =>
        props.status === 'info' &&
        css`
          background: ${color('blue')};
        `} ${props =>
        props.status === 'warning' &&
        css`
          background: ${color('mustard')};
        `} ${props =>
        props.status === 'danger' &&
        css`
          background: ${color('red')};
        `};
  }
`

const BannerIcon = styled.div``
const BannerContent = styled.div`
  p {
    margin: 0.333333333rem 0 0;
  }
`
const BannerTitle = styled.h4`
  margin: 0;
`

const IndexPage = props => (
  <div>
    {/*<div style={{ height: 1, width: `100%`, background: grayscale(7) }}></div>*/}
    {/*<Section light>
          <h1 className="textCenter">Getting Started</h1>
        </Section>*/}
    <Section>
      <Container>
        <Row>
          <Sidebar />
          <Reference>
            <Content>
              <h1>Heading 1</h1>
              <p>
                <strong>Lorem ipsum dolor sit amet</strong>,{' '}
                <i>consectetur adipisicing elit</i>.{' '}
                <u>In temporibus dolorum</u>, <code>sint ex vitae</code>!
                Ducimus commodi eum, cumque rerum nam corrupti eligendi
                repellat. Maiores quo rem vitae quos, facere ea!
              </p>
              <h2>Heading 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium incidunt tempore rerum corrupti eius dolore totam,
                quidem aut suscipit qui, quisquam ab placeat pariatur eum
                consequatur reiciendis corporis at, cumque!
              </p>
              <Banner status="warning">
                <BannerContent>
                  <BannerTitle>Heads up!</BannerTitle>
                  <p>
                    If you're importing recipients from a previous provider, be
                    sure to also import your suppressions later.
                  </p>
                </BannerContent>
              </Banner>
              <h3>Heading 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                cumque repellat reprehenderit perspiciatis sunt dolor numquam
                tenetur officia amet excepturi, repudiandae assumenda ipsa aut,
                quas omnis aliquam vero asperiores sequi.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Endpoint</th>
                    <th>Use for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>https://api.sparkpost.com/api/v1</code>
                    </td>
                    <td>SparkPost and SparkPost Premium</td>
                  </tr>
                  <tr>
                    <td>
                      <code>https://api.eu.sparkpost.com/api/v1</code>
                    </td>
                    <td>SparkPost EU and SparkPost Premium EU</td>
                  </tr>
                  <tr>
                    <td>
                      <code>https://api.sparkpost.com/api/labs</code>
                    </td>
                    <td>SparkPost Labs</td>
                  </tr>
                  <tr>
                    <td>
                      <code>https://yourdomain.api.e.sparkpost.com/api/v1</code>
                    </td>
                    <td>SparkPost Enterprise API</td>
                  </tr>
                </tbody>
              </table>
            </Content>
          </Reference>
        </Row>
      </Container>
    </Section>
  </div>
)

export default IndexPage
