import React from "react"
import styled from "styled-components"

import { rhythm } from "../../utils/typography"
import { responsive } from "../../../config"

export default class Adsense extends React.Component {
  componentDidMount() {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({})
  }
  render() {
    let format = this.props.format || "auto"
    return (
      <Container>
        <Ins
          className="adsbygoogle"
          data-ad-client="ca-pub-6195920683902846"
          data-ad-slot="4511974705"
          data-ad-format={format}
        />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 90%;
  margin: ${rhythm(1)} auto;
`

const Ins = styled.ins`
  display: none;

  @media (min-width: ${responsive.tablet.minWidth}) {
    display: block;
  }
`
