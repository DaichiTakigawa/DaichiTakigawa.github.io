import styled from '@emotion/styled';

import {rhythm, scale} from '../../lib/typography';

const Tag = styled.span({
  fontSize: scale(-1 / 6).fontSize,
  background: 'rgba(204, 204, 204, 0.3)',
  borderRadius: '10%',
  marginLeft: rhythm(1 / 2),
  display: 'inline-block',
  '&::before': {
    content: `""`,
    paddingLeft: '0.5rem',
  },
  '&::after': {
    content: `""`,
    paddingRight: '0.5rem',
  },
});

export default Tag;
