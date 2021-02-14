import * as React from 'react';
import styled from '@emotion/styled';

import {Image} from '../../atoms';
import {UserContext} from '../../../contexts';
import {rhythm, scale} from '../../../lib/typography';

const LoginButtons: React.FC = () => {
  const {setUser} = React.useContext(UserContext.Context);

  const onClick = React.useCallback(() => {
    setUser({id: 'id', name: 'takigawa'});
  }, [setUser]);

  return (
    <Container>
      <Capture>ログインしてコメントを投稿</Capture>
      <button className={'button is-dark'} onClick={onClick}>
        <span className={'icon'}>
          <i className={'fab fa-github'}></i>
        </span>
        <span>GitHub</span>
      </button>
      <button className={'button is-link'} onClick={onClick}>
        <span className={'icon'}>
          <Image fileName={'google.png'} alt={'google'} />
        </span>
        <span>Google</span>
      </button>
    </Container>
  );
};

const Container = styled.div({
  marginTop: rhythm(1 / 2),
  '& > button:last-child': {
    marginLeft: rhythm(1 / 2),
  },
});

const Capture = styled.div({
  fontWeight: 'bold',
  fontSize: scale(-1 / 4).fontSize,
  lineHeight: scale(-1 / 4).lineHeight,
  marginBottom: rhythm(1 / 4),
});

export default LoginButtons;
