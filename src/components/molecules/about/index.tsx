import * as React from "react"
import styled from "@emotion/styled"
import { scale, rhythm } from "../../../utils/typography"

import { responsive } from "../../../../config"
import Text from "./text"
import Copyright from "../../atoms/copyright"

const About: React.FC = () => (
  <>
    <Container>
      <H1>About</H1>
      <Text />
    </Container>
    <Copyright />
  </>
)

const Container = styled.div({
  paddingBottom: rhythm(4),
  paddingTop: rhythm(2),
  margin: "auto",
  width: "80%"
})

const H1 = styled.h1({
  fontSize: scale(1 / 2).fontSize,
  lineHeight: rhythm(2),
  color: "rgb(70, 70, 70)",
  paddingTop: rhythm(1),
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    fontSize: scale(1).fontSize,
    lineHeight: rhythm(3),
    paddingTop: rhythm(2),
  }
})

export default About