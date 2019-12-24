import React from "react"
import styled from "styled-components"

import { scale, rhythm } from "../../utils/typography"

export default class MoblieNavigation extends React.Component {
  render() {
    return <Nav>TAKIGAWA MEMO</Nav>
  }
}

const Nav = styled.div`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(2)}
  text-align: center
  background-color: white
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
`
