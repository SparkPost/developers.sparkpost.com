import React, { Fragment } from 'react'
import styled from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale } from 'utils/colors'
import { uppercase, weight } from 'utils/fonts'
import { Container, Row, Column } from 'components/Grid'
import Link from 'components/Link'
import Button from 'components/Button'

const Footer = styled.footer`
  background: ${grayscale('dark')};
  color: ${grayscale('white')};
  padding: 2rem 0 3.5rem;
`

// prettier-ignore
const FooterColumn = styled(Column)`
  text-align: center;

  ${mediaQuery('sm', `
    text-align: left;
  `)}
`

const CopyRight = styled.div`
  background: ${grayscale('medium')};
  color: ${grayscale(6)};
  text-align: center;
  font-size: 0.9rem;
  padding: 0.5rem;
  font-weight: ${weight('normal')};
`

const Header = styled.h5`
  ${props => (props.uppercase ? uppercase : '')} font-weight: 600;
  margin-top: 1.333333333rem;
  font-size: 0.9rem;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Item = styled(props => (
  <li>
    <Link {...props} />
  </li>
))`
  line-height: 1.5;
  font-size: 0.9rem;
  color: inherit;
  font-weight: ${weight('normal')};
`

const SubscribeForm = styled.form`
  display: flex;
  width: 100%;
`

const EmailInput = styled.input`
  width: 100%;
  padding: 0 0.5rem;
  font-size: 0.9rem;
  line-height: 1rem;
  border: none;
`

const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0 0;
`

const AltText = styled.span`
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
`

const SocialIcon = styled(({ to, icon, alt, ...props }) => (
  <li {...props}>
    <Link.Unstyled to={to} target="_blank">
      <i className={`fa fa-${icon}`} />
      <AltText>{alt}</AltText>
    </Link.Unstyled>
  </li>
))`
  display: inline-block;
  font-size: 1.166666667rem;
  margin-right: 1.25rem;
  color: ${grayscale(5)};

  &:hover {
    color: ${grayscale('white')};
  }
`

export default () => (
  <Fragment>
    <Footer>
      <Container>
        <Row>
          <FooterColumn md={2} sm={4} xs={12}>
            <Header uppercase>About</Header>
            <List>
              <Item to="https://www.sparkpost.com/about-us/">About Us</Item>
              <Item to="https://www.sparkpost.com/careers/">Careers</Item>
              <Item to="https://www.sparkpost.com/partners/">Partners</Item>
              <Item to="https://www.sparkpost.com/blog/">Blog</Item>
              <Item to="https://www.sparkpost.com/policies/tou/">Policies</Item>
              <Item to="https://www.sparkpost.com/press-releases/">Press</Item>
            </List>
          </FooterColumn>
          <FooterColumn md={2} sm={4} xs={12}>
            <Header uppercase>Support</Header>
            <List>
              <Item to="https://www.sparkpost.com/docs/">Help &amp; Docs</Item>
              <Item to="https://www.sparkpost.com/report-abuse/">
                Report Abuse
              </Item>
            </List>
          </FooterColumn>
          <FooterColumn md={2} sm={4} xs={12}>
            <Header uppercase>Solutions</Header>
            <List>
              <Item to="https://www.sparkpost.com/enterprise-email/">
                Enterprise
              </Item>
              <Item to="https://www.sparkpost.com/e-commerce/">E-Commerce</Item>
              <Item to="https://www.sparkpost.com/service-providers/">
                Service Providers
              </Item>
              <Item to="https://www.sparkpost.com/digital-publishing/">
                Digital Publishing
              </Item>
            </List>
          </FooterColumn>
          <FooterColumn md={5} mdOffset={1} xs={10} smOffset={0} xsOffset={1}>
            <Header>Subscribe to our newsletter</Header>
            <div>
              <SubscribeForm>
                <EmailInput type="text" placeholder="Subscribe" />
                <Button primary>Submit</Button>
              </SubscribeForm>
            </div>
            <SocialIcons>
              <SocialIcon
                to="https://www.facebook.com/sparkpost/"
                icon="facebook-square"
                alt="Facebook"
              />
              <SocialIcon
                to="https://twitter.com/SparkPost"
                icon="twitter"
                alt="Twitter"
              />
              <SocialIcon
                to="https://www.linkedin.com/company/sparkpost"
                icon="linkedin-square"
                alt="LinkedIn"
              />
              <SocialIcon
                to="https://www.youtube.com/channel/UC5vz6wEfpJjGipY_alrYuhQ"
                icon="youtube"
                alt="Youtube"
              />
              <SocialIcon
                to="https://www.slideshare.net/SparkPost"
                icon="slideshare"
                alt="Slideshare"
              />
              <SocialIcon
                to="https://slack.sparkpost.com/"
                icon="slack"
                alt="Slack"
              />
              <SocialIcon
                to="https://github.com/SparkPost"
                icon="github"
                alt="GitHub"
              />
            </SocialIcons>
          </FooterColumn>
        </Row>
      </Container>
    </Footer>
    <CopyRight>
      SparkPost © {new Date().getFullYear()} All Rights Reserved
    </CopyRight>
  </Fragment>
)
