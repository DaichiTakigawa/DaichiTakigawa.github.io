import * as React from 'react';
import styled from '@emotion/styled';

import {Divider, Copyright, Image} from '../../atoms';
import {rhythm, scale} from '../../../lib/typography';
import {responsive} from '../../../constants';
import Me from './Me';
import Portfolio from './Portfolio';
import Info from './Info';

const Home: React.FC = () => (
  <>
    <Container>
      <Image fileName="home-image.jpg" alt="実家の犬ども" />
      <H1>TAKIGAWA MEMO</H1>
      <Divider />
      <Me />
      <Portfolio />
      <Info />
    </Container>
    <Copyright />
  </>
);

const Container = styled.div({
  paddingTop: rhythm(4),
  paddingBottom: rhythm(4),
  paddingLeft: rhythm(1),
  paddingRight: rhythm(1),
});

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
});

export default Home;
