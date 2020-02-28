import React from "react"
import styled from "styled-components"

import { rhythm } from "../../utils/typography"

export default class AdSense extends React.Component {
  componentDidMount() {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }
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
  width: 100%;
`

const Ins = styled.ins`
  display: block;
`
