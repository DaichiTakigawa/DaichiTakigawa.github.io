import * as React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';
import {rhythm} from '../../../lib/typography';

import {UiContext} from '../../../contexts';

const Linklist: React.FC = () => {
  const {slug} = React.useContext(UiContext.Context);

  return (
    <Menu className={'manu'}>
      <ul className={'menu-list'}>
        <li>
          <Link
            className={slug === UiContext.TopPages.HOME ? 'is-active' : ''}
            to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className={slug === UiContext.TopPages.BLOG ? 'is-active' : ''}
            to={'/blog/'}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={slug === UiContext.TopPages.ABOUT ? 'is-active' : ''}
            to={'/about/'}>
            About
          </Link>
        </li>
        <li>
          <Link
            className={slug === UiContext.TopPages.CONTACT ? 'is-active' : ''}
            to={'/contact/'}>
            Contact
          </Link>
        </li>
      </ul>
    </Menu>
  );
};

const Menu = styled.nav({
  margin: `${rhythm(2)} ${rhythm(1)}`,
});

export default Linklist;
