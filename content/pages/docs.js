import React, { Component } from "react";
import styled, { css } from "styled-components";
import tableOfContents from "../docs/table-of-contents.yml";
import Layout from "components/Layout";
import { Search, Sidebar } from "components/docs";
import { default as Base } from "components/Link";
import { color, grayscale } from "utils/colors";
import { uppercase, weight } from "utils/fonts";
import { buttons } from "polished";

const Cheveron = styled(({ isOpen, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
))`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) ${props => props.isOpen && `rotate(90deg)`};
  transition: transform 0.1s ease;
  right: 0;
  fill: ${grayscale(5)};
`;

// prettier-ignore
const link = css`
  display: block;
  margin: 0.35rem 0;
  font-size: 0.833333333rem;
  font-weight: ${weight("normal")};
  color: ${grayscale(3)};
  line-height: 1.65;
  ${props => props.isActive ? `
    color: ${color('orange')};
    font-weight: ${weight('medium')};
  ` : `
    &:hover {
      color: ${grayscale(1)};
    }
  `}
`

const PlainLink = styled(({ isActive, ...props }) => (
  <Base.Unstyled {...props} aria-current={isActive ? "page" : null} />
))`
  ${link};
`;

// prettier-ignore
const Link = styled(({ className, isActive, ...props }) => (
  <li className={className}><Base.Unstyled {...props} aria-current={isActive ? "page" : null} /></li>
))`
  ${link}

  a {
    display: block;
    font: inherit;
    color: inherit;
  }
`;

const topLevelLink = `
font-size: 0.888888889rem;
font-weight: ${weight("medium")};
margin: 0.35rem 0 0;
line-height: 1.65;
cursor: pointer;
color: inherit;
`;

const Topic = styled.li``;

// prettier-ignore
const TopicItems = styled(({ isOpen, ...props }) => <ul {...props} />)`
  list-style: none;
  margin: 0;
  padding: 0 0 0 0.5rem;

  transition: opacity 0.15s;
  ${props => props.isOpen === false && `
    position: absolute; 
    overflow: hidden; 
    clip: rect(0 0 0 0); 
    height: 1px; width: 1px; 
    margin: -1px; padding: 0; border: 0; 
    opacity: 0;
  `};
`;

const TopicTitle = styled(({ isOpen, ...props }) => (
  <button {...props} aria-haspopup="true" aria-expanded={isOpen === true} />
))`
  background: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  display: block;
  width: 100%;
  text-align: left;

  ${topLevelLink};
`;

const CategoryTitle = styled.span`
  display: block;
  ${uppercase} font-size: .72rem;
  margin: 0.75rem 0 0.666666667rem 0;
  color: ${grayscale(4)};
  font-weight: ${weight("medium")};
`;

const Category = styled.li`
  margin: 0.5rem 0;
  display: block;
`;

const CategoryItems = styled.ul`
  list-style: none;
  border-left: 1px solid ${grayscale(7)};
  margin: 0.35rem 0;
  padding: 0 0 0 0.666666667rem;
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  hr {
    margin: 0.75rem 0;
    border-bottom: 1px solid ${grayscale(8)};
  }
`;

const Nav = styled(({ children, ...props }) => (
  <nav aria-label="Documentation Navigation" {...props}>
    <ul>{children}</ul>
  </nav>
))`
  > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  > ul > ${Link} {
    ${topLevelLink};
  }
`;

export default class extends Component {
  state = {
    isOpen: true
  };

  render() {
    return (
      <div>
        <Layout {...this.props}>
          <Sidebar>
            <Search />
            <br />
            <Nav>
              <Link>Getting Started Guide</Link>
              <Topic>
                <TopicTitle
                  isOpen={this.state.isOpen}
                  onClick={() => {
                    this.setState(({ isOpen }) => ({
                      isOpen: !isOpen
                    }));
                  }}
                >
                  Sending
                  <Cheveron isOpen={this.state.isOpen} />
                </TopicTitle>
                <TopicItems isOpen={this.state.isOpen}>
                  <Link>Overview</Link>
                  <Category>
                    <CategoryTitle>Domain Configuration</CategoryTitle>
                    <CategoryItems>
                      <Link isActive={true}>Sending Domain</Link>
                      <Link>Tracking Domain</Link>
                      <Link>Custom Return Path</Link>
                    </CategoryItems>
                  </Category>
                  <Category>
                    <CategoryTitle>API</CategoryTitle>
                    <CategoryItems>
                      <Link>Send an email</Link>
                      <Link>Sending attachments</Link>
                      <Link>Scheduled Sends</Link>
                    </CategoryItems>
                  </Category>
                  <Category>
                    <CategoryTitle>SMTP</CategoryTitle>
                    <CategoryItems>
                      <Link>Send an email</Link>
                      <Link>SMTP Tracking</Link>
                      <Link>Debugging</Link>
                    </CategoryItems>
                  </Category>
                  <Category>
                    <CategoryTitle>Deliverability</CategoryTitle>
                    <CategoryItems>
                      <Link>Overview</Link>
                      <Link>Best Practices</Link>
                      <Link>Debugging</Link>
                    </CategoryItems>
                  </Category>
                  <Category>
                    <CategoryTitle>IP Management</CategoryTitle>
                    <CategoryItems>
                      <Link>Overview</Link>
                      <Link>Purchase IPs</Link>
                      <Link>Manage IP Pools</Link>
                      <Link>IP Warm-up</Link>
                      <Link>DKIM Signing By IP Pool</Link>
                    </CategoryItems>
                  </Category>
                  <Category>
                    <PlainLink>Webhooks</PlainLink>
                    <CategoryItems>
                      <Link>Webhook Authentication</Link>
                    </CategoryItems>
                  </Category>
                  <Divider />
                  <Link>Best Practices</Link>
                  <Link>Testing</Link>
                </TopicItems>
              </Topic>
              <Topic>
                <TopicTitle>
                  Recipient Management <Cheveron />
                </TopicTitle>
              </Topic>
              <Topic>
                <TopicTitle>
                  Personalization <Cheveron />
                </TopicTitle>
              </Topic>
              <Topic>
                <TopicTitle>
                  Templates <Cheveron />
                </TopicTitle>
              </Topic>
              <Topic>
                <TopicTitle>
                  Analytics and Reports <Cheveron />
                </TopicTitle>
              </Topic>
              <Topic>
                <TopicTitle>
                  Receiving <Cheveron />
                </TopicTitle>
              </Topic>
              <Topic>
                <TopicTitle>
                  Subaccounts <Cheveron />
                </TopicTitle>
              </Topic>
              <Divider />
              <Link>Integrations</Link>
              <Topic>
                <TopicTitle>
                  Development <Cheveron />
                </TopicTitle>
              </Topic>
              <Topic>
                <TopicTitle>
                  Migrations <Cheveron />
                </TopicTitle>
              </Topic>
            </Nav>
          </Sidebar>
          {/* {JSON.stringify(tableOfContents, null, 2)} */}
        </Layout>
      </div>
    );
  }
}
