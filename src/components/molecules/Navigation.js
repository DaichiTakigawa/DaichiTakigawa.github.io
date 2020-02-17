import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Title from "../atoms/Title"
import Divider from "../atoms/Divider"
import { scale, rhythm } from "../../utils/typography"

export default class Navigation extends React.Component {
  getLinkList() {
    let active = this.props.active
    let res = (
      <Menu className="manu">
        <ul className="menu-list">
          <li>
            <Link className={`${active === "Home" ? "is-active" : ""}`} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={active === "Blog" ? "is-active" : ""} to="/blog/">
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={active === "About" ? "is-active" : ""}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={active === "Contact" ? "is-active" : ""}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </Menu>
    )
    return res
  }

  getSNSLink() {
    return (
      <SNS>
        <span class="icon is-medium">
          <A href="https://github.com/DaichiTakigawa">
            <i class="fab fa-lg fa-github"></i>
          </A>
        </span>
        <span class="icon is-medium">
          <A href="https://twitter.com/damenin27844103">
            <i class="fab fa-lg fa-twitter"></i>
          </A>
        </span>
      </SNS>
    )
  }

  render() {
    return (
      <>
        <Title />
        <StyledSticky>
          <StyledDivider />
          {this.getLinkList()}
          {this.getSNSLink()}
        </StyledSticky>
      </>
    )
  }
}

const StyledDivider = styled(Divider)`
  margin: ${rhythm(2)} ${rhythm(1)};
`

const Menu = styled.nav`
  margin: ${rhythm(2)} ${rhythm(1)};
`

const SNS = styled.div`
  margin: ${rhythm(2)} ${rhythm(1)};

  & > span {
    margin-right: ${rhythm(1 / 2)};
  }
`

const StyledSticky = styled.div`
  position: sticky;
  top 0;
`

const A = styled.a`
  color: #363636

  &:hover {
    color: #3273dc;
  }
`
