import * as React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {rhythm} from '../../../utils/typography'

type Props = {
  currentPage: string
}

const Linklist: React.FC<Props> = ({currentPage}) => (
  <Menu className="manu">
    <ul className="menu-list">
      <li>
        <Link className={currentPage === 'Home' ? 'is-active' : ''} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={currentPage === 'Blog' ? 'is-active' : ''} to="/blog/">
          Blog
        </Link>
      </li>
      <li>
        <Link
          className={currentPage === 'About' ? 'is-active' : ''}
          to="/about/">
          About
        </Link>
      </li>
      <li>
        <Link
          className={currentPage === 'Contact' ? 'is-active' : ''}
          to="/contact/">
          Contact
        </Link>
      </li>
    </ul>
  </Menu>
)

const Menu = styled.nav({
  margin: `${rhythm(2)} ${rhythm(1)}`,
})

export default Linklist
