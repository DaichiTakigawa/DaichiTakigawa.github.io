import React from "react"
import styled from "styled-components"

import { rhythm } from "../../utils/typography"
import { responsive } from "../../../config"

export default class Adsense extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showAds: false
    }
  }

  componentDidMount() {
    if (window) {
      if (!this.state.showAds && (window.innerWidth >= responsive.tablet.minWidth)) {
        this.setState({showAds: true})
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
    } else {
      return null
    }
  }
}

const Container = styled.div`
  margin: ${rhythm(1)} ${rhythm(1 / 2)};
`

const Ins = styled.ins`
  // display: none;

  // @media (min-width: ${responsive.tablet.minWidth}) {
  //   display: block;
  // }

  display: block;
`
