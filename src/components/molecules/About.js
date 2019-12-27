import React from "react"
import styled from "styled-components"
import { Image, Divider, Flag, Responsive } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

export default class Home extends React.Component {

  render() {
    return (
      <Segment>
        <StyledContainer>
        </StyledContainer>
      </Segment>
    )
  }
}

const Segment = styled.div`
  background-color: white
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
`

const StyledContainer = styled.div`
  padding-bottom: ${rhythm(4)}
  margin: auto
  width: 80%
`
