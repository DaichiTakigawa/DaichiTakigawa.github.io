import * as React from 'react';
import styled from '@emotion/styled';

import {GoogleAuth} from '../../atoms';
import {rhythm, scale} from '../../../lib/typography';

interface Props {
  slug: string;
}

const LoginButtons: React.FC<Props> = ({slug}) => {
  return (
    <Container>
      <Capture>ログインしてコメントを投稿</Capture>
      <GoogleAuth slug={slug} />
    </Container>
  );
};

const Container = styled.div({
  marginTop: rhythm(1 / 2),
});

const Capture = styled.div({
  fontWeight: 'bold',
  fontSize: scale(-1 / 4).fontSize,
  lineHeight: scale(-1 / 4).lineHeight,
  marginBottom: rhythm(1 / 4),
});

export default LoginButtons;
