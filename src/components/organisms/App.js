import React from "react"
import styled from "styled-components"
import "../../styles/style.scss"
import { responsive as resp } from "../../../config"



export default class App extends React.Component {
  render() {
    return <Layout>{this.props.children}</Layout>
  }
}

const Layout = styled.div`
  background-color: #ececec;
  padding: 0;
  position: absolute
  top: 0
  right: 0
  left: 0
  @media (min-width: ${resp.tablet.minWidth}) {
    display: flex;
    flex-direction: row;
  }
`