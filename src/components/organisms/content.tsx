import * as React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"

import Navigation from "../molecules/navigation"
import Navbar from "../molecules/navbar"
import { responsive } from "../../../config"

type Props = {
  currentPage?: string
}

const Content: React.FC<Props> = ({ currentPage, children }) => (
  <FlexContainer>
    <NavbarContainer>
      <Navbar currentPage={currentPage} />
    </NavbarContainer>
    <NavigationContainer>
      <Navigation currentPage={currentPage} />
    </NavigationContainer>
    <Container>{children}</Container>
  </FlexContainer>
)

const FlexContainer = styled.div({
  backgroundColor: "#ececec",
  padding: 0,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    display: "flex",
    flexDirection: "row"
  }
})

const Container = styled.div({
  margin: `${rhythm(4)} ${rhythm(1 / 2)} ${rhythm(1)} ${rhythm(1 / 2)}`,
  background: "white",
  boxShadow: "rgba(0, 0, 0, 0.5) 0px 3px 5px",
  [`@media (max-width: ${responsive.tablet.maxWidth}px) and (min-width: ${responsive.tablet.minWidth}px)`]: {
    margin: `${rhythm(2)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)}`,
    width: "100%",
    minWidth: 0
  },
  [`@media (min-width: ${responsive.computer.minWidth}px)`]: {
    margin: `${rhythm(4)} 10%`,
    width: "100%",
    minWidth: 0
  }
})

const NavbarContainer = styled.div({
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    display: "none"
  }
})

const NavigationContainer = styled.div({
  padding: `${rhythm(2)} 0`,
  backgroundColor: "white",
  boxShadow: "rgba(0, 0, 0, 0.5) 0px 3px 5px",
  [`@media (max-width: ${responsive.mobile.maxWidth}px)`]: {
    display: "none"
  }
})

export default Content