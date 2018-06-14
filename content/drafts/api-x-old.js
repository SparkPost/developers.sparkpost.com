import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale, shadow } from '../utils/colors'
import { uppercase, weight, monospace } from '../utils/fonts'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import Card from '../components/Card'
import ClientLibrary from '../components/ClientLibrary'
import Event from '../components/Event'
import BlogPost from '../components/BlogPost'
import Link from '../components/Link'
import Button from '../components/Button'
import map from '../utils/map'

import parseResult from 'minim-parse-result'
const minim = require('minim').namespace()
minim.use(parseResult)

// import html from 'raw-loader!../data/api/transmissions.html'

const Wrapper = styled.div`
  
`

const SearchInput = styled.input`
  background: ${grayscale('white')};
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  border-radius: 2px;
  font: inherit;
  font-size: .888888889rem;
  padding: .5rem;
  width: 100%;
  outline: 0;

  &:focus {
    border-color: ${color('blue')};
    box-shadow: 0 0 0 1px ${color('blue')}, ${shadow(1)};
  }
`

const SearchResults = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  width: 100%;
  border-radius: 2px;
  background: ${grayscale('white')};
  margin: .166666667rem 0;
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  z-index: 9;
`

const SearchResult = styled(Link.Unstyled)`
  display: block;
  padding: .5rem 1rem;
  font-size: .833333333rem;

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
        <SearchInput placeholder="Search something" onFocus={this.toggleResults} onBlur={this.toggleResults} />
        <SearchResults visible={this.state.visible}>
          <SearchResult>Substitution Data </SearchResult>
          <SearchResult>Substitution Syntax Examples</SearchResult>
        </SearchResults>
      </div>
    )
  }
}

const navHeight = `63px`
const sidebarWidth = `300px`;

const SidebarWrapper = styled.aside`
  width: ${sidebarWidth};
  position: fixed;
  background: ${grayscale('light')};
  height: calc(100% - ${navHeight});
  top: ${navHeight};
  left: 0;
  padding: 1rem;
  border-right: 1px solid ${grayscale(8)};
  overflow: auto;
`

const Category = styled.div`
  margin: 1.5rem .5rem;

  &:not(:last-child) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${grayscale(8)};
  }
`

const CategoryTitle = styled.div`
  ${uppercase}
  font-size: .75rem;
  margin: .888888889rem 0;
  color: ${grayscale(4)};
  font-weight: ${weight('medium')};
`

const ApiLink = styled(Link.Unstyled)`
  display: block;
  font-size: .888888889rem;
  font-weight: ${weight('medium')};
  margin: .666666667rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`

const Sidebar = () => (
  <SidebarWrapper>
    <Search />
    <Category>
      <CategoryTitle>Introduction</CategoryTitle>
      <ApiLink>Overview</ApiLink>
      <ApiLink>Errors</ApiLink>
      <ApiLink>Substitutions Reference</ApiLink>
      <ApiLink>Labs</ApiLink>
    </Category>
    <Category>
      <CategoryTitle>Sending</CategoryTitle>
      <ApiLink>Transmissions</ApiLink>
      <ApiLink>SMTP</ApiLink>
      <ApiLink>A/b Testing (Labs)</ApiLink>
      <ApiLink>Sending Domains</ApiLink>
      <ApiLink>Tracking Domains</ApiLink>
      <ApiLink>Templates</ApiLink>
      <ApiLink>Recipient Lists</ApiLink>
      <ApiLink>Suppression List</ApiLink>
      <ApiLink>Sending IPs</ApiLink>
      <ApiLink>IP Pools</ApiLink>
    </Category>
    <Category>
      <CategoryTitle>Analyics</CategoryTitle>
      <ApiLink>Metrics</ApiLink>
      <ApiLink>Message Events</ApiLink>
      <ApiLink>Webhooks</ApiLink>
    </Category>
    <Category>
      <CategoryTitle>Accounts</CategoryTitle>
      <ApiLink>Account</ApiLink>
      <ApiLink>Subaccounts</ApiLink>
    </Category>
    <Category>
      <CategoryTitle>Receiving</CategoryTitle>
      <ApiLink>Inbound Domains</ApiLink>
      <ApiLink>Relay Webhooks</ApiLink>
    </Category>
  </SidebarWrapper>
)

const Reference = styled.div`
  margin-left: ${sidebarWidth};
`

