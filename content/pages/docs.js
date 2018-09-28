import React, { Component } from "react";
import styled from "styled-components";
import tableOfContents from "../docs/table-of-contents.yml";
import Layout from "components/Layout";
import { Search, Sidebar } from "components/docs";
import { default as Base } from "components/Link";
import { color, grayscale } from "utils/colors";
import { uppercase, weight } from "utils/fonts";

const Cheveron = styled(props => (
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
const Link = styled(Base.Unstyled)`
  display: block;
  margin: 0.35rem 0;
  line-height: 1.65;
  font-size: 0.833333333rem;
  font-weight: ${weight("normal")};
  color: ${grayscale(3)};

  ${props => props.isActive ? `
    color: ${color('orange')};
    font-weight: ${weight('medium')};
  ` : `
    &:hover {
      color: ${grayscale(1)};
    }
  `}
`;

const CategoryTitle = styled.div``;

// prettier-ignore
const Category = styled.div`
  margin: 0.5rem 0;

  transition: opacity .15s;
  ${props => props.isOpen === false && `
      position: absolute; 
      overflow: hidden; 
      clip: rect(0 0 0 0); 
      height: 1px; width: 1px; 
      margin: -1px; padding: 0; border: 0; 
      opacity: 0;
  `}
  
  & & {
    border-left: 1px solid ${grayscale(7)};
    margin: 0.35rem 0;
    padding: 0 0 0 0.666666667rem;
  }

  ${CategoryTitle} {
    ${uppercase} font-size: .72rem;
    margin: 0.75rem 0 0.666666667rem 0;
    color: ${grayscale(4)};
    font-weight: ${weight("medium")};
  }
`;

const Divider = styled.hr``;

const Nav = styled.nav`
  > ${Category} {
    padding-left: 0.5rem;
  }

  > ${CategoryTitle}, > ${Link} {
    font-size: 0.888888889rem;
    font-weight: ${weight("medium")};
    margin: 0.35rem 0 0;
    line-height: 1.65;
    cursor: pointer;
    color: inherit;
  }

  ${Divider} {
    margin: 0.75rem 0;
    border-bottom: 1px solid ${grayscale(8)};
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
              <CategoryTitle
                onClick={() => {
                  this.setState(({ isOpen }) => ({
                    isOpen: !isOpen
                  }));
                }}
              >
                Sending
                <Cheveron isOpen={this.state.isOpen} />
              </CategoryTitle>
              <Category isOpen={this.state.isOpen}>
                <Link>Overview</Link>
                <CategoryTitle>Domain Configuration</CategoryTitle>
                <Category>
                  <Link isActive={true}>Sending Domain</Link>
                  <Link>Tracking Domain</Link>
                  <Link>Custom Return Path</Link>
                </Category>
                <CategoryTitle>API</CategoryTitle>
                <Category>
                  <Link>Send an email</Link>
                  <Link>Sending attachments</Link>
                  <Link>Scheduled Sends</Link>
                </Category>
                <CategoryTitle>SMTP</CategoryTitle>
                <Category>
                  <Link>Send an email</Link>
                  <Link>SMTP Tracking</Link>
                  <Link>Debugging</Link>
                </Category>
                <CategoryTitle>Deliverability</CategoryTitle>
                <Category>
                  <Link>Overview</Link>
                  <Link>Best Practices</Link>
                  <Link>Debugging</Link>
                </Category>
                <CategoryTitle>IP Management</CategoryTitle>
                <Category>
                  <Link>Overview</Link>
                  <Link>Purchase IPs</Link>
                  <Link>Manage IP Pools</Link>
                  <Link>IP Warm-up</Link>
                  <Link>DKIM Signing By IP Pool</Link>
                </Category>
                <Link>Webhooks</Link>
                <Category>
                  <Link>Webhook Authentication</Link>
                </Category>
                <Divider />
                <Link>Best Practices</Link>
                <Link>Testing</Link>
              </Category>
              <CategoryTitle>
                Recipient Management <Cheveron />
              </CategoryTitle>
              <CategoryTitle>
                Personalization <Cheveron />
              </CategoryTitle>
              <CategoryTitle>
                Templates <Cheveron />
              </CategoryTitle>
              <CategoryTitle>
                Analytics and Reports <Cheveron />
              </CategoryTitle>
              <CategoryTitle>
                Receiving <Cheveron />
              </CategoryTitle>
              <CategoryTitle>
                Subaccounts <Cheveron />
              </CategoryTitle>
              <Divider />
              <CategoryTitle>Integrations</CategoryTitle>
              <CategoryTitle>
                Development <Cheveron />
              </CategoryTitle>
              <CategoryTitle>
                Migrations <Cheveron />
              </CategoryTitle>
            </Nav>
          </Sidebar>
          {/* {JSON.stringify(tableOfContents, null, 2)} */}
        </Layout>
      </div>
    );
  }
}
