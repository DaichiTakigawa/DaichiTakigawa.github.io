import * as React from 'react';
import styled from '@emotion/styled';
import {rhythm} from '../../../lib/typography';

import {Navbar, Navigation} from '../../molecules';
import {responsive} from '../../../constants';

const Content: React.FC = ({children}) => (
  <FlexContainer>
    <NavbarContainer>
      <Navbar />
    </NavbarContainer>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    <Container>{children}</Container>
  </FlexContainer>
);

const FlexContainer = styled.div({
  backgroundColor: 'white',
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: rhythm(0),
    marginRight: rhythm(1),
  },
  [`@media (min-width: ${responsive.computer.minWidth}px)`]: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const Container = styled.main({
  paddingTop: rhythm(4),
  paddingBottom: rhythm(2),
  [`@media (max-width: ${responsive.tablet.maxWidth}px) and (min-width: ${responsive.tablet.minWidth}px)`]: {
    paddingLeft: rhythm(1),
    flexGrow: 1,
    minWidth: 0,
  },
  [`@media (min-width: ${responsive.computer.minWidth}px)`]: {
    paddingLeft: rhythm(4),
    flexGrow: 1,
    minWidth: 0,
  },
});

const NavbarContainer = styled.nav({
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    display: 'none',
  },
});

const NavigationContainer = styled.nav({
  paddingTop: rhythm(4),
  backgroundColor: 'white',
  [`@media (max-width: ${responsive.mobile.maxWidth}px)`]: {
    display: 'none',
  },
});

export default Content;
