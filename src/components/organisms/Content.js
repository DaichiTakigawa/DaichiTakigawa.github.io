import React from "react"
import styled from "styled-components"
import NoSSR from "react-no-ssr"
import { Responsive } from "semantic-ui-react"
import { rhythm } from "../../utils/typography"

import Navigation from "../molecules/Navigation"
import MoblieNavigation from "../molecules/MobileNavigation"

export default class Content extends React.Component {
  getResponsive() {
    let active = this.props.active
    return (
      <Responsive
        minWidth={Responsive.onlyComputer.minWidth}
        style={{ display: "flex" }}
      >
        <Navigation active={active} />
        <Container>{this.props.children}</Container>
      </Responsive>
    )
  }

  getTabletResponsive() {
    let active = this.props.active
    return (
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
        style={{ display: "flex" }}
      >
        <Navigation active={active} />
        <TabletContainer>{this.props.children}</TabletContainer>
      </Responsive>
    )
  }

  getMobileResponsive() {
    let active = this.props.active
    return (
      <Responsive
        maxWidth={Responsive.onlyMobile.maxWidth}
        style={{ padding: 0 }}
      >
        <MoblieNavigation active={active} />
        <MobileContainer>{this.props.children}</MobileContainer>
      </Responsive>
    )
  }

  render() {
    return (
      // <NoSSR>
        <Layout>
          {this.getResponsive()}
          {this.getTabletResponsive()}
          {this.getMobileResponsive()}
        </Layout>
      // </NoSSR>
    )
  }
}

const Layout = styled.div`
  background-color: #eeeeee;
`
const Container = styled.div`
  margin: ${rhythm(4)} 10%
  flex-grow: 1
`

const TabletContainer = styled.div`
  margin: ${rhythm(2)} auto
  padding: 0 ${rhythm(1)}
  width: 100%
`

const MobileContainer = styled.div`
  padding-top: ${rhythm(2)}
  padding-left: ${rhythm(1 / 2)}
  padding-right: ${rhythm(1 / 2)}
  padding-bottom: ${rhythm(1)}
  width: 100%
`
