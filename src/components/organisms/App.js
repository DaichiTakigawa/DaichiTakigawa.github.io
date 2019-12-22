import React from "react"
import styled from "styled-components"

export default class App extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

const Container = styled.div`
  background-color: #EEEEEE
`
