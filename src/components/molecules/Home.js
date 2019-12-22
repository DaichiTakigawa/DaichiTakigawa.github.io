import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

import src from "../../../contents/images/profile.jpg"

export default () => (
    <Segment>
      <Img src={src} alt="profile" />
      <Title>MEMO</Title>
    </Segment>
)

const Segment = styled.div`
  background-color: white
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
`

const Img = styled.img`
  height: ${rhythm(16)};
`

const Title = styled.h1`
  font-size: ${scale(2).fontSize}
  line-height: ${rhythm(4)}
`
