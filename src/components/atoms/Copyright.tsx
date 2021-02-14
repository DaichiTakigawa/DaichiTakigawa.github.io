import * as React from 'react';
import styled from '@emotion/styled';

import {rhythm, scale} from '../../lib/typography';

const Copyright: React.FC = () => (
  <Footer>
    <div className="is-divider" data-content="© 2019- TAKIGAWA MEMO" />
  </Footer>
);

const Footer = styled.footer({
  height: rhythm(4),
  width: '80%',
  margin: 'auto',
  '& > .is-divider': {
    borderTop: '0.14rem solid rgba(34, 36, 38, 0.15)',
  },
  '& > .is-divider::after': {
    fontSize: scale(1 / 6).fontSize,
    paddingTop: '.1rem',
    color: 'gray',
  },
});

export default Copyright;
