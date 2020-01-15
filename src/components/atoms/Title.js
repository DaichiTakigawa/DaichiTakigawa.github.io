import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

export default ({ title }) => (
  <Link to="/" style={{ margin: `auto` }}>
    <Title>
      TAKIGAWA
      <br />
      MEMO
    </Title>
  </Link>
)

const Title = styled.h4`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
  text-align: center
  color: #474747
  border: 2px solid #787878
  margin-left: ${rhythm(1)}
  margin-right: ${rhythm(1)}
  padding: ${rhythm(3)} ${rhythm(1)}
  &:hover {
    background-color: #4f4f4f
    border: 2px solid #4f4f4f
    color: white
  }
`
