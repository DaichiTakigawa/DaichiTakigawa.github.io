import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

export default class Home extends React.Component {
  render() {
    return (
      <Segment>
        <StyledContainer>
          <Title>開発中 😢 </Title>
        </StyledContainer>
      </Segment>
    )
  }
}

const Segment = styled.div`
  background-color: white
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;
  min-height: 1000px
`

const StyledContainer = styled.div`
  padding-bottom: ${rhythm(4)}
  text-align: center
  margin: auto
  width: 80%
`

const Title = styled.h1`
  padding-top: ${rhythm(8)}
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
`
