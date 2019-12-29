import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Icon, List } from "semantic-ui-react"
import { CSSTransition } from "react-transition-group"

import { scale, rhythm } from "../../utils/typography"

export default class MoblieNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
    this.onMount = true
  }

  getIcon() {
    return (
      <AngleIcon
        name="angle down"
        color="grey"
        size="large"
        className="angileIcon"
        onClick={e => {
          this.setState({ expanded: !this.state.expanded })
        }}
      />
    )
  }

  getMenu() {
    let active = this.props.active
    return (
      <WhiteBackground visible={this.state.expanded} className="menu">
        <StyledList link>
          <List.Item
            active={active === "Home"}
            as={StyledLink}
            to="/"
            style={{ textAlign: "center" }}
          >
            Home
          </List.Item>
          <List.Item
            active={active === "Blog"}
            as={StyledLink}
            to="/blog"
            style={{ textAlign: "center" }}
          >
            Blog
          </List.Item>
          <List.Item
            active={active === "About"}
            as={StyledLink}
            to="/about"
            style={{ textAlign: "center" }}
          >
            About
          </List.Item>
          <List.Item
            active={active === "Contact"}
            as={StyledLink}
            to="/contact"
            style={{ textAlign: "center" }}
          >
            Contact
          </List.Item>
        </StyledList>
      </WhiteBackground>
    )
  }

  render() {
    let icon = this.getIcon()
    let menu = this.getMenu()
    return (
      <div>
        <Nav bottomShadow={!this.state.expanded}>
          TAKIGAWA MEMO
          <CSSTransition
            in={this.state.expanded}
            timeout={200}
            classNames="angleIcon"
          >
            {icon}
          </CSSTransition>
        </Nav>
        <CSSTransition in={this.state.expanded} timeout={200} classNames="menu">
          {menu}
        </CSSTransition>
      </div>
    )
  }
}

const Nav = styled.div`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(3)}
  text-align: center
  background-color: white
  border: 1px solid rgb(221, 221, 221);
  box-shadow: ${props =>
    props.bottomShadow ? "rgba(0, 0, 0, 0.2) 0px 1px 2px;" : "0"}
  position: relative
  z-index: 2
`

const AngleIcon = styled(Icon)`
  float: right
  position: absolute
  top: ${rhythm(3 / 4)}
  right: ${rhythm(1 / 4)}
`

const StyledLink = styled(Link)`
  background-image: none;
`

const StyledList = styled(List)`
  font-size: ${scale(0).fontSize};
`

const WhiteBackground = styled.div`
  background-color: white
  padding: ${rhythm(1)} 0
  position: absolute
  border-bottom: 1px solid rgb(230, 230, 230);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px;
  width: 100%
  z-index: 1
  visibility: ${props => props.visible ? "visible" : "hidden"}
`
