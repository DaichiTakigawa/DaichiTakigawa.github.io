import React from "react"
import styled from "styled-components"
import { Responsive } from "semantic-ui-react"
import { rhythm } from "../../utils/typography"

import Navigation from "../molecules/Navigation"
import MoblieNavigation from "../molecules/MobileNavigation"
import breakpoints from "../../utils/breakpoint"

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Responsive
          minWidth={breakpoints.computerLb}
          style={{ display: "flex" }}
        >
          <Navigation />
          <Container>{this.props.children}</Container>
        </Responsive>
        <Responsive
          minWidth={breakpoints.tabletLb}
          maxWidth={breakpoints.tabletUb}
          style={{ display: "flex" }}
        >
          <Navigation />
          <TabletContainer>{this.props.children}</TabletContainer>
        </Responsive>
        <Responsive maxWidth={breakpoints.moblieUb} style={{ padding: 0 }}>
          <MoblieNavigation />
          <MobileContainer>{this.props.children}</MobileContainer>
        </Responsive>
      </div>
    )
  }
}

const Container = styled.div`
  padding: ${rhythm(4)} 10%
  flex-grow: 1
`

const TabletContainer = styled.div`
  padding: ${rhythm(4)} 1%
  flex-shrink: 1
`

const MobileContainer = styled.div`
  padding-top: ${rhythm(2)}
  padding-left: ${rhythm(1 / 2)}
  padding-right: ${rhythm(1 / 2)}
  padding-bottom: ${rhythm(1)}
  width: 100%
`
