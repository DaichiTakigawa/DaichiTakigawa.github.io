import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { rhythm, scale } from "../../../utils/typography"


const Component: React.FC = () => (
  <Link to="/">
    <Title>
      TAKIGAWA
      <br />
      MEMO
    </Title>
  </Link>
)

const Title = styled.div({
  fontSize: scale(1).fontSize,
  lineHeight: rhythm(2),
  textAlign: "center",
  color: "#474747",
  border: "2px solid #787878",
  marginLeft: rhythm(1),
  marginRight: rhythm(1),
  padding: `${rhythm(3)} ${rhythm(1)}`,
  "&:hover": {
    backgroundColor: "#4f4f4f",
    border: "2px solid #4f4f4f",
    color: "white",
  }
})

export default Component