import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Divider, List, Icon } from "semantic-ui-react"

import Title from "../atoms/Title"
import { rhythm } from "../../utils/typography"

export default class Navigation extends React.Component {
  getLinkList() {
    let active = this.props.active
    let res
    if (active === "Home") {
      res = (
        <List link style={{ padding: `0 ${rhythm(2)}` }}>
          <List.Item active>Home</List.Item>
          <List.Item as={StyledLink} to="/blog">
            Blog
          </List.Item>
          <List.Item as={StyledLink} to="/about">
            About
          </List.Item>
          <List.Item as={StyledLink} to="/contact">
            Contact
          </List.Item>
        </List>
      )
    } else if (active === "Blog") {
      res = (
        <List link style={{ padding: `0 ${rhythm(2)}` }}>
          <List.Item as={StyledLink} to="/">
            Home
          </List.Item>
          <List.Item active>Blog</List.Item>
          <List.Item as={StyledLink} to="/about">
            About
          </List.Item>
          <List.Item as={StyledLink} to="/contact">
            Contact
          </List.Item>
        </List>
      )
    } else if (active === "About") {
      res = (
        <List link style={{ padding: `0 ${rhythm(2)}` }}>
          <List.Item as={StyledLink} to="/">
            Home
          </List.Item>
          <List.Item as={StyledLink} to="/blog">
            Blog
          </List.Item>
          <List.Item active>About</List.Item>
          <List.Item as={StyledLink} to="/contact">
            Contact
          </List.Item>
        </List>
      )
    } else if (active === "Contact") {
      res = (
        <List link style={{ padding: `0 ${rhythm(2)}` }}>
          <List.Item as={StyledLink} to="/">
            Home
          </List.Item>
          <List.Item as={StyledLink} to="/blog">
            Blog
          </List.Item>
          <List.Item as={StyledLink} to="/about">
            About
          </List.Item>
          <List.Item active>Contact</List.Item>
        </List>
      )
    }
    return res
  }

  getSNSLink() {
    return (
      <List
        link
        horizontal
        style={{ paddingLeft: rhythm(1), paddingTop: rhythm(2) }}
      >
        <List.Item as={Styleda} href="https://github.com/DaichiTakigawa">
          <Icon name="github" size="large" />
        </List.Item>
        <List.Item as={Styleda} href="https://twitter.com/damenin27844103">
          <Icon name="twitter" size="large" />
        </List.Item>
      </List>
    )
  }

  render() {
    return (
      <Nav>
        <Title />
        <Divider style={{ margin: `${rhythm(2)} ${rhythm(1)}` }} />
        {this.getLinkList()}
        {this.getSNSLink()}
      </Nav>
    )
  }
}

const Nav = styled.div`
  padding: ${rhythm(1)}
  background-color: white
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
  flex-grow: 0
  flex-shrink: 0
  height: 1200px
`

const StyledLink = styled(Link)`
  background-image: none;
`
const Styleda = styled.a`
  background-image: none;
`
