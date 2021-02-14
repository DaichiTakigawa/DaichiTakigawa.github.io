import * as React from 'react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

import {rhythm, scale} from '../../../lib/typography';
import {UiContext} from '../../../contexts';

const Navbar: React.FC = () => {
  const {slug} = React.useContext(UiContext.Context);
  const [state, setState] = React.useState({expand: false});

  return (
    <Container className="navbar">
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
              slug === UiContext.TopPages.HOME ? 'is-active' : ''
            }`}
            to="/">
            Home
          </Link>
          <Link
            className={`navbar-item ${
              slug === UiContext.TopPages.BLOG ? 'is-active' : ''
            }`}
            to="/blog/">
            Blog
          </Link>
          <Link
            className={`navbar-item ${
              slug === UiContext.TopPages.ABOUT ? 'is-active' : ''
            }`}
            to="/about/">
            About
          </Link>
          <Link
            className={`navbar-item ${
              slug === UiContext.TopPages.CONTACT ? 'is-active' : ''
            }`}
            to="/contact/">
            Contact
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div({
  textAlign: 'center',
  background: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 5px',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
});

const Title = styled.header({
  fontSize: scale(1 / 2).fontSize,
  paddingLeft: rhythm(1 / 2),
});

export default Navbar;
