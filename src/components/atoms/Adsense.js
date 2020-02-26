import React from "react"
import styled from "styled-components"
import Adsense from "react-adsense"

import { rhythm } from "../../utils/typography"
import { responsive } from "../../../config"

export default class Adsense extends React.Component {
  render() {
    let format = this.props.format || "auto"
    return (
      <Container>
        <AdSense.Google
          client="ca-pub-7292810486004926"
          slot="4511974705"
          style={{ display: "block" }}
          format={format}
        />
        {/* <Ins
          className="adsbygoogle"
          data-ad-client="ca-pub-6195920683902846"
          data-ad-slot="4511974705"
          data-ad-format={format}
        /> */}
      </Container>
    )
  }
}

const Container = styled.div`
  margin: ${rhythm(1)} ${rhythm(1 / 2)};
`

const Ins = styled.ins`
  display: none;

  @media (min-width: ${responsive.tablet.minWidth}) {
    display: block;
  }
`
