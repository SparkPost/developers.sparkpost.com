import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { Container, Row, Column } from 'components/Grid'
import Section from 'components/Section'
import Button from 'components/Button'
import Link from 'components/Link'
import Change from 'components/Change'

const TopSection = styled.div`
  text-align: center;
  padding: 3rem 0 4rem 0;

  p {
    font-size: 1rem;
  }
`

export default props => {
  const {
    data: { markdownRemark: change },
  } = props

  return (
    <Layout {...props}>
      <Helmet
        title={`Changes on ${change.frontmatter.date}`}
        meta={[
          {
            name: 'description',
            content: `A running log of what's new and what's been changed in SparkPost.`,
          },
        ]}
      />
      <Section light>
        <Container>
          <Row center="xs">
            <Column md={7} sm={10} xs={11}>
              <TopSection>
                <h1>
                  <Link.Unstyled to="/changelog">Changelog</Link.Unstyled>
                </h1>
                <p>
                  A running log of what's new and what's been changed in
                  SparkPost.
                </p>
              </TopSection>
              <Change change={change} expanded={true} />
              <br />
              <div className="textCenter">
                <Button to="https://sparkpost.com/docs" secondary>
                  Sign Up
                </Button>
                <Button to="https://sparkpost.com/docs" outline>
                  Read docs
                </Button>
              </div>
            </Column>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...Change
    }
  }
`
