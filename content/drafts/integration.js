import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { grayscale, color, shadow } from '../utils/colors'
import { uppercase, weight } from '../utils/fonts'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import BlogPost from '../components/BlogPost'
import Panel from '../components/Panel'
import Button from '../components/Button'

const CodeBlock = styled.code`
  border-top: 4px solid ${color('orange')};
  display: block;
  background-color: white;
  padding: 8px;
  font-family: 'Monaco';
`


const Integrations = styled.h5`
  ${uppercase}
  font-size: .833333333rem;
  margin: 2rem 0 .25rem 0;
  font-weight: ${weight('medium')};
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

const Info = (props) => (
  <Svg fill={color('blue')} preserveAspectRatio="xMidYMid meet" height="30" width="30" viewBox="0 0 40 40" style={{ verticalAlign: 'middle' }}>
    <g><path d="m18.4 15v-3.4h3.2v3.4h-3.2z m1.6 18.4c7.3 0 13.4-6.1 13.4-13.4s-6.1-13.4-13.4-13.4-13.4 6.1-13.4 13.4 6.1 13.4 13.4 13.4z m0-30c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z m-1.6 25v-10h3.2v10h-3.2z"></path></g>
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

    ${IconBackdrop} {
      box-shadow: 0 0 0 7px ${rgba(color('blue'), 0.25)};
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

export default () => (
  <div>
    <Section light style={{paddingBottom: `2rem`}}>
      <Container>
        <Row>
          <Column xs="3">
            <div style={{width: `80%`, margin: `auto`}}>
              <br/><br/>
              <Panel style={{ position: 'absolute', boxShadow: shadow(2), zIndex: 9 }}>
                <Panel.Section>
                  <img src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/logomagento-lg.png" alt=""/>
                </Panel.Section>
                <Button primary block>Learn More</Button>
              </Panel>
            </div>
          </Column>
          <Column xs="7">
            <Integrations>Integrations</Integrations>
            <h1>SparkPost + Magento</h1>
            {/*<hr style={{border: 0, borderBottom: `1px solid ${grayscale(7)}`}} /> <br /><br/>*/}
          </Column>
        </Row>
      </Container>
    </Section>
    <Section>
      <Container>
        <Row>
          <Column xs="8" xsOffset="3">
            {/*<Panel sectioned>*/}
              <p><strong>Lorem ipsum dolor sit amet</strong>, <i>consectetur adipisicing elit</i>. <u>In temporibus dolorum</u>, <code>sint ex vitae</code>! Ducimus commodi eum, cumque rerum nam corrupti eligendi repellat. Maiores quo rem vitae quos, facere ea!</p>
              <h2>Heading 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium incidunt tempore rerum corrupti eius dolore totam, quidem aut suscipit qui, quisquam ab placeat pariatur eum consequatur reiciendis corporis at, cumque!</p>
              <Banner status="info">
                {/*<IconWrapper>
                                  <Info />
                                  <IconBackdrop />
                                </IconWrapper>*/}
                <BannerContent>
                  <BannerTitle>SparkPost makes it easy to send with Magento</BannerTitle>
                  <p>If you're importing recipients from a previous provider, be sure to also import your suppressions.</p>
                  <br/>
                  <Button outline size="small">Try Free</Button>
                </BannerContent>
              </Banner>
              <h3>Heading 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni cumque repellat reprehenderit perspiciatis sunt dolor numquam tenetur officia amet excepturi, repudiandae assumenda ipsa aut, quas omnis aliquam vero asperiores sequi.</p>
              <pre>
                <code>{`curl -v \\
                      -H "Content-Type: application/json" \\
                      -H "Authorization: 14ac5499cfdd2bb2859e4476d2e5b1d2bad079bf" \\
                      -X GET "https://api.sparkpost.com/api/v1/metrics/deliverability/aggregate?campaigns=testjob&from=2014-01-23T14:00&metrics=count_targeted,count_sent,count_accepted&timezone=America%2FNew_York&to=2014-06-23T15:50"`}</code>
              </pre>
              <table>
                <thead>
                <tr>
                <th>Endpoint</th>
                <th>Use for</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><code>https://api.sparkpost.com/api/v1</code></td>
                <td>SparkPost and SparkPost Premium</td>
                </tr>
                <tr>
                <td><code>https://api.eu.sparkpost.com/api/v1</code></td>
                <td>SparkPost EU and SparkPost Premium EU</td>
                </tr>
                <tr>
                <td><code>https://api.sparkpost.com/api/labs</code></td>
                <td>SparkPost Labs</td>
                </tr>
                <tr>
                <td><code>https://yourdomain.api.e.sparkpost.com/api/v1</code></td>
                <td>SparkPost Enterprise API</td>
                </tr>
                </tbody>
              </table>
            {/*</Panel>*/}
          </Column>
        </Row>
      </Container>
    </Section>
  </div>
)
