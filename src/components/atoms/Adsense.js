import React from "react"
import styled from "styled-components"

import { rhythm } from "../../utils/typography"
import { responsive } from "../../../config"

export default class Adsense extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showAds: false,
    }
  }

  componentDidMount() {
    let minWidth = 769
    if (window) {
      let showAds = window.innerWidth >= minWidth
      console.log(`window.innerWith: ${window.innerWidth}`)
      console.log(`minWidth: ${minWidth}`)
      console.log(`showAds: ${showAds}`)
      if (showAds) {
        this.setState({ showAds: true })
      }
    }
  }

  render() {
    let format = this.props.format || "auto"
    let res = null
    if (this.state.showAds) {
      res = (
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
    return res
  }
}

const Container = styled.div`
  margin: ${rhythm(1)} ${rhythm(1 / 2)};
`

const Ins = styled.ins`
  display: block;
`
