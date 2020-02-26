import React from "react"
import styled from "styled-components"

import { rhythm } from "../../utils/typography"

export default class AdSense extends React.Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()
  }

  componentDidMount() {
    if (window) {
      let dom = this.ref.current
      let width = dom.getBoundingClientRect().width
      console.log(dom.getBoundingClientRect())
      if (width !== 0) {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
        console.log("new adsbygoogle was pushed")
      }
    }
  }

  render() {
    let format = this.props.format || "auto"
    let ref = this.ref
    return (
      <Container ref={ref}>
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
  margin: ${rhythm(1)} ${rhythm(1 / 2)};
`

const Ins = styled.ins`
  display: block;
`
