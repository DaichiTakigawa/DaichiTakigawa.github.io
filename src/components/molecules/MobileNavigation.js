import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { scale, rhythm } from "../../utils/typography"

export default class MoblieNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  render() {
    let expanded = this.state.expanded
    let active = this.props.active
    return (
      <Nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Title>TAKIGAWA MEMO</Title>
          </Link>

          <span
            className={`navbar-burger burger ${expanded ? "is-active" : ""}`}
            onClick={() => this.setState({ expanded: !expanded })}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div className={`navbar-menu ${expanded ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link
              className={`navbar-item ${active === "Home" ? "is-active" : ""}`}
              to="/"
            >
              Home
            </Link>

            <Link
              className={`navbar-item ${active === "Blog" ? "is-active" : ""}`}
              to="/blog/"
            >
              Blog
            </Link>
            <Link
              className={`navbar-item ${active === "About" ? "is-active" : ""}`}
              to="/about/"
            >
              About
            </Link>

            <Link
              className={`navbar-item ${
                active === "Contact" ? "is-active" : ""
              }`}
              to="/contact/"
            >
              Contact
            </Link>
          </div>
        </div>
      </Nav>
    )
  }
}

const Nav = styled.nav`
  text-align: center;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`

const Title = styled.span`
  font-size: ${scale(1 / 2).fontSize};
  padding-left: ${rhythm(1 / 2)};
`
