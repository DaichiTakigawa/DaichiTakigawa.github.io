import React, { Component } from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

export default class Toc extends Component {
  state = { active: false }

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
        <div className="level">
          <div className="level-left">
            <Title>目次</Title>
          </div>
          <ClickCircle
            className="level-right"
            onClick={() => this.setState({ active: !active })}
          >
            <i className="fas fa-plus"/>
          </ClickCircle>
        </div>
        {this.getToc(active)}
      </Background>
    )
  }
}

const Background = styled.div`
  margin: ${rhythm(3)} 0 ${rhythm(1)} 0
  padding: ${rhythm(1 / 2)} ${rhythm(1)}
  background-color: rgba(224, 224, 224, 0.5);
`

const Title = styled.span`
  font-size: ${scale(1 / 6).fontSize}
  font-weight: bold
  color: rgb(87, 87, 87);
`

const ClickCircle = styled.div`
  cursor: pointer;
  width: ${rhythm(1.2)}
  height: ${rhythm(1.2)}
  border-radius: 50%
  background: rgba(156, 156, 156, 0.5);
  & > svg {
    margin: auto
  }
`

const TocContainer = styled.div`
  width: 80%
  margin: 0 auto

  &> div > ul {
      width: auto;
      li {
        color: #96acb3;
        list-style: decimal;
        line-height: ${rhythm(3 / 2)}
      }
      a {
        text-decoration: none
        text-shadow: none
        color: rgb(82, 82, 82);
      }
    }
  }
`
