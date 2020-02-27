import React from "react"
import styled from "styled-components"

import { rhythm } from "../../utils/typography"
import { responsive } from "../../../config"

export default class ResponsiveAdSense extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showAds: false,
    }
  }

  componentDidMount() {
    if (window) {
      let minWidth = responsive.tablet.minWidth.split(/px/)[0]
      let shouldShowAds = window.innerWidth >= minWidth
      if (shouldShowAds) {
        this.setState({ showAds: true })
      }
    }
  }

  componentDidUpdate() {
    if (window) {
      if (this.state.showAds) {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }
    }
  }

  render() {
    let format = this.props.format || "auto"
    if (this.state.showAds) {
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
    return false
  }
}

const Container = styled.div`
  margin: ${rhythm(1)} ${rhythm(1 / 2)};
`

const Ins = styled.ins`
  display: block;
`
