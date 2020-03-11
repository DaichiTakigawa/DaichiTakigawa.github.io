import * as React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../../../utils/typography"

const SNS: React.FC = () => (
  <Container>
    <span className="icon is-medium">
      <A href="https://github.com/DaichiTakigawa">
        <i className="fab fa-lg fa-github"></i>
      </A>
    </span>
    <span className="icon is-medium">
      <A href="https://twitter.com/damenin27844103">
        <i className="fab fa-lg fa-twitter"></i>
      </A>
    </span>
  </Container>
)


const Container = styled.div({
  margin: `${rhythm(2)} ${rhythm(1)}`,
  "& > span": {
    marginRight: rhythm(1 / 2)
  }
})

const A = styled.a({
  color: "#363636",
  "&:hover": {
    color: "#3273dc"
  }
})

export default SNS