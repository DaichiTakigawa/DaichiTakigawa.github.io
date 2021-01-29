import * as React from 'react'
import {useState} from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import {rhythm, scale} from '../../../utils/typography'

type Props = {
  currentPage: string
}

const Navbar: React.FC<Props> = ({currentPage}) => {
  const [state, setState] = useState({expand: false})
  return (
    <Nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <Title>TAKIGAWA MEMO</Title>
        </Link>

        <span
          className={`navbar-burger burger ${state.expand ? 'is-active' : ''}`}
          onClick={() => setState({expand: !state.expand})}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div className={`navbar-menu ${state.expand ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link
            className={`navbar-item ${
              currentPage === 'Home' ? 'is-active' : ''
            }`}
            to="/">
            Home
          </Link>
          <Link
            className={`navbar-item ${
              currentPage === 'Blog' ? 'is-active' : ''
            }`}
            to="/blog/">
            Blog
          </Link>
          <Link
            className={`navbar-item ${
              currentPage === 'About' ? 'is-active' : ''
            }`}
            to="/about/">
            About
          </Link>
          <Link
            className={`navbar-item ${
              currentPage === 'Contact' ? 'is-active' : ''
            }`}
            to="/contact/">
            Contact
          </Link>
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav({
  textAlign: 'center',
  background: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 5px',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
})

const Title = styled.span({
  fontSize: scale(1 / 2).fontSize,
  paddingLeft: rhythm(1 / 2),
})

export default Navbar
