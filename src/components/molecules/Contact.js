import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

export default class Home extends React.Component {
  render() {
    return (
      <StyledContainer>
        <Title>
          開発中
          <span role="img" aria-label="emoji">
            😢
          </span>
        </Title>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.div`
  padding-bottom: ${rhythm(4)};
  text-align: center;
  margin: auto;
  width: 80%;
  min-height: 1000px;
`

const Title = styled.h1`
  padding-top: ${rhythm(8)};
  font-size: ${scale(1).fontSize};
  line-height: ${rhythm(2)};
`
