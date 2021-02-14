import * as React from 'react';
import styled from '@emotion/styled';

import {rhythm, scale} from '../lib/typography';
import {responsive} from '../constants';

const Layout: React.FC = ({children}) => <Div>{children}</Div>;

const Div = styled.div({
  p: {
    fontSize: scale(0).fontSize,
    lineHeight: rhythm(1),
    margin: `${rhythm(1)} 0`,
    [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
      lineHeight: rhythm(3 / 2),
    },
  },
  blockquote: {
    paddingLeft: rhythm(1),
    borderLeft: `${rhythm(1 / 3)} solid #8fa0ba`,
    fontStyle: 'italic',
  },
});

export default Layout;
