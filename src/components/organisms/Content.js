import React from "react"
import styled from "styled-components"
import { Responsive } from "semantic-ui-react"
import { rhythm } from "../../utils/typography"

import Navigation from "../molecules/Navigation"
import MoblieNavigation from "../molecules/MobileNavigation"
import breakpoints from "../../utils/breakpoint"

export default class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "",
    }
  }

  render() {
    return (
      <div>
        <Responsive minWidth={breakpoints.tabletLb} style={{ display: "flex" }}>
          <Navigation />
          <Container>{this.props.children}</Container>
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
  padding-top: ${rhythm(4)}
  padding-left: ${rhythm(2)}
  padding-right: ${rhythm(2)}
  padding-bottom: ${rhythm(2)}
  width: 100%
`

const MobileContainer = styled.div`
  padding-top: ${rhythm(2)}
  padding-left: ${rhythm(1/2)}
  padding-right: ${rhythm(1/2)}
  padding-bottom: ${rhythm(1)}
  width: 100%
`
