import * as React from 'react'
import styled from '@emotion/styled'

import {Divider, Copyright, Image} from '../../atoms'
import {rhythm, scale} from '../../../utils/typography'
import {responsive} from '../../../../config'
import Me from './me'
import Portfolio from './portfolio'
import Info from './info'

const Home: React.FC = () => (
  <>
    <Image fileName="home-image.jpg" alt="実家の犬ども" />
    <Container>
      <H1>TAKIGAWA MEMO</H1>
      <Divider />
      <Me />
      <Portfolio />
      <Info />
    </Container>
    <Copyright />
  </>
)

const Container = styled.div({
  paddingBottom: rhythm(4),
  margin: 'auto',
  width: '80%',
})

const H1 = styled.h1({
  fontSize: scale(1).fontSize,
  lineHeight: rhythm(2),
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#444',
  paddingTop: rhythm(1),
  [`@media (max-width: ${responsive.tablet.maxWidth}px) and (min-width: ${responsive.tablet.minWidth}px)`]: {
    fontSize: scale(3 / 2).fontSize,
    lineHeight: rhythm(3),
    paddingTop: rhythm(2),
  },
  [`@media (min-width: ${responsive.computer.minWidth}px)`]: {
    fontSize: scale(2).fontSize,
    lineHeight: rhythm(4),
    paddingTop: rhythm(2),
  },
})

export default Home
