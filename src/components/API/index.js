import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale, shadow } from '../../utils/colors'
import { uppercase, weight, monospace } from '../../utils/fonts'
import { Container, Row, Column } from '../Grid'
import Link from '../Link'

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

const Subsection = styled.div`
  border-left: 2px solid ${grayscale(8)};
  margin-left: .1rem;
  padding-left: .75rem;

  a {
    font-size: 15px;
    // margin: 0 0 0 .1rem;  
    // padding: .175rem 0 .175rem .75rem;
    color: ${grayscale(4)};
  }
`

const ApiLink = styled(Link.Unstyled)`
  display: block;
  font-size: .888888889rem;
  font-weight: ${weight('medium')};
  margin: .35rem 0;
  line-height: 1.65;

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
      <Subsection>
        <ApiLink to="/">Using Postman</ApiLink>
        <ApiLink to="/">The Sandbox Domain</ApiLink>
        <ApiLink to="/">Transmission Attributes</ApiLink>
        <ApiLink to="/">Options Attributes</ApiLink>
        <ApiLink to="/">Inline Content Attributes</ApiLink>
        <ApiLink to="/">Push Attributes</ApiLink>
        <ApiLink to="/">Header Notes</ApiLink>
        <ApiLink to="/">email_rfc822 Notes</ApiLink>
        <ApiLink to="/">Attachment Attributes</ApiLink>
        <ApiLink to="/">Inline Image Attributes</ApiLink>
        <ApiLink to="/">Using a Stored Template</ApiLink>
        <ApiLink to="/">Using a Stored Recipient List</ApiLink>
        <ApiLink to="/">Scheduled Transmissions</ApiLink>
        <ApiLink to="/">Create a Transmission</ApiLink>
        <ApiLink to="/">Retrieve and Delete</ApiLink>
        <Subsection>
          <ApiLink to="/">Retrieve a Scheduled Transmission</ApiLink>
          <ApiLink to="/">Delete a Transmission</ApiLink>
        </Subsection>
        <ApiLink to="/">Delete By Campaign ID</ApiLink>
        <ApiLink to="/">List All Scheduled Transmissions</ApiLink>
      </Subsection>
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

const Content = styled.div`
  // width: 48rem;
  max-width: 100%;
  // padding: 1.5rem 1rem;
  // margin: auto;


  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
  }

  h1 {
    margin: 2.5rem 0 1.5rem 0;
    // border-bottom: 1px solid ${grayscale('light')};
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

  // .hljs-comment,.hljs-title{
  //   color:#8e908c
  // }
  // .hljs-variable,.hljs-attribute,.hljs-tag,.hljs-regexp,.ruby .hljs-constant,.xml .hljs-tag .hljs-title,.xml .hljs-pi,.xml .hljs-doctype,.html .hljs-doctype,.css .hljs-id,.css .hljs-class,.css .hljs-pseudo{
  //   color: #c82829;
  // }
  // .hljs-number,.hljs-preprocessor,.hljs-pragma,.hljs-built_in,.hljs-literal,.hljs-params,.hljs-constant{
  //   color: #f5871f;
  // }
  // .ruby .hljs-class .hljs-title,.css .hljs-rules .hljs-attribute{
  //   color: #eab700;
  // }
  // .hljs-string,.hljs-value,.hljs-inheritance,.hljs-header,.ruby .hljs-symbol,.xml .hljs-cdata{
  //   color: #718c00;
  // }
  // .css .hljs-hexcolor{
  //   color: #3e999f;
  // }
  // .hljs-function,.python .hljs-decorator,.python .hljs-title,.ruby .hljs-function .hljs-title,.ruby .hljs-title .hljs-keyword,.perl .hljs-sub,.javascript .hljs-title,.coffeescript .hljs-title{
  //   color: #4271ae;
  // }
  // .hljs-keyword,.javascript .hljs-function{
  //   color: #8959a8;
  // }
  // .hljs{
  //   display: block;
  //   background: white;
  //   color: #4d4d4c;
  //   padding: .5em;
  // }
  // .coffeescript .javascript,.javascript .xml,.tex .hljs-formula,.xml .javascript,.xml .vbscript,.xml .css,.xml .hljs-cdata{
  //   opacity: .5;
  // }

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

  .panel {
  }

  .panel-default {
  }

  .panel-title {
    font-size: .888888889rem;
    font-weight: ${weight('medium')};
  }

  .panel-body {
  }

  .panel-body pre {
    ${monospace}
    color: inherit;
    overflow: auto;
    border: 0;
    font-weight: 500;
    background: transparent;
    border: 1px solid ${grayscale('medium')};
    -webkit-font-smoothing: inherit;
  }

  .request .uri {
    width: 100%;

    code {
      -webkit-font-smoothing: inherit;

      width: 100%;
      display: block;
      background: transparent;
      border: 1px solid ${grayscale('medium')};
      color: ${grayscale('light')};
      padding: .5rem 1rem;
    }
  }

  .responses {
    margin-top: 2rem;

    .statusesRow {
      display: flex;
      justify-content: space-between;

      h4 {
        margin: 0;
      }

      .statuses {
        
        .status {
          display: inline-block;
          padding: .15rem .65rem;
          border-radius: 2px;
          ${monospace}
          -webkit-font-smoothing: inherit;

          &:first-child {
            background: ${grayscale('medium')};
          }

          &:before {
            content: "";
            height: 6px;
            width: 6px;
            border-radius: 50%;
            background: ${grayscale(6)};
            display: inline-block;
            margin-right: 5px;
            margin-bottom: 1px;
          }

          &[class^="2"]:before, &[class*=" 2"]:before {
            background: ${color('green')};
          }

          &[class^="3"]:before, &[class*=" 3"]:before {
            background: ${color('blue')};
          }

          &[class^="4"]:before, &[class*=" 4"]:before {
            background: ${color('mustard')};
          }
        }
      }
    }


    .response:not(:first-child) {
      display: none;
    }
  }
`

const Layout = styled.div`
  .row {
    display: flex;
  }

  .left, .right {
    padding: 1.5rem;
    width: 50%;
  }

  .left {
  }

  .right {
    background: ${grayscale('dark')};
    background: #212121;
    color: ${grayscale('white')};
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


export {
  Wrapper, Sidebar, Reference, Content, Layout
}