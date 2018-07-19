import React from 'react'
import styled from 'styled-components'
import { rgba, lighten } from 'polished'
import { color, grayscale } from 'utils/colors'
import { uppercase, weight } from 'utils/fonts'
import { mediaQuery } from 'utils/breakpoint'
import Layout from 'components/Layout'
import { Container, Row, Column } from 'components/Grid'
import Section from 'components/Section'
import Panel from 'components/Panel'
import Card from 'components/Card'
import Button from 'components/Button'
import Link from 'components/Link'
import Anchor from 'components/Anchor'
import CodeSamples from 'components/CodeSamples'
import map from 'utils/map'

import flameBackground from 'assets/flame-background.png'
import elixir from 'assets/libraries/elixir.png'
import go from 'assets/libraries/go.png'
import java from 'assets/libraries/java.png'
import nodeJs from 'assets/libraries/node.png'
import php from 'assets/libraries/php.png'
import python from 'assets/libraries/python.png'
import ruby from 'assets/libraries/ruby.png'
import cSharp from 'assets/libraries/c-sharp.png'


const IndexPage = props => {
  return (
    <Layout {...props}>
      <form netlify>
        <div>
          <input type="radio" id="😢" value="😢" name="happiness" checked />
          <label for="😢">😢</label>
        </div>

        <div>
          <input type="radio" id="😐" value="😐" name="happiness" />
          <label for="😐">😐</label>
        </div>
        <div>
          <input type="radio" id="😁" value="😁" name="happiness" />
          <label for="😁">😁</label>
        </div>
        <button>Submit</button>
      </form>
    </Layout>
  )
}

export default IndexPage
