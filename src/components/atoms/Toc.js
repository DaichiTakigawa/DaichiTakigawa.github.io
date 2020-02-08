import React, { Component } from "react"
import styled from "styled-components"
import { Accordion, Icon } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

export default class Toc extends Component {
  state = { active: false }

  render() {
    const active = this.state.active

    return (
      <Background>
        <Accordion>
          <Accordion.Title
            active={active}
            onClick={e => {
              this.setState({ active: !active })
            }}
          >
            <Icon name="dropdown" color="grey" />
            <Title>目次</Title>
          </Accordion.Title>
          <Accordion.Content active={active}>
            <TocContainer>
              <div dangerouslySetInnerHTML={{ __html: this.props.data }} />
            </TocContainer>
          </Accordion.Content>
        </Accordion>
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
  color: grey
`

const TocContainer = styled.div`
  width: 80%
  margin: 0 auto
  &> div > ul {
      width: auto;
      li {
        color: #96acb3;
        list-style: decimal;
        line-height: ${rhythm(1)}
      }
      a {
        text-decoration: none
        text-shadow: none
        color: rgb(82, 82, 82);
      }
    }
  }
`
