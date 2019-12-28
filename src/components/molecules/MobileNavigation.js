import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Icon, List } from "semantic-ui-react"

import { scale, rhythm } from "../../utils/typography"

export default class MoblieNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  getIcon() {
    let res
    if (this.state.expanded) {
      res = (
        <AngleIcon
          name="angle up"
          color="grey"
          size="large"
          onClick={e => {
            this.setState({ expanded: false })
          }}
        />
      )
    } else {
      res = (
        <AngleIcon
          name="angle down"
          color="grey"
          size="large"
          onClick={e => {
            this.setState({ expanded: true })
          }}
        />
      )
    }
    return res
  }

  getMenu() {
    let active = this.props.active
    let res
    if (this.state.expanded) {
      res = (
        <WhiteBackground>
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
    } else {
      res = null
    }
    return res
  }

  render() {
    let icon = this.getIcon()
    let menu = this.getMenu()
    return (
      <div>
        <Nav>
          TAKIGAWA MEMO
          {icon}
        </Nav>
        {menu}
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
  position: relative
`

const AngleIcon = styled(Icon)`
  float: right
  position: absolute
  top: ${rhythm(3/4)}
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
`
