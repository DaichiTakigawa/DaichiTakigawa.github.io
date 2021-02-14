import * as React from 'react';
import styled from '@emotion/styled';

import {Image} from '../../atoms';
import {rhythm} from '../../../lib/typography';

const Sns: React.FC = () => (
  <Container>
    <div>
      <span className="icon is-medium">
        <A href="https://github.com/DaichiTakigawa">
          <i className="fab fa-lg fa-github"></i>
        </A>
      </span>
    </div>
    <div>
      <span className="icon is-medium">
        <A href="https://twitter.com/damenin27844103">
          <i className="fab fa-lg fa-twitter"></i>
        </A>
      </span>
    </div>
    <Qiita>
      <a href="https://qiita.com/bob_yama">
        <Image fileName="qiita.png" alt="qiita" />
      </a>
    </Qiita>
  </Container>
);

const Container = styled.div({
  margin: `${rhythm(2)} ${rhythm(1)}`,
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'flex-end',
  '& > div': {
    marginRight: rhythm(1 / 2),
  },
});

const A = styled.a({
  color: '#363636',
  '&:hover': {
    color: '#3273dc',
  },
});

const Qiita = styled.div({
  width: rhythm(1),
  height: rhythm(1),
});

export default Sns;
