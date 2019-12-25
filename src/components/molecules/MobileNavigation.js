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
        <List
          link
          style={{ padding: `0 ${rhythm(2)}`, fontSize: scale(0).fontSize }}
        >
          <List.Item active={active === "Home"} as={StyledLink} to="/">
            Home
          </List.Item>
          <List.Item active={active === "Blog"} as={StyledLink} to="/blog">
            Blog
          </List.Item>
          <List.Item active={active === "About"} as={StyledLink} to="/about">
            About
          </List.Item>
          <List.Item
            active={active === "Contact"}
            as={StyledLink}
            to="/contact"
          >
            Contact
          </List.Item>
        </List>
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
        {menu}
        <Nav>
          TAKIGAWA MEMO
          {icon}
        </Nav>
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
  top: 0
  right: ${rhythm(1 / 4)}
`

const StyledLink = styled(Link)`
  background-image: none;
`
