import React from 'react'
import styled from 'styled-components'
import { grayscale } from 'utils/colors'
import { weight } from 'utils/fonts'
import Layout from 'components/Layout'
import Link from 'components/Link'

import sparky from 'assets/sparky.svg'

const maxFontSize = `250`
const minFontSize = `120`

const Wrapper = styled.div`
  padding: 8rem 2rem 4rem;
  text-align: center;
`

// magic calculations from https://css-tricks.com/snippets/css/fluid-typography/
const Title = styled.h1`
  font-size: calc(
    ${minFontSize}px + (${maxFontSize} - ${minFontSize}) *
      ((100vw - 300px) / (1600 - 300))
  );
  color: ${grayscale(7)};

  font-weight: ${weight('bold')};
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -100px;
`

const NotFoundPage = props => (
  <Layout {...props}>
    <Wrapper>
      <Title>404</Title>
      <img src={sparky} alt="Sparky" />
      <br />
      <br />
      <br />
      <h2>It looks like you've lost your way, my child.</h2>
      <p>
        Let us show you the way back <Link to="/">home</Link>.
      </p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
