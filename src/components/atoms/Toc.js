import React from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { Icon, Responsive } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

export default class Toc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  onClick() {
    this.setState({ expanded: !this.state.expanded })
  }

  getIcon() {
    return (
      <DownIcon
        name="caret down"
        size="big"
        color="grey"
        onClick={() => {
          this.onClick()
        }}
      />
    )
  }

  getToc() {
    let res = null
    if (this.state.expanded) {
      res = (
        <TocContainer>
          <div dangerouslySetInnerHTML={{ __html: this.props.data }} />
        </TocContainer>
      )
    }
    return res
  }

  render() {
    let expanded = this.state.expanded
    let icon = this.getIcon()
    return (
      <div>
        <Responsive as={Wrapper} minWidth={Responsive.onlyTablet.minWidth}>
          <FlexContainer>
            <H4>目次</H4>
            <CSSTransition
              in={this.state.expanded}
              timeout={200}
              classNames="angleIcon"
            >
              {icon}
            </CSSTransition>
          </FlexContainer>
          {this.getToc()}
        </Responsive>
        <Responsive
          as={MobileWrapper}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <FlexContainer>
            <H4>目次</H4>
            <CSSTransition
              in={this.state.expanded}
              timeout={200}
              classNames="angleIcon"
            >
              {icon}
            </CSSTransition>
          </FlexContainer>
          {this.getToc()}
        </Responsive>
      </div>
    )
  }
}

const Wrapper = styled.div`
  width: 60%
  margin: ${rhythm(1)} 0
  background-color: rgba(224, 224, 224, 0.5);
`
const MobileWrapper = styled.div`
  width: 100%
  margin: ${rhythm(1)} 0
  background-color: rgba(224, 224, 224, 0.5);
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center
  justify-content: space-between
`

const H4 = styled.h4`
  margin: 0
  padding-left: ${rhythm(1)}
  padding-top: ${rhythm(1)}
  padding-bottom: ${rhythm(1)}
  font-size: ${scale(1 / 6).fontSize}
  color: grey
`

const DownIcon = styled(Icon)`
  margin-right: ${rhythm(1)} !important
  &:hover {
    cursor: pointer
  }
`

const TocContainer = styled.div`
  width: 70%
  margin: 0 auto
  padding-bottom: ${rhythm(1)}
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
        background-image: none
        color: rgb(82, 82, 82);
      }
    }
  }
`
