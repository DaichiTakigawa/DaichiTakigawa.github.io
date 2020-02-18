import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

import Navigation from "../molecules/Navigation"
import MoblieNavigation from "../molecules/MobileNavigation"
import { responsive as resp } from "../../../config"

export default class Content extends React.Component {
  render() {
    let active = this.props.active
    return (
      <>
        <MobileNavigationContainer>
          <MoblieNavigation active={active} />
        </MobileNavigationContainer>
        <NavigationContainer>
          <Navigation active={active} />
        </NavigationContainer>
        <Container>{this.props.children}</Container>
      </>
    )
  }
}

const Container = styled.main`
  margin: ${rhythm(4)} ${rhythm(1 / 2)} ${rhythm(1)} ${rhythm(1 / 2)};
  background: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;

  @media (max-width: ${resp.tablet.maxWidth}) and (min-width: ${
  resp.tablet.minWidth
}) {
    margin: ${rhythm(2)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
    width: 100%;
    min-width: 0;
  }

  @media (min-width: ${resp.computer.minWidth}) {
    margin: ${rhythm(4)} 10%;
    width: 100%;
    min-width: 0;
  }
`

const MobileNavigationContainer = styled.header`
  @media (min-width: ${resp.tablet.minWidth}) {
    display: none;
  }
`

const NavigationContainer = styled.header`
  padding-top: ${rhythm(2)};
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;

  @media (max-width: ${resp.mobile.maxWidth}) {
    display: none;
  }
`
