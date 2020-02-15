import React from "react"
import styled from "styled-components"
import { Responsive } from "semantic-ui-react"
import { rhythm } from "../../utils/typography"

import Navigation from "../molecules/Navigation"
import MoblieNavigation from "../molecules/MobileNavigation"

export default class Content extends React.Component {
  render() {
    let active = this.props.active
    return (
      <Layout>
        <MobileNavigationContainer>
          <MoblieNavigation active={active} />
        </MobileNavigationContainer>
        <NavigationContainer>
          <Navigation active={active} />
        </NavigationContainer>
        <Container>{this.props.children}</Container>
      </Layout>
    )
  }
}

const Layout = styled.div`
  background-color: #ececec;
  padding: 0;
  @media (min-width: ${Responsive.onlyTablet.minWidth}px) {
    display: flex;
    flex-direction: row;
  }
`

const Container = styled.div`
  padding-top: ${rhythm(2)};
  padding-left: ${rhythm(1 / 2)};
  padding-right: ${rhythm(1 / 2)};
  padding-bottom: ${rhythm(1)};
  width: 100%;

  @media (max-width: ${Responsive.onlyTablet.maxWidth}px) 
    and (min-width: ${Responsive.onlyTablet.minWidth}px) {
    margin: ${rhythm(2)} auto;
    padding: 0 ${rhythm(1)};
    min-width: 0;
  }

  @media (min-width: ${Responsive.onlyComputer.minWidth}px) {
    margin: ${rhythm(4)} auto;
    padding: 0 10%;
    min-width: 0;
  }
`

const MobileNavigationContainer = styled.div`
  @media (min-width: ${Responsive.onlyTablet.minWidth}px) {
    display: none;
  }
`

const NavigationContainer = styled.div`
  @media (max-width: ${Responsive.onlyMobile.maxWidth}px) {
    display: none;
  }
`
