import React, { Component } from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

import { responsive } from "../../../config"

export default class Toc extends Component {
  state = { active: true }

  getToc(active) {
    if (active) {
      return (
        <TocContainer>
          <div dangerouslySetInnerHTML={{ __html: this.props.data }} />
        </TocContainer>
      )
    }
  }

  render() {
    const active = this.state.active

    return (
      <Background>
        <FlexContainer>
          <div>
            <Title>目次</Title>
          </div>
          <ClickCircle onClick={() => this.setState({ active: !active })}>
            <span>{active ? "-" : "+"}</span>
          </ClickCircle>
        </FlexContainer>
        {this.getToc(active)}
      </Background>
    )
  }
}

const Background = styled.div`
  margin: ${rhythm(3)} 0 ${rhythm(2)} 0;
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
  background-color: rgba(224, 224, 224, 0.5);

  @media (min-width: ${responsive.tablet.minWidth}) {
    width: 56%;
  }
`

const Title = styled.span`
  font-size: ${scale(1 / 6).fontSize};
  font-weight: bold;
  color: rgb(87, 87, 87);
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ClickCircle = styled.div`
  cursor: pointer;
  width: ${rhythm(1.2)};
  height: ${rhythm(1.2)};
  border-radius: 50%;
  background: rgba(156, 156, 156, 0.5);
  text-align: center;
  & > span {
    font-weight: bold;
  }
`

const TocContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: ${rhythm(1)} 0;

  & > div > ul {
      width: auto;
      li {
        color: #96acb3;
        list-style: decimal;
        line-height: ${rhythm(3 / 2)};
        p {
          margin-bottom: 0;
        }
        ul {
          margin-top: 0;
        }
      }
      a {
        text-decoration: none;
        text-shadow: none;
        color: rgb(82, 82, 82);
      }
    }
  }
`