const Content = styled.div`
  width: 48rem;
  max-width: 100%;
  padding: 1.5rem 1rem;
  margin: auto;


  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
  }

  h1 {
    margin: 2rem 0 3rem 0;
    // border-bottom: 1px solid ${grayscale('light')};
  }

  .panel {
      margin-bottom: 20px;
      background-color: #fff;
      border: 1px solid transparent;
      border-radius: 4px;
  }

  .panel-default {
      border-color: #ddd;
  }

  .panel-default>.panel-heading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
  }

  .panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }


  .page-api-reference h4 {
    font-size: 11pt;
    font-weight: 700;
  }

  .panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
  }

  .panel-body {
    padding: 15px;
  }

  .panel-body pre {
    ${monospace}
    color: inherit;
    overflow: auto;
    border: 0;
    font-weight: 500;
  }

  .request .uri {
    padding-left: 20px;
  }  

  .resource code {
    word-wrap: break-word;
  }

  .alert {
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid ${grayscale(8)};
    border-left: 0;
    border-radius: 2px;
    box-shadow: ${shadow(1)};
    line-height: 1.65;

    background: ${grayscale('white')};

    &:before {
      display: block;
      position: absolute;
      content: '';
      top: -1px;
      bottom: -1px;
      left: 0px;

      width: 5px;
      background: ${grayscale(6)};
      border-radius: 2px 0 0 2px;
    }

    &.alert-success {
      &:before {
        background: ${color('green')};
      }
    }

    &.alert-info {
      &:before {
        background: ${color('blue')};
      }
    }

    &.alert-warning {
      &:before {
        background: ${color('mustard')};
      }
    }

    &.alert-danger {
      &:before {
        background: ${color('red')};
      }
    }
  }

  .label {
    display: inline;
    padding: .1em .35em .185em;
    border: 1px solid transparent;
    border-bottom-color: rgba(0,0,0,.2);;
    font-size: 85%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;

    &.label-primary {
      background: ${color('orange')};
    }

    &.label-warning {
      background: ${color('mustard')};
    }

    &.label-info {
      background: ${color('blue')};
    }
  }

  .hljs-comment,.hljs-title{
    color:#8e908c
  }
  .hljs-variable,.hljs-attribute,.hljs-tag,.hljs-regexp,.ruby .hljs-constant,.xml .hljs-tag .hljs-title,.xml .hljs-pi,.xml .hljs-doctype,.html .hljs-doctype,.css .hljs-id,.css .hljs-class,.css .hljs-pseudo{
    color: #c82829;
  }
  .hljs-number,.hljs-preprocessor,.hljs-pragma,.hljs-built_in,.hljs-literal,.hljs-params,.hljs-constant{
    color: #f5871f;
  }
  .ruby .hljs-class .hljs-title,.css .hljs-rules .hljs-attribute{
    color: #eab700;
  }
  .hljs-string,.hljs-value,.hljs-inheritance,.hljs-header,.ruby .hljs-symbol,.xml .hljs-cdata{
    color: #718c00;
  }
  .css .hljs-hexcolor{
    color: #3e999f;
  }
  .hljs-function,.python .hljs-decorator,.python .hljs-title,.ruby .hljs-function .hljs-title,.ruby .hljs-title .hljs-keyword,.perl .hljs-sub,.javascript .hljs-title,.coffeescript .hljs-title{
    color: #4271ae;
  }
  .hljs-keyword,.javascript .hljs-function{
    color: #8959a8;
  }
  .hljs{
    display: block;
    background: white;
    color: #4d4d4c;
    padding: .5em;
  }
  .coffeescript .javascript,.javascript .xml,.tex .hljs-formula,.xml .javascript,.xml .vbscript,.xml .css,.xml .hljs-cdata{
    opacity: .5;
  }

  // *:hover > .permalink {
  //   opacity: 1;
  // }

  // .permalink {
  //   opacity: 0;
  //   position: absolute;
  //   left: 0;
  //   transform: translateX(-100%);
  //   top: 0;
  //   bottom: 0;
  //   padding-right: .5rem;
  //   font-family: Arial, sans-serif;

  //   &:hover {
  //     text-decoration: none;
  //   }
  // }
  .permalink {
    visibility: hidden;
  }
`

const IconBackdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

const IconWrapper = styled.div`
  position: relative;
  flex: 1 0 0;
  max-width: 52px;
  margin-right: 18px;
  height: 40px;
`

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
`

const Check = (props) => (
  <Svg fill={color('green')} preserveAspectRatio="xMidYMid meet" height="30" width="30" viewBox="0 0 40 40" style={{ verticalAlign: 'middle' }}>
    <g><path d="m16.6 28.4l15-15-2.3-2.5-12.7 12.7-5.9-5.9-2.3 2.3z m3.4-25c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z"/></g>
  </Svg>
);

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

  }

  ${props => props.status === 'success' && css`
    &:before {
      background: ${color('green')};
    }

    ${IconBackdrop} {
      box-shadow: 0 0 0 7px ${rgba(color('green'), 0.25)};
    }
  `}

  ${props => props.status === 'info' && css`
    &:before {
      background: ${color('blue')};
    }
  `}

  ${props => props.status === 'warning' && css`
    &:before {
      background: ${color('mustard')};
    }
  `}

  ${props => props.status === 'danger' && css`
    &:before {
      background: ${color('red')};
    }
  `}
  }
`

const BannerContent = styled.div`
  flex: 1 0 0;
  p {
    margin: .333333333rem 0 0;
  }
`
const BannerTitle = styled.h4`margin: 0;`

const EditWrapper = styled.div`
  background: ${grayscale('light')};
  padding: .666666667rem;
  margin: 2rem 0;
  border-radius: 4px;

  ${Column}:last-child {
    align-items: center;
    display: flex;
    justify-content: flex-end;

    a {
      font-size: .833333333rem;
    }
  }
`

const Edit = () => (
  <EditWrapper>
    <Row>
      <Column xs={9}>
        <span dangerouslySetInnerHTML={{ __html: `Was this page helpful?&nbsp;&nbsp;&nbsp;` }}/>
        <Button outline>Yes</Button>
        <Button outline>No</Button>
      </Column>
      <Column xs={3}>
        <div className="textRight">
          <Link>Edit on GitHub</Link>
        </div>
      </Column>
    </Row>
  </EditWrapper>
)

function title(el, defaultValue = '') {
  return el.title.content || defaultValue
}

function copy(el) {
  return el.copy.map((copy) => copy.content).join('')
}

// const IndexPage = (props) => {
//   const { api } = minim.fromRefract(props.data.allFury.edges[0].node.ast)

//   console.log(api)

//   // api.resourceGroups.map((resourceGroup) => {
//   //   resourceGroup.resources.map((resource) => {
//   //     resource.transitions.map((transition) => {
//   //       console.log(transition)
//   //     })
//   //   })
//   // })

//   return (
//     <Wrapper>
//       <Sidebar />
//       <Reference>
//         <Content>
//           {/*<div dangerouslySetInnerHTML={{ __html: JSON.stringify(props.data.allFury.edges[0].node.ast, null, 2) }}></div>*/}
//           {title(api, 'API Documentation')}
//           {copy(api)}
//           {
//             api.resourceGroups.map((resourceGroup) => {
//               return (
//                 <div>
//                   <h1>{resourceGroup.title.content}</h1>
//                   <div dangerouslySetInnerHTML={{ __html: resourceGroup.copy.map((copy) => copy.content) }}></div>
//                   {resourceGroup.resources.map((resource) => (
//                     <div>
//                       <h2>{resource.title.content}</h2>
//                       {resource.copy.map((copy) => copy.content)}
//                       {resource.transitions.map((transition) => (
//                         <div>
//                           <h3>{transition.title.content}</h3>
//                           <div dangerouslySetInnerHTML={{ __html: transition.copy.map((copy) => copy.content) }}></div>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               )
//               // resourceGroup.resources.map((resource) => {
//               //   console.log(resource.href.content)
//                 // resource.transitions.map((transition) => {
//               //     transition.transactions.map((transaction) => {

//               //       // console.log(transaction)
//               //       // const request = transaction.request;
//               //       // const response = transaction.response;

//               //       // console.log(`${request.method} ${request.href}`);
//               //       // console.log(`${response.statusCode} (${response.header('Content-Type')})`);
//               //       // console.log(response.messageBody);
//               //     })
//               //   })
//               // })
//             })
//           }
//           <Edit />
//         </Content>
//       </Reference>
//     </Wrapper>
//   )
// }

export default () => (<div>hi</div>)



// export const pageQuery = graphql`
// query apiQuery {
//   allFury {
//     edges {
//       node {
//         ast
//       }
//     }
//   }
// }

// `